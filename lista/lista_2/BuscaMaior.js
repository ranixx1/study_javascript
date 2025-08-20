function buscaMaior(arr){
    let maior = 0;
    let maior_indice =0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>maior){
            maior = arr[i];
            maior_indice = i;
        }
    }
    return maior_indice;
}

const lista = [3,4,3,4,3,43,4,3,4,3,432,43734,343,24,24,242424,2245];


console.log(buscaMaior(lista));
console.log(lista[buscaMaior(lista)])