// Separar o código da seta

const projeto1 = document.querySelector('.projetos.projeto1');

const hamburguer = document.querySelector('.hamburguer');
const links = document.querySelector('.links');

hamburguer.addEventListener('click',function(){
    links.classList.toggle('ativo');
})
