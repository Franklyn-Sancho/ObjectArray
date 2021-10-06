//produtos disponíveis para compra
const products = [
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
    }
]

//função que verifica se é moeda ou um produto
function isProduct(product) {
    var index = products.findIndex((val) => val.name == product)

    if(index >= 0) {
        return true
    }

    return false
}



//função que faz a compra do produto
function buyProduct(produto, totalCoins) {
    console.log('[chocolate: 2.00; coke: 1.50; popcorn: 5.00 ]')

   /*  rl.question('Escolha um produto: ',  (produto) => { */

        var index = products.findIndex((val) => val.name == produto && val.price <= totalCoins) //verifica se existe o produto no array
        var change = products.map((produto) => totalCoins - produto.price)
        
            

        if (index >= 0) {
            console.log(`Obrigado pela preferência, seu troco é: ${change}`)
        } else {
            console.log('Ainda não temos esse produto/saldo insuficiente')
        }
    /* }) */
}


module.exports = {isProduct, buyProduct}


