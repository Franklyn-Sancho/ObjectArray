const readline = require('readline');
const addCoins = require('./addCoins');
const buyProduct = require('./buyProduct');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function vendingMachine() {

    console.log('==========================')
    console.log('Welcome to vending machine')
    console.log('==========================')
    console.log('Choice a option below:')
    console.log('1 - Insert a coin')
    console.log('2 - Buy a product')
    rl.question('Escolha a sua opção aqui: ', (option) => {
        if (option == 1) {
            addCoins()
            return
        }
        if (option == 2) {
            buyProduct()
            return
        } else {
            console.log('valor inválido')
        }
    })
}

vendingMachine()