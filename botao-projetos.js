const botao = document.querySelector('.botao-projetos');
const projetos = document.querySelector('section.projetos .titulo');
const posicao = projetos.getBoundingClientRect().top - document.querySelector('nav').clientHeight;

botao.addEventListener('click', function(){
    window.scrollTo({
        top: posicao,
        behavior: 'smooth'
    })
})