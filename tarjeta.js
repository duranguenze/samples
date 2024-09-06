function ValidarTarjetaCredito(NumeroTarjeta){
	let checksum=0; 
	(''+NumeroTarjeta).split('').map(function(valor,indice){
		let valoractual=valor;
		if(indice%2==0){
			valoractual*=2;
			if(valoractual>9){
				valoractual=(''+valoractual).split('');
				valoractual=parseInt(valoractual[0])+parseInt(valoractual[1]);
			}
		}
		checksum+=parseInt(valoractual);
	});
	return (''+checksum).split('')[1]=='0';
}
function GenerarTarjeta(Inicio='',Longitud=16){
	for(let Intento=0;Intento<100;Intento++){
		let Cadena=Inicio;
		for(let i=0;i<Longitud;i++) Cadena+=''+(Math.floor(Math.random()*10));
		if(ValidarTarjetaCredito(Cadena))return Cadena;
	}
	return false;
}
