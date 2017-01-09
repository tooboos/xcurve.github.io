var dsg = document.querySelector('#btn1');
var ill = document.querySelector('#btn2');
dsg.addEventListener('click', function () {
    dsg.classList.add("active");
    ill.classList.remove("active");
    document.querySelector('.design').style.display = "block";
    document.querySelector('.illustrations').style.display = "none";
});

ill.addEventListener('click', function () {
    ill.classList.add("active");
    dsg.classList.remove("active");
    document.querySelector('.design').style.display = "none";
    document.querySelector('.illustrations').style.display = "block";
});