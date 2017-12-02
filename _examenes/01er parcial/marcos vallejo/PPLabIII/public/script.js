
var xhr;
var idModif;
window.onload = function()
{

    var boton = document.getElementById("btn");
    boton.addEventListener('click', altaPersona);
    solicitudActualizarLista();
}
    

function solicitudActualizarLista()
{
    xhr = new XMLHttpRequest;
    xhr.onreadystatechange = procesoActualizarLista;
    xhr.open('GET', '/traerpersonas', true);
    xhr.send();
}

function procesoActualizarLista()
{
        if(xhr.readyState == 4)
        {
            
            var persona = JSON.parse(xhr.response);
            var lista = document.getElementById("lista");
            console.log(persona);
            var i = 0;
            lista.innerHTML = "";
            for(i = 0; i < persona.length; i++)
            {
                lista.innerHTML =  lista.innerHTML + "<tr>" + "<td>"+ persona[i].nombre +"</td>" + "<td>"+persona[i].apellido +"</td>" + "<td><input type='button' onclick='eliminarPersona(" + i + ")' value='Eliminar'><input type='button' onclick='traerPersona(" + i + ")' value='Modificar'></td></tr>"
            }
        }
    
}

function eliminarPersona(id)
{
    var datos = 'id=' + encodeURIComponent(id);
    xhr = new XMLHttpRequest;
    xhr.onreadystatechange = procesarEliminarPersona;
    xhr.open('POST', '/eliminarpersona', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(datos);
}

function procesarEliminarPersona()
{
    if (xhr.readyState == 4) {
        if (xhr.status == 200){
        solicitudActualizarLista();
        }
        else
        alert('Error: ' + xhr.status + ' ' + xhr.statusText);
        }
}

function altaPersona()
{
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var datos = 'nombre=' + encodeURIComponent(nombre) + '&apellido=' + encodeURIComponent(apellido);
    xhr = new XMLHttpRequest;
    xhr.onreadystatechange = procesarAltaPersona;
    xhr.open('POST', '/agregarpersona', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.send(datos);
}

function procesarAltaPersona(){
    if (xhr.readyState == 4) {
        if (xhr.status == 200){
        solicitudActualizarLista();
        }
        else
        alert('Error: ' + xhr.status + ' ' + xhr.statusText);
        }
}

function solicitarModificarPersona(id)
{
    traerPersona(id);
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
}

function modificarPersona(indice)
{    
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    console.log(nombre);
    console.log(apellido);
    var persona = { "nombre": nombre, "apellido": apellido };
    console.log(persona);
    var data = 'indice=' + encodeURIComponent(indice) + '&persona='+ encodeURIComponent(JSON.stringify(persona));
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = procesarModificarPersona;
    xhr.open('POST', 'http://localhost:3000/modificarpersona', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(data);
    // Limpieza de CAMPOS.
    var boton = document.getElementById("btn");
    boton.addEventListener('click', altaPersona);
    boton.setAttribute('value', 'Cargar');
    boton.setAttribute('onclick', '');
     nombre = document.getElementById("nombre");
     apellido = document.getElementById("apellido");
    nombre.setAttribute('value', '');
    apellido.setAttribute('value','');
    nombre.setAttribute('placeholder', 'Nombre');
    apellido.setAttribute('placeholder', 'Apellido');
}

function procesarModificarPersona()
{
    if (xhr.readyState == 4) {
        if (xhr.status == 200){
        solicitudActualizarLista();
        }
        else
        alert('Error: ' + xhr.status + ' ' + xhr.statusText);
        }
}

function traerPersona(id)
{
    idModif = id;
    xhr = new XMLHttpRequest;
    xhr.onreadystatechange = procesarTraerPersona;
    xhr.open('GET', '/traerpersona?indice='+id, true);
    xhr.send();
}

function procesarTraerPersona()
{
    if (xhr.readyState == 4) {
        if (xhr.status == 200){
            // Tengo mi persona.
        var persona = JSON.parse(xhr.response);
        var nombre = document.getElementById("nombre");
        var apellido = document.getElementById("apellido");
        console.log(persona);
        nombre.setAttribute('value', persona.nombre);
        apellido.setAttribute('value', persona.apellido);
        var boton = document.getElementById("btn");
        // Quitamos el Event Listener.
        boton.removeEventListener('click',altaPersona );
        boton.setAttribute('value', 'Modificar');
        boton.setAttribute('onclick', 'modificarPersona('+idModif+')');
        }
        else
        alert('Error: ' + xhr.status + ' ' + xhr.statusText);
        }
}
