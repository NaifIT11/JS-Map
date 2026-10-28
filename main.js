/*Playing with JS Map*/


const fruits = new Map();

fruits.set("a" , "apple");
fruits.set("b" , "banana");
fruits.set("c" , "carrot");

/*using get() to get by putting the key */

console.log(fruits.get("a"));

/* using size() api to see the size of the Map */

console.log(fruits.size);

/* deleting carrot by using delete() */

console.log(fruits.delete("c"));
console.log(fruits.get("c"));
console.log(fruits.size);