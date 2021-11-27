//select element by using getElementById

const paragraph = document.getElementById("dec");
console.log(paragraph);
setTimeout(()=>{
  paragraph.textContent = "ID Selected";
  paragraph.style.color = "Violet";
    console.log(paragraph);
}, 1000)

//select element using querySelector
const heading = document.querySelector(".heading1");
console.log(heading);
setTimeout(()=>{
  heading.textContent = "One"
  heading.style.color = "blue";
},2000)
