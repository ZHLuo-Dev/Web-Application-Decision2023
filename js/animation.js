
function triggerAnimation() {
    let messageElement = document.getElementById('storyText');
    messageElement.classList.remove('text-container span '); // 移除动画类以重置动画
    void messageElement.offsetWidth; // 触发重排
    messageElement.classList.add('text-container span '); // 再次添加动画类以触发动画
}

function typeWriterEffect(elementId, text,callback,callbackArg) {
    let element = document.getElementById(elementId);
    element.innerHTML = '';

    let charIndex = 0;
    let fullText = ''; 

    function typeChar() {
        if (charIndex < text.length) {
            let currentChar = text[charIndex];
            fullText += currentChar;
            
            
            fullText = fullText.replace('😼', "<span style='font-size:22px;'>😼</span>")
                               .replace('2023', "<span class='yellow-flash'>2023</span>")
                              

            element.innerHTML = fullText;

            charIndex++;
            setTimeout(typeChar, 8);} 
            
       
            else {
                
                if (callback) {
                    callback(callbackArg); 
                }
            }
    }

   
    typeChar();
   
}


function typeWriterEffect2(elementId, text,callback,callbackArg) {
    let element = document.getElementById(elementId);
    element.innerHTML = '';

    let charIndex = 0;
    let fullText = ''; 

    function typeChar() {
        if (charIndex < text.length) {
            let currentChar = text[charIndex];
            fullText += currentChar;
            
            fullText = fullText.replace('😼', "<span style='font-size:22px;'>😼</span>")
                               .replace('2023', "<span class='yellow-flash'>2023</span>")
                               .replace(fine, `<span class='colorFine'>${fine}</span>`);                               

            element.innerHTML = fullText;

            charIndex++;
            setTimeout(typeChar, 2);} 
            
            else {
                if (callback) {
                    callback(callbackArg); }}}

    typeChar();
   
}
function typeWriterEffect3(elementId, text,callback,callbackArg) {
    let element = document.getElementById(elementId);
    element.innerHTML = '';

    let charIndex = 0;
    let fullText = ''; 

    function typeChar() {
        if (charIndex < text.length) {
            let currentChar = text[charIndex];
            fullText += currentChar;
            
            fullText = fullText.replace('😼', "<span style='font-size:22px;'>😼</span>")
                               .replace('2023', "<span class='yellow-flash'>2023</span>")
                               .replace(BonusHere, `<span class='colorBonus'>${BonusHere}</span>`);

            element.innerHTML = fullText;

            charIndex++;
            setTimeout(typeChar, 2);} 
            
            else {
                if (callback) {
                    callback(callbackArg); }}}

    typeChar();
   
}
