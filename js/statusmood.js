



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
    icona.setAttribute('title', 'Energy_Max Increased by '+ e +' %.');

    let m = moodMax-100;
    let iconb = document.createElement('i');
    iconb.className = 'fa-solid fa-question-circle';
    iconb.setAttribute('title', 'Mood_Max Increased by '+ m +' %.');



    let moodValue = parseFloat(document.querySelector(".progress-bar").getAttribute("aria-valuenow"));
    let moodbr = document.createElement('div');
    if (moodValue < 70 && moodValue >= 60) {
        moodbr.innerText  = "Stressful";
        moodbr.appendChild(icon10);
    } else if (moodValue < 60 && moodValue >= 45) {
        moodbr.innerText  ="Anxiety";
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


    let ey = document.createElement('div');
    if (moodMax>100){
        ey.innerText  ="Optimistic";
        ey.appendChild(iconb);
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

  
    let iconw1 = document.createElement('i');
    iconw1.className = 'fa-solid fa-question-circle';
    iconw1.setAttribute('title', 'Additional Buff Reward from Enlightenment I: Learning will no longer consume your Mood value.');
    let iconw2 = document.createElement('i');
    iconw2.className = 'fa-solid fa-question-circle';
    iconw2.setAttribute('title', 'Additional Buff Reward from Enlightenment II: Learning will boost Mood by 6 and rais Mood_Max by 2%.');

    let iconw3 = document.createElement('i');
    iconw3.className = 'fa-solid fa-question-circle';
    iconw3.setAttribute('title', 'Additional Buff Reward from Enlightenment III: Learning will boost Mood by 6, raise Mood_Max by 2%, and award you one more Productivity point.');

    let iconw4 = document.createElement('i');
    iconw4.className = 'fa-solid fa-question-circle';
    iconw4.setAttribute('title', 'Additional Buff Reward from Enlightenment IV: Learning will boost Mood by 6, raise Mood_Max by 2%, and award you one more Productivity point. You will not lose Productivity point on "Lazy Day".');

    let iconw5 = document.createElement('i');
    iconw5.className = 'fa-solid fa-question-circle';
    iconw5.setAttribute('title', 'Additional Buff Reward from Enlightenment V: Learning will boost Mood by 6, raise Mood_Max by 2%, and award you 3 more Productivity points but it will cost 12 more Energy. You will not lose Productivity on "Lazy Day".');


    level_wu = level();
    let wubr = document.createElement('div');
    if (level_wu===1){
        wubr.innerText  = "悟 I";
        wubr.appendChild(iconw1);
    }
    else if (level_wu===2){
        wubr.innerText  = "悟 II";
        wubr.appendChild(iconw2);
    }
    else if (level_wu===3){
        wubr.innerText  = "悟 III";
        wubr.appendChild(iconw3);
    }
    else if (level_wu===4){
        wubr.innerText  = "悟 IV";
        wubr.appendChild(iconw4);
    }
    else if (level_wu===5){
        wubr.innerText  = "悟 V";
        wubr.appendChild(iconw5);
    }
    statusContainer.appendChild(document.createElement('br')); 
    statusContainer.appendChild(wubr);   
} 
