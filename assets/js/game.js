
//Game States
// "WIN" - Player robot has defeated all enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less


var fight = function(enemy) {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight === "fight" || promptFight === "FIGHT" ) {
            //Subtract the value of 'playerInfo.attack' from the value of 'enemy.health'
            var damage = randomNumber(playerInfo.attack -3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );
        //Check Enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
        }
        else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }

        //Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable
        var damage = randomNumber(enemy.attack -3, enemy.attack);
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        //Log a resulting message to the console so we know that it worked.
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        //Check player's health
        if (playerInfo.health <=0 ) {
            window.alert(playerInfo.name + " has died!");
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left."); 
        }
    }
    else if (promptFight === "skip" || promptFight === "SKIP") {
        //Confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        //if yes subract 2 from playerInfo.money and create alert that informs player they're leaving the game.
        if (confirmSkip) {
            window.alert(playerInfo.name + " has chosen to skip the fight. Goodbye!");    

            playerInfo.money = Math.max(0, playerInfo.money - 2);
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
    //Reset Player Stats

    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++) {
        playerInfo.health = 100;
        playerInfo.attack = 10;
        playerInfo.money = 10;

        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyObj = enemyInfo[i];

            pickedEnemyObj.health = randomNumber(40, 60);

            fight(pickedEnemyObj);

            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

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

    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money +".");
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
            playerInfo.refillHealth();
            break;
        
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
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
};

// Player Object
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >=7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;    
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};
console.log(playerInfo.name, playerInfo.attack, playerInfo.health);

// Enemy Object
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];


startGame();