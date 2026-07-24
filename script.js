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
