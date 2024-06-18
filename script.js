const seta = document.querySelector('.seta');
const main = document.querySelector('.projeto1');

const hamburguer = document.querySelector('.hamburguer');
const links = document.querySelector('.links');

seta.addEventListener('click',function(){

    targetPosition = main.getBoundingClientRect().top + window.scrollY;
    offsetPosition = targetPosition - (window.innerHeight / 2) + (main.clientHeight / 2);
    main.scrollIntoView({ behavior: 'smooth' });

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    })

})

hamburguer.addEventListener('click',function(){
    links.classList.toggle('ativo');
})