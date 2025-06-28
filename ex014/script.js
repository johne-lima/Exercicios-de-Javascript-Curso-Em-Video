let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")
const date = new Date()

botao.addEventListener("click", () => {
    resultado.innerHTML = `<p>O resultado que eu recebi do sistema foi <mark>${date}</mark></p> `
})