let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")

botao.addEventListener("click", () => {
    let numero = document.getElementById("numero").value
    let fatorial = 1

    resultado.innerHTML = `<h2>Calculando ${numero.value}</h2>`

    if (numero >= 1 && numero <= 21) {
        for (let i = numero; i > 1; i--) {
            fatorial *= i
            resultado.innerHTML += `${i} x `
        }
        resultado.innerHTML += ` = ${fatorial}`
    }
    else {
        resultado.innerHTML = "Por favor, digite um número entre 1 e 21."
    }
})
