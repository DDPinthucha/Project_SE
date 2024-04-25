const assert = require("assert");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { JSDOM } = require("jsdom");
const dom = new JSDOM("<!DOCTYPE html><html><body></body></html>");
global.document = dom.window.document;

jest.setTimeout(30000); // เพิ่ม timeout ที่ 30 วินาที

describe("Perform Registration", function () {
  it("Check if you can register the account", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("file:///C:/Users/Deede/panp4n/register.html");
      await driver.findElement(By.id("username")).sendKeys("test01");
      await driver.findElement(By.id("email")).sendKeys("test01@g.swu.ac.th");
      await driver.findElement(By.id("password")).sendKeys("111111");
      await driver.findElement(By.id("password_confirm")).sendKeys("111111");
      await driver.findElement(By.id("submitbtt")).click();
      await driver.wait(until.alertIsPresent(), 10000);

      let alert = await driver.switchTo().alert();
      let alertText = await alert.getText();
      expect(alertText).toBe("Account created successfully");

      await alert.accept();
    } finally {
      await driver.quit();
    }
  });
});