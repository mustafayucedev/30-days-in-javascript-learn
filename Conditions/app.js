let age = 17;


// if - else
if (age >= 18) {
    console.log("18 yaşından büyüktür!");
}

else {
    console.log("18 yaşınan küçüktür");
}


// else-if()  
if(age >= 18) {
    console.log("18 yaşından büyüktür");
}
else if (age >=0 && age <=18) {
    console.log("Yaşınız 18 den küçük olduğu için reşit değilsiniz!");
}
else {
    console.log("Lütfen geçerli bir yaşınızı giriniz...");
}


// Ternary Operator 
console.log(age >= 18 ? "18 yaşından büyüktür" : "18 yaşından küçüktür");



//switch-case
let url = "/home";

switch(url) {
    case  "/home":
        console.log("Anasayfa");
        break;
    case "/about":
        console.log("Hakkımızda");
        break;
    case "/contact": 
        console.log("İletişim");
        break;
    default: 
        console.log("404 Not Found!");
        break;
}


