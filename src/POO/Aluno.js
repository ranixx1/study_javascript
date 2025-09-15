class Aluno {
    constructor(name,age,matricula){
        this.name = name;
        this.age = age;
        this.matricula = matricula;
    }
    imprimirVariavel(){
        console.log("Nome: " + this.name)
        console.log("Idade: " + this.age)
        console.log("Matricula: "+ this.matricula)
    }
}


const Ranilton = new Aluno("Ranilton",20,20251014040028)
Ranilton.imprimirVariavel()