// function
function hello () {
    console.log("Hello !");
}
hello();


// Return Functions 
function square(x) {
    return x * x;
}

function cube(x) {
    return x * x * x;
}

// 1.Yol
//let a = cube(square(2)); // 64

// 2.Yol
let a = square(2); // a = 4

a = cube(a); // 4 * 4 * 4 = 64

console.log(a); // 64



// Function Expression
const sayHello = function(name) {
    console.log("Merhaba " + name);
}
sayHello("Mustafa"); // Merhaba Mustafa

// const sayHello = () => {
//     console.log("Merhaba " + name);
// }



// IIFE - Inmediately Invoked Function Expression
(function(name) {
    console.log("Merhaba " + name);
}("Mustafa"));  // Merhaba Mustafa

// (() => {
//     console.log("Merhaba " + name);
// })("Mustafa"); // Merhaba Mustafa


// Example - Function in Object
const database = {
    host: "localhost",
    add: function() {
        console.log("Eklendi");
    },
    get: function() {
        console.log("Get Method!");
    },
    update: function(id) {
        console.log(`id: ${id} Güncellendi`);
    },
    delete: function(id) {
        console.log(`İd: ${id} Olan Ürün Silindi!`);
    }
 };

console.log( database.host); // localhost

database.add(); // Eklendi

database.update(34); // id: 34 Güncellendi

database.delete(12); // İd: 12 Olan Ürün Silindi!