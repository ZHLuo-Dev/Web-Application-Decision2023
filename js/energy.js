let energyMax = 100; 
let energyMin =0;

function changeEnergy(value) {
    let energyValue = parseFloat($(".progress-bar").eq(1).attr("aria-valuenow"));
    energyValue += value;
    
    if (energyValue > energyMax) {
        energyValue = energyMax;
    }
    else if (energyValue < energyMin) {
        energyValue = energyMin;
    }
    
    
    $(".progress-bar").eq(1).attr("aria-valuenow", energyValue);
    updateEnergyIcon();
}

function increaseEnergyMax(value) {
    energyMax += value;
}


function energyDefault(){
    $(".progress-bar").eq(1).attr("aria-valuenow", 100);
    updateEnergyIcon();
}