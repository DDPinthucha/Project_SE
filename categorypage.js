


window.onload = function() {
    loadPage(0); // โหลดหน้าแรก
};

// ฟังก์ชันสำหรับโหลดเนื้อหาของหน้าที่กำหนด
function loadPage(pageIndex) {
    const page = pages[pageIndex];
    document.getElementById('content-title').textContent = page.title;
    document.getElementById('content-body').textContent = page.body;
    document.getElementById('content-image').src = page.image;
}

// เชื่อมโยงลิงก์เมื่อคลิกที่ลิงก์เพื่อโหลดเนื้อหาของหน้าอื่น ๆ
document.getElementById('link1').addEventListener('click', function() {
    loadPage(0); 
});

document.getElementById('link2').addEventListener('click', function() {
    loadPage(1); 
});

