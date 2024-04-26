
const firebaseConfig = {
    apiKey: "AIzaSyBz4T_JWDa69uM36SSofJYQbtPPUn7PvGk",
    authDomain: "databaselogin-85385.firebaseapp.com",
    databaseURL: "https://databaselogin-85385-default-rtdb.firebaseio.com",
    projectId: "databaselogin-85385",
    storageBucket: "databaselogin-85385.appspot.com",
    messagingSenderId: "924906301928",
    appId: "1:924906301928:web:9a3b239798e811dd101c5d"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//refernce your database
var DatabaseloginDB = firebase.database().ref('Databaselogin');

document.getElementById('register-form').addEventListener('submit', submitForm);

const getElementVal = (id) => {
    return document.getElementById(id);
}

var form = getElementVal("register-form");
var username = getElementVal("username");
var email =  getElementVal("email");
var password = getElementVal("password");
var password_confirm = getElementVal("password_confirm");
var isSuccess = true;

//get FieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Show input error messages
function showError(input, message) {
    isSuccess = false;
    const formcontrol = input.parentElement;
      formcontrol.className = 'form-control error';
      const small = formcontrol.querySelector('small');
      if (small) {
        small.innerText = message;

      }
    }
  

  
  //show success colour
  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const smallError = formControl.querySelector('small');
    if (smallError) {
      smallError.innerText = '';
    }
  }

function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`)
        } else {
            showSuccess(input);
        }
    });
}
  
  
  //check email is valid
function checkEmail(input) {
    console.log("emailorcheck:", input);
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(input.value.trim())) {
          showSuccess(input)
      }else {
          showError(input,'Email is not invalid');
      }
}

function checkLength(input, min ,max) {
    console.log("input:", input);
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be les than ${max} characters`);
    }else {
        showSuccess(input);
    }
}

function checkPasswordMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

const saveMessages = (username,email,password,password_confirm) => {
    var newDatalogin = DatabaseloginDB.push()

    newDatalogin.set({
        username: username,
        email: email,
        password: password,
        password_confirm: password_confirm,
    })
    .then(() => {
        alert("Account created successfully");
    })
    .catch((error) => {
        console.error("Error saving data: ", error);
    });
};



function submitForm(e){
    e.preventDefault();
    isSuccess = true;

    var username = getElementVal("username");
    var email =  getElementVal("email");
    var password = getElementVal("password");
    var password_confirm = getElementVal("password_confirm");

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", password_confirm);

    checkRequired([username,email, password, password_confirm]);
    checkLength(username, 1, 20);
    checkLength(password, 6, 16);
    checkLength(password_confirm, 6, 16);
    checkEmail(email);
    checkPasswordMatch(password, password_confirm);

    if(isSuccess){
        saveMessages(username,email,password,password_confirm);
    }
}

form.addEventListener("submit",submitForm)