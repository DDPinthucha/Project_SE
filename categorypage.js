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
    loadPage(0);
});
document.getElementById('link2').addEventListener('click', function() {
    loadPage(1);
});

