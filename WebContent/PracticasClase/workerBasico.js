function procesarResultadoWorker procesarResultadoWorker(resultado resultado){
//	Procesa el resulato obtenido del Worker
}
worker = new Worker("workerBasico.js");
worker.postMessage("datos"); 
worker.addEventListener('message',function (event) {
	procesarResultadoWorker(event.data) 
} fl ) ,a se ;

function startWorker() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("primos.js");
        }
        w.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}