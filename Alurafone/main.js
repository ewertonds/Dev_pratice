//alert('ESTOU FUNCIONANDO');
let digitNum='';
const tecladoNum = document.querySelectorAll("input[type='button']");
const printNum = document.querySelector("input[type='tel']");

function recebeValor(e){
    digitNum += e.target.value;
    printNum.value = digitNum;
}

for (let index=0;index<tecladoNum.length-1;index+=1){
    tecladoNum[index].addEventListener('click',recebeValor);
}

 window.onload(printNum.value='');

