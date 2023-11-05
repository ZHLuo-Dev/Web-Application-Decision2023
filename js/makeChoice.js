countSkip=0;
let wCount=0;
let PPD =0;
function skipWork(delta){
    countSkip +=delta;
}

function seeDoc(){
    changeCoins(-200); 
    moodDoc();
    var docmodel = document.getElementById("doctor");
    var docmodel2 = document.getElementById("doctor2");
    docmodel.style.display = "none";
    docmodel2.style.display = "block";
}

function seeDoc2(){
    var docmodel = document.getElementById("doctor");
    var docmodel2 = document.getElementById("doctor2");
    docmodel.style.display = "none";
    docmodel2.style.display = "none";
}

let somevalue = 0;
function makeChoice(option) {
    let randomV = Math.random();
    
    if(countSkip==3){
        var skipmodal = document.getElementById("skipover");
        skipmodal.style.display = "block";
      }
    if(somevalue === 20 && randomV>0.5){
        applyChoiceEffect(option, currentDay);
        listLeft();
        giftModel();
        document.getElementById("monthEndChoices").style.display = "none";
        document.getElementById("weekdayOptions").style.display = "none";
        document.getElementById("saturdayOptions").style.display = "none";
        document.getElementById("sundayOptions").style.display = "none";
        document.getElementById("initOption").style.display = "none";
        document.getElementById("normalEnd").style.display = "none";
        document.getElementById("monthEndChoices").style.display = "none";
        currentDay = 30;
        return;}
    if(somevalue === 20 && randomV<=0.5){
        currentDay = 30;
    }
    if (currentDay === 30) {
        somevalue= 30;
        showMonthEndModal();
        // Hide all other options
        document.getElementById("initOption").style.display = "none";
        document.getElementById("weekdayOptions").style.display = "none";
        document.getElementById("saturdayOptions").style.display = "none";
        document.getElementById("sundayOptions").style.display = "none";
        document.getElementById("normalEnd").style.display = "none";
        document.getElementById("phonecall1").style.display = "none";
        document.getElementById("phonecall2").style.display = "none";
        document.getElementById("phonecallEnd").style.display = "none";
        
        proceedToNextMonth();
        
        return;  
    }

    if (somevalue === 31) {
        applyChoiceEffect(option, currentDay);
        listLeft();
        showMonthEndModal();
        // Hide all other options
        document.getElementById("initOption").style.display = "none";
        document.getElementById("weekdayOptions").style.display = "none";
        document.getElementById("saturdayOptions").style.display = "none";
        document.getElementById("sundayOptions").style.display = "none";
        document.getElementById("normalEnd").style.display = "none";
        document.getElementById("phonecall1").style.display = "none";
        document.getElementById("phonecall2").style.display = "none";
        document.getElementById("phonecallEnd").style.display = "none";
        
        proceedToNextMonthEnd();
        
        return;
    }

    if (currentDay === 32) {
        listLeft();
        gameEndModel();
        document.getElementById("initOption").style.display = "none";
        document.getElementById("weekdayOptions").style.display = "none";
        document.getElementById("saturdayOptions").style.display = "none";
        document.getElementById("sundayOptions").style.display = "none";
        document.getElementById("monthEndChoices").style.display = "none";
        ocument.getElementById("phonecallEnd").style.display = "none";
        document.getElementById("phonecall1").style.display = "none";
        document.getElementById("phonecall2").style.display = "none";
    }
  
    if(somevalue===0){
        listLeft();
    if (option === 'init') {
        document.getElementById('initOption').style.display = 'none';
        document.getElementById('weekdayOptions').style.display = 'none';
        isIntroShown = true;
        updateStatusMessages()
        updateDescription();
        return;
    }

    applyChoiceEffect(option, currentDay);

    updateDay();
    updateDescription();
    listLeft();

    if (currentWeek === 4 && currentDay === 0){
        somevalue = 20;
    }  

    if (currentWeek === 8 && currentDay === 0){
        somevalue = 31;
    } }


 
}
function showOptions(dayType) {
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
        if (dayType === 'initOption') {
            document.getElementById('initOption').style.display = 'block';}
        if (dayType === 'normalEnd') {
            document.getElementById('normalEnd').style.display = 'block';
        } else if (dayType === 'phonecall1') {
            document.getElementById('phonecall1').style.display = 'block';
        } else if (dayType === 'phonecall2') {
            document.getElementById('phonecall2').style.display = 'block';
        }
         else if (dayType === 'phonecallEnd') {
        document.getElementById('phonecallEnd').style.display = 'block';
        } 
        
        else if (dayType === 'monthEndAccept') {
            document.getElementById('monthEndChoices').style.display = 'block';
            document.querySelector('button[onclick="makeChoice(\'monthEndAccept\')"]').style.display = 'block';
            document.querySelector('button[onclick="makeChoice(\'monthEndThanks\')"]').style.display = 'none';
            document.querySelector('button[onclick="makeChoice(\'monthEndAwesome\')"]').style.display = 'none';}
        else if (dayType === 'monthEndThanks') {
            document.getElementById('monthEndChoices').style.display = 'block';
            document.querySelector('button[onclick="makeChoice(\'monthEndAccept\')"]').style.display = 'none';
            document.querySelector('button[onclick="makeChoice(\'monthEndThanks\')"]').style.display = 'block';
            document.querySelector('button[onclick="makeChoice(\'monthEndAwesome\')"]').style.display = 'none';}     
            
        else if (dayType === 'monthEndAwesome') {
            document.getElementById('monthEndChoices').style.display = 'block';
            document.querySelector('button[onclick="makeChoice(\'monthEndAccept\')"]').style.display = 'none';
            document.querySelector('button[onclick="makeChoice(\'monthEndThanks\')"]').style.display = 'none';
            document.querySelector('button[onclick="makeChoice(\'monthEndAwesome\')"]').style.display = 'block';}
      


    else if (dayType === 'weekday') {
        document.getElementById('weekdayOptions').style.display = 'block';
    } else if (dayType === 'saturday') {
        document.getElementById('saturdayOptions').style.display = 'block';
    } else if (dayType === 'sunday') {
        document.getElementById('sundayOptions').style.display = 'block';
    }
}
