let tb_clientes = [
    { id: 1, nome: "Ana Souza", contato: "11987654321", idade: 15 },
    { id: 2, nome: "Bruno Almeida", contato: "21991234567", idade: 19 },
    { id: 3, nome: "Carla Mendes", contato: "31999887766", idade: 18 },
    { id: 4, nome: "Daniel Rocha", contato: "11993456789", idade: 30 },
    { id: 5, nome: "Elisa Fernandes", contato: "21999881234", idade: 40 },
    { id: 6, nome: "Felipe Costa", contato: "31997766554", idade: 15 },
    { id: 7, nome: "Gabriela Lima", contato: "11998877665", idade: 15 },
    { id: 8, nome: "Henrique Pires", contato: "21995544332", idade: 45 },
    { id: 9, nome: "Isabela Nogueira", contato: "31996655443", idade: 25 },
    { id: 10, nome: "João Batista", contato: "11992233445", idade: 15 },
    { id: 11, nome: "Karina Lopes", contato: "21993322110", idade: 15 },
    { id: 12, nome: "Lucas Ribeiro", contato: "31994455667", idade: 22 },
    { id: 13, nome: "Marina Teixeira", contato: "11995566778", idade: 22 },
    { id: 14, nome: "Nicolas Azevedo", contato: "21996677889", idade: 22 },
    { id: 15, nome: "Olivia Martins", contato: "31997788990", idade: 25 },
    { id: 16, nome: "Paulo Henrique", contato: "11998899001", idade: 28 },
    { id: 17, nome: "Renata Farias", contato: "21990011223", idade: 17 },
    { id: 18, nome: "Rafael Cunha", contato: "31991122334", idade: 29 },
    { id: 19, nome: "Sabrina Torres", contato: "11992233456", idade: 50 },
    { id: 20, nome: "Thiago Moreira", contato: "21993344567", idade: 67 },
    { id: 21, nome: "Vanessa Guedes", contato: "31994455678", idade: 42 },
    { id: 22, nome: "William Santos", contato: "11995566789", idade: 21 },
    { id: 23, nome: "Yasmin Oliveira", contato: "21996677890", idade: 20 },
    { id: 24, nome: "Alexandre Freitas", contato: "31997788901", idade: 26 },
    { id: 25, nome: "Beatriz Cunha", contato: "11998899012", idade: 18 },
    { id: 26, nome: "Caio Rangel", contato: "21990011234", idade: 19 },
    { id: 27, nome: "Daniela Paes", contato: "31991122345", idade: 29 },
    { id: 28, nome: "Eduardo Maciel", contato: "11992233467", idade: 34 },
    { id: 29, nome: "Fernanda Lopes", contato: "21993344578", idade: 36 },
    { id: 30, nome: "Gustavo Pacheco", contato: "31994455689", idade: 28 }
]

function return_by_client(nome) {
    for (let i = 0; i < tb_clientes.length; i++) {
        if (tb_clientes[i].nome === nome) {
            return tb_clientes[i];
        }
    };
    return null;
}

function return_by_contacto(contacto) {
    for (let i = 0; i < tb_clientes.length; i++) {
        if (tb_clientes[i].contato === contacto) {
            return tb_clientes[i];
        }
    }
    return "Erro : contato não está associado a um cliente";
}

function filter_by_idade(idade) {
    let maiores = [];
    for (let i = 0; i < tb_clientes.length; i++) {
        if (tb_clientes[i].idade <= idade) {
            maiores.push(tb_clientes[i]);
        }
    }
    return maiores;
}
function jsToCsv(data) {
    if (!data.length) return "";

    const headers = Object.keys(data[0]).join(",");
    const rows = data.map(obj =>
        Object.values(obj).join(",")
    );

    return [headers, ...rows].join("\n");
}
const csv = jsToCsv(tb_clientes);
console.log(csv);
