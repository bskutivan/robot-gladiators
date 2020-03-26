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
            var damage = randomNumber(playerAttack -3, playerAttack);
            enemyHealth = Math.max(0, enemyHealth - damage);
            
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
        var damage = randomNumber(enemyAttack -3, enemyAttack);
        playerHealth = Math.max(0, playerHealth - damage);

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

            playerMoney = Math.max(0, playerMoney - 2);
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


//After defeating an enemy ask if they want to visit the shop

// START GAME FUNCTION
var startGame = function() {
    for(var i = 0; i < enemyNames.length; i++) {
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;

        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyName = enemyNames[i];

            enemyHealth = randomNumber(40, 60);

            fight(pickedEnemyName);

            if (playerHealth > 0 && i < enemyNames.length - 1) {

                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                if (storeConfirm) {
                    shop();

                }
            }
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
    //Display player's score in alert

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

var shop = function() {
    //ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }

            break;
        
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 dollars.");
            
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;
        
        case "LEAVE":    
        case "leave":
            window.alert("Leaving the store.");
            
            break;

        default:
            window.alert("You did not pick a valid option. Try again.");
            
            shop();
            break;
    }
};

// function to generate a random numeric value

var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

startGame();