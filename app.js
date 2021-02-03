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