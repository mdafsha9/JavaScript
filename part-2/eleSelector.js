//select element by using getElementById

const paragraph = document.getElementById("dec");
console.log(paragraph);
setTimeout(()=>{
  paragraph.textContent = "ID Selected";
  paragraph.style.color = "Violet";
    console.log(paragraph);
}, 1000)
