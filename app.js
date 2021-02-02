'use strict'

var races = ['Human', 'Elf', 'Dwarf', 'Orc', 'Halfling'];
var str = [1, 0, 0, 0, 0];
var dex = [1, 2, 0, 2, 2];
var con = [1, 0, 2, 2, 0];
var intel = [1, 2, 0, 0, 0];
var wis = [1, 0, 2, 0, 0];
var cha = [1, 0, 0, 0, 2];
var race = document.getElementById('race');
selectedRace = race.value;
var playerName = (document.getElementById('playername')).value;
var characterName = (document.getElementById('charactername').value);
var gender = (document.getElementById('gender').value);
var avatar = (document.getElementById('avatar').value);
var bio = (document.getElementById('bio').value);



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

function Character(){
  Character.allCharacters.push(this);
}
Character.allCharacters = [];
Character.prototype.pName = playerName; // could move this to a player constructor to denote which characters a player has made, and the number of different players. stretch goal perhaps
Character.prototype.cName = characterName;
Character.prototype.gender = avatar;
Character.prototype.bio = bio;


for (var i = 0; i < races.length; i++){
  new Race(races[i], str[i], dex[i], con[i], intel[i], wis[i], cha[i]);
};

for (var i = 0; i < races.length; i++){
  if (selectedRace == races[i]){
    var charRace = Race.allRaces[i];
    break;
  }
}
console.log(charRace);
