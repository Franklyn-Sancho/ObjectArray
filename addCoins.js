//moedas aceitas na máquina
const coins = [{
        nome: "1¢",
        valor: 0.01
    },
    {
        nome: "5¢",
        valor: 0.05
    },
    {
        nome: "10¢",
        valor: 0.10
    },
    {
        nome: "25¢",
        valor: 0.25
    },
    {
        nome: "50¢",
        valor: 0.50
    },
    {
        nome: "$1",
        valor: 1.00
    },
]

//verifica se foi digitado o valor de uma moeda válida no array
function isCoin(valor) {

    var index = coins.findIndex(val => val.valor == valor)


    if (index >= 0) {
        return true
    } 

    return false


}

//função que adiciona as moedas
function addCoins(value, totalCoins) {
    console.log('Aceitamos moedas de: 0.01, 0.05, 0.10, 0.50 and 1.00')
    /* rl.question('Insira uma moeda: ', (values) => { */

    var valor = parseFloat(value)

    var index = coins.findIndex(val => val.valor == value)


    
        if (index >= 0) {
            totalCoins += valor
            console.log(`Você inseriu ${valor} e seu saldo é: ${totalCoins}`)
            return totalCoins
        } else {
            console.log('erro')
            return
        }

    /* }) */
}

module.exports = {isCoin, addCoins}


/**
 * function addCoins(valor) {

    var index = coins.findIndex(val => val.valor == valor )

   for(var i = 0; i < 3; i++) {
    if (index >= 0) {
        totalCoins += valor
        console.log(`Você inseriu ${valor} e seu saldo é: ${totalCoins}`)
    }
   }
}

addCoins(0.01)
 */