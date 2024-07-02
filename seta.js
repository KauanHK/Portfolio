const destino = document.querySelector('.destino');
const seta = document.querySelector('.seta');

const posicaoDestino = destino.getBoundingClientRect().top - document.querySelector('nav').clientHeight - 50;
seta.addEventListener('click',function(){
    
    window.scrollTo({
        top: posicaoDestino,
        behavior: 'smooth'
    });

})
