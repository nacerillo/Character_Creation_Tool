'use strict'
//elements on the html that we want to populate are here
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
//end of elements that we want to populate

function getLocalStorageInfo(x){//this gets the stored characters for a particular user
  var reObjectify = localStorage.getItem(x);
  var productsFromStorage = JSON.parse(reObjectify);
  return productsFromStorage;
}
var playerInfoArray = [];

var arrayOfKeys = Object.keys(localStorage);
for (var i = 0; i < arrayOfKeys.length; i++){//pushes all users in an array
  playerInfoArray.push(arrayOfKeys[i]);
}
for (var i = 0; i < playerInfoArray.length; i++){//creates an html option element for each user in the playerInfoArray 
  var option = document.createElement('option');
  option.textContent = playerInfoArray[i];
  playerPick.appendChild(option);
}

function removeOptions(parentElement){//removes the options from a dropdown selection list
  while (parentElement.firstChild){
    parentElement.removeChild(parentElement.firstChild);
  }
}

function forPlayerPick(event){//when the event happens, it gets the data from the user that was selected, and makes dropdown options for the character select
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



function updateFields(x){//gets the character info for selected player, and pushes the characters into an array. then updates all fields with various character attributes
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
characterPick.addEventListener('change', updateFields);

