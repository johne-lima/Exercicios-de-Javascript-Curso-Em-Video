let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")

botao.addEventListener("click", () => {
    let a = prompt("Digite um número: ")
    let b = prompt("Digite outro número: ")

    if (a > b) {
        resultado.innerHTML = `<p>Analisando os valores <mark>${a}</mark> e <mark>${b}</mark>, o maior valor será <strong>${a}</strong></p>`
    } else if (a == b) {
        resultado.innerHTML = `<p>Analisando os valores <mark>${a}</mark> e <mark>${b}</mark>, ambos são <strong>IGUAIS</strong></p>`
    } else {
        resultado.innerHTML = `<p>Analisando os valores <mark>${a}</mark> e <mark>${b}</mark>, o maior valor será <strong>${b}</strong></p>`
    }
})