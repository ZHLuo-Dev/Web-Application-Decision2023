

function level(){
    let wLevel=0;
    if (wCount===0){
        wLevel =0;}
    else if (wCount === 1 || wCount === 2){
        wLevel =1;}   
    else if (wCount === 3 || wCount === 4){
        wLevel =2;}
    else if (wCount === 5){
        wLevel =3;}
    else if(wCount === 6){
        wLevel =4;}
    else if (wCount >6){
        wLevel =5;}
    return wLevel;
}


function wu(){
    let currentlevel = level();
    if (currentlevel===0){
        changeMood(-6);
        changeEnergy(-8);
        changeEfficiency(2);
    }

    else if (currentlevel===1){
        changeEnergy(-8);
        changeEfficiency(2);
    }
    else if (currentlevel===2){
        changeMood(+6);
        increaseMoodMax(3);
        changeEnergy(-8);
        changeEfficiency(2);
    }
    else if (currentlevel===3){
        changeMood(+6);
        increaseMoodMax(3);
        changeEnergy(-8);
        changeEfficiency(3);
    }
    else if (currentlevel===4){
        PPD = 1;
        changeMood(+6);
        increaseMoodMax(3);
        changeEnergy(-8);
        changeEfficiency(3);
    }
    else if (currentlevel===5){
        changeMood(+6);
        increaseMoodMax(3);
        changeEnergy(-20);
        changeEfficiency(5);
    }
}
function sleep(){
    if (PPD===0){
        changeMood(6);
        changeEnergy(45);
        changeEfficiency(-1); 
    }
    else if (PPD===1){
        changeMood(6);
        changeEnergy(45);
    }
}

