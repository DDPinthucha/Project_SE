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
var DatabaseLogin = firebase.database().ref('Databaselogin');
console.log("Login database")
console.log(DatabaseLogin)

function submitForm() {
    console.log("submitForm");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    console.log(username);
    console.log(password);

    checkCredentials2(username, password); // เรียกใช้ checkCredentials2 แทน
}


function checkCredentials2(username, password) {
    console.log("checkCredentials2");
    console.log(username);
    console.log(password);

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
            //alert("Login successful");// แสดง Alert เมื่อเข้าสู่ระบบสำเร็จ
            window.location.href = "homepage.html";
        } else {
            alert("Incorrect username or password"); // แสดง Alert เมื่อไม่สามารถเข้าสู่ระบบได้
        }
    })
    .catch((error) => {
        console.error("Error checking credentials: ", error);
    });
}


const getElementVal = (id) => {
    return document.getElementById(id).value;
}
