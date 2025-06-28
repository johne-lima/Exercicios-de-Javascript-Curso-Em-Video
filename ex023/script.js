let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")

botao.addEventListener("click", () => { 
    resultado.innerHTML += `<h2>Números pares de 1 a 10</h2>`

     for (let i = 1; i <= 10; i++) {
      if (i % 2 === 0) {
        resultado.innerHTML += `${i}👉 `
      }
    }
    resultado.innerHTML += "🏁"
})
