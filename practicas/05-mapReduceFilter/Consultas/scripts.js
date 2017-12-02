window.onload = function () {

}


var soluciones = {};

soluciones.usuariosFemeninos = function (usuarios) {
    return usuarios
        .filter(function (user) {
            return user.genero === 'Female';
        })
        .map(function (user) {
            return {
                'nombre': user.nombre
            }
        });
}

//console.log(soluciones.usuariosFemeninos(data));



// Retornar un array de strings (el email de los usuarios de sexo masculino)

soluciones.mailsVarones = function (usuarios) {
    return usuarios
        .filter(function (user) {
            return user.genero === 'Male';
        })
        .map(function (user) {
            return {
                "email": user.email
            }
        });
}

//console.log(soluciones.mailsVarones(data));

// Retornar un array de objetos que solo contengan las claves nombre, email y edad, de todos los usuarios mayores que 'edad'

soluciones.usuariosMayores = function (usuarios, edad) {
    return usuarios
        .filter(function (user) {
            return user.edad > 40;
        })
        .map(function (user) {
            return {
                "nombre": user.nombre,
                "email": user.email,
                "edad": user.edad
            }
        });
}

console.log(soluciones.usuariosMayores(data, 40));

// Retornar un objeto que contenga solo el nombre y la edad del usuario mas grande.

soluciones.usuarioMasGrande = function (usuarios) {
    var max = 0;

    return usuarios
        .filter(function (user) {
            if (max <= user.edad) {
                max = user.edad;
            }
            return user;
        })
        .filter(function (user) {
            if (max == user.edad) {
                return user;
            }
        })
        .map(function (user) {
            return {
                "nombre": user.nombre,
                "email": user.email,
                "edad": user.edad
            }
        });

}

console.log(soluciones.usuarioMasGrande(data));

// Retornar el promedio de edad de los usuarios (number)

soluciones.promedio = function (usuarios) {
    var acumEdad = 0;
    var cantidad = usuarios.length;

    return usuarios
        .map(function (user) {
            return user.edad;
        })
        .reduce(function (prev, curr, index) {
            if (index + 1 == cantidad) {
                return (acumEdad / cantidad).toFixed(2);
            }
            return acumEdad = parseInt(prev) + parseInt(curr);
        }, 0);
}

console.log("Promedio edad usuarios: " + soluciones.promedio(data));

// Retornar el promedio de edad de los usuarios hombres (number)

soluciones.promedioVarones = function (usuarios) {
    var acumEdad = 0;
    var cant =0 ;

    return usuarios
        .filter(function (user) {
            return user.genero == "Male";
        })
        .map(function (user) {
            cant += 1;
            return user.edad;
        })
        .reduce(function (prev, curr, index) {
            if (index + 1 == cant) {
                return (acumEdad / cant).toFixed(2);
            }
            return acumEdad = parseInt(prev) + parseInt(curr);
        }, 0);
}


console.log("Promedio edad Varones " + soluciones.promedioVarones(data));

// Retornar el promedio de edad de los usuarios mujeres (number)

soluciones.promedioMujeres = function (usuarios) {
    var acumEdad = 0;
    var cant =0 ;

    return usuarios
        .filter(function (user) {
            return user.genero == "Female";
        })
        .map(function (user) {
            cant += 1;
            return user.edad;
        })
        .reduce(function (prev, curr, index) {
            if (index + 1 == cant) {
                return (acumEdad / cant).toFixed(2);
            }
            return acumEdad = parseInt(prev) + parseInt(curr);
        }, 0);
}

console.log("Promedio edad Mujeres " + soluciones.promedioMujeres(data));
