let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")

botao.addEventListener("click", () => { 
    resultado.innerHTML += `<h2>Contando de 1 a 10, marcando os pares</h2>`

     for (let i = 1; i <= 10; i++) {
      if (i % 2 === 0) {
        resultado.innerHTML += `<mark>${i} </mark> 👉 `
      } else {
        resultado.innerHTML += `${i} 👉 `
      }
    }
    resultado.innerHTML += "🏁"
})
