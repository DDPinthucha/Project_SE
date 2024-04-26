require("chromedriver");

const { Builder, By, Key, until } = require("selenium-webdriver");
var assert = require("assert");

jest.setTimeout(50000); 

describe("Perform Search", function () {
  it("Check if you can navigate to the category page from the homepage", async function () {
    let driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("C:\\cygwin64\\home\\Rujapa\\panp4n\\homepage.html");

      // Click on the "หมวดหมู่" link
      await driver.findElement(By.linkText("หมวดหมู่")).click();

      // Wait for the category page to load
      await driver.wait(until.titleIs("Category Page"), 10000);

      // Verify if the title "Category Page" is found
      let pageTitle = await driver.getTitle();
      assert.strictEqual(pageTitle, "Category Page");

      console.log("Page Title:", pageTitle);
    } finally {
      await driver.quit();
    }
  });
});