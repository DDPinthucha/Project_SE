const assert = require("assert");
const { Builder, By, Key, until } = require("selenium-webdriver");

jest.setTimeout(20000); // เปลี่ยน timeout เป็น 20000 milliseconds (20 วินาที)

describe("Search Functionality", function () {
  it("should redirect to the correct URL if search query is found", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("C:\\Users\\Deede\\panp4n\\ContentPage\\FinanceSection\\Invest.html");

      // เลือกข้อมูลการค้นหา
      await driver.findElement(By.css(".search-bar input[name='search']")).sendKeys("มือใหม่หัดเริ่มลงทุน", Key.RETURN);

      // รอให้หน้าเว็บโหลดเสร็จสมบูรณ์
      await driver.wait(until.urlContains("/ContentPage/FinanceSection/Invest.html"), 10000);

      // ตรวจสอบ URL หลังจากค้นหา
      const currentURL = await driver.getCurrentUrl();
      expect(currentURL).toContain("/ContentPage/FinanceSection/Invest.html");
    } finally {
      await driver.quit();
    }
  });
  it("should show an alert if search query is not found", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("C:\\Users\\Deede\\panp4n\\homepage.html"); // เปลี่ยน URL ของเว็บไปที่หน้าที่มีฟอร์มค้นหา

      // เลือกข้อมูลการค้นหา
      await driver.findElement(By.css(".search-bar input[name='search']")).sendKeys("คำค้นหาที่ไม่มีในรายการ", Key.RETURN);

      // รอให้ Alert แสดงขึ้น
      await driver.wait(until.alertIsPresent(), 5000);

      // ตรวจสอบ Alert
      const alert = await driver.switchTo().alert();
      const alertText = await alert.getText();
      expect(alertText).to.equal("ขออภัย ไม่มีรายการที่ท่านต้องการค้นหา"); // ใช้ expect จาก chai เปรียบเทียบข้อความใน alert
    } finally {
      await driver.quit();
    }
  });
});