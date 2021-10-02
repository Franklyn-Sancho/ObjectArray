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
    }
]

var totalCoins = 1.60


/* function buyProduct(produto) {

   let index = products.findIndex(val => val.name == produto)
   
   if(index >= 0) {
    console.log('obrigado pela preferencia')
   } else {
    console.log('Ainda não temos esse produto')
   }
} */

/* buyProduct('chocolate')
console.log(buyProduct) */

rl.question ('Escolha um produto: ', (produto) => {

    var index = products.findIndex(val => val.name == produto)
   
   if(index >= 0) {
    console.log('Obrigado pela preferencia')
   } else {
    console.log('Ainda não temos esse produto')
   }
})




/*  function buyProduct() { 

    var change;

    //mini menu com as opções e o saldo do usuário
    console.log('what is your order? ')
    console.log('coke - Price: 2.00')
    console.log('chocolate - price: 1.50')
    console.log('popcorn - 5.00')
    console.log(`your credit is: ${totalCoins.toFixed(2)}`)
    var question = prompt('Enter the product name: ')

    //switch case para que o usuário possa escolher o produto
    switch (question) {
        case "coke":
            if (totalCoins >= 2.00) {
                var change = totalCoins - 2.00
                console.log(`Thank you for your preference, your change is: ${change.toFixed(2)}`)
                return
            } else { //dinheiro insuficiente e retorno para que o usuário insira mais moedas
                console.log('insufficient funds')
                return addCoins()
            }
            case "chocolate":
                if (totalCoins >= 1.50) {
                    var change = totalCoins - 1.50
                    console.log(`Thank you for your preference, your change is: ${change.toFixed(2)}`)
                    return
                } else {
                    console.log('insufficient funds')
                    return addCoins()
                }
            case "popcorn":
                if (totalCoins >= 5.00) {
                    var change = totalCoins - 5.00
                    console.log(`Thank you for your preference, your change is: ${change.toFixed(2)}`)
                    return
                } else {
                    console.log('insufficient funds')
                    return addCoins()
                }
    }
}  */