document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nilai input email dan password
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // Cek kredensial login
    if (email === 'ganzostudio@gmail.com' && password === 'ganzostudio') {
        // Jika login berhasil, arahkan ke halaman index.html
        window.location.href = '../tentangsaya/tentang.html';
    } else {
        // Jika login gagal, tampilkan pesan kesalahan
        alert('Invalid email or password');
    }
});
