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
}
    document.getElementById("sorteados").innerHTML= numSorteados;
    contarAcertos()
}

function lerNumero(value, pos){
    let num = Number(value)

    if (num < 1){
        alert("Número não poder zero ou negativo! Digite novamente:")
    } else if(num > 60){
        alert("Número não pode ser maior que 60! Digite Novamente:")
    } else if(numEscolhidos.includes(num)){
        alert("Número repetido! Digite novamente:")
    } else{
    numEscolhidos[pos] = num
    console.log(numEscolhidos)
    
    }
}
function contarAcertos(){
    let cont = 0
    numEscolhidos.forEach(function(value, index){
        if(numSorteados.includes(value)){
            cont++;
        }
    })
document.getElementById("acertos").innerHTML = cont;
}
//function verAcertos(){
    //numEscolhidos.forEach(function(valor))
//}