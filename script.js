/* ==========================================
   PART 3.0
   Premium Intro Animation
========================================== */

const touchBtn = document.getElementById("touchBtn");
const mainHeart = document.getElementById("mainHeart");

const ripple = document.getElementById("clickRipple");
const crack = document.getElementById("heartCrack");

const particles = document.querySelectorAll(".particle");

if(touchBtn){

touchBtn.addEventListener("click",(e)=>{

/* Button Disable */

touchBtn.disabled=true;

/* Ripple */

if(ripple){

ripple.style.left=e.clientX+"px";
ripple.style.top=e.clientY+"px";

ripple.classList.remove("rippleActive");

void ripple.offsetWidth;

ripple.classList.add("rippleActive");

}

/* Heart Shake */

mainHeart.animate([

{transform:"scale(1)"},

{transform:"scale(1.25) rotate(-8deg)"},

{transform:"scale(.9) rotate(8deg)"},

{transform:"scale(1.35)"}

],{

duration:1000,

iterations:1

});

/* Crack */

setTimeout(()=>{

crack.classList.add("crackActive");

},700);

/* Explosion */

setTimeout(()=>{

particles.forEach((p)=>{

const angle=Math.random()*360;

const distance=150+Math.random()*150;

const x=Math.cos(angle*Math.PI/180)*distance;

const y=Math.sin(angle*Math.PI/180)*distance;

p.style.setProperty("--x",x+"px");

p.style.setProperty("--y",y+"px");

p.classList.remove("explode");

void p.offsetWidth;

p.classList.add("explode");

});

},1100);

});

}




/* ==========================================
   PART 3.1
   Flash + Cinematic Transition
========================================== */

const whiteFlash = document.getElementById("whiteFlash");

const screenFade = document.getElementById("screenFade");

const transitionScreen = document.getElementById("transitionScreen");


function startTransition(){

/* White Flash */

if(whiteFlash){

whiteFlash.style.opacity="1";

setTimeout(()=>{

whiteFlash.style.opacity="0";

},500);

}


/* Dark Fade */

setTimeout(()=>{

if(screenFade){

screenFade.style.opacity="1";

}

},600);


/* Enter Love World */

setTimeout(()=>{

if(transitionScreen){

transitionScreen.style.opacity="1";

transitionScreen.style.visibility="visible";

}

},1200);

}


/* Connect With Heart Click */

if(touchBtn){

touchBtn.addEventListener("click",()=>{

setTimeout(()=>{

startTransition();

},1800);

});

}



/* ==========================================
   PART 4.3
   Love World Interaction
========================================== */


const nextLoveBtn = document.getElementById("nextLoveBtn");

const loveArrow = document.querySelector(".loveArrow");


/* Arrow Extra Movement */

if(loveArrow){

setInterval(()=>{

loveArrow.style.transform =
"translateX(25px) scale(1.1)";


setTimeout(()=>{

loveArrow.style.transform =
"translateX(-25px) scale(1)";

},800);


},1800);

}



/* Continue Button */

if(nextLoveBtn){

nextLoveBtn.addEventListener("click",()=>{


nextLoveBtn.style.transform="scale(.9)";


setTimeout(()=>{

nextLoveBtn.style.transform="scale(1)";


},300);



/* Move To Next Page */

const page2=document.getElementById("page2");

const page3=document.getElementById("page3");


if(page2 && page3){


page2.classList.remove("active");


setTimeout(()=>{

page3.classList.add("active");


},800);


}



});

}




/* ==========================================
   PART 5.2
   Magical Love Tree Interaction
========================================== */


/* Tree Heart Falling Effect */

const treeWorld = document.querySelector(".treeWorld");


function createTreeHeart(){

if(!treeWorld) return;


const heart = document.createElement("div");

heart.innerHTML="❤️";

heart.className="treeHeart";


heart.style.left =
Math.random()*100+"%";


heart.style.animationDuration =
(4 + Math.random()*4)+"s";


heart.style.fontSize =
(15 + Math.random()*25)+"px";


treeWorld.appendChild(heart);


setTimeout(()=>{

heart.remove();

},8000);


}


setInterval(createTreeHeart,700);



/* Firefly Extra Movement */

const fireflies =
document.querySelectorAll(".fireflies span");


fireflies.forEach((fly)=>{


setInterval(()=>{


fly.style.transform =

`translate(${Math.random()*60-30}px,
${Math.random()*60-30}px)`;


},1500);


});



/* Tree Button */

const treeNextBtn =
document.getElementById("treeNextBtn");


if(treeNextBtn){


treeNextBtn.addEventListener("click",()=>{


treeNextBtn.style.transform="scale(.9)";


setTimeout(()=>{

treeNextBtn.style.transform="scale(1)";


},300);



const page3 =
document.getElementById("page3");


const page4 =
document.getElementById("page4");



if(page3 && page4){


page3.classList.remove("active");


setTimeout(()=>{


page4.classList.add("active");


},900);


}


});


}



/* ==========================================
   PART 6.2
   Love Letter Interaction
========================================== */


const envelope = document.getElementById("envelope");

const loveLetter = document.getElementById("loveLetter");

const typingText = document.getElementById("typingText");


const letterMessage = 
"Every moment with you is special. ❤️ You are my happiness, my smile, and my dream. I promise to always love you and keep you in my heart forever...";



function typeWriter(){

let i = 0;


function typing(){

if(i < letterMessage.length){

typingText.innerHTML += letterMessage.charAt(i);

i++;

setTimeout(typing,50);

}

}


typing();

}



/* Open Envelope */

if(envelope){


envelope.addEventListener("click",()=>{


envelope.style.transform="scale(0) rotate(360deg)";

envelope.style.opacity="0";


setTimeout(()=>{


loveLetter.classList.add("show");


typeWriter();


},800);



});


}



/* Continue Button */

const letterBtn =
document.getElementById("letterBtn");


if(letterBtn){


letterBtn.addEventListener("click",()=>{


const page4 =
document.getElementById("page4");


const page5 =
document.getElementById("page5");



if(page4 && page5){


page4.classList.remove("active");



setTimeout(()=>{


page5.classList.add("active");


},900);


}


});


}
