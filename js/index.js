document.addEventListener("DOMContentLoaded", function() {
    let Nama = prompt("Masukkan nama anda:");
    if (Nama) {
        document.getElementById("name").innerText = Nama;
    } 
});

let slideIndex = 0;
showSlides(slideIndex);

function nextslide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("img-slideshow");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}
function validateForm() {
    const form = document.querySelector('.form');

    const nama = form.querySelector('#name-input').value.trim();
    const tanggalLahir = form.querySelector('#tanggal-lahir').value;
    const jenisKelamin = form.querySelector('input[name="jenis_kelamin"]:checked');
    const pesan = form.querySelector('#pesan').value.trim();

    let isValid = true;

    if (nama === '') {
        document.getElementById('error-name').innerHTML = 'Nama tidak boleh kosong';
        isValid = false;
    } else {
        document.getElementById('error-name').innerHTML = '';
    }

    if (tanggalLahir === '') {
        alert('Tanggal Lahir harus diisi');
        isValid = false;
    }

    if (!jenisKelamin) {
        alert('Jenis Kelamin harus dipilih');
        isValid = false;
    }


    if (pesan === '') {
        alert('Pesan tidak boleh kosong');
        isValid = false;
    }

    if (isValid) {
        setSenderUI(nama, tanggalLahir, jenisKelamin.value, pesan);
    }

    return false;
}

function setSenderUI(name, birthDate, gender, messages) {
    document.getElementById('name').innerText = name;
    document.getElementById('sender-birth-date').innerText = birthDate;
    document.getElementById('sender-gender').innerText = gender;
    document.getElementById('sender-messages').innerText = messages;
}
