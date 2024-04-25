const assert = require("assert");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;

jest.setTimeout(30000); // เพิ่ม timeout ที่ 30 วินาที


  describe("Search Functionality", function () {
    it("should redirect to the correct URL if search query is found", async function () {
      let driver = await new Builder().forBrowser("chrome").build();
      try {
        await driver.get("C:\\Users\\Deede\\panp4n\\ContentPage\\FinanceSection\\Invest.html");
        await driver.findElement(By.css(".search-bar input[name='search']"))
        .sendKeys("มือใหม่หัดเริ่มลงทุน", Key.RETURN);
        await driver.wait(until.urlContains("/ContentPage/FinanceSection/Invest.html"), 10000);
        const currentURL = await driver.getCurrentUrl();
        expect(currentURL).toContain("/ContentPage/FinanceSection/Invest.html");
      } finally {
        await driver.quit();
      }
    });
  
});