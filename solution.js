const myArray = [`Fifka`, `Bella`, `Effi`, `Klara`, `Mania`];
console.log(myArray);

/* const thirdElement = myArray.slice(2,3) */
const thirdElement = myArray[2];
 console.log(thirdElement);
 
myArray.splice(3, 1, `fourth element`);
 
console.log(myArray);

