//contrato: cogerDinero  structure,list->list
//proposito: retorna la structura del mapa una vez se cogio el billete
//ejemplo  cogerDinero ({x:3, y:0, enMovimiento:false},[0,0,0,2,0]) ->[0,0,0,0,0];
function cogerDinero(tombo, mapa)
{
  if(mapa[tombo.y][tombo.x] == 2)
    mapa[tombo.y][tombo.x] = 0;
  return mapa;
}
//contrato: recogerDinero  structure,list,number -> number
//proposito: retorna el dinero recolectado atraves de la partida
//ejemplo  recogerDinero ({x:3, y:0, enMovimiento:false},[0,0,0,2,0],1) ->2;
function recogerDinero(tombo, mapa, dineroRecolectado)
{
	if(mapa[tombo.y][tombo.x] == 2)
  	return dineroRecolectado+1;
	else 
		return dineroRecolectado;
}