const btn = document.getElementById('btn');
const search = document.getElementById('search');
const img = document.getElementById('img');

function qrCode() {
    fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${search.value}&size=300x300"`)
        .then(res => res.blob())
        .then(blob => {
            img.src = URL.createObjectURL(blob);
        })
        .catch(err => console.log(err));
}
btn.addEventListener('click', qrCode);
