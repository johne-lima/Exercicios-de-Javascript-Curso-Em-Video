let botao = document.getElementById("botao")
let limpar = document.getElementById("limpar")
let resultado = document.getElementById("resultado")

botao.addEventListener("click", () => {
    let numAleatorio = Math.trunc(Math.random() * 101)

    resultado.innerHTML += `<p>Acabei de pensar no número <mark>${numAleatorio}</mark>!</p>`
})

limpar.addEventListener("click", () => {
    resultado.innerHTML = `<p>Cada vez que você apertar o botão acima, eu penso em um número entre 1 a 100</p>`
})