const API_URL = 'https://sirekap-obj-data.kpu.go.id/';

async function cekNIK() {
    const nik = document.getElementById('nik').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Loading...";

    if (!nik) {
        resultDiv.innerHTML = "⚠️ NIK tidak boleh kosong.";
        return;
    }

    try {
        // Sesuaikan endpoint API
        const response = await fetch(`${API_URL}path/ke/api/${nik}`);
        if (!response.ok) {
            resultDiv.innerHTML = "❌ Data tidak ditemukan atau API error.";
            return;
        }

        const data = await response.json();
        resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (err) {
        console.error(err);
        resultDiv.innerHTML = "❌ Terjadi kesalahan saat mengambil data.";
    }
}
