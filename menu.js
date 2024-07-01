const hamburguer = document.querySelector('.hamburguer');
const links = document.querySelector('.links');

hamburguer.addEventListener('click',function(){
    links.classList.toggle('ativo');
})
