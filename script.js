/* ==========================================
   LOVE ARUUU
   PART 3.1
   DO NOT EDIT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

const loading = document.getElementById("loading-screen");

const page1 = document.getElementById("page1");

const heartsContainer = document.getElementById("hearts-container");

/* --------------------------
Loading Screen
-------------------------- */

setTimeout(()=>{

loading.style.opacity="0";

loading.style.transition="1s";

setTimeout(()=>{

loading.style.display="none";

page1.classList.add("active");

},1000);

},2500);

/* --------------------------
Floating Hearts
-------------------------- */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*22)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

heart.style.opacity=Math.random();

heartsContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,350);

});




/* ==========================================
   PART 3.2
   Start Button + Premium Intro
========================================== */

const startBtn = document.getElementById("startBtn");
const errorHeart = document.getElementById("errorHeart");

const whiteFlash = document.getElementById("whiteFlash");
const screenFade = document.getElementById("screenFade");
const transitionLayer = document.getElementById("transitionLayer");

if(startBtn){

startBtn.addEventListener("click",()=>{

startBtn.style.pointerEvents="none";

startBtn.style.transform="scale(.92)";

errorHeart.style.transition=".5s";

errorHeart.style.transform="scale(1.35)";

setTimeout(()=>{

errorHeart.style.transform="scale(.85) rotate(-8deg)";

},350);

setTimeout(()=>{

errorHeart.style.transform="scale(1.4) rotate(8deg)";

},700);

setTimeout(()=>{

if(whiteFlash){

whiteFlash.style.opacity="1";

}

},1200);

setTimeout(()=>{

if(whiteFlash){

whiteFlash.style.opacity="0";

}

if(screenFade){

screenFade.style.opacity="1";

}

},1650);

setTimeout(()=>{

if(transitionLayer){

transitionLayer.style.opacity="1";

transitionLayer.style.visibility="visible";

}

},2300);

});

}
