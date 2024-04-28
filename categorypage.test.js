
// นำเข้าโมดูลที่จำเป็นของ Node.js
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const { fireEvent, getByText } = require('@testing-library/dom');
const { toBeInTheDocument, toHaveTextContent } = require('@testing-library/jest-dom/matchers');

// Polyfill TextEncoder หากยังไม่ได้นิยาม
global.TextEncoder = require('util').TextEncoder;

// จำลอง localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: key => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    }
  };
})();

// จำลอง localStorage อย่างทั่วโลก
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// เพิ่มฟังก์ชันที่นำเข้าไว้ในวัตถุ Jest global
expect.extend({ toBeInTheDocument, toHaveTextContent });

// อ่านเนื้อหา HTML ของหน้าเว็บของคุณ
const html = fs.readFileSync(path.resolve(__dirname, './categorypage.html'), 'utf8');

// บอกถึงชุดทดสอบ
describe('Clicking on product links', () => {
  let dom;
  let window;
  let document;

  beforeEach(() => {
    // โหลดเนื้อหา HTML ลงในเอกสาร
    dom = new JSDOM(html, { runScripts: 'dangerously', encoding: 'utf-8' });
    window = dom.window;
    document = window.document;
    global.document = document;

    // นำเข้าไฟล์ JavaScript ที่จะทดสอบ
    require('./categorypage.js');

    // ตรวจสอบว่าลิงก์ถูกนิยามอย่างถูกต้องหรือไม่
    if (!window.links) {
      throw new Error('Links are not defined or empty');
    }
  });

  test('Clicking on a product link should set localStorage', () => {
    // การจัดเตรียม: เตรียมองค์ประกอบและเหตุการณ์
    const productLink = getByText(document.body, 'การเข้าสังคม');
    const expectedSection = 'Socializing';

    // การกระทำ: จำลองเหตุการณ์คลิกที่ลิงก์สินค้า
    fireEvent.click(productLink);

    // การยืนยัน: ตรวจสอบว่า localStorage ถูกตั้งค่าด้วยส่วนที่คาดหวังหรือไม่
    expect(localStorage.getItem('section')).toBe(expectedSection);
  });

  // เพิ่มการทดสอบเพิ่มเติมสำหรับลิงก์สินค้าอื่น ๆ หากต้องการ
});