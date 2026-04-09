// ==========================================
// 1. Fungsi Waktu & Tanggal Real-time
// ==========================================
function updateDateTime() {
    const now = new Date();
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const dayName = days[now.getDay()];
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const dateString = `${dayName}, ${day}/${month}/${year}`;
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('current-date').textContent = dateString;
    document.getElementById('current-time').textContent = timeString;
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Panggil langsung

// ==========================================
// 2. Konfigurasi Grafik (Chart.js GAYA BARU)
// ==========================================

// Label Waktu Contoh untuk Tampilan "Live" (misal setiap 10 menit)
const timeLabelsLive = ['10:00', '10:10', '10:20', '10:30', '10:40', '10:50', '11:00'];

// Warna Oranye yang digunakan dalam contoh (untuk semua grafik agar seragam/branding)
const chartOrangeCode = '#FF7A45'; // Warna oranye utama
const chartOrangeFill = 'rgba(255, 122, 69, 0.1)'; // Oranye dengan transparansi 10% untuk fill area

// Opsi Global untuk tampilan grafik "Live Area Chart" yang halus dan bersih
const liveAreaChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Mengikuti tinggi container CSS
    plugins: {
        legend: { display: false } // Sembunyikan legenda
    },
    scales: {
        x: {
            grid: { display: false }, // Sembunyikan garis grid X (fokus pada waktu)
            ticks: { 
                font: { size: 10 },
                color: '#888' // Warna label sumbu X
            }
        },
        y: {
            beginAtZero: false, // Grafik lebih detail
            grid: {
                color: 'rgba(200, 200, 200, 0.1)', // Garis grid horizontal tipis
                drawBorder: false // Sembunyikan garis pinggir sumbu Y
            },
            ticks: { 
                font: { size: 10 },
                color: '#888' // Warna label sumbu Y
            }
        }
    },
    elements: {
        // TATA LETAK GARIS: Sangat penting untuk kehalusan
        line: {
            tension: 0.4, // Membuat garis melengkung halus (gaya spline), coba 0.3-0.5
            borderWidth: 2.5 // Ketebalan garis utama
        },
        // TATA LETAK TITIK DATA: Gaya lingkaran berongga
        point: { 
            radius: 4, // Ukuran titik
            backgroundColor: '#fff', // Latar belakang putih (berongga)
            borderColor: chartOrangeCode, // Garis tepi warna oranye
            borderWidth: 2, // Ketebalan garis tepi titik
            hoverRadius: 6, // Ukuran saat di-hover
            hoverBorderWidth: 3 // Ketebalan tepi saat di-hover
        }
    }
};

// --- Inisialisasi Grafik Suhu (Area Chart) ---
const ctxTemp = document.getElementById('tempChart').getContext('2d');
new Chart(ctxTemp, {
    type: 'line',
    data: {
        labels: timeLabelsLive,
        datasets: [{
            data: [21.5, 22.0, 22.8, 23.5, 23.2, 22.5, 22.0], // Data contoh
            borderColor: chartOrangeCode, // Warna garis oranye
            backgroundColor: chartOrangeFill, // Area chart oranye transparan
            fill: true // AKTIFKAN PENGISIAN AREA (Area Chart)
        }]
    },
    options: liveAreaChartOptions
});

// --- Inisialisasi Grafik Kelembapan (Area Chart) ---
const ctxHumid = document.getElementById('humidChart').getContext('2d');
new Chart(ctxHumid, {
    type: 'line',
    data: {
        labels: timeLabelsLive,
        datasets: [{
            data: [68, 67, 65.5, 63, 64, 66, 67], // Data contoh
            borderColor: chartOrangeCode, // Gunakan oranye yang sama untuk konsistensi
            backgroundColor: chartOrangeFill, 
            fill: true 
        }]
    },
    options: {
        ...liveAreaChartOptions,
        scales: {
            ...liveAreaChartOptions.scales,
            y: { min: 0, max: 100, ticks: liveAreaChartOptions.scales.y.ticks } // Set range 0-100%
        }
    }
});

// --- Inisialisasi Grafik pH (Area Chart) ---
const ctxPh = document.getElementById('phChart').getContext('2d');
new Chart(ctxPh, {
    type: 'line',
    data: {
        labels: timeLabelsLive,
        datasets: [{
            data: [6.4, 6.5, 6.5, 6.6, 6.5, 6.4, 6.4], // Data contoh
            borderColor: chartOrangeCode, // Gunakan oranye yang sama
            backgroundColor: chartOrangeFill, 
            fill: true 
        }]
    },
    options: {
        ...liveAreaChartOptions,
        scales: {
            ...liveAreaChartOptions.scales,
            y: { min: 0, max: 14, ticks: liveAreaChartOptions.scales.y.ticks } // Set range pH 0-14
        }
    }
});