const readline = require('readline');
const coins = require('./addCoins')
const product = require('./buyProduct')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(theQuestion) {
    return new Promise(resolve => rl.question(theQuestion, answ => resolve(answ)))
} //função assincrona

var totalCoins = 0;



async function vendingMachine() {

    console.log('==========================')
    console.log('Welcome to vending machine')
    console.log('==========================')
    console.log('Insira um valor de moeda para inserir moeda ou insira o nome do produto: ')

    while (true) { //enquanto for verdade, o loop continuará funcionando


        let option = await question('Escolha a sua opção aqui: ')
        if (coins.isCoin(option)) { //chama a função que verifica se é uma moeda
            totalCoins = coins.addCoins(option, totalCoins) //Se for uma moeda, vai adicional na variável totalCoins
        }
        if (product.isProduct(option)) {
            product.buyProduct(option, totalCoins) //chama a função que verifica se é um produto.
             console.log(totalCoins) //se for um produto retorna o totalCoins
             
        }

    }


}



vendingMachine()
