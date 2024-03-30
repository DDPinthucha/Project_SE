let like_flag = false;
let dislike_flag = false;

function liked(event) {
  let counter = parseFloat(document.getElementById("counter").innerHTML);
  var button = event.target.getAttribute("data-button"); // เพิ่ม attribue 'data-button' ใน HTML และตั้งค่าเป็น 'like'
  var imageSrc = event.target.getAttribute("src"); // เพิ่ม attribute 'src' เพื่อให้สามารถตรวจสอบรูปภาพที่ถูกคลิกได้

  if (imageSrc.includes("/images/heart.png")) {
    // ตรวจสอบว่ารูปภาพที่ถูกคลิกเป็นรูป messageImage_1711734441116.jpg หรือไม่
    counter++;
  } else {
    switch (button) {
      case "like":
        if (like_flag == false && dislike_flag == false) {
          counter++;
          like_flag = true;
        } else if (like_flag == false && dislike_flag == true) {
          counter++; // เปลี่ยนจาก counter = counter + 1 เป็น counter++
          like_flag = true;
          dislike_flag = false;
        } else {
          counter--;
          like_flag = false;
        }
        break;
    }
  }

  console.log("the button " + button + " was pressed");

  document.getElementById("counter").innerHTML = counter;
}
