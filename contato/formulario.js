const botao = document.querySelector('.botao');
const fechar = document.querySelector('.fechar');
const formulario = document.querySelector('.container-formulario');

botao.addEventListener('click', function(){
    formulario.classList.toggle('ativo');
    console.log(formulario.classList);
})

fechar.addEventListener('click', function(){
    formulario.classList.toggle('ativo');
    console.log(formulario.classList);
})