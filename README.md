<div align="center">

# 🗺️ Türkiye UNESCO Dünya Mirasları Haritası

### Interactive Map of Türkiye's UNESCO World Heritage Sites

Türkiye'nin **UNESCO Dünya Miras Listesi**'ndeki kültürel varlıkları etkileşimli bir harita üzerinde tanıtan, TÜBİTAK 4006-B destekli akademik web uygulaması.

_A TÜBİTAK 4006-B supported academic web application that presents Türkiye's cultural assets on the **UNESCO World Heritage List** via an interactive map._

<br />

![Durum](https://img.shields.io/badge/durum-akt%C4%B1f-brightgreen)
![TÜBİTAK](https://img.shields.io/badge/TÜBİTAK-4006--B-1f6feb)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)
![SQL Server](https://img.shields.io/badge/SQL%20Server-CC2927?logo=microsoftsqlserver&logoColor=white)

</div>

---

## 📑 İçindekiler / Table of Contents

- [🎯 Amaç / Purpose](#-amaç--purpose)
- [🔍 Özellikler / Features](#-özellikler--features)
- [💻 Teknolojiler / Technologies](#-teknolojiler--technologies)
- [🏗️ Mimari / Architecture](#️-mimari--architecture)
- [🚀 Kurulum / Getting Started](#-kurulum--getting-started)
- [🔌 API Uç Noktaları / API Endpoints](#-api-uç-noktaları--api-endpoints)
- [📷 Ekran Görüntüleri / Screenshots](#-ekran-görüntüleri--screenshots)
- [🎪 Proje Sergisi / Project Exhibition](#-proje-sergisi--project-exhibition)
- [🤝 Katkıda Bulunma / Contributing](#-katkıda-bulunma--contributing)
- [📄 Lisans / License](#-lisans--license)
- [🙋 İletişim / Contact](#-iletişim--contact)

---

## 🎯 Amaç / Purpose

Kullanıcıların Türkiye'nin tarihi ve kültürel mirasları hakkında bilgi edinmesini sağlamak; bu yerlerin fotoğraflarını, yazılı ve sesli açıklamalarını, galeri görsellerini ve 360° sanal gezinti bağlantılarını **tek bir platformda** sunmaktır.

> _To enable users to learn about Türkiye's historical and cultural heritage; presenting each site's photos, written and audio descriptions, gallery images, and 360° virtual tour links on **a single platform.**_

---

## 🔍 Özellikler / Features

- 🗺️ **Google Maps tabanlı interaktif harita** — Google Maps JavaScript API ile işaretlenmiş miras alanları
- 📍 **Marker bilgi pencereleri** — Bir işaretçiye tıklandığında açılan detay penceresi:
  - 📸 Tanıtım fotoğrafı ve galeri
  - 📖 Yazılı açıklama
  - 🔊 Sesli anlatım (Web Speech API)
  - 🌀 360° sanal tur bağlantısı
- 🗨️ **Yorum ve puanlama sistemi** — Her yer için kullanıcı yorumları, yıldızlı puanlama ve ortalama puan hesaplama
- 🗃️ **Kalıcı veri** — Yorumlar **SQL Server (MSSQL)** veritabanında saklanır
- 🌐 **Türkçe arayüz** — Akademik sunum için tamamen Türkçeleştirilmiş içerik

> _Interactive Google Maps, per-marker info windows (photo, gallery, text, audio narration via Web Speech API, 360° tour), a comment & star-rating system with average scores, and persistent storage on SQL Server._

---

## 💻 Teknolojiler / Technologies

| Katman / Layer | Teknoloji / Technology |
| --- | --- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Harita / Map** | Google Maps JavaScript API |
| **Sesli Anlatım / Narration** | Web Speech API |
| **Backend** | Node.js, Express.js |
| **Veritabanı / Database** | Microsoft SQL Server (MSSQL) |

---

## 🏗️ Mimari / Architecture

Proje iki bileşenden oluşur:

- **İstemci (Frontend):** Statik HTML/CSS/JS sayfaları. Harita, işaretçiler, bilgi pencereleri ve yorum arayüzü tarayıcıda çalışır.
- **Sunucu (Backend):** Express tabanlı REST API. Yorumların eklenmesi ve listelenmesi için MSSQL ile konuşur.

```
Tarayıcı (Google Maps + Web Speech API)
        │  fetch (JSON)
        ▼
Express REST API  ──►  SQL Server (Yorumlar tablosu)
```

---

## 🚀 Kurulum / Getting Started

> **Not / Note:** Aşağıdaki adımlar `.env` tabanlı yapılandırmayı ve `npm` betiklerini içerir. Yapılandırma ve bağımlılık altyapısı yol haritasındaki ilgili PR'larla eklenmektedir.

### Ön Koşullar / Prerequisites

- [Node.js](https://nodejs.org/) `>= 18`
- [Microsoft SQL Server](https://www.microsoft.com/sql-server) (yerel veya uzak örnek)
- Bir [Google Maps JavaScript API anahtarı](https://developers.google.com/maps/documentation/javascript/get-api-key)

### Adımlar / Steps

```bash
# 1) Depoyu klonlayın / Clone the repository
git clone https://github.com/EmirCobanOfficial/tubitak.git
cd tubitak

# 2) Bağımlılıkları kurun / Install dependencies
npm install

# 3) Ortam değişkenlerini ayarlayın / Configure environment variables
cp .env.example .env
#   → .env içindeki veritabanı bilgilerini doldurun

# 4) Sunucuyu başlatın / Start the server
npm start
```

### Google Maps Anahtarı / Google Maps Key

`harita.html` içindeki `YOUR_GOOGLE_MAPS_API_KEY` placeholder'ını kendi API anahtarınızla değiştirin. Güvenlik için Google Cloud Console'da anahtara **HTTP referrer kısıtlaması** eklemeniz önerilir.

> _Replace the `YOUR_GOOGLE_MAPS_API_KEY` placeholder in `harita.html` with your own key. Restricting the key by HTTP referrer in Google Cloud Console is strongly recommended._

### Veritabanı Şeması / Database Schema

Yorumlar için gerekli tablo / Table required for comments:

```sql
CREATE TABLE Yorumlar (
    id      INT IDENTITY(1,1) PRIMARY KEY,
    yerAdi  NVARCHAR(255)     NOT NULL,
    yorum   NVARCHAR(MAX)     NOT NULL,
    puan    INT               NOT NULL,
    tarih   DATETIME          NOT NULL
);
```

---

## 🔌 API Uç Noktaları / API Endpoints

| Metot / Method | Uç Nokta / Endpoint | Açıklama / Description |
| --- | --- | --- |
| `POST` | `/api/yorum-ekle` | Bir yere yorum ve puan ekler / Adds a comment and rating to a site |
| `GET` | `/api/yorumlar/:yerAdi` | Bir yerin yorumlarını ve ortalama puanını döndürür / Returns a site's comments and average rating |

**Örnek / Example** — yorum ekleme:

```http
POST /api/yorum-ekle
Content-Type: application/json

{
  "yerAdi": "Göbekli Tepe",
  "yorum": "Muhteşem bir arkeolojik alan!",
  "puan": 5
}
```

---

## 📷 Ekran Görüntüleri / Screenshots

| 📍 Marker | 📌 Marker'a Tıklama | ✍️ Yorum Ekleme | 🗨️ Yorumlar | 🖼️ Galeri |
| :---: | :---: | :---: | :---: | :---: |
| ![marker](https://github.com/user-attachments/assets/885bef1f-586f-4c52-bd1b-22400770c6a9) | ![tıklama](https://github.com/user-attachments/assets/2adc113f-391f-4def-9a0d-0cc473b03d99) | ![yorum-ekleme](https://github.com/user-attachments/assets/1d7acf36-d31e-422b-9f6c-3ae7bc67c120) | ![yorumlar](https://github.com/user-attachments/assets/90e594f8-18eb-4c1b-99bc-215623b52978) | ![galeri](https://github.com/user-attachments/assets/934c31a2-428f-4d42-8660-e844b1c7381a) |

---

## 🎪 Proje Sergisi / Project Exhibition

> **TÜBİTAK 4006-B Bilim Fuarı** kapsamında okulumuzda gerçekleşen proje sergisinden kareler (14–15 Mayıs 2025).
> _Moments from the project exhibition held at our school within the **TÜBİTAK 4006-B Science Fair** (May 14–15, 2025)._

Sergiye katılan değerli konuklar / Distinguished guests at the exhibition:

- **Demirci Belediye Başkanı / Mayor of Demirci:** Erkan Kara
- **Demirci Ticaret ve Sanayi Odası Başkanı / President of the Chamber of Commerce:** Kasım Kabak
- **Demirci İlçe Millî Eğitim Müdürü / District Education Director:** Bilal Çetinkaya
- **Demirci Ahi Evran M.T.A.L. Müdürü / School Principal:** Ahmet Raşit Petekci

![sergi-1](https://github.com/user-attachments/assets/533a446e-a669-4821-a42d-643ef9226ac1)
![sergi-2](https://github.com/user-attachments/assets/d500cd47-80c9-4ed9-97b1-bbf282da0e76)

---

## 🤝 Katkıda Bulunma / Contributing

Katkılarınızı memnuniyetle karşılıyoruz! Katkı süreci şu şekilde işler:

1. Depoyu **fork**'layın.
2. Bir özellik dalı oluşturun (`git checkout -b ozellik/harika-ozellik`).
3. Değişikliklerinizi anlamlı commit mesajlarıyla kaydedin.
4. Dalınızı **push**'layıp bir **Pull Request** açın.

`main` dalı korumalıdır: tüm değişiklikler PR incelemesinden ve durum kontrollerinden (status checks) geçtikten sonra birleştirilir.

> _Contributions are welcome. Fork the repo, create a feature branch, commit with meaningful messages, and open a Pull Request. The `main` branch is protected — all changes are merged after PR review and passing status checks._

Detaylı yönergeler için `CONTRIBUTING.md` dosyasına bakın (yol haritasında eklenmektedir).

---

## 📄 Lisans / License

Bu proje bir TÜBİTAK 4006-B Bilim Fuarı çalışmasıdır. Lisans bilgisi `LICENSE` dosyasında belirtilecektir.

> _This project is a TÜBİTAK 4006-B Science Fair work. License details will be provided in the `LICENSE` file._

---

## 🙋 İletişim / Contact

**Emir Çoban** — Demirci Ahi Evran Mesleki ve Teknik Anadolu Lisesi

Bu proje, TÜBİTAK 4006-B Bilim Fuarı kapsamında okulumuz tarafından başvurusu yapılıp kabul edilmiş; tüm yazılım geliştirme süreci bireysel olarak tarafımdan yürütülmüştür.

> _This project was applied for and accepted within the TÜBİTAK 4006-B Science Fair by our school; the entire software development process was carried out individually by me._

<div align="center">

⭐ Projeyi beğendiyseniz yıldız vermeyi unutmayın! / If you like the project, please leave a star!

</div>
