let botao = document.getElementById("botao")
let result = document.getElementById("resultado")

botao.addEventListener("click", () => {
    let nome = prompt("Qual é o nome do aluno?")
    let nota1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
    let nota2 = Number(prompt(`Além de ${nota1}, qual foi a outra nota de ${nome}?`))
    let media = (nota1 + nota2) / 2
    
    result.innerHTML = `Calculando a média final de <mark>${nome}</mark>. <br>
                        As notas obtidas foram <mark>${nota1} e ${nota2}</mark>. <br>
                        A média final será: <mark>${media}</mark>.`
})