class Player{
    constructor(id,name,energy){
        this.id=id;
        this.name=name;
        this.energy=energy;
    }

    display=function(){
        console.log(this.name + " " + this.energy);
        document.getElementById(this.id).innerHTML=`
        <p>Energy:  ${this.energy} is the Total Energy Remaining!!!</p>
        `;
    }
    attack=function(opponent){
        document.getElementById("console").innerHTML=`
        <p> ${this.name} is Attacking ${opponent.name}!!!</p>
        `;

        let newEnergy=opponent.energy-20;
        opponent.energy=newEnergy;
        opponent.display();

        if(opponent.energy<=0){
            document.getElementById("console").innerHTML=`
            <p> G A M E   O V E R!!!</p>
        `;
        document.getElementById(opponent.id).style.display="none";
        }
    }
}

const Blazer = new Player("player1","Blazer", 100);
const Crom = new Player("player2","Crom", 120);


//display();wrong

Blazer.display();
Crom.display();

