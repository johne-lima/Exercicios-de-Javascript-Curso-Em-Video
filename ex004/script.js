let botao = document.getElementById("botao")
let result = document.getElementById("resultado")

botao.addEventListener("click", () => {
    let nome = prompt("Qual é seu nome?")
    result.innerHTML = `Olá, <strong>${nome}</strong>! É um prazer te conhecer! 🖖`
})