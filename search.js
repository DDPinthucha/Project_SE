function handleSearch() {
    const searchQuery = document.querySelector('.search-bar input[name="search"]').value.trim();
    const topics = [
        { query: "วิธีการคำนวณภาษีเบื้องต้น", url: "/ContentPage/FinanceSection/Tax.html" },
        { query: "มือใหม่เริ่มลงทุน", url: "/ContentPage/FinanceSection/Invest.html" },
        { query: "การปฐมพยาบาลเบื้องต้น", url: "/ContentPage/HealthSection/FirstAid.html" },
        { query: "วิธีการจัดการความเครียด", url: "/ContentPage/HealthSection/Stress.html" },
        { query: "อวัยวะเหล่านี้กลัวอะไร?", url: "/ContentPage/HealthSection/Organ.html" },
        { query: "สุขภาพผิวดี ทำง่ายๆ", url: "/ContentPage/HealthSection/SkinHealth.html" },
        { query: "ทักษะในการเขียนอีเมลเบื้องต้นในภาษาอังกฤษ", url: "/ContentPage/CommunicationSection/WriteEmail.html" },
        { query: "สำนวนภาษาอังกฤษน่ารู้ ได้ใช้บ่อยแน่!", url: "/ContentPage/CommunicationSection/Vocab.html" },
        { query: "เทคนิคการพูดโน้มน้าวใจ", url: "/ContentPage/CommunicationSection/HowtoSpeak.html" },
        { query: "มารยาทตามหลักสากล", url: "/ContentPage/SocializingSection/Courtesy.html" },
        { query: "วิธีสร้างความมั่นใจให้คนขี้อายกล้าเข้าสังคม", url: "/ContentPage/SocializingSection/Social.html" },
        { query: "เมนูมื้อเย็น ช่วงลดน้ำหนัก", url: "/ContentPage/FoodSection/Menu.html" },
        { query: "สารอาหารที่จำเป็นต่อร่างกาย", url: "/ContentPage/FoodSection/Nutrient.html" },
        { query: "กราฟคืออะไร", url: "/ContentPage/LearningSection/Graph.html" },
        { query: "เรียนยังไง ให้ได้ 4.00", url: "/ContentPage/LearningSection/Garde4.html" },
        { query: "เคล็ดลับการบริหารเวลา", url: "/ContentPage/ManageSection/ManageTime.html" },
        { query: "แชร์วิธีทำแพลนเที่ยว", url: "/ContentPage/ManageSection/Plan.html" },
        { query: "กฎหมายเบื้องต้น", url: "/ContentPage/OtherSection/Law.html" },
        { query: "วิธีเอาตัวรอดจากแผ่นดินไหว", url: "/ContentPage/OtherSection/EarthQuake.html" },
        { query: "จัดกระเป๋าเดินทางไปต่างประเทศ", url: "/ContentPage/OtherSection/Prepare.html" }

    ];

    const topic = topics.find(topic => topic.query === searchQuery);
    if (topic) {
        window.location.href = topic.url;
        return false; // ป้องกันฟอร์มส่งค่าไปที่ URL ที่ระบุในแอททริบิวต์ action
    } else {
        alert("ขออภัย ไม่มีรายการที่ท่านต้องการค้นหา");
        return false; // ส่งค่าฟอร์มไปที่ URL ที่ระบุในแอททริบิวต์ action
    }
}

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
}

// เรียกใช้งานฟังก์ชัน showSearchSuggestions() เมื่อหน้าเว็บโหลด
document.addEventListener("DOMContentLoaded", showSearchSuggestions);