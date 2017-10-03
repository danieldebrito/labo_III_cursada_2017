window.addEventListener('load', () => {
    var btnleer = document.getElementById('btnLeer');
    btnleer.addEventListener('click', enviar);
});

var xhr;

function enviar() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = gestionarRespuesta;
    xhr.open('GET', 'prueba.txt', true); // true para asincroonico
    xhr.send(); // enviar peticion
}

function gestionarRespuesta() {
    var div = document.getElementById('contenedor');
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            div.innerHTML = xhr.responseText;
        }
        else {
            div.innerHTML = "error:  " + xhr.status + " " + xhr.statusText;
        }

    }
    else {
        div.innerHTML = "<img src='img/3.gif'>";
    }
}