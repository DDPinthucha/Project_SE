
function handleSearch() {
    const searchQuery = document.querySelector('.search-bar input[name="search"]').value.trim();
    const topics = [
        { query: "วิธีการคำนวณภาษีเบื้องต้น", url: "/ContentPage/TaxCalculation_page.html",section:"Finance",detail:"tax"},
        { query: "มือใหม่เริ่มลงทุน", url: "/ContentPage/Invest_page.html",section:"Finance",detail:"invest" },
        { query: "การปฐมพยาบาลเบื้องต้น", url: "/ContentPage/FirstAid_page.html",section:"Healthy",detail:"FirstAid" },
        { query: "วิธีการจัดการความเครียด", url: "/ContentPage/Stress_page.html",section:"Healthy",detail:"Stress" },
        { query: "อวัยวะเหล่านี้กลัวอะไร?", url: "/ContentPage/Organ_page.html",section:"Healthy",detail:"Organ" },
        { query: "สุขภาพผิวดี ทำง่ายๆ", url: "/ContentPage/SkinHealth_page.html",section:"Healthy",detail:"SkinHealth" },
        { query: "ทักษะในการเขียนอีเมลเบื้องต้นในภาษาอังกฤษ", url: "/ContentPage/WriteEmail_page.html",section:"Communication",detail:"WriteEmail" },
        { query: "สำนวนภาษาอังกฤษน่ารู้ ได้ใช้บ่อยแน่!", url: "/ContentPage/Vocab_page.html",section:"Communication",detail:"Vocab" },
        { query: "เทคนิคการพูดโน้มน้าวใจ", url: "/ContentPage/HowToSpeak_page.html",section:"Communication",detail:"HowtoSpeak" },
        { query: "มารยาทตามหลักสากล", url: "/ContentPage/Courtesy_page.html",section:"Socializing",detail:"Courtesy" },
        { query: "วิธีสร้างความมั่นใจให้คนขี้อายกล้าเข้าสังคม", url: "/ContentPage/Social_page.html",section:"Socializing",detail:"Social" },
        { query: "เมนูมื้อเย็น ช่วงลดน้ำหนัก", url: "/ContentPage/Menu_page.html",section:"Food",detail:"Menu" },
        { query: "สารอาหารที่จำเป็นต่อร่างกาย", url: "/ContentPage/Nutrient_page.html",section:"Food",detail:"Nutrient" },
        { query: "กราฟคืออะไร", url: "/ContentPage/GraphSum_page.html",section:"Learning",detail:"GraphSum" },
        { query: "เรียนยังไง ให้ได้ 4.00", url: "/ContentPage/Grade4_page.html",section:"Learning",detail:"Grade4" },
        { query: "เคล็ดลับการบริหารเวลา", url: "/ContentPage/ManageTime_page.html",section:"Manage",detail:"ManageTime"},
        { query: "แชร์วิธีทำแพลนเที่ยว", url: "/ContentPage/Plan_page.html",section:"Manage",detail:"Plan"},
        { query: "กฎหมายเบื้องต้น", url: "/ContentPage/Law_page.html",section:"Other",detail:"Law"},
        { query: "วิธีเอาตัวรอดจากแผ่นดินไหว", url: "/ContentPage/Earthquake_page.html",section:"Other",detail:"Earthquake" },
        { query: "จัดกระเป๋าเดินทางไปต่างประเทศ", url: "/ContentPage/Prepare_page.html",section:"Other",detail:"Prepare" }

    ];

    const topic = topics.find(topic => topic.query === searchQuery);
    if (topic) {
        localStorage.setItem('section', topic.section);
        localStorage.setItem('detail', topic.detail);
        window.location.href = topic.url;
        return false; // ป้องกันฟอร์มส่งค่าไปที่ URL ที่ระบุในแอททริบิวต์ action
    } else {
        alert("ขออภัย ไม่มีรายการที่ท่านต้องการค้นหา");
        return false; // ส่งค่าฟอร์มไปที่ URL ที่ระบุในแอททริบิวต์ action
    }
}
// เรียกใช้งานฟังก์ชัน showSearchSuggestions() เมื่อหน้าเว็บโหลด
document.addEventListener("DOMContentLoaded", showSearchSuggestions)


function showSearchSuggestions() {
    const topics = [
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
    const datalist = document.getElementById("search-suggestions");
    datalist.innerHTML = ""; // เคลียร์ค่าที่อยู่ใน datalist ก่อนที่จะเพิ่มใหม่
    topics.forEach(topic => {
        const option = document.createElement("option");
        option.value = topic;
        datalist.appendChild(option);
    });
    

};

