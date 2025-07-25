// O objeto `document` é uma interface que representa o conteúdo de um documento HTML ou XML carregado no navegador.
// Ele é parte da API DOM (Document Object Model) e permite acessar e manipular elementos da página.

// Exemplo de código modelo utilizando o `document`:

// Seleciona um elemento pelo ID e altera seu conteúdo
const elemento = document.getElementById('meuElemento');
elemento.textContent = 'Novo conteúdo';

// Cria um novo elemento e o adiciona ao DOM
const novoElemento = document.createElement('div');
novoElemento.textContent = 'Eu sou um novo elemento!';
document.body.appendChild(novoElemento);

// Altera o título da página
document.title = 'Novo Título da Página';

// Obtém todos os elementos com uma determinada classe
const elementosComClasse = document.getElementsByClassName('minhaClasse');
console.log(elementosComClasse);

// Adiciona um evento de clique a um botão
const botao = document.getElementById('meuBotao');
botao.addEventListener('click', () => {
    alert('Botão clicado!');
});

// O objeto `document` é essencial para interagir com o conteúdo da página,
// permitindo manipular elementos, criar novos, alterar estilos, e muito mais.