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

document.getElementById('register-form').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var username = getElementVal("username");
    var email = getElementVal("email");
    var password = getElementVal("password");
    var password_confirm = getElementVal("password_confirm");

    if(password !== password_confirm) {
        alert("Password and confirm password do not match");
        return;
    }

    saveMessages(username,email,password,password_confirm);
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

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
