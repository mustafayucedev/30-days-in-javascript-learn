const personal = {
    name: "Mustafa",
    surname: "Yüce",
    job: "Frontend Developer",
    age: 26,
    skills: ["HTML5","CSS3","SASS","LESS","TailwindCSS","Bootstrap","Javascript","React","JQuery"],
    address: {
        country: "Türkiye",
        city: "İstanbul",
        street: "Ümraniye"
    },
    ageCalc: function(birthYear){
        const date = new Date();
        date.getFullYear();
        let nowYear = date.getFullYear();
        console.log(nowYear - birthYear);
    }
}

console.log(personal.name); // Mustafa Yüce
console.log(personal.address.city); // İstanbul
console.log(personal.skills); // array items
console.log(personal.ageCalc(1996)); // 26


// Object in Array
const products = [
    {
        id: 1,
        name: "Apple 12",
        price: "18,590",
        brand: "Apple",
        categories: "Phone"
    },
    {
        id: 2,
        name: "Macbook Pro 13",
        price: "25,590",
        brand: "Apple",
        categories: "Computer"
    },
    {
        id: 1,
        name: "Apple 14",
        price: "35,590",
        brand: "Apple",
        categories: "Phone"
    }
];

console.log(products[0].name); // Apple 12

products.forEach(function(product){
    // console.log(product);
    console.log(product.name);
})