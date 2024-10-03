const colors = ['black', 'blue', 'gray', 'red', 'yellow', 'green'];
let correctColor = '';
let previousColor = '';

window.onload = function() {
    setRandomColor();
};

function setRandomColor() {
    do {
        correctColor = colors[Math.floor(Math.random() * colors.length)];
    } while (correctColor === previousColor);  // Pastikan warna tidak sama dengan yang sebelumnya
    previousColor = correctColor;
    document.getElementById('target-color').style.backgroundColor = correctColor;
}

function checkColor(selectedColor) {
    if (selectedColor === correctColor) {
        showPopup('popup', 5, 'beranda/index.html');
    } else {
        showPopup('wrong-popup', 10, null, true); // Menampilkan pop-up kesalahan dengan hitungan mundur 10 detik
    }
}

function showPopup(popupId, countdownTime, redirectUrl, isRetry = false) {
    let countdownElement = isRetry ? document.getElementById('wrong-countdown') : document.getElementById('countdown');
    let popup = document.getElementById(popupId);
    let timeLeft = countdownTime;
    popup.style.display = 'flex';

    let countdownInterval = setInterval(function() {
        countdownElement.textContent = isRetry
            ? `Anda memilih warna yang salah. Coba lagi dalam ${timeLeft} detik...`
            : `Selamat! Anda akan masuk dalam ${timeLeft} detik...`;

        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            popup.style.display = 'none';
            if (isRetry) {
                setRandomColor(); // Setel warna baru setelah hitungan mundur kesalahan selesai
            } else if (redirectUrl) {
                window.location.href = redirectUrl;
            }
        }
    }, 1000);
}
