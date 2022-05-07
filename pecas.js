// Váriaveis, são um espaço na me,oria para guardae algum valor
let pesoPeca = 150

//pesoPeca - Camel Case
//peso_peca - Snake Case
// PesoPeca - pascal Case


// codição para o peso da peça
if(pesoPeca > 100){
    console.log("Peso maior que 100g, logo, podemos cadastrar a peça!!!")
} else {
    console.log("Peso insuficiente, não é possivel cadastrar.")
}

let numeroPesas = 10



// cindição para o numero de peça
if (numeroPesas <= 10){
    console.log("Ainda há epaço na caixa, podemos cadastrar a peça")
} else {
    console.log ("Não há espaço disponivel na caixa ")
}

let nomePeca = 'Radiador'

//ASCII Table

console.log("O comprimento do nome da peça é: ",nomePeca.length)

if (nomePeca.length < 3){
    console.log("NOme de peça muito curto")
}else {
    console.log("Nome de peça válida")
}