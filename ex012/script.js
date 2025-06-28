let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")

botao.addEventListener("click", () => {
    let a = Number(prompt("Digite um número:"))

    if (a % 2 == 0 ){
        resultado.innerHTML = `<p> O número ${a} que foi digitado é <strong>PAR</strong></p>`
    } else {
        resultado.innerHTML = `<p> O número ${a} que foi digitado é <strong>IMPAR</strong></p>`
    }
})