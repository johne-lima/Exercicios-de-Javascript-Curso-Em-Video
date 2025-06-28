let botao = document.getElementById("botao")
let result = document.getElementById("resultado")

botao.addEventListener("click", () => {
    numb = prompt("Digite um número:")
    let dobro = numb * 2
    let metade = numb / 2
    result.innerHTML = `O dobro de ${numb} é ${dobro} e a metade é ${metade}!`
})
