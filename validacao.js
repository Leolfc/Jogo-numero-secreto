function verificaSeOChutePossuiUmValorValido(){
    const numero = +chute

    if(chuteForInvalido(numero)){
    elementoChute.innerHTML='<div>Valor inválido</div>'
    return
    }

}

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)){
           elementoChute.innerHTML=`<div>Valor inválido, o numero secreto deve estar entre ${menorValor} e ${maiorValor}</div>`
           return
        
    }
    if(numero === numeroSecreto){
        document.body.innerHTML = `<h2>Você acertou!</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>
        <button id="jogar-novemente" class="btn-jogar" >Jogar</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML = `<div>O numero secreto é menor <i class="fa-solid fa-down-long"></i></div>`
}else{
    elementoChute.innerHTML = `<div>O numero secreto é menor <i class="fa-solid fa-up-long"></i></div>`
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

document.body.addEventListener('click', e=>{
    if(e.target.id =='jogar novamente'){
        window.location.reload()
    }
})
