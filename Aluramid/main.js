//alert('TA FUNCIONANDO');
const tecladoMidi = document.querySelectorAll('.tecla');

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

for(let i=0;i<tecladoMidi.length;i+=1){
    const tecla = tecladoMidi[i];
    const instrumento = tecla.classList[1]; //referenciou o elemento 1 da lista de classes do objeto
    const idAudio = `#som_${instrumento}`; //template string
    tecla.onclick = function (){
        tocaSom(idAudio);
    }
}
