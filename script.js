// Fungsi untuk kembali ke Menu Utama
function goToMenu() {
    hideAllPages();
    document.getElementById('page-menu').classList.add('active');
    resetGift();
}

// Fungsi untuk membuka menu pilihan
function openSection(sectionName) {
    hideAllPages();
    
    if (sectionName === 'journey') {
        document.getElementById('page-journey').classList.add('active');
    } else if (sectionName === 'moment') {
        document.getElementById('page-moment').classList.add('active');
    } else if (sectionName === 'playlist') {
        document.getElementById('page-playlist').classList.add('active');
    } else if (sectionName === 'gift') {
        document.getElementById('page-gift').classList.add('active');
    } else {
        goToMenu();
    }
}

// Fungsi interaktif untuk membuka kotak kado
function openGiftBox() {
    document.getElementById('giftBox').style.display = 'none';
    document.getElementById('giftReveal').style.display = 'block';
}

// Fungsi untuk menutup kembali kotak kado
function resetGift() {
    document.getElementById('giftBox').style.display = 'flex';
    document.getElementById('giftReveal').style.display = 'none';
}

// Fungsi bantu untuk menyembunyikan semua halaman
function hideAllPages() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
}
