class Aluno {
    constructor() {
        this.name = "Ranilton";
        this.age = 18;
        this.height = 1.78;
        this.weight = 68.7;
    }

}

function ShowID() {
    console.log("NAME: " + this.name);
    console.log("IDADE: " + this.age);
    console.log("ALTURA: " +this.height);
    console.log("PESO: " +this.weight);
}


console.log(ShowID())