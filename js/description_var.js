const weekdayDescriptions = [
    "Today is the first workday of the week. What's your move?",
    "Today is the second workday of the week. What's your move?",
    "Today is the third workday of the week. What's your move?",
    "Today is the fourth workday day of the week. What's your move?",
    "Today is the last required working day of the week. What's your move?"
];

const weekendDescriptions = [
    "Today is the first day of the weekend. What's your move?",
    "Today is the <strong>LAST</strong> day of the weekend. What's your move?"
];
function updateDescription() {
    if (currentDay === 0) {  // 周日
        block();
        let descriptionText;
        descriptionText = weekendDescriptions[1];
        typeWriterEffect('storyText', descriptionText, showOptions,'sunday');
    } else if (currentDay === 6) {  // 周六
        block();
        descriptionText= weekendDescriptions[0];
        typeWriterEffect('storyText', descriptionText, showOptions,'saturday');
    } else {  // 工作日
        block();
        descriptionText= weekdayDescriptions[currentDay - 1];
        typeWriterEffect('storyText', descriptionText,  showOptions,'weekday');
    }
    

}

function block(){

    document.getElementById("monthEndChoices").style.display = "none";
        document.getElementById("weekdayOptions").style.display = "none";
        document.getElementById("saturdayOptions").style.display = "none";
        document.getElementById("sundayOptions").style.display = "none";
        document.getElementById("initOption").style.display = "none";
        document.getElementById("normalEnd").style.display = "none";
        document.getElementById("monthEndChoices").style.display = "none";
        document.getElementById("phonecall1").style.display = "none";
        document.getElementById("phonecall2").style.display = "none";
        document.getElementById("phonecallEnd").style.display = "none";

}