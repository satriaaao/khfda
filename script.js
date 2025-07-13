document.getElementById("cekForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nik = document.getElementById("nik").value.trim();
    const nama = document.getElementById("nama").value.trim();
    const tgl_lahir = document.getElementById("tgl_lahir").value;

    if (!nik || !nama || !tgl_lahir) {
        alert("Lengkapi semua data dulu!");
        return;
    }

    // Redirect ke halaman KPU dengan query string
    const url = `https://cekdptonline.kpu.go.id/CekDPT?nik=${encodeURIComponent(nik)}&nama=${encodeURIComponent(nama)}&tgl_lahir=${encodeURIComponent(tgl_lahir)}`;
    window.location.href = url;
});
