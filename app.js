



var dexMod = document.getElementById('dex-mod');
var conMod = document.getElementById('const-mod');

/////////////Strength Row Elements////////

//Input
var strInput = document.getElementById('spinnerSTR');
//Mod
var strMod = document.getElementById('str-mod');

//Cost
var strCost = document.getElementById('str-cost');
var strRace = document.getElementById('str-rt');

//Actual Points
var strAp = document.getElementById('str-ap');
strAp.textContent = strInput.value;

//Actual Mod
var strAm = document.getElementById('str-am');
var strAm = strMod.textContent;


var RaceMod;
var abilityMod;
if (2 < 5){
console.log("hello");
}
function handleAbilityInput(event){

    //updateRow(strAp,)
    var val = this.value;
    console.log(this);
    event.preventDefault();
    updateRow(val,strMod,strAp,strCost)
    
}

function updateRow(v, mod,ap,cost){
    ap.textContent = this.value; // this.value + Racial Bonus
     console.log(v);
    // console.log(strCost.textContent);
     //console.log(this.value == 12);

    if(v == 8 || v == 9){
        mod.textContent = -1;
        if(v == 8){
            cost.textContent = -2;
        }
        if(v == 9){
            cost.textContent = -1;
        }
       // pointsSpent -= 1;
    }

    else if(v== 10 || v== 11){
    
         mod.textContent = 0;
         if(v == 10){
             cost.textContent = 0;
         }
         if(v == 11){
             cost.textContent = 1;
             console.log(cost.textContent);
         }
         //pointsSpent += 0;
         //update character class with updatedMod
     }
     else if(v == 12 || v == 13){
        mod.textContent = 1;
         if(v == 12){
            cost.textContent = 2;
        }
        if(v == 13){
            cost.textContent = 3;
        }

         //update character class with updated Mod
     }
     else if(this.value == 14 || this.value == 15){
        mod.textContent = 2;
        if(this.value == 14){
            cost.textContent = 5;
        }
        if(this.value == 15){
            cost.textContent = 7;
        }
        //update character class with updated Mod
     }
     else if(this.value == 16 || this.value == 17){
         mod.textContent = 3;
         if(this.value == 16){
            cost.textContent = 10;
        }
        if(this.value == 17){
            cost.textContent = 13;
        }
         //update character class with updated Mod 
     }

     else if(this.value == 18 || this.value == 19){
       // strMod.textContent = 4;
        //update character class with updated Mod
     }
    // strMod.textContent = this.value;
     console.log(cost);
    // strMod.value = this.value;
}

strInput.addEventListener('input',handleAbilityInput);

