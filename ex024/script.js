let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")

botao.addEventListener("click", () => { 
    resultado.innerHTML += `<h2>Contagem Regressiva de 10 a 1</h2>`

     for (let i = 10; i >= 1; i--) {
        resultado.innerHTML += `${i}👉 `
    }
    resultado.innerHTML += "🏁"
})
