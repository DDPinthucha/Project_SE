const assert = require("assert");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;

jest.setTimeout(30000); // เพิ่ม timeout ที่ 30 วินาที

describe("Navigation", function () {
  it("should navigate from CategoryPage to HomePage when LearnHuff button is clicked", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
      // Load the CategoryPage
      await driver.get("C:\\Users\\Deede\\panp4n\\CategoryPage.html");

      // Click on the LearnHuff button in the Navbar
      await driver.findElement(By.css(".navbar")).click();

      // Wait until HomePage is loaded
      await driver.wait(async function() {
        const currentURL = await driver.getCurrentUrl();
        return currentURL.includes("/HomePage.html");
      }, 30000); // เพิ่ม timeout ที่ 30 วินาที

      // Check if the URL contains HomePage
      const currentURL = await driver.getCurrentUrl();
      expect(currentURL).toContain("/HomePage.html");
    } finally {
      await driver.quit();
    }
  });
});
