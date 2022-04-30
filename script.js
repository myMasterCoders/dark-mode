
const circle=document.querySelector(".circle");
const body=document.querySelector("body");
let change=false;
circle.addEventListener("click",(e)=>{

    if(change===false){
        change=true;
        circle.style.transform="translateX(-65px)"
        body.classList.add("darkMode")
    }else{
        change=false;
        circle.style.transform="translateX(0)"
        body.classList.remove("darkMode")
    }
})