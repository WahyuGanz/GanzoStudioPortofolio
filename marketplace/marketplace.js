// Array berisi data produk
const products = [
    {
        image: 'kontenpenjualan/kursi3dmodel.png',
        title: '3D Modeling Chair',
        description: 'Kursi 3D Modeling untuk kenyamanan dan gaya, cocok untuk ruang kerja atau tamu.',
        price: 'Gratis'
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
