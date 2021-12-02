// class --> constructor --> object instantation
// votmesona this, viitamine
class Person{

    // constructor
    // f-on for creating objects
    // andmed / property

    constructor(name) {
        this.name = name;
        this.age;
    }

    // class functions
    // classi sees f-on ei kirjutada, ainult func nimi

    greeting(){
        console.log("Hi, I am " + this.name);
    }

    // setter and getter

    setAge(age){

        this.age = age;

    }

    // vanuse tagasiside , mis  salvestatud klassis

    getAge(){

        return this.age;

    }

}
