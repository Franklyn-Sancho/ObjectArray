const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var products = [
    {
        name: 'coke',
        price: 2.00
    },
    {
        name: 'chocolate',
        price: 1.50
    },
    {
        name: 'popcorn',
        price: 5.00
    },
]

var totalCoins = 5.00




function buyProduct() {
    rl.question('Escolha um produto: ', (produto) => {

        var index = products.findIndex(val => val.name == produto && val.price <= totalCoins)
        var change = products.map((produto) => totalCoins - produto.price)



        if (index >= 0) {
            console.log(`Obrigado pela preferência ${change}`)
        } else {
            console.log('Ainda não temos esse produto/saldo insuficiente')
        }
    })
}

buyProduct()


module.exports = buyProduct()

/*
 * function buyProduct(produto) {
    let index = products.findIndex(val => val.name == produto)
    
    if(index >= 0) {
     console.log('obrigado pela preferencia')
    } else {
     console.log('Ainda não temos esse produto')
    }
 } 
 */

/* buyProduct('chocolate')
console.log(buyProduct) */
