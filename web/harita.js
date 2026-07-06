let map;
let currentInfoWindow = null; // Açık olan infoWindow'u takip etmek için

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.925533, lng: 32.866287 },
    zoom: 7,
    restriction: {
      strictBounds: false,
    },
  });

  const unescoYerleri = [
    {
      name: "Divriği Ulu Camii ve Darüşşifası",
      lat: 39.750359,
      lng: 37.015598,
      desc: "Sivas'ın Divriği ilçesinde bulunan 13. yüzyıl başlarına ait cami ve hastane külliyesi, 1985 yılında UNESCO Dünya Mirası Listesi'ne kaydedilmiştir. Külliye, erken dönem Anadolu İslam mimarisinin etkileyici bir örneğini sunmaktadır. Özellikle iç mekandaki özenli taş kemer yapıları ve caminin taç kapılarındaki ustalıklı taş oymaları, her bir taç kapının motifleri ve taş oymacılığı açısından benzersiz olması, caminin başyapıt olma niteliğini pekiştirmekte ve birden fazla zanaatkarın elinden çıktığına işaret etmektedir. Taç kapıların yanı sıra, sütunların tüm kaideleri, şaftları ve başlıkları ile kubbe ve kemerlerin iç yüzeyi farklı ve kendilerine özgü bir tarzda işlenmiştir. Dini külliyeye hastanenin de dâhil edilmesi, bölgedeki mekân inşa etme kültürünü ortaya koyarken avlu ya da sütunların bulunmaması gibi alışılmadık özellikleri de camiyi Selçuklu mimarisinin sıra dışı bir örneği haline getirmektedir",
      imgs: [
        {
          src: "https://kulturportali.gov.tr/contents/images/20170504113540487_Darussifa%20Tac%20Kapi1.jpg",
          caption: "",
        },
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXc-jFmz61oqVijgC7H3MubCQgrTaN1jRarn-ktRGGs1H4x3rghtxY2KYdjmALZ9_NEsURDaMVGrjIHzZQ2-jkOAw5I4puePrqGrM-oPIYZ7UHRRrhIs8cBjBQF8iuXdn8lt5Rra7usz_lJB2PBKRsjL5M7Tdgu2FBWzvIh86Q?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://seyahatdergisi.com/wp-content/uploads/2018/07/Divrig%CC%86i-Ulu-Camii-ici.jpg",
          caption: "",
        },
        {
          src: "https://seyahatdergisi.com/wp-content/uploads/2018/07/Divrigi-Darussifa-640x427.jpg",
          caption: "",
        },
        {
          src: "https://seyahatdergisi.com/wp-content/uploads/2018/07/Divrigi-Ulu-Camii-Cennet-Kapisi-640x480.jpg",
          caption: "",
        },
      ],
      link: "sivas.html",
    },
    {
      name: "Göreme Millî Parkı ve Kapadokya",
      lat: 38.626995,
      lng: 34.719975,
      desc: "Türkiye'de yer alan iki karma miras alanından biri olan Nevşehir'deki Göreme Millî Parkı, peri bacaları olarak adlandırılan oluşumlarla kaplı volkaRnik manzarasıyla ünlüdür. Doğal güzelliğinin yanı sıra Tokalı Kilise, El Nazar Kilisesi, Azize Barbara Kilisesi, Saklı Kilise, Elmalı Kilise ve Karanlık Kilise gibi İkonoklastik sonrası Orta Bizans dönemi (10. - 12. yüzyıl) Bizans kiliselerinin kaya oyma mimarisine de ev sahipliği yapmaktadır. Kiliselerinin canlı ve büyüleyici Bizans freskleri, doğal manzarasının çarpıcı güzelliği ve buna uygun olarak gelişen mimarisi, Kapadokya'yı 1985 yılından bu yana UNESCO Dünya Mirası Listesi'nde bulunan, evrensel, kültürel ve doğal öneme sahip eşsiz bir alan haline getirmektedir",
      imgs: [
        {
          src: "https://basin.ktb.gov.tr/Resim/35384,dsc4376jpg.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/35398,dsc4737jpg.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/35410,cf003512jpg.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/35409,l1000098jpg.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/35408,dsc36962-0-1-21tonemappedjpg.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/35407,cf003706-copyjpg.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/35406,dsc4722jpg.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/35405,dsc4711jpg.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/35404,untitledpanorama1jpg.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/35403,dsc0980jpg.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/35402,dsc0967jpg.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/35401,dsc0960jpg.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/35400,dsc0961jpg.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/35399,dsc4149jpg.png?0",
          caption: "",
        },
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf0xk--ewmUgJn5mkNTccpTt65T3Jbe2Y0wWiKwZ4yclL6VKp6IKg6Qnk-zlDwVTVgKStiB_IQstWUuoAYkoRxXF9EAhQTH6uTknaMc9P2jZJwLjbcVONINRA4Slf-KP9aTDvmheNhntjR5k2be0OxaQnwIx9uzLmVS42xSrw?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/0268-KAPADOKYA-BALON%20TURU-ROBERT%20M_%20KNIGHT-11-21-2013.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/0265-KAPADOKYA-%c3%9c%c3%87H%c4%b0SAR-ROBERT%20M_%20KNIGHT-11-20-2013.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/0327-KAPADOKYA-G%c3%96REME-ROBERT%20M%20KNIGHT-11-20-2013.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/0224-KAPADOKYA-G%c3%96REME-MA%c4%9eARA%20EVLER-ROBERT%20M_%20KNIGHT-11-21-2013.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
      ],
      link: "https://sanalmuze.gov.tr/muzeler/NEVSEHIR_GOREME_ACIKHAVA_MUZESI/",
    },
    {
      name: "Hattuşa: Hitit Başkenti",
      lat: 40.54889,
      lng: 34.95333,
      desc: "Çorum ilinde bulunan Hattuşa arkeolojik alanı, Tunç Çağı'nda Anadolu'da hüküm süren Hitit İmparatorluğu'nun başkentiydi. İmparatorluk başkentinin iyi korunmuş kalıntıları arasında şehir surları, surlar, ünlü Aslanlı Kapı da dâhil olmak üzere geçitler, tapınaklar, saraylar ve Yazılıkaya kaya tapınağındaki Hitit kabartma sanatının ve yazıtlarının dikkat çekici örnekleri yer almaktadır. Bu arkeolojik alan Hitit tarihi, dini, dili ve sanatı açısından paha biçilmez bir kaynaktır. Hattuşa, kentsel organizasyonu, korunmuş yapı çeşitleri ve zengin süslemeleri ve kaya sanatı bütünü ile dikkat çeken bir arkeolojik alandır. Hattuşa 1986 yılında UNESCO Dünya Mirası Listesi'ne kaydedilmiştir",
      imgs: [
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeQF2nu7C4lEmcnY3DrWxQZRV_StATs9KnOkAYYCocDNKIfGAMTBLQyLkuzaHay6FUAM1anWmMyVRUn1Xk6MXBrAEh6o6risxpTuN_vafFr7gtMWbidLmW8sBilE73aFrE4A_PExHxxDJXKsO8WviefxOqqqADzftZCxynSjg?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/shutterstock_584645605.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/shutterstock_77387965.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Yerkap%c4%b1%20Sfenksleri.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/B%20odas%c4%b1%20Tanr%c4%b1%20%c5%9farruma%20ve%20Kral%20tutaliya.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
      ],
      link: "https://sanalmuze.gov.tr/muzeler/CORUM_HATTUSA_ORENYERI/",
    },
    {
      name: "Nemrut Dağı",
      lat: 37.76441,
      lng: 38.27629,
      desc: "Adıyaman ilindeki Nemrut Dağı, geç Helenistik dönemin en görkemli anıtlarından biridir. Tanrılar, hayvanlar, Antiokhos'un Pers ve Makedon ataları gibi figürlerin devasa kireçtaşı heykelleri ve kültürel açıdan önemli stel sahneleri, yapıyı Kommagene Krallığı'nın zengin ve ikili kültürünün görsel bir kanıtı haline getirmektedir. Devasa heykellerin ve ortostatların (steller) inşasında, bu dönem için başka hiçbir yerde eşine rastlanmayan son derece gelişmiş bir teknoloji kullanılmıştır. I. Antiokhos'un Nemrut mozolesi 1987 yılında UNESCO Dünya Mirası Listesi'ne kaydedilmiştir",
      imgs: [
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXddBsW0m8ff3gpUOKXhK6qlO4Z73JHUfnPuLaGK99l9dbU7t6w8Dvrk_215Lt2_aFYjAzrsao4RoSwk1ZK-G9KricVd4rK6PcABAZ9tUp3F27tlBQt-8EFkLWs5XwSKnNed09bpK8cUYGM3OwT8EZe4R2ALA6UdGjJH6tBG?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/efd0bd78-44d6-4acd-ae20-389dbe4b25a3.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/14a546ce-4133-4ed5-b215-645d44424482.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/7e2ea88b-972a-486e-bd2e-23fb1cf8d8ec.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/042171ec-6b93-4a5a-8fec-cdb7ad73ae21.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/7a090d5e-5480-4fa7-a111-d9515e8042ca.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/6713ace2-99d2-4c01-a43e-cb2b3e6e5851.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/983f3ad6-e042-4d51-9e74-a0be027e0c42.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/3adba207-ae8b-4b0b-a692-e2b6f3d83f78.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/d4fe4533-a213-47e0-b582-fd85332d99ae.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/f1b02c0c-0547-40cb-90d5-523b71a60856.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Nemrut%20%c3%96renyeri%20(1)%20kopya.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Nemrut%20%c3%96renyeri%20(12)%20kopya.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/_R1A1055%20kopya.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Nemrut%20%c3%96renyeri%20(8)%20kopya.jpg",
          caption: "",
        },
      ],
      link: "https://sanalmuze.gov.tr/muzeler/ADIYAMAN_NEMRUT_ORENYERI/",
    },
    {
      name: "Hieropolis – Pamukkale",
      lat: 37.783333,
      lng: 29.094715,
      desc: "Türkiye'nin UNESCO Dünya Mirası Listesindeki ikinci karma miras alanı olan Hieropolis-Pamukkale, Denizli ilinde bulunmaktadır. Alan, hem antik kaplıca kenti Hieropolis'e hem de akan termal suyun içindeki minerallerin meydana getirdiği büyüleyici doğal manzaraya ev sahipliği yapmaktadır. MÖ 2. yüzyıldan MS 2. yüzyıla kadar iyi korunmuş Greko-Romen hamamları, tapınak kalıntıları, kemerler, tiyatro, çeşme ve Hieropolis nekropolünün yanı sıra 5. yüzyıldan kalma Aziz Philip şehitliği ve Bizans İmparatorluğu döneminde bölgenin dini bir merkez haline geldiği dönemden kalma kiliseleri görmek hâlâ mümkündür. Bu kültürel mirasla doğal peyzajın birleşimi, Hieropolis-Pamukkale'nin 1988 yılında UNESCO Dünya Mirası Listesi'ne kaydedilmesini sağlamıştır",
      imgs: [
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcIGFSiasdE9u7xyqtRTzw5xbjK1_DsPfwhxTkk1zkHMmMFIpZTjHi7lfbB08gy91_1yynxIRSdpolPoHfpZvBWzFYheTBAsNta7fGjTTJXjSwqDgqzXUCNSMXpGtjzscBPY1rRzDLDjMEE5OxBms-bWS39Bxk2ZTWjH0xi?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/20181218112945723_20170505152407842_360_20170309100951302.jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/Hierapolis%20%c3%96renyeri%20(5).jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/20181218112859579_20171004140623003_Pamukkale_66338269.jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/Hierapolis%20%c3%96renyeri%20(4).jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/20181218112846631_20171004140610117_DENIZLI%20KULTUR%20VARLIKLARI%20VE%20MUZELER%20GN_MD_%20(38).jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/Hierapolis%20%c3%96renyeri%20(2).jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/20181218112704965_20170505155542060_001%20Pamukkale%20%20Hierapolis%20(2013)%20Umut%20OZDEMIR.jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/20181218112915818_20171004140634500_THK%20ORHAN%20OZGULBAS%20DENIZLI%20PAMUKKALE%20Hierapolis%20(3).jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/20181218112817412_20171004140544736_DENIZLI%20KULTUR%20VARLIKLARI%20VE%20MUZELER%20GN_MD_%20(14).jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/a07dd81c-8aa9-4bca-b0f2-dc3356228759.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/4874cef4-f12c-4909-b9d8-e2f98c0ab715.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/14156e3b-b2ba-43ad-aa95-be836ae9f21c.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/796f3ab5-5271-4b91-9da6-1b8601a282cf.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/4df39f95-14ba-489c-83cd-6d085a3800d8.jpg",
          caption: "",
        },
      ],
      link: "https://sanalmuze.gov.tr/muzeler/DENIZLI_HIERAPOLIS_ORENYERI/",
    },
    {
      name: "Xanthos – Letoon",
      lat: 36.884804,
      lng: 30.704044,
      desc: "Antalya ve Muğla illeri sınırında yer alan Xanthos-Letoon antik yerleşimleri, Likya'nın Demir Çağı uygarlığının araştırılması için büyük önem taşıyan alanlardır. Anadolu, Yunan, Roma ve Bizans kültürlerini bir arada sunan Xanthos-Letoon yerleşimleri, Hint-Avrupa dilleri üzerine yapılan çalışmalarda kullanılan Likya dilindeki son derece önemli yazıtları da muhafaza etmektedir. Likya'nın başkenti Xanthos, Halikarnas Mozolesi'ne ilham verdiği düşünülen Nereid Anıtı gibi mimaride benzersiz bir Helenistik etki sergiler. Öte yandan Letoon, birçok dini ve siyasi mimarinin yanı sıra Likçe, Yunanca ve Aramice dillerinde yazılmış son derece değerli üç dilli bir yazıt ile kült merkezi ve devlet mabedi olarak hizmet vermiştir. Xanthos ve Letoon, 1988 yılında UNESCO Dünya Mirası Listesi'ne kaydedilmiştir",
      imgs: [
        {
          src: "https://www.turkishmuseums.com/Uploads//Blog/Foto/Foto%C4%9Fraflar/ad473802-8673-4185-aac8-6be3d532e902.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads//Blog/Foto/Foto%C4%9Fraflar/a56feb5f-6faf-4308-9a97-d458eba13b2b.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/5107e696-d790-42f8-9eb2-b4af45151354.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/31e5c63f-dc6a-4059-9025-e32b837ebc7f.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/e7e478a9-9582-482a-a13d-86d496fe08e7.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/6bff7e51-3c15-4a02-9b6c-58336b27e9b7.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/bb54b103-b932-4ce5-834d-4552ee1cab77.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/b4843ba1-8646-469a-ae00-55bbd9628757.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/6e1f71dc-bdbb-469f-8b0e-033978795c74.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/7e44b5d5-8842-4163-982b-9ae88771cef0.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/e97643e7-a8eb-4fc5-a9a2-9ee50aa5b6b3.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/5dabe24e-5775-4931-8789-104873ec7e8d.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/004%20Xanthos-%20Letoon%20(2013)%20Umut%20%c3%96ZDEM%c4%b0R.JPG?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/001%20Xanthos-%20Letoon%20(2013)%20Umut%20%c3%96ZDEM%c4%b0R.JPG?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/005%20Xanthos-%20Letoon%20(2013)%20Umut%20%c3%96ZDEM%c4%b0R.JPG?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/002%20Xanthos-%20Letoon%20(2013)%20Umut%20%c3%96ZDEM%c4%b0R.JPG?format=jpg&quality=50&width=1200",
          caption: "",
        },
      ],
      link: "letoon.html",
    },
    {
      name: "Safranbolu Şehri",
      lat: 41.195756,
      lng: 32.621713,
      desc: "Günümüzde Karabük'te bulunan Osmanlı kenti Safranbolu, 13. yüzyıldan itibaren kervan ticaretinde önemli bir rol oynamış, bu da bir zamanlar Avrupa ile Doğu'yu birbirine bağlayan kervan yolları varlığını yitirmiş olsa da, ticaret merkezlerinin yakınındaki yerleşimlerin kentsel gelişimine yol açmıştır. Şehrin karakteristik kamusal ve konut mimarisi, en kayda değer yönlerinden biridir ve şehrin üç tarihî bölgesi, buralarda yaşayan nüfusun sosyo-kültürel kimliğine göre farklı mimari tarzlara sahiptir. 1994 yılında UNESCO Dünya Mirası Listesi'ne kaydedilen Safranbolu Şehri, kültürel kimlik, ekonomik durum ve kentsel gelişim arasındaki ilişkinin etkileyici bir örneğidir",
      imgs: [
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXclrjsHnIX3I8UldmIeDlqqaelftAIaf0oIwEIIe3UkPx2D3WX6DWxi3aSb3NcFqBJ19pR9FREh2Y0ViOKYUJT7A-w8vJFLThrzM5MhfwkP7FjmVFIILME8JgVh5LqPNK7bdyz6sGZEdWcLQIUSyE23ey6gpo48-drgeFmoaw?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Karab%c3%bck-Safranbolu-G%c3%bclcanAcar%20(1)(1).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/07-safran%c3%a7i%c3%a7e%c4%9fi-g%c3%bclcanacar%20(34)(1).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Karab%c3%bck-Safranbolu-%20G%c3%bclcan%20Acar%20(2)(1).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/KARAB%c3%9cK-SAFRANBOLU-SOKAK-G%c3%9cLCANACAR%20(3)(2).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/KARAB%c3%9cK-SAFRANBOLU--G%c3%9cLCANACAR%20(14)(1).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Karab%c3%bck%20Safranbolu%20Murat%20%c3%96CAL%201235(1).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Karab%c3%bck-Safranbolu-safran%20%c3%a7i%c3%a7e%c4%9fi-G%c3%bclcanAcar%20(7)(1).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
      ],
      link: "https://www.360safranbolu.com/",
    },
    {
      name: "Truva Antik Kenti",
      lat: 40.14556,
      lng: 26.40639,
      desc: "Çanakkale'de bulunan ve belki de dünyanın en ünlü arkeolojik alanı olan Truva, MÖ 12. yüzyıldaki kuşatmasının Homeros'un İlyada'sında Truva Savaşı olarak ölümsüzleştirilmesi dolayısıyla insanlık tarihinin en önemli alanlarından biri olmuştur. Truva ören yerinin mirası Homeros'un kimliğiyle bu denli iç içe geçmiş olduğundan, 19. yüzyıldan bu yana arkeologların ilgisini çekmektedir. Bu nedenle, sadece bölgede yaşayan halklarla sınırlı kalmayıp aynı zamanda arkeolojinin bir disiplin olarak gelişimine de tanıklık eden ve binlerce yıldır Avrupa ile Asya arasında kültürel bir köprü olan Truva'da yüzyılı aşkın bir süredir kapsamlı kazılar yapılmaktadır. Truva, Helenistik, Greko-Romen ve Osmanlı yerleşimleri de dâhil olmak üzere 4.000 yıl boyunca burada yaşamış çeşitli uygarlıkları bir araya getiren üstü evrensel değeri ve mimarisi, görsel sanatlar ve edebiyat gibi alanlardaki paha biçilemez kültürel etkisi nedeniyle 1998 yılında UNESCO Dünya Mirası Listesi'ne kaydedilmiştir",
      imgs: [
        {
          src: "https://assosrehberi.com/wp-content/uploads/2018/11/truva-antik-kenti2.jpg",
          caption: "",
        },
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXeSLfJuOtCzeCz8VL5KvMX7PGhIY9bTlw3DAmrK0TW4diNKzVY_nxiO938_SO7pFU3M0CrYa_ekwGVg5o7cclVi1e-OEnVpNW-GDHIJETzsGiS6KROUI2ASCI4d4yAg1Rl_kFMlrJlpRWtvhTzZyXE5LcFYsst9ZCJyaN3_?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/02shutterstock_551220970.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/005%20Troya%20Antik%20Kenti%20(2014)%20Umut%20%c3%96ZDEM%c4%b0R.JPG?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/shutterstock_626443904.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/35509,dsc6398399400401402403404enhancerjpg.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/35511,l100048889909192enhancerjpg.png?0",
          caption: "",
        },
      ],
      link: "truva.html",
    },
    {
      name: "Edirne Selimiye Camii ve Külliyesi",
      lat: 41.674965,
      lng: 26.583481,
      desc: "II. Selim tarafından Edirne'de yaptırılan ve 16. yüzyılın ünlü Osmanlı mimarlarından Mimar Sinan'ın ‘ustalık eserim’ olarak nitelendirdiği Selimiye Camii ve Külliyesi, Osmanlı külliye mimarisinin önemli bir örneğidir. Görsel açıdan çarpıcı olan bu muazzam külliye, caminin yanı sıra Osmanlı bezemelerinin İznik çinileri de dâhil olmak üzere en güzel örneklerini sunan avlusu, çarşısı, el yazması kütüphanesi ve eğitim kurumlarına da ev sahipliği yapmaktadır. İznik çinilerinin üretiminin en yoğun olduğu dönemden kalma iç dekorasyon, bu malzemede halen rakipsiz olan bir sanat formuna tanıklık etmektedir. Teknik planlaması ve inşası açısından tam bir şaheser olan Selimiye Camii ve Külliyesi, Sinan'ın yaratıcı dehasının en büyük kanıtı ve kuşkusuz Osmanlı'nın altın çağının en büyük yansımalarından biridir. Yüzyıllardır ziyaretçilerini büyüleyen ve son derece iyi muhafaza edilmiş olan Selimiye, 2011 yılından bu yana UNESCO Dünya Mirası Listesi'nde yer almaktadır",
      imgs: [
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXda_1SdfSx97wfnbgYerp7F9hSkYZ3TvIUNu4V5tSO8KLevIxdFtIumcbL-E-jtlUgXQs2ZJTzAo8pylQw5TmNdO_2xOepdtQO-q41c--EXQMn4DSTXtCn34TH_NIFGvUw9H-Y1GJAToNcuvpwT6NfwCsH6GUZ-Y9Nmlscjvw?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/THK-ORHAN%20%c3%96ZG%c3%9cLBA%c5%9e-ED%c4%b0RNE-Selimiye%20Camii%20kopya%202.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ED%c4%b0RNE%20Selimiye%20Camii%20Servet%20UYGUN%20(298)%20kopya(1).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ED%c4%b0RNE%20Selimiye%20Camii%20Servet%20UYGUN%20(316)%20kopya.jpg?format=jpg&quality=50&width=12000",
          caption: "",
        },
      ],
      link: "edirne.html",
    },
    {
      name: "Çatalhöyük Neolitik Alanı",
      lat: 37.874641,
      lng: 32.493156,
      desc: "Konya ilinde bulunan Çatalhöyük ören yeri, M.Ö. 7.400'lere uzanan geçmişiyle dünyanın en eski neolitik alanlarından biridir. Büyüklüğü ve iyi korunmuş durumuyla benzersiz olan Çatalhöyük, günümüze ulaşan duvar resimleri, insan eliyle yapılmış heykelcikler ve sokağı olmayan, arka arkaya sıralanmış yerleşim alanlarından oluşan kendine özgü kentsel düzeniyle bu yılları eşsiz bir şekilde aydınlattığından, erken Neolitik yerleşimleri anlamak açısından en önemli yerlerden biri konumundadır. Çatalhöyük'ün 18 katmana varan stratigrafisi, kentsel bir alan olarak incelenmesi ve tarımsal yaşama ilk geçiş yapanlar olarak Çatalhöyük halkının kültürünün araştırılması, bu alanı erken insanlık tarihinin anlaşılmasında kilit noktalardan biri haline getirmektedir. Çatalhöyük'ün kentsel yerleşim planı ve kazılarda ortaya çıkarılan in situ malzemeler, bu erken dönem yerleşimlerine ve topluluklarına ışık tutmaya devam etmektedir. Çatalhöyük Neolitik Alanı, 2012 yılında UNESCO Dünya Mirası Listesi'ne kaydedilmiştir",
      imgs: [
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf_8_F0qAdIMA9e4VDMbwzjOtX5iD1ZxA0FKl_7JCP8S5WhrhWTReUfCmK6fF9RxriNgCFPdipGXJuCQsCIlJ5LgjfdquHFar8ZWq-cTSY2EY3kZ_OVH8w4C2fW2KuKIVCL5J5L9OVpxyXz38iKAxtk78MMAEfD0ZhEDd0?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/%c3%87atalh%c3%b6y%c3%bck%20%c3%96renyeri%20(3)%20kopya.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/%c3%87atalh%c3%b6y%c3%bck%20%c3%96renyeri%20(14)%20kopya.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/%c3%87atalh%c3%b6y%c3%bck%20%c3%96renyeri%20(8)%20kopya.jpg",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/36377,catalhoyuk1.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/36378,catalhoyuk2.png?00",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/36379,catalhoyuk3.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/36380,catalhoyuk4.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/36381,catalhoyuk5.png?0",
          caption: "",
        },
        {
          src: "https://basin.ktb.gov.tr/Resim/36382,catalhoyuk6.png?0",
          caption: "",
        },
      ],
      link: "https://sanalmuze.gov.tr/muzeler/KONYA-CATALHOYUK-ORENYERI/",
    },
    {
      name: "Bursa ve Cumalıkızık: Osmanlı İmparatorluğunun Doğuşu", //
      lat: 40.193298,
      lng: 29.074202,
      desc: "2014 yılında UNESCO Dünya Mirası Listesi'ne kaydedilen bu seri miras alanı, Bursa ve yakınlarındaki Cumalıkızlık köyünde bulunan ve 14. yüzyılın başları ile 15. yüzyılın ortaları arasında Osmanlı İmparatorluğu'nun ve ilk başkenti Bursa'nın kuruluş dönemine ilişkin sekiz kentsel ve kırsal alanı kapsamaktadır. Bu alanlar arasında ticari hanlar bölgesi ve ilk beş Osmanlı sultanı tarafından inşa ettirilen; yakınlarda evlerin inşa edilmesine ve böylece başkentin kurulmasına yol açan cami, hamam, mutfak ve eğitim kurumları gibi sosyal mekânları içeren beş kamusal altyapı külliyesi yer almaktadır. İyi korunmuş Cumalıkızık köyü, Orhan Gazi külliyesine ait bir vakıf köyü olarak hizmet verdiği ve başkenti ekonomik olarak desteklediği için bu kentsel planlama ve ekonomik sistemin değerli bir örneğidir. Dünya Miras Listesi'ndeki bu eser kapsamında korunan bir diğer unsur da Osmanlı hanedanının kurucuları Orhan Gazi ve Osman Gazi Türbesi'dir",
      imgs: [
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdiFbAb-ObnpHl8qChv0FFafnxjiHAMsfmLJTyIFNsubNyuixkD4GHRfpg4g9SBJDjSHYjnm8iTuzZss-p0cv6uLS8pLG4iXGg6bxi_Jox_RbWdJMGR0LkeTOhYMBVBdU9Bnc60dEAyQwmHhjPLztbE0nmbrWxLZXrFez0cSg?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/100061,bursa-ve-cumalikizik-osmanli-imparatorlugunun-dogusu-bursa.png?0",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Bursa%20Hanlar%20B%c3%b6lgesi%20(1).JPG?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/02Bursa%20CUMALIKIZIK%20K%c3%b6y%c3%bc%20Murat%20%c3%96CAL%20(5).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Bursa%20CUMALIKIZIK%20K%c3%b6y%c3%bc%20Mavi%20Boncuk%20Konuk%20Evi%20%20Murat%20%c3%96CAL%20(6).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
      ],
      link: "bursa.html",
    },
    {
      name: "Bergama Çok Katmanlı Kültürel Peyzaj Alanı", //
      lat: 38.423733,
      lng: 27.142826,
      desc: "M.Ö. 3. yüzyılda Helenistik Attalid hanedanının başkenti olarak kurulan ve daha sonra Roma İmparatorluğu'nun Asya eyaletinin başkenti olan, günümüzde ise İzmir'de yer alan Bergama Antik Kenti, antik dünyada önemli bir kültür, sanat, bilim ve siyaset merkeziydi. Bu görkemli kentin kalıntıları arasında stoa, gymnasium, tiyatrolar, Trajan Tapınağı, Kızıl Avlu, Kybele Tapınağı ve en önemlisi Bergama Zeus Sunağı yer almaktadır. O dönemde şehir planlamasında da devrim yaratan Bergama'nın bu dik şehir düzeni Helenistik dünyada büyük etki yaratmıştır. 2014 yılında UNESCO Dünya Mirası Listesi'ne kaydedilen bu muazzam kent, Bizans ve Osmanlı dönemlerinde de yerleşim yeri olmaya devam etmiş ve Asya'nın Yedi Kilisesi'nden birine ev sahipliği yapmıştır.",
      imgs: [
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf2EkES3wYvNeGtB5hZHX71cjWzAgQreTz34BpAQmv783NPqserfmQx-IXX8K2pGSE2t20ic_vc3p9LEJkDinEpZao20CRvvCqejbzHxqScelU0RnL7FyD9xPfNIvWeXRZc8tbBa8gls6hihOKHPPjmQomepPOfBIEuC7hv?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/20171005101950262_bergama%20amfi%20tiyatro.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/20170505120507940_023BergamaAsklepiondanGrntler2014UmutZDEMR_20160113120909915.JPG",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20170505120528033_050BergamaAsklepiondanGrntler2014UmutZDEMR_20160113121640025.JPG?format=jpg&quality=50",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20171005102548704_shutterstock_106736435.jpg?format=jpg&quality=50",
          caption: "",
        },
      ],
      link: "bergama.html",
    },
    {
      name: "Diyarbakır Kalesi ve Hevsel Bahçeleri Kültürel Peyzajı", //
      lat: 37.91,
      lng: 40.240002,
      desc: "Diyarbakır Kalesi ve Hevsel Bahçeleri Kültürel Peyzajı, Türkiye'nin güneydoğusunda, Yukarı Dicle Havzası yakınlarında yer alan bir yerleşke bütünüdür. Kale ve Hevsel Bahçeleri, günümüze ulaşan yazıtlar, surlardaki etkileyici taş işçiliği, kuleler, kapılar ve tarihî hasar ve onarım izlerinin yanı sıra şehir ile Dicle Nehri'ni birbirine bağlayan Hevsel Bahçeleri ile Roma döneminden günümüze kadar çeşitli uygarlıkların somut kültürünü gözler önüne sermektedir. 2015 yılında UNESCO Dünya Mirası Listesi'ne kaydedilen bu alan, Helenistik, Roma, Sasani, Bizans ve Osmanlı dönemlerinde önemli bir sosyal, kültürel ve ekonomik bölge olarak hizmet vermiş ve birçok medeniyetin evrensel buluşma noktası olmuştur",
      imgs: [
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdIW_6deMjTX66BO-M5mEYiyHagXSHh81XxamgDppi0wTsED5X5Pte1ohfYfn28XUAGi-cosq4c1BVLXkhd088KIX_0GtfJozEp-0yT32PrFTDikrnSUa6YEeK5zVAGRV8oy26icnozechdI55tPDOR3fw6OpGZTro7W29k?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Diyarbak%c4%b1r%20Surlar%c4%b1.JPG?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.howturkey.com/images/diyarbakir_kalesi_hevsel_bahceleri_dunya_mirasi_unesco_7.jpg",
          caption: "",
        },
        {
          src: "https://www.howturkey.com/images/diyarbakir_kalesi_hevsel_bahceleri_dunya_mirasi_unesco_5.jpg",
          caption: "",
        },
        {
          src: "https://www.howturkey.com/images/diyarbakir_kalesi_hevsel_bahceleri_dunya_mirasi_unesco_9.jpg",
          caption: "",
        },
        {
          src: "https://www.howturkey.com/images/diyarbakir_kalesi_hevsel_bahceleri_dunya_mirasi_unesco_3.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/yedikarde%c5%9f%20burcu%20(2).JPG?format=jpg&quality=50&width=12000",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Ke%c3%a7i%20Burcu%20ve%20hevsel.JPG?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/135277,unescodiyarbakir02.png?0",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/135278,unescodiyarbakir03.png?0",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/135279,unescodiyarbakir04.png?0",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/135281,unescodiyarbakir06.png?0",
          caption: "",
        },
      ],
      link: "dıyarbakır.html",
    },
    {
      name: "Efes",
      lat: 37.9503,
      lng: 27.3639,
      desc: "İzmir sınırları içinde yer alan Roma liman kenti Efes, dünyanın orjinal yedi harikasından biri olan Artemis Tapınağı'nın kalıntılarına ev sahipliği yapan eşsiz bir Helenistik-Roma kentidir. Alandaki korunmuş yapılar arasında Celsus Kütüphanesi, Hadrian Tapınağı ve duvar freskleri ve mozaiklerle süslü teras evleri gibi İmparatorluk Roma mimarisinin çarpıcı örnekleri yer almaktadır. Antik dünyada önemli bir entelektüel ve dini merkez olan Efes, Anadolu Artemis'i için tapınak olarak kullanılmaktaydı ve Kibele gibi Anadolu tanrılarına yönelik tapınma izleri de hâlâ görülebilmektedir. Klasik mirasının yanı sıra, yakınlarındaki Meryem Ana Evi, Aziz Pavlus'un kentte vaaz verdiği ve yaşadığı inancı ve 5. yüzyılda erken Hristiyan Kilisesi tarafından düzenlenen iki yüzyıllık konsiller nedeniyle Hristiyanlık için de önemli bir ziyaret noktasıdır. 2015 yılında UNESCO Dünya Mirası Listesi'ne kaydedilen Efes, Türkiye'nin en büyük turistik noktalarından biridir",
      imgs: [
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXf08OFQ9o4IAm54pnOyhnZ5FzVF9ip0neJm-BY4CcjglHnlr3MLvrkabcf1wYQd5d0pl7xazlKVzZftHieZcAyz41_VlLKtoyeSSSFySFnCkgs1i79YOu3zxTC2KRnJOuBfKRZ4Z1WqcqqH5XaNFv9-5HVApVbKXAg6ismOyg?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://www.edrotur.com.tr/wp-content/uploads/2022/05/Kusadasi-Efes-Turu.jpg",
          caption: "",
        },
        {
          src: "https://muze.gov.tr/s3/SectionPicture/SP_69603b8f-33a2-49b8-8556-4f65c241cbf6.jpg",
          caption: "",
        },
        {
          src: "https://muze.gov.tr/s3/SectionPicture/SP_88e0ad32-56f1-4c8c-a2a7-e149d2a3a04d.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/b329d1c0-8c5a-4fce-8fb5-61828721b54b.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/d2890b92-6466-4961-9dd4-ba3110f37b31.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/544424ce-6f92-4702-ae6e-d0a07afda9ab.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/32ab97d0-456d-4058-8ba9-939f072f7828.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/8cc9eb01-9e60-4c48-ba05-722380db2d79.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/a112e982-8ca0-47eb-a268-7584e6f302fc.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/6670f008-4c4d-4613-91dd-24b9784048e4.jpg",
          caption: "",
        },
      ],
      link: "https://sanalmuze.gov.tr/muzeler/IZMIR_EFES_ORENYERI/",
    },
    {
      name: "Hekatomnos Anıt Mezarı ve Kutsal Alanı",
      lat: 37.21807,
      lng: 28.3665,
      desc: "Muğla’nın Milas ilçesinde yer alan Hekatomnos Anıt Mezarı ve Kutsal Alanı, Karya Satrapı Hekatomnos’a ait olduğu düşünülen anıtsal bir mezar kompleksidir. M.Ö. 4. yüzyıla tarihlenen yapı, hem mimari hem de sanatsal açıdan büyük öneme sahiptir. Mozole, Antik Halikarnas Mozolesi’ne benzerliğiyle dikkat çeker ve bu nedenle 'küçük Halikarnas' olarak da anılır. Anıt mezar, çevresindeki kutsal alanla birlikte antik dönemin dini, kültürel ve siyasi yaşamına ışık tutmaktadır. 2012 yılında UNESCO Dünya Mirası Geçici Listesi’ne alınmıştır. Özellikle mermer frizlerindeki yüksek kabartmalar, dönemin sanatsal inceliğini yansıtır.",
      imgs: [
        {
          src: "https://mugla.ktb.gov.tr/Resim/162604,hekatomnos-podyum.png?0",
          caption: "",
        },
        {
          src: "https://mugla.ktb.gov.tr/Resim/162605,hekatomnos-propylon.png?0",
          caption: "",
        },
        {
          src: "https://mugla.ktb.gov.tr/Resim/162603,hekatomnos-lahit-dogu-cephe.png?0",
          caption: "",
        },
        {
          src: "https://mugla.ktb.gov.tr/Resim/162602,hekatomnos-lahit-bati-cephe.png?0",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/35132,unescoheka1.png?0",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/35133,unescoheka2.png?0",
          caption: "",
        },
      ],
      link: "",
    },
    {
      name: "İshak Paşa Sarayı",
      lat: 39.71944,
      lng: 43.05139,
      desc: "Ağrı'nın Doğubayazıt ilçesinde yer alan İshak Paşa Sarayı, Osmanlı mimarisinin Doğu’daki en dikkat çekici yapılarından biridir. 1685 yılında Çolak Abdi Paşa tarafından başlatılan inşaat, 1784 yılında oğlu İshak Paşa tarafından tamamlanmıştır. Saray; Osmanlı, Selçuklu, Pers ve Barok mimari tarzlarını harmanlayan özgün yapısıyla dikkat çeker. 7.600 metrekarelik alanı kapsayan saray, cami, divan, türbe, iç avlu, zindan ve harem bölümleriyle klasik saray planını taşır. Özellikle taş işçiliği ve süslemeleri ile ünlü olan saray, Türkiye'nin en iyi korunmuş tarihi saray yapılarından biridir. 2000 yılında UNESCO Dünya Mirası Geçici Listesi'ne alınmıştır.",
      imgs: [
        {
          src: "https://www.kulturportali.gov.tr/contents/images/e286cd82-03ac-41a8-9b4b-0c2db83b1613%20kopya.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/08e5e669-4edf-40d1-a7f5-ef1dd37d744e.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ishak%20pa%c5%9f%c5%9faaa.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/%c4%9fa%c5%9fa%20m%c4%b1%20ishakk.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ishak%20m%c4%b1%20pa%c5%9fa.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/4a3ce44b-5062-4ff3-9894-4acda98e5135.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/81f4ce4d-8e09-4161-90c8-0a0b930c3e91.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/d8f491a8-9e20-4f20-9a5a-2b9d3cc16241.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/165856bb-1f27-4875-89de-4bf79b0575c9.jpg",
          caption: "",
        },
      ],
      link: "ağrı.html",
    },
    {
      name: "Çifte Minareli Medrese",
      lat: 39.90617,
      lng: 41.27063,
      desc: "Erzurum’da yer alan Çifte Minareli Medrese, Anadolu Selçuklu dönemine ait en önemli yapılardan biridir. 13. yüzyılın sonlarında İlhanlılar döneminde inşa edildiği düşünülmektedir. Adını, yapının ön cephesinde yer alan iki anıtsal minareden alır. Taç kapısındaki geometrik süslemeler ve bitkisel motiflerle Selçuklu taş işçiliğinin en güzel örneklerinden birini sunar. Medrese, klasik açık avlulu dört eyvanlı plana sahiptir. Hem mimari açıdan hem de süslemeleriyle dikkat çeken bu yapı, 2016 yılında UNESCO Dünya Mirası Geçici Listesi'ne dahil edilmiştir.",
      imgs: [
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Erzurum_%c3%87ifte_Minare_Madrasa_%206240x4160px__300%20dpi%20kopya.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ERZURUM%20%c3%87ifte%20Minareli%20Medrese%20Hatuniye%20Medresesi%20Murat%20%c3%96CAL%20(17).jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ERZURUM%20%c3%87ifte%20Minareli%20Medrese%20Hatuniye%20Medresesi%20Murat%20%c3%96CAL%20(27).jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ERZURUM%20%c3%87ifte%20Minareli%20Medrese%20Hatuniye%20Medresesi%20Murat%20%c3%96CAL%20(2).jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ERZURUM%20%c3%87ifte%20Minareli%20Medrese%20Hatuniye%20Medresesi%20Murat%20%c3%96CAL%20(22).jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ERZURUM-%c3%87%c4%b0FTE%20M%c4%b0NAREL%c4%b0%20MEDRESE-G%c3%9cLCAN%20ACAR%20(5).jpg",
          caption: "",
        },
      ],
      link: "erzurum.html",
    },
    {
      name: "Alahan Manastırı",
      lat: 36.812103,
      lng: 34.641479,
      desc: "Mersin’in Mut ilçesinde, Toros Dağları’nın yamaçlarında 1300 metre rakımda yer alan Alahan Manastırı, erken Hristiyanlık dönemine ait en önemli mimari örneklerden biridir. M.S. 5. yüzyılda inşa edildiği düşünülen bu manastır kompleksi; kaya mezarları, keşiş hücreleri, vaftizhane, kiliseler ve su yollarıyla birlikte geniş bir alana yayılmıştır. Doğu Roma İmparatorluğu döneminde aktif bir dini merkez olan Alahan, hem konumu hem de taş işçiliği açısından dikkat çeker. Yapı, 2000 yılında UNESCO Dünya Mirası Geçici Listesi'ne alınmıştır.",
      imgs: [
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Alahan%20Manast%20(8).jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Alahan%20(10).jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Alahan%20Manas.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Alahan%20Manast.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Alahan%20Mana.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/8b8983bb-3d3e-436f-9bf7-f13eac9694cb.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/42f130ed-ba17-4ec6-ae16-5bda6921d54f.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/8a2d05ee-f921-46ef-85a6-788df7f92bb3.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/9da0410a-b2df-4fad-af29-1f0763f16425.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/f21dc0b7-7abb-4c0a-8d5e-0c1458f0fef8.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/6621a183-e0fb-4caf-9e4e-85557287eabb.jpg",
          caption: "",
        },
      ],
      link: "",
    },
    {
      name: "Anavarza Antik Kenti",
      lat: 37.00167,
      lng: 35.32889,
      desc: "Adana’nın Kozan ilçesi yakınlarında yer alan Anavarza Antik Kenti, Roma, Bizans ve Erken İslam dönemlerinde önemli bir yerleşim yeri olmuştur. Kent; çift sur sistemi, zafer takı, mozaikli yapıları, tiyatrosu ve dünyanın ilk çift şeritli antik yolu ile dikkat çeker. Anavarza Kalesi, sarp kayalıklar üzerine kurulu konumuyla savunma açısından stratejik bir öneme sahiptir. M.S. 3. yüzyılda Roma’nın Cilicia bölgesinin önemli merkezlerinden biri olan Anavarza, Helenistik ve Roma mimarisini bir arada barındırır. 2014 yılında UNESCO Dünya Mirası Geçici Listesi'ne dahil edilmiştir.",
      imgs: [
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/2148f411-58de-4d10-9093-91f0d704dbfd.JPG",
          caption: "",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Anavarza_castle_2783.jpg/1280px-Anavarza_castle_2783.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/156c5479-bc8c-4777-afeb-112c3f1d999b.JPG",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/7e2009a0-78ec-453e-8e6c-cb5790cbf820.JPG",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/b0142534-b42d-4828-8539-1b4703848e41.JPG",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/5c1c4789-7dd2-4c61-9af6-0b97bda99004.JPG",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/d75c2ba6-9bcf-4023-a16f-5a476d6aaf73.JPG",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/a40f607b-a8e3-4014-a64d-d5c7e6f61dbd.JPG",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/140caa88-c2ce-4e93-ba41-31615355deed.JPG",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/cc133da6-71f6-47ba-8e5a-7c4bacee07c0.JPG",
          caption: "",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Anazarbus_klikya_city_south_gate.jpg/1280px-Anazarbus_klikya_city_south_gate.jpg",
          caption: "",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Anazarbus_clikya_west_gate_and_anvarza_castle.JPG/1280px-Anazarbus_clikya_west_gate_and_anvarza_castle.JPG",
          caption: "",
        },
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Anavarza_castle_2774.jpg/1280px-Anavarza_castle_2774.jpg",
          caption: "",
        },
      ],
      link: "adana.html",
    },
    {
      name: "Odunpazarı Kentsel Sit Alanı",
      lat: 39.76054,
      lng: 30.52292,
      desc: "Eskişehir’in en eski yerleşim alanlarından biri olan Odunpazarı, geleneksel Osmanlı-Türk kent dokusunu günümüze kadar koruyabilmiş nadir bölgelerden biridir. Arnavut kaldırımlı dar sokaklar, cumbalı ahşap evler ve tarihi konaklar bu bölgede özgün şekilde korunmuştur. Odunpazarı; Kurşunlu Külliyesi, Atlıhan El Sanatları Çarşısı ve Odunpazarı Modern Müze (OMM) gibi yapılarıyla hem tarihi hem de çağdaş kültürel değerleri bir arada sunar. 2012 yılında UNESCO Dünya Mirası Geçici Listesi'ne alınmıştır. Bu alan, yaşayan bir kültür mirası niteliğindedir.",
      imgs: [
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ad8a285d-b9b4-48e5-a0c8-504c9e7b3a06.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ESK%c4%b0%c5%9eEH%c4%b0R%20Odun%20Pazar%c4%b1%20Servet%20UYGUN%20(10).jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/DownloadFile-7.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/repoKulturPortali/large/18012013/32c9e6aa-9d35-49d9-b790-092a7f0d70d9.jpg?format=jpg&quality=50",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/repoKulturPortali/large/18012013/a87ba932-30cc-4931-a1c8-18b735346c1c.jpg?format=jpg&quality=50",
          caption: "",
        },
      ],
      link: "https://www.odunpazari.bel.tr/odunpazari360/tarihi-odunpazari-evleri/html/index.html",
    },
    {
      name: "Sümela Manastırı",
      lat: 41.002697,
      lng: 39.716763,
      desc: "Trabzon'un Maçka ilçesindeki Karadağ'ın eteklerinde, Altındere Vadisi Milli Parkı sınırları içerisinde yer alan Sümela Manastırı, sarp kayalıkların üzerine inşa edilmiş görkemli bir yapıdır. M.S. 4. yüzyılda Bizans döneminde kurulan manastır, uzun yıllar dini eğitim merkezi olarak hizmet vermiştir. Meryem Ana'ya ithaf edilen bu manastır, fresklerle süslü iç duvarları, doğal kayaya oyulmuş yapısı ve manzarasıyla dikkat çeker. 1923'ten sonra terk edilen manastır, restorasyon çalışmalarıyla yeniden ziyarete açılmıştır. 2000 yılında UNESCO Dünya Mirası Geçici Listesi'ne alınmıştır.",
      imgs: [
        {
          src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Sumela_From_Across_Valley.JPG/1280px-Sumela_From_Across_Valley.JPG",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/Sumela1_20170216130744671(1).jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/20190729115929622_20190726142008066_20180919141456690__MG_1570%20logolu.jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/20190729115937559_20190726142039676_20180919141524552_Isa%20Goge%20Yukselis%20logolu%20(1).jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/0914TRABZONSUMELAMANASTIRIHAZELTHOMPSON12_11_2013_20170717112049546.jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/20190726142023816_20180919141511323_1b_%20logolu.jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/S%c3%bcmela%20(5).jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/d5379f21-8452-419a-819a-6511199fb061.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/bf67c444-0532-42d0-8130-182c08403a4c.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/0561d85e-a7a7-4598-a349-527dcf513bb1.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/4014545f-809d-4c23-90c4-3cbeb6a22243.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/9e9e2503-8724-4b24-ac7c-b9bc4a7fb781.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/8f322128-b20a-43f3-88f5-593bf66af727.jpg",
          caption: "",
        },
      ],
      link: "trabzon.html",
    },
    {
      name: "Ani Arkeolojik Alanı", //
      lat: 40.60199,
      lng: 43.09495,
      desc: "Günümüzde Kars ilinin doğusunda yer alan Ortaçağ şehri Ani'nin kalıntıları, MS 7-13. yüzyıllar arasında bölgedeki Ortaçağ mimarisinin gelişimini sergileyen çeşitli kamusal ve konut mimarisi örneklerini içermektedir. Arkeolojik alan, bölgeyi yöneten çeşitli uygarlıkların somut kültürünü yansıtmaktadır. Ermeni Bagratuni Krallığının başkenti olarak hizmet veren ve İpek Yolu sayesinde MS 10. yüzyıl civarında gelişen bu arkeolojik alan, daha sonra Bizanslılar, Selçuklular ve Gürcüler tarafından yönetilmiştir. Güçlü bir ticaret merkezi olan bölgenin kalıntıları Ermeni, Bizans, Selçuklu ve Gürcü şehirciliği ve mimarisinin zengin etkisini yansıtmaktadır. Bu Ortaçağ kenti, yüzyıllar boyunca Hristiyan ve ardından Müslüman hanedanlar tarafından inşa edilen Orta Çağ şehirciliğinin karakteristik özelliği olarak mesken, dini ve askerî yapıları bir araya getirmektedir. Kalıntılar arasında şehir surları, Zerdüşt, Hristiyan ve Müslümanların dini anıtları, sarayları, tapınakları, pazar yerleri, kaleleri, İpek Yolu Köprüsü gibi daha pek çok yapı bulunmaktadır. Ani Arkeolojik Alanı, 2016 yılında UNESCO Dünya Mirası Listesi'ne kaydedilmiştir",
      imgs: [
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdVye9oakvBpCG0xzWaE3OS2fMnZAjVXlNSM-oJE_K-0lgQ0M8AD2R3HT13KF8IRobNfsdQdTYnE-tzaF1v-zWgnx-8HdFFs6qGljAY2Ip1kKqEaZWVWgQvkBAHyZL7N5WDUV215oNcY6MmT8nszvdzHkoY5_kZKGS2JOoSHQ?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/KARS-AN%c4%b0%20HARABELER%c4%b0-G%c3%9cLCANACAR%20(4).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/KARS-AN%c4%b0%20HARABELER%c4%b0-G%c3%9cLCANACAR%20(5).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/KARS-AN%c4%b0%20HARABELER%c4%b0-G%c3%9cLCANACAR%20(3).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/KARS-AN%c4%b0%20HARABELER%c4%b0-G%c3%9cLCANACAR%20(2).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://kars.ktb.gov.tr/Resim/363121,dsc0063jpg.png?0",
          caption: "",
        },
        {
          src: "https://kars.ktb.gov.tr/Resim/363123,poladoglu-kilisesi-1jpg.png?0",
          caption: "",
        },
        {
          src: "https://kars.ktb.gov.tr/Resim/363136,horomos-manastiri-tavan--yozturkkan--1jpg.png?0",
          caption: "",
        },
        {
          src: "https://kars.ktb.gov.tr/Resim/363137,horomos-manastiri-tavan--yozturkkan--2jpg.png?0",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/4a0236b7-4c16-45dd-8fe4-81e2d19006e0.JPG",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/b3315d1a-1238-493f-9df1-46548100ddf7.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/f2fdc865-9c79-4e76-958e-516ab34031d6.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/8318f967-9ecd-4d8b-b30f-0a3a16ba0cc4.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/46eca078-fe5f-4372-bed1-53cc0fd46ec0.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/5dc8807a-6ab8-4292-8141-7626025df3ae.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/d870f035-e43f-4cb6-a382-c2b0699a1f7a.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/46149a73-c66b-48f0-8ac9-0923d00ed98b.jpg",
          caption: "",
        },
      ],
      link: "kars.html",
    },
    {
      name: "Aphrodisias", //
      lat: 37.84501,
      lng: 27.83963,
      desc: "Günümüz Aydın ili sınırları içerisinde yer alan Aphrodisias Antik Kenti, tarihi MÖ 2. yüzyıla kadar uzanan ve tanrıça Afrodit'e adanmış bir antik kenttir. Kent özellikle heykel atölyeleri ve halen antik kompleks içinde bulunan taş ocağından elde edilen ve İmparatorluk Dönemi Roma heykeltraşlığında sıklıkla kullanılan yüksek kaliteli beyaz mermeriyle ünlüydü. Önemli bir sanatsal ve heykeltraşlık üretim merkezi ve Anadolu Afrodit Kültü için belirgin bir ibadet alanı olan alandaki insan yerleşimi, Afrodit Tapınağı'nın MS 500 dolaylarında Meryem Ana'ya adanmış bir kiliseye dönüştürülmesiyle Hristiyanlık dönemine kadar devam etmiştir. Bölge, günümüze ulaşan binlerce yazıt, Julius-Claudius hanedanı için bir tapınak kompleksi, imparatorluk belgelerinden oluşan Arşiv Duvarı ve dünyanın en iyi korunmuş antik amfi tiyatro stadyumu gibi olağanüstü ve eşsiz mermer mimari ve heykel örnekleriyle somut kültürel miras açısından zenginliğini korumaya devam etmektedir. Bu zengin ve benzersiz antik kent, 2017 yılında UNESCO Dünya Mirası Listesi'ne kaydedilmiştir",
      imgs: [
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcvELTqbZ92Cnv2dUGJd52tQDRgS-2raZWQ0FtxgAL0r_pyH1jqKsLPu9CdoGlbW-s8zj5RaRBUyg7LB_4_LE0NzoKUEB48zj0CWMorVe4JV5KBNUiucbUeGgKeRducCRmBCPEDm_k38_4NPMlA2sVTKno49zpGEaY9SVUGmg?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/216751,afrodisias01jpg.png?0",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/216755,afrodisias02jpg.png?0",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/216759,afrodisias04jpg.png?0",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/216758,afrodisias05jpg.png?0",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/216752,afrodisias07jpg.png?0",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/216756,afrodisias06jpg.png?0",
          caption: "",
        },
      ],
      link: "https://aydinsanaltur.com/kultur360/afrodisiasantikkenti/",
    },
    {
      name: "Göbekli Tepe",
      lat: 37.158333,
      lng: 38.791668,
      desc: "Şanlıurfa yakınlarında bulunan Göbekli Tepe neolitik arkeolojik alanı, tarihi MÖ 9.600 - 8.200 yıllarına dayanan ünlü T biçimli sütunlarıyla dünyanın bilinen en eski insan yerleşimlerinden biridir. Göbekli Tepe, yakın tarihin en önemli arkeolojik keşiflerinden biri olmaya devam etmektedir zira yapıların üzerinde yer alan ve ritüel amaçlı olduğunu düşündüren son derece ilginç hayvan ve belli belirsiz insan figürlerinden oluşan kabartma sanatı, bir din veya maneviyat duygusunun varlığını ve daha önce sanılandan çok daha eski bir toplumsal mimariyi ortaya koymaktadır. Alanın yakınlarında konut yapılarının keşfedilmesi de insan yerleşimini göstermekte ve Göbekli Tepe'yi insan yapımı mimarinin ilk örneklerinden biri haline getirmektedir. İnsanlık tarihinin en büyük geçiş dönemlerinden birinin somut kanıtı olan bu alan, yerleşik hayata ilk geçenlerin kültürünü belgeleyen türünün tek örneği bir sit alanıdır. Göbekli Tepe 2018 yılından bu yana UNESCO Dünya Mirası Listesi'nde yer almakta ve tarihe yeni bakış açıları sunmaya devam etmektedir",
      imgs: [
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/4da9a662-9150-4a2b-a75d-53c294221b2e.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/2D8C3436_20180704160312891.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXcK1bn5HV7vX8v5_GEzYlClV-FX03H23knCar8jmWolgu-Uw9GymYYSIMsQhjUwoAfPhdfVHE_FCJVZM6oyUWvUPxM3xBIWIaBUJAaVpGJRoZXe2WmyBBqlCpHPiGJQVIwMc_fHLTqGL1RB0160BPgkAmrJV3zX7IfM-M5PTg?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/%c5%9eANLIURFA-G%c3%96BEKL%c4%b0TEPE-AF%c4%b0%c5%9e%20(2)(1).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/4b89faf2-253b-4956-8a6b-1089b42cf399.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/366f09d3-c556-46a8-95ca-991c11bf4f79.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/fb53c1b6-b4c2-45eb-960b-a767b31e529e.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/dea0edf8-313d-4fba-9539-6c50aa9c52ff.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/c629286d-469c-4e2b-aa5f-0c3eb2cf5384.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/20171012162637918_4S_UrfaGobekliTepeServetUYGUN1_20170613143255979(1).jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.ktb.gov.tr/Resim/352568,gobeklitepepng.png?0",
          caption: "",
        },
        {
          src: "http://www.sanliurfa.gov.tr/kurumlar/sanliurfa.gov.tr/1_isay/sehir_kartlari/2023/gobeklitepe_galeri/Gobeklitepe-_3_.jpg?mode=resize&width=1200",
          caption: "",
        },
        {
          src: "http://www.sanliurfa.gov.tr/kurumlar/sanliurfa.gov.tr/1_isay/sehir_kartlari/2023/gobeklitepe_galeri/Gobeklitepe-_6_.jpg?mode=resize&width=1200",
          caption: "",
        },
      ],
      link: "https://sanalmuze.gov.tr/muzeler/SANLIURFA-GOBEKLITEPE-ORENYERI/",
    },
    {
      name: "Arslantepe Höyüğü",
      lat: 38.356869,
      lng: 38.309669,
      desc: "Malatya ili sınırları içerisinde, Fırat Nehri yakınlarında yer alan arkeolojik Arslantepe Höyüğü, Erken Uruklardan Hititlere, Paleo-Asurlardan Romalılara kadar birçok uygarlığın işgali altında en az 8.000 yıl boyunca kesintisiz iskân görmesi nedeniyle özellikle ilgi çekici bir yerdir. Bununla birlikte, Geç Kalkolitik dönem (M.Ö. 3400 - 3100), bu döneme ait özellikle iyi korunmuş in situ arkeolojik malzeme nedeniyle höyüğün tarihinde belki de en iyi belgelenmiş dönemdir. Bu olağanüstü korunmuş yapılar arasında tek tek binaların yerleşim planları ve duvar resimlerinin yanı sıra Geç Kalkolitik dönemin bu türdeki bilinen en büyük kompleksi olan saray kompleksi de yer almaktadır. Arslantepe Höyüğü 2021 yılından bu yana UNESCO Dünya Mirası Listesi'nde yer almakta ve Geç Kalkolitik dönemin saray idarecilerinin yaşamlarına ve uygulamalarına ışık tutmaya devam etmektedir",
      imgs: [
        {
          src: "https://www.trtavaz.com.tr/uploads/photos/2024/10/13/c7095b8eaeeb4a64a09f76016b7988b0.jpg?w=640",
          caption: "",
        },
        {
          src: "https://cdnuploads.aa.com.tr/uploads/userFiles/4f62407a-abf2-4464-9690-b6acbca575b5/07_2024%2F00_AGUSTOS%2F01%2F20241011_2_65905145_105569947.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/dbb842b9-e42f-4cbe-8fbe-8bdb29dfb2dd.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/4607c7a6-cae0-4164-a43b-11ec52306c5c.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/b6b79dbb-5e26-4a56-9c50-7320d2368e24.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/8c724c9e-931d-4c53-9cf9-56ff9b994c4c.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/f150c976-cb76-4e1b-8a4b-32e487f30bdd.jpg",
          caption: "",
        },
        {
          src: "https://cdnuploads.aa.com.tr/uploads/userFiles/4f62407a-abf2-4464-9690-b6acbca575b5/07_2024%2F00_AGUSTOS%2F01%2F20241011_2_65905145_105569952.jpg",
          caption: "",
        },
        {
          src: "https://cdnuploads.aa.com.tr/uploads/userFiles/4f62407a-abf2-4464-9690-b6acbca575b5/07_2024%2F00_AGUSTOS%2F01%2F20241011_2_65905145_105569954.jpg",
          caption: "",
        },
        {
          src: "https://cdnuploads.aa.com.tr/uploads/userFiles/4f62407a-abf2-4464-9690-b6acbca575b5/07_2024%2F00_AGUSTOS%2F01%2F20241011_2_65905145_105569957.jpg",
          caption: "",
        },
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXd_PcdO5RE54F3pX9wGN5ORz2WDMFx_c6gkdYDUuikkEvspCRixPtGdRBmKz614_Y46cV4kx1kRzkfvZGTaxtQMg7SkI_JdF6TWgggo7npi00TMDWJbD62vzoJf-N7r6VOHqCdCpxbb0YqMp--SYQILiBdvbqCWkCNwunibjw?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/a45d6371-7775-4559-8c70-62ea342b9f49%20kopya%20logoluu.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/57497c96-d83b-448d-8969-70abd19a90e4%20kopya%20logolu.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads//Blog/Foto/Foto%C4%9Fraflar/264a31e4-e50b-4724-a9a7-ff25d2b6d0f0.jpg",
          caption: "",
        },
      ],
      link: "https://sanalmuze.gov.tr/muzeler/MALATYA-ARSLANTEPE-ORENYERI/",
    },
    {
      name: "Sardes Antik Kenti ve Bintepeler Lidya Tümülüsleri",
      lat: 38.630554,
      lng: 27.422222,
      desc: "Sardes, Manisa'nın Salihli ilçesine bağlı Sart kasabası yakınlarında bulunan ve tarihte Lidya devletine başkentlik yapmış bir antik kenttir. Sardes’in 8 km kuzeyinde Lidyalılarca kutsal sayılan Gygaie (Marmara) gölünün güney kıyısına hakim Bintepeler adı ile tanınan yerde, Lidya krallarının ve soylularının yığma topraktan tümülüs adı verilen anıtsal mezarları vardır. 1940’lı yıllarda yapılan çalışmalarda en az 149 tanesi tümülüs görünür halde saptanmıştır. Günümüze ancak 115 tanesi korunarak gelebilmesine karşın son yıllarda bu krali nekropol ciddi bir şekilde defineci tahribatına uğramaya başlamıştır. Bunların içinde Kocamutaftepe olarak bilinen en büyüğü, tarihçi Herodot tarafından Mısır ve Babil’dekilerden sonra en büyük mezar anıtı olarak tanımlanarak Lidya kralı Alyattes için yapıldığını bildirilmiştir. 355 metre çapı, 69 metre yüksekliği, 1115 metre çevresiyle Alyattes tümülüsü, dünyadaki en büyük tümülüs mezarlarının arasında yer almaktadır; 19. yüzyılda Prusya elçisi Ludwig Peter Spiegelthal tarafından mezar odası antik dönemde çoktan yağmalanmış olarak keşfedilmiştir. Bu alandaki ikinci büyük tümülüs 200 metre çapında 50 metre yüksekliğindeki Karnıyarıktepe’dir. Tümülüsün içinde 90 metre çapında üzerinde Lidçe çeşitli monogramlar olan bir krepis duvarı tespit edilmiştir. İlk zamanlar kral Gyges’e ait olduğu düşünülen bu görkemli tümülüs, taş işçiliği ve seramik buluntularına dayanarak MÖ 6. yüzyılın ilk yarısının sonuna tarihlendirilmiştir. Bu açıdan bir hipotez olarak bu tümülüsü yaptırmış ancak içine gömülememiş bir Lidya kralına, büyük ihtimalle de Perslere tutsak düşen zenginliği dillere destan olmuş “Kroisos”a ait olduğu düşünülmektedir. Bintepeler Lidya Tümülüsleri, Kültür ve Turizm Bakanlığı’nın girişimiyle 2013 yılında Sardes Antik Kenti ile UNESCO Dünya Mirası Geçici Listesi’ne alınmıştır.",
      imgs: [
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/39244,sardes1jpg.png?0",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/39271,gccsardes2jpg.png?0",
          caption: "",
        },
        {
          src: "https://www.tutap.com.tr/upload/tanitimlar/138610684547c5.jpg",
          caption: "",
        },
        {
          src: "https://kucukdunya.com/wp-content/uploads/2021/11/sardes-antik-kenti.jpg",
          caption: "",
        },
        {
          src: "https://kucukdunya.com/wp-content/uploads/2021/11/sardes.jpg",
          caption: "",
        },
        {
          src: "https://kucukdunya.com/wp-content/uploads/2021/11/sardes-1.jpg",
          caption: "",
        },
        {
          src: "https://kucukdunya.com/wp-content/uploads/2021/11/sardes-2.jpg",
          caption: "",
        },
        {
          src: "https://kucukdunya.com/wp-content/uploads/2021/11/sardes-3.jpg",
          caption: "",
        },
        {
          src: "https://kucukdunya.com/wp-content/uploads/2021/11/sardes-4.jpg",
          caption: "",
        },
        {
          src: "https://kucukdunya.com/wp-content/uploads/2021/11/latrina.jpg",
          caption: "",
        },
        {
          src: "https://kucukdunya.com/wp-content/uploads/2021/11/bizans-dukkanlari.jpg",
          caption: "",
        },
      ],
      link: "sardes.html",
    },
    {
      name: "Zeugma Arkeolojik Alanı",
      lat: 37.066666,
      lng: 37.383331,
      desc: "Gaziantep İli, Nizip İlçesi sınırları içerisinde yer alan Zeugma Arkeolojik Siti, Helen ve Roma dünyasının doğu sınırının en önemli şehri olup, Kommagene Krallığı döneminde benzersiz özelliklere erişen iki adet bütünleştirilmiş tapınak ile çoğu M.Ö. 2. ve 3. yüzyıllara tarihlenen muhteşem mozaiklerle süslenmiş Roma evleri gibi şekli ve süslemesi açısından ünik olarak değerlendirilen yapıları içinde barındırmaktadır. Zeugma Arkeolojik Siti, bölgedeki antik Helenistik ve Semitik kültürel alanların entegrasyonu ve sinkretik karma kültürlerin doğuşunun anlaşılması açısından çok büyük bir tarihi öneme sahiptir. Şehirde Antiochus tarafından kutsanmış olan iki adet tapınağın, sinkretik kültler ve Kommagene Krallığı’nın hakim kültü tarafından temsil edilmesi nedeni ile Zeugma Kommagene’de ünik bir konuma sahip olmuştur. Zeugma’da çoğu M.Ö. 2. ve 3. yüzyıllara tarihlenen göz alıcı mozaik ve fresklerle süslenmiş pek çok Roma evi bulunmaktadır. Zeugma mozaikleri, Helenistik ve Doğu Roma’da kozmopolit bir şehirdeki özel yaşamı yansıtan resimsel sanatın ünik bir koleksiyonudur. Biçimsel mozaikler antik edebiyat ve mitolojinin ünik resimsel sunumlarını içermekte olup; Zeugma bu açıdan da antik resimsel sanatın çok önemli bir hazinesi konumundadır.",
      imgs: [
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/35140,unescozeugma1.png?0",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/c87509e0-2d64-48ba-80de-536042ba1d84.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/f8b10a99-c207-4184-b24a-2f545810f14b.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/a70789d6-f6c8-4843-ac80-cc726f42c6a1.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/4971dba5-d484-44cc-9b2e-995a6e9f4185.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/ca07be8b-605a-4757-aceb-e791e5b8abbf.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/d19c4b91-8a41-481d-9e18-48a38f132533.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/80447f5d-3cac-4c8b-8a77-f978cc373fef.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/ea822199-c3fa-48e1-b53b-013f4612cdce.jpg",
          caption: "",
        },
      ],
      link: "https://sanalmuze.gov.tr/muzeler/GAZIANTEP_ZEUGMA_MOZAiK_MUZESi/",
    },
    {
      name: "Harput Tarihi Kenti",
      lat: 38.680969,
      lng: 39.226398,
      desc: "Harput, Doğu Anadolu Bölgesi’nin Yukarı Fırat Bölümü’nün güneyinde yer alır.Harput Platosu olarak adlandırılan yüksek kütlenin güney kenarına kurulmuştur. Harput ve çevresinde yapılan kazı ve araştırmalara göre ilk yerleşim Paleolitik Çağ’a kadar inmektedir. Harput, ilkçağdan itibaren Anadolu’nun önemli yerleşim merkezlerinden biri olmuş, özellikle Urartulara, sonrasında Pers, Roma, Bizans, Selçuklular, Beylikler ve Osmanlılara ev sahipliği yapmıştır.  Bölgede egemenlik kurmuş olan uygarlıkların inşa ettikleri anıtsal yapılar günümüze önemli bir kültürel miras olarak gelebilmiştir. Bunlardan en önemlileri; 2016 yılı Mayıs ayında bulunan Harput kabartması, Harput İç Kalesi, Roma Kaya Mezarları, Meryem Ana Kilisesi, Harput Ulu Camii, Sare Hatun Camii’dir. Harput, tarihin her döneminde doğal yapısı, taşınmaz kültür varlıkları, somut olmayan kültür varlıkları, önemli tarihi şahsiyetleri, dinler tarihi açısından yetiştirdiği âlimleri, otantik müziği, folklorik ve edebiyattaki yeri ile önemli bir kültür şehri olmuştur. Öğrenme ve eğlenceyi birleştiren Kürsübaşı geleneği somut olmayan kültür varlığı olarak UNESCO tarafından tescillenmiştir. Kendine has erkek ve kadın oyunları ile bir marka olmuştur. Dünyanın en eski kiliselerinden olan Meryem Ana Kilisesi, Arap Baba, Fethi Baba gibi dinler tarihi açısından önemli değerlere sahiptir. Geleneksel Harput müziği, kullanılan çalgıları, besteleri ile halen özgün özelliğini sürdürmektedir.",
      imgs: [
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/8553f7ec-6756-4d25-a4c8-8fa0a38ebf27.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/3dd36260-3658-4cc7-9575-65c0fc61a041.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/7b469e03-ebfb-40e0-96ec-2daa1171725c.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/be6315a8-3459-41ec-97a8-6d14251ffdd6.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/0d94add0-6e17-46ba-a209-4361b98d6deb.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/9d1dd218-e350-4d23-8ec0-4a7bf0d0bb09.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/df1d53ec-4026-47c0-acd0-604792c6b3d5.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/bc74b734-14b4-4735-8dc0-2cb2935e4ad2.jpg",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/254743,dma-gecici-harput-kalesijpg.png?0",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/254742,dma-gecici-harputjpg.png?0",
          caption: "",
        },
        {
          src: "https://i.arkeolojikhaber.com/images/2018/23/13502.jpg",
          caption: "",
        },
        {
          src: "https://i.arkeolojikhaber.com/images/2018/23/13504.jpg",
          caption: "",
        },
        {
          src: "https://i.arkeolojikhaber.com/images/2018/23/13506.jpg",
          caption: "",
        },
      ],
      link: "harput.html",
    },
    {
      name: "Aizanoi Antik Kenti",
      lat: 39.41989,
      lng: 29.985192,
      desc: "Aizanoi Antik Kenti, Kütahya'nın Çavdarhisar ilçesinde yer alır. Antik Frigya bölgesinde bulunan bu kent, Roma döneminde önemli bir siyasi ve ticaret merkezi olmuştur. En dikkat çekici yapısı Zeus Tapınağı’dır. Bunun yanı sıra, antik tiyatro ve stadyum kompleksi, dünyanın ilk borsası olarak kabul edilen yapı ve su kemerleri ile de dikkat çeker. Aizanoi, mimarisi, sanatı ve tarihi ile UNESCO Dünya Mirası Geçici Listesi’nde yer almaktadır.",
      imgs: [
        {
          src: "https://kulturportali.gov.tr/contents/images/_R1A8147-Pano.jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/YA%20DA(1).jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/_R1A8316.jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/K%c3%9cTAHYA%20%c3%87avdarhisar%20Aizanoi%20Antik%20Kenti%20Alimurat%20CORUK%20(4).JPG",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/20022013_664beb1c-2266-4471-bd50-1051e319ff04(1).jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/YA%20DAS.jpg",
          caption: "",
        },
        {
          src: "https://kulturportali.gov.tr/contents/images/_R1A8354.jpg",
          caption: "",
        },
      ],
      link: "mekan360.html",
    },
    {
      name: "Ballıca Mağarası",
      lat: 40.3139,
      lng: 36.5544,
      desc: "Ballıca Mağarası, Amasya il sınırlarında, Merzifon ilçesinin Ballıca köyünde yer alan ve dünyaca ünlü sarkıt ve dikitleriyle tanınan bir mağaradır. 1995 yılında turizme açılan mağara, 300 milyon yıl önce oluşmuş yer altı oluşumlarına ev sahipliği yapmaktadır. Ballıca Mağarası, UNESCO Dünya Mirası Geçici Listesi'nde yer almasıyla da uluslararası alanda tanınmaktadır. Ziyaretçiler, mağaranın derinliklerine indikçe değişen iklim ve mikro ortamlarla karşılaşırken, mağaranın görsel zenginliği, hem doğa severler hem de bilim insanları için önemli bir cazibe kaynağıdır. Mağara, yıl boyunca 9-10°C arasında sabit bir sıcaklığa sahiptir ve içerdiği sarkıtlar ile dikitler, büyüleyici görsellik sunmaktadır. Ziyaretçilere, tarihi bir yolculuk yapma fırsatı sunan Ballıca Mağarası, doğal oluşumları ve eşsiz yapısıyla önemli bir kültürel miras olarak kabul edilmektedir.",
      imgs: [
        {
          src: "https://www.kampyerleri.org/wp-content/uploads/2021/04/ballica-magarasi-tabiat-parki-flora-ve-fauna-bilgisi.jpg",
          caption: "",
        },
        {
          src: "https://www.kampyerleri.org/wp-content/uploads/2021/04/ballica-magarasi-tabiat-parki-giris-ucreti.jpg",
          caption: "",
        },
        {
          src: "https://www.kampyerleri.org/wp-content/uploads/2021/04/ballica-magarasi-tabiat-parki-aktiviteleri.jpg",
          caption: "",
        },
      ],
      link: "tokat.html",
    },
    {
      name: "Tuz Gölü Özel Çevre Koruma Alanı",
      lat: 37.874641,
      lng: 32.493156,
      desc: " Tuz Gölü Özel Çevre Koruma Alanı Ankara, Konya ve Aksaray illeri ile çevrili olan Tuz Gölü, Van Gölü’nden sonra Türkiye’nin ikinci büyük gölüdür. Yer altı sularıyla beslenen Tuz Gölü, kapalı bir havza olan Konya Havzası’nda yer almaktadır. Ortalama derinliği 50 cm.’nin altında olan Tuz Gölü, Doğuda Kızılırmak, Güneyde Obruk, Batı’da Cihanbeyli ve Kuzeyde Haymana Platoları ile çevrilidir. Gölün bulunduğu bölge, Türkiye’nin en az yağış alan bölgesidir. İlkbaharda gölün genişliği 164.200 hektara ulaşırken yaz aylarında göl yüzeyinde oluşan yaklaşık 30 cm.lik tuz tabakası, bölgedeki aşırı buharlaşmanın bir kanıtıdır. Türkiye’nin tuz ihtiyacının % 70’i Tuz Gölü’nden sağlanmaktadır. Sayılamayacak kadar çok çeşitli kuş türüne ev sahipliği yapan Tuz Gölü havzası, yaklaşık 6.000 kadar kuş yuvalama alanına sahiptir. Bunun yanında bölgede 279 bitki ve bakteri türünün yaşadığı tespit edilmiştir. Dünyanın önemli doğal alanlarından biri olan Tuz Gölü Özel Çevre Koruma Bölgesi, sahip olduğu bu özellikleri nedeniyle UNESCO Dünya Miras Geçici Listesi’ne kaydedilmiştir.",
      imgs: [
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/39272,gcctuzgolu1jpg.png?0",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/39245,tuzgolu2jpg.png?0",
          caption: "",
        },
      ],
      link: "",
    },
    {
      name: "Kemaliye Tarihi Kenti",
      lat: 39.73919,
      lng: 39.49015,
      desc: "Tarihi Kemaliye İlçesi, Erzincan İli’nin güneybatısında yer almaktadır. Tarihsel süreçte İpek ve Kervan yolları üzerinde bulunan Kemaliye kent dokusu, mimarisi ve özgün evleri ile öne çıkmaktadır. Doğayı yapılaşmada temel unsur olarak gören bir anlayışla topografyaya oturan yerleşim, Fırat Nehri’nden itibaren yükselen üç ana sekiden oluşmaktadır. Fırat Nehri, kentsel mekân kurgusunu ve mimariyi etkilemiş; yerleşim birimleri bu etkiye göre oluşturulmuş ve tasarlanmıştır. Kemaliye yerleşim bütününün ayrılmaz bir parçası olan Karanlık Kanyon tüm uzunluğu ile yaklaşık 35 km.dir. Kanyon’daki nehir tabanı ile vadi kenarı arasındaki kot farkı ise 1000 metreye kadar ulaşmaktadır. Bu haliyle Karanlık Kanyon dünyadaki ilk beş derin kanyon arasında yer almaktadır. Karanlık Kanyon, gerek jeolojik yapısıyla, gerekse sert kayaların içinden oyularak inşa edilmiş “Taş Yol” u ile istisnai bir doğal güzelliğe ve estetik öneme sahiptir. 7 kilometre uzunluğundaki Taş Yol, 400-500 m yüksekliğe sahip büyüklü küçüklü 38 tünelden oluşur ve Dünyadaki “Tehlikeli Yollar” kategorisinde yer almaktadır. Kemaliye yerleşim merkezinin 4-5 km kuzeybatısında yer alan Dilli Vadisi’nde eski Türk izlerine rastlanılmaktadır. Dilli Vadisi içerisinde yer alan petroğlifler ve damgalar üzerinde yapılan çalışmalar sonucu elde edilen veriler Türk kültür tarihi açısından önemli bilgiler içermektedir. Kemaliye Tarihi Kenti, 2021 yılında UNESCO Dünya Mirası Geçici Listesine eklenmiştir. Ayrıca, Kemaliye 2022 yılında Türkiye’nin sakin şehirler (cittaslow) ağına dahil edilmiştir.",
      imgs: [
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Erzincan_Kemaliye_Evleri%20(2)%20kopya.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/Kemaliye%20Karanl%c4%b1k%20Kanyon%20(5)%20kopya.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ErzincanKemaliyeEvleriAliMuratCoruk14_20170607100823443.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/MUHAMMED_KOSEN_ERZ%c4%b0NCAN_Kemaliye%20kopya.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ERZ%c4%b0NCAN-KEMAL%c4%b0YE-G%c3%9cLCAN%20ACAR%20(77)%20kopya.jpg",
          caption: "",
        },
        {
          src: "https://kvmgm.ktb.gov.tr/Resim/363205,dmagecicikemaliye3jpg.png?0",
          caption: "",
        },
      ],
      link: "kemaliye.html",
    },
    {
      name: "Akdamar Kilisesi",
      lat: 38.503493,
      lng: 43.396448,
      desc: "Van Gölü'ndeki Akdamar Adası'nda yer alan Akdamar Kilisesi, 10. yüzyılda Vaspurakan Kralı I. Gagik tarafından M.S. 915-921 yılları arasında inşa ettirilmiştir. Ermeni mimarisi açısından büyük öneme sahip olan kilise, Orta Çağ'da dini ve kültürel bir merkez olmuştur. Kilisenin dış cephesinde yer alan taş kabartmalar; Tevrat'tan, İncil'den sahneler ve hayvan figürleriyle dikkat çeker. 2007 yılında restore edilerek müze olarak ziyarete açılmış, aynı zamanda yılda bir kez ayin yapılmasına da izin verilmiştir. Eşsiz mimarisi ve Van Gölü'nün ortasındaki konumuyla hem kültürel hem doğal bir miras alanıdır.",
      imgs: [
        {
          src: "https://kulturportali.gov.tr/contents/images/Akdamar%20Ant%20M%c3%bczesi%20(13).jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/ca646302-2f3d-49d3-a393-ec12e35956cc.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/09b8bb3f-d221-43d9-9bbb-b48a3f9909b0.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/e1d174c2-f5e9-4529-9442-3b001298786b.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/61b1a07a-8c00-4188-9248-5700c50ca95a.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/9c7231c4-f310-40c9-9367-5c1ac378a9f1.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/9b313775-7a20-422c-961b-4a6a7d26bd0a.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/156769ea-b53e-49f0-87ed-762623e85bd9.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/03ac134e-b192-414a-9fd4-9a9bbfb505c8.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/d000fd56-2001-485b-bbcf-7e3ff6385403.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/Müze/Foto/Fotoğraflar/8277aca4-06a9-4f7a-8c48-fb242347a6a8.jpg",
          caption: "",
        },
      ],
      link: "https://www.sanal-tur.com/galeri/akdamar-kilisesi-van/",
    },
    {
      name: "Ayasofya Camii",
      lat: 41.0082,
      lng: 28.9784,
      desc: "1985 yılında UNESCO Dünya Mirası Listesi’ne kaydedilen İstanbul’un Tarihî Alanları kapsamında yer alan Ayasofya, Bizans ve Osmanlı dönemlerine tanıklık eden eşsiz bir yapıdır. 537 yılında Doğu Roma İmparatoru I. Justinianus tarafından kilise olarak inşa edilen yapı, 1453 yılında İstanbul’un fethiyle camiye çevrilmiş, 1935’te müze olarak düzenlenmiş ve 2020’de yeniden cami statüsüne kavuşmuştur. Mimari olarak hem Bizans hem de Osmanlı izlerini taşıyan Ayasofya, kubbesi, mozaikleri ve tarihî katmanlarıyla dünya mimarlık tarihinde benzersiz bir konuma sahiptir. Ayasofya, dini, kültürel ve politik geçişlerin sembolü olarak; farklı medeniyetlerin izlerini bir arada barındırmasıyla insanlık tarihinin en önemli yapılarından biri olarak kabul edilmektedir.",
      imgs: [
        {
          src: "https://www.kulturportali.gov.tr/contents/images/0156-%c4%b0STANBUL-AYASOFYA-ROBERT%20M_%20KNIGHT-11-25-2013.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/0978-ISTANBUL-%20AYASOFYA-STEVE%20MCCURRY-17_11_2013.jpg?format=jpg&quality=50&width=1200",
          caption: "",
        },
        {
          src: "https://cdn1.ntv.com.tr/gorsel/4B0qxR6QWECfyr58TfbdbA.jpg?width=1000&mode=both&scale=both&v=1700657115656",
          caption: "",
        },
        {
          src: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2144000/2145097.jpg",
          caption: "",
        },
        {
          src: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2144000/2145098.jpg",
          caption: "",
        },
        {
          src: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2144000/2145099.jpg",
          caption: "",
        },
        {
          src: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2144000/2145089.jpg",
          caption: "",
        },
        {
          src: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2144000/2145090.jpg",
          caption: "",
        },
        {
          src: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2144000/2145092.jpg",
          caption: "",
        },
        {
          src: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2144000/2145093.jpg",
          caption: "",
        },
        {
          src: "https://trthaberstatic.cdn.wp.trt.com.tr/resimler/2144000/2145096.jpg",
          caption: "",
        },
      ],
      link: "https://www.ayasofyacamii.gov.tr/sanaltur/index.html",
    },
    {
      name: "Gordion", //
      lat: 39.925533,
      lng: 32.866287,
      desc: "Türkiye’nin başkenti Ankara’da bulunan Gordion arkeolojik alanı, bir zamanlar Demir Çağı uygarlığı Frigya'nın başkenti olan antik bir yerleşim yeridir. Sit alanı, Kale Höyüğü, Aşağı Şehir, Dış Şehir ve kapsamlı surların yanı sıra, antik ahşap mezar odasıyla Midas Höyüğü'nün özellikle dikkat çekici olduğu önemli mezar höyükleri ve tümülüsleri içermektedir. Önemli özellikleri arasında iyi korunmuş Demir Çağı kapı sistemi, erken Frig mozaikleri ve büyük ölçekli gıda hazırlama ve tekstil üretimine yönelik geniş Teras Kompleksi yer almaktadır. Gordion'un Doğu ve Batı arasındaki antik ticaret yollarının kavşağındaki stratejik konumu, bu alanı önemli bir ticaret ve kültür merkezi haline getirmiştir. Anıtsal mimarisi, ileri mühendislik çalışmaları ve zengin arkeolojik kalıntılarıyla Frig uygarlığı hakkında eşsiz bilgiler sunan Gordion, 2023 yılında UNESCO Dünya Mirası Listesi'ne kaydedilmiştir",
      imgs: [
        {
          src: "https://lh7-rt.googleusercontent.com/docsz/AD_4nXetiIr1tvST_FMImDOurCuT9zjFDtIBE51U0DzqZdLAZz5JdpIDQh_sXsHBII-1THZfXXgPfTibJ2trtwZDi2kRiouEecnfXNtJMDoEBlObDK6Aj9YooE7DHTV3h7pfLLvVFBB8EylDzbGc9p-T6dXSmhsv0tJWdoXdtrnlnQ?key=84xZsBJSvUcJixUNmKaEoA",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ANKARA%20Polatl%c4%b1%20Gordion%20Servet%20UYGUN%20(39)%20kopya.jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ANKARA%20Polatl%c4%b1%20Gordion%20Servet%20UYGUN%20(1)%20kopya(1).jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ANKARA%20Polatl%c4%b1%20Gordion%20Servet%20UYGUN%20(9)%20kopya(1).jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ANKARA-POLATLI-GORD%c4%b0YON-HAM%c4%b0T%20YAL%c3%87IN%20(1)%20kopya(1).jpg",
          caption: "",
        },
        {
          src: "https://www.kulturportali.gov.tr/contents/images/ANKARA%20Polatl%c4%b1%20Gordion%20Servet%20UYGUN%20(34)%20kopya(1).jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/61db40e9-e715-4b7c-a7ee-b5268a65ac82.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/5969ca6e-83dd-45ff-bc9d-de719d6489a8.jpg",
          caption: "",
        },
        {
          src: "https://www.turkishmuseums.com/Uploads/M%C3%BCze/Foto/Foto%C4%9Fraflar/bc5fe0e8-c472-49e1-8cf5-b8281e5f9ed2.jpg",
          caption: "",
        },
      ],
      link: "",
    },
  ];

  let isSpeaking = false;
  let utterance;

  function speakDescription(text, button) {
    if (isSpeaking) {
      speechSynthesis.cancel();
      isSpeaking = false;
      button.textContent = "Sesli Açıklama";
    } else {
      utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
      isSpeaking = true;
      button.textContent = "Durdur";
      utterance.onend = () => {
        isSpeaking = false;
        button.textContent = "Sesli Açıklama";
      };
    }
  }

  unescoYerleri.forEach((yer) => {
    const marker = new google.maps.Marker({
      position: { lat: yer.lat, lng: yer.lng },
      map,
      title: yer.name,
    });

    const infoWindow = new google.maps.InfoWindow({
      maxWidth: 350,
      content: `
    <div style="max-width: 550px; overflow-y: visible; max-height: 550px;">
      <h4 style="font-size: 20px;">${yer.name}</h4>
      ${
        yer.imgs && yer.imgs.length > 0
          ? `<img src="${yer.imgs[0].src}" class="small-img" style="cursor: pointer; max-width: 100%; height: auto;" onclick="zoomImage('${yer.imgs[0].src}')"/>`
          : `<p>Bu yerle ilgili görsel bulunamadı.</p>`
      }
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
        <button class="addCommentButton" style="background-color: #f44336; color: white; width: 100%; margin-top: 5px;">Yorum Ekle</button>
        <button class="commentButton" style="background-color: #e91e63; color: white; width: 100%;">Yorumlar ve Puanlar</button>
        <button class="descButton" style="background-color: #4CAF50; color: white; width: 48%; margin-bottom: 5px;">Yazılı Anlatım</button>
        <button class="speakButton" style="background-color: #2196F3; color: white; width: 48%; margin-bottom: 5px;">Sesli Anlatım</button>
        <button class="galleryButton" style="background-color: #FF9800; color: white; width: 48%;">Daha Fazla Görsel</button>
        ${
          yer.link
            ? `<button class="tourButton" style="background-color: #673ab7; color: white; width: 48%;" onclick="window.open('${yer.link}', '_blank')">360° Görüntüle</button>`
            : ""
        }
      </div>
      <p class="descText" style="display:none; font-size: 18px; line-height: 1.6;">
        ${yer.desc}
      </p>
    </div>
  `,
    });

    marker.addListener("click", () => {
      if (currentInfoWindow) currentInfoWindow.close();
      infoWindow.open(map, marker);
      currentInfoWindow = infoWindow;

      google.maps.event.addListener(infoWindow, "domready", () => {
        const commentButton = document.querySelector(".commentButton");
        const addCommentButton = document.querySelector(".addCommentButton");
        const descButton = document.querySelector(".descButton");
        const speakButton = document.querySelector(".speakButton");
        const galleryButton = document.querySelector(".galleryButton");
        const descText = document.querySelector(".descText");

        if (addCommentButton)
          addCommentButton.onclick = () => showAddCommentForm(yer.name);
        if (commentButton) commentButton.onclick = () => showComments(yer.name);
        if (descButton)
          descButton.onclick = () =>
            (descText.style.display =
              descText.style.display === "none" ? "block" : "none");
        if (speakButton)
          speakButton.onclick = function () {
            speakDescription(yer.desc, this);
          };
        if (galleryButton)
          galleryButton.onclick = () => {
            showCarousel(yer.imgs);
          };
      });
    });
  });

  function showComments(yerAdi) {
    fetch(`http://localhost:3000/api/yorumlar/${encodeURIComponent(yerAdi)}`)
      .then((res) => res.json())
      .then((data) => {
        const modal = document.createElement("div");
        modal.className = "modal";
        modal.style = `
        display: flex;
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        justify-content: center;
        align-items: center;
      `;

        const yorumHTML = data.yorumlar
          .map((y) => {
            const puan = "⭐".repeat(y.puan) + "☆".repeat(5 - y.puan);
            const tarih = new Date(y.tarih).toLocaleString();

            return `
            <div style="margin-bottom: 12px; padding: 15px; background: #fefefe; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
              <div style="font-size: 18px;">${puan} (${y.puan}/5)</div>
              <p style="font-style: italic; margin: 10px 0;">${y.yorum}</p>
              <small style="color: #777;">${tarih}</small>
            </div>
          `;
          })
          .join("");

        modal.innerHTML = `
        <div style="width: 90%; max-width: 600px; background: #fff; border-radius: 14px; padding: 25px; max-height: 80vh; overflow-y: auto; position: relative;">
          <span style="position: absolute; top: 10px; right: 20px; cursor: pointer; font-size: 28px;">&times;</span>
          <h2 style="margin-bottom: 10px;">${yerAdi} için Yorumlar</h2>
          <p style="margin-bottom: 20px;"><strong>Ortalama Puan:</strong> ${
            data.ortalamaPuan?.toFixed(1) || "0.0"
          } / 5 ⭐</p>
          ${yorumHTML || "<p>Henüz yorum yok.</p>"}
        </div>
      `;

        document.body.appendChild(modal);
        modal.querySelector("span").onclick = () => modal.remove();
      })
      .catch((err) => {
        alert("Yorumlar alınırken hata oluştu.");
        console.error(err);
      });
  }

  function showAddCommentForm(yerAdi) {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.style = `
    display: flex;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
  `;
    modal.innerHTML = `
    <div style="width: 90%; max-width: 500px; background: #fff; border-radius: 10px; padding: 20px; position: relative;">
      <span style="position: absolute; top: 10px; right: 20px; cursor: pointer; font-size: 24px;">&times;</span>
      <h3>${yerAdi} için Yorum Ekle</h3>
      <form id="yorumForm">
        <label>Puan (1-5):</label><br/>
        <div id="stars" style="font-size: 30px; cursor: pointer; display: flex; justify-content: space-between; width: 150px; margin-bottom: 10px;">
          <span class="star" data-value="1">☆</span>
          <span class="star" data-value="2">☆</span>
          <span class="star" data-value="3">☆</span>
          <span class="star" data-value="4">☆</span>
          <span class="star" data-value="5">☆</span>
        </div>
        <label>Yorum:</label><br/>
        <textarea required id="yorum" style="width: 100%; height: 100px; margin-bottom: 10px;"></textarea><br/>
        <button type="submit" style="background-color: #4CAF50; color: white; padding: 10px; border: none; width: 100%;">Gönder</button>
      </form>
    </div>
  `;
    document.body.appendChild(modal);
    modal.querySelector("span").onclick = () => modal.remove();

    let selectedRating = 0;

    const stars = modal.querySelectorAll(".star");
    stars.forEach((star) => {
      star.onclick = () => {
        selectedRating = parseInt(star.getAttribute("data-value"));
        updateStarRating();
      };
    });

    function updateStarRating() {
      stars.forEach((star) => {
        const value = parseInt(star.getAttribute("data-value"));
        if (value <= selectedRating) {
          star.textContent = "⭐";
        } else {
          star.textContent = "☆";
        }
      });
    }

    modal.querySelector("#yorumForm").onsubmit = (e) => {
      e.preventDefault();
      const yorum = document.getElementById("yorum").value;

      if (selectedRating === 0) {
        alert("Lütfen bir puan seçin.");
        return;
      }

      fetch("http://localhost:3000/api/yorum-ekle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ yerAdi, puan: selectedRating, yorum }),
      })
        .then((res) => res.json())
        .then((result) => {
          alert("Yorum kaydedildi");
          modal.remove();
          showComments(yerAdi);
        })
        .catch((err) => {
          alert("Hata oluştu");
          console.error(err);
        });
    };
  }

  // Galeri açma ve görselleri kaydırma işlevi
  function showCarousel(images) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex; justify-content: center; align-items: center;
    z-index: 9999;
  `;

    const carousel = document.createElement("div");
    carousel.classList.add("carousel");
    carousel.style.cssText = `
    position: relative;
    width: 80%;
    max-width: 800px;
    overflow: hidden;
    background-color: #111;
    padding: 20px;
    border-radius: 10px;
  `;

    const carouselInner = document.createElement("div");
    carouselInner.classList.add("carousel-inner");
    carouselInner.style.cssText = `
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: ${images.length * 100}%;
  `;

    // Her öğe eşit genişlikte olacak şekilde stil ayarla
    images.forEach((imgData, index) => {
      const carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");
      carouselItem.style.cssText = `
      width: ${100 / images.length}%;
      height: 70vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    `;

      const img = document.createElement("img");
      img.src = imgData.src;
      img.alt = imgData.caption || "UNESCO görseli";
      img.style.cssText = `
      max-width: 100%;
      max-height: 60vh;
      object-fit: contain;
      border-radius: 10px;
    `;

      const caption = document.createElement("div");
      caption.textContent = imgData.caption || "";
      caption.style.cssText =
        "margin-top: 10px; font-size: 16px; color: white; text-align: center;";

      carouselItem.appendChild(img);
      carouselItem.appendChild(caption);
      carouselInner.appendChild(carouselItem);
    });

    const prevButton = document.createElement("button");
    prevButton.textContent = "←";
    prevButton.classList.add("carousel-btn", "prev");
    prevButton.style.cssText = `
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
  `;

    const nextButton = document.createElement("button");
    nextButton.textContent = "→";
    nextButton.classList.add("carousel-btn", "next");
    nextButton.style.cssText = `
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
  `;

    carousel.appendChild(carouselInner);
    carousel.appendChild(prevButton);
    carousel.appendChild(nextButton);
    modal.appendChild(carousel);
    document.body.appendChild(modal);

    let currentIndex = 0;

    function updateCarousel() {
      carouselInner.style.transform = `translateX(-${
        (100 / images.length) * currentIndex
      }%)`;
    }

    prevButton.onclick = () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    };

    nextButton.onclick = () => {
      if (currentIndex < images.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    };

    // Modal kapama
    modal.onclick = (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    };
  }
}
