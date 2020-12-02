//contrato: dibujarMapa  structure,number,number,number,structure,processing
//proposito: dibuja el mapa del juego
//ejemplo  dibujarMapa ([1,1,1,0,1],0,0,1,{altura: 1, ancho: 1}, processing);
function dibujarMapa(mapa,imapaY, imapaX, icanvasY, dimensionMapa, processing)
{
  if (icanvasY < maxUnits)
  {
    if(imapaY<0 || imapaY>dimensionMapa.altura)
    {
      dibujarHileraNeutral(icanvasY*unit, 0, processing);
      dibujarMapa(mapa, imapaY+1, imapaX, icanvasY+1, dimensionMapa, processing);
    }
    else 
    {
      dibujarHilera(recortarLista(first(mapa),imapaX,0), imapaX, icanvasY*unit, 0, dimensionMapa.ancho, processing);
      dibujarMapa(rest(mapa), imapaY+1, imapaX, icanvasY+1, dimensionMapa, processing);
    }
  }
}
//contrato: dibujarHileraNeutral  number,number,processing
//proposito: dibuja una hilera en donde no hay mapa
//ejemplo  dibujarHileraNeutral (0,0,processing);
function dibujarHileraNeutral(y, icanvasX, processing)
{
  if(icanvasX < maxUnits)
  {
    let x = icanvasX*unit;
    //processing.image(muro,x,y,unit,unit);
    dibujarHileraNeutral(y,icanvasX+1,processing);
  }

}
//contrato: dibujarHilera list,number,number,number,number,processing
//proposito: dibuja una hilera dependiendo de los numeros de la posicion del mapa
//ejemplo  dibujarHilera ([0,0,0,0,1,2,3],4,8,2,10, processing);
function dibujarHilera(hilera,imapaX,y,icanvasX, anchuraMapa,processing)
{
  if(icanvasX < maxUnits)
  {
    if(imapaX<0 || imapaX>anchuraMapa)
    {
      let x = icanvasX*unit;
      processing.image(d1,x,y,unit,unit);
      dibujarHilera(hilera, imapaX+1, y, icanvasX+1, anchuraMapa, processing);
    }
    else 
    {
			if(first(hilera) == 1)
      {
        let x = icanvasX*unit;
        processing.image(calle1,x,y,unit,unit);
      }
			else if(first(hilera) == 2)
      {
        let x = icanvasX*unit;
				processing.fill(80,80,80);
				processing.rect(x, y, unit, unit);
        processing.image(dinero,x+2,y+(unit/4),unit-5, unit/2);
      }
			else if(first(hilera) == 3)
      {
        let x = icanvasX*unit;
        processing.image(cai,x,y,unit,unit);
      }
			else if(first(hilera) == 4)
      {
        let x = icanvasX*unit;
        processing.image(calle2,x,y,unit,unit);
      }
			
			else if(first(hilera) == 5)
      {
        let x = icanvasX*unit;
        processing.image(esquina1,x,y,unit,unit);
      }
			else if(first(hilera) == 6)
      {
        let x = icanvasX*unit;
        processing.image(esquina2,x,y,unit,unit);
      }
			else if(first(hilera) == 7)
      {
        let x = icanvasX*unit;
        processing.image(esquina3,x,y,unit,unit);
      }
			else if(first(hilera) == 8)
      {
        let x = icanvasX*unit;
        processing.image(esquina4,x,y,unit,unit);
      }
      else if(first(hilera) == 9)
      {
        let x = icanvasX*unit;
        processing.image(d1,x,y,unit,unit);
      }
			else if(first(hilera) == 10)
      {
        let x = icanvasX*unit;
        processing.image(casa,x,y,unit,unit);
      }
			else if(first(hilera) == 11)
      {
        let x = icanvasX*unit;
        processing.image(arbol,x,y,unit,unit);
      }
			else if(first(hilera) == 12)
      {
        let x = icanvasX*unit;
        processing.image(shop,x,y,unit,unit);
      }
			else
			{
				let x = icanvasX*unit;
				processing.fill(80,80,80);
				processing.rect(x, y, unit, unit);
			}
      dibujarHilera(rest(hilera), imapaX+1, y, icanvasX+1, anchuraMapa, processing);
    }
  }
}
//contrato: recortarLista list,number,number -> list
//proposito: recortar una lista dependiendo de la cantidad a cortar segun imapa
//ejemplo  recortarLista ([1,0,1,0,1,2,0,5,1],2,0) -> [1,0,1,2,0,5,1]
function recortarLista(lista, imapa, indice)
{
  if(indice >= imapa)
    return lista;
  else
    return recortarLista(rest(lista),imapa,indice+1);
} 