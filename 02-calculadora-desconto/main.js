'use strict'

function receberDados(){

    const precoOriginal = document.getElementById("precoOriginal")
    const desconto = document.getElementById("desconto")

    calcularprecoFinal(precoOriginal,desconto)

    return precoOriginal, desconto
}

function calcularprecoFinal(precoOriginal,desconto){

    const precoFinal = ((100-desconto.value)/100)*precoOriginal.value

    calcularValorEconomizado(precoOriginal,desconto)

    return precoFinal
}

function calcularValorEconomizado(precoOriginal,desconto){

    const valorEconomizado = (desconto.value/100)*precoOriginal.value

    exibirResultado(precoFinal,valorEconomizado)
    
    return valorEconomizado
}

function exibirResultado(precoFinal,valorEconomizado){

    const resultado = document.getElementById("resultado")

    resultado.textContent = `valor economizado: ${valorEconomizado}\npreço final: ${precoFinal}`

    condicionarDesconto(desconto,resultado)

    return resultado
}

function condicionarDesconto(desconto,resultado){

    let condicionalDesconto = true

    switch (condicionalDesconto) {
        case desconto.value<5:
            resultado.classList.add("ate5")
            break;
        case desconto.value>=5 && desconto<=10:
            resultado.classList.add("entre5e10")
            break;
        case desconto.value>10:
            resultado.classList.add("maisde10")
        default: false
            break;
    }

    return condicionalDesconto
} 

