

function gameEndModel() {
    

    let coinsEnd = parseInt(document.getElementById("coinCount").textContent);
    let messageElement = document.getElementById('storyText');

  
    document.getElementById("monthEndChoices").style.display = "none";
    document.getElementById("weekdayOptions").style.display = "none";
    document.getElementById("saturdayOptions").style.display = "none";
    document.getElementById("sundayOptions").style.display = "none";
    document.getElementById("initOption").style.display = "none";
    document.getElementById("normalEnd").style.display = "block";
    
    if (coinsEnd >= 2023 ) {

        messageElement.innerHTML = "Congratulations! Victory is sweet, and so is the purring of your new feline friend! With"+ coinsEnd +"gold coins in your pocket, you've earned enough to welcome your dream cat into a new home.";
        document.getElementById('restartGame()').style.display = 'block'; 
 
    }
    else {
        
        messageElement.innerHTML= "You pat your pockets only to find them lighter than needed.<span style='font-size:24px;'>😿</span>Game Over<span style='font-size:24px;'>😿</span><br><br><br><br>Our greatest glory is not in never falling, but in rising every time we fall. &mdash; Confucius";
        document.getElementById('restartGame()').style.display = 'block'; 
    }
}

