window.onload = function () {

    TablaJason(jsonGenerado);
    //TablaJason(autos);
}

function TablaJason(json){
    var html = "<table class='table table-responsive'><tr><thead>";

    for (var item in json[0]) {
        html += "<th>" + item + "</th>";
    }
    html += "</tr></thead><tbody>";

    for (var i = 0; i < Object.keys(json).length; i++) {
        html += "<tr>";
        for (var item in json[0]){
            html += "<td>" + eval('json[i].' + item) + "</td>"; 
       }
       html += "</tr>";
    }
    html += "</tbody></table>";

    $("#table").html(html);
}

var soluciones = {};

soluciones.Femeninos = function (usuarios) {
    return usuarios
        .filter(function (user) {
            return user.genero === 'Female';
        })
        .map(function (user) {
            return {
                "nombre": user.nombre
            };
        });
}
//jsonGenerado = soluciones.Femeninos(data);

soluciones.mailsVarones = function(usuarios){
    return usuarios
    .filter(function(user){
        return user.genero === 'Male';
    })
    .map(function(user){
        return {
            "email":user.email
        };
    });
}
//jsonGenerado = soluciones.mailsVarones(data);

soluciones.usuariosMayores = function(usuarios, edad){

    return usuarios
    .filter(function(user){
        return user.edad > 40;
    })
    .map(function(user){
         return  {
             "nombre":user.nombre,
             "email":user.email,
             //"edad":user.edad
         }
    });

}
//console.log(soluciones.usuariosMayores(data, 40));
jsonGenerado = soluciones.usuariosMayores(data, 40);