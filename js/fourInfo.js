function updateTooltips() {
    // For the coins
    let coinElement = document.getElementById("coinCount");
    let coinTooltip = document.getElementById("coinTooltip");
    let currentGold = parseInt(coinElement.textContent);
    let goal = 2023;
    let difference = goal - currentGold;
    let coinTooltipMessage = `Now you have ${currentGold} gold coins. You're ${difference} coins away from 2023. Keep it up!`;
    coinTooltip.setAttribute("title", coinTooltipMessage);
    coinElement.setAttribute("title", "");



    // For the tasks
    let taskTooltip = document.getElementById("taskTooltip");
    let taskElement = document.getElementById("taskCount");
    let tasknum = parseInt(taskElement.textContent);
    let taskTooltipMessage = `Now you can complete ${tasknum} tasks daily. Think you can do better? The more you complete, the bigger your bonus at month's end!`;
    taskTooltip.setAttribute("title", taskTooltipMessage);
}


