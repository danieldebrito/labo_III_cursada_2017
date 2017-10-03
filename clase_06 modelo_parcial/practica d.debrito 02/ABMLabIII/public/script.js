window.onload = function () {
    traerPersonas();
}
var xhr;//ajax

function procesarRespuesta() {

    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            x = JSON.parse(xhr.responseText);
            refrescarLista(x);
        }
    }
    else {
        tCuerpo.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
    }
}
function procesarRespuestaTraer() {

    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var persona = JSON.parse(xhr.responseText);
            document.getElementById('txtnombre').value = persona.nombre;
            document.getElementById('txtapellido').value = persona.apellido;
            traerPersonas();
        }
    }
    else {
        tCuerpo.innerHTML = "Error: " + xhr.status + " " + xhr.statusText;
    }
}
function refrescarLista(array) {
    var tCuerpo = document.getElementById("tCuerpo");
    tCuerpo.innerHTML = "";
    for (var i = 0; i < x.length; i++) {
        tCuerpo.innerHTML = tCuerpo.innerHTML +
            "<tr><td>" + x[i].nombre + "</td>" +
            "<td>" + x[i].apellido + "</td>" +
            '<td><button onclick="borrarPersona(' + i + ')";>BORRAR</button></td>' +
            '<td><button onclick="traerPersona(' + i + ')";>MODIFICAR</button></td></tr>';
    }
}
function traerPersonas() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesarRespuesta;
    xhr.open('GET', 'http://localhost:3000/traerpersonas', true);
    xhr.send();
}
function borrarPersona(indice) {
    var data = 'indice=' + encodeURIComponent(indice);

    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesarRespuesta;
    xhr.open('POST', 'http://localhost:3000/eliminarpersona', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
    traerPersonas();
}
function modificarPersona(indice) {

    var nombre = document.getElementById('txtnombre').value;
    var apellido = document.getElementById('txtapellido').value;

    var persona = { 'nombre': nombre, 'apellido': apellido };
    var data = 'indice=' + encodeURIComponent(indice) + '&persona=' + JSON.stringify(persona);

    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/modificarpersona', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
    traerPersonas();
}
function agregaPersona() {

    var nombre = document.getElementById('txtnombre').value;
    var apellido = document.getElementById('txtapellido').value;

    var data = 'nombre=' + nombre + '&apellido=' + apellido;

    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/agregarpersona', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
    traerPersonas();
}
function guardar() {
    if (document.getElementById('txtnombre').value == "" || document.getElementById('txtapellido').value == "") {
        alert("faltan datos");
    }
    else {
        if (document.getElementById('btnGuardar').value == -1) {
            agregaPersona();
            document.getElementById('txtnombre').value = "";
            document.getElementById('txtapellido').value = "";
        }
        else {
            modificarPersona(document.getElementById('btnGuardar').value);
        }
    }

    document.getElementById('btnGuardar').value = -1;
}
function traerPersona(indice) {
    document.getElementById('btnGuardar').value = indice;
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesarRespuestaTraer;
    xhr.open('GET', 'http://localhost:3000/traerpersona?indice=' + indice, true);
    xhr.send();
}


