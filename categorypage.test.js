
// Import the required polyfill for TextEncoder
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;

// Import necessary functions and modules
const { fireEvent } = require('@testing-library/dom');
const { JSDOM } = require('jsdom');

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: key => store[key],
    // Replace setItem method with a Jest mock function
    setItem: jest.fn((key, value) => {
      store[key] = value;
    }),
    removeItem: key => delete store[key],
    clear: () => store = {}
  };
})();

// Set up JSDOM
const { document } = new JSDOM('<!doctype html><html><body></body></html>').window;
global.document = document;
global.window = document.defaultView;

// Mock localStorage in JSDOM
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Describe your test suite
describe('Category Page', () => {
  // Write your test case
  test('Clicking on a product link should set the section in localStorage', () => {
    // Arrange: Set up your test environment
    document.body.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Category Page</title>
    <link rel="stylesheet" href="categorypage.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Itim&family=Londrina+Solid:wght@300&display=swap" rel="stylesheet">
    
    </head>
    <body>
    
        <nav class="navbar">
            <header><a href="/homepage.html">LearnHuff</a></header>
            <ul class="nav-list">
              <li><a href="/homepage.html">Learn Huff คืออะไร</a></li>
              <li><a href="">|</a></li>
              <li><a href="#">หมวดหมู่</a></li>
            </ul>
          </nav>
    
    <h1 class="page-title">หมวดหมู่</h1>
    
    
    
    <div class="product-container">
        
        <div class="colum1">
            <div>
                <a href="./SubCategory/SubCategorySection.html" class="product" >
                     <img src="./images/การเข้าสังคม.png" alt="การเข้าสังคมการเข้าสังคม">
                     <div class="product-overlay">
                       <p class="product-description">--- การเข้าสังคม ---</p> 
                    </div>
                </a>
       
        
        <h3 class="product-title">การเข้าสังคม</h3>
    
        </div>     
        
        <div>
        <a href="./SubCategory/SubCategorySection.html" class="product"  >
            <img src="./images/การเงินเเละการลงทุน.png" alt="การเงินเเละการลงทุน">
            <div class="product-overlay">
                
                <p class="product-description">--- การเงินเเละการลงทุน ---</p>
            </div>
        </a>
        <h3 class="product-title">การเงินเเละการลงทุน</h3>
        </div>
    
    <div>
        <a href="./SubCategory/SubCategorySection.html" class="product">
            <img src="./images/การเรียน.png" alt="การเรียน">
            <div class="product-overlay">
                
                <p class="product-description">--- การเรียน ---</p>
            </div>
        </a>
        <h3 class="product-title">การเรียน</h3>
    </div>
    
    <div>
        <a href="/SubCategory/SubCategorySection.html" class="product">
            <img src="./images/การวางแผนและการจัดการเวลา.png" alt="การวางแผนและการจัดการเวลา">
            <div class="product-overlay">
                
                <p class="product-description">--- การวางแผนและการจัดการเวลา ---</p>
            </div>
        </a>
        <h3 class="product-title">การวางแผนและการจัดการเวลา</h3>
    </div>
        </div>
        
    
        <div class="colum2">
    <div>
             <a href="./SubCategory/SubCategorySection.html" class="product" >
            <img src="./images/การสื่อสาร.png" alt="การสื่อสาร">
            <div class="product-overlay">
                
                <p class="product-description">--- การสื่อสาร ---</p>
            </div>
        </a>
        <h3 class="product-title">การสื่อสาร</h3>
    </div>
    
    <div>
        <a href="./SubCategory/SubCategorySection.html" class="product">
            <img src="./images/สุขภาพ.png" alt="สุขภาพ">
            <div class="product-overlay">
                
                <p class="product-description">--- สุขภาพ ---</p>
            </div>
        </a>
        <h3 class="product-title">สุขภาพ</h3>
    </div>
    
    <div>
        <a href="./SubCategory/SubCategorySection.html" class="product">
            <img src="images/อาหาร.png" alt="อาหาร">
            <div class="product-overlay">
                
                <p class="product-description">--- อาหาร ---</p>
            </div>
        </a>
        <h3 class="product-title">อาหาร</h3>
    </div>
    
    <div>
        <a href="./SubCategory/SubCategorySection.html" class="product">
            <img src="images/อื่นๆ.png" alt="อื่นๆ">
            <div class="product-overlay">
                
                <p class="product-description">--- อื่นๆ ---</p>
            </div>
        </a>
        <h3 class="product-title">อื่นๆ</h3>
    </div>
    
        </div>
       
    </div>
    
    <script src="categorypage.js"></script>
    </body>
    </html>
    `;

    // Act: Perform the action you want to test
    // For example, if you have a product link with class '.product'
    const productLink = document.querySelector('.product');

    // Log product link for debugging
    console.log('Product link:', productLink);

    // Click on the product link
    fireEvent.click(productLink);

    // Assert: Check if the expected behavior occurred
    // For example, check if localStorage was set correctly
    expect(localStorageMock.setItem).toHaveBeenCalledWith('section', 'Socializing');
  });
});