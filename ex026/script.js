let n1 = document.getElementById("n1")
let n2 = document.getElementById("n2")
let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")

botao.addEventListener("click", () => {
    resultado.innerHTML = `<h2>Contando de ${n1.value} até ${n2.value}</h2>`
    if (n1.value < n2.value) {
        for (let i = n1.value; i <= n2.value; i++) {
            resultado.innerHTML += `${i} 👉 `
        }
    } else if (n1.value > n2.value) {
        for (let i = n1.value; i >= n2.value; i--) {
            resultado.innerHTML += `${i} 👉 `
        }
    } else {
        resultado.innerHTML += `Não é possível contar, pois os números são iguais`
    }

    resultado.innerHTML += `🏁`
})