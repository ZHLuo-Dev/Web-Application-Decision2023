let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = 1;  // 这里的 1 代表 "Monday"
let currentWeek = 1;
let isIntroShown = false;
let isMonthEnd = false;

function updateDay() {

    
    if (!isIntroShown) {
        document.getElementById('storyText').innerText = "You really like a cat, but you need to earn 2023 gold coins through work to afford it.";
        isIntroShown = true;
        return;
    }

    currentDay++;
    
    if (currentDay > 6) {
        currentDay = 0;
    }

    if (currentDay == 1) {
      
        currentWeek++;
    }
   
    let displayDay = `Week ${currentWeek} ${days[currentDay]}`;

    document.querySelector(".game-time").innerText = displayDay;
 
}

let iconhomeend = document.createElement('i');
iconhomeend.className = 'fa-solid fa-question-circle';
iconhomeend.style.fontSize = '16px';
iconhomeend.setAttribute('title', "Congrats! You've discovered a hidden truth of this story. While life whirls in tasks and goals, home is the real heart of this game.");

let iconregularend = document.createElement('i');
iconregularend.className = 'fa-solid fa-question-circle';
iconregularend.style.fontSize = '16px';
iconregularend.setAttribute('title', "Congratulations on reaching one of the endings! You are the master of balancing work, life, and wellness.");

  
function listLeft(){
    let displayLeftElement = document.querySelector('.game-time-t');
if (0 <= currentDay<=6 || somevalue === 0 ){
    displayLeftElement.textContent = 'Life Goes On';
}
if (somevalue === 20 ){
    displayLeftElement.textContent = 'A Call from Home';
}
if (currentDay === 30 && somevalue === 100 ){
    displayLeftElement.textContent = 'Hidden Finale';
    displayLeftElement.appendChild(iconhomeend);
}

if ((currentDay === 30 && somevalue === 30)||somevalue === 31){
    displayLeftElement.textContent = 'Monthly Treats';
}

if (currentDay === 32 ){
    displayLeftElement.textContent = 'Regular Finale';
    displayLeftElement.appendChild(iconregularend);
}

}