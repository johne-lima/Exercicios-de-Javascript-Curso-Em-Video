let botao = document.getElementById("botao")
let zerar = document.getElementById("zerar")
let result = document.getElementById("result")
let cliques = 0

botao.addEventListener("click", () => {
    cliques++
    result.innerHTML = `<p>O contador está com <mark>${cliques}</mark> cliques.`
})

zerar.addEventListener("click", () => {
    cliques = 0
    result.innerHTML = null
})