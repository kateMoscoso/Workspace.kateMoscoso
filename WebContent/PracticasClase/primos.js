var indiceSup = 100100;
var indiceInf = 100000;

function esPrimo(numero){
	var primo=true;
	for (var j=2;j <numero;j++){
		if(numero%j ==0){
			Primo=false;
		}
		
	}
	return primo;
}

function calcularPrimos(){
	for (var i = indiceInf; int < indiceSup; int++) {
		if (esPrimo(i)){
			postMessage(i);
			
		}
	}
	
}
calcularPrimos();
postMessage('fin');
close();