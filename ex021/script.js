let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")

botao.addEventListener("click", () => {
    resultado.innerHTML = `<h2>Contando de 1 até 10</h2>`

    for (i = 0; i <= 10; i++) {
        resultado.innerHTML += `<p>${i} 👉</p>`
    }
    resultado.innerHTML += `🏁`
})