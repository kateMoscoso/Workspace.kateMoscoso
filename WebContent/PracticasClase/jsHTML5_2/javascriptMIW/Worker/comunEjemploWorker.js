var movimientosPosibles = 4;
var limite = 15;
var tamanio = 3;
var despX = new Array(-1,1,0,0);
var despY = new Array(0,0,-1,1);

function aceptable(nX, nY) {
  // Determina si una casilla está dentro del puzzle
  if ((nX >=0) && (nX <= tamanio - 1) && 
      (nY >= 0) && (nY <= tamanio - 1)) 
		return true;
  return false;
}

function esSolucion(puzzle) {
  // Determina si un puzzle está ordenado
	var solucion = true;
  var i = 0;
	while ((i < (tamanio * tamanio)-1) && solucion) {
			solucion = puzzle[Math.floor(i / tamanio)][i % tamanio] == (i+1);
			i++;
	}
	return solucion;
}

function anotarDesanotar(puzzle,  x,  y,  nX,  nY) {
   // Realiza un movimento del puzzle
		var aux = puzzle[x][y];
		puzzle[x][y] = puzzle[nX][nY];
		puzzle[nX][nY] = aux;
}

