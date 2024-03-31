const firebaseConfig = {
    apiKey: "AIzaSyBz4T_JWDa69uM36SSofJYQbtPPUn7PvGk",
    authDomain: "databaselogin-85385.firebaseapp.com",
    databaseURL: "https://databaselogin-85385-default-rtdb.firebaseio.com",
    projectId: "databaselogin-85385",
    storageBucket: "databaselogin-85385.appspot.com",
    messagingSenderId: "924906301928",
    appId: "1:924906301928:web:9a3b239798e811dd101c5d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var DatabaseLogin = firebase.database().ref('DatabaseLogin');

function loginForm(e) {
    e.preventDefault();

    var username = getElementVal("username");
    var password = getElementVal("password");

    checkCredentials(username, password);
}

document.getElementById('login-form').addEventListener('submit', loginForm);

const checkCredentials = (username, password) => {
    DatabaseLogin.once("value")
        .then((snapshot) => {
            let isAuthenticated = false;
            snapshot.forEach((childSnapshot) => {
                const data = childSnapshot.val();
                if (data.username === username && data.password === password) {
                    isAuthenticated = true;
                }
            });

            if (isAuthenticated) {
                alert("Login successful");
                // Redirect to homepage.html
                window.location.href = "homepage.html";
            } else {
                alert("Incorrect username or password");
            }
        })
        .catch((error) => {
            console.error("Error checking credentials: ", error);
        });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
