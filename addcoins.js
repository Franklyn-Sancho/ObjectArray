const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const coins = [
    {
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

var totalCoins = 0


rl.question('Insira uma moeda: ', (values) => {

    var valor = parseFloat(values)

    var index = coins.findIndex(val => val.valor == values)

    
        for (var i = 0; i < 10; i++) {
            if (index >= 0) {
                totalCoins += valor
                console.log(`Você inseriu ${valor} e seu saldo é: ${totalCoins}`)
                continue
            } else {
                console.log('Valor inválido')
            }
        }
    
})

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