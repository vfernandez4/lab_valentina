let calculo = 0;

const botonSuma = document.getElementById("sumar");

const botonResta = document.getElementById("restar");

const botonMulti = document.getElementById("multiplicar");

const span = document.getElementById("resultado");

botonSuma.addEventListener("click", () => {

const primero = Number(document.getElementById("primero").value);

const segundo = Number(document.getElementById("segundo").value);

calculo = primero + segundo;

span.innerText = calculo;

});

botonResta.addEventListener("click", () => {

    const primero = Number(document.getElementById("primero").value);

    const segundo = Number(document.getElementById("segundo").value);

    calculo = primero - segundo;

    span.innerText = calculo;

});

 botonMulti.addEventListener("click", () => {

    const primero = Number(document.getElementById("primero").value);

    const segundo = Number(document.getElementById("segundo").value);

    calculo = primero * segundo;

    span.innerText = calculo;

});