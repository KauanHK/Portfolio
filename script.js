// Separar o código da seta

const seta = document.querySelector('.seta');
const projeto1 = document.querySelector('.projetos.projeto1');

const hamburguer = document.querySelector('.hamburguer');
const links = document.querySelector('.links');

seta.addEventListener('click',function(){
    
    const posicaoProjeto1 = projeto1.getBoundingClientRect().top - 100
    window.scrollTo({
        top: posicaoProjeto1,
        behavior: 'smooth'
    });

})

hamburguer.addEventListener('click',function(){
    links.classList.toggle('ativo');
})
