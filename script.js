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
