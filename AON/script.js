let aleatorio 

function iniciarJogo(){

    aleatorio = Math.floor(Math.random() * 100) + 1;
    document.getElementById('numero').disabled = false

}

function Verificar() {

    const palpite = parseInt(document.getElementById('numero').value);

    if (palpite === aleatorio) {

        document.getElementById('Resultado').innerHTML = `Parabens voce acertou`;
        document.getElementById('Resultado').style.color = 'green';
        document.getElementById('numero').disabled = true;

    }

    else if (palpite < aleatorio) {

        document.getElementById('Resultado').innerHTML = `O numero é maior`;
        document.getElementById('Resultado').style.color = 'red';

    }

    else {

        document.getElementById('Resultado').innerHTML = `O numero é menor`;
        document.getElementById('Resultado').style.color = 'red'

    }

}

function reiniciar(){

    iniciarJogo()

}