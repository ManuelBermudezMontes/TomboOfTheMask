//contrato: dibujarOla number,processing,number,number
//proposito: dibuja la ola de personas segun el frame, cronometro y altura de la ola
//ejemplo  dibujarOla (0,processing,1,1)
function dibujarOla(frame,processing,cronometro, olaaltura)
{
		if(frame <= 6)
			processing.image(olas[0],0,(size*(3/4)-(cronometro*velOla)+(olaaltura*unit)),size,1200);
		else if(frame <= 12)
			processing.image(olas[1],0,(size*(3/4)-(cronometro*velOla)+(olaaltura*unit)),size,1200);
		else if(frame <= 18)
			processing.image(olas[2],0,(size*(3/4)-(cronometro*velOla)+(olaaltura*unit)),size,1200);
		else if(frame <= 24)
			processing.image(olas[3],0,(size*(3/4)-(cronometro*velOla)+(olaaltura*unit)),size,1200);
		else if (frame <= 30)
			processing.image(olas[4],0,(size*(3/4)-(cronometro*velOla)+(olaaltura*unit)),size,1200);
}
//contrato: ola number, esctrutura, boolean, number -> esctrutura
//proposito: retorna la esctrutura de ola, teniendo en cuenta altura y cronometro
//ejemplo  ola (0,{x:0,y:1}, true, 1) -> {altura: -1, cronometro: 1+0.0333333333333333333333333333333333333333333333};
function ola(altura, dir, movimiento, cronometro)
{
	if(dir.y == 1 && movimiento)
		return {altura: altura-1, cronometro: cronometro+0.0333333333333333333333333333333333333333333333};
	else if(dir.y==-1 && movimiento)
		return {altura: altura+1, cronometro: cronometro+0.0333333333333333333333333333333333333333333333};
	else
		return {altura: altura, cronometro: cronometro+0.0333333333333333333333333333333333333333333333};
}
//contrato: ola esctrutura,number -> boolean
//proposito: retorna true si la ola toca al tombo
//ejemplo  ola ({altura: 5,cronometro: 2}) -> false
function tocaTombo(ola,tomboPixelPos)
{
	if((size*(3/4)-(ola.cronometro*velOla)+(ola.altura*unit)) < tomboPixelPos && ola.cronometro > 1)
		return true;
	else
		return false;
}
