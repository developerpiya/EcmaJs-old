let inputPass = document.getElementById('pass');

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const loweCase = "abcdefghijklmnopqrstuvxyz";
const symbol = "@#$%^&*(}){[]><?|-+=?/";
const number = "1234567890";
const allChars = upperCase + loweCase + number + symbol;
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += loweCase[Math.floor(Math.random() * loweCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    inputPass.value = password;
}