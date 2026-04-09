// Fungsi untuk simulasi update data
function updateData() {
    // Simulasi data (Ganti bagian ini dengan fetch API dari sensor Anda)
    const data = {
        suhu: (25 + Math.random() * 5).toFixed(2),
        phAir: (6.5 + Math.random() * 1).toFixed(1),
        kelembapan: (70 + Math.random() * 10).toFixed(0),
        panelWatt: (50 + Math.random() * 20).toFixed(1),
        panelVolt: (12 + Math.random() * 2).toFixed(1),
        panelAmpere: (2 + Math.random() * 1).toFixed(2),
        bateraiPersen: (85 + Math.random() * 5).toFixed(0),
        bateraiVolt: (13.2 + Math.random() * 0.5).toFixed(1)
    };

    // Update elemen HTML
    document.getElementById('suhu').innerText = data.suhu;
    document.getElementById('ph-air').innerText = data.phAir;
    document.getElementById('kelembapan').innerText = data.kelembapan;
    document.getElementById('panel-watt').innerText = data.panelWatt + " W";
    document.getElementById('panel-volt').innerText = data.panelVolt + " V";
    document.getElementById('panel-ampere').innerText = data.panelAmpere + " A";
    document.getElementById('baterai-persen').innerText = data.bateraiPersen + " %";
    document.getElementById('baterai-volt').innerText = data.bateraiVolt + " V (Input)";
}

// Update waktu saat ini
function updateTime() {
    const now = new Date();
    document.getElementById('current-time').innerText = now.toLocaleString('id-ID');
}

// Jalankan fungsi secara berkala
setInterval(updateData, 3000); // Update data setiap 3 detik
setInterval(updateTime, 1000); // Update jam setiap detik

// Panggil sekali saat load pertama
updateData();
updateTime();