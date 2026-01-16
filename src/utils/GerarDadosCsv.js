let tb_clientes = [
    (1, "Ana Souza", "11987654321"),
    (2, "Bruno Almeida", "21991234567"),
    (3, "Carla Mendes", "31999887766"),
    (4, "Daniel Rocha", "11993456789"),
    (5, "Elisa Fernandes", "21999881234"),
    (6, "Felipe Costa", "31997766554"),
    (7, "Gabriela Lima", "11998877665"),
    (8, "Henrique Pires", "21995544332"),
    (9, "Isabela Nogueira", "31996655443"),
    (10, "João Batista", "11992233445"),
    (11, "Karina Lopes", "21993322110"),
    (12, "Lucas Ribeiro", "31994455667"),
    (13, "Marina Teixeira", "11995566778"),
    (14, "Nicolas Azevedo", "21996677889"),
    (15, "Olivia Martins", "31997788990"),
    (16, "Paulo Henrique", "11998899001"),
    (17, "Renata Farias", "21990011223"),
    (18, "Rafael Cunha", "31991122334"),
    (19, "Sabrina Torres", "11992233456"),
    (20, "Thiago Moreira", "21993344567"),
    (21, "Vanessa Guedes", "31994455678"),
    (22, "William Santos", "11995566789"),
    (23, "Yasmin Oliveira", "21996677890"),
    (24, "Alexandre Freitas", "31997788901"),
    (25, "Beatriz Cunha", "11998899012"),
    (26, "Caio Rangel", "21990011234"),
    (27, "Daniela Paes", "31991122345"),
    (28, "Eduardo Maciel", "11992233467"),
    (29, "Fernanda Lopes", "21993344578"),
    (30, "Gustavo Pacheco", "31994455689")
]

function return_by_client(nome){
    for(let i = 0; i<tb_clientes.length();i++){
        if (nome == tb_clientes[2]){
            console.log("id: "+ tb_clientes[0]+ "____ nome: "+ tb_clientes[1]);
        }
    } return 0;

}

console.log(return_by_client("Caio Rangel"))