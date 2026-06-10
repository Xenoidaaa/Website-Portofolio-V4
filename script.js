const contactMenu = document.getElementById('contact-menu'); // Ambil elemen
const phoneDisplay = document.getElementById('phone-display');

contactMenu.addEventListener('click', function(event) { // Menjalankan fungsi saat contact di click
    event.preventDefault(); // Mencegah halaman reload or melompat
    event.stopPropagation();
    phoneDisplay.classList.toggle('show'); // Menambahkan class show or mengahpus 
});

   

  document.addEventListener('click', function(event) {
    if (!phoneDisplay.contains(event.target)) {
        phoneDisplay.classList.remove('show');
    }
  });
