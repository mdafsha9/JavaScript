const body = document.body;
setInterval(() => {
  const red = Math.floor(Math.random()*126);
  const green = Math.floor(Math.random()*126);
  const blue = Math.floor(Math.random()*126);
  const rgb = 'rgb(${red}, ${green}, ${blue})';
  //body.style.background = rgb;
  console.log(rgb);
}, 1000)
