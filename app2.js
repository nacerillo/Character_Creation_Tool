'use strict'
var strSheet = document.getElementById('str-sheet');
var dexSheet = document.getElementById('dex-sheet');
var conSheet = document.getElementById('con-sheet');
var intSheet = document.getElementById('int-sheet');
var wisSheet = document.getElementById('wis-sheet');
var chaSheet = document.getElementById('cha-sheet');


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
  return playerInfo;
}
updateFields();
// console.log(playerInfo.characters[0].stats[1]);
