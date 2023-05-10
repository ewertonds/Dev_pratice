
//variável de som
let colisao, ponto, trilha, fonte;
let width=500, height=400;

function setup() {
  createCanvas(width,height);
}

function draw() {
  background(fundo);
  exibirJogador();
  mostrarLetreiro();
  mostrarPlacar();
  exibirCarros();
  movimentaJogador();
  movimetaCarros();
  loopCarros();
  contarPonto();
}

