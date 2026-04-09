// Fungsi untuk menghasilkan data simulasi
function fetchData() {
    // Di masa depan, ganti bagian ini dengan fetch('url-api-esp32')
    const sensorData = {
        suhu: (27 + Math.random() * 3).toFixed(2),
        ph: (6.5 + Math.random() * 0.5).toFixed(1),
        kelembapan: (75 + Math.random() * 5).toFixed(0),
        watt: (45 + Math.random() * 10).toFixed(1),
        voltPanel: (13.5 + Math.random() * 1).toFixed(1),
        amperePanel: (3.2 + Math.random() * 0.5).toFixed(2),
        bateraiPersen: (90 + Math.random() * 5).toFixed(0),
        bateraiVolt: (12.6 + Math.random() * 0.2).toFixed(1),
        pompa: Math.random() > 0.5 // Random ON atau OFF
    };

    updateUI(sensorData);
}

// Fungsi untuk memperbarui tampilan dashboard
function updateUI(data) {
    // Update Teks
    document.getElementById('suhu').innerText = data.suhu;
    document.getElementById('ph-air').innerText = data.ph;
    document.getElementById('kelembapan').innerText = data.kelembapan;
    document.getElementById('panel-watt').innerText = data.watt + " W";
    document.getElementById('panel-volt').innerText = data.voltPanel + " V";
    document.getElementById('panel-ampere').innerText = data.amperePanel + " A";
    document.getElementById('baterai-persen').innerText = data.bateraiPersen + " %";
    document.getElementById('baterai-volt').innerText = data.bateraiVolt + " V";

    // Update Status Pompa & Warna Kotak
    const pumpCard = document.getElementById('pump-card');
    const pumpStatus = document.getElementById('status-pompa');
    const pumpMsg = document.getElementById('pump-msg');

    if (data.pompa) {
        pumpStatus.innerText = "ON";
        pumpMsg.innerText = "Penyiraman Aktif";
        pumpCard.classList.add('pump-on');
    } else {
        pumpStatus.innerText = "OFF";
        pumpMsg.innerText = "Sistem Standby";
        pumpCard.classList.remove('pump-on');
    }
}

// Update Waktu Real-time
function showTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    document.getElementById('current-time').innerText = now.toLocaleDateString('id-ID', options);
}

// Jalankan sistem
setInterval(fetchData, 3000); // Perbarui data tiap 3 detik
setInterval(showTime, 1000);  // Perbarui jam tiap detik

// Panggil pertama kali saat halaman dibuka
fetchData();
showTime();