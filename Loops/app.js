// while
let x = 0;

while (x < 3) {
    console.log("while : " + x);
    x++;
}


// for 
for(let f = 0; f < 5; f++) {
    console.log("for : " + f);
}

// for in
const user = {
    name: "Mustafa",
    surname: "Yüce",
    title: "Frontend Developer"
};

for (let userKey in user) {
    console.log(userKey); // name,surname,title
    // console.log(userKey,user[userKey]); // name Mustafa surname Yüce title Frontend Developer
}


// for of
const numbers = [10,20,30];

for (let value of numbers) {
    value += 1;
    console.log(value);
}


// forEaach
let products = [
    {
        id: 1,
        title: "Macbook Pro 13",
        price : "25,990"
    },
    {
        id: 2,
        title: "Macbook Pro 14",
        price : "45,990"
    },
    {
        id: 3,
        title: "Macbook Pro 16",
        price : "55,990"
    }
];

products.forEach(function(item,index){
    console.log(item,index);
});

// products.forEach((item,index) => {
//     console.log(item,index);
// });

