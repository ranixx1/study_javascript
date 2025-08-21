# 📘 Guia Rápido e Documentação do Repositório JavaScript

Este repositório contém implementações de **algoritmos e estruturas de dados em JavaScript**, baseados no livro *"Entendendo Algoritmos" (Grokking Algorithms)*.  

O objetivo deste guia é servir como uma **documentação de referência rápida**, apresentando exemplos práticos de sintaxe, funções desenvolvidas e boas práticas utilizadas no projeto.

---

## 🚀 Como Executar o Código

Este repositório utiliza **módulos ES6 (`import`/`export`)**, portanto é necessário ter o **[Node.js](https://nodejs.org/)** instalado.  

1. Acesse a pasta do projeto no terminal:  

```bash
cd caminho/para/o/projeto
```

2. Execute o arquivo principal com o comando:  

```bash
node seu_arquivo_principal.js
```

> Substitua `seu_arquivo_principal.js` pelo nome do arquivo desejado (ex.: `OrdenarPorSelecao.js`).

---

## 📝 Estruturas Comuns de JavaScript

Resumo de sintaxe básica para consulta rápida:

### ✅ Estrutura `if / else`

```javascript
if (condicao) {
    // Executa se a condição for verdadeira
} else {
    // Executa se a condição for falsa
}
```

### 🔁 Laço `for`

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i); // 0, 1, 2, ..., 9
}
```

### ⚡ Declaração de Função (padrão)

```javascript
function nomeDaFuncao(param1, param2) {
    return param1 + param2;
}
```

### 🏗️ Classe (Class)

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}
```

---

## 🛠️ Funções do Projeto

### 🔹 `criarArrayAleatorio(quantidade)`
- **Descrição:** Cria e retorna um array com números aleatórios entre 1 e 100.  
- **Parâmetros:**  
  - `quantidade` *(Number)* → número de elementos do array.  
- **Retorno:** `Array<Number>`

---

### 🔹 `buscaMenor(arr)`
- **Descrição:** Retorna o índice do menor valor dentro de um array.  
- **Parâmetros:**  
  - `arr` *(Array)* → array analisado.  
- **Retorno:** `Number` (índice do menor elemento).  

---

### 🔹 `ordernarPorSelecao(arr)`
- **Descrição:** Implementa o algoritmo de **Ordenação por Seleção**.  
- **Importante:** É uma função **destrutiva**, pois altera o array original.  
  - Para evitar isso:  
    ```javascript
    ordernarPorSelecao([...meuArray]);
    ```
- **Parâmetros:**  
  - `arr` *(Array)* → array a ser ordenado.  
- **Retorno:** `Array<Number>` (novo array ordenado).  

---

## 📚 Métodos Nativos Utilizados

### ➕ `array.push(elemento)`
Adiciona elementos ao final de um array.  

### ✂️ `array.splice(indice, quantidade)`
Remove elementos a partir de um índice.  
- Retorna os elementos removidos.  
- Exemplo de uso no projeto:  
  ```javascript
  arr.splice(indiceDoMenor, 1)[0];
  ```

### 🔄 Spread Syntax (`[...array]`)
Cria uma cópia superficial de um array.  
- Uso:  
  ```javascript
  const copia = [...meuArray];
  ```

---

## 📦 Módulos ES6 (`import / export`)

Organizamos o código em múltiplos arquivos utilizando módulos ES6.

### Exportando
Arquivo: `funcoes.js`
```javascript
export function minhaFuncao() {
    // ...
}
```

### Importando
Arquivo: `principal.js`
```javascript
import { minhaFuncao } from './funcoes.js';

minhaFuncao();
```

---

## 📖 Referências
- 📗 *Entendendo Algoritmos (Grokking Algorithms)* — Aditya Bhargava  
- 📚 [Documentação oficial do JavaScript (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)  

---

✍️ **Autor:** [Ranixx1]  
🔗 **GitHub:** [Seu Perfil](https://github.com/ranixx1)