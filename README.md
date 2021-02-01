# Character_Creation_Tool

## Collaborators:

- Nicholas Cerillo
- Jason Taisey
- Mason Aviles
- Zach Hornung

## Description:

create a tool that takes in inputs from the user to fill in the fields within an online character sheet.

## User Stories:

1. As a player interested in creating a very specialized character, I would like to see which races would allow me to maximize a specific ability.

### Feature Tasks:

- Show what options there are for races
- Race selection determine what bonuses a character will get
- Player is able to edit how many points they spend on an ability.

### Acceptance Test:

- Ensure that racial bonus is added to the ability modifier.
- The final modifier displayed on the character sheet is the some of the racial bonus, and the ability modifier.

2. As a new player, I would like to try set the stats for my hero without needing prior knowledge of how the point buy system works.

### Feature Tasks:

- Table displays how many points are spent on each ability
- Points spent will increase when player raises a stat, and decreases when he lowers a stat.
- The cost of increasing a stat is equal to the new modifier (with the exception of going from 10 to 11) (for decreasing a stat, the inverse is true)

### Acceptance Tests:

- Make sure that

3. As a DM, I would like to use a tool that will allow my players to easily make character sheets that follow a homogenous, and easy to read format.

### Feature Tasks:

- Make website accessible and easy to navigate for users.
- Implement best layout practices and color contrasts on elements
- Implement error and exception handling.

### Acceptance Tests:

- User input does not “break” the code.
- Users are able to create a character and their input is accurately rendered back to them on the character sheet.

4. As someone who likes to plan ahead, I would like to know what the average health my hero will have at a specific level.

### Feature Tasks:

- Player can select from an option display what class he wants to play as.
- Class determine how many health-points a character will have
- Each class has a specific health-point allotment associated with it (set as a property)
- Total Health is calculated by (class_hp) x Level

### Acceptance Tests:

- Character sheet correctly displays the product of class_hp and level under the character sheets “total-health” field.

5. As a player. I would like to know what my hero’s saving throws will be based on my character’s current stats.

### Feature Tasks:

- Character sheet displays a field for Will, Reflex, and Fortitude saves.
- Saves are calculated based on the following ability modifiers: Wisdom, Dexterity, Constitution.

### Acceptance Tests:

- Saves will update based on the users input on the ability score table.

6. As a player, I would like to save and/or print my completed character sheet for future use.

### Feature Tasks:

- Character object can be saved to local storage.

### Acceptance Tests:

- Users can pull up past character sheets saved on local storage.
