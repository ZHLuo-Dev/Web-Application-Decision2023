let energyMax = 100; // 初始能量上限为100%

function changeEnergy(value) {
    let energyValue = parseFloat($(".progress-bar").eq(1).attr("aria-valuenow"));
    energyValue += value;
    
    if (energyValue > energyMax) {
        energyValue = energyMax;
    }
    
    // 更新DOM
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