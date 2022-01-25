//Object.create()

const user1 = {
  key1 : "value1",
  key2 : "value2"
}

const user2 = Object.create(user1);
  key3 : "value3";
  key4 : "value4";

console.log(user2.key1);
