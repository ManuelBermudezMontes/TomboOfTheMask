//contrato: moverTombo number, esctrutura, boolean, number -> esctrutura
//proposito: restringe el movimiento del tombo haciendo colisiones con elementos del mapa
//ejemplo  moverTombo ({x:0, y: 0, enMovimiento: false},{x:1, y:0},[0,0,0,0,0,1]) -> {x: 0, y: 1, enMovimiento: true};
function moverTombo(tombo, dir, mapa)
{
  if((dir.x==1 && (mapa[tombo.y][tombo.x+1]>=8 && mapa[tombo.y][tombo.x+1]<=12)) || 
		(dir.x==-1 && (mapa[tombo.y][tombo.x-1]>=8 && mapa[tombo.y][tombo.x-1]<=12)) ||
    (dir.y== 1 && (mapa[tombo.y+1][tombo.x]>=8 && mapa[tombo.y+1][tombo.x]<=12)) || 
		(dir.y==-1 && (mapa[tombo.y-1][tombo.x]>=8 && mapa[tombo.y-1][tombo.x]<=12)) ||
    (dir.x==0 && dir.y==0)
  ) 
    return {x: tombo.x, y: tombo.y, enMovimiento: false};
  else
    return {x: tombo.x+dir.x, y: tombo.y+dir.y, enMovimiento: true};
}
//contrato: morir structure,number
//proposito: pierde una vida al morir
function morir(ola, tomboPixelPos)
{
  return tocaTombo(ola,tomboPixelPos);
}
