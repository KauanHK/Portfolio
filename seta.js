const projeto1 = document.querySelector('.projetos.projeto1');
const seta = document.querySelector('.seta');

seta.addEventListener('click',function(){
    
    const posicaoProjeto1 = projeto1.getBoundingClientRect().top - 400
    window.scrollTo({
        top: posicaoProjeto1,
        behavior: 'smooth'
    });

})
