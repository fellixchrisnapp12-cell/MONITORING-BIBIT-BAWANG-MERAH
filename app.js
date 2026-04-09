/**
 * Logika Dashboard Monitoring Bawang Merah
 */

// 1. Fungsi Update Waktu Real-time
function updateClock() {
    const now = new Date();
    
    // Format Tanggal
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const dayName = days[now.getDay()];
    const date = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    
    // Format Jam
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('current-date').textContent = `${dayName}, ${date}/${month}/${year}`;
    document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
}

// Jalankan clock setiap detik
setInterval(updateClock, 1000);
updateClock();

// 2. Simulasi Update Data (Opsional)
// Fungsi ini berguna jika nanti Anda ingin menghubungkan ke API/Sensor sungguhan
function updateSensorData() {
    // Di sini Anda bisa menambahkan logika fetch data dari ESP32/Database
    console.log("Data diperbarui pada: " + new Date().toLocaleTimeString());
}

// Update data setiap 5 detik
setInterval(updateSensorData, 5000);