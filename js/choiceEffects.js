
let completedTasks = 0; 


function xPro() {
    let moodValue = parseFloat(document.querySelector(".progress-bar").getAttribute("aria-valuenow"));
    let energyValue = parseFloat($(".progress-bar").eq(1).attr("aria-valuenow"));
    let x =0;

    if (moodValue >= 70 ) {
        if (energyValue < 65 && energyValue>= 35) {
            x+=0.2; }
        else if (energyValue < 35) {
            x+=0.8;}
    }

    else if (moodValue < 70 && moodValue >= 60) {
        x+= 0.08; 
        if (energyValue < 65 && energyValue>= 35) {
            x+=0.2; }
        else if (energyValue < 35) {
            x+=0.8;}
    }

    else if (moodValue < 60 && moodValue >= 50) {
        x+= 0.15; 
        if (energyValue < 65 && energyValue>= 35) {
            x+=0.2;}
        else if (energyValue < 35) {
            x+=0.8;}}
  
    if(x>=1) {x=1;}
    return x;
}

function updateRemainingTasksAndBonus() {
    let multiplier = xPro(); 
    pro = parseInt($("#taskCount").text());
    adjustPro = pro * (1 - multiplier);
    adjustPro= Math.round(adjustPro);
    completedTasks += adjustPro;
    $("#completedTasks").text(completedTasks);
    let remainingTasks = 300 - completedTasks;
    $("#remainingTasks").text(remainingTasks);
     if (remainingTasks <= 0) {
         $("#remainingTasks").text("0");
    } else {
        $("#remainingTasks").text(remainingTasks);}

  // update estimate bonus 
    
  let bonus = (completedTasks / 300) * 700 - 700;
  if (bonus > 0) {
      $("#predictedBonus").text(bonus = Math.round(bonus));
      $("#predictedBonus").addClass("bonus-flash");
  } else {
      $("#predictedBonus").text("0");
      $("#predictedBonus").removeClass("bonus-flash");
  }
}
function changeCoins(delta) {
    let currentCoins = parseInt($("#coinCount").text());
    currentCoins += delta;
    $("#coinCount").text(currentCoins);
}


function applyChoiceEffect(choice, currentDay) {
    updateMoodIcon();
    updateEnergyIcon();

        if (currentDay >= 1 && currentDay <= 5) {
            switch (choice) {
                case 1: // Go to work
                    updateRemainingTasksAndBonus();
                    changeMood(-3);
                    changeEnergy(-2);
                    changeCoins(35);
                    updateTooltips();
                    break;
                case 2: // Skip work

                    changeMood(4);
                    changeEnergy(4);
                    skipWork(1);
                    updateTooltips();
                    break;
            }}
        else if (currentDay ==6) {
            switch (choice) {
                case 1: // Work overtime for a whole day!
                    updateRemainingTasksAndBonus();
                    changeMood(-8);
                    changeEnergy(-8);
                    changeCoins(65);
                    updateTooltips();
                    break;
                case 2: // Hang out and have fun (RIP my savings)

                    changeMood(20);
                    changeEnergy(-3);
                    changeCoins(-60);
                    updateTooltips();
                    break;
                case 3: // Dive into a day of fitness.

                    changeMood(3);
                    changeEnergy(-18);
                    increaseEnergyMax(10);
                    break;
                case 4: // Lazy Day: Just lay in bed.
                    sleep();
                    updateTooltips();
                    break;
                case 5: // Learning: Boost my work Skills.
                    wCount +=1;
                    wu();
                    updateTooltips();
                    break;
            }}
            
        else if (currentDay ==0) {
            switch (choice) {
                case 1: // Hang out and have fun (RIP my savings)
                    changeMood(20);
                    changeEnergy(-3);
                    changeCoins(-60);
                    updateTooltips();
                    break;
                case 2: // Dive into a day of fitness.

                    changeMood(3);
                    changeEnergy(-18);
                    increaseEnergyMax(10);
                    break;
                case 3: // Lazy Day: Just lay in bed.
                    sleep();
                    updateTooltips();
                    break;
                case 4: // Learning: Boost my work Skills.
                    wCount +=1;
                    wu();
                    updateTooltips();
                    break;
            }}
            updateStatusMessages();
            
            let moodValue = parseFloat(document.querySelector(".progress-bar").getAttribute("aria-valuenow"));
            if(moodValue <45){
                var docmodel = document.getElementById("doctor");
                docmodel.style.display = "block";
                updateStatusMessages();
                return;
              }
}





function changeEfficiency(delta) {
    let currentEfficiency = parseInt($("#taskCount").text());
    currentEfficiency += delta;
    if (currentEfficiency<0) {
        currentEfficiency=0;
    }
    $("#taskCount").text(currentEfficiency);
}

