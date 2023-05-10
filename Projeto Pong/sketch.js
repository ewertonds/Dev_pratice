// variáveis bolinha
let xBolinha = 250, yBolinha= 175, dBolinha = 20, 
rBolinha = dBolinha/2;
let velXBolinha = 6, velYBolinha =6; //usar velocidades separadas

// variaveis raquete
let posxRaquete = 2, posyRaquete= 150, larguraRaquete=10, alturaRaquete=70;

//variaveis raquete oponente
let posxOponente = 488, posyOponente= 150, veloYOponente;
let pontosJogador = 0, pontosOponente = 0;

//colisão
let hit=false;

//trilha sonora
let trilha, raquetada, ponto;

// chances de erro oponente
let chanceDeErrar = 0; //necessário para início do processo
let direcaoRaqueteOponente = 1;

//correção de colisão Bolinha
let jaRebateu = false;

//-----------------------------

function preload(){
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}
function setup() {
  createCanvas(500, 350);
  //trilha.loop();
}

function draw() {
  background(95, 39, 205); //usa formatos de RGB/HSL/HEX e etc.
  describe('nasu purple background'); //boas práticas?
  mostraBola();
  movimentoBola();
  mostraRaquete(posxRaquete, posyRaquete);
  mostraRaquete(posxOponente, posyOponente);
  mostrarPlacar();
  movimentaRaquete();
  movimentaOponente();
  //colisaoRaquete();
  colisaoRaqueteBiblioteca(posxRaquete, posyRaquete);
  colisaoRaqueteBiblioteca(posxOponente, posyOponente);
  contarPonto();
  bolinhaNaoFicaPresa();
}

 function mostraBola(){
 let bolinha = circle(xBolinha, yBolinha, dBolinha); //desenha o objeto
 bolinha.fill(245, 246, 250); //preenche a cor do objeto, usei RGB
 bolinha.noStroke(); //retira o traço
 }

function movimentoBola(){
  xBolinha += velXBolinha; //soma a variável à velBolinha
  yBolinha += velYBolinha;
  if(xBolinha + rBolinha > width || xBolinha - rBolinha < 1){
    velXBolinha *= -1
  }
  if(yBolinha + rBolinha > height|| yBolinha - rBolinha <0){
    velYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x, y, larguraRaquete, alturaRaquete);
  fill(245, 246, 250);
  noStroke();
}

function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
      posyRaquete -= 10; 
     }
   if(keyIsDown(DOWN_ARROW)){
      posyRaquete += 10; 
     }
}

function movimentaOponente(){
  veloYOponente = yBolinha - posyOponente - larguraRaquete/2 - 30;
  posyOponente += veloYOponente + chanceDeErrar;
  calculaChanceDeErrar();
}

//Colisão feita manualmente
/*function colisaoRaquete(){
  if(xBolinha - rBolinha < posxRaquete + larguraRaquete && yBolinha - rBolinha < posyRaquete+ alturaRaquete && yBolinha + rBolinha > posyRaquete){
     velXBolinha *= -1;
     }
}*/

//Colisão pela biblioteca externa
function colisaoRaqueteBiblioteca(x, y){
  hit = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, rBolinha);
  if (hit) { //Bolinha não fica presa
        velXBolinha *= -1;
        raquetada.play();
    }
}

//mostrar placar
function mostrarPlacar(){
  textSize(24);
  textAlign(CENTER);
  text(pontosJogador, 200, 35);
  text(pontosOponente, 280, 35);
}

function contarPonto(){
  if(xBolinha > 490){
     pontosJogador += 1;
    ponto.play();
  }
  if(xBolinha < 12){
    pontosOponente += 1;
    ponto.play();
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - rBolinha < 0){
      xBola = 23
    }
    if (xBolinha + rBolinha > 500){
      xBola = 480
    }
}

// aumenta chande de erro do oponente
function calculaChanceDeErrar() {
  if (pontosOponente >= pontosJogador) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 40){
    chanceDeErrar = 41
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
  //console.log("chanceDeErrar");
}

