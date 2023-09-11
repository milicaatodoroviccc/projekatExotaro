//burger meni
var meni=document.querySelector(".stranice");
var dugme=document.querySelector(".burger_meni");
dugme.addEventListener("click",function(){
        meni.classList.toggle("pomeri");
});
//vrati se na pocetnu
var to_top=document.querySelector("#ft_top");
to_top.addEventListener("click",function(){
    window.scrollTo({
        top: 0,behavior: "smooth"
    });
});
//stranica
$(".island").hide();
$(".bolivija").hide();
$(".japan").hide();
var select=document.querySelector("select");
var s=$(".japan");
select.addEventListener("change",function(){
        $(".dropdown").animate({marginTop: '20px',marginLeft:'10%',opacity:'0.7'},1500);
        s.hide();
        if(select.value=="Island"){
                $(".island").fadeIn(3500);
                s=$(".island");
        }
        if(select.value=="Bolivija"){
                $(".bolivija").fadeIn(3500);
                s=$(".bolivija");
        }
        if(select.value=="Japan"){
                $(".japan").fadeIn(3500);
                s=$(".japan");
        }
});