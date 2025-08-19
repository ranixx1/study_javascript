class Aluno {
    constructor(name,age,height,weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    ShowID() {
        console.log("NAME: " + this.name);
        console.log("IDADE: " + this.age);
        console.log("ALTURA: " + this.height);
        console.log("PESO: " + this.weight);
    }
}

const Ranilton = new Aluno("Ranilton",18,1.70,68.5);

const Ramon = new Aluno("Ramon",18,1.70,75.7);

Ranilton.ShowID();
console.log("");
Ramon.ShowID();