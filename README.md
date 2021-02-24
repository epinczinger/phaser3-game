# Skeight
## Game Developed using Phaser 3, Webpack, and ES6.

Implementation of an Endless game built with [Phaser 3](https://phaser.io/phaser3) framework.
![gif](./assets/skater.gif)
On this project, I've built an easy-play platform game where your player, a rebel skate girl, has to avoid the police and the obstacles while collecting beers to gain points. There are some standard tricks you can do while combining arrow keyboards.
Local storage was used to store the username, and Leaderboard API is used to track the highest scores.

![screenshot](./assets/screenshot.png)


### How to Play.

You can move the player using LEFT or RIGHT arrow keys and use the UP arrow key for jumping.

## GDD

### Initial Aims.

In the Game Design Document, I created on the second day of this project, I was decided to work on a skate game. That was the main motivation I had. I imagined a player who can do several different tricks on the board while going through an endless environment. 

### Developing.

The first and main blocker I had with my former idea was to find a proper sprite or images to work with for the skate tricks. After a proper amount of time searching the best I could find was a couple of images that I had to crop, mix, and resize to create a sprite sheet to use. So there I had something to work with. But because I couldn't create many tricks I would have to change the scoring system, that's the reason why I added the Beers to collect while riding. Funny thing haha.
The next step was to think about the condition for the game over and automatically thought about an obstacle, a naturally added obstacle.. a ROCK!! But only rocks? No, I felt we needed something else, the "bad guy", and apologies for this, but It has to be a cop. A moustache face policeman. Now we have a game!.

### All that glitters is not gold.

Even when the game is playable and the main functionalities are working, I feel It's needing something else, that thing that motivated me at the first moment. Yes, more Skate tricks!!, which I compromise to add later on after working over other images. 
Amazing experience developing my first game on an unknown framework.

## Built With

- HTML5/CSS
- Phaser 3
- Webpack
- Javascript
- Eslint
- [Netlify](https://www.netlify.com/) for deployment
- [Leaderboard API service](https://www.notion.so/Leaderboard-API-service-24c0c3c116974ac49488d4eb0267ade3) for Highscores


## Live Demo

[Play Game on Live Link](https://skeight-phaser3.netlify.app/)


## Video

[Video explanation](https://www.loom.com/share/12450d3870764499815bd59d4fdd550e)



## Run the project on your local environment

1. Navigate to the directory where you wanna clone the repo.
2. Clone this project with `git clone https://github.com/epinczinger/phaser3-game.git` on the command line.
3. Type `cd phaser3-game` to enter the project folder.

4. From the cloned project's directory, run `yarn install`.

Once you've installed the project's dependencies, you can run the project using [Webpack Dev Server](https://github.com/webpack/webpack-dev-server).

5. From your project's directory, run `yarn run webpack-dev-server`.

6. Open up your browser to `http://localhost:8080`.

7. You should see a web page with the game interface requesting for player name. That's the game!
8. Enjoy it!


## Future Implementation

Double Jump.
More Skate Tricks.
Increase speed during time, so difficulty get high while you play.


## Author 


👤 **Esteban Pinczinger** 
    
- Github: [epinczinger](https://github.com/epinczinger)
- Linkedin: [Esteban-Pinczinger](https://www.linkedin.com/in/esteban-pinczinger/)
- E-mail: epinczinger@gmail.com


## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/epinczinger/phaser3-game/issues).


## Show your support

Give a ⭐️ if you like this project!


## Acknowledgments

- My standup team
- My Javascript partner [Joseph-Burke](https://github.com/Joseph-Burke)
- [Microverse](https://www.microverse.org/)
- [Phaser](https://phaser.io/)
- [OpenGameArt](https://opengameart.org/)
- [Code Academy](https://www.codecademy.com/learn/learn-phaser)