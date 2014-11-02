

function fechaHoy(){
	
	var fecha = new Date();
	var dia_i = fecha.getDate();
	var mes_i = fecha.getMonth()+1;
	var anio_i = fecha.getFullYear();
	fechaInicio = document.getElementById("fechas");
 
	//textFechaInicio = document.createTextNode("Fecha de Inicio: " + dia_i+"/"+mes_i+"/"+anio_i);
		fechaInicio.childNodes[2].nodeValue=dia_i+"/"+mes_i+"/"+anio_i;
}
function CalculaFecha1(){
var fecha = new Date();
var ms_dias = 0;
var ms_hastahoy = fecha.getTime();

if (document.getElementById("noventa").checked) {
	ms_dias = 90*24*60*60*1000;
}
if (document.getElementById("cientoveinte").checked) {
	ms_dias = 120*24*60*60*1000;
}
if (document.getElementById("cientoochenta").checked) {
	ms_dias = 180*24*60*60*1000;

}

var ms_futuro = ms_hastahoy + ms_dias;
var fecha_futura = new Date();
fecha_futura.setTime(ms_futuro);
var dia_f = fecha_futura.getDate();
var mes_f = fecha_futura.getMonth()+1;
var anio_f = fecha_futura.getFullYear();
fechaInicio = document.getElementById("fechas");
//textFechaFin = document.createTextNode("Fecha de Fin: " + dia_f+"/"+mes_f+"/"+anio_f);
fechaInicio.childNodes[6].nodeValue =dia_f+"/"+mes_f+"/"+anio_f;
}

function CalculaFecha2(){
	document.getElementById('fin').value = document.getElementById("fechafin").value;
}
function obtenerCalendario(){
	
}
function Add(){
	if (numFilas < 8) {
  		var tabla = document.getElementById("bodyTablas");
  		newNode=document.getElementById("elemento").cloneNode(true);
  		tabla.appendChild(newNode);
  		numFilas++;
   }
}
function Elimina(){
	if (numFilas >1) {
	var last = document.getElementById('bodyTablas').lastChild ;    
	document.getElementById('bodyTablas').removeChild(last); 
	numFilas--;
	}
}

function Calcular1(){
var subtotal=0, total =0,iva=0;
var tabla = document.getElementById("bodyTablas");
  for (var i=4; i < tabla.childNodes.length; i++){
  	if (tabla.childNodes[i].nodeType == 1){
  		var resultado=parseInt(tabla.childNodes[i].childNodes[3].firstChild.value)*parseInt(tabla.childNodes[i].childNodes[5].firstChild.value);
		tabla.childNodes[i].childNodes[7].firstChild.value=resultado;
		if(!isNaN(resultado)){
		subtotal+=parseInt(resultado);
		}
  	}
  }

  document.getElementById("subtotal").childNodes[0].nodeValue=subtotal;
  iva=subtotal*0.21;
  document.getElementById("iva").childNodes[0].nodeValue=iva;
  total=subtotal+iva;
  document.getElementById("total").childNodes[0].nodeValue=total;
 CalculaFecha1();
}

function Calcular2(){
var subtotal=0, total =0,iva=0;

  for (var i=2; i < tabla.childNodes.length; i++){
  	if (tabla.childNodes[i].nodeType == 1){
  		var resultado=parseInt(tabla.childNodes[i].childNodes[3].firstChild.value)*parseInt(tabla.childNodes[i].childNodes[5].firstChild.value);
		tabla.childNodes[i].childNodes[7].firstChild.value=resultado;
		if(!isNaN(resultado)){
		subtotal+=parseInt(resultado);
		}
  	}
  }
  document.getElementById("subtotal").childNodes[0].nodeValue=subtotal;
  iva=subtotal*0.21;
  document.getElementById("iva").childNodes[0].nodeValue=iva;
  total=subtotal+iva;
  document.getElementById("total").childNodes[0].nodeValue=total;
 CalculaFecha2();
}