let carros = [1, 2, 3, 4, 5, 6];
let i;

let xCarros = [590, 590, 590, 0, 0, 0];
//let xCarros = [600, 600, 600, 0, 0, 0]
let yCarros = [40, 97, 150, 212, 263, 320];

function exibirCarros() {
  for (i = 0; i < carros.length; i = i + 1)
    image(carros[i], xCarros[i], yCarros[i], 50, 40);
  //console.log(i);
}

function movimetaCarros() {
  xCarros[0] -= 6;
  xCarros[1] -= 4;
  xCarros[2] -= 5.2;
  xCarros[3] += 4;
  xCarros[4] += 5.8;
  xCarros[5] += 5.5;
}

function loopCarros() {
  //carros da direita
  for (let i = 0; i < 3; i = i + 1) {
    if (xCarros[i] <= width - 600) {
      xCarros[i] = 600;
    }
  }
  //carros da esquerda
  for (let i = 3; i < 6; i = i + 1) {
    if (xCarros[i] >= width) {
      xCarros[i] = -40;
    }
  }
}
