let count=0;
let s=0;
let countEl=document.getElementById("count-el");

function increment() {
    count++;
    countEl.innerText=count;
    s++;
}

let savedEl=document.getElementById("saved-el");

let x=true;
function save(){
    let str=" ";
    if(x==true)
    str+=count;
    else
    str+=" - " + count; 
    count=0;
    countEl.innerText=0;
    savedEl.innerText+=str;
    x=false;
}

let totalEl=document.getElementById("total-el");

function display(){
totalEl.innerText='Total :'+s;
}