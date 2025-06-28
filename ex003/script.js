let botao = document.getElementById("botao")

botao.addEventListener("click", () => {
    let nome = prompt("Qual é o seu nome?")
    alert(`Olá, ${nome}! É um prazer te conhecer!`)
})