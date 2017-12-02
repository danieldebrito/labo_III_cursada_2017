window.onload = TraerPersonas();


function modificarPersona(indice) {
    //Obtengo nombre desde DOM
    //Obtengo el apellido desde el DOM
    var persona = { "nombre": nombre, "apellido": apellido };
    var data = 'indice=' + encodeURIComponent(indice) + '&persona='
        + encodeURIComponent(JSON.stringify(persona));
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesarRespuesta;
    xhr.open('POST', 'http://localhost:3000/modificarpersona', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
}
function TraerPersonas() {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesarRespuesta;
    xhr.open('GET', 'http://localhost:3000/traerpersonas', true);
    xhr.send();

}
function procesarRespuesta() {
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
            var persArray = JSON.parse(xhr.responseText);
        }
        else
            alert('Error: ' + xhr.status + ' ' + xhr.statusText);
    }
}
function cargar() {
    TraerPersonas();

    tabla="<tr><th>nombre</th><tr>"/* +
    "<th>apellido</th>" +
    "<th>accion</th>" +
    "<th><button onclick='eliminarPersona(" + i + ")' >Borrar</button</th>" +
    "<th><button onclick='eliminarPersona(" + i + ")' >Borrar</button</th></tr>";*/

    document.getElementById("tbody").innerHTML.value = tabla;
    alert("dsadsadsada");

    for (var i = 0; i < persArray.lenght; i++) {
        "<tr><th>" + persArray[i].nombre + "</th>" +
        "<th>" + persArray[i].apellido + "</th>" +
        "<th><button onclick='eliminarPersona(" + i + ")' >Borrar</button</th>" +
        "<th><button onclick='modificarPersona(" + i + ")' >Borrar</button</th></tr>"
        }
}

function agregarPersona() {

    nobmre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;

    var persona = { "nombre": nombre, "apellido": apellido };
    var data = 'indice=' + encodeURIComponent(indice) + '&persona='
    + encodeURIComponent(JSON.stringify(persona));
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesarRespuesta;
    xhr.open('POST', 'http://localhost:3000/agregarpersona', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
    cargar();
    }


