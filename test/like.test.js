

//ยังเอ๋ออยู่

describe("checkAndLike function", function() {
  // เรียกใช้ฟังก์ชัน checkAndLike โดยให้ผู้ใช้ล็อกอิน
  it("should increase counter when user is logged in", function() {
    // Arrange
    $("#counter").text("0"); // ตั้งค่า counter เป็น 0
    spyOn(window, "alert"); // Spy ตัวฟังก์ชัน alert
    
    // Act
    checkAndLike(); // เรียกใช้ฟังก์ชัน checkAndLike
    
    // Assert
    expect($("#counter").text()).toEqual("1"); // ต้องมีการเพิ่ม counter ให้เป็น 1
    expect(window.alert).not.toHaveBeenCalled(); // ไม่ควรมีการแสดง alert
  });

  // เรียกใช้ฟังก์ชัน checkAndLike โดยให้ผู้ใช้ยังไม่ได้ล็อกอิน
  it("should display alert and redirect to login page when user is not logged in", function() {
    // Arrange
    spyOn(window, "alert"); // Spy ตัวฟังก์ชัน alert
    spyOn(window.location, "href"); // Spy ตัวแปร window.location.href
    
    // Act
    checkAndLike(); // เรียกใช้ฟังก์ชัน checkAndLike
    
    // Assert
    expect(window.alert).toHaveBeenCalled(); // ควรมีการแสดง alert
    expect(window.location.href).toHaveBeenCalledWith("/login.html"); // ควรมีการเปลี่ยนเส้นทาง URL ไปยังหน้า login.html
  });
});
