



function updateStatusMessages() {
    let statusContainer = document.getElementById("statusMessages");
    statusContainer.innerHTML = "<span style='font-size:17.5px;'>Status:</span>";



    statusContainer.appendChild(document.createElement('br')); 


    let icon10 = document.createElement('i');
    icon10.className = 'fa-solid fa-question-circle';
    icon10.setAttribute('title', 'Real Productivity Debuff: -10%');

    let icon20 = document.createElement('i');
    icon20.className = 'fa-solid fa-question-circle';
    icon20.setAttribute('title', 'Real Productivity Debuff: -20%');

    let icon25 = document.createElement('i');
    icon25.className = 'fa-solid fa-question-circle';
    icon25.setAttribute('title', 'Real Productivity Debuff: -25%');

    let icon100 = document.createElement('i');
    icon100.className = 'fa-solid fa-question-circle';
    icon100.setAttribute('title', 'Real Productivity Debuff: -90%');

    let e = energyMax-100;
    let icona = document.createElement('i');
    icona.className = 'fa-solid fa-question-circle';
    icona.setAttribute('title', 'Energy Cap Increased by '+ e +' %.');

    let m = moodMax-100;
    let iconb = document.createElement('i');
    icona.className = 'fa-solid fa-question-circle';
    icona.setAttribute('title', 'Mood Cap Increased by '+ e +' %.');



    let moodValue = parseFloat(document.querySelector(".progress-bar").getAttribute("aria-valuenow"));
    let moodbr = document.createElement('div');
    if (moodValue < 70 && moodValue >= 60) {
        moodbr.innerText  = "Stressful ";
        moodbr.appendChild(icon10);
    } else if (moodValue < 60 && moodValue >= 45) {
        moodbr.innerText  ="Feeling low";
        moodbr.appendChild(icon20);
        
    } 
    statusContainer.appendChild(document.createElement('br')); 
    statusContainer.appendChild(moodbr);


    let ex = document.createElement('div');
    if (energyMax>100){
        ex.innerText  ="Vitalized";
        ex.appendChild(icona);
    statusContainer.appendChild(document.createElement('br')); 
    statusContainer.appendChild(ex);
    }

    let energyValue = parseFloat($(".progress-bar").eq(1).attr("aria-valuenow"));
    let energybr = document.createElement('div');
    if (energyValue < 65 && energyValue>= 35) {
        energybr.innerText = "Tired";
        energybr.appendChild(icon25);}
        if (energyValue < 35) {
      energybr.innerText = "Exhausted";
      energybr.appendChild(icon100);}
    statusContainer.appendChild(document.createElement('br')); 
    statusContainer.appendChild(energybr);   
} 


