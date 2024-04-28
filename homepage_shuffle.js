
var cards = [
    {
        image: "images/graph.jpg",
        title: "กราฟคืออะไร",
        content: "กราฟคืออะไรและมีประโยชน์อย่างไร มารู้จักกัน!",
        link: "ContentPage/GraphSum_page.html",
    },
    {
        image: "images/tax.jpg",
        title: "การคำนวณภาษี",
        content: "การคำนวนภาษีไม่ยากอย่างที่คิด! มาดูวิธีคำนวนกันเถอะ",
        link: "ContentPage/TaxCalculation_page.html",
    },
    {
        image: "images/FirstAid.jpg",
        title: "การปฐมพยาบาลเบื้องต้น",
        content: "ข้อเท้าพลิกควรทำยังไงดีนะ วันนี้เรามีคำตอบค่าาา",
        link: "ContentPage/FirstAid_page.html",
    },
    {
        image: "images/Earthquake.jpg",
        title: "วิธีเอาตัวรอดจากแผ่นดินไหว",
        content: "แผ่นดินไหวอาจเป็นเรื่องไกลตัวสำหรับหลายคน แต่รู้ไว้ไม่เสียหายแถมยังสามารถช่วยเอาตัวรอดได้อีกด้วย!",
        link: "ContentPage/Earthquake_page.html",
    },
    {
        image: "images/inves.jpg",
        title: "มือใหม่เริ่มลงทุน",
        content: "มือใหม่! เริ่มอ่าน! Fund Fact Sheet อย่างไรดี",
        link: "ContentPage/Inves_page.html",
    },
    {
        image: "images/Stress.jpg",
        title: "วิธีจัดการความเครียด",
        content: "มัดรวม! 5 วิธีจัดการความเครียดแบบง่ายๆ",
        link: "ContentPage/Stress_page.html",
    },
    {
        image: "images/Organ.jpg",
        title: "8 อวัยวะเหล่านี้ กลัวอะไร?",
        content: "อวัยวะในร่างกายของเราก็มีสิ่งที่กลัวเหมือนกันนะ แต่ว่าจะมีอะไรบ้างล่ะ?",
        link: "ContentPage/Organ_page.html",
    },
    {
        image: "images/SkinHealth.jpg",
        title: "สุขภาพผิวดี ทำง๊ายง่าย ด้วยตัวเอง!",
        content: "สาว ๆ หนุ่ม ๆ มาดูแลสุขภาพผิวกันเถอะ!",
        link: "ContentPage/SkinHealth_page.html",
    },
    {
        image: "images/WriteEmail.jpg",
        title: "ทักษะในการเขียนอีเมลเบื้องต้นในภาษาอังกฤษ",
        content: "มัดรวม ประโยคภาษาอังกฤษปัง ๆ สำหรับการเขียนอีเมล",
        link: "ContentPage/WriteEmail_page.html",
    },
    {
        image: "images/Vocab.jpg",
        title: "สำนวนภาษาอังกฤษน่ารู้ได้ใช้บ่อยแน่นอน!",
        content: "จดเลย! 8 สำนวนภาษาอังกฤษในชีวิตประจำ",
        link: "ContentPage/Vocab_page.html",
    },
    {
        image: "images/HowtoSpeak.jpg",
        title: "เทคนิคการพูดจาโน้มน้าวใจ",
        content: "รู้หรือไม่! การพูดจาโน้มน้าวเป็นจิตวิทยาในการทำให้ผู้ฟังรู้สึกคล้อยตามเรา จะมีอะไรบ้างนะ!?",
        link: "ContentPage/HowtoSpeak_page.html",
    },
    {
        image: "images/Courtesy.jpg",
        title: "มารยาทตามหลักสากล",
        content: "รีบดูเลย1? 13 มารยาทในสังคม ที่เราควรมี",
        link: "ContentPage/Courtesy_page.html",
    },
    {
        image: "images/Social.jpg",
        title: "วิธีสร้างความมั่นใจให้คนขี้อายกล้าเข้าสังคม",
        content: "ชาวอินโทรเวิร์ตฟังทางนี้ วิธีเข้าสังคมฉบับ คนโลกส่วนตัวสูงชอบอยู่คนเดียว!",
        link: "ContentPage/Social_page.html",
    },
    {
        image: "images/Menu.jpg",
        title: "7 เมนูมื้อเย็น ช่วงลดน้ำหนัก",
        content: "7 วัน 7 เมนูมื้อเย็น อร่อยไม่ซ้ำ",
        link: "ContentPage/Menu_page.html",
    },
    {
        image: "images/Nutrient.jpg",
        title: "สารอาหารที่จำเป็นต่อร่างกาย",
        content: "อาหาร 9 ชนิดที่ควรกินทุกวัน!",
        link: "ContentPage/Nutrient_page.html",
    },
    {
        image: "images/Grade4.jpg",
        title: "เรียนอย่างไรให้ได้เกรด 4.00",
        content: "เทคนิคลับที่อาจารย์ไม่รู้! เรียนอย่างไรให้ได้เกรด 4.00 ฉบับเด็กขี้เกียจ",
        link: "ContentPage/Grade4_page.html",
    },
    {
        image: "images/ManageTime.jpg",
        title: "เคล็ดลับการบริหารเวลา",
        content: "How to จัดการชีวิตช่วงที่งานท่วมหัวเต็มไปหมดดดด",
        link: "ContentPage/ManageTime_page.html",
    },
    {
        image: "images/Plan.jpg",
        title: "เทคนิควางแผนการเที่ยว",
        content: "แชร์วิธีวางแผนการเที่ยวง่าย ๆ เดินทางสะสวกแน่นอน!",
        link: "ContentPage/Plan_page.html",
    },
    {
        image: "images/Law.jpg",
        title: "กฎหมายเบื้องต้น",
        content: "กฎหมายที่ควรรู้ในชีวิตประจำวัน รู้ไว้จะได้ไม่โดนเอาเปรียบ!",
        link: "ContentPage/Law_page.html",
    },
    {
        image: "images/Prepare.jpg",
        title: "จัดกระเป๋าเดินทางไปต่างประเทศอย่างไรดีนะ?",
        content: "เทคนิคการจัดกระเป่าไปต่างประเทศฉบับคนไม่เคยไป ",
        link: "ContentPage/Prepare_page.html",
    },
]

// Function to shuffle the array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

// Shuffle the cards array
var shuffledCards= shuffleArray(cards).slice(0,4);


window.onload = function(){
    const section = localStorage.getItem('section');
    show(section, () =>{
        const links_content = document.querySelectorAll('.btn')
         
        for (let i = 0; i < allSection.length; i++) {
            const contents = allSection[i];
            if(section === contents.section){
                for (let j = 0; j < contents.allcontent.length; j++) {
                    const detail = contents.allcontent[j];
                    const linkCon = links_content[j];
                    console.log(detail)
                    console.log(linkCon)
                    linkCon.addEventListener("click",function(){
                        localStorage.setItem('detail',detail)
                });
                    
                }
            }
        
        }

        });
};

