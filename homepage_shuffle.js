var cards = [
    {
        image: "images/graph.jpg",
        title: "กราฟคืออะไร",
        content: "เป็นการแสดงผลของเซตของจุดที่แสดงผลอย่างเป็นระเบียบ จัดเป็นแผนภูมิประเภทหนึ่งที่ทำให้เราสามารถวิเคราะห์ข้อมูลต่าง ๆ ได้อย่างเห็นภาพที่ชัดเจน และสะดวกรวดเร็วมากขึ้น ยิ่งไปกว่านั้นคือกราฟยังช่วยให้เราสามารถแก้ระบบสมการที่สลับซับซ้อนได้อีกด้วย",
        link: "",
    },
    {
        image: "images/tax.jpg",
        title: "การคำนวณภาษี",
        content: "การคำนวนภาษีที่หลายคนคิดว่าเป็นเรื่องไกลตัว แต่จริงๆแล้วเป็นสิ่งสำคัญที่ควรรู้ไว้เพื่อประโยชน์ของตนเอง มีวิธีคำนวนง่ายๆดังนี้",
        link: "",
    },
    {
        image: "images/first_aid.jpg",
        title: "การปฐมพยาบาลเบื้องต้น",
        content: "การปฐมพยาบาลเบื้องต้น คือการดูแลผู้ป่วยหรือผู้ได้รับบาดเจ็บในกรณีเกิดเหตุฉุกเฉิน อาจะเป็นเพียงสิ่งเดียวที่สามารถช่วยเขาได้ ในบทความนี้อธิบายขั้นตอนการปฐมพยาบาลในกรณีฉุกเฉินต่างๆ เพื่อที่คุณสามารถปฐมพยาบาลให้ผู้อื่นได้เช่นกัน",
        link: "",
    },
    {
        image: "images/earhquake",
        title: "วิธีเอาตัวรอดจากแผ่นดินไหว",
        content: "แผ่นดินไหวอาจเป็นเรื่องไกลตัวสำหรับหลายคน แต่การเกิดแผ่นดินไหวนั้นเป็นเรื่องที่เราไม่สามารถคาดเดาได้ ดังนั้นเราควรต้องรับมือและรู้วิธีเอาตัวรอดไว้เมื่อเจอเหตุการณ์แผ่นดินไหว",
        link: "",
    },
    {
        image: "images/earhquake",
        title: "test5",
        content: "test5",
        link: "",
    },
    {
        image: "images/earhquake",
        title: "test6",
        content: "test6",
        link: "",
    },
    {
        image: "images/earhquake",
        title: "test7",
        content: "test7",
        link: "",
    },
    {
        image: "images/earhquake",
        title: "test8",
        content: "test8",
        link: "",
    },
    {
        image: "images/earhquake",
        title: "test9",
        content: "test9",
        link: "",
    },
    {
        image: "images/earhquake",
        title: "test10",
        content: "test10",
        link: "",
    },
    {
        image: "images/earhquake",
        title: "test11",
        content: "test11",
        link: "",
    },
    {
        image: "images/earhquake",
        title: "test12",
        content: "test12",
        link: "",
    },
    {
        image: "images/earhquake",
        title: "test13",
        content: "tesst13",
        link: "",
    },
    {
        image: "images/earhquake",
        title: "test14",
        content: "test14",
        link: "",
    },
    {
        image: "images/earhquake",
        title: "test15",
        content: "test15",
        link: "",
    },
];

function shuffleCards(cards){
    for(let i = cards.length - 1; i>0; i--){
        const j = Math.floor(Math.random()*(i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}
function showCards(cards) {
    // ฟังก์ชันแสดงเนื้อหา
    const cardsContainer = document.getElementById("cards");
    cardsContainer.innerHTML = "";
  
    // แสดงเนื้อหา 4 รายการแรก
    for (let i = 0; i < 4; i++) {
      const cards = cards[i];
      const cardElement = document.createElement("div");
      cardElement.classList.add("cards");
      cardElement.innerHTML = `
        <img src="${card.image}">
        <div class="cards-content">
          <h3>${card.title}</h3>
          <p>${card.content}</p>
          <a href="${card.link}" class="btn">อ่านเพิ่มเติม</a>
        </div>
      `;
      cardsContainer.appendChild(cardElement);
    }
  }
  window.onload = function() {
    // สุ่มเรียงลำดับเนื้อหา
    shuffleCards(cards);
  
    // แสดงเนื้อหา 4 รายการแรก
    showCards(cards);
  };