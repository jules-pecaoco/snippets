const button = document.querySelector("button");
const paragraph = document.querySelector("p");
const API = "https://api.quotable.io/random";

button.addEventListener("click",()=>{
    fetch(API).then(res => res.json()).then(data =>{
        paragraph.innerText = data.content;
    }).catch(() => alert("Error Fetching Quote!"))
}
)