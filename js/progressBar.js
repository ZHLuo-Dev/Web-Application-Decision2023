function setProgressBarValue(barClass, percentage) {
    const progressBarFill = document.querySelector(barClass);
    progressBarFill.style.width = percentage + "%";
}

// 示例用法
setProgressBarValue('.mood-fill', 50);   // 设置心情进度条为50%
setProgressBarValue('.energy-fill', 80); // 设置能量进度条为80%
