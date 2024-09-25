// Array berisi data produk
const products = [
    {
        image: 'kontenpenjualan/kursi3dmodel.png',
        title: '3D Modeling Chair',
        description: 'Kursi 3D Modeling untuk kenyamanan dan gaya, cocok untuk ruang kerja atau tamu.',
        price: 'Gratis'
    },
    {
        image: 'kontenpenjualan/gantungankuncifurina.png',
        title: 'Gantungan Kunci Furina',
        description: 'Gantungan kunci lucu dan unik, cocok untuk hadiah atau koleksi.',
        price: 'Rp 10.000'
    },
    {
        image: 'kontenpenjualan/bundlealokfreefire.png',
        title: 'Bundle Alok Free Fire',
        description: 'Dapatkan bundle eksklusif untuk meningkatkan pengalaman bermain Free Fire Anda.',
        price: 'Rp 50.000'
    },
    {
        image: 'kontenpenjualan/remoteacmbakrara.png',
        title: 'Remote AC Mbak Rara',
        description: 'Remote AC yang nyaman dan mudah digunakan, cocok untuk ruang tamu atau kamar tidur.',
        price: 'Rp 20.000'
    },
    {
        image: 'kontenpenjualan/stickerhitam.jpg',
        title: 'Stiker Orang Hitam',
        description: 'Stiker lucu dan unik, cocok untuk hiasan laptop atau kamar. Gak hitam garansi uang kembali!',
        price: 'Rp 5.000'
    },
    {
        image: 'kontenpenjualan/esbatu.png',
        title: 'Es Batu',
        description: 'Laku ga laku tetap cair.',
        price: 'Rp 5.000'
    },
    {
        image: 'kontenpenjualan/segomegono.png',
        title: 'Sego Megono',
        description: 'Sarapan Lur.',
        price: 'Rp 5.000'
    },
    {
        image: 'kontenpenjualan/tahucampur.png',
        title: 'Tahu Campur',
        description: 'Tahu campur yang lezat dan bergizi, cocok untuk sarapan atau makan siang.',
        price: 'Rp 15.000'
    },
    {
        image: 'kontenpenjualan/pecellelelamongan.png',
        title: 'Pecel Lele Lamongan',
        description: 'Pecel lele yang lezat dan autentik dari Lamongan, cocok untuk makan siang atau malam.',
        price: 'Rp 20.000'
    },
    {
        image: 'kontenpenjualan/rendang.png',
        title: 'Rendang',
        description: 'Rendang yang lezat dan autentik, cocok untuk makan siang atau malam.',
        price: 'Rp 25.000'
    },
    {
        image: 'kontenpenjualan/pempek.jpeg',
        title: 'Pempek',
        description: 'Pempek yang gurih dan segar, sangat cocok untuk camilan atau hidangan utama.',
        price: 'Rp 30.000'
    },
    {
        image: 'kontenpenjualan/nasigoreng.jpg',
        title: 'Nasi Goreng',
        description: 'Nasi goreng yang lezat dan bergizi, sangat cocok untuk makan siang atau malam.',
        price: 'Rp 10.000'
    },
    // Tambahkan produk lainnya di sini
];

// Fungsi untuk menambahkan produk ke halaman marketplace
function addProducts() {
    const productsContainer = document.getElementById('content-items'); // Ganti dengan ID yang sesuai
    
    products.forEach(product => {
        // Buat elemen card untuk setiap produk
        const productCard = document.createElement('div');
        productCard.classList.add('card');

        // Buat elemen gambar produk
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.title;

        // Buat elemen judul produk
        const productTitle = document.createElement('h4');
        productTitle.textContent = product.title;

        // Buat elemen deskripsi produk
        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;

        // Buat elemen tombol beli
        const productButton = document.createElement('button');
        productButton.classList.add('btn');
        productButton.textContent = `Beli - ${product.price}`;
        productButton.addEventListener('click', () => {
            alert(`Terima kasih telah membeli ${product.title} untuk ${product.price}`);
        });

        // Tambahkan semua elemen ke dalam card
        productCard.appendChild(productImage);
        productCard.appendChild(productTitle);
        productCard.appendChild(productDescription);
        productCard.appendChild(productButton);

        // Tambahkan card ke dalam kontainer produk
        productsContainer.appendChild(productCard);
    });
}

// Panggil fungsi addProducts ketika halaman selesai dimuat
document.addEventListener('DOMContentLoaded', addProducts);
