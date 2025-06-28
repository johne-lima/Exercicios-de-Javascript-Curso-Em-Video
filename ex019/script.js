let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")
let n1, n2, operacao, resultadoConta
botao.addEventListener("click", () => {
    n1 = Number(prompt("Primeiro valor:"))
    n2 = Number(prompt("Segundo valor:"))
    operacao = prompt(
        `Valores informados ${n1} e ${n2}.
O que vamos fazer?
[1] Somar
[2] Subtrair
[3] Multiplicar
[4] Dividir`)

    switch (operacao) {
        case "1":
            resultadoConta = n1 + n2
            resultado.innerHTML += `<p> ${n1} + ${n2} = ${resultadoConta}</p>`
            break
        case "2":
            resultadoConta = n1 - n2
            resultado.innerHTML += `<p> ${n1} - ${n2} = ${resultadoConta}</p>`
            break
        case "3":
            resultadoConta = n1 * n2
            resultado.innerHTML += `<p> ${n1} * ${n2} = ${resultadoConta}</p>`
            break
        case "4":
            resultadoConta = n1 / n2
            resultado.innerHTML += `<p> ${n1} / ${n2} = ${resultadoConta}</p>`
            break
    }

    if (operacao === null || operacao != "1" && operacao != "2" && operacao != "3" && operacao != "4") {
        resultado.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles</p>`
    }
})