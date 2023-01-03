// .push(); 
// dizinin sonuna belirtilen değeri ekler
const x = [1,2,3];
x.push(4);
console.log(x); // [1,2,3,4]


// .pop(); 
// dizinin sonuncu değerini siler.
x.pop();
console.log(x); // [1,2,3]


// .unshift(); 
// diziye belirlenen ilk değeri ekler.
x.unshift(9);
console.log(x); // [9,1,2,3]


// .shift(); 
// dizinin ilk değerini siler
x.shift();
console.log(x); // [1,2,3]


// .valueOf(); 
// object olan array'leri primitive haline döndürür.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myFruits = fruits.valueOf();
document.body.innerHTML = myFruits; // Banana,Orange,Apple,Mango


// .splice(); 
// belirlenen indislere göre dizi elemanı siler. 2.parametre olarak diziye eleman/lar eklenebilir.
const language = ["HTML","Css","Javascript","Jquery"];
const languageTwo = ["HTML","Css","Javascript","Jquery"];
const languageThree = ["HTML","Css","Javascript","Jquery"];
language.splice(1,2); // HTML,Jquery
console.log(language); 
languageTwo.splice(0,2);
console.log(languageTwo); // Javascript,Jquery
languageThree.splice(0,2  , "C++","React"); 
console.log(languageThree); // C++,React,Javascript,Jquery


// .slice(); 
// dizide belirlenen değerler arasındaki elemanları alır. son parametre dahil değildir aralığu alır.
console.log(fruits.slice(1,3)); // Orange,Apple


// .split(); 
// belirlenen karakter ile string olan datayı array olarak return eder.
let names = "Mustafa,Ali,Veli";
let arrNames = names.split(',');
console.log(arrNames); // ['Mustafa', 'Ali', 'Veli']


// .concat(); 
// dizileri birleştirir.
const numbers = [1,2,3,4,5];
const numbersTwo = [6,7,8,9,10];
let num = numbers.concat(numbersTwo);
console.log(num); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// .indexOf(); 
// belirtilen değerin, dizinin kaçıncı index'te olduğunu verir.
let indexOf = numbers.indexOf(2);
console.log(indexOf); // 1


// .lastIndexOf();



// .includes();
// belirtilen değer dizi içinde var ise true yok ise false döner.
let inc = numbers.includes(1); 
console.log(inc); // true


// .filter();


// .find();



// .map();
// diziyi değiştirmeden (yeni) dizi üzerinde manipülasyon işlemleri yapabiliriz.
let users = [
    {
        name: "Mustafa",
        surname: "Yüce",
        age: 27
    },
    {
        name: "Ali",
        surname: "Ak",
        age: 24
    }
];

let date = new Date();

const result = users.map(user => {
    return {
        fullName: `${user.name} ${user.surname}`,
        yearOfBirth: date.getFullYear() - user.age
    }
})
console.log(result); // 0: {fullName: 'Mustafa Yüce', yearOfBirth: 1996}   1: {fullName: 'Ali Ak', yearOfBirth: 1999}

const todos = [
    {
        id: 1,
        title: "Spor Yap",
        completed: false,
    },
    {
        id: 2,
        title: "React Öğren",
        completed: false
    }
];

const todoResult = todos.map(todo => {
    if(todo.id === 2) {
        todo.completed = true;
    }
    return todo;
})
console.log(todoResult); // 0: {id: 1, title: 'Spor Yap', completed: false}    1: {id: 2, title: 'React Öğren', completed: true}


// .findIndex();



// .sort();



// .reverse();



// .join();



// .reduce();



// .reduceRight();



// .isArray();



// .fill();



// .some();



// .entries();



// .keys();