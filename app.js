function updateData() {
    // Simulasi data
    const data = {
        // ... data lainnya tetap sama ...
        suhu: (25 + Math.random() * 5).toFixed(2),
        phAir: (6.5 + Math.random() * 1).toFixed(1),
        kelembapan: (70 + Math.random() * 10).toFixed(0),
        panelWatt: (50 + Math.random() * 20).toFixed(1),
        panelVolt: (12 + Math.random() * 2).toFixed(1),
        panelAmpere: (2 + Math.random() * 1).toFixed(2),
        bateraiPersen: (85 + Math.random() * 5).toFixed(0),
        bateraiVolt: (13.2 + Math.random() * 0.5).toFixed(1),
        
        // Logika Pompa: ON jika kelembapan < 75% (contoh simulasi)
        pompaAktif: Math.random() > 0.5 
    };

    // Update elemen HTML lainnya
    document.getElementById('suhu').innerText = data.suhu;
    document.getElementById('ph-air').innerText = data.phAir;
    document.getElementById('kelembapan').innerText = data.kelembapan;
    document.getElementById('panel-watt').innerText = data.panelWatt + " W";
    document.getElementById('panel-volt').innerText = data.panelVolt + " V";
    document.getElementById('panel-ampere').innerText = data.panelAmpere + " A";
    document.getElementById('baterai-persen').innerText = data.bateraiPersen + " %";
    document.getElementById('baterai-volt').innerText = data.bateraiVolt + " V (Input)";

    // Update Status Pompa
    const pumpCard = document.getElementById('pump-card');
    const pumpStatus = document.getElementById('status-pompa');
    const pumpSub = document.getElementById('pump-subtext');

    if (data.pompaAktif) {
        pumpStatus.innerText = "ON";
        pumpSub.innerText = "Sedang Menyiram...";
        pumpCard.classList.add('card-pump-on');
    } else {
        pumpStatus.innerText = "OFF";
        pumpSub.innerText = "Sistem Standby";
        pumpCard.classList.remove('card-pump-on');
    }
}

// ... fungsi updateTime dan setInterval tetap sama ...