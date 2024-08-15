// Script untuk menambahkan konten blog secara dinamis
document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');

    // Data postingan blog
    const posts = [
        {
            title: 'ASCII Donut Animation',
            description: 'ASCII Donut Animation adalah animasi yang menampilkan donut dalam bentuk ASCII. Pengguna dapat menikmati animasi yang unik dan menarik ini.',
            link: 'kontenblog/ASCII Donut Animation/index.html',
            icon: 'kontenblog/ASCII Donut Animation/asciidonutanimation.jpg' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Aspect Ratio Calculator',
            description: 'Aspect Ratio Calculator adalah alat yang memungkinkan pengguna untuk menghitung rasio aspek gambar. Pengguna dapat memasukkan lebar dan tinggi gambar, dan alat ini akan menghitung rasio aspeknya.',
            link: 'kontenblog/Aspect Ratio Calculator/index.html',
            icon: 'kontenblog/Aspect Ratio Calculator/aspectratiocalculator.jpg' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Budget App',
            description: 'Budget App adalah alat yang membantu pengguna untuk mengatur dan mengelola keuangan mereka dengan lebih efektif. Dengan menggunakan Budget App, Anda dapat membuat anggaran, mengatur prioritas, dan memantau pengeluaran Anda.',
            link: 'kontenblog/Budget App/index.html',
            icon: 'kontenblog/Budget App/budgetapp.jpg' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Chess Game',
            description: 'Chess Game adalah permainan catur yang memungkinkan pengguna untuk bermain catur dengan komputer atau lawan lainnya. Dengan menggunakan Chess Game, Anda dapat meningkatkan keterampilan berpikir strategis dan analitis Anda.',
            link: 'kontenblog/Chess Game/index.html',
            icon: 'kontenblog/Chess Game/chessgame.png' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Flip a Coin',
            description: 'Flip a Coin adalah permainan yang memungkinkan pengguna untuk mengundi dengan cara mengocok koin. Pengguna dapat memilih untuk mengundi koin dan melihat hasilnya, apakah itu kepala atau ekor.',
            link: 'kontenblog/Flip a Coin/index.html',
            icon: 'kontenblog/Flip a Coin/flipacoin.jpg' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Gameboy Tetris',
            description: 'Gameboy Tetris adalah versi permainan klasik Tetris yang dimainkan di konsol Gameboy. Dengan menggunakan Gameboy Tetris, Anda dapat mengingat kenangan masa kecil Anda.',
            link: 'kontenblog/Gameboy Tetris/index.html',
            icon: 'kontenblog/Gameboy Tetris/gameboytetris.jpg' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Image Color Picker',
            description: 'Image Color Picker adalah alat yang memungkinkan pengguna untuk memilih warna dari gambar. Dengan menggunakan Image Color Picker, Anda dapat memilih warna yang sesuai untuk desain Anda.',
            link: 'kontenblog/Image Color Picker/index.html',
            icon: 'kontenblog/Image Color Picker/imagecolorpicker.png' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Live Chart Generator',
            description: 'Live Chart Generator adalah alat yang memungkinkan pengguna untuk membuat grafik secara langsung. Dengan menggunakan Live Chart Generator, Anda dapat membuat grafik yang dinamis dan interaktif.',
            link: 'kontenblog/Live Chart Generator/index.html',
            icon: 'kontenblog/Live Chart Generator/livechartgenerator.jpg' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Pass Generator',
            description: 'Pass Generator adalah alat yang membantu pengguna untuk membuat kata sandi yang kuat dan unik. Dengan menggunakan Pass Generator, Anda dapat menghasilkan kata sandi yang sulit ditebak dan meningkatkan keamanan akun Anda.',
            link: 'kontenblog/Pass Generator/index.html',
            icon: 'kontenblog/Pass Generator/passgenerator.png' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Pixel Art Generator',
            description: 'Pixel Art Generator adalah alat yang memungkinkan pengguna untuk membuat gambar pixel dengan mudah dan cepat.',
            link: 'kontenblog/Pixel Art Generator/index.html',
            icon: 'kontenblog/Pixel Art Generator/pixelartgenerator.png' // Path ke ikon untuk postingan ini
        },
        {
            title: 'QR Code Generator',
            description: 'QR Code Generator adalah alat yang memungkinkan pengguna untuk membuat kode QR yang dapat disesuaikan. Dengan menggunakan QR Code Generator, Anda dapat membuat kode QR untuk berbagai tujuan, seperti berbagi konten, mengarahkan ke situs web, atau mengirim pesan.',
            link: 'kontenblog/QR Code Generator/index.html',
            icon: 'kontenblog/QR Code Generator/qrcodegenerator.png' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Quiz Game',
            description: 'Quiz Game adalah permainan yang menguji pengetahuan Anda dalam berbagai kategori. Dengan menggunakan Quiz Game, Anda dapat menguji kemampuan Anda dan belajar hal baru.',
            link: 'kontenblog/Quiz Game/index.html',
            icon: 'kontenblog/Quiz Game/quizgame.jpg' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Snake Game',
            description: 'Snake Game adalah permainan klasik yang menguji refleks dan strategi Anda. Tujuan permainan ini adalah untuk mengendalikan ular dan menghindari tabrakan dengan dinding atau dirinya sendiri.',
            link: 'kontenblog/Snake Game/index.html',
            icon: 'kontenblog/Snake Game/snakegame.jpg' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Snake Pong',
            description: 'Snake Pong adalah permainan yang menggabungkan elemen dari Snake dan Pong. Tujuan permainan ini adalah untuk mengendalikan ular dan mengembalikan bola ke lawan.',
            link: 'kontenblog/Snake Pong/index.html',
            icon: 'kontenblog/Snake Pong/snakepong.jpg' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Spin Wheel',
            description: 'Spin Wheel adalah permainan yang memungkinkan pengguna untuk berputar roda keberuntungan dan mendapatkan hadiah acak. Pengguna dapat berputar roda dan melihat hasilnya.',
            link: 'kontenblog/Spin Wheel/index.html',
            icon: 'kontenblog/Spin Wheel/spinwheel.jpg' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Text To Speech',
            description: 'Text To Speech adalah alat yang mengubah teks menjadi suara. Pengguna dapat memasukkan teks dan mendengarkan hasilnya dalam bentuk suara.',
            link: 'kontenblog/Text To Speech/index.html',
            icon: 'kontenblog/Text To Speech/texttospeech.png' // Path ke ikon untuk postingan ini
        },
        {
            title: 'ToDo App',
            description: 'ToDo App adalah alat yang membantu pengguna untuk mengatur dan mengelola tugas-tugas mereka dengan lebih efektif. Dengan menggunakan ToDo App, Anda dapat membuat daftar tugas, mengatur prioritas, dan memantau kemajuan Anda.',
            link: 'kontenblog/ToDo App/index.html',
            icon: 'kontenblog/ToDo App/todoapp.png' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Translator App',
            description: 'Translator App adalah alat yang memungkinkan pengguna untuk menerjemahkan teks dari satu bahasa ke bahasa lain. Dengan menggunakan Translator App, Anda dapat dengan mudah berkomunikasi dengan orang dari berbagai negara.',
            link: 'kontenblog/Translator App/index.html',
            icon: 'kontenblog/Translator App/translatorapp.png' // Path ke ikon untuk postingan ini
        },
        {
            title: 'Type Test App',
            description: 'Type Test App adalah alat yang membantu pengguna untuk menguji kecepatan dan akurasi ketikannya. Dengan menggunakan Type Test App, Anda dapat meningkatkan keterampilan mengetik Anda.',
            link: 'kontenblog/Type Test App/index.html',
            icon: 'kontenblog/Type Test App/typetestapp.jpg' // Path ke ikon untuk postingan ini
        },
        {
            title: 'XO Game',
            description: 'XO Game adalah permainan yang menguji kemampuan strategi dan logika Anda. Tujuan permainan ini adalah untuk mendapatkan tiga simbol yang sama dalam baris, kolom, atau diagonal.',
            link: 'kontenblog/XO Game/index.html',
            icon: 'kontenblog/XO Game/xogame.png' // Path ke ikon untuk postingan ini
        },
        // Tambahkan lebih banyak postingan sesuai kebutuhan
    ];

    // Membuat elemen untuk setiap postingan
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';

        postElement.innerHTML = `
            <img src="${post.icon}" alt="${post.title}" class="post-icon">
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <a href="${post.link}">Baca Selengkapnya</a>
        `;

        postsContainer.appendChild(postElement);
    });
});
