var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Game States
// "WIN" - Player robot has defeated all enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


var fight = function(enemyName) {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT" ) {
            //Subtract the value of 'playerAttack' from the value of 'enemyHealth'
            enemyHealth = enemyHealth - playerAttack;
            
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
        //Check Enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        //Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
        playerHealth = playerHealth - enemyAttack;

        //Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //Check player's health
        if (playerHealth <=0 ) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left."); 
        }
    }
    else if (promptFight === "skip" || promptFight === "SKIP") {
        //Confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        //if yes subract 2 from playerMoney and create alert that informs player they're leaving the game.
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight. Goodbye!");    

            playerMoney = playerMoney -2;
        }
        //if no (false), ask question again by running fight() again
        else {
            fight()
        }
    }
    else {
        window.alert("You need to pick a valid option. Try again!");
    }
};

//Display player's score in alert

//After defeating an enemy ask if they want to visit the shop

//If so be presented with refilling health, upgrading attack, or leaving the store.
// START GAME FUNCTION
var startGame = function() {
    for(var i = 0; i < enemyNames.length; i++) {
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;

        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth = 50;

            fight(pickedEnemyName);
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //After loop ends, player is either out of health or enemies to fight
    endGame();
};

// END GAME FUNCTION
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney +".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    var playerAgainConfirm = window.confirm("Would you like to play again?");

    if (playerAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

startGame();