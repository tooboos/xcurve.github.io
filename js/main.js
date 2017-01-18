/*var dsg = document.querySelector('#btn1');
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
});*/
    
//$(".slider-design").hide();
$(".slider-illustrations").hide();

$( "#btn1").click(function() {
    $("#btn1").addClass("active");
    $("#btn2").removeClass("active");
    $(".slider-illustrations").fadeOut(400, function(){
        $(".slider-design").fadeIn(2000);
        $('button.slick-next').click();
    });
    
});
$( "#btn2" ).click(function() {
    $("#btn2").addClass("active");
    $("#btn1").removeClass("active");
    $(".slider-design").fadeOut(400, function(){
        $(".slider-illustrations").fadeIn(2000);
        $('button.slick-next').click();
    });
});