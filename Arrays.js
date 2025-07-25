
// Arrays

var arrJogadores = ['Ricardo', 'Monica', 'Leonardo'];
var arrAnoNascimento = new Array(1998, 1987, 1991);
var arrPontos = [45, 117, 78];
arrPontos[1]= 71;
console.log(arrJogadores);
console.log(arrJogadores[1]+ 'tem' +arrPontos[1]+' pontos.');

    // Metodos

        // PUSH ---> ADD VALUE
        var arrPrato = ['arroz','carne','salada'];
        console.log(arrPrato);
        arrPrato.push('feijão');
        console.log(arrPrato);

        // UNSHIFTH ---> ADD A FIRST POSITION
        var arrEmenta = new Array('Matemática', 'Biologia', 'Português');
        arrEmenta.unshift('Fisica');
        console.log(arrEmenta);

        // POP ---> REMOVE THE LAST POSITION
        arrEmenta.pop();
        console.log(arrEmenta)

        // SHIFTH ---> REMOVE FIRST POSITION
        var arrMedicos = new Array('Dr. Barcelos', 'Dra. Fernanda');
        arrMedicos.shift();
        console.log(arrMedicos);

        // INDEXOF ---> RETURN POSITION TO VALUE
        var arrPrato = new Array('Arroz','Feijao', 'Tomate', 'Carne');
        arrPrato.push('Ovo');
        if(arrPrato.indexOf('Arroz')!==-1){
            arrPrato.shift();
        }
        console.log(arrPrato);