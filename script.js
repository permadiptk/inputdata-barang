// Memeriksa apakah ada data yang disimpan secara lokal saat halaman dimuat
window.addEventListener('load', function() {
    if (localStorage.getItem('data')) {
        var savedData = JSON.parse(localStorage.getItem('data'));

        // Menampilkan data yang tersimpan di tabel
        var table = document.getElementById('dataTable');
        for (var i = 0; i < savedData.length; i++) {
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);

            cell1.innerHTML = savedData[i].nama;
            cell2.innerHTML = savedData[i].harga;
            cell3.innerHTML = savedData[i].jumlah;
        }
    }
});

// Menyimpan data secara lokal ketika data baru ditambahkan
document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var namaBarang = document.getElementById('nama').value;
    var hargaBarang = document.getElementById('harga').value;
    var jumlahBarang = document.getElementById('jumlah').value;

    var data = {
        nama: namaBarang,
        harga: hargaBarang,
        jumlah: jumlahBarang
    };

    // Memeriksa apakah ada data yang disimpan secara lokal
    if (localStorage.getItem('data')) {
        var savedData = JSON.parse(localStorage.getItem('data'));
        savedData.push(data);
        localStorage.setItem('data', JSON.stringify(savedData));
    } else {
        var newData = [];
        newData.push(data);
        localStorage.setItem('data', JSON.stringify(newData));
    }

    // Menambahkan data baru ke dalam tabel
    var table = document.getElementById('dataTable');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = namaBarang;
    cell2.innerHTML = hargaBarang;
    cell3.innerHTML = jumlahBarang;

    // Mereset nilai input
    document.getElementById('nama').value = '';
    document.getElementById('harga').value = '';
    document.getElementById('jumlah').value = '';
});
