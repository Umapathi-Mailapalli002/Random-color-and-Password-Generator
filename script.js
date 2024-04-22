let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let smallLetters = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let specialChar = "`!~#$%^&*@()?/";

//selectors
var passInput = document.getElementById("passwordInput");
const totalChar = document.getElementById("length");
const capSet = document.getElementById("capital");
const smallSet = document.getElementById("small");
const num = document.getElementById("numbers");
const special = document.getElementById("charecters");
const button = document.getElementById("btn");
const copy = document.getElementById("copy");
var leftText = document.getElementById("leftColor");
var rightText = document.getElementById("rightColor");

const getColor = () => {
    const randomNum = Math.floor(Math.random() * 16777215);
    const colorCode = "#" + randomNum.toString(16).padStart(6, '0');
    const randomNum2 = Math.floor(Math.random() * 16777215);
    const colorCode2 = "#" + randomNum2.toString(16).padStart(6, '0');
    // Set body background gradient
    document.body.style.background = `linear-gradient(to right, ${colorCode}, ${colorCode2})`;
    leftText.value = colorCode;
    rightText.value = colorCode2;
};

getColor(); // Initial call to set the initial background gradient

btn.addEventListener("click", () => {
    getColor(); // Change background gradient when button is clicked
});

capSet.addEventListener("click", () => {
    getColor();
});
smallSet.addEventListener("click", () => {
    getColor();
});
num.addEventListener("click", () => {
    getColor();
});
special.addEventListener("click", () => {
    getColor();
});
const left = document.getElementById("left").addEventListener("click", () =>{
    leftText.select();
    document.execCommand('copy');
});
const right = document.getElementById("right").addEventListener("click", () =>{
    rightText.select();
    document.execCommand('copy');
});

const getdataSet = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
};

const generatePass = (password = "") => {
    if(capSet.checked){
        password += getdataSet(capitalLetters);
    }
    if(smallSet.checked){
        password += getdataSet(smallLetters);
    }
    if(num.checked){
        password += getdataSet(numbers);
    }
    if(special.checked){
        password += getdataSet(specialChar);
    }
    if(password.length < totalChar.value){
        return generatePass(password);
    }
    passInput.value = truncateString(password, totalChar.value);
};

generatePass();

document.getElementById("btn").addEventListener("click", function() {
    generatePass();
});

function truncateString(str, num) {
    if(str.length > num) {
        return str.substring(0, num);
    } else {
        return str;
    }
}
copy.addEventListener("click", () =>{
    passInput.select();
    document.execCommand('copy');
});




