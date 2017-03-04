var audio = new Audio('/sounds/engine.mp3');
// audio.volume = 0.4;





//HTML Variables
//DATA DIV
var shieldTitle = $("#shieldTitle");
var topLeftBox = $("#topLeftBox"); 
var topLeftHook = $("#topLeftHook"); 
var leftHookMiniBox = $("#leftHookMiniBox");
var topShortBox = $("#topShortBox");
var topLongBox = $("#topLongBox");
var topFinalBox = $("#topFinalBox");
//GAME DIV
var botFinalBox =$("#botFinalBox");
var botLongBox = $("#botLongBox");
var thinBox = $("#thinBox"); 
var midHookMiniBox = $("#midHookMiniBox"); 
var midHook = $("#midHook"); 
var midLeftBox = $("#midLeftBox"); 
var midLeftBoxSm = $("#midLeftBoxSm"); 
var botLeftBox = $("#botLeftBox"); 

//Data Outputs
var firstLine = $("#firstLine"); 
var secondLine = $("#secondLine"); 
var thirdLine = $("#thirdLine"); 
var fourthLine = $("#fourthLine"); 
var fifthLine = $("#fifthLine"); 
var sixthLine = $("#sixthLine"); 
var seventhLine = $("#seventhLine"); 





//Startup
//first
topLeftBox.animate({
    opacity: '1'
    
},1000);
botLeftBox.animate({
    opacity: '1'
    
},1000);
//second
topLeftHook.delay(300).animate({
    opacity: '1'
},1000);

midLeftBoxSm.delay(300).animate({
    opacity: '1'
},1000);
//third
midLeftBox.delay(800).animate({
    opacity: '1'
},1000);
midHook.delay(800).animate({
    opacity: '1'
},1000);
//fourth
leftHookMiniBox.delay(900).animate({
    opacity: '1'
},1000);
midHookMiniBox.delay(900).animate({
    opacity: '1'
},1000);
//fifth
topShortBox.delay(1000).animate({
    opacity: '1'
},1000);
thinBox.delay(1000).animate({
    opacity: '1'
},1000);
//sixth
topShortBox.delay(1200).animate({
    opacity: '1'
},1000);
thinBox.delay(1200).animate({
    opacity: '1'
},1000);
//seventh
topLongBox.delay(1400).animate({
    opacity: '1'
},1000);
botLongBox.delay(1400).animate({
    opacity: '1'
},1000);
//eighth
topFinalBox.delay(1600).animate({
    opacity: '1'
},1000);
botFinalBox.delay(1600).animate({
    opacity: '1'
},1000);


//title
shieldTitle.delay(2000).animate({
    opacity: '1'
},2000);

//Data Output Random fade in
firstLine.delay(4200).animate({
    opacity: '1'
},200);
secondLine.delay(4300).animate({
    opacity: '1'
},200);
thirdLine.delay(4400).animate({
    opacity: '1'
},200);
fourthLine.delay(4500).animate({
    opacity: '1'
},200);
fifthLine.delay(4600).animate({
    opacity: '1'
},200);
sixthLine.delay(4700).animate({
    opacity: '1'
},200);
seventhLine.delay(4800).animate({
    opacity: '1'
},200);

audio.delay(4800).play();
