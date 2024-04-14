// Import Firebase SDK
import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
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
const DatabaseLogin = firebase.database().ref('Databaselogin');

// เริ่มต้นโค้ด checkAndLike() ที่มีการตรวจสอบสถานะการ login
var isLoggedIn = false; // สมมติว่ายังไม่ได้ login

// เราจะใช้ Firebase Realtime Database เก็บจำนวนการไลค์ของแต่ละผู้ใช้
// จะใช้ username เป็น key และจำนวนการไลค์เป็น value
var likesData = {}; // ข้อมูลการไลค์จะถูกอัปเดตโดยตรงในฐานข้อมูล Firebase

// ตรวจสอบสถานะการ login
DatabaseLogin.once("value")
.then((snapshot) => {
    // เมื่อโหลดข้อมูลผู้ใช้จาก Firebase สำเร็จ
    snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        const username = data.username;
        // เพิ่มข้อมูลการไลค์เริ่มต้นใน likesData
        likesData[username] = 0;
    });
})
.catch((error) => {
    console.error("Error fetching login data: ", error);
});

// ฟังก์ชันสำหรับตรวจสอบการ login
function checkLogin() {
    // ตรวจสอบสถานะการ login จากฐานข้อมูล Firebase แล้วตั้งค่าตัวแปร isLoggedIn ตามผลลัพธ์
    // สามารถใช้ Firebase Authentication หรือวิธีการอื่น ๆ ในการตรวจสอบสถานะการ login
    isLoggedIn = true; // ตั้งเป็น true สำหรับการทดสอบเท่านั้น
}

// เรียกใช้ฟังก์ชันสำหรับตรวจสอบการ login
checkLogin();

// ตรวจสอบสถานะการ login เมื่อหน้าเว็บโหลดเสร็จสมบูรณ์
$(document).ready(function() {
    // เรียกใช้ checkLogin เพื่อตรวจสอบสถานะการ login
    checkLogin();
});

// ตรวจสอบการกดไลค์
function checkAndLike() {
    if (!isLoggedIn) {
        // ถ้ายังไม่ได้ login
        alert("Please login first.");
        return;
    }

    // ให้กำหนด username จากข้อมูลผู้ใช้ที่ login อยู่ในระบบ
    const username = getUsernameFromLoggedInUser(); // สมมติว่ามีฟังก์ชันนี้สำหรับดึง username จากผู้ใช้ที่ login
    if (!username) {
        alert("Username not found."); // แจ้งเตือนถ้าไม่พบ username
        return;
    }

    // เพิ่มหรือลดจำนวนการไลค์ของ user และอัปเดตใน Firebase Realtime Database
    var currentLikes = likesData[username];
    if (currentLikes === undefined || currentLikes === 0) {
        likesData[username] = 1;
    } else {
        likesData[username] = 0;
    }

    // บันทึกข้อมูลการไลค์ใหม่ลงใน Firebase Realtime Database
    firebase.database().ref('likesData').set(likesData);

    // อัปเดตตัวนับไลค์
    updateLikeCounter();

    // อัปเดตตัวนับไลค์ใน HTML DOM
    $('#counter').text(likesData[username] || 0);
}

// ฟังก์ชันสำหรับดึง username จากผู้ใช้ที่ login อยู่ในระบบ
function getUsernameFromLoggedInUser() {
    // สร้างฟังก์ชันเพื่อดึง username จากผู้ใช้ที่ login อยู่ในระบบ
    // คุณสามารถใช้ Firebase Authentication หรือวิธีอื่น ๆ ในการดึงข้อมูลผู้ใช้ที่ login ได้
    // สำหรับตัวอย่างนี้ ฉันสมมติว่ามีฟังก์ชันชื่อ getLoggedInUsername() ที่สามารถใช้งานได้
    return getLoggedInUsername(); // สมมติว่ามีฟังก์ชันนี้สำหรับดึง username จากผู้ใช้ที่ login
}
