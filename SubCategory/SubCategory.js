var cards = [
    {
        id:1, /*Learning*/
        type:"Learning",
        image: "images/graph.jpg",
        title: "กราฟคืออะไร",
        content: "กราฟคืออะไรและมีประโยชน์อย่างไร มารู้จักกัน!",
        link: "ContentPage/FinanceSection/Invest.html",
    },
    {
        id:2, /*Finance*/ 
        type:"Finance",
        image: "images/tax.jpg",
        title: "การคำนวณภาษี",
        content: "การคำนวนภาษีไม่ยากอย่างที่คิด! มาดูวิธีคำนวนกันเถอะ",
        link: "ContentPage/FinanceSection/Invest.html",
    },
    {
        id:3, /*Healthy*/
        type:"Healthy",
        image: "images/FirstAid.jpg",
        title: "การปฐมพยาบาลเบื้องต้น",
        content: "ข้อเท้าพลิกควรทำยังไงดีนะ วันนี้เรามีคำตอบค่าาา",
        link: "ContentPage/FinanceSection/Invest.html",
    },
    {
        id:4, /*Other*/
        type:"Other",
        image: "images/Earthquake.jpg",
        title: "วิธีเอาตัวรอดจากแผ่นดินไหว",
        content: "แผ่นดินไหวอาจเป็นเรื่องไกลตัวสำหรับหลายคน แต่รู้ไว้ไม่เสียหายแถมยังสามารถช่วยเอาตัวรอดได้อีกด้วย!",
        link: "ContentPage/FinanceSection/Invest.html",
    },
    {
        id:5, /*Finance*/ 
        type:"Finance",
        image: "images/inves.jpg",
        title: "มือใหม่เริ่มลงทุน",
        content: "มือใหม่! เริ่มอ่าน! Fund Fact Sheet อย่างไรดี",
        link: "",
    },
    {
        id:6, /*Healthy*/
        type:"Healthy",
        image: "images/Stress.jpg",
        title: "วิธีจัดการความเครียด",
        content: "มัดรวม! 5 วิธีจัดการความเครียดแบบง่ายๆ",
        link: "",
    },
    {
        id:7, /*Healthy*/
        type:"Healthy",
        image: "images/Organ.jpg",
        title: "8 อวัยวะเหล่านี้ กลัวอะไร?",
        content: "อวัยวะในร่างกายของเราก็มีสิ่งที่กลัวเหมือนกันนะ แต่ว่าจะมีอะไรบ้างล่ะ?",
        link: "",
    },
    {
        id:8, /*Healthy*/
        type:"Healthy",
        image: "images/SkinHealth.jpg",
        title: "สุขภาพผิวดี ทำง๊ายง่าย ด้วยตัวเอง!",
        content: "สาว ๆ หนุ่ม ๆ มาดูแลสุขภาพผิวกันเถอะ!",
        link: "",
    },
    {   
        id:9, /* Commucation*/
        type:"Communication",
        image: "images/WriteEmail.jpg",
        title: "ทักษะในการเขียนอีเมลเบื้องต้นในภาษาอังกฤษ",
        content: "มัดรวม ประโยคภาษาอังกฤษปัง ๆ สำหรับการเขียนอีเมล",
        link: "",
    },
    {
        id:10, /* Communication*/
        type:"Communication",
        image: "images/Vocab.jpg",
        title: "สำนวนภาษาอังกฤษน่ารู้ได้ใช้บ่อยแน่นอน!",
        content: "จดเลย! 8 สำนวนภาษาอังกฤษในชีวิตประจำ",
        link: "",
    },
    {
        id:11,/* Communication*/
        type:"Communication",
        image: "images/HowtoSpeak.jpg",
        title: "เทคนิคการพูดจาโน้มน้าวใจ",
        content: "รู้หรือไม่! การพูดจาโน้มน้าวเป็นจิตวิทยาในการทำให้ผู้ฟังรู้สึกคล้อยตามเรา จะมีอะไรบ้างนะ!?",
        link: "",
    },
    {
        id:12,/*Socializing*/ 
        type:"Socializing",
        image: "images/Courtesy.jpg",
        title: "มารยาทตามหลักสากล",
        content: "รีบดูเลย1? 13 มารยาทในสังคม ที่เราควรมี",
        link: "",
    },
    {
        id:13, /*Socializing*/ 
        type:"Socializing",
        image: "images/Social.jpg",
        title: "วิธีสร้างความมั่นใจให้คนขี้อายกล้าเข้าสังคม",
        content: "ชาวอินโทรเวิร์ตฟังทางนี้ วิธีเข้าสังคมฉบับ คนโลกส่วนตัวสูงชอบอยู่คนเดียว!",
        link: "",
    },
    {
        id:14, /*Food*/ 
        type:"Food",
        image: "images/Menu.jpg",
        title: "7 เมนูมื้อเย็น ช่วงลดน้ำหนัก",
        content: "7 วัน 7 เมนูมื้อเย็น อร่อยไม่ซ้ำ",
        link: "",
    },
    {
        id:15, /*Food*/ 
        type:"Food",
        image: "images/Nutrient.jpg",
        title: "สารอาหารที่จำเป็นต่อร่างกาย",
        content: "อาหาร 9 ชนิดที่ควรกินทุกวัน!",
        link: "",
    },
    {
        id:16, /*Learning*/
        type:"Learning",
        image: "images/Grade4.jpg",
        title: "เรียนอย่างไรให้ได้เกรด 4.00",
        content: "เทคนิคลับที่อาจารย์ไม่รู้! เรียนอย่างไรให้ได้เกรด 4.00 ฉบับเด็กขี้เกียจ",
        link: "",
    },
    {
        id:17, /*Manage*/
        type:"Manage",
        image: "images/ManageTime.jpg",
        title: "เคล็ดลับการบริหารเวลา",
        content: "How to จัดการชีวิตช่วงที่งานท่วมหัวเต็มไปหมดดดด",
        link: "",
    },
    {
        id:18, /*Manage*/
        type:"Manage",
        image: "images/Plan.jpg",
        title: "เทคนิควางแผนการเที่ยว",
        content: "แชร์วิธีวางแผนการเที่ยวง่าย ๆ เดินทางสะสวกแน่นอน!",
        link: "",
    },
    {
        id:19, /*Other*/
        type:"Other",
        image: "images/Law.jpg",
        title: "กฎหมายเบื้องต้น",
        content: "กฎหมายที่ควรรู้ในชีวิตประจำวัน รู้ไว้จะได้ไม่โดนเอาเปรียบ!",
        link: "",
    },
    {
        id:20, /*Other*/
        type:"Other",
        image: "images/Prepare.jpg",
        title: "จัดกระเป๋าเดินทางไปต่างประเทศอย่างไรดีนะ?",
        content: "เทคนิคการจัดกระเป่าไปต่างประเทศฉบับคนไม่เคยไป ",
        link: "",
    },

];

let allSection = [
    {
        section:"Socializing",
        head:"การเข้าสังคม"
    },
    {
        section:"Finance",
        head:"การเงินเเละการลงทุน"
    },
    {
        section:"Learning",
        head:"การเรียน"
    },
    {
        section:"Manage",
        head:"การวางแผนและการจัดการเวลา"
    },
    {
        section:"Communication",
        head:"การสื่อสาร"
    },
    {
        section:"Healthy",
        head:"สุขภาพ"
    },
    {
        section:"Food",
        head:"อาหาร"
    },
    {
        section:"Other",
        head:"อื่นๆ"
    },
]

document.addEventListener("DOMContentLoaded", function() {
    show(window.location.hash.substring(1)); // แสดงการ์ดสำหรับส่วนที่ถูกเลือกเมื่อหน้าโหลดเสร็จ
});

function show(section) {
    let showCard = document.getElementById("card-for-section");
    showCard.innerHTML = ""; // เคลียร์เนื้อหาเก่า

    cards.forEach(card => {
        if (card.type === section) {
            showCard.innerHTML += `<div class="card-container">
                <div class="card">
                    <img src="${card.image}">
                    <div class="card-content">
                        <h3>${card.title}</h3>
                        <p>${card.content}</p>
                        <a href="${card.link}" class="btn">อ่านเพิ่มเติม</a>
                    </div>
                </div>
            </div>`;
        }
    });
}
