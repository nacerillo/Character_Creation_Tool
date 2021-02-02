



//var dexMod = document.getElementById('dex-mod');
//var conMod = document.getElementById('const-mod');

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

/////////////Dexterity Row Elements////////
//Input
var dexInput = document.getElementById('spinnerDEX');
//Mod
var dexMod = document.getElementById('dex-mod');
//Cost
var dexCost = document.getElementById('dex-cost');
var dexRace = document.getElementById('dex-rt');
//Actual Points
var dexAp = document.getElementById('dex-ap');
dexAp.textContent = dexInput.value;
//Actual Mod
var dexAm = document.getElementById('dex-am');
var dexAm = dexMod.textContent;


/////////////Constitution Row Elements////////
//Input
var conInput = document.getElementById('spinnerCONST');
//Mod
var conMod = document.getElementById('const-mod');
//Cost
var conCost = document.getElementById('const-cost');
var conRace = document.getElementById('const-rt');
//Actual Points
var conAp = document.getElementById('const-ap');
conAp.textContent = conInput.value;
//Actual Mod
var conAm = document.getElementById('const-am');
var conAm = conMod.textContent;

/*
/////////////Intelligence Row Elements////////
//Input
var intInput = document.getElementById('spinnerINT');
//Mod
var  intMod = document.getElementById('int-mod');
//Cost
var intCost = document.getElementById('int-cost');
var intRace = document.getElementById('int-rt');
//Actual Points
var intAp = document.getElementById('int-ap');
intAp.textContent = intInput.value;

//Actual Mod
var intAm = document.getElementById('int-am');
var intAm = intMod.textContent;


/////////////Wisdom Row Elements////////
//Input
var wisInput = document.getElementById('spinnerWIS');
//Mod
var  wisMod = document.getElementById('wis-mod');
//Cost
var wisCost = document.getElementById('wis-cost');
var wisRace = document.getElementById('wis-rt');
//Actual Points
var wisAp = document.getElementById('wis-ap');
wisAp.textContent = wisInput.value;
//Actual Mod
var wisAm = document.getElementById('wis-am');
var wisAm = wisMod.textContent;


/////////////Charisma Row Elements////////
//Input
var chaInput = document.getElementById('spinnerCHA');
//Mod
var  chaMod = document.getElementById('cha-mod');
//Cost
var chaCost = document.getElementById('cha-cost');
var chaRace = document.getElementById('cha-rt');
//Actual Points
var wisAp = document.getElementById('cha-ap');
wisAp.textContent = wisInput.value;
//Actual Mod
var chaAm = document.getElementById('cha-am');
var chaAm = chaMod.textContent;
*/
var RaceMod;
var abilityMod;

function handleAbilityInput(event){

    //updateRow(strAp,)
    var val = this.value;
    console.log(this);
    event.preventDefault();
    if(this.id = "spinnerSTR"){
    updateRow(val,strMod,strAp,strCost)
    }

   else if(this.id = "spinnerDEX"){
        updateRow(val,dexMod,dexAp,dexCost)
        }
    else if(this.id = "spinnerCONST"){
            updateRow(val,constMod,constAp,constCost)
            }
    
}

function updateRow(v, mod,ap,cost){


    ap.textContent = v; // this.value + Racial Bonus
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
        mod.textContent = 4;
        //update character class with updated Mod
     }
    // strMod.textContent = this.value;
     console.log(cost);
    // strMod.value = this.value;
}

strInput.addEventListener('input',handleAbilityInput);

