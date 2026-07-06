// Harita sayfası linkine tıklanınca yönlendirecek
document.querySelector('a[href="harita.html"]').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'https://www.google.com/maps';
  });
  