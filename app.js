'use strict'
//start of variables for race constructor
var races = ['Human', 'Elf', 'Dwarf', 'Orc', 'Halfling'];
var classes = ['Fighter', 'Ranger', 'Druid', 'Cleric', 'Wizard', 'Rogue'];
var hp = [10, 10, 8, 8, 6, 8];
var str = [1, 0, 0, 0, 0];
var dex = [1, 2, 0, 2, 2];
var con = [1, 0, 2, 2, 0];
var int = [1, 2, 0, 0, 0];
var wis = [1, 0, 2, 0, 0];
var cha = [1, 0, 0, 0, 2];
//end of variables for race constructor

//mod map for table logic
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
//end mod map for table logic


var costMap = new Map();
costMap.set(8,-2);
costMap.set(9,-1);
costMap.set(10,0);
costMap.set(11,1);
costMap.set(12,2);
costMap.set(13,3);
costMap.set(14,5);
costMap.set(15,7);
costMap.set(16,10);
costMap.set(17,13);
costMap.set(18,18);

var str = [1, 0, 0, 0, 0];
var dex = [1, 2, 0, 2, 2];
var con = [1, 0, 2, 2, 0];
var int = [1, 2, 0, 0, 0];
var wis = [1, 0, 2, 0, 0];
var cha = [1, 0, 0, 0, 2];
//end of variables for race constructor
//start of input field elements for character constructor
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
//end of input field elements for character constructor

//start of table element locations
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
var strMod = document.getElementById('str-mod');
var dexMod = document.getElementById('dex-mod');
var conMod = document.getElementById('const-mod');
var intMod = document.getElementById('int-mod');
var wisMod = document.getElementById('wis-mod');
var chaMod = document.getElementById('char-mod');
var strCost = document.getElementById('str-cost');
var dexCost = document.getElementById('dex-cost');
var conCost = document.getElementById('const-cost');
var intCost = document.getElementById('int-cost');
var wisCost = document.getElementById('wis-cost');
var chaCost = document.getElementById('char-cost');
//end of table element locations

var TotalPoints = 20;

var pointsAvail = document.getElementById('points-available');

var submitButton = document.getElementById('submit');

function Player(playerName, characters){//constructor for each different user
  this.playerName = playerName;
  this.characters = characters || [];
}

function Class(c, h){//constructor for making different classes
  this.name = c;
  this.hp = h;
  Class.allClasses.push(this);
};
Class.allClasses = [];

function Race(race, str, dex, con, int, wis, cha){//constructor for making different races
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

function Character(cName, race, c, gender, avatar, bio, stats){//constructor for each new character made by a player
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

//below loops initialize the options for races and classes
for (var i = 0; i < races.length; i++){
  new Race(races[i], str[i], dex[i], con[i], int[i], wis[i], cha[i]);
};

for (var i = 0; i < classes.length; i++){
  new Class(classes[i], hp[i]);
}
//end of loops for initializing options for races and classes

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
//end of initializing values on table

updateActualPoints();

function forClassListener(event){//changes the selected class value to be the info for the class that is clicked on
  event.preventDefault();
  selectedClass = event.target.value;
}

function forRaceListener(event){//changes the selected race value to be the info for the race that is clicked on, and updates the table race info column
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

function forAvatarListener(event){//changes the selected avatar to be the link provided
  event.preventDefault();
  selectedAvatar = event.target.value;
  return selectedAvatar;
}

classElement.addEventListener('click', forClassListener);//adds event listeners to the appropriate html element
race.addEventListener('click', forRaceListener);//adds event listeners to the appropriate html element

function updateActualPoints(){//updates the actual points column based on input
  strAp.textContent = parseInt(strInput.value) + parseInt(chaRace.textContent);
  dexAp.textContent = parseInt(dexInput.value) + parseInt(dexRace.textContent);
  conAp.textContent = parseInt(conInput.value) + parseInt(conRace.textContent);
  intAp.textContent = parseInt(intInput.value) + parseInt(intRace.textContent);
  wisAp.textContent = parseInt(wisInput.value) + parseInt(wisRace.textContent);
  chaAp.textContent = parseInt(chaInput.value) + parseInt(chaRace.textContent);
}

function getPlayerInfo(){//gets the player name key from local storage and returns their characters
  var reObjectify = localStorage.getItem(playerName.value);
  var productsFromStorage = JSON.parse(reObjectify);
  return productsFromStorage;
}

function getStats(){//gets the stats from the table
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

function getLocalStorageInfo(x){//gets the player name key form local storage and returns their characters
  var reObjectify = localStorage.getItem(x);
  var productsFromStorage = JSON.parse(reObjectify);
  return productsFromStorage;
}

function eventListenerSubmitButton(event){//when submit is clicked, gathers info from all input fields
  event.preventDefault();
  var arrayOfKeys = Object.keys(localStorage);//gets all key values from local storage and puts them in an array

  for (var i = 0; i < arrayOfKeys.length; i++){
    if (playerName.value == arrayOfKeys[i]){//this checks if there is already a character with the selected name in local storage
      var playerCharData = getLocalStorageInfo(arrayOfKeys[i]);                                                                 //
      var playerChars = [];                                                           //if there is a character with that name, //
      for (var i = 0; i < playerCharData.characters.length; i++){                     //it breaks out of the function           //
        playerChars.push(playerCharData.characters[i]);                                                                         //
      }                                                                                                                         //
      for (var i = 0; i < playerChars.length; i ++){                                                                            //
        if (characterName.value == playerChars[i].name){                                                                        //
          alert('You already have a character with this name! Please use another name');                                        //
          return;                                                                                                               //
        }                                                                                                                       //
      }                                                  /////////////////////////////////////////////////////////////////////////                                                                       
      if (TotalPoints < 0){
        alert('You have gone over your spending limit, please reallocate points!');// if the character is over their points spending limit, breaks out of the function
        return;
      }

      for (var i = 0; i < races.length; i++){///////////if the character is a new character, it adds it to the users array of characters
        if (selectedRace == (races[i]).toLowerCase()){                                                                                 //
          var charRace = Race.allRaces[i];                                                                                             //
        }                                                                                                                              //
      }                                                                                                                                //
      for (var i = 0; i < classes.length; i ++){                                                                                       //
        if (selectedClass == classes[i]){                                                                                              //
          var charClass = Class.allClasses[i];                                                                                         //
        }                                                                                                                              //
      }                                                                                                                                //
      var playerInfo = getPlayerInfo();                                                                                                //
      console.log(playerInfo);                                                                                                         //
      var stats = getStats();                                                                                                          //
      var bioForChar = bio.textContent;                                                                                                //
      var newUserChar = new Character(characterName.value, charRace, charClass, gender, avatar.value, bioForChar, stats);              //
      playerInfo.characters.push(newUserChar);                                                                                         //
      var stringObject = JSON.stringify(playerInfo);                                                                                   //
      localStorage.setItem(playerName.value, stringObject);                                                                            //
      return;                                                                                                                          //
    }                                                                                                                                  //
  }                                                                                                                                    //
                                                           //////////////////////////////////////////////////////////////////////////////
    for (var i = 0; i < races.length; i++){//assigns character race to selected race
      if (selectedRace == (races[i]).toLowerCase()){
        var charRace = Race.allRaces[i];
      }
    }
    for (var i = 0; i < classes.length; i ++){//assigns character class to selected class
      if (selectedClass == classes[i]){
        var charClass = Class.allClasses[i];
      }
    }
    if (TotalPoints < 0){//if youre over the points limit, stops you from adding character to your list of characters
      alert('You have gone over your spending limit, please reallocate points!');
      return;
    }
    
    var player = new Player(playerName.value);// if there is no player with that name in storage, makes a new player name key and a new array of characters for them
    var stats = getStats();
    var bioInstance = bio.value;
    var genderInstance = gender.value;
    var userChar = new Character(characterName.value, charRace, charClass, genderInstance, avatar.value, bioInstance, stats);
    player.characters.push(userChar);
    
    var stringObject = JSON.stringify(player);
    localStorage.setItem(playerName.value, stringObject);
    
    var arrayOfKeys = Object.keys(localStorage);
    console.log(arrayOfKeys);
}

submitButton.addEventListener('click', eventListenerSubmitButton);

//set Actual Points equal to user's Inputed Values
strAp.textContent = strInput.value;
dexAp.textContent = dexInput.value;
conAp.textContent = conInput.value;
intAp.textContent = intInput.value;
wisAp.textContent = wisInput.value;
chaAp.textContent = chaInput.value;

updateActualMod();

//this functions updates values displayed in the Actual Modifier Column
//the Actual Modifier is dependent on the associtaed point value to it
// In this function, we take in the Actual Points for each ability, and use
// them as a key to grab the associated modifier value from the map. 
function updateActualMod(){
  strAm.textContent = modMap.get(parseInt(strAp.textContent)); //here would go the mod for any racial based stuff, or class based stuff, in addition to the ability mod. same applies for each row.
  dexAm.textContent = modMap.get(parseInt(dexAp.textContent));
  conAm.textContent = modMap.get(parseInt(conAp.textContent)); //here would go the mod for any racial based stuff, or class based stuff, in addition to the ability mod. same applies for each row.
  intAm.textContent = modMap.get(parseInt(intAp.textContent));
  wisAm.textContent = modMap.get(parseInt(wisAp.textContent)); //here would go the mod for any racial based stuff, or class based stuff, in addition to the ability mod. same applies for each row.
  chaAm.textContent = modMap.get(parseInt(chaAp.textContent));
}

//This function is triggered each time a user updates any Ability Score
function handleAbilityInput(event){

//run an update on the row values and modifiers for whichever Ability Input has been targetted. 
  event.preventDefault();
  var val = event.target.value;
  if(event.target.id === "spinnerSTR"){
    updateRow(val,strMod,strAp,strCost);
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


//Updates what is displayed in the Mod and Cost columns, and calls on the updateAvailablePoints
// and updateActualPoints
function updateRow(v, mod, ap, cost){
  ap.textContent = v;
  cost.textContent = costMap.get(parseInt(v))
  mod.textContent = modMap.get(parseInt(v))
  TotalPoints = updatePointsAvailable();
  updateActualPoints();
}

//Returns the differecne between maximum points (20) and what has been spent 
function updatePointsAvailable(){
  var spent  = parseInt(strCost.textContent) + parseInt(dexCost.textContent) + parseInt(conCost.textContent) + parseInt(intCost.textContent) + parseInt(wisCost.textContent) + parseInt(chaCost.textContent);
  TotalPoints = 20 - spent; 
  console.log(pointsAvail);
  pointsAvail.textContent = 20 - spent;
  return TotalPoints;
}

//calls evenListenr to each of the Input Rows
dexInput.addEventListener('input',handleAbilityInput);
strInput.addEventListener('input',handleAbilityInput);
conInput.addEventListener('input',handleAbilityInput);
intInput.addEventListener('input',handleAbilityInput);
wisInput.addEventListener('input',handleAbilityInput);
chaInput.addEventListener('input',handleAbilityInput);

/**
 * 
 *making a virtual spread sheet that allows the user to 
 
 */