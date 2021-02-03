

'use strict'
//start of variables for race constructor
var races = ['Human', 'Elf', 'Dwarf', 'Orc', 'Halfling'];
var str = [1, 0, 0, 0, 0];
var dex = [1, 2, 0, 2, 2];
var con = [1, 0, 2, 2, 0];
var intel = [1, 2, 0, 0, 0];
var wis = [1, 0, 2, 0, 0];
var cha = [1, 0, 0, 0, 2];
//end of variables for race constructor
var race = document.getElementById('race');
var selectedRace = (race.value).toLowerCase();
console.log(selectedRace); 
var playerName = (document.getElementById('playername')).value;
console.log(playerName);
var characterName = (document.getElementById('charactername').value);
var gender = (document.getElementById('gender').value);
var avatar = (document.getElementById('avatar').value);
var bio = (document.getElementById('bio').value);
var raceStrElement = document.getElementById('str-rt');
var raceDexElement = document.getElementById('dex-rt');
var raceConElement = document.getElementById('const-rt');
var raceIntelElement = document.getElementById('int-rt');
var raceWisElement = document.getElementById('wis-rt');
var raceChaElement = document.getElementById('char-rt');

var submitButton = document.getElementById('submit');


function Player(playerName){
  this.playerName = playerName;
  this.characters = [];
}

function Race(race, str, dex, con, intel, wis, cha){
  this.race = race;
  this.str = str;
  this.dex = dex;
  this.con = con;
  this.intel = intel;
  this.wis = wis;
  this.cha = cha;
  Race.allRaces.push(this);
};
Race.allRaces = [];

function Character(cName, race, gender, avatar, bio, stats){
  this.name = cName;
  this.race = race;
  this.gender = gender;
  this.avatar = avatar;
  this.bio = bio;
  this.stats = stats;
  Character.allCharacters.push(this);
}
Character.allCharacters = [];

for (var i = 0; i < races.length; i++){
  new Race(races[i], str[i], dex[i], con[i], intel[i], wis[i], cha[i]);
};
console.log(Race.allRaces);

//below is to initialize a value on the table when the page is loaded
for (var i = 0; i < races.length; i ++){
  if (selectedRace == races[i].toLowerCase()){
    raceStrElement.textContent = str[i];
    raceDexElement.textContent = dex[i];
    raceConElement.textContent = con[i];
    raceIntelElement.textContent = intel[i];
    raceWisElement.textContent = wis[i];
    raceChaElement.textContent = cha[i];
  }
}
function forRaceListener(event){
  event.preventDefault();
  selectedRace = event.target.value;
  console.log(selectedRace);
  for (var i = 0; i < races.length; i ++){
    if (selectedRace == races[i].toLowerCase()){
      raceStrElement.textContent = str[i];
      raceDexElement.textContent = dex[i];
      raceConElement.textContent = con[i];
      raceIntelElement.textContent = intel[i];
      raceWisElement.textContent = wis[i];
      raceChaElement.textContent = cha[i];
    }
  }
}
race.addEventListener('change', forRaceListener);

function getStats(){
  var str = (document.getElementById('spinnerSTR').value);
  var dex = (document.getElementById('spinnerDEX').value);
  var con = (document.getElementById('spinnerCONST').value);
  var intel = (document.getElementById('spinnerINT').value);
  var wis = (document.getElementById('spinnerWIS').value);
  var cha = (document.getElementById('spinnerCHAR').value);
  var stats = [str, dex, con, intel, wis, cha];
  return stats;
}

function eventListenerSubmitButton(event){
  event.preventDefault();
  for (var i = 0; i < races.length; i++){
    if (selectedRace == (races[i]).toLowerCase()){
      var charRace = Race.allRaces[i];
    }
  }
  console.log(charRace);
  var player = new Player(playerName)
  var stats = getStats();
  console.log(stats);
  var userChar = new Character(characterName, charRace, gender, avatar, bio, stats);
  player.characters.push(userChar);
  console.log(player);
}
submitButton.addEventListener('click', eventListenerSubmitButton);




//var dexMod = document.getElementById('dex-mod');
//var conMod = document.getElementById('const-mod');

/////////////Strength Row Elements////////
//Input
var TotalPoints = 20;
var strInput = document.getElementById('spinnerSTR');
//Mod
console.log(strInput);
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
var chaInput = document.getElementById('spinnerCHAR');
//Mod
var  chaMod = document.getElementById('char-mod');
//Cost
var chaCost = document.getElementById('char-cost');
var chaRace = document.getElementById('char-rt');
//Actual Points
var chaAp = document.getElementById('char-ap');
chaAp.textContent = chaInput.value;
//Actual Mod
var chaAm = document.getElementById('char-am');
var chaAm = chaMod.textContent;

var RaceMod;
var abilityMod;

var currStr;
var currDex;
function handleAbilityInput(event){
    //updateRow(strAp,)
    event.preventDefault();
    var val = event.target.value;
    console.log(val);
    console.log(event.target.id);
    
    if(event.target.id === "spinnerSTR"){
        updateRow(val,strMod,strAp,strCost)
        
    }

    else if(event.target.id === "spinnerDEX"){
        updateRow(val,dexMod,dexAp,dexCost)
    }

    else if(event.target.id === "spinnerCONST"){
        updateRow(val,constMod,constAp,constCost)
    }

    else if(event.target.id === "spinnerINT"){
        updateRow(val,intMod,intAp,intCost)
    }

    else if(event.target.id === "spinnerWIS"){
        updateRow(val,wisMod,wisAp,wisCost)
    }

    else{
         updateRow(val,chaMod,chaAp,chaCost)
    }
    
}

function updateRow(v, mod,ap,cost){


    ap.textContent = v; // this.value + Racial Bonus
     //console.log(v);
    // console.log(strCost.textContent);
     //console.log(this.value == 12);

    if(v == 8 || v == 9){
        mod.textContent = -1;
        //TotalPoints -= 2;
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
            // console.log(cost.textContent);
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
     else if(v == 14 || v == 15){
        mod.textContent = 2;
        if(v == 14){
            cost.textContent = 5;
        }
        if(v == 15){
            cost.textContent = 7;
        }
        //update character class with updated Mod
     }
     else if(v == 16 ||v == 17){
         mod.textContent = 3;
         if(v == 16){
            cost.textContent = 10;
        }
        if(v == 17){
            cost.textContent = 13;
        }
         //update character class with updated Mod 
     }

     else if(v == 18 || v == 19){
        mod.textContent = 4;
        //update character class with updated Mod
     }
    // strMod.textContent = this.value;
     //console.log(cost);
    // strMod.value = this.value;
    updatePointsAvailable();
}

function updatePointsAvailable(){
    var spent  = parseInt(strCost.textContent) + parseInt(dexCost.textContent) + parseInt(conCost.textContent) + parseInt(intCost.textContent) + parseInt(wisCost.textContent) + parseInt(chaCost.textContent);
    TotalPoints = 20 - spent; 
    console.log(TotalPoints);
}

dexInput.addEventListener('input',handleAbilityInput);
strInput.addEventListener('input',handleAbilityInput);
conInput.addEventListener('input',handleAbilityInput);
intInput.addEventListener('input',handleAbilityInput);
wisInput.addEventListener('input',handleAbilityInput);
chaInput.addEventListener('input',handleAbilityInput);

