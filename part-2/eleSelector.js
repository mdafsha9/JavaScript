//select element by using getElementById

const para = document.getElementById("dec");
setTimeout(()=> {
  para.textConent = "ID SELECTOR"
  para.style.color = "red";
}, 1000)
