//variabel pada javascript

//var adalah global variabel dan penggunaan memori menjadi tinggi
var name = "admin"

//variabel bisa berubah ubah
let name1 = "user"

//variabel yang constan tidak bisa di manipulasi data nya
const age = 30

name1 = "amal"

console.log("name :", name)
console.log("age :", age)

//function for logic of application and function spesifik for logic
//function do of javascript 
function tambah(params, params2){

    //ketika return bisa di asignmnet ke varibael
    //dan bisa langsung di eksekusi
    return params+params2
    console.log("fn1")
}
var fn2 = function(params = "A", param2=10, param3 ="admin"){
    console.log("Params 1", params)
    console.log("Params 2", param2)
    console.log("Params 3", param3)
}

var fn3 = function(param1, param2, param3){
    return tambah((param1 + param2)*3)
}

let hasilTambah = tambah(1,3)
console.log("Hasil Tambah : ",hasilTambah)


console.log("Hasil Tambah : ",tambah(5,6)+10)

fn2("Z")

//di deklarasikan params nya
fn2(undefined,undefined,"Z")
let hasilFn2 = fn2("ini pertama")
console.log("Hasil Tambah : ",hasilFn2)

fn3(10,24,44)

let nilai1 =[];
let nilai1join ="";
let nilai2 =[];
let nilai2join ="";
let operator1 ="";
let datahitung = [];
let combine = true
let lanjut = true;
let data = document.getElementById('data');
let history = document.getElementById('history');
console.log(data.value)

const nilai = function(param){     
    if(combine){
        nilai1.push(param);
        nilai1join = nilai1.join('');   
        data.value = nilai1join;
        console.log("Nilai 1 Join :", nilai1join);
        datahitung.push(nilai1join);
    }else{
        nilai2.push(param);
        nilai2join = nilai2.join('');
        data.value = nilai2join;
        console.log("Nilai 2 Join :", nilai2join);
        lanjut = false;
        datahitung.push(nilai2join)
    }
    history.innerHTML = nilai1join +""+ operator1 +""+ nilai2join;
}
const operator = function(param){
    if(lanjut){
    operator1 = param;
    combine = false
    console.log(operator1)
    datahitung.push(operator1)
    history.innerHTML = nilai1join +""+ operator1 +""+ nilai2join;
    }else{
        hasil();
        console.log("lanjut")
        operator1 = param;
        combine = false
        console.log(operator1)
        datahitung.push(operator1)
        history.innerHTML = nilai1join +""+ operator1 +""+ nilai2join;
        console.log(datahitung)
    }
}
const hasil = function(){
    let hasil;
    console.log(parseFloat(nilai1join))
    console.log(parseFloat(nilai2join))
    switch(operator1){
        case "+":
            hasil = parseFloat(nilai1join) + parseFloat(nilai2join)
        break;
        case "-":
            hasil = parseFloat(nilai1join) - parseFloat(nilai2join)
        break;
        case "*":
            hasil = parseFloat(nilai1join) * parseFloat(nilai2join)
        break;
        case "/":
            hasil = parseFloat(nilai1join) / parseFloat(nilai2join)
        break;
    }
    combine = true;
    data.value= hasil
    history.innerHTML = nilai1join +""+ operator1 +""+ nilai2join +"="+hasil;
    console.log(hasil)
}

const kosong = function(){
    console.log("clear")
    nilai1 =[];
    nilai1join ="";
    nilai2join = "";
    operator1 ="";
    nilai2 = [];
    data.value = "0";
    history.innerHTML = "";
    hasildata.innerHTML ="";
}

/*
    push = tambah data dibelakang
    pop = hapus data dari belakang
    shift = menghapus data dari depan
    unshift = menambah data dari depan
*/

/*
    find = tipe data
    findIndex = int
    indexOf = int
    filter =[]
    forEach = loop
    map =[]
    slice = memotong
    splice = menambah / menghapus
*/

//data awal array
let orang = [
    {
        nama : "Ikhlasul Amal",
        alamat : "Palembang",
        umur : 20
    },
    {
        nama : "Silo",
        alamat : "Bogor",
        umur : 23
    },
    {
        nama : "Fauzan",
        alamat : "Jakarta",
        umur : 23
    },
    {
        nama : "Budiono",
        alamat : "Jateng",
        umur : 23
    },
    {
        nama : "Husein",
        alamat : "Bekasi",
        umur : 23
    },
    {
        nama : "Eric",
        alamat : "Muara Enim",
        umur : 23
    },
    {
        nama : "Habibah",
        alamat : "Depok",
        umur : 23
    },
    {
        nama : "Kris",
        alamat : "Cirebon",
        umur : 23
    },
    {
        nama : "Alif",
        alamat : "Bekasi",
        umur : 23
    },
    {
        nama : "Afif",
        alamat : "Jakarta",
        umur : 23
    }
]
//data baru
let agung = {
    nama : "Agung",
    alamat : "bekasi",
    umur : 30
}
//data awal 
console.log("Data Orang Awal : ", orang)
//push
orang.push(agung);
console.log("Data Push :", orang);

//pop
console.log("Data Pop : ", orang.pop())
//shift
console.log("Data Shift : ",orang.shift());
//unshift
orang.unshift(agung)
console.log("Data Unsift : ", orang);

//find
var cari = orang.find(function(data){
    return data.umur > 25
});
console.log("Find Umur : ", cari);

//findindex
var cariIndex = orang.findIndex(function(data1){
    return data1.nama==="Afif"
});
console.log("Find Index :", cariIndex);

//index of
var cariIndexOf = orang.map(function(e){
    return e.nama;
}).indexOf('Alif');


console.log("Find Index Of : ", cariIndexOf)

//filter
var dataFilter = orang.filter(function(data3){
    return data3.umur > 25;
});
console.log("Find Data Filter : ", dataFilter);

//foreach
console.log("Data Foreach : ")
orang.forEach(function(data){  
    console.log(data);
});

//map
console.log("Data Map :")
orang.map(function(data){
    console.log(data.nama)
})

//slice
var dataSlice = orang.slice(0,10)
console.log("Data Slice :", dataSlice)

3
//splice
orang.splice(1,0,agung)
console.log("Data Splice :", orang)


