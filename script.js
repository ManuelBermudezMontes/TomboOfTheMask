//Vamos a usar http://processingjs.org/
  // o https://p5js.org/reference/

// Importamos las librerias si es necesario usar listas
const { append, cons, first, isEmpty, isList, length, rest } = functionalLight;

function make(data, attribute) 
{
  return Object.assign({}, data, attribute);
}
//contrato: cuentaFrames number ->number
//proposito: retorna el frame "actual"
//ejemplo cuentaFrames(1)-> 2;
function cuentaFrames(frame)
{
	if(frame>=30)
		return frame-30;
	else
		return frame+1;
}
//contrato: cuentaSegundos number ->number
//proposito: retorna los segundos correspondientes a un frame
//ejemplo cuentaSegundos(1)-> 1.033333333333333333333333333333333333;
function cuentaSegundos(cronometro)
{
	return cronometro+0.0333333333333333333333333333333333333333333333;
}

//globales
const unit = 40;//unidad de cada figura del juego
const size = 800;//tamaño en pixeles del mapa ancho y alto
const maxUnits = size/unit;//unidades maximas que puede tener el mapa
const velOla = 30;//velocidad de la ola
const dinerohudPos = 5;//posicion del dinero como puntaje
const dinerohudTam = 30;//tamaño del dinero como puntaje
const vidahudTam = 40;//tamaño del hud de las vidas
const vidashudPosx = 725;//vidas hud posicion en x
const vidashudPosy = 5;//vidas hud posicion en y

function sketchProc(processing) 
{
	
  /**
   * Esto se llama antes de iniciar (espacio de trabajo)
   */
  processing.setup = function () 
  {
		ola1  = processing.loadImage("images/olas/ola1.gif");
		ola2  = processing.loadImage("images/olas/ola2.gif"); 
		ola3  = processing.loadImage("images/olas/ola3.gif");
		ola4  = processing.loadImage("images/olas/ola4.gif");
		ola5  = processing.loadImage("images/olas/ola5.gif");

		olas = [ola1, ola2, ola3, ola4, ola5];

		calle1 = processing.loadImage("images/carreteras/calle.png");
		calle2 = processing.loadImage("images/carreteras/calle2.png");
		esquina1 = processing.loadImage("images/carreteras/esquina1.png");
		esquina2 = processing.loadImage("images/carreteras/esquina2.png");
		esquina3 = processing.loadImage("images/carreteras/esquina3.png");
		esquina4 = processing.loadImage("images/carreteras/esquina4.png");
		
    tomboImagen = processing.loadImage("images/tombo.png");

    d1 = processing.loadImage("images/casas/D1.png");
		shop = processing.loadImage("images/casas/shop.png");
		casa = processing.loadImage("images/casas/casa.png");
		arbol = processing.loadImage("images/casas/arbol.png");

		cai = processing.loadImage("images/casas/cai.png");
    dinero = processing.loadImage("images/dinero.png");

		escudop = processing.loadImage("images/escudop.png"); 
		tombostrici = processing.loadImage("images/tombos/tombostrici.jpg");
    
    processing.frameRate(30);
    processing.size(size, size);
    processing.state = 
    {
			frame: 0,
			dinerorecolectado: 0,
			cronometro: 0,
			ola: {altura:0, cronometro:0},
      dir: {x: 0, y: 0},
      tombo:{x:10, y:34 , enMovimiento:false},
      tombovidas: 3,
      tombomuerto: false,
      mapa: [[0]],
      dimensionmapa:{altura:35, ancho:16},
      cambiarmapa: {cambiar: true, numeromapa: 1},
      mapafinal: false,
      victoria: false,
    };
  }
 
   

  // Dibuja algo en el canvas. Aqui se pone todo lo que quieras pintar
  processing.drawGame = function (world) 
  {
    if(world.victoria)
    {
      let atributosCentro = atributosDeCentro(world.tombo);
      processing.background(10, 10, 10);
      processing.textSize(30);
			processing.image(escudop, 0, 0, size, size);
			processing.fill(255,255,255);
      processing.text("FELICIDADES!! terminaste el \n patrullaje, ganaste "+world.dinerorecolectado*50+" mil \n razones para seguir siendo un \n heroe que si existe.", atributosCentro.tomboCentrado-(atributosCentro.tomboCentrado/2), atributosCentro.tomboCentrado-(atributosCentro.tomboCentrado/8)); 
    }
    else if(world.tombovidas<1)
    {
      let atributosCentro = atributosDeCentro(world.tombo);
      processing.background(10, 10, 10);
      processing.textSize(dinerohudTam);
			processing.fill(255,255,255);
			processing.image(tombostrici, 0, 0, size, size);
      processing.text("NO MONEY", atributosCentro.tomboCentrado-(atributosCentro.tomboCentrado/4), atributosCentro.tomboCentrado); 
    }
    else if(!world.cambiarmapa.cambiar)
    {
      processing.background(10, 10, 10);
      let atributosCentro = atributosDeCentro(world.tombo);
      let mapaRecortado = recortarLista(world.mapa, atributosCentro.imapaY, 0);
      dibujarMapa(mapaRecortado, atributosCentro.imapaY, atributosCentro.imapaX, 0, world.dimensionmapa, processing);

      processing.image(tomboImagen, atributosCentro.tomboCentrado, atributosCentro.tomboCentrado, unit, unit);
  		dibujarOla(world.frame, processing, world.ola.cronometro, world.ola.altura);

			processing.fill(0,120,0);
			processing.textSize(dinerohudTam);
  		processing.image(dinero,dinerohudPos*2,dinerohudPos,unit, unit/2);
  		processing.text(world.dinerorecolectado, unit+dinerohudPos*4,((unit/2)+dinerohudPos));
			processing.textSize(vidahudTam);
  		processing.image(tomboImagen,vidashudPosx,vidashudPosy, unit, unit);
  		processing.text(world.tombovidas, unit+vidashudPosx, unit);
    }
  }
	
	
	
  // Actualiza el mundo despues de cada frame. En este ejemplo, no cambia nada, solo retorna una copia del mundo
  processing.onTic = function (world) 
  {
    if(world.tombomuerto)
      return make(world, reiniciarEstado(world));
    else if(world.cambiarmapa.cambiar)
      return make(world, cambiarMapa(world.cambiarmapa.numeromapa,world.tombovidas,world.dinerorecolectado));
    else
      return make(world, 
        { 
          tombo: moverTombo(world.tombo, world.dir, world.mapa), 
          dinerorecolectado: recogerDinero(world.tombo, world.mapa, world.dinerorecolectado), 
          mapa: cogerDinero(world.tombo, world.mapa), frame: cuentaFrames(world.frame), 
          cronometro: cuentaSegundos(world.cronometro), 
          ola: ola(world.ola.altura, world.dir, world.tombo.enMovimiento, world.ola.cronometro),
          cambiarmapa: comprobarCambioMapa(world.tombo, world.mapa, world.cambiarmapa),
          tombomuerto: morir(world.ola, atributosDeCentro(world.tombo).tomboCentrado),
          victoria: victoria(world.tombo, world.mapa, world.mapafinal),
        });
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