import { criarArrayAleatorio } from "./CriaLista.js";
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

const MeuArr = criarArrayAleatorio(4);

const Imaior = buscaMaior(MeuArr);
const Vmaior = MeuArr[buscaMaior(MeuArr)];

console.log(MeuArr)
console.log("Maior indice: " + Imaior);
console.log("Valor no indice " + Vmaior);