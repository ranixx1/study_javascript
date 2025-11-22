//Crie uma arrow function chamada getEvens que recebe um array de números e retorna um novo array contendo apenas os números pares, usando o método filter() (que precisa de uma arrow function de callback).
import { criarArrayAleatorio } from "../../lista/lista_2/CriaLista.js";

const getEvens = array => array.filter(num => num%2==0); //forma simplificada

console.log(getEvens(criarArrayAleatorio()))
    