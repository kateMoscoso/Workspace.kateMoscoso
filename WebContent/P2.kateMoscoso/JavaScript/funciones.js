$().ready(function(){
	$('#Aniadir').click( function(){
		$("#productosFacturas").append('<tr><td><input type="text" placeholder="concepto"></td><td><input type="text" placeholder="precio unidad"></td><td><input type="text" placeholder="unidades"></td><td><input type="text" placeholder="total"></td></tr>')
	});
})

function Calcula(){
	var fecha = new Date();
	var ms_hastahoy = fecha.getTime();
	//alert (ms_hastahoy);
	var dias_a_calcular = document.getElementById('dias').value;
	var ms_dias = dias_a_calcular*24*60*60*1000;
	var ms_futuro = ms_hastahoy + ms_dias;
	var fecha_futura = new Date();
	fecha_futura.setTime(ms_futuro);
	var dia_f = fecha_futura.getDate();
	var mes_f = fecha_futura.getMonth()+1;
	var anio_f = fecha_futura.getFullYear();
	document.getElementById('fin').value = dia_f+"/"+mes_f+"/"+anio_f;
}