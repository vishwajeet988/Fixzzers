gsap.from("#nav>h2, #nav #left, #center", {
    y: -30,
    duration: 1,
    opacity: 0,
    stagger: .5,
  });









//   huhuhu
var flag=0;
document.querySelector("#nav>h2").addEventListener("click",function(){
    if(flag===0){
        document.querySelector("#menu").style.top="0";
        document.querySelector("#nav>h2").innerHTML="✕";
        document.querySelector("#nav>#left").style.opacity="0";
        gsap.from("#menu>#links",{
            x:-100,
            duration:2,
            opacity:0,
            delay:1,
            stagger:.5,

        })
        flag=1;
    }
    else{
        document.querySelector("#menu").style.top="-100%";
        document.querySelector("#nav>h2").innerHTML="✓";
        document.querySelector("#nav>#left").style.opacity="1";

        flag=0;
    }
});

