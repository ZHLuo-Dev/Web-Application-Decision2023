

function showMonthEndModal() {

    let remainingTasks = parseInt(document.getElementById("remainingTasks").textContent);
    let predictedBonus = parseInt(document.getElementById("predictedBonus").textContent);
    listLeft();
    if (predictedBonus === 0 && remainingTasks !== 0) {
        block();
        let descriptionText;
        fine= -(remainingTasks/300 * 700);
        fine = Math.round(fine);
        descriptionText = "Time flies! It's been a tough month. Due to some tasks you left behind, you're facing a penalty of " + fine +" .";
        typeWriterEffect2('storyText', descriptionText, showOptions,'monthEndAccept');       
        adjustCoins(fine);  // Deduct the penalty
        changeMood(-4);
        changeEnergy(-2);
        updateTooltips();
    } else if (predictedBonus === 0 && remainingTasks === 0) {
        let descriptionText;
        descriptionText = "Wow, a month already? You nailed it by completing your tasks just right. Nice going!";
        typeWriterEffect('storyText', descriptionText, showOptions,'monthEndThanks');   
        changeMood(+2);
        changeEnergy(+1);

    } else if (predictedBonus > 0) {
        let descriptionText;
        BonusHere = Math.round(predictedBonus);
        descriptionText = "A month in the blink of an eye! Your hard work paid off, here's your well-earned bonus of " + BonusHere + " !";
        typeWriterEffect3('storyText', descriptionText, showOptions,'monthEndAwesome'); 
        adjustCoins(predictedBonus);  // Add the bonus
        changeMood(+4);
        changeEnergy(+2);
        updateTooltips();
    }
}

function adjustCoins(amount) {
    // Adjust the player's coins by the provided amount
    let currentCoins = parseInt(document.getElementById("coinCount").textContent);
    currentCoins += amount;
    document.getElementById("coinCount").textContent = currentCoins;
}


function proceedToNextMonth() {

     completedTasks=0;

    document.getElementById("completedTasks").textContent = "0";
    document.getElementById("remainingTasks").textContent = "300";
    document.getElementById("predictedBonus").textContent = "0";

    currentDay = 0;
    somevalue =0;
}

function proceedToNextMonthEnd() {
    // Hide the month end modal
     completedTasks=0;
    
    // Reset the values on the left panel

    document.getElementById("completedTasks").textContent = "0";
    document.getElementById("remainingTasks").textContent = "300";
    document.getElementById("predictedBonus").textContent = "0";
    // Logic to move to the next day (i.e., the first day of the next month)
    currentDay = 32;
    somevalue =0;
    // This will refresh the day shown on the screen
}
