// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz4T_JWDa69uM36SSofJYQbtPPUn7PvGk",
  authDomain: "databaselogin-85385.firebaseapp.com",
  databaseURL: "https://databaselogin-85385-default-rtdb.firebaseio.com",
  projectId: "databaselogin-85385",
  storageBucket: "databaselogin-85385.appspot.com",
  messagingSenderId: "924906301928",
  appId: "1:924906301928:web:9a3b239798e811dd101c5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// เพิ่ม Firebase SDK เข้าสู่โปรเจกต์
firebase.initializeApp(firebaseConfig);

// เรียกใช้งานฟังก์ชันเมื่อโหลดหน้าเว็บ
window.onload = function () {
  // ตรวจสอบว่ามีจำนวน like ที่บันทึกไว้ใน Local Storage หรือไม่
  if (localStorage.getItem("likeCount")) {
    // ถ้ามี ก็นำค่ามาแสดงผลใน HTML
    document.getElementById("counter").textContent =
      localStorage.getItem("likeCount");
  }
};


