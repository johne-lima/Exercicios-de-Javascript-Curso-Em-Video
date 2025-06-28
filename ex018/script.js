let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")
let numAleatorio = Math.trunc(Math.random() * 101)

botao.addEventListener("click", () => {
    let palpite = Number(prompt("Qual é o seu palpite?"))

   if (palpite < numAleatorio) {
    resultado.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MAIOR!</strong></p>`
   }
   else if (palpite > numAleatorio) {
    resultado.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MENOR!</strong></p>`
   } else {
    resultado.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o número ${numAleatorio}</p>`
   }
})