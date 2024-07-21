const title=document.getElementById("title");
const text=document.getElementById("text");
const btnNext=document.getElementById("next");

const getData=async()=>{

const response =await fetch("jokes.json");
const data=await response.json();
let r=Math.floor(Math.random()*50);

title.textContent=data[r].title
text.innerHTML=(data[r].text.replace(/\n/g, '<br>')).replace(/\*(.*?)\*/g, '<b>$1</b>');;
}

getData();
btnNext.addEventListener("click",()=>{
    getData();
});