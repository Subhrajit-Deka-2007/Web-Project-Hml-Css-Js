/* Step 1: On pressing any button from that given 4 buttons the game will start */
let gameSeq = [];
let userSeq = [];
let started = false;// tells the game is started or not 
let level = 0;// Initially before starting the game the level is zero
let buttons = ["yellow","red","green","blue"];
let h2 = document.querySelector("h2");





/*======================= 1st Step started ==========================================*/
document.addEventListener("keypress", function () {
    /*1st Step get completed */
    // when it get keypress the callback get invoke 
    if(started === false){
        console.log("Game is started");
        started = true;
    }
    levelUp();
});
/*====================== 1st step get completed ====================================*/







/*========= 2nd step : Random box will get flash + level 1 get started ============*/
/*================== 2ND STEP COMPLETED ============================================*/
function levelUp() {
    /* When level Up function user sequence get reset */
    userSeq = [];
    level++;
    /* After increasing the level value now we have to flash button */
    h2.innerText = `Level ${level}`;
    /*Button will get flash when game will choose a button + also it will flash when user will choose an button */
    /* We will flash random button */
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = buttons[randomIdx];
    let randomButton = document.querySelector(`.${randomColor}`);// randomColor contains that button class name so randomButton will conatin that random button
    
    
    /* Pushing the random color to the gameSeq array */
    gameSeq.push(randomColor);
    gameFlash(randomButton);
    console.log(gameSeq);
}
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
/*============================ 2ND STEP ENDED =======================================*/









/*============= 3RD STEP( ADDING EVENT LISTENER ON EACH BUTTON ) ====================*/
function btnPress() {
    /* WE WILL DETECT THE BUTTON USING THIS KEYWORD WHO PRESSED THAT BUTTON */
    let btn = this;// this shows which button got pressed
    /* So we have to flash the button on clicking by user as we are writing the code for when user presses the button */
    userFlash(btn);
   let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    //console.log(userSeq);
    checkAns(userSeq.length-1);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 250);
}
let allbtns = document.querySelectorAll(".btn");;
for (btn of allbtns) {
    btn.addEventListener("click", btnPress);
}
/*============================= Step 3 : ENDED ======================================*/





/*====================== Step 4 : sequence of game ==================================*/
/*checking the sequence of the game */
function checkAns(idx) {

    if (userSeq[idx] === gameSeq[idx]) {
        /* When value same two cases will form one is middle and other is at last */
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over ! Your score was <b>${level}</b> . <br> Press any key to start `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        /* Again after losing we have to reset the game */
        reset();
    }
    console.log(userSeq);
    console.log(gameSeq);
} 
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}