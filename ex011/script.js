let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")
let nome
let nota1
let nota2
let media

botao.addEventListener("click", () => {
    nome = String(prompt("Qual é o nome do aluno?"))
    nota1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
    nota2 = Number(prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`))
    media = (nota1 + nota2) / 2

    resultado.innerHTML = `<p>Calculando a média de <mark>${nome}</mark></p>`
    resultado.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark></p>`
    resultado.innerHTML += `<p>A média final será <mark>${media}</mark></p>`

    if(media < 6) {
        resultado.innerHTML += `<p>A mensagem que temos é: <span style="color: red;">Estude um pouco mais!</span></p>`
    } else {
        resultado.innerHTML += `<p>A mensagem que temos é: <span style="color: red;">Meus parabéns!</span></p>`
    }
})