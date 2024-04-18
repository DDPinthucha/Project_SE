var cards = [
    {
        id:1, /*Learning*/
        type:"Learning",
        image: "/images/graph.jpg",
        title: "กราฟคืออะไร ?",
        content: "มารู้จักกับกราฟกัน! กราฟคืออะไร และมันมีประโยชน์อย่างไรกันนะ ?",
        link: "ContentPage/FinanceSection/Invest.html",
    },
    {
        id:2, /*Finance*/ 
        type:"Finance",
        image: "/images/tax.jpg",
        title: "การคำนวณภาษีเบื้องต้น",
        content: "การคำนวนภาษีไม่ยากอย่างที่คิด! มาดูวิธีคำนวนกันเถอะ",
        link: "ContentPage/FinanceSection/Invest.html",
    },
    {
        id:3, /*Healthy*/
        type:"Healthy",
        image: "/images/FirstAid.jpg",
        title: "การปฐมพยาบาลเบื้องต้น",
        content: "ข้อเท้าพลิกควรทำยังไงดีนะ วันนี้เรามีคำตอบค่าาา",
        link: "ContentPage/FinanceSection/Invest.html",
    },
    {
        id:4, /*Other*/
        type:"Other",
        image: "/images/Earthquake.jpg",
        title: "วิธีเอาตัวรอดจากแผ่นดินไหว",
        content: "แผ่นดินไหวอาจเป็นเรื่องไกลตัวสำหรับหลายคน แต่รู้ไว้ไม่เสียหายแถมยังสามารถช่วยเอาตัวรอดได้อีกด้วย!",
        link: "ContentPage/FinanceSection/Invest.html",
    },
    {
        id:5, /*Finance*/ 
        type:"Finance",
        image: "/images/inves.jpg",
        title: "มือใหม่เริ่มลงทุน",
        content: "อ่าน Fund Fact Sheet ก่อนเริ่มลงทุน เรื่องง่ายๆ ที่มือใหม่ก็ทำได้",
        link: "",
    },
    {
        id:6, /*Healthy*/
        type:"Healthy",
        image: "/images/Stress.jpg",
        title: "วิธีจัดการความเครียด",
        content: "มัดรวม! 5 วิธีเด็ดจัดการความเครียดให้อยู่หมัด ตามแบบฉบับนักจิตวิทยา",
        link: "",
    },
    {
        id:7, /*Healthy*/
        type:"Healthy",
        image: "/images/Organ.jpg",
        title: "8 อวัยวะเหล่านี้ กลัวอะไร?",
        content: "อวัยวะในร่างกายของเราก็มีสิ่งที่กลัวเหมือนกันนะ แต่ว่าจะมีอะไรบ้างล่ะ? แล้วรีบดูแลให้ดีเลย",
        link: "",
    },
    {
        id:8, /*Healthy*/
        type:"Healthy",
        image: "/images/SkinHealth.jpg",
        title: "สุขภาพผิวดี ทำง๊ายง่าย ด้วยตัวเอง!",
        content: "สาว ๆ หนุ่ม ๆ มาดูแลสุขภาพผิวกันเถอะ! เพื่อผิวสุขภาพดีและเปล่งปลั่ง ",
        link: "",
    },
    {   
        id:9, /* Commucation*/
        type:"Communication",
        image: "/images/WriteEmail.jpg",
        title: "ทักษะในการเขียนอีเมลเบื้องต้นในภาษาอังกฤษ",
        content: "มัดรวม ประโยคภาษาอังกฤษปัง ๆ สำหรับการเขียนอีเมลภาษาอังกฤษอย่างมืออาชีพ",
        link: "",
    },
    {
        id:10, /* Communication*/
        type:"Communication",
        image: "/images/Vocab.jpg",
        title: "สำนวนภาษาอังกฤษน่ารู้ได้ใช้บ่อยแน่นอน!",
        content: "จดเลย! 8 สำนวนภาษาอังกฤษที่ใช้ในชีวิตประจำวัน สำนวนดี ความหมายโดน พร้อมคำแปล ใช้ได้ทั้งเรียนและทำงาน",
        link: "",
    },
    {
        id:11,/* Communication*/
        type:"Communication",
        image: "/images/HowtoSpeak.jpg",
        title: "เทคนิคการพูดจาโน้มน้าวใจ",
        content: "รู้หรือไม่! การพูดจาโน้มน้าวเป็นจิตวิทยาในการทำให้ผู้ฟังรู้สึกคล้อยตามเรา จะมีอะไรบ้างนะ!?",
        link: "",
    },
    {
        id:12,/*Socializing*/ 
        type:"Socializing",
        image: "/images/Courtesy.jpg",
        title: "มารยาทตามหลักสากล",
        content: "รีบดูเลย ! 13 มารยาทในสังคมพื้นฐาน ที่เราควรมี จะมีอะไรบ้างน๊า? แล้วเรามีครบทุกข้อหรือเปล่า??",
        link: "",
    },
    {
        id:13, /*Socializing*/ 
        type:"Socializing",
        image: "/images/Social.jpg",
        title: "วิธีสร้างความมั่นใจ ให้คนขี้อายกล้าเข้าสังคม",
        content: "ชาว introvert มาทางนี้เล๊ย วิธีเข้าสังคมฉบับ 'คนโลกส่วนตัวสูงชอบอยู่คนเดียว !'",
        link: "",
    },
    {
        id:14, /*Food*/ 
        type:"Food",
        image: "/images/Menu.jpg",
        title: "7 เมนูมื้อเย็น ช่วงลดน้ำหนัก",
        content: "แนะนำอาหารเย็นไม่อ้วน 7 เมนูไขมันต่ำ ช่วยควบคุมน้ำหนัก ลดพุงได้ 7 วัน 7 เมนูมื้อเย็น",
        link: "",
    },
    {
        id:15, /*Food*/ 
        type:"Food",
        image: "/images/Nutrient.jpg",
        title: "สารอาหารที่จำเป็นต่อร่างกาย",
        content: "สารอาหาร 9 ชนิด ที่ร่างกายควรได้รับต่อวัน มีอะไรบ้าง",
        link: "",
    },
    {
        id:16, /*Learning*/
        type:"Learning",
        image: "/images/Grade4.jpg",
        title: "เรียนอย่างไรให้ได้เกรด 4.00",
        content: "เทคนิคลับที่อาจารย์ไม่รู้! เรียนอย่างไรให้ได้เกรด 4.00 ฉบับเด็กขี้เกียจ มาดูกัน !!",
        link: "",
    },
    {
        id:17, /*Manage*/
        type:"Manage",
        image: "/images/ManageTime.jpg",
        title: "เคล็ดลับการบริหารเวลา",
        content: "How to จัดการชีวิตให้ง่ายขึ้นด้วยวิธีบริหารเวลาอย่างมีประสิทธิภาพ !!",
        link: "",
    },
    {
        id:18, /*Manage*/
        type:"Manage",
        image: "/images/Plan.jpg",
        title: "เทคนิควางแผนการเที่ยว",
        content: "แชร์เทคนิควางแผนเที่ยวให้สนุก ไม่วุ่นวาย เดินทางอย่างไรไม่มีสะดุดแน่นอน!!",
        link: "",
    },
    {
        id:19, /*Other*/
        type:"Other",
        image: "/images/Law.jpg",
        title: "กฎหมายเบื้องต้น",
        content: "กฎหมายที่ควรรู้ในชีวิตประจำวัน รู้ไว้จะได้ไม่โดนเอาเปรียบ!",
        link: "",
    },
    {
        id:20, /*Other*/
        type:"Other",
        image: "/images/Prepare.jpg",
        title: "จัดกระเป๋าเดินทางไปต่างประเทศอย่างไรดีนะ?",
        content: "เทคนิคการจัดกระเป่าไปต่างประเทศฉบับคนไม่เคยไป ฉบับมือโปร ",
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

window.onload = function(){
    /*show(window.location.hash.substring(1));*/
    const section = localStorage.getItem('section');
    show(section);
};


function show(section) {
    let showCard = document.getElementById("card-for-section");
    const sectionHead = getSectionHead(section);
    let headerSection = `<div class="reccom">
    <h2>${sectionHead}</h2>
  </div>`
    showCard.innerHTML = ""+headerSection; // เคลียร์เนื้อหาเก่า
    cards.forEach(card => {
        if (card.type === section) {
           
            showCard.innerHTML += 
          `<div class="card-container">
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

function getSectionHead(section) {
    const sectionInfo = allSection.find(item => item.section === section);
    return sectionInfo ? sectionInfo.head : '';
}
