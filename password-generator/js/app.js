const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbols = "~!@#$%^&*()_+-/";

// selectors
const passBox = document.getElementById("password")
const passLen = document.getElementById("pass-len")
const upperCheck = document.getElementById("uppercase")
const lowerCheck = document.getElementById("lowercase")
const numberCheck = document.getElementById("numbers")
const symbolCheck = document.getElementById("symbols")

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}


const finalPasword = (str) => {
    var subStr;
    if (str.length > passLen.value) {
        subStr = str.substring(0, passLen.value);
    } else {
        subStr = str;
    }

    subStr = subStr.split('').sort(
        function() {
            return 0.5 - Math.random()
        }
    ).join('');

    return subStr;
}

// console.log(getRandomData(upperCase));
// console.log(getRandomData(lowerCase));
// console.log(getRandomData(number));
// console.log(getRandomData(symbols));

var lenOfPass = 0; // 
const generatePassword = (password = "") => {
    if (upperCheck.checked) {
        password += getRandomData(upperCase);
    }
    if (lowerCheck.checked) {
        password += getRandomData(lowerCase);
    }
    if (numberCheck.checked) {
        password += getRandomData(number);
    }
    if (symbolCheck.checked) {
        password += getRandomData(symbols);
    }
    if (lenOfPass === 0) lenOfPass = password.length;
    if (lenOfPass < passLen.value) {
        lenOfPass++;
        return generatePassword(password);
    }
    passBox.innerHTML = finalPasword(password);

}

generatePassword();

document.querySelector("#gen").addEventListener(
    "click",
    function() {
        lenOfPass = 0;
        generatePassword();
    }
)