//forEach method


let animals = ["Horse", "Dog", "Cat"];

function anim(string){
  return string.length === 5;
}

let animal = animals.find(anim);
console.log(animal);
