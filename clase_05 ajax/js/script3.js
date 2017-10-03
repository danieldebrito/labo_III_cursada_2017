window.onload = function(){
    frm = document.getElementById("miFormulario");
    frm.addEventListener("submit",enviarDatos);
}
 var xhr;
function enviarDatos(e){
    e.preventDefault();
    enviarFormulario();
}
var xhr;
function enviarFormulario(){
    
    xhr = new XMLHttpRequest();
    var nombre = document.getElementById("txtNombre");
    var edad = document.getElementById("txtEdad");

    xhr.onreadystatechange = respuesta;
    xhr.open("GET","pagina1.php?nombre="+nombre.value+"&edad="+edad.value,true);
    xhr.send();
}


function respuesta(){
    var div = document.getElementById("mensaje");
    if(xhr.readyState == 4){
        if( xhr.status == 200){
            div.innerHTML = xhr.responseText;
        }else{
            div.innerHTML = "Error " + xhr.status + " " + xhr.statusText;
        }
    }else{
        div.innerHTML = "<img src='img/3.gif'>";
    }        
}


