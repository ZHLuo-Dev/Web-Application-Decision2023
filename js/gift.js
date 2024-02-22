function giftModel() {
    block();
    let descriptionText;
    descriptionText = "A sudden ring pulls you from your daydreaem — you recognize the familiar number flashing on your screen. It's your parents. You picked up, they shared how much they've missed you. \"You've been working abroad for a while,\" they say, \"Do you have a time to come home lately?\"";
    typeWriterEffect('storyText', descriptionText, showOptions,'phonecall1');       
}



function yes1() {
    listLeft();
    block();
    let descriptionText;
    descriptionText= "With the recent surge in COVID-19 cases, you're surprised to see that the flight prices have jumped to <span class='bonus-flash'>650</span> gold coins. Are you sure you still want to buy a flight ticket?";
    updateTooltips();
    typeWriterEffect('storyText', descriptionText, showOptions,'phonecall2');    
    somevalue=100;
    gtag('event', 'home_0', {
        'event_category': 'home', 
        'event_label': 'considering',
        'value': 0 
    });
}
let yesyes = 0;

function yes2() {
    listLeft();
    block();
    changeCoins(-650);
    energyDefault();
    moodDefault();
    updateStatusMessages();
    yesyes=1;
    let descriptionText;
    descriptionText= "<span style='font-size:21px;'>👪</span> Embracing your parents, you feel a warmth that money can't buy.<br><span style='font-size:21px;'>😊😊</span>Your parents are overjoyed, their smiles wide and welcoming.<br><br><span style='font-size:21px;'>😸</span> A fortuitous encounter was written in the stars,fate presents you with a surprise — you notices a cat that looks just like the one you've been longing to buy. As you gently scoop it into your arms, you realize some of the best things in life come unexpectedly.";
    typeWriterEffect('storyText', descriptionText, showOptions,'phonecallEnd');    
    gtag('event', 'home_1', {
        'event_category': 'home', 
        'event_label': 'end 2',
        'value': 1 
    });


}



