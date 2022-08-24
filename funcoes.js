var numEscolhidos = []
var numSorteados = []

function sortearNumeros(){

    for(let i = 0; i<6; i++){
    let num = Math.ceil (Math.random() * 60)
    console.log(num)
    if (!numSorteados.includes(num)) {
        numSorteados[i] = num
    } else {
        i = i - 1;
    }
        numSorteados[i] = num
}
    console.log(numSorteados)
}

function lerNumero(){
    if (value < 1){
        alert("Número não poder zero ou negativo! Digite novamente:")
    } else if(value > 60){
        alert("Número não pode ser maior que 60! Digite Novamente:")
    } else if(numEscolhidos.includes(value)){
        alert("Número repetido! Digite novamente:")
    } else{
    numEscolhidos[pos] = value
    console.log(numEscolhidos)
    
    }
}

//function verAcertos(){
    //numEscolhidos.forEach(function(valor))
//}