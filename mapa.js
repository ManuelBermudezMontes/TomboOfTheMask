function dibujarMapa(mapa,imapaY, imapaX, icanvasY,processing)
{
  if (icanvasY < maxUnits)
  {
    if(imapaY<0 || imapaY>12)
    {
      dibujarHileraNeutral(icanvasY*unit, 0, processing);
      dibujarMapa(mapa, imapaY+1, imapaX, icanvasY+1, processing);
    }
    else 
    {
      dibujarHilera(recortarLista(first(mapa),imapaX,0), imapaX, icanvasY*unit, 0, processing);
      dibujarMapa(rest(mapa), imapaY+1, imapaX, icanvasY+1, processing);
    }
  }
}

function dibujarHileraNeutral(y,icanvasX,processing)
{
  if(icanvasX < maxUnits)
  {
    let x = icanvasX*unit;
    processing.image(muro,x,y,unit,unit);
    dibujarHileraNeutral(y,icanvasX+1,processing);
  }

}
function dibujarHilera(hilera,imapaX,y,icanvasX,processing)
{
  if(icanvasX < maxUnits)
  {
    if(imapaX<0 || imapaX>10)
    {
      let x = icanvasX*unit;
      processing.image(muro,x,y,unit,unit);
      dibujarHilera(hilera, imapaX+1, y, icanvasX+1, processing);
    }
    else 
    {
      if(first(hilera)==1)
      {
        let x = icanvasX*unit;
        processing.image(muro,x,y,unit,unit);
      }
      dibujarHilera(rest(hilera), imapaX+1, y, icanvasX+1, processing);
    }
  }
}
function recortarLista(lista, imapa, indice)
{
  if(indice >= imapa)
    return lista;
  else
    return recortarLista(rest(lista),imapa,indice+1);
}
