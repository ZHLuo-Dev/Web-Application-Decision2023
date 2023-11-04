
let moodMax = 100; // 初始心情上限为100%
let moodMin =0;

function changeMood(value) {
    let moodValue = parseFloat($(".progress-bar").eq(0).attr("aria-valuenow"));
    moodValue += value;
    
    if (moodValue > moodMax) {
        moodValue = moodMax;
    }
    else if (moodValue < moodMin) {
        moodValue = moodMin;
    }
    
    // update
    $(".progress-bar").eq(0).attr("aria-valuenow", moodValue);
    updateMoodIcon();
}

$(document).ready(function() {
    updateMoodIcon();  // beginning 
});


function increaseMoodMax(value) {
    moodMax += value;
}

function moodDefault(){
    $(".progress-bar").eq(0).attr("aria-valuenow", 100);
    updateMoodIcon();
}

function moodDoc(){
    $(".progress-bar").eq(0).attr("aria-valuenow", 65);
    updateMoodIcon();
}
