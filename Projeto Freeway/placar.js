let placar=0;

function mostrarLetreiro() {
  text('SEGURA NA MÃO DE DEUS E VEM', 250, 25)
  textSize(25);
  textAlign(CENTER);
  textFont(fonte);
  fill('#2d3436')
}

function mostrarPlacar(){
  text('Placar:', 380, 390)
  text(placar, 445, 390)
}

function contarPonto() {
  if(yJogador < 20){
      placar+=1;
      yJogador=370;
      ponto.play();
     }
}