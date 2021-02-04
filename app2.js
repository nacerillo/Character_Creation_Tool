'use strict'
var strSheet = document.getElementById('str-sheet');
var dexSheet = document.getElementById('dex-sheet');
var conSheet = document.getElementById('con-sheet');
var intSheet = document.getElementById('int-sheet');
var wisSheet = document.getElementById('wis-sheet');
var chaSheet = document.getElementById('cha-sheet');
var characterNameSheet = document.getElementById('character-name-sheet');
var playerNameSheet = document.getElementById('player-name-sheet');
var genderSheet = document.getElementById('gender-sheet');
var bioSheet = document.getElementById('bio-sheet');
var classSheet = document.getElementById('class-sheet');
var hpSheet = document.getElementById('hp-sheet');




function getPlayerInfo(){
  var reObjectify = localStorage.getItem('player');
  var productsFromStorage = JSON.parse(reObjectify);
  return productsFromStorage;
}
getPlayerInfo();
console.log(getPlayerInfo());

function updateFields(){
  var playerInfo = getPlayerInfo();
  strSheet.textContent = playerInfo.characters[0].stats[0];
  dexSheet.textContent = playerInfo.characters[0].stats[1];
  conSheet.textContent = playerInfo.characters[0].stats[2];
  intSheet.textContent = playerInfo.characters[0].stats[3];
  wisSheet.textContent = playerInfo.characters[0].stats[4];
  chaSheet.textContent = playerInfo.characters[0].stats[5];
  characterNameSheet.textContent = playerInfo.characters[0].name;
  playerNameSheet.textContent = playerInfo.playerName;
  genderSheet.textContent = playerInfo.characters[0].gender;
  bioSheet.textContent = playerInfo.characters[0].bio;
  classSheet.textContent = playerInfo.characters[0].class.name;
  hpSheet.textContent = parseInt(playerInfo.characters[0].class.hp) + ;
  return playerInfo;
}
updateFields();
// console.log(playerInfo.characters[0].stats[1]);
