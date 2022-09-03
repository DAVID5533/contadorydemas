
const button = document.querySelector('button');
const ul = document.querySelector('ul');

const colors = ["green","red","rgba(121, 121, 121, 0.685)","#D9258F"];
const bt = document.getElementById('bt');
const color = document.querySelector('.color');
const p = document.querySelector(".p");

bt.addEventListener("click" , function(){
    const randomNumber = getRandomNumber();
    console.log(colors[randomNumber]);

    document.body.style.background = colors[randomNumber];
    p.innerText = `El color es: ${colors[randomNumber]}`;
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

button.addEventListener('click' , amburger);

function amburger(){
    ul.classList.toggle('activo');
}



let contador = 0;
const value = document.querySelector('#value');
const z = document.querySelectorAll('.z');

z.forEach(function(z){
    z.addEventListener("click" , function(e){
        const style = e.currentTarget.classList;
        if(style.contains("aumentar")){
            contador++
        }else if(style.contains("quitar")){
            contador--
        }else{
            contador=0;
        }


        if(contador > 0){
            value.style.color = "green";
        }else if(contador < 0){
            value.style.color = "red";
        }else if(contador === 0){
            value.style.color = "black";
        }


        value.textContent = contador;
    })
})





/*
const h1= document.querySelector("h1");
const p= document.querySelector("p");
const parrafito= document.getElementsByClassName("parrafito");
const pid = document.getElementById("pid");
const input = document.querySelector("input");
const div = document.querySelector("div");


console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

enviar.addEventListener("click", function(){
    console.log(input.value);
});


const resul = document.querySelector('#resultado');

function suma(){
    const input1 = parseInt(document.getElementById("calcular1").value);
    const input2 = parseInt(document.getElementById("calcular2").value);

    let sumainput = input1 + input2;

    resul.innerHTML = '  Resultado de la suma es: ' + sumainput;

};


var checkbox = document.getElementById('activar');
checkbox.addEventListener('change', function() {
    if(this.checked) {
       div.setAttribute('class', 'oscuro');
    }else{
        div.setAttribute('class', 'verde');
    }
});







*/


