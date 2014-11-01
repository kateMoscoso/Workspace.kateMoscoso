

function Calcula(){
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

var dia_i = fecha.getDate();
var mes_i = fecha.getMonth()+1;
var anio_i = fecha.getFullYear();
document.getElementById('inicio').value = dia_i+"/"+mes_i+"/"+anio_i;
var ms_futuro = ms_hastahoy + ms_dias;
var fecha_futura = new Date();
fecha_futura.setTime(ms_futuro);
var dia_f = fecha_futura.getDate();
var mes_f = fecha_futura.getMonth()+1;
var anio_f = fecha_futura.getFullYear();
document.getElementById('fin').value = dia_f+"/"+mes_f+"/"+anio_f;

}

function CalculaFecha(){
	document.getElementById('fin').value = document.getElementById("fechafin").value;
}

function Add(){
	if (numFilas < 8) {
  		var tabla = document.getElementById("bodyTablas");
  		alert("Hola");
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

function Calcular(){
var subtotal=0, total =0,iva=0;
tabla = document.getElementById("bodyTablas");

  for (var i=2; i < tabla.childNodes.length; i++){
  	if (tabla.childNodes[i].nodeType == 1){
  		var resultado=parseInt(tabla.childNodes[i].childNodes[3].firstChild.value)*parseInt(tabla.childNodes[i].childNodes[5].firstChild.value);
		tabla.childNodes[i].childNodes[7].firstChild.value=resultado;
		if(!isNaN(resultado)){
		subtotal+=parseInt(resultado);
		}
  	}
  }
  document.getElementById("subtotal").value=subtotal;
  iva=subtotal*0.21;
  document.getElementById("iva").value=iva;
  total=subtotal+iva;
  document.getElementById("total").value=total;
 CalculaFecha();
}