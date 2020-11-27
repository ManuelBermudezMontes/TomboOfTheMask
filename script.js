//Vamos a usar http://processingjs.org/
  // o https://p5js.org/reference/

// Importamos las librerias si es necesario usar listas
const { append, cons, first, isEmpty, isList, length, rest } = functionalLight;

function make(data, attribute) 
{
  return Object.assign({}, data, attribute);
}


function apply(a, f) 
{
    if (!isEmpty(a)) 
    {
      f(first(a));
      apply(rest(a), f);
    }
}

function moverTombo(tombo, dir, mapa)
{
  
  if
  (
    ((dir.x==1 && mapa[tombo.y][tombo.x+1]==1) || (dir.x==-1 && mapa[tombo.y][tombo.x-1]==1) ||
    (dir.y==1 && mapa[tombo.y+1][tombo.x]==1) || (dir.y==-1 && mapa[tombo.y-1][tombo.x]==1)) ||
    (dir.x==0 && dir.y==0)
  ) 
    return {x: tombo.x, y: tombo.y, enMovimiento: false};
  else
    return {x: tombo.x+dir.x, y: tombo.y+dir.y, enMovimiento: true};
  
}

//globales
const unit = 40;
const size = 800;
const maxUnits = size/unit;
const columnaTamanio = 29;
const hileraTamanio = 16;

function sketchProc(processing) 
{
  
  /**
   * Esto se llama antes de iniciar (espacio de trabajo)
   */
  processing.setup = function () 
  {
    tomboImagen = processing.loadImage("images/tomb.png");
    muro = processing.loadImage("images/muro.jpg");
    processing.frameRate(30);
    processing.size(size, size);
    processing.state = 
    {
      dir: {x: 0, y: 0},
      tombo:{x:10, y:28 , enMovimiento:false},
      mapa: [
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
              [1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1],  
              [1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1],
              [1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1],
              [1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1],
              [1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1],
              [1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1],
              [1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1],
              [1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1],
              [1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1],
              [1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1],
              [1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1],
              [1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1],
              [1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1],
              [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1],
              [1,1,1,1,1,1,1,1,1,1,2,0,0,0,0,0,1],
              [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
            ]
      
    };
  }
   

  // Dibuja algo en el canvas. Aqui se pone todo lo que quieras pintar
  processing.drawGame = function (world) 
  {
    processing.background(10, 10, 10);
    
    let atributosCentro = atributosDeCentro(world.tombo);
    let mapaRecortado = recortarLista(world.mapa, atributosCentro.imapaY, 0);
    dibujarMapa(mapaRecortado, atributosCentro.imapaY, atributosCentro.imapaX, 0, processing);

    processing.image(tomboImagen, atributosCentro.tomboCentrado, atributosCentro.tomboCentrado, unit, unit);
    
  }

  // Actualiza el mundo despues de cada frame. En este ejemplo, no cambia nada, solo retorna una copia del mundo
  processing.onTic = function (world) 
  {
    return make(world, { tombo: moverTombo(world.tombo, world.dir, world.mapa)});
  }

  //Implemente esta función si quiere que su programa reaccione a eventos del mouse
  processing.onMouseEvent = function (world, event) 
  {
    // Por ahora no cambia el mundo. Solo retorna una copia del mundo actual
    return make(world, {});
  };

  //Implemente esta función si quiere que su programa reaccione a eventos del teclado
  processing.onKeyEvent = function (world, keyCode) 
  {
    if (keyCode==processing.UP && !world.tombo.enMovimiento){
      return make(world, {dir: {x: 0, y: -1}});
    }
    if (keyCode==processing.DOWN && !world.tombo.enMovimiento){
      return make(world, {dir: {x: 0, y: 1}});
    }
    if (keyCode==processing.LEFT && !world.tombo.enMovimiento){
      return make(world, {dir: {x: -1, y: 0}});
    }
    if (keyCode==processing.RIGHT && !world.tombo.enMovimiento){
      return make(world, {dir: {x: 1, y: 0}});
    }
    return make(world, {dir: {x: world.dir.x, y: world.dir.y}});
      
  }


 
  // ******************** De aquí hacia abajo no debe cambiar nada. ********************

  // Esta es la función que pinta todo. Se ejecuta n veces por segundo. 
  // No cambie esta función. Su código debe ir en drawGame
  processing.draw = function () 
  {
    processing.drawGame(processing.state);
    processing.state = processing.onTic(processing.state);
  };

  // Esta función se ejecuta cada vez que presionamos una tecla. 
  // No cambie esta función. Su código debe ir en onKeyEvent
  processing.keyPressed = function () 
  {      
    processing.state = processing.onKeyEvent(processing.state, processing.keyCode);
  }

  // Esta función se ejecuta cada vez movemos el mouse. 
  // No cambie esta función. Su código debe ir en onKeyEvent
  processing.mouseMoved = function () 
  {
    processing.state = processing.onMouseEvent(processing.state,
     { action: "move", mouseX: processing.mouseX, mouseY: processing.mouseY });
  }

  // Estas funciones controlan los eventos del mouse. 
  // No cambie estas funciones. Su código debe ir en OnMouseEvent
  processing.mouseClicked = function () 
  {
    processing.state = processing.onMouseEvent(processing.state,
    { action: "click", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }

  processing.mouseDragged = function () 
  {
    processing.state = processing.onMouseEvent(processing.state,
    { action: "drag", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }

  processing.mousePressed = function () 
  {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "press", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }

  processing.mouseReleased = function () 
  {
    processing.state = processing.onMouseEvent(processing.state,
      { action: "release", mouseX: processing.mouseX, mouseY: processing.mouseY, mouseButton: processing.mouseButton });
  }
  // Fin de los eventos del mouse
}

var canvas = document.getElementById("canvas");

// Adjuntamos nuestro sketch al framework de processing
var processingInstance = new Processing(canvas, sketchProc);