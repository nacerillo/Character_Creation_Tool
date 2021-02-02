



var dexMod = document.getElementById('dex-mod');
var conMod = document.getElementById('const-mod');

//Strength Row Elements
var strInput = document.getElementById('spinnerSTR');
var strMod = document.getElementById('str-mod');
var strCost = document.getElementsByClassName('str-cost');
var strRace = document.getElementById('str-rt');
var strAp = document.getElementById('str-ap');
var pointsSpent = 0;

var RaceMod;
var abilityMod;
function handleAbilityInput(event){
    event.preventDefault();
     console.log(this.value);
    // console.log(strCost.textContent);
     //console.log(this.value == 12);

    if(this.value == 8 || this.value == 9){
        strMod.textContent = -1;
        if(this.value == 8){
            strCost.textContent = -2;
        }
        if(this.value == 9){
            strCost.textContent = -1;
        }
       // pointsSpent -= 1;
    }

    else if(this.value == 10 || this.value == 11){
    
         strMod.textContent = 0;
         if(this.value == 10){
             strCost.textContent = 0;
         }
         if(this.value == 11){
             strCost.textContent = 1;
             console.log(strCost.textContent);
         }
         //pointsSpent += 0;
         //update character class with updatedMod
     }
     else if(this.value == 12 || this.value == 13){
        strMod.textContent = 1;
         if(this.value == 12){
            strCost.textContent = 2;
        }
        if(this.value == 13){
            strCost.textContent = 3;
        }

         //update character class with updated Mod
     }
     else if(this.value == 14 || this.value == 15){
        strMod.textContent = 2;
        if(this.value == 14){
            strCost.textContent = 5;
        }
        if(this.value == 15){
            strCost.textContent = 7;
        }
        //update character class with updated Mod
     }
     else if(this.value == 16 || this.value == 17){
         strMod.textContent = 3;
         if(this.value == 16){
            strCost.textContent = 10;
        }
        if(this.value == 17){
            strCost.textContent = 13;
        }
         //update character class with updated Mod 
     }

     else if(this.value == 18 || this.value == 19){
       // strMod.textContent = 4;
        //update character class with updated Mod
     }
    // strMod.textContent = this.value;
     console.log(strCost);
    // strMod.value = this.value;
}

strInput.addEventListener('input',handleAbilityInput);

