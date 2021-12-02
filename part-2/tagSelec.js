//finding HTML element by Tag name

const tag = document.getElementsByTagName("h1")[0];
console.log(tag);
setTimeout(()=>{
  tag.style.background = "yellow";
},2000)
