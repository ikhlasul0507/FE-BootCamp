
var personId = 1;
const hasil = document.querySelector('#bodyTable');
const button = document.querySelector('#button');
let nama = document.querySelector('#nama');
let tempat = document.getElementById('tempat');
let ttl = document.getElementById('ttl');
let agama = document.getElementById('agama');
var jenisKelamin = document.getElementsByName('jenisKelamin');
var checkbox = document.getElementsByName("hobi");
const pencarianData = document.querySelector('#pencarianData');
var dataCari = document.querySelector('#selectPencarianData');

var list = [];
var pageList = [];
var currentPage = 1;
var numberPerPage = 5;
var numberOfPages = 0;


init()

function init(){
    dummy();
    loadList();
}

function nextPage() {
    currentPage += 1;
    loadList();
}

function previousPage() {
    currentPage -= 1;
    loadList();
}

function firstPage() {
    currentPage = 1;
    loadList();
}

function lastPage() {
    currentPage = list.length/numberPerPage;
    loadList();
}

function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;
    pageList = list.slice(begin, end);
    drawList();
    check();
}

function drawList() {
    hasil.innerHTML = "";
    pageList.forEach(person => {
        hasil.innerHTML += ` 
		<tr style="border: 1px solid black">
			<td align="center"> <b>${person.id}</b> </td>
            <td style="padding-left:2%"> ${person.nama}</td>
            <td style="padding-left:2%"> ${person.tempat},${person.ttl} </td>
            <td class="tdCenter"> ${person.umur} Tahun </td>
            <td > ${person.agama}</td>
            <td align="center"> ${person.jenisKelamin}</td>
            <td > ${person.hobi}</td>
            <td > ${person.alamat} </td>
            <td>
            <button type="button" style="background-color:blue;border:none;color:white;border-radius:10px" class="editData" onclick="editData(${person.id})">Edit</button>
            <button type="button" style="background-color:red; border:none;color:white;border-radius:10px" onclick="hapusData(${person.id})">Hapus</button>
            </td>
		<tr>	
		`
    });
}

function check() {
    document.getElementById("next").disabled = currentPage == Math.ceil((list.length)/numberPerPage) ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == Math.ceil((list.length)/numberPerPage) ? true : false;
}

pencarianData.addEventListener("keyup", (el) => {
    if (dataCari.value == "") {
        alert("Pilih Jenis Pencarian !")
        pencarianData.value = ""
    }
    let keyword = el.target.value

    if (dataCari.value == "nama") {
        if (keyword == "") {
            loadList();
        } else {
            pageList = list.filter((item) => {
                return item.nama == keyword;
            });
            drawList();

        }
    } else if (dataCari.value == "alamat") {
        if (keyword == "") {
            loadList();
        } else {
            pageList = list.filter((item) => {
                return item.alamat == keyword;
            });
            drawList();
        }
    } else {
        if (keyword == "") {
            loadList();
        } else {
            pageList = list.filter((item) => {
                return item.hobi == keyword;
            });
            drawList();
        }
    }
});

let searchData = (person) => {
    hasil.innerHTML = "";
    if (person.length > 0) {
        for (var i = 0; i < person.length; i++) {
            hasil.innerHTML += `
            <tr style="border: 1px solid black">
			<td class="tdCenter"> <b>${person[i].id}</b> </td>
            <td style="padding-left:2%"> ${person[i].nama} </td>
            <td style="padding-left:2%"> ${person[i].tempat},${person[i].ttl} </td>
            <td class="tdCenter"> ${person[i].umur} Tahun </td>
            <td class="tdCenter"> ${person[i].agama}</td>
            <td class="tdCenter"> ${person[i].jenisKelamin}</td>
            <td class="tdCenter"> ${person[i].hobi}</td>
            <td style="padding-left:2%"> ${person[i].alamat} </td>
            <td>
            <button type="button" onclick="editData(${person[i].id})">Edit</button>
            <button type="button" onclick="hapusData(${person[i].id})">Hapus</button>
            </td>
		<tr>	`;
        }
    } else {
        hasil.innerHTML = `
		<tr>
			<td style="text-align: center" colspan="9">Tidak Ada Data </td>
		</tr>`;
    }
}

function handleButton() {

    var jk = "";
    console.log(jenisKelamin.value);
    for (var i = 0; i < jenisKelamin.length; i++) {
        if (jenisKelamin[i].checked) {
            jk = jenisKelamin[i].value;
        }
    }
    var hobi = "";
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            hobi = hobi + checkbox[i].value + ", ";
        }
    }
    console.log("Handle");

    if (nama.value.length > 0) {
        if (tempat.value.length > 0) {
            if (ttl.value.length > 0) {
                if (jk) {
                    if (hobi) {
                            if (alamat.value.length > 0) {
                                if (button.innerHTML === "Kirim") {
                                    input();
                                } else {
                                    editDataProses(button.getAttribute("data-type"));
                                }
                            } else {
                                alert("Harus isi alamat !")
                            }
                    } else {
                        alert("Hobi Harus Di Isi !")
                    }

                } else {
                    alert("Pilih Jenis Kelamin ");
                }
            } else {
                //umur kosong
                alert("ttl Harus Di Isi !")
            }
        } else {
            alert("Tempat Lahir harus Di Isi !")
        }
    } else {
        //nama kosong
        alert("Nama Harus Di Isi !")
    }

}

function input() {
    console.log("INPUT");
    var today = new Date();
    var birthday = new Date(ttl.value);
    var year = 0;
    if (today.getMonth() < birthday.getMonth()) {
        year = 1;
    } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
        year = 1;
    }
    var age = today.getFullYear() - birthday.getFullYear() - year;

    if (age < 0) {
        age = 0;
    }
    var jk = "";
    console.log(jenisKelamin.value);
    for (var i = 0; i < jenisKelamin.length; i++) {
        if (jenisKelamin[i].checked) {
            jk = jenisKelamin[i].value;
        }
    }

    var hobi = "";
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            if(hobi!="")hobi+=", "
            hobi = hobi + checkbox[i].value;
        }
    }

    console.log(hobi);
    let person = {
        id: personId,
        nama: nama.value,
        ttl: ttl.value,
        umur: age,
        agama: agama.value,
        jenisKelamin: jk,
        hobi: hobi,
        tempat: tempat.value,
        alamat: alamat.value
    };
    list.push(person);
    personId++;
    alert("Data Berhasil Di Simpan !");
    loadList();
    lastPage();
    console.log(list);
    clearForm();
}

function clearForm(){
    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false;
    }
    for (var i = 0; i < jenisKelamin.length; i++) {
        jenisKelamin[i].checked = false;
    }
    nama.value = "";
    agama.value = "";
    alamat.value = "";
    jenisKelamin.value = "";
    tempat.value = "";
    ttl.value = "";
}

function dummy() {
    for (let i = 0; i < 50; i++) {
        let person = {
            id: personId,
            nama: "Amal-"+personId,
            ttl: "1999-07-05",
            umur: "12",
            agama: "Islam",
            jenisKelamin: "L",
            hobi: "Berenang",
            tempat: "Kota Bumi",
            alamat: "Palembang "
        };
        list.push(person);
        personId++;
    }
}

function editData(id) {
    const editData = list.findIndex(person => {
        return person.id === id
    })
    console.log(editData);
    nama.value = list[editData].nama;
    tempat.value = list[editData].tempat;
    ttl.value = list[editData].ttl;
    agama.value = list[editData].agama;
    for (var i = 0; i < jenisKelamin.length; i++) {
        if (jenisKelamin[i].value == list[editData].jenisKelamin) {
            console.log(jenisKelamin[i].value)
            jenisKelamin[i].checked = true;
        }
    }

    console.log(list[editData].hobi);
    for (var i = 0; i < checkbox.length; i++) {
        console.log(checkbox[i].value + ", ");
        if (checkbox[i].value == list[editData].hobi) {
            hobi[i].checked = true;
        } else if (checkbox[i].value + ", " == list[editData].hobi) {
            hobi[i].checked = true;
        }
    }

    alamat.value = list[editData].alamat;
    button.innerHTML = "Edit";
    button.setAttribute("data-type", editData);
}

function editDataProses(id) {
    var today = new Date();
    var birthday = new Date(ttl.value);
    var year = 0;
    if (today.getMonth() < birthday.getMonth()) {
        year = 1;
    } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
        year = 1;
    }
    var age = today.getFullYear() - birthday.getFullYear() - year;

    if (age < 0) {
        age = 0;
    }
    var jk = "";
    console.log(jenisKelamin.value);
    for (var i = 0; i < jenisKelamin.length; i++) {
        if (jenisKelamin[i].checked) {
            jk = jenisKelamin[i].value;
        }
    }

    var hobi = "";
    for (var i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            if(hobi!="")hobi+=", "
            hobi = hobi + checkbox[i].value;
        }
    }

    console.log(hobi);
    let person = {
        id: list[id].id,
        nama: nama.value,
        ttl: ttl.value,
        umur: age,
        agama: agama.value,
        jenisKelamin: jk,
        hobi: hobi,
        tempat: tempat.value,
        alamat: alamat.value
    };
    console.log(person);
    list.splice(id, 1, person);

    alert("Data Berhasil Di Edit !");
    loadList();

    for (var i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = false;
    }
    for (var i = 0; i < jenisKelamin.length; i++) {
        jenisKelamin[i].checked = false;
    }
    nama.value = "";
    agama.value = "";
    alamat.value = "";
    jenisKelamin.value = "";
    tempat.value = "";
    ttl.value = "";

    button.innerHTML = "Kirim";
    button.removeAttribute("data-type");
}

function hapusData(id) {
    const data = list.find(function (person) {
        return person.id === id
    })

    if(data){
        console.log(id);
        if (confirm("Yakin Mau Di Hapus ?",id)) {
            list = list.filter(function (person) {
                return person.id != id
            })
        }
        alert("Berhasil Di Hapus !")
    }else{
        alert("Gagal")
    }
   
    loadList();
}

