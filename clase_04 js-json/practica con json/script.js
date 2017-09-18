window.onload = function(){
    
    var btn = document.getElementById("btn");

    btn.addEventListener('click', function(){

    var nombre = document.getElementById("txtnombre");
    var apellido = document.getElementById("txtapellido");
    var tCuerpo = document.getElementById("tCuerpo");

    tCuerpo.innerHTML = tCuerpo.innerHTML + 
    "<td>" + nombre.value + "</td>" +
    "<td>" + apellido.value + "</td>" +
    "<td><a href=''>borrar</a></td>"
});
}