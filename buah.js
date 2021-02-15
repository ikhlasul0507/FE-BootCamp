let namaBuah = document.getElementById("namaBuah")
let stokBuah = document.getElementById("stokBuah")
let namaBuahBeli = document.getElementById("namaBuahBeli")
let stokBuahBeli = document.getElementById("stokBuahBeli")
let hargaBuah = document.getElementById("hargaBuah")
let button = document.getElementById("button")
let buttonBeli = document.getElementById("beli")
const dataBuahTabel = document.querySelector('#dataBuah')
var idBuah = 1;

var buah = [];
init = () => {
    validasiAll();
}

validasiAll = () => {
    if (namaBuah.value.length > 0) {
        if (stokBuah.value.length > 0) {
            if (hargaBuah.value.length > 0) {
                if (hargaBuah.value < 0) {
                    alert("Harga Buah Tidak Boleh Minus !")
                } else {
                    //berhasil
                    if (stokBuah.value < 0) {
                        alert("Stok Buah Tidak Boleh Minus  !")
                    } else {
                        aksi();
                    }
                }
            } else {
                alert("Harga Buah Harus Di Isi")
            }
        } else {
            alert("stok Buah Harus Di Isi")
            //stok kosong
        }
    } else {
        alert("Nama Harus Di Isi")
    }
}

aksi = () => {
    if (button.innerHTML === "Simpan") {
        simpan();
    } else {
        editProses(button.getAttribute("buah-type"))
    }
}

simpan = () => {
    var cariNama = buah.findIndex(function(data1){
        return data1.namaBuah===namaBuah.value;
    });
    console.log(cariNama);
    if(!cariNama){
        alert("Masukan Buah Yang Berbeda !")
    }else{
    let dataBuah = {
        idBuah: idBuah,
        namaBuah: namaBuah.value,
        stokBuah: stokBuah.value,
        hargaBuah: hargaBuah.value
    }
    buah.push(dataBuah);
    idBuah++;
    alert("Data Berhasil Di Simpan !");
    console.log(buah)
    tampil();
    tampilButton();
    clearForm();
}
}

clearForm = () => {
    namaBuah.value = ""
    stokBuah.value = ""
    hargaBuah.value = ""
}

clearFormBeli =()=>{
    namaBuahBeli.value =""
    stokBuahBeli.value = ""
}
tampil = () => {
    dataBuahTabel.innerHTML = "",
        buah.forEach((data) => {
            dataBuahTabel.innerHTML += `
            <tr>
                <td>${data.idBuah}</td>
                <td>${data.namaBuah}</td>
                <td>${data.stokBuah}</td>
                <td>${data.hargaBuah}</td>
                <td>
                <button onclick="edit(${data.idBuah})">Edit</button>
                <button onclick="hapus(${data.idBuah})">Hapus</button>
                </td>
            </tr>
        `
        })
}

tampilButton = () => {
    namaBuahBeli.innerHTML = "<option value='0'>--Pilih--</option>",
        buah.forEach((data) => {
            namaBuahBeli.innerHTML += `
            <option value='${data.namaBuah}'>${data.namaBuah}</option>
        `
        })
}
hapus = (idBuah) => {
    const data = buah.find(function (data) {
        return data.idBuah === idBuah
    })

    if (data) {
        buah = buah.filter(function (data) {
            return data.idBuah != idBuah
        })
        alert("Berhasil Di Hapus !")
    } else {
        alert("Gagal")
    }

    tampil();
}

edit = (idBuah) => {
    const editData = buah.findIndex(data => {
        return data.idBuah === idBuah
    })
    console.log(editData);
    namaBuah.value = buah[editData].namaBuah;
    stokBuah.value = buah[editData].stokBuah;
    hargaBuah.value = buah[editData].hargaBuah;

    button.innerHTML = "Edit";
    button.setAttribute("buah-type", editData)

}

editProses = (idBuah) => {
    let dataBuah = {
        idBuah: buah[idBuah].idBuah,
        namaBuah: namaBuah.value,
        stokBuah: stokBuah.value,
        hargaBuah: hargaBuah.value
    }
    buah.splice(idBuah, 1, dataBuah);
    console.log("id",idBuah)
    alert("Berhasil Di Edit !");
    tampil();
    clearForm();
    button.innerHTML = "Simpan";
    button.removeAttribute("buah-type");
}

beli =()=>{
    console.log(namaBuahBeli.value);
    var cariNama = buah.findIndex(function(data1){
        return data1.namaBuah===namaBuahBeli.value;
    });
    console.log(cariNama);
    if(cariNama){        
        alert("Nama Buah Tidak Di temukan !")
    }else{
        if(stokBuahBeli.value > buah[cariNama].stokBuah ){
            alert("Data Stok Tidak Tersedia !")
        }else{
        console.log(buah[cariNama].namaBuah);
        let harga = buah[cariNama].hargaBuah;
        let dataStok = buah[cariNama].stokBuah - stokBuahBeli.value;
        let idBuah = buah[cariNama].idBuah-1;
        console.log("ID Buah", idBuah)
        let dataBuah = {
            idBuah : buah[idBuah].idBuah,
            namaBuah : namaBuahBeli.value,
            stokBuah : dataStok,
            hargaBuah : harga
        }
        buah.splice(idBuah,1, dataBuah);
        alert("Berhasil Beli Buah")
        tampil();
        clearFormBeli();
     }
        
    }
}

