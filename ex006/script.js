let botao = document.getElementById("botao")
let result = document.getElementById("resultado")

botao.addEventListener("click", () => {
    n1 = Number(prompt("Digite um número: "))
    n2 = Number(prompt("Digie outro número: "))
    let soma = n1 + n2
    result.innerHTML = `A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é igual a <strong>${soma}!</strong>`
})
