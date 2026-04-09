// 1. Cek apakah file dimuat
console.log("app.js berhasil dimuat!");

// 2. Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDuCBJLOuq1s3KKRDbZPMfOIfTG8lRQQGs",
    authDomain: "latihan-1-9988a.firebaseapp.com",
    databaseURL: "https://latihan-1-9988a-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "latihan-1-9988a",
    storageBucket: "latihan-1-9988a.firebasestorage.app",
    messagingSenderId: "1015530659916",
    appId: "1:1015530659916:web:f52d74d3c8492c5c5054e9"
};

// 3. Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// 4. Fungsi Utama Monitoring
function streamSensorData() {
    // Buat variabel sensorRef di dalam fungsi agar aman
    const sensorRef = database.ref('monitoring');

    sensorRef.on('value', (snapshot) => {
        const data = snapshot.val();
        console.log("Data diterima dari Firebase:", data);

        if (data) {
            // Update elemen HTML (Gunakan ID yang ada di index.html)
            // Sesuaikan nama 'suhu', 'ph_air' dll dengan yang ada di Firebase Anda
            if (document.getElementById('suhu')) 
                document.getElementById('suhu').innerText = data.suhu || "--";
            
            if (document.getElementById('ph-air')) 
                document.getElementById('ph-air').innerText = data.ph_air || "--";
            
            if (document.getElementById('kelembapan')) 
                document.getElementById('kelembapan').innerText = data.kelembapan_tanah || "--";
            
            if (document.getElementById('panel-watt')) 
                document.getElementById('panel-watt').innerText = (data.panel_watt || "--") + " W";
            
            if (document.getElementById('panel-volt')) 
                document.getElementById('panel-volt').innerText = (data.panel_volt || "--") + " V";
            
            if (document.getElementById('panel-ampere')) 
                document.getElementById('panel-ampere').innerText = (data.panel_ampere || "--") + " A";
            
            if (document.getElementById('baterai-persen')) 
                document.getElementById('baterai-persen').innerText = (data.baterai_persen || "--") + " %";
            
            if (document.getElementById('baterai-volt')) 
                document.getElementById('baterai-volt').innerText = (data.baterai_volt || "--") + " V";
        }
    }, (error) => {
        console.error("Error Firebase:", error);
    });
}

// 5. Update Waktu Real-time
function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.innerText = now.toLocaleDateString('id-ID', options);
    }
}

// 6. Jalankan Semua Fungsi
streamSensorData();
setInterval(updateTime, 1000);
updateTime();