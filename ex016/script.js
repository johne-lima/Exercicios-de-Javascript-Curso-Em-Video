let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")

let date = new Date()
let ano = date.getFullYear()

botao.addEventListener("click", () => {
    let nasc = Number(prompt("Em que ano você nasceu?"))

    let idade = ano - nasc 
    resultado.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> em ${ano}.</p>`
})

