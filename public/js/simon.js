//    ===========Sound Variables==============
var voyagerBridge = new Audio("/sounds/voyagerBridge.mp3");
var redAlertSound = new Audio("/sounds/redAlert4.mp3");
var computerActivate = new Audio("/sounds/computerActivate.mp3");
var computerWork = new Audio("/sounds/computerWork.mp3");
var computerScroll = new Audio("/sounds/computerScroll.mp3");
var computerPowerup = new Audio("/sounds/computerPowerup.mp3");
var computerPowerup2 = new Audio("/sounds/computerPowerup2.mp3");
var computerDamage = new Audio("/sounds/computerDamage.mp3");
var alert = new Audio("/sounds/alert.mp3");
//Sound Volume
computerDamage.volume = 0.1;


// ============HTML Variables=================
//DATA DIV
var shieldTitle = $("#shieldTitle");
var topLeftBox = $("#topLeftBox"); 
var leftHookMiniBox = $("#leftHookMiniBox");
var topShortBox = $("#topShortBox");
var topLongBox = $("#topLongBox");
var topFinalBox = $("#topFinalBox");

//GAME DIV
var botFinalBox =$("#botFinalBox");
var botLongBox = $("#botLongBox");
var thinBox = $("#thinBox"); 
var midHookMiniBox = $("#midHookMiniBox"); 
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

//Voyager and shields
var voyager = $("#voyager"); 
var shields = $("#voyagerShields"); 
var indicatorTop = $("#indicatorTop");
var indicatorBottom = $("#indicatorBottom");
var indicatorRight = $("#indicatorRight");
var indicatorLeft = $("#indicatorLeft");

//readyPrompt
var readyPrompt = $("#promptReady");
var readyYes = $("#readyYes");
var purple = $(".purple");
var mustard = $(".mustard");
var pink = $(".pink");
var brown = $(".brown");

//hooks
var topLeftHook = $("#topLeftHook"); 
var topLeftHookRed = $("#topLeftHookRed"); 
var topLeftHookWhite = $("#topLeftHookWhite"); 
var midHook = $("#midHook"); 
var midHookRed = $("#midHookRed"); 
var midHookWhite = $("#midHookWhite"); 
var midHookClass = $(".midHook");
var topLeftHookClass = $(".topLeftHook");






// =======================GAME LOGIC========================
var quadrantArray = [];
var userInputArray = [];
var userCount = 0;
function game() {
    nextRound();
    animateShieldLoop();
    usercount = 0;
    userInputArray = [];
}

//Adds new number to quadrantArray
function nextRound() {
    var quadrant = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    quadrantArray.push(quadrant);
}
//Animates each of the shield indicators
var i = 0;
function animateShieldLoop() {
    animateShield();
    setTimeout(function() {
        i += 1;

        if (i <= quadrantArray.length) {
            animateShieldLoop();
        }
    }, 700);
}
//Calls on animations of shields
function animateShield() {
    
    if (quadrantArray[i] == 1) {
        alert.play();
        indicatorTopDisplay();
        console.log("1");
    }else if (quadrantArray[i] == 2) {
        alert.play();
        indicatorRightDisplay();
        console.log("2");
    }else if (quadrantArray[i] == 3) {
        alert.play();
        indicatorBottomDisplay();
        console.log("3");
    }else if (quadrantArray[i] == 4) {
        alert.play();
        indicatorLeftDisplay();
        console.log("4");
    }
}

//takes input of user and checks it
$(document).keyup(function(event){
    var keycode = event.keyCode;
    if (keycode == 38) {                //Up key
        userInputArray.push(1);
        checkInput();
    }else if (keycode == 40) {          //Down Key
        userInputArray.push(3);
        checkInput();
    }else if (keycode == 37) {          //Left Key
        userInputArray.push(4);
        checkInput();
    }else if (keycode == 39) {          //Right Key
        userInputArray.push(2);
        checkInput();
    }
    console.log(userInputArray);
});

//checks user input
function checkInput() {
    if (userInputArray[userCount] = quadrantArray[userCount]) {
        console.log("Correct");
        userCount += 1;
        if (userCount == quadrantArray.length) {
            console.log(userInputArray);
            console.log("Redo");
            game();
        }
    }else {
        fail();
    }

    
}

function fail() {
    console.log("fail");
}




// ==========================REACTIVE ANIMATIONS========================
var isFirst = false;
function redAlert() {
    //Set All Red
    purple.css({background: 'red'});
    mustard.css({background: 'red'});
    pink.css({background: 'red'});
    brown.css({background: 'red'});
    topLeftHookClass.css({
        opacity: '1'
    });
    midHookClass.css({
        opacity: '1'
    });
    //Done like this to load all hook images at page load to prevent style clipping as color changes first sequence
    midHook.hide();
    midHookRed.show();
    topLeftHook.hide();
    topLeftHookRed.show();

    //White Snake effect
    setTimeout(function() { 
        botLeftBox.css({background: 'white'});
    }, 200);
    setTimeout(function() { 
        botLeftBox.css({background: 'red'});
    }, 400);
    setTimeout(function() { 
        midLeftBoxSm.css({background: 'white'});
    }, 400);
    setTimeout(function() { 
        midLeftBoxSm.css({background: 'red'});
    }, 600);
    setTimeout(function() { 
        midLeftBox.css({background: 'white'});
    }, 600);
    setTimeout(function() { 
        midLeftBox.css({background: 'red'});
    }, 800);
    setTimeout(function() { 
        midHookRed.hide();
        midHookWhite.show();
    }, 800);
    setTimeout(function() { 
        midHookWhite.hide();
        midHookRed.show();
    }, 1000);
    setTimeout(function() { 
        midHookMiniBox.css({background: 'white'});
    }, 1000);
    setTimeout(function() { 
        midHookMiniBox.css({background: 'red'});
    }, 1200);
    setTimeout(function() { 
        thinBox.css({background: 'white'});
    }, 1200);
    setTimeout(function() { 
        thinBox.css({background: 'red'});
    }, 1400);
    setTimeout(function() { 
        botLongBox.css({background: 'white'});
    }, 1400);
    setTimeout(function() { 
        botLongBox.css({background: 'red'});
    }, 1600);
    setTimeout(function() { 
        botFinalBox.css({background: 'white'});
    }, 1600);
    setTimeout(function() { 
        botFinalBox.css({background: 'red'});
    }, 1800);

    //TOP
    setTimeout(function() { 
        topLeftBox.css({background: 'white'});
    }, 200);
    setTimeout(function() { 
        topLeftBox.css({background: 'red'});
    }, 400);
    setTimeout(function() { 
        topLeftHookRed.hide();
        topLeftHookWhite.show();
    }, 400);
     setTimeout(function() { 
        topLeftHookWhite.hide();
        topLeftHookRed.show();
    }, 600);
    setTimeout(function() { 
        leftHookMiniBox.css({background: 'white'});
    }, 600);
    setTimeout(function() { 
        leftHookMiniBox.css({background: 'red'});
    }, 800);
    setTimeout(function() { 
        topShortBox.css({background: 'white'});
    }, 800);
    setTimeout(function() { 
        topShortBox.css({background: 'red'});
    }, 1000);
    setTimeout(function() { 
        topLongBox.css({background: 'white'});
    }, 1000);
    setTimeout(function() { 
        topLongBox.css({background: 'red'});
    }, 1200);
    setTimeout(function() { 
        topFinalBox.css({background: 'white'});
    }, 1200);
    setTimeout(function() { 
        topFinalBox.css({background: 'red'}); 
    }, 1400);
    setTimeout(redAlert, 2000);
}



// Indicator Lights

function indicatorTopDisplay() {
    indicatorTop.animate({
        opacity: '1'
    },250);
    indicatorTop.delay(250).animate({
        opacity: '0'
    },250);
}


function indicatorRightDisplay() {
   
    indicatorRight.animate({
        opacity: '1'
    },250);
    indicatorRight.delay(250).animate({
        opacity: '0'
    },250);
}

function indicatorBottomDisplay() {
    
    indicatorBottom.animate({
        opacity: '1'
    },250);
    indicatorBottom.delay(250).animate({
        opacity: '0'
    },250);
}

function indicatorLeftDisplay() {
  
    indicatorLeft.animate({
        opacity: '1'
    },250);
    indicatorLeft.delay(250).animate({
        opacity: '0'
    },250);
}




//===================General Animations===================

// ====================Start Up=================
function startup() {
    //Play Computer Startup Sound
    startupSounds();

    //--Animation Sequence--
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
    setTimeout(function() { 
        computerWork.play();
    }, 2000);

    //Data Output Random fade in
    setTimeout(function() { 
        computerScroll.play();
    }, 4200);
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

    //Voyager and shields
    setTimeout(function() { 
        computerPowerup2.play();
    }, 4900);
    voyager.delay(4900).animate({
        opacity: '1'
    },3000);
    setTimeout(function() { 
        computerPowerup.play();
    }, 6000);
    shields.delay(6000).animate({
        opacity: '1'
    },2000);

    //END STARTUP
    //Prompt Ready, launch effects and game on ready
    readyPrompt.delay(8000).animate({
        opacity: '1'
    },1000);
}




//==================Sounds====================

function redAlertSoundRepeat() {
    var x = 10;
    redAlertSound.play();
    setTimeout(redAlertSoundRepeat, 10000);
}

function startupSounds() {
    voyagerBridge.play();
    voyagerBridge.volume = 0.3;
    computerActivate.play();
}



// ==================Listeners==================

readyYes.click(function(event) {
    readyPrompt.css({
        display: 'none'});
    redAlert();
    redAlertSoundRepeat();
    setTimeout(function() { 
        game();
    }, 5000);
});



//============On page Load=============
//run startup function to load elements
startup();
