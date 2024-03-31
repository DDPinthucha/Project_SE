$(document).ready(function () {
  // ฟังก์ชันการตรวจสอบสถานะล็อกอินและกดไลค์
  window.checkAndLike = function() {
    // ดึงค่าปัจจุบันของไลค์จาก span ที่มี id เป็น "counter"
    var counter = parseInt($("#counter").text());
    
    // ตรวจสอบสถานะล็อกอินของผู้ใช้ (ในที่นี้ใช้ตัวอย่างเพียงอย่างเดียว)
    var isLoggedIn = true; // ต้องแทนที่ด้วยการตรวจสอบสถานะล็อกอินจริง ๆ
    
    if (isLoggedIn) {
      // ถ้าผู้ใช้ล็อกอินแล้ว ให้ทำการกดไลค์
      counter += 1 - 2 * counter;
      // แสดงค่าไลค์ใหม่
      $("#counter").text(counter);
    } else {
      // ถ้าผู้ใช้ยังไม่ได้ล็อกอิน ให้แสดง alert และเปลี่ยนเส้นทาง URL ไปยังหน้าล็อกอิน
      alert("กรุณาเข้าสู่ระบบเพื่อกดไลค์");
      window.location.href = "/login.html"; // ต้องแทนที่ด้วย URL ของหน้าล็อกอินของคุณ
    }
  };
});
