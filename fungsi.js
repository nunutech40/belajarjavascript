function bagi(a,b){
    hasilBagi = a / b;
    return hasilBagi;
}

var dataBarang = [
    "Buku Tulis",
    "Pensil",
    "Spidol"
];

var dataBuah = [
    "Apple",
    "Banana",
    "Grape",
    "Melon",
    "Orange",
    "Manggo"
]

function showBuah() {
    var listBuah = document.getElementById("test-loop");

    // cleare list buah
    listBuah.innerHTML = "";

    for(let i = 0; i < dataBuah.length; i++) {
        console.log("cek data i" + i)
        listBuah.innerHTML += "<li>" + dataBuah[i] + "</li>"
    }
}

function showBarang(){
    console.log("run show barang")
    var listBarang = document.getElementById("list-barang");
    // clear list barang
    listBarang.innerHTML = "";

    // cetak semua barang
    for(let i = 0; i < dataBarang.length; i++){
        var btnEdit = "<a href='#' onclick='editBarang("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteBarang("+i+")'>Hapus</a>";

        listBarang.innerHTML += "<li>" + dataBarang[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>";        
    }
}

function addBarang(){
    var input = document.querySelector("input[name=barang]");
    dataBarang.push(input.value);
    showBarang();
}

function editBarang(id){
    var newBarang = prompt("Nama baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    showBarang();
}

function deleteBarang(id){
    dataBarang.splice(id, 1);
    showBarang();
}

showBarang();
showBuah();