# Cricket T-20 Game - Readme

Welcome to the Cricket T-20 Game! This is a simple text-based game where you can simulate a T-20 cricket match using a number randomizer. The game allows you to experience the excitement of cricket in a condensed format.

## How to Play

1. Buttons:
   - Begin by pressing the set target. This will randomly set a cpu target between 100 and 250.
   - Press play to get a randomly generated number between 0-9. This will represent the score on each ball.
   - Reset button will appear when the player either wins, loses, or ties. Press reset to restart the game.
     
2. Rules of the Game:
   - Each team will play 20 overs (120 balls) in total.
   - A scorecard will be displayed for your team, showing the current score and the number of wickets lost.
   - The game will simulate the outcomes of each ball based on random numbers.

3. Batting:
   - To simulate batting, roll the randomizer and obtain a number between 0 and 9.
   - If the number is 5, 7, 8, or 9, consider it a dot ball (no runs scored).
   - If the number is 1, 2, or 3, add that number of runs to the team's score.
   - If the number is 4, or 6, consider it a boundary and add runs to the team's score.
   - If the number is 0, consider it as a wicket, and the batting team loses a wicket.
   - Continue rolling the randomizer until all 120 balls are bowled or all wickets are lost.

4. Winning the Game:
   - The team with the highest score at the end of 20 overs wins the game.
   - If both teams have the same score, the match ends in a tie.

Enjoy playing the Cricket T-20 Game and experience the excitement of a thrilling cricket match!

#Gameplay





# Technologies Used:

This cricket game utilizes a combination of JavaScript, HTML, and CSS to create an interactive and immersive gaming experience. JavaScript is employed for various functionalities, such as simulating batting and bowling, updating the scorecard, managing wicket losses, and determining the winner. DOM manipulation is a key aspect of JavaScript usage, allowing for dynamic updates to the game interface, scorecard, and other game elements.

HTML provides the structure and layout of the game, defining the elements, containers, and displays required. CSS is responsible for the visual styling, including the design of the game board, scorecard, fonts, and other visual elements. By leveraging these technologies, the game achieves seamless interactivity, responsive design, and a captivating user interface, enhancing the overall cricket gaming experience.


# Challenges:

Figuring out the reset structure was hard. I needed the reset button to appear only when the game conditions were met, and I wanted the reset button to reset all elements and make the reset button disappears when pressed.

Another challenge was to add probability to the already randomised numbers.
