importScripts("EscrutinioComun.js");

var contadores = new Array();
for (var i = 0; i < pueblos.length; i++)
  contadores[i] = 0;

var miTimer;  
var ciudadGanadora="";
var numDatos = 50;
var conexion = -1;
var datosConexion = new Array();

function simulacionObtenerInformacion(numDatos, contadores){
  function generaAleatorio(limite){
    return Math.floor((Math.random() * 2 * limite) % (limite))
  }
  
  for (var i = 0; i < numDatos; i++){
    var indice = generaAleatorio(pueblos.length)
    contadores[indice]++;
    if (contadores[indice] == maximo){
      ciudadGanadora = pueblos[indice];
      clearInterval(miTimer)
      break;
    }  
  }
}

miTimer = setInterval("simulacionObtenerInformacion(numDatos, contadores)",100);


function envioFinal(){

  var datosMensaje = {"ciudadGanadora": ciudadGanadora, "contadoresLimites": contadores };
  var mensaje = JSON.stringify(datosMensaje);
  for (var i=0; i<= conexion; i++)
    datosConexion[i].puerto.postMessage(mensaje)
  close();   
}

function envioDatosEncuestados(actual){
  var contadoresLimites = new Array();
  var ultimo = 0;
  for (var i=datosConexion[actual].inferior; i <= datosConexion[actual].superior; i++){
    contadoresLimites[ultimo] = contadores[i];
    ultimo++
  }
  var datosMensaje = {"ciudadGanadora": "", "contadoresLimites": contadoresLimites };
  var mensaje = JSON.stringify(datosMensaje);
  datosConexion[actual].puerto.postMessage(mensaje)
  if (ciudadGanadora!="")
    envioFinal()
}

onconnect = function (e){ 
   conexion++;
   var actual = conexion;
   var parametrosConexion = {"puerto" : e.ports[0],"inferior": 0, "superior": 0};
   datosConexion[actual] = parametrosConexion;
   datosConexion[actual].puerto.onmessage = function (e){
     var limites =  JSON.parse(e.data);
     datosConexion[actual].inferior = limites.inferior;
     datosConexion[actual].superior = limites.superior;
     setInterval("envioDatosEncuestados("+actual+")", 100)
   }
}