let botao = document.getElementById("botao")
let numero = document.getElementById("numero")
let resultado = document.getElementById("resultado")
let tabuada

botao.addEventListener("click", () => {
    resultado.innerHTML = `<h2>Tabuada de ${numero.value}</h2>`
    for (let i = 0; i <= 10; i++) {
        tabuada = numero.value * i
        resultado.innerHTML += `<p>${numero.value} x ${i} = <strong>${tabuada}</strong></p>`
    }
})