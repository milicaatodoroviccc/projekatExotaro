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