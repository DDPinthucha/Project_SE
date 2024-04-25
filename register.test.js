require("chromedriver");

// import this classes from selenium
const path = require('path');
const { Builder, By, Key, until } = require("selenium-webdriver");
var assert = require("assert");

jest.setTimeout(50000); 

describe("Perform Registration", function () {
  it("Check if account registration is successful", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("file:///C:/Users/Deede/panp4n/register.html");

      // กรอกข้อมูลที่จำเป็นในฟอร์มลงทะเบียน
      await driver.findElement(By.id("username")).sendKeys("sc651010421");
      await driver.findElement(By.id("email")).sendKeys("sc651010421@g.swu.ac.th");
      await driver.findElement(By.id("password")).sendKeys("123456");
      await driver.findElement(By.id("password_confirm")).sendKeys("123456");

      // คลิกปุ่ม register
      await driver.findElement(By.id("submitbtt")).click();

      // รอให้ alert ปรากฏขึ้น
      await driver.wait(until.alertIsPresent(), 10000);

      // จับ alert
      let alert = await driver.switchTo().alert();
      let alertText = await alert.getText();
      expect(alertText).toBe("Account created successfully");

      // กดปุ่ม OK ใน alert
      await alert.accept();
    } finally {
      await driver.quit();
    }
  });
});
