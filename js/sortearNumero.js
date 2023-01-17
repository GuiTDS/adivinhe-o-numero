function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

const menorValor = 1
const maiorValor = 1000
const numeroAleatorio = gerarNumeroAleatorio()

console.log('Numero secreto: ', numeroAleatorio)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaior = document.getElementById('maior-valor')
elementoMaior.innerHTML = maiorValor