window.onload = function() {
    loadPage(0);
};
function loadPage(pageIndex) {
    const page = pages[pageIndex];
    document.getElementById('content-title').textContent = page.title;
    document.getElementById('content-body').textContent = page.body;
    document.getElementById('content-image').src = page.image;
}
document.getElementById('link1').addEventListener('click', function() {
<<<<<<< HEAD
    loadPage(0);
=======
    loadPage(0); 
>>>>>>> 43f600bc033a7471d8f8b9b28b256b1df5690e6b
});
document.getElementById('link2').addEventListener('click', function() {
<<<<<<< HEAD
    loadPage(1);
=======
    loadPage(1); 
>>>>>>> 43f600bc033a7471d8f8b9b28b256b1df5690e6b
});

