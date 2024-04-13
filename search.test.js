describe('Search Suggestions Test', () => {
  // Mocking the DOM for testing
  before(() => {
      const jsdom = require('jsdom');
      const { JSDOM } = jsdom;
      const dom = new JSDOM('<!DOCTYPE html><html><body><div id="search-suggestions"></div></body></html>');

      global.document = dom.window.document;
      global.window = dom.window;
  });

  it('should populate search suggestions in the datalist', () => {
      // Call the function to populate search suggestions
      showSearchSuggestions();

      // Expected topics
      const expectedTopics = [
          "วิธีการคำนวณภาษีเบื้องต้น",
          "มือใหม่เริ่มลงทุน",
          "การปฐมพยาบาลเบื้องต้น",
          "วิธีการจัดการความเครียด",
          "อวัยวะเหล่านี้กลัวอะไร?",
          "สุขภาพผิวดี ทำได้ง่ายๆ",
          "ทักษะในการเขียนอีเมลเบื้องต้นในภาษาอังกฤษ",
          "สำนวนภาษาอังกฤษน่ารู้",
          "เทคนิคการพูดจาโน้มน้าวใจ",
          "มารยาทตามหลักสากล",
          "วิธีสร้างความมั่นใจให้คนขี้อาย",
          "เมนูมื้อเย็น ช่วงลดน้ำหนัก",
          "สารอาหารที่จำเป็นต่อร่างกาย",
          "กราฟคืออะไร",
          "เรียนยังไง ให้ได้ 4.00",
          "เคล็ดลับการบริหารเวลา",
          "แชร์วิธีทำแพลนเที่ยว",
          "กฎหมายเบื้องต้น",
          "วิธีเอาตัวรอดจากแผ่นดินไหว",
          "จัดกระเป๋าเดินทางไปต่างประเทศ"
      ];

      // Get populated options in datalist
      const datalist = document.getElementById('search-suggestions');
      const options = Array.from(datalist.children).map(option => option.value);

      // Check if all expected topics are in the options
      expectedTopics.forEach(topic => {
          expect(options).toContain(topic);
      });
  });
});
