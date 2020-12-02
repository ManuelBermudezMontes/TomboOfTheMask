//contrato: atributosDeCentro structure ->structure
//proposito: retorna indice en donde deberia empezar el mapa, y el centrado del tombo
//ejemplo atributosDeCentro({x:0, x:0, enMovimiento: false})-> {tomboCentrado:400, imapaX: -10, imapaX: -10};
function atributosDeCentro(tombo)
{
  let atributosCentro =
  {
    tomboCentrado:0,
    imapaY: 0,
    imapaX: 0
  };
  if(maxUnits%2==0)
  {
    atributosCentro.tomboCentrado = (size)/2;
    atributosCentro.imapaY = tombo.y-(maxUnits)/2;
    atributosCentro.imapaX = tombo.x-(maxUnits)/2;  
  }
  else
  {
    atributosCentro.tomboCentrado = (size-unit)/2;
    atributosCentro.imapaY = tombo.y-(maxUnits-1)/2;
    atributosCentro.imapaX = tombo.x-(maxUnits-1)/2;  
  }
    return atributosCentro;
}