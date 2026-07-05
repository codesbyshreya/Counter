let addbtn=document.querySelector("#buttonadd");
let subbtn=document.querySelector("#buttonsub");
let resetbtn=document.querySelector("#reset");
let count=document.querySelector("#total-count")
let togglebtn=document.querySelector("#toggle");

let isDark=true;

togglebtn.addEventListener("click", function toggle(){
    main = document.querySelector(".main");
    if(isDark){
        main.style.backgroundColor = "white";
        main.style.color = "black";
        isDark = false;
        togglebtn.textContent = "Dark Mode";
    } else {
        main.style.backgroundColor = "black";
        main.style.color = "white";
        isDark = true;
        togglebtn.textContent = "Light Mode";
    }
});

let value=0;

addbtn.addEventListener("click", function add(){
    //  if(value >= 10){
    //     warning.style.display = "block";
    //     return;
    // }else{
    //     warning.style.display = "none";
    // }
    value += 1;
    count.textContent = value;
    count.style.boxShadow = "0px 0px 100px #1df10596";
    updateColor();
})

subbtn.addEventListener("click", function sub(){
//    if(value <= -10){
//         warning.style.display = "block";
//         return;
//     }else{
//         warning.style.display = "none";
//     }
    value -= 1;
    count.textContent = value;
    count.style.boxShadow = "0px 0px 100px #f1340596";
    updateColor();
})

resetbtn.addEventListener("click", function reset(){
    value = 0;
    count.textContent = value;
    count.style.boxShadow = "0px 0px 100px #68c3bb96";
    updateColor();
})

function updateColor(){
    if (value > 0) {
        count.style.color = "green";
    } else if (value < 0) {
        count.style.color = "red";
    } else {
        count.style.color = "white";
    }
}




    