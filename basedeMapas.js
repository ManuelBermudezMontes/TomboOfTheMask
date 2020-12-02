const tombopos1 = {x:10 ,y:34};//posicion de inicio de tombo en mapa1
const mapa1 = [
                 [10,10,10,10,10,10,10,10,10,9,10,10,10,10,10,10,10],
	              [10,4,4,4,4,4,10,10,2,4,4,12,10,10,10,3,10],
	              [10,4,10,9,10,4,10,9,4,4,4,10,10,10,10,4,10],
	              [10,4,10,9,10,4,4,4,4,10,4,4,4,4,4,4,10],
	              [10,4,10,10,9,10,9,10,9,10,9,10,10,9,10,9,10],
	              [10,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
	              [10,10,12,10,10,9,12,10,10,10,10,10,10,10,10,4,10],
	              [10,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
	              [10,2,10,10,9,9,12,10,12,10,9,9,10,10,9,10,10],
	              [10,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,10],
	              [10,4,10,9,10,10,10,9,9,10,10,10,10,10,10,4,10],
	              [10,2,10,12,12,9,4,4,4,4,4,4,4,4,4,4,10],
	              [10,4,10,12,10,10,4,10,9,10,10,9,9,9,10,10,10],
	              [10,4,4,4,4,2,4,10,10,10,10,10,10,10,10,10,10],
	              [10,10,9,10,9,10,4,4,4,4,4,4,4,4,2,4,10],
	              [10,10,12,10,10,12,4,12,12,4,12,10,10,10,10,10,10],
	              [10,10,10,10,9,9,4,10,9,4,9,9,9,10,10,12,10],
	              [10,10,12,12,10,9,2,10,10,4,9,10,9,10,10,10,10],
	              [10,10,12,10,4,4,4,4,4,4,10,12,10,9,12,12,10],
	              [10,10,12,10,9,4,4,4,10,4,10,12,10,10,10,10,10],  
	              [10,10,10,12,4,2,4,4,4,4,4,4,12,9,9,10,10],
	              [10,10,10,12,4,10,10,10,10,4,10,4,10,10,10,10,10],
	              [10,10,12,10,4,4,4,4,4,4,10,4,12,10,10,10,10],
	              [10,10,9,9,10,10,9,10,9,10,12,4,10,10,10,10,10],
	              [10,10,12,10,4,4,4,4,10,10,9,4,4,4,4,2,10],
	              [10,10,10,12,4,10,10,4,9,10,10,2,10,10,10,4,10],
	              [10,10,9,9,4,9,9,4,4,4,4,4,4,4,4,4,10],
	              [10,10,10,10,4,10,12,10,10,12,9,10,10,12,9,10,10],
	              [10,10,4,4,4,4,4,4,4,4,9,10,4,4,4,2,10],
	              [10,4,4,4,4,4,4,10,10,2,4,4,4,4,4,4,10],
	              [10,4,4,4,4,12,12,12,12,12,10,10,10,4,4,4,10],
	              [10,4,4,4,4,9,10,10,10,12,10,10,10,4,4,4,10],
	              [10,4,10,4,9,10,10,12,12,10,4,4,4,4,4,4,10],
	              [10,4,2,4,4,9,9,9,10,10,4,4,4,4,4,4,10],
	              [10,4,4,4,4,10,10,10,10,10,4,10,2,4,4,4,10],
	              [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
                ];
const tombopos2 = {x:3 ,y:15}; //posicion de inicio de tombo en mapa2
const mapa2 = [
	              [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
	              [10,10,10,10,10,10,1,1,1,2,3,10,9,9,10,10,10,12,12,12,9,10,10,10,10,12,10,10,10,10,10,10,12,12,9,10,10,9,10,12,10,10,10,10,10,10,10,10,10,10,10],
	              [10,10,2,1,1,1,1,10,10,10,10,1,1,2,1,1,1,1,1,1,10,10,10,12,12,12,12,10,10,10,12,10,9,10,1,2,1,1,1,1,1,1,1,1,10,10,10,10,10,10,10],
	              [10,9,1,10,10,10,10,1,1,1,1,2,10,12,12,10,1,12,10,10,12,10,10,12,9,10,10,10,10,10,10,10,2,1,1,10,12,9,12,12,12,10,10,1,1,1,1,10,10,10,10],
	              [10,12,1,10,1,1,1,1,10,10,9,10,10,10,9,10,1,12,12,12,9,10,10,12,10,9,12,9,10,10,10,10,1,10,10,10,10,9,12,1,1,1,10,10,10,10,1,10,10,10,10],
	              [10,10,1,10,1,10,9,10,10,9,10,10,10,10,9,10,2,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,10,9,1,1,1,1,1,10,1,1,1,1,1,2,10,10,10,10],
	              [10,10,1,1,1,10,9,10,9,9,9,12,12,10,10,9,9,12,10,12,10,12,10,10,10,10,9,9,9,9,10,10,10,10,10,1,10,10,10,2,10,9,10,10,10,10,10,10,10,10,10],
	              [10,10,1,10,10,9,10,2,10,10,10,10,12,9,10,9,10,10,10,10,10,12,10,10,10,10,9,10,9,12,1,1,1,1,1,1,10,9,9,10,9,10,9,9,10,12,10,10,10,10,10],
	              [10,10,2,10,10,9,10,10,10,10,10,12,10,10,10,10,10,12,10,10,10,10,10,10,10,9,10,10,10,10,1,9,10,1,1,1,10,1,2,1,10,1,1,1,1,1,1,1,10,10,10],
	              [10,9,10,10,10,10,9,9,12,10,10,10,12,10,10,10,10,10,10,10,12,10,10,10,10,10,10,9,10,10,1,12,2,1,1,1,10,1,10,1,10,1,9,12,10,10,10,1,10,10,10],
	              [10,10,10,12,10,9,10,10,9,9,12,12,10,10,10,10,10,12,12,10,10,12,12,10,2,10,12,12,12,10,1,10,12,1,1,12,9,1,10,1,10,1,10,12,9,12,10,1,10,10,9],
	              [10,12,12,12,10,9,10,10,10,10,9,10,10,10,9,9,10,9,10,10,10,10,9,10,1,10,9,10,9,10,1,10,10,10,12,9,10,1,10,2,10,1,10,12,10,9,10,1,10,10,10],
	              [10,10,12,12,10,9,10,9,9,12,9,10,10,10,9,10,10,10,9,10,10,10,10,10,1,10,10,10,12,10,1,1,1,1,1,1,1,1,10,1,1,1,10,12,9,10,10,1,10,10,10],
	              [10,10,12,12,10,9,10,10,10,10,12,12,10,9,10,9,10,9,10,10,10,9,1,2,1,10,12,12,12,9,2,10,10,12,10,9,10,10,10,10,1,2,10,10,10,10,10,1,10,10,10],
	              [10,9,10,10,10,10,12,9,10,10,10,12,10,10,10,9,10,10,10,10,10,10,1,1,1,10,10,10,10,10,10,10,1,2,1,1,1,1,1,12,10,10,10,12,10,9,10,1,10,12,10],
	              [10,10,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,10,1,1,1,1,1,1,1,1,1,1,1,10,1,1,2,1,1,1,1,1,1,2,1,1,10,10,10],
	              [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,9,12,10,12,12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],
            	];

//contrato: cambiarMapa  number, number, number->structure
//proposito: retorna una estructura que cambia masivamente el estado actual del mundo
/*ejemplo cambiarMapa(1,3,14)-> {
	    frame: 0,
			dinerorecolectado: 14,
			cronometro: 0,
			ola: {altura:0, cronometro:0},
	    dir: {x: 0, y: 0},
	    tombo:{x: tombopos1.x, y: tombopos1.y , enMovimiento:false},
			tomboposres: {x: tombopos1.x, y: tombopos1.y},
	    tombovidas: 3,
	    tombomuerto: false,
	    mapa: mapa1,
	    dimensionmapa:{altura:35, ancho:16},
	    cambiarmapa: {cambiar: false, numeromapa: 1},
	    mapafinal: false
	  };
*/            
function cambiarMapa(numeromapa, tombovidas, dinerorecolectado)
{
	if(numeromapa==1)
		return {
	    frame: 0,
			dinerorecolectado: dinerorecolectado,
			cronometro: 0,
			ola: {altura:0, cronometro:0},
	    dir: {x: 0, y: 0},
	    tombo:{x: tombopos1.x, y: tombopos1.y , enMovimiento:false},
			tomboposres: {x: tombopos1.x, y: tombopos1.y},
	    tombovidas: tombovidas,
	    tombomuerto: false,
	    mapa: mapa1,
	    dimensionmapa:{altura:35, ancho:16},
	    cambiarmapa: {cambiar: false, numeromapa: 1},
	    mapafinal: false
	  };
	else if(numeromapa==2)
		return {
	    frame: 0,
			dinerorecolectado: dinerorecolectado,
			cronometro: 0,
			ola: {altura:0, cronometro:0},
	    dir: {x: 0, y: 0},
	    tombo:{ x: tombopos2.x, y: tombopos2.y, enMovimiento:false},
			tomboposres: { x: tombopos2.x, y: tombopos2.y},
	    tombovidas: tombovidas,
	    tombomuerto: false,
	    mapa: mapa2,
	    dimensionmapa:{altura:16, ancho:51},
	    cambiarmapa: {cambiar: false, numeromapa: 2},
	    mapafinal: true,
	    victoria: false
	  };
}
//contrato: comprobarCambioMapa structure,list,structure->structure
//proposito: retorna la structura cambiarmapa que indica si se debe de cambiar de mapa y cuando
//ejemplo  comprobarCambioMapa({x:3, y:0, enMovimiento:false},[0,0,0,3,0], {cambiar: false, numeromapa: 2}) -> {cambiar:true, numeromapa: 2 };
function comprobarCambioMapa(tombo, mapa, cambiarmapa)
{
	if(mapa[tombo.y][tombo.x] == 3)
    return {cambiar:true, numeromapa: cambiarmapa.numeromapa+1 };
	else
		return cambiarmapa;
}
function victoria(tombo, mapa,mapafinal)
{
	if(mapafinal && mapa[tombo.y][tombo.x] == 3)
		return true;
	else
		return false;
}

//contrato: comprobarCambioMapa structure->structure
//proposito: retorna una estructura que reinicia el nivel.
function reiniciarEstado(world)
{
	return {
		frame: 0,
		dinerorecolectado: world.dinerorecolectado,
		cronometro: world.cronometro,
		ola: {altura:0, cronometro:0},
		dir: {x: 0, y: 0},
		tombo:{x: world.tomboposres.x, y: world.tomboposres.y, enMovimiento:false},
		tomboposres: {x: world.tomboposres.x, y: world.tomboposres.y},
		tombovidas: world.tombovidas-1,
		tombomuerto: false,
		mapa: world.mapa,
		dimensionmapa: world.dimensionmapa,
		cambiarmapa: world.cambiarmapa
	}
}