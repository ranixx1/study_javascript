import { geraNotasTest } from "./CriaListaNotas.js";
function CalculaMedia(Arr) {
    let valor_final = 0;
    for (let i = 0; i < Arr.length; i++) {
        valor_final += Arr[i]
    }
    let media = valor_final / Arr.length;
    return media;
}
let gerar_lista = geraNotasTest(20);
console.log("Notas:" + gerar_lista)
let mediaNotas = CalculaMedia(gerar_lista);
console.log("Média das notas:", mediaNotas);