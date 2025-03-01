let gamSeq = [];
let userSeq = [];
let btns = ["brown","blue","purple","red"];
let level = 0;
let started = false;
let title = document.querySelector("h1");
let levelBoard = document.querySelector("#levelBoard");
let gameEnd = document.querySelector("#gameEnd");
let userClick=new Audio("userTrim.mp3");
let gameOver=new Audio("gameover2.mp3");
let welcome=new Audio("welcome.mp3");
let systemClick=new Audio("systemclick.mp3");
let levelUp1=new Audio("levelup.mp3");


// let btn1 = document.querySelectorAll(".btn");
let h3 = document.querySelector("h3");
let body = document.querySelector("body");
// let mainDiv = document.querySelector("");


document.addEventListener("keypress",function(event){
    if (started == false){
        console.log("game is started");
        h3.innerHTML="Game Started";
        title.style.filter="drop-shadow(3px 3px 30px rgb(93, 255, 152)";
        welcome.play();
        started = true;
        levelUp();
        levelUp1.play();
    }
    
});

function flashBtn(btn){
    btn.classList.add("flash");
    systemClick.play();
    setTimeout(function(){
        btn.classList.remove("flash");
    },400);

};

// function userFlashBtn(btn){
//     btn.classList.add("userFlash");
//     setTimeout(function(){
//         btn.classList.remove("userFlash");
//     },250);

// };

function levelUp(){
    userSeq=[];
    level++;
    levelBoard.innerText= `Level ${level}`;  ///// level up here 

let random = Math.floor((Math.random() * 4));
let randColor = btns[random];
let randBtn = document.querySelector(`.${randColor}`);
gamSeq.push(randColor);
// console.log(gamSeq);
flashBtn(randBtn);

}; 
let mainDiv = document.querySelector("#main");
let allButton = document.querySelectorAll(".btn");

function buttonPress(event){
    console.log(gamSeq);

};
// console.log(allButton);

for(btn of allButton){
    btn.addEventListener("click",buttonPress);
    btn.addEventListener("click",function(event){
        event.target.style.backgroundColor="gray";
        event.target.style.boxShadow="2px 2px 15px white,2px 2px 15px white inset";
        userClick.play();

        setTimeout(function(){
            event.target.style.backgroundColor=""; // sest an bgcolor to defalut as what it was.
            event.target.style.boxShadow="none";
        },250);
    })
};



mainDiv.addEventListener("click",function(event){
    event.stopPropagation();
    // let allBtn = document.querySelectorAll(".btn");
    // console.dir(allBtn);
    console.log(userSeq);
    console.dir(mainDiv);
  
  
    console.dir(event.target);
  

    console.dir(event.target.classList[1]==gamSeq[0]);
    userSeq.push(event.target.classList[1]);

    // event.target.style.backgroundColor="green";

    // setTimeout(function(){
    //     event.target.style.backgroundColor=""; // sest an bgcolor to defalut as what it was.
    // },250);
    console.log(`USER INPUT -->> ${userSeq[userSeq.length-1]}`);
    console.log(`Game INPUT -->> ${gamSeq[gamSeq.length-1]}`);
    // let allClass = document.querySelectorAll(`.${event.target.classList[0]}`);
    // console.dir(allClass);
    // for ( flash of allClass){
    //     flash.style.backgroundColor="green";
    //     setTimeout(function(){
    //         flash.style.backgroundColor="inherit";
    //     },250);

    // };

    if (userSeq[userSeq.length-1] == gamSeq[userSeq.length-1]){
        if (userSeq.length === gamSeq.length){
          
        console.log("levelup");
        levelUp();

        };
    } else {
      
        gameEnd.innerHTML=`SCORE ${level}</b><br> Press AnyKey To StartAgain`;
        body.style.backgroundColor="red";
        title.style.filter="none";
        gameOver.play();
        h3.innerHTML="Game Over";
      
        setTimeout(function(){
            body.style.backgroundColor="white";
        },100);
        reset();
    };


});

function reset(){
    started = false;
    gamSeq = [];
    userSeq = [];
    level=0;
};
