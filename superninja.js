const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();


class ninja {
    constructor (name, health, speed, strength){
        this.name = ninja;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
}
    sayname(){
        console.log(this.name);
    }
    showstats (){
        console.log(this.name, this.strength, this.speed, this.health);
    }
    drinksake (){
        this.health += 10;
    }
}

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"

class Sensei extends ninja {
    constructor(){
        super ("Master Splinter", "210", "10", "10");
        this.wisdom = "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.";
    }
    speakwisdom (){
        console.log(wisdom);
    }
    drinksake (){
        this.health += 10;
    }
}