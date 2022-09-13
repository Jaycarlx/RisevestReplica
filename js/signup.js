// Passowrd validation
const email = document.querySelector("#email")
const pwd = document.querySelector("#pwd")
const eight = document.querySelector("#eightChar");
const upperCa = document.querySelector("#upperCa")
const uniqueChar = document.querySelector("#uniqueChar")
const label = document.querySelectorAll(".label")
// Regexs
let regexUpC = /(?=.*[A-Z])/;
let regexUniQ = /.[!,@,#,$,%,^,&,+,?,_,~,-,(,)]/
console.log(pwd)

// Function to check all requirements saved in a const variable
const pwdcheck = function () {
    // Checking is password is more than 8
    if (pwd.value.length > 8) {
        eight.checked = "true"
        console.log(pwd.value)
        console.log(pwd.value.length)
    } else {
        // eight.checked = "false"
        //  console.log(pwd.value)
        //  console.log(pwd.value.length)
    }

// Checking for uppercase letters
    if (pwd.value.match(regexUpC)) {
        upperCa.checked = "true"
        console.log(pwd.value)
        console.log(pwd.value.length)
    } else {
        // eight.checked = "false"
        //  console.log(pwd.value)
        //  console.log(pwd.value.length)
    }

    // Checking for special numbers
    if (pwd.value.match(regexUniQ)) {
        uniqueChar.checked = "true"
        console.log(pwd.value)
        console.log(pwd.value.length)
    } else {
        // upperCa.checked = "false"
        //  console.log(pwd.value)
        //  console.log(pwd.value.length)
    }
}

pwd.addEventListener("keyup", () => {
    pwdcheck()
});



const remvELabel = function () {
    if (!(email.value == "")) {
        label[0].style.display = "none"
    }
   
}

email.addEventListener("blur", () => {
    remvELabel()
})

const remvPLabel = function () {
    if (!(pwd.value == "")) {
        label[1].style.display = "none"
     }
}
pwd.addEventListener("blur", () => {
    remvPLabel()
})


// Toggle show password
// const eye = document.querySelector("#eye")

// const showPassword = function (){
//     if (pwd.type === "password") {
//         pwd.type === "text"
//     } else {
//         pwd.type === "password"
//      }
//  }
// eye.addEventListener("click", showPassword());

const togglePassword = document.querySelector("#eye");

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = pwd.getAttribute('type') === 'password' ? 'text' : 'password';
    pwd.setAttribute('type', type);
    // toggle the eye slash icon
      this.src = "./img/eye-slash.svg";
      
      if (pwd.type === "password") {
          this.src = "./img/eye.svg"
      } else {
          this.src = "./img/eye-slash.svg"
      }
});
