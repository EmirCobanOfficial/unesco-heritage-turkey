# Katkı Rehberi / Contributing Guide

Bu projeye ilgi gösterdiğiniz için teşekkürler! 🎉 **Türkiye UNESCO Dünya Mirasları Haritası**, açık kaynak bir TÜBİTAK 4006-B çalışmasıdır ve katkılarınıza açıktır. Bu rehber, katkı sürecini adım adım açıklar.

> _Thanks for your interest! This guide explains how to contribute. Katkılar Türkçe veya İngilizce olabilir._

---

## 📋 Başlamadan Önce

- Bir **hata** mı buldunuz veya bir **öneriniz** mi var? Önce açık [issue'lara](https://github.com/EmirCobanOfficial/tubitak/issues) göz atın; yoksa uygun şablonla yeni bir issue açın.
- Büyük bir değişiklik planlıyorsanız, kod yazmadan önce bir issue açıp fikrinizi tartışmanız zaman kaybını önler.

---

## 🔀 Katkı Akışı (Fork → Branch → PR)

1. **Fork'layın**
   Sağ üstteki **Fork** düğmesiyle depoyu kendi hesabınıza kopyalayın.

2. **Klonlayın**
   ```bash
   git clone https://github.com/<kullanici-adiniz>/tubitak.git
   cd tubitak
   ```

3. **Bir dal (branch) oluşturun**
   Anlamlı bir dal adı kullanın:
   ```bash
   git checkout -b ozellik/kisa-aciklama      # yeni özellik
   git checkout -b duzeltme/hata-aciklamasi   # hata düzeltmesi
   ```

4. **Geliştirin ve test edin**
   ```bash
   npm install
   cp .env.example .env      # kendi değerlerinizi doldurun
   npm start
   ```

5. **Anlamlı commit'ler yapın**
   Kısa, açıklayıcı ve tek konuya odaklı commit mesajları tercih edin:
   ```
   feat: haritaya yeni miras alanı ekle
   fix: yorum formundaki puan doğrulamasını düzelt
   docs: kurulum adımlarını güncelle
   ```

6. **Push'layın ve Pull Request açın**
   ```bash
   git push origin ozellik/kisa-aciklama
   ```
   Ardından GitHub üzerinden `main` dalına bir **Pull Request** açın. PR şablonundaki alanları doldurun.

---

## ✅ Pull Request Kuralları

`main` dalı **korumalıdır**. Bir PR'ın merge edilebilmesi için:

- ✔️ **CI kontrolleri** (GitHub Actions) yeşil geçmelidir (`npm ci`, `npm audit`, sözdizimi kontrolü).
- ✔️ En az **bir onay (review approval)** gereklidir — PR'lar depo sahibi tarafından incelenip merge edilir.
- ✔️ PR açıklaması net olmalı ve varsa ilgili issue'ya bağlanmalıdır (`Closes #123`).
- ✔️ **Sır/kimlik bilgisi eklenmemelidir** (API anahtarı, şifre vb.). Yapılandırma yalnızca `.env` üzerinden yapılır; `.env` asla commit'lenmez.

---

## 🎨 Kod Stili

- Girinti **2 boşluk**, tutarlı ve okunabilir kod.
- Mevcut dosyaların adlandırma ve biçim düzenine uyun.
- Kullanıcıya görünen metinleri ve konsol loglarını **Türkçe** tutun (proje dili Türkçe'dir).

---

## 🤝 Davranış Kuralları

Bu projeye katkıda bulunan herkesin [Davranış Kuralları](CODE_OF_CONDUCT.md)'na uyması beklenir.

---

Sorularınız için bir issue açmaktan çekinmeyin. Katkılarınız için şimdiden teşekkürler! 🙏
