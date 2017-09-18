/*function Suma(a, b, callback) {
  var result = parseInt(a) + parseInt(b);
  if (typeof callback === "function") {
    callback(result);
  }
}

window.onload = function() {
  
  var btnSumar = document.getElementById("btnSumar");
  btnSumar.addEventListener("click", function() {
    
    var txtA = document.getElementById("txtA").value;
    var txtB = document.getElementById("txtB").value;

    Suma(txtA, txtB, function(res) {
      alert("la suma es: " + res);
    });

  });
};*/

//simulamos una clase como una funcion de objeto
var Auto = function(nafta) {
  var _nafta = nafta;

  this.setNafta = function(value) {
    _nafta += value;
  };

  this.getNafta = function() {
    return _nafta;
  };
};

var auto01 = new Auto(100);
auto01.setNafta(50);
alert(auto01.getNafta());

//otra forma de definir un object, esta notacion exige declarar los atruburos nuevamente
//cada vez que se unstancia un bojeto
auto02 = {
  nafta: 100, // ESTA NOTACION ES JSON  javascript object notation
  puertas: 5,
  patente: "AAA000",
  gatNafta: function() {},
  getNafta: function() {}
};
