const menorValor = 1
const maiorValor = 10
const numeroSecreto = gerarNumeroAletatorio()



function gerarNumeroAletatorio(){
   return parseInt(Math.random()* maiorValor)
}

console.log(`o NUMERO SECRETO É ${numeroSecreto}`)


const elemntoMenorValor = document.getElementById('menor-valor')
elemntoMenorValor.innerHTML = menorValor


const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor

