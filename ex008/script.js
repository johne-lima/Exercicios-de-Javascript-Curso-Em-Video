let botao = document.getElementById("botao")
let result = document.getElementById("resultado")

botao.addEventListener("click", () => {
    let numb = Number(prompt("Digite um número: "))
    result.innerHTML = `<p>O número a ser analisado aqui será o <strong>${numb}</strong></p>`
    result.innerHTML += `<hr>`
    result.innerHTML += `<p>O seu valor absoluto é ${Math.abs(numb)}</p>`
    result.innerHTML += `<p>A sua parte inteira é ${Math.trunc(numb)}</p>`
    result.innerHTML += `<p>O valor inteiro mais proxímo é ${Math.round(numb)}</p>`
    result.innerHTML += `<p>A sua raiz quadrada é ${Math.sqrt(numb)}</p>`
    result.innerHTML += `<p>A sua raiz cúbica é ${Math.cbrt(numb)}</p>`
    result.innerHTML += `<p>O valor de ${numb}² é ${Math.pow(numb, 2)}</p>`
    result.innerHTML += `<p>O valor de ${numb}³ é ${Math.pow(numb, 3)}</p>`
})