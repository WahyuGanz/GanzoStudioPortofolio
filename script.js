// Daftar warna yang digunakan
const colors = ['black', 'blue', 'gray', 'red', 'yellow', 'green'];

// Memilih warna target secara acak
const randomIndex = Math.floor(Math.random() * colors.length);
const targetColor = colors[randomIndex];

// Mengubah tampilan warna target di halaman
document.getElementById('target-color').style.backgroundColor = targetColor;

function checkColor(selectedColor) {
    // Periksa apakah warna yang dipilih pengguna sesuai dengan warna target
    if (selectedColor === targetColor) {
        // Jika pilihan benar, mulai hitungan mundur
        startCountdown();  
    } else {
        alert("Verifikasi gagal! Silakan coba lagi.");
    }
}

function startCountdown() {
    let countdown = 5; // Mulai dari 5 detik
    const countdownElement = document.getElementById('countdown');
    
    // Tampilkan pop-up
    const popup = document.getElementById('popup');
    popup.style.display = 'flex'; // Menampilkan pop-up hanya setelah warna benar dipilih

    // Fungsi hitungan mundur
    const interval = setInterval(() => {
        countdown--;
        countdownElement.textContent = `Mengarahkan dalam ${countdown} detik...`;

        if (countdown === 0) {
            clearInterval(interval);
            window.location.href = "beranda/index.html"; // Arahkan ke URL tujuan
        }
    }, 1000); // Setiap 1 detik
}
