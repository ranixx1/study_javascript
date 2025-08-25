// Importações no topo do arquivo
import { CalculaMedia } from '../lista_2/CalculaMedia.js';
import { criarArrayAleatorio } from '../lista_2/CriaLista.js';

// Sua função, que está com a lógica 100% correta
export function DesvioPadrao(Arr) {
    const media = CalculaMedia(Arr);
    let soma = 0;

    for (let i = 0; i < Arr.length; i++) {
        soma += (Arr[i] - media) ** 2;
    }

    const variancia = soma / Arr.length;

    return variancia ** 0.5;
}



const listaDeNotas = criarArrayAleatorio(10)
const mediaCalculada = CalculaMedia(listaDeNotas);
const desvioPadraoCalculado = DesvioPadrao(listaDeNotas);

console.log("Notas:", listaDeNotas.join(','));
console.log("Média das notas:", mediaCalculada);
console.log("Desvio Padrão calculado:", desvioPadraoCalculado);