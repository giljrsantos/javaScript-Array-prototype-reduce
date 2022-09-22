/*
ESCREVER CÓDIGOS IMUTAVEL
Quando você deve usar o Reduce:

    Quando baseado no array Original, você precisa "reduzir" o array à um valor.
    E esse valor, pode ser qualquer valor, pode ser objeto, string, numero ou até mesmo novo array
    

    [ 1, 2, 3 ], 6
*/

const numbers = [1, 2, 3 ];
// o segundo parametro que no exemplo é [0] é opicional
const sumResult = numbers.reduce((accumalator, item) => accumalator + item, 0)

console.log(sumResult);// expected output: 6

