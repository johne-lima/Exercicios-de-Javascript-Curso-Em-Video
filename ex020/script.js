let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")

let verao = ["julho", "agosto", "setembro"]
let inverno = ["janeiro", "fevereiro", "março", ]
let primavera = ["abril", "maio", "junho"]
let outono = ["outubro", "novembro", "dezembro"]
let estacao

botao.addEventListener("click", () => {
    estacao = prompt("Digite o mês em extenso (ex: Setembro)").toLowerCase()

    if (verao.includes(estacao)) {
        resultado.innerHTML = `<p>No mês de <mark>${estacao}</mark>, estamos na estação <mark>VERÃO</mark></p>`
    }
    else if (inverno.includes(estacao)) {
        resultado.innerHTML = `<p>No mês de <mark>${estacao}</mark>, estamos na estação <mark>INVERNO</mark></p>`
    }
    else if (primavera.includes(estacao)) {
        resultado.innerHTML = `<p>No mês de <mark>${estacao}</mark>, estamos na estação <mark>PRIMAVERA</mark></p>`
    }
    else if (outono.includes(estacao)) {
        resultado.innerHTML = `<p>No mês de <mark>${estacao}</mark>, estamos na estação <mark>OUTONO</mark></p>`
    }
    else {
        resultado.innerHTML = `<p>Mês inválido. Tente novamente.`
    }
})