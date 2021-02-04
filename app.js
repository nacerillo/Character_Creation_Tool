'use strict'
//start of variables for race constructor
var races = ['Human', 'Elf', 'Dwarf', 'Orc', 'Halfling'];
var classes = ['Fighter', 'Ranger', 'Druid', 'Cleric', 'Wizard', 'Rogue'];
var hp = [10, 10, 8, 8, 6, 8];
var modMap = new Map();
modMap.set(8,-1);
modMap.set(9,-1);
modMap.set(10,0);
modMap.set(11,0);
modMap.set(12,1);
modMap.set(13,1);
modMap.set(14,2);
modMap.set(15,2);
modMap.set(16,3);
modMap.set(17,3);
modMap.set(18,4);
modMap.set(19,4);
modMap.set(20,5);

var str = [1, 0, 0, 0, 0];
var dex = [1, 2, 0, 2, 2];
var con = [1, 0, 2, 2, 0];
var int = [1, 2, 0, 0, 0];
var wis = [1, 0, 2, 0, 0];
var cha = [1, 0, 0, 0, 2];
//end of variables for race constructor
var race = document.getElementById('race');
var selectedRace = (race.value).toLowerCase();
var classElement = document.getElementById('class');
var selectedClass = (classElement.value);
var playerName = document.getElementById('playername');
var characterName = document.getElementById('charactername');
var gender = document.getElementById('gender');
var avatar = document.getElementById('avatar');
var selectedAvatar = avatar.textContent;
var bio = document.getElementById('bio');
var strRace = document.getElementById('str-rt');
var dexRace = document.getElementById('dex-rt');
var conRace = document.getElementById('const-rt');
var intRace = document.getElementById('int-rt');
var wisRace = document.getElementById('wis-rt');
var chaRace = document.getElementById('char-rt');
var strAp = document.getElementById('str-ap');
var dexAp = document.getElementById('dex-ap');
var conAp = document.getElementById('const-ap');
var intAp = document.getElementById('int-ap');
var wisAp = document.getElementById('wis-ap');
var chaAp = document.getElementById('char-ap');
var strInput = document.getElementById('spinnerSTR');
var dexInput = document.getElementById('spinnerDEX');
var conInput = document.getElementById('spinnerCONST');
var intInput = document.getElementById('spinnerINT');
var wisInput = document.getElementById('spinnerWIS');
var chaInput = document.getElementById('spinnerCHAR');
var strAm = document.getElementById('str-am');
var dexAm = document.getElementById('dex-am');
var conAm = document.getElementById('const-am');
var intAm = document.getElementById('int-am');
var wisAm = document.getElementById('wis-am');
var chaAm = document.getElementById('char-am');

var pointsAvail = document.getElementById('points-available');
// var pointsAvailable = document.getElementById('points-available');
// var pointsAvailable = updatePointsAvailable() || 20;
var submitButton = document.getElementById('submit');

var PlayerList = function(list){
  this.list = list
}

function Player(playerName, characters){
  this.playerName = playerName;
  this.characters = characters || [];
}
var playerList = new PlayerList([]);

PlayerList.prototype.storeMembers = function (object){
  this.list.push(object);
}

function Class(c, h){
  this.name = c;
  this.hp = h;
  Class.allClasses.push(this);
};
Class.allClasses = [];

function Race(race, str, dex, con, int, wis, cha){
  this.name = race;
  this.str = str;
  this.dex = dex;
  this.con = con;
  this.int = int;
  this.wis = wis;
  this.cha = cha;
  Race.allRaces.push(this);
};
Race.allRaces = [];

function Character(cName, race, c, gender, avatar, bio, stats){
  this.name = cName;
  this.race = race;
  this.class = c;
  this.gender = gender;
  this.avatar = avatar;
  this.bio = bio;
  this.stats = stats;
  Character.allCharacters.push(this);
}
Character.allCharacters = [];

for (var i = 0; i < races.length; i++){
  new Race(races[i], str[i], dex[i], con[i], int[i], wis[i], cha[i]);
};

for (var i = 0; i < classes.length; i++){
  new Class(classes[i], hp[i]);
}

//below is to initialize a value on the table when the page is loaded
for (var i = 0; i < races.length; i ++){
  if (selectedRace == races[i].toLowerCase()){
    strRace.textContent = str[i];
    dexRace.textContent = dex[i];
    conRace.textContent = con[i];
    intRace.textContent = int[i];
    wisRace.textContent = wis[i];
    chaRace.textContent = cha[i];
  }
}
updateActualPoints();

function forClassListener(event){
  event.preventDefault();
  selectedClass = event.target.value;
}

function forRaceListener(event){
  event.preventDefault();
  selectedRace = event.target.value;
  for (var i = 0; i < races.length; i ++){
    if (selectedRace == races[i].toLowerCase()){
      strRace.textContent = str[i];
      dexRace.textContent = dex[i];
      conRace.textContent = con[i];
      intRace.textContent = int[i];
      wisRace.textContent = wis[i];
      chaRace.textContent = cha[i];
    }
  }
  updateActualPoints();
}

// function forTextInputs(event){
//   // for (let i = 0; i < event.target.length; i++) {
//   //   let num = parseInt(n[i]);
//   //   console.log(num);
//   //   console.log(typeof num);
//     if (!isNaN(event)) {
//       playerName.reset();   // Keeper in reset
//       return;
//     }
//   }
// }

function forAvatarListener(event){
  event.preventDefault();
  selectedAvatar = event.target.value;
  return selectedAvatar;
}
classElement.addEventListener('click', forClassListener);
race.addEventListener('click', forRaceListener);


function updateActualPoints(){
  strAp.textContent = parseInt(strInput.value) + parseInt(chaRace.textContent);
  dexAp.textContent = parseInt(dexInput.value) + parseInt(dexRace.textContent);
  conAp.textContent = parseInt(conInput.value) + parseInt(conRace.textContent);
  intAp.textContent = parseInt(intInput.value) + parseInt(intRace.textContent);
  wisAp.textContent = parseInt(wisInput.value) + parseInt(wisRace.textContent);
  chaAp.textContent = parseInt(chaInput.value) + parseInt(chaRace.textContent);
}

function getPlayerInfo(){
  var reObjectify = localStorage.getItem(playerName.value);
  var productsFromStorage = JSON.parse(reObjectify);
  return productsFromStorage;
}
function getStats(){
  var str = parseInt(strAp.textContent);
  var dex = parseInt(dexAp.textContent);
  var con = parseInt(conAp.textContent);
  var int = parseInt(intAp.textContent);
  var wis = parseInt(wisAp.textContent);
  var cha = parseInt(chaAp.textContent);
  
  strAm.textContent = modMap.get(parseInt(strAp.textContent)); //here would go the mod for any racial based stuff, or class based stuff, in addition to the ability mod. same applies for each row.
  dexAm.textContent = modMap.get(parseInt(dexAp.textContent));
  conAm.textContent = modMap.get(parseInt(conAp.textContent)); //here would go the mod for any racial based stuff, or class based stuff, in addition to the ability mod. same applies for each row.
  intAm.textContent = modMap.get(parseInt(intAp.textContent));
  wisAm.textContent = modMap.get(parseInt(wisAp.textContent)); //here would go the mod for any racial based stuff, or class based stuff, in addition to the ability mod. same applies for each row.
  chaAm.textContent = modMap.get(parseInt(chaAp.textContent));
  var mods = [strAm.textContent, dexAm.textContent, conAm.textContent, intAm.textContent, wisAm.textContent, chaAm.textContent]
  var stats = [str, dex, con, int, wis, cha, mods[0], mods[1], mods[2], mods[3], mods[4], mods[5]];
  return stats;
}

function eventListenerSubmitButton(event){
  event.preventDefault();
  console.log();
  console.log(typeof playerName.value);
  var arrayOfKeys = Object.keys(localStorage);
  console.log(arrayOfKeys);

  for (var i = 0; i < arrayOfKeys.length; i++){
    if (playerName.value == arrayOfKeys[i]){
      for (var i = 0; i < races.length; i++){
        if (selectedRace == (races[i]).toLowerCase()){
          var charRace = Race.allRaces[i];
        }
      }
      for (var i = 0; i < classes.length; i ++){
        if (selectedClass == classes[i]){
          var charClass = Class.allClasses[i];
        }
      }
      var playerInfo = getPlayerInfo();
      console.log(playerInfo);
      var stats = getStats();
      var bioForChar = bio.textContent;
      var newUserChar = new Character(characterName.value, charRace, charClass, gender, avatar.value, bioForChar, stats);
      playerInfo.characters.push(newUserChar);
      var stringObject = JSON.stringify(playerInfo);
      localStorage.setItem(playerName.value, stringObject);
      return;
    }
  }
    // if (getPlayerInfo(playerName.value) !== null) {      // Checks Data for storage  members cache 
    //   var recenetMembers = getPlayerInfo(playerName.value);
    //       console.log(recenetMembers, "From Storage");
    //       var membersList = recenetMembers;
    //       console.log(membersList);
    //       playerList.storeMembers(membersList);
    // }


    for (var i = 0; i < races.length; i++){
      if (selectedRace == (races[i]).toLowerCase()){
        var charRace = Race.allRaces[i];
      }
    }
    for (var i = 0; i < classes.length; i ++){
      if (selectedClass == classes[i]){
        var charClass = Class.allClasses[i];
      }
    }
    
    var player = new Player(playerName.value);
    var stats = getStats();
    var bioInstance = bio.value;
    var genderInstance = gender.value;
    var userChar = new Character(characterName.value, charRace, charClass, genderInstance, avatar.value, bioInstance, stats);
    player.characters.push(userChar);
    playerList.storeMembers(player);

    var stringObject = JSON.stringify(player);
    localStorage.setItem(playerName.value, stringObject);
    
    var arrayOfKeys = Object.keys(localStorage);
    console.log(arrayOfKeys);
}

submitButton.addEventListener('click', eventListenerSubmitButton);



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
//var strAm = strMod.textContent;

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
//var dexAm = dexMod.textContent;


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
//var conAm = conMod.textContent;


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
//var intAm = intMod.textContent;


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
//wisAm.t = wisMod.textContent;


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
//var chaAm = chaMod.textContent;

var RaceMod;
var abilityMod;

updateActualMod();
function updateActualMod(){
    console.log(parseInt(strAp.textContent));
    console.log(modMap.get(parseInt(strAp.textContent)));
    console.log(modMap.get(14));
  strAm.textContent = modMap.get(parseInt(strAp.textContent)); //here would go the mod for any racial based stuff, or class based stuff, in addition to the ability mod. same applies for each row.
  dexAm.textContent = modMap.get(parseInt(dexAp.textContent));
  conAm.textContent = modMap.get(parseInt(conAp.textContent)); //here would go the mod for any racial based stuff, or class based stuff, in addition to the ability mod. same applies for each row.
  intAm.textContent = modMap.get(parseInt(intAp.textContent));
  wisAm.textContent = modMap.get(parseInt(wisAp.textContent)); //here would go the mod for any racial based stuff, or class based stuff, in addition to the ability mod. same applies for each row.
  chaAm.textContent = modMap.get(parseInt(chaAp.textContent));
  console.log(conAm.textContent);
  console.log(conAp);
}

function handleAbilityInput(event){
  event.preventDefault();
  var val = event.target.value;
  if(event.target.id === "spinnerSTR"){
    updateRow(val,strMod,strAp,strCost);
    console.log(strAp);
    updateActualMod();
  }
  else if(event.target.id === "spinnerDEX"){
    updateRow(val,dexMod,dexAp,dexCost);
    
    updateActualMod();
  }
  else if(event.target.id === "spinnerCONST"){
    updateRow(val,conMod,conAp,conCost)
    updateActualMod();
  }
  else if(event.target.id === "spinnerINT"){
    updateRow(val,intMod,intAp,intCost)
    updateActualMod();
  }
  else if(event.target.id === "spinnerWIS"){
    updateRow(val,wisMod,wisAp,wisCost)
    updateActualMod();
  }
  else{
    updateRow(val,chaMod,chaAp,chaCost)
    updateActualMod();
  }
}

function updateRow(v, mod, ap, cost){
  ap.textContent = v;
  if(v == 8 || v == 9){
    mod.textContent = -1;
      if(v == 8){
        cost.textContent = -2;
      }
      if(v == 9){
        cost.textContent = -1;
      }
    }
  else if(v== 10 || v== 11){
      mod.textContent = 0;
        if(v == 10){
          cost.textContent = 0;
        }
        if(v == 11){
          cost.textContent = 1;
        }
     }
  else if(v == 12 || v == 13){
      mod.textContent = 1;
        if(v == 12){
          cost.textContent = 2;
        }
        if(v == 13){
          cost.textContent = 3;
        }
     }
  else if(v == 14 || v == 15){
      mod.textContent = 2;
        if(v == 14){
          cost.textContent = 5;
        }
        if(v == 15){
          cost.textContent = 7;
        }
     }
  else if(v == 16 ||v == 17){
        mod.textContent = 3;
         if(v == 16){
          cost.textContent = 10;
        }
        if(v == 17){
            cost.textContent = 13;
        }
     }
  else if(v == 18 || v == 19){
      mod.textContent = 4;
     }
  updatePointsAvailable();
  updateActualPoints();
}

function updatePointsAvailable(){
    var spent  = parseInt(strCost.textContent) + parseInt(dexCost.textContent) + parseInt(conCost.textContent) + parseInt(intCost.textContent) + parseInt(wisCost.textContent) + parseInt(chaCost.textContent);
    TotalPoints = 20 - spent; 
    console.log(pointsAvail);
    pointsAvail.textContent = 20 - spent;
    return TotalPoints;
}

dexInput.addEventListener('input',handleAbilityInput);
strInput.addEventListener('input',handleAbilityInput);
conInput.addEventListener('input',handleAbilityInput);
intInput.addEventListener('input',handleAbilityInput);
wisInput.addEventListener('input',handleAbilityInput);
chaInput.addEventListener('input',handleAbilityInput);

