function validaChute(chute) {
    const numero = +chute
    
    if( chuteInvalido(numero)) {
        if(chute === 'game over'){
            document.body.innerHTML = `
            <h1>GAME OVER</h1>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `
            document.body.style.backgroundColor = "red";
            return
        }else{
            elementoChute.innerHTML += `<div>Valor invalido</div>`
            return
        }
        
    }

    if( valorForaDoLimite(numero)) {
        elementoChute.innerHTML += `<div>Fale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if( numero === numeroAleatorio) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroAleatorio}</h3>

        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if(numero > numeroAleatorio) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    }else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }
}

function chuteInvalido(chute) {
    return Number.isNaN(chute)
}

function valorForaDoLimite(chute) {
    return chute > maiorValor || chute < menorValor 
}

document.body.addEventListener('click', (e) => {
    if( e.target.id === 'jogar-novamente') {
        window.location.reload()
    }
})