function buscaMenor(arr){
    let menor = arr[0];
    let menor_indice = 0;
    for(let i =0;i<arr.length;i++){
        if (arr[i] < menor){
            menor = arr[i]
            menor_indice = i

        }
    }
    return menor_indice

}

const lista = [98,2,3,4,5,6,9,87,3,48]

console.log(buscaMenor(lista))