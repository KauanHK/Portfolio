const botao = document.querySelector('.botao-projetos');
const projetos = document.querySelector('section.projetos');
const posicao = projetos.getBoundingClientRect().top - 100;

botao.addEventListener('click', function(){
    window.scrollTo({
        top: posicao,
        behavior: 'smooth'
    })
})