let enviar = document.getElementById("enviar")
let numero = document.getElementById("numero")
let resultado = document.getElementById("resultado")

enviar.addEventListener("click", () => {
    resultado.innerHTML += `<h2>Contando de 0 até ${numero.value}</h2>`

    for (i = 0; i <= numero.value; i++) {
        resultado.innerHTML += `${i} 👉`
    }

    resultado.innerHTML += ` 🏁`
})