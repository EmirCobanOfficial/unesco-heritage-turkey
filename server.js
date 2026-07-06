const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sql = require("mssql");

const app = express();
const port = process.env.PORT || 3000;

// Veritabanı yapılandırması ortam değişkenlerinden okunur.
// Değerler .env dosyasında tanımlanır (bkz. .env.example).
const config = {
  user: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  server: process.env.DB_SERVER || "",
  database: process.env.DB_DATABASE || "",
  options: {
    // Varsayılan olarak açık; .env'de "false" ile kapatılabilir.
    encrypt: process.env.DB_ENCRYPT !== "false",
    trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE !== "false",
  },
};

app.use(cors());
app.use(bodyParser.json());

let pool;

sql
  .connect(config)
  .then((p) => {
    pool = p;
    console.log("✅ MSSQL bağlantısı başarılı");
  })
  .catch((err) => console.error("❌ MSSQL bağlantı hatası:", err));

// Yorum ekleme
app.post("/api/yorum-ekle", async (req, res) => {
  const { yerAdi, yorum, puan } = req.body;

  if (!yerAdi || !yorum || !puan) {
    return res.status(400).json({ error: "Eksik bilgi" });
  }

  try {
    await pool
      .request()
      .input("yerAdi", sql.NVarChar(255), yerAdi)
      .input("yorum", sql.NVarChar(sql.MAX), yorum)
      .input("puan", sql.Int, puan)
      .input("tarih", sql.DateTime, new Date()).query(`
        INSERT INTO yorumlar (yerAdi, yorum, puan, tarih)
        VALUES (@yerAdi, @yorum, @puan, @tarih)
      `);

    res.json({ success: true });
  } catch (err) {
    console.error("❌ Veritabanı hatası (ekleme):", err);
    res.status(500).json({ error: "Veritabanı hatası" });
  }
});

// Yorumları çekme
app.get("/api/yorumlar/:yerAdi", async (req, res) => {
  const yerAdi = req.params.yerAdi;

  try {
    const yorumlar = await pool
      .request()
      .input("yerAdi", sql.NVarChar(255), yerAdi)
      .query(
        `SELECT * FROM Yorumlar WHERE yerAdi = @yerAdi ORDER BY tarih DESC`
      );

    const ortalama = await pool
      .request()
      .input("yerAdi", sql.NVarChar(255), yerAdi)
      .query(
        `SELECT AVG(CAST(puan AS FLOAT)) AS ortalamaPuan FROM Yorumlar WHERE yerAdi = @yerAdi`
      );

    res.send({
      yorumlar: yorumlar.recordset,
      ortalamaPuan: ortalama.recordset[0].ortalamaPuan || 0,
    });
  } catch (err) {
    console.error("❌ Yorumları çekme hatası:", err);
    res.status(500).send({ success: false });
  }
});

app.listen(port, () => {
  console.log(`🚀 Sunucu http://localhost:${port} üzerinde çalışıyor`);
});
