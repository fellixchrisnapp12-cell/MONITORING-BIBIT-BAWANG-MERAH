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
// 2. Konfigurasi Grafik (Chart.js)
// ==========================================

// Label Waktu Contoh (misal data diambil setiap jam)
const timeLabels = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

// Opsi Global untuk tampilan grafik yang bersih (mirip gaya evja)
const commonOptions = {
    responsive: true,
    maintainAspectRatio: false, // Mengikuti tinggi container CSS
    plugins: {
        legend: { display: false } // Sembunyikan legenda karena judul sudah ada di H4
    },
    scales: {
        x: {
            grid: { display: false }, // Sembunyikan garis grid X
            ticks: { font: { size: 10 } }
        },
        y: {
            beginAtZero: false,
            ticks: { font: { size: 10 } }
        }
    },
    elements: {
        line: {
            tension: 0.3, // Membuat garis sedikit melengkung (smooth)
            borderWidth: 2
        },
        point: { radius: 2 }
    }
};

// --- Inisialisasi Grafik Suhu ---
const ctxTemp = document.getElementById('tempChart').getContext('2d');
new Chart(ctxTemp, {
    type: 'line',
    data: {
        labels: timeLabels,
        datasets: [{
            data: [21.5, 22.0, 22.8, 23.5, 23.2, 22.5, 22.0], // Data contoh
            borderColor: '#8cc63f', // Warna hijau aksen
            backgroundColor: 'rgba(140, 198, 63, 0.1)', // Area chart transparan
            fill: true
        }]
    },
    options: commonOptions
});

// --- Inisialisasi Grafik Kelembapan ---
const ctxHumid = document.getElementById('humidChart').getContext('2d');
new Chart(ctxHumid, {
    type: 'line',
    data: {
        labels: timeLabels,
        datasets: [{
            data: [68, 67, 65.5, 63, 64, 66, 67], // Data contoh
            borderColor: '#3498db', // Warna biru
            backgroundColor: 'rgba(52, 152, 219, 0.1)',
            fill: true
        }]
    },
    options: {
        ...commonOptions,
        scales: {
            ...commonOptions.scales,
            y: { min: 0, max: 100, ticks: { font: { size: 10 } } } // Set range 0-100%
        }
    }
});

// --- Inisialisasi Grafik pH ---
const ctxPh = document.getElementById('phChart').getContext('2d');
new Chart(ctxPh, {
    type: 'line',
    data: {
        labels: timeLabels,
        datasets: [{
            data: [6.4, 6.5, 6.5, 6.6, 6.5, 6.4, 6.4], // Data contoh
            borderColor: '#f1c40f', // Warna kuning
            backgroundColor: 'rgba(241, 196, 15, 0.1)',
            fill: true
        }]
    },
    options: {
        ...commonOptions,
        scales: {
            ...commonOptions.scales,
            y: { min: 0, max: 14, ticks: { font: { size: 10 } } } // Set range pH 0-14
        }
    }
});