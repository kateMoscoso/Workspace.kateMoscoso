importScripts("comunEjemploWorker.js");

function copiarSolucion(pasosSolucion, mejorSolucion){
  // Copia de vectores
  for (var i = 0; i <= pasosSolucion[0]; i++){
    mejorSolucion[i] = pasosSolucion[i];
  }
}

function calcularMejorSolucion(puzzle, x, y, paso, pasosSolucion, mejorSolucion) {
// Calcula la mejor solución al problema
  var nX, nY, posibilidad;
	if (paso <= limite) {	
		posibilidad = -1;
		do {
			posibilidad = posibilidad + 1;
			nX = x + despX[posibilidad];
			nY = y + despY[posibilidad];
			if (aceptable(nX,nY)) {
        pasosSolucion[0]++;
        pasosSolucion[pasosSolucion[0]] = puzzle[nX][nY];
				anotarDesanotar(puzzle,x,y,nX,nY);
				if (esSolucion(puzzle)){
           copiarSolucion(pasosSolucion, mejorSolucion)
        }
				else if (paso < mejorSolucion[0])
					calcularMejorSolucion(puzzle,nX,nY, paso + 1, pasosSolucion, mejorSolucion );
        anotarDesanotar(puzzle,x,y,nX,nY);
        pasosSolucion[0]--;
			}
		} while (posibilidad != movimientosPosibles -1);
	}
}

    
    //calcularMejorSolucion(puzzle,hueco[0], hueco[1], 1, pasosSolucion, mejorSolucion );
   onmessage = function (event){
     if (event.data == "ACABA")
       self.close();
     else{
     objetoPuzzle = JSON.parse(event.data);
     pasosSolucion = new Array();
     pasosSolucion[0] = 0;
     mejorSolucion = new Array();
     mejorSolucion[0] = 1000;
     calcularMejorSolucion(objetoPuzzle.puzzle, 
                                   objetoPuzzle.hueco[0], 
                                   objetoPuzzle.hueco[1], 1, pasosSolucion, mejorSolucion) 
     postMessage(JSON.stringify(mejorSolucion));
     close();
     }
   }
   //postMessage("hola");