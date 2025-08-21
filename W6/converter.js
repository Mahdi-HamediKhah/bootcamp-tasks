//کد رو به دو صورت وارد کردم هم برای تبدیل ورودی یوزر هم برای ورودی آرایه آماده 
//Email to username converter
//get email
let receivedEmails = ["alimohamadi@gmail.com", "aliahmadi@yahoo.com", "dsfsfsdf", "alisamadi@ahdah.efs", "dede@fsdfds@dfsf.sdf"];
const emailForm = document.getElementById("email_form");
const emailInput = document.getElementById("email_input_converter");
const usernameOutput = document.getElementById("user_name_output");

//convert function for ready emails
function emailconverter(emails) {
    let userNames = [];
    for (let i = 0; i < emails.length; i++) {
        let index = emails[i].indexOf('@');
        if (index === -1) {
            console.error(`ایمیل "${emails[i]}" معتبر نیست.`);
            userNames.push(null); // اضافه کردن null برای ایمیل‌های نامعتبر
            continue;
        }
        userNames.push(emails[i].slice(0, index));
    }
    return userNames;
}

let userNames = emailconverter(receivedEmails);

// let userNamesOutputArray = []
//convert function for input emails
emailForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value;
    const username = email.split("@")[0];
    usernameOutput.value = username;

    //Array for back end developer 
    // userNamesOutputArray.push(username)
});



//user name output
console.log(userNames.filter(Boolean));
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === null) {
        console.error(`User Name person ${i + 1} is invalid.`);
    } else {
        console.log(`User Name person ${i + 1} is ${userNames[i]}`);
    }
}

//Phone Number converter
//get phone Number
let receivedPhoneNumbers = ["+989393676765", "+989393456123", "+989393455465", "+989393456722", "+989393456765"];

//convert function
function PhoneNumberConverter(PhoneNumbers) {
    let middleItem = PhoneNumbers[Math.floor(PhoneNumbers.length / 2)]
    let convertedMiddleItem = middleItem.replace('+98', '0');
    return convertedMiddleItem
}
let convertedPhoneNumber = PhoneNumberConverter(receivedPhoneNumbers)

//phone Number output
console.log(convertedPhoneNumber)


//Phone Number converter for users
const phoneNumberForm = document.getElementById("phone-number_form");
const inputPhoneNumber = document.getElementById("phone-number_input_converter");
const phoneNumberOutput = document.getElementById("phone_number_output");
phoneNumberForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const PhoneNumber = inputPhoneNumber.value;
    phoneNumberOutput.value = PhoneNumber.replace('+98', '0');

    //Array for back end developer 
    // userNamesOutputArray.push(username)
});


