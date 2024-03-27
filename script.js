//Para el botón que lleva al top:
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop >100) {
    document.getElementById("btnScrollTop").style.display = "block";
  } else {
    document.getElementById("btnScrollTop").style.display = "none";
  }
}
function scrollToTop() {
  document.documentElement.scrollTop = 0; 
}
window.onscroll = function() {scrollFunction()};

//Para la sección Ninja js:
const boton = document.getElementById('sumar');
const boton2 = document.getElementById('restar');
const boton3 = document.getElementById('buscar-el-mayor');
const boton4 = document.getElementById('ver-a-n-veces');
const botones = new Array(boton, boton2, boton3, boton4);

//Añadir .active a los botones
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover la clase '.active' de todos los botones
        btns.forEach(b => b.classList.remove('active'));
        // Agregar la clase '.active' solo al botón clickeado
        btn.classList.add('active');
    });
});

//Para que la página no se refrescará
botones.forEach(element => {
  element.addEventListener('click', function(event){
    event.preventDefault();
  })
});

//Evitar que la tecla ENTER haga alguna acción en los input
document.getElementById("input1").addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
  }
});
document.getElementById("input2").addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
  }
});

//Para mostrar el contenedor del resultado
function mostrarElemento() {
  const elemento = document.getElementById('resultado');
  elemento.style.opacity = '1'; 
  elemento.classList.remove('oculto'); 
}

function noMostrarElemento(){
  const elemento = document.getElementById('resultado');
  elemento.style.opacity = '0'; 
  elemento.classList.add('oculto'); 
}

//Boton "Sumar":
function sumar(value1, value2){
  const suma = value1 + value2;
  return suma
}

function printResult(){
  const num1 = document.getElementById('numero1').value;
  const num2 = document.getElementById('numero2').value;
  const parrafo = document.getElementById('result')

  const result = sumar(parseInt(num1), parseInt(num2));
  parrafo.textContent = `${result}`
  if(parrafo.textContent === 'NaN'){
    parrafo.textContent = 'Error, ingrese un nº primero.'
  }
}

//Botón "Restar":
function restar(value1, value2){
  const restar = value1 - value2;
  return restar
}

function printResult2(){
  const num1 = document.getElementById('numero1').value;
  const num2 = document.getElementById('numero2').value;
  const parrafo = document.getElementById('result')

  const result = restar(parseInt(num1), parseInt(num2));
  parrafo.textContent = `${result}`
  if(parrafo.textContent === 'NaN'){
    parrafo.textContent = 'Error, ingrese un nº primero.'
  }
}

//Botón "Buscar el mayor":
function buscarElMayor(value1, value2){
    if (value1 > value2) {
      return value1
    }else{
      return value2
    }
}

function printResult3(){
  const num1 = document.getElementById('numero1').value;
  const num2 = document.getElementById('numero2').value;
  const parrafo = document.getElementById('result')

  const result = buscarElMayor(parseInt(num1), parseInt(num2));
  parrafo.textContent = `${result}`
  if(parrafo.textContent === 'NaN'){
    parrafo.textContent = 'Error, ingrese un nº primero.'
  }
}

//Botón "Ver A, N veces":
function NvecesA(value1, value2) {
  if (value2 < 0) {
    return "El nº N no debe ser negativo";
  }else if (value2 === ""){
    return 'Error, ingrese un nº primero.'
  }
  
  let result = 1;
  
  for (let i = 0; i < value2; i++) {
    result *= value1;
  }
  
  return result;
}

function printResult4(){
  const num1 = document.getElementById('numero1').value;
  const num2 = document.getElementById('numero2').value;
  const parrafo = document.getElementById('result')

  const result = NvecesA(parseInt(num1), num2);
  parrafo.textContent = `${result}`
}