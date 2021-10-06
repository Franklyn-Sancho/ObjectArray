const readline = require('readline');
const coins = require('./addCoins')
const product = require('./buyProduct')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(theQuestion) {
    return new Promise(resolve => rl.question(theQuestion, answ => resolve(answ)))
}

var totalCoins = 0;



async function vendingMachine() {

    console.log('==========================')
    console.log('Welcome to vending machine')
    console.log('==========================')
    console.log('Insira um valor de moeda para inserir moeda ou insira o nome do produto: ')

    while (true) {


        let option = await question('Escolha a sua opção aqui: ')
        if (coins.isCoin(option)) {
            totalCoins = coins.addCoins(option, totalCoins)
        }
        if (product.isProduct(option)) {
            product.buyProduct(option, totalCoins)
             console.log(totalCoins)
             
        }

    }


}



vendingMachine()