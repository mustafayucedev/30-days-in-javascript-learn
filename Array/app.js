// .push(); dizinin sonuna belirtilen değeri ekler
const x = [1,2,3];
x.push(4);
console.log(x); // [1,2,3,4]

// .pop(); dizinin sonuncu değerini siler.
x.pop();
console.log(x); // [1,2,3]

// .unshift(); diziye belirlenen ilk değeri ekler.
x.unshift(9);
console.log(x); // [9,1,2,3]

// .shift(); dizinin ilk değerini siler
x.shift();
console.log(x); // [1,2,3]

// .toString();

// .valueOf(); object olan array'leri primitive haline döndürür.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myFruits = fruits.valueOf();
document.body.innerHTML = myFruits; // Banana,Orange,Apple,Mango

// .splice();

// .slice();

// .concat();

// .indexOf();

// .lastIndexOf();

// .includes();

// .filter();

// .map();

// .find();

// .findIndex();

// .sort();

// .reverse();

// .split();

// .join();

// .reduce();

// .reduceRight();

// .isArray();

// .fill();

// .some();

// .entries();

// .keys();