const seta = document.querySelector('.seta');

seta.addEventListener('click',function(){
    
    const posicaoProjeto1 = projeto1.getBoundingClientRect().top - 100
    window.scrollTo({
        top: posicaoProjeto1,
        behavior: 'smooth'
    });

})