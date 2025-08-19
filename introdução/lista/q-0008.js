//onta quantos números do intervalo entre 2 e 150 são divisíveis por 3. E que caso a quantidade de números seja igual a 50, exibe uma mensagem "Mensagem secreta!"
let count = 0;
for (let index = 2; index <= 150; index++) {
    if (index % 3 === 0) {
        count++;
    }
}
if (count === 50) {
    console.log("Mensagem secreta!");
}    