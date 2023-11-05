$(document).ready(function() {
    updateMoodIcon();
    updateEnergyIcon();
});

function updateMoodIcon() {
    const moodValue = parseFloat($(".progress-bar").eq(0).attr("aria-valuenow"));

    $(".icon-style.fa-regular").hide(); 

    if (moodValue >= 70) {
        $('.fa-face-smile').show();
    } else if (moodValue >= 60) {
        $('.fa-face-grimace').show();
    } else if (moodValue >= 45) {
        $('.fa-face-frown').show();
    } else {
        $('.fa-face-dizzy').show();
    }
    $(".mood-progress").css("width", moodValue + "%").text(moodValue + "%");
}

function updateEnergyIcon() {
    const energyValue = parseFloat($(".progress-bar").eq(1).attr("aria-valuenow"));

    $(".icon-style.fa-solid").hide(); 

    if (energyValue >= 65) {
        $('.fa-battery-full').show();
    } else if (energyValue >= 35) {
        $('.fa-battery-half').show();
    } else {
        $('.fa-battery-quarter').show();
    }
    $(".energy-progress").css("width", energyValue + "%").text(energyValue + "%");
}
