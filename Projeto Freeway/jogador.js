//variáveis dos jogador
let vaquinha;

//variável vaquinha
let xJogador=100, yJogador=370;

function exibirJogador(){
  image(vaquinha, xJogador, yJogador, 25, 25);
}

function movimentaJogador(){
  if(keyIsDown(UP_ARROW)){
    yJogador -=5;
  } if(keyIsDown(DOWN_ARROW)){
    yJogador +=5;
  } if(keyIsDown(RIGHT_ARROW)){
    xJogador +=5;
  } if(keyIsDown(LEFT_ARROW)){
    xJogador -=5;
  }
}

