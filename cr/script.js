class Player{
    constructor(id,name,energy){
        this.id=id;
        this.name=name;
        this.energy=energy;
    }

    display=function(){
        console.log(this.name + " " + this.energy);
        //display the energy on the info division
        //enerngyAmount=function(){
        document.getElementById(this.id).innerHTML=`
        <p> ${this.energy} is the Total Energy Remaining!!!</p>
        `;
        //    }
    }
    attack=function(opponent){
        document.getElementById("console").innerHTML=`
            <p> ${this.name} is Attacking ${opponent.name}!!!</p>
        `;

        let newEnergy=opponent.energy-20;
        opponent.energy=newEnergy;
        opponent.display();

        if(opponent.energy==0){
            document.getElementById("console").innerHTML=`
            <p> G A M E   O V E R!!!</p>
        `;
        document.getElementById(opponent.id).style.display="none";
        }
    }
}

const Blazer = new Player("Blazer","Blazer", 100);
const char2 = new Player("Crom","Crom", 120);


//display();wrong

Blazer.display();
char2.display();

