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
var raceSheet = document.getElementById('race-sheet');
var avatarSheet = document.getElementById('avatar-sheet');
var playerPick = document.getElementById('player-pick');
var characterPick = document.getElementById('player-char');


function getLocalStorageInfo(x){
  var reObjectify = localStorage.getItem(x);
  var productsFromStorage = JSON.parse(reObjectify);
  return productsFromStorage;
}
var playerInfoArray = [];

var arrayOfKeys = Object.keys(localStorage);
for (var i = 0; i < arrayOfKeys.length; i++){
  playerInfoArray.push(arrayOfKeys[i]);
}
for (var i = 0; i < playerInfoArray.length; i++){
  var option = document.createElement('option');
  option.textContent = playerInfoArray[i];
  playerPick.appendChild(option);
}

function removeOptions(parentElement){
  while (parentElement.firstChild){
    parentElement.removeChild(parentElement.firstChild);
  }
}

function forPlayerPick(event){
  event.preventDefault();
  var nombre = getLocalStorageInfo(event.target.value);
  console.log(nombre.characters);
  removeOptions(characterPick);
  var initialOption = document.createElement('option');
  initialOption.textContent = 'Xxxx'
  characterPick.appendChild(initialOption);
  for (var i = 0; i < nombre.characters.length; i ++){
    var charOptions = document.createElement('option');
    charOptions.textContent = nombre.characters[i].name;
    characterPick.appendChild(charOptions);
  }
}

playerPick.addEventListener('change', forPlayerPick);



function updateFields(x){
  x.preventDefault();
  var playerChars = getLocalStorageInfo(playerPick.value);
  var characters = []
  for (var i = 0; i < playerChars.characters.length; i ++){
    characters.push(playerChars.characters[i]);
  }
  console.log(characters);
  console.log(characterPick.value);
  for (var i = 0; i < characters.length; i++){
    if (characterPick.value == characters[i].name){
      console.log(characters[i]);
      strSheet.textContent = characters[i].stats[0];
      dexSheet.textContent = characters[i].stats[1];
      conSheet.textContent = characters[i].stats[2];
      intSheet.textContent = characters[i].stats[3];
      wisSheet.textContent = characters[i].stats[4];
      chaSheet.textContent = characters[i].stats[5];
      characterNameSheet.textContent = characters[i].name;
      playerNameSheet.textContent = playerPick.value;
      genderSheet.textContent = characters[i].gender;
      bioSheet.textContent = characters[i].bio;
      classSheet.textContent = characters[i].class.name;
      raceSheet.textContent = characters[i].race.name;
      hpSheet.textContent = parseInt(characters[i].class.hp) + parseInt(characters[i].stats[8]);
      avatarSheet.src = characters[i].avatar;
    }
  }
}
characterPick.addEventListener('change', updateFields)
// console.log(playerInfo.characters[0].stats[1]);
