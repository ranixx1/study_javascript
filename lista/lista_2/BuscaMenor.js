import { criarArrayAleatorio } from "./CriaLista.js";
export function buscaMenor(arr){
    let menor = arr[0];
    let menor_indice = 0;
    for(let i =0;i<arr.length;i++){
        if (arr[i] < menor){
            menor = arr[i];
            menor_indice = i;

        }
    }
    return menor_indice;

}
const MeuArr = criarArrayAleatorio(4);
const Imenor = buscaMenor(MeuArr)
const Vmenor = MeuArr[Imenor]
console.log(MeuArr);
console.log("Menor indice: " + Imenor);
console.log("Valor do menor: " + Vmenor);
