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
// Filter u galeriji

let list = document.querySelectorAll('.lista');
let slike= document.querySelectorAll('.item');
for(let i=0;i<list.length;i++){
    list[i].addEventListener('click',function(){
        for(let j=0;j<list.length;j++){
            list[j].classList.remove('podrazumevano');
        }
        this.classList.add('podrazumevano');

        let dataFilter=this.getAttribute('data-filter');
        
        for(let k=0;k<slike.length;k++){
            slike[k].classList.add('hide');
            if(slike[k].getAttribute('data-item')==dataFilter || 
           dataFilter =="all"){
            slike[k].classList.remove('hide');
           }
        }
    })
}
