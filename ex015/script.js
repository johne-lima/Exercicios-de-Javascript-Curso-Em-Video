let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")

let date = new Date()
const dia = date.getDate() // dia atual
const mes = date.getMonth() + 1 //
const ano = date.getFullYear()
const diaSemana = date.toLocaleDateString('pt-BR', {weekday: "long"})
const hora = date.getHours()
const minutos = date.getMinutes()
const segundos = date.getSeconds()
const milisegundos = date.getMilliseconds()

botao.addEventListener("click", () => {
    resultado.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    resultado.innerHTML += `<p>Mês: <mark>${mes}</mark></p>`
    resultado.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    resultado.innerHTML += `<p>Dia da semana: <mark>${diaSemana}</mark></p>`
    resultado.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    resultado.innerHTML += `<p>Minutos: <mark>${minutos}</mark></p>`
    resultado.innerHTML += `<p>Segundos: <mark>${segundos}</mark></p>`
    resultado.innerHTML += `<p>Milisegundos: <mark>${milisegundos}</mark></p>`
})