function liked() {
  let counterElement = document.getElementById('counter');
  let counter = parseInt(counterElement.innerHTML);
  
  // กำหนดให้ตัวเลขเป็น 1 เมื่อคลิกที่หัวใจ และตัวเลขเป็น 0 เมื่อคลิกอีกครั้ง
  if (counter === 0) {
    counter = 1;
  } else {
    counter = 0;
  }
  
  // แสดงค่าตัวเลขใหม่
  counterElement.innerHTML = counter;
}
