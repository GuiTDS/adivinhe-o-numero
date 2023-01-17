const elementoChute = document.getElementById('chute')


const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(evento) {
    chute = evento.results[0][0].transcript
    exibeChuteNaTela(chute)
}

function exibeChuteNaTela(chute) {
    const frase = parseInt(chute) === numeroAleatorio ? 'voce acertou' : 'voce errou '
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    <div>${frase}</div>
    `
}