let dados = []
function Create(item) {
    dados.push(item);
}

function Read() {
    console.log(dados);
}

function Update(index, novo_item) {
    if (index > 0 && index <= dados.length) {
        dados[index] = novo_item;
    }
}

function Delete(index) {
    if (index > 0 && index <= dados.length) {
        dados.splice(index,1)
    }
}

Create("acerola");
Create("manga");
Create("maça");
Create("banana");
Create("uva");

Read();

Update(2,"maça verde");

Read()

Delete(2);

Read()
