let addbtn=document.querySelector("#buttonadd");
let subbtn=document.querySelector("#buttonsub");
let resetbtn=document.querySelector("button");
let count=document.querySelector("#total-count")

var value=0;

addbtn.addEventListener("click", function add(){
    value += 1;
    count.textContent = value;
    count.style.boxShadow = "0px 0px 100px green";
    updateColor();
})

subbtn.addEventListener("click", function sub(){
    value -= 1;
    count.textContent = value;
    count.style.boxShadow = "0px 0px 100px red";
    updateColor();
})

resetbtn.addEventListener("click", function reset(){
    value = 0;
    count.textContent = value;
    count.style.boxShadow = "0px 0px 100px yellow";
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

updateColor();
