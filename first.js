const increase = document.getElementById("in")
const reset = document.getElementById("re")
const decrease = document.getElementById("de")
const counter = document.getElementById("counter")


let count = 0;
decrease.addEventListener("click",()=>{
    count=count-1;
    counter.innerHTML=count;
});
   
increase.addEventListener("click",()=>{
    count++;
    counter.innerHTML=count;
});

reset.addEventListener("click",()=>{
    count=0;
    counter.innerHTML=count;
})

