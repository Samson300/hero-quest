# Hero Quest - RPG
---

##Contents
--- 
  * What It Is
  * What We Used
  * MVP
  * Stretch Goals
  * Authors
  * Github Link

##What It Is
---
Hero Quest is a turn based RPG. User is a Hero who can buy items with gold they earned, kill monsters and gain levels to get better stats. You start in the Town which consists of the item shop and healer. You then would travel to the Wilderness where you encounter monster battles at random as you walk around. Then you would travel through the dungeon fighting mini bosses to get to the Cave and fight the boss of the game, the Dragon Lord. If you are feeling lucky, your hero can try to open chests along the way for items to up your stats. Opening chests is a gamble as the outcome varies. After killing the Dragon Lord the player is then sent back to town and all monster stats are increased.

Technologies we used were React, Redux, Express, Axios, postgresSQL and CSS. The layout for the map is an array of arrays with each number in the array being a tile. The number for each tile was assigned an image in the Map component using some CSS and a sprite sheet. Map reducer has actions to change what map is displayed. We created components, containers and reducers for each type of battle encounter. For the player we created a Player, PlayerMovement component and player reducer that controls movement, collisions, and sprite location. Player reducer also holds actions to attack enemies, buy items and gain gold and exp when killing a monster. Item store has a component and container. The World component renders all other components. We used redux to manage all of our state changes. Because we were making a game, we needed to access many different parts of state at various times with varying changes. Using redux store aloud us to easily manage and change all of our different components states at any time.


##What We Used
---
  * React
  * Redux
  * Express
  * Axios
  * PostgresSQL


##MVP (Minimum Viable Product)
---  
The MVP for this project changed was super ambitious. We had so much that we wanted to do with our game, we really
had to think about what all was going to be needed for our game to really make sense, but also be doable with React and Redux. In the end we didn't really get to spend much time on our stretch goals, but were able to succesfully integrate all MVP features.


Our first MVP iteration included:
  * Gameboard/Map
  * Player character with movement, collision and battle capabilities
  * A monster class to fight and level up
  * Boss of game
  * Item store
  * Healer in town
  
  
##Stretch Goals
  * Extra mini bosses
  * Gambling Chests
  * Multipul Characters
  * Spells/Multiple attacks
  * Save Game
  * Interactions with more objects


##Authors
---
  * [Anthony Moss](https://github.com/Anthony-Moss)
  * [Ryan Yim](https://github.com/yknyim)
  * [Samson O'Shaughnessy](https://github.com/Samson300)

##Github Link
---
[Github](https://github.com/Samson300/hero-quest)
