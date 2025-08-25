import {criarArrayAleatorio} from './CriaLista.js'
import {buscaMenor} from './BuscaMenor.js'

export function ordernarPorSelecao(arr) {
    let novoArr = [];
    const tamanhoOriginal = arr.length;

    for (let i = 0; i < tamanhoOriginal; i++) {
        let indiceDoMenor = buscaMenor(arr);
        novoArr.push(arr.splice(indiceDoMenor, 1)[0]);
    }
    return novoArr;
}

const MeuArr = criarArrayAleatorio(4);
const CriaOrdenacao = ordernarPorSelecao([...MeuArr]); //... pois cria uma cópia original da lista antes de ordenar

console.log("Array normal");
console.log(MeuArr);
console.log("Ordenado do menor para o maior");
console.log(CriaOrdenacao);