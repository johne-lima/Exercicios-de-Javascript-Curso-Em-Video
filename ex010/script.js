let botao1 = document.getElementById("botao1")
let botao2 = document.getElementById("botao2")
let botao3 = document.getElementById("botao3")
let botao4 = document.getElementById("botao4")
let zerar = document.getElementById("zerar")
let resultado = document.getElementById("resultado")

botao1.addEventListener("click", () => {
    resultado.innerHTML += `<p>Clicou no primeiro botão</p>`
})

botao2.addEventListener("click", () => {
    resultado.innerHTML += `<p>Clicou no segundo botão</p>`
})

botao3.addEventListener("click", () => {
    resultado.innerHTML += `<p>Clicou no terceiro botão</p>`
})

botao4.addEventListener("click", () => {
    resultado.innerHTML += `<p>Clicou no quarto botão</p>`
})

zerar.addEventListener("click", () => {
    resultado.innerHTML = null
})