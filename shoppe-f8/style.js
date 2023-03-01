var bntHeart = document.getElementById("btn_heart")
var redHearrt= bntHeart.getElementsByClassName("home-product-item__action-like-empty")
function runHeart()
{
    if(bntHeart.style.color == "red")
    {
        bntHeart.style.color= "black";
    }
    else
    {
        bntHeart.style.color= "red"
    }
}
// slide
document.getElementById('next').onclick = function(){ // khi người dùng click vào nut next
   const widthItem = document.getElementById("container-product").offsetWidth;
// var widthItem=document.querySelector('.container-product').offsetWidth;
   document.getElementById("listall").scrollLeft += widthItem *2;
}
document.getElementById('prev').onclick = function(){ // khi người dùng click vào nut next
    const widthItem = document.getElementById("container-product").offsetWidth;
// var widthItem=document.querySelector('.container-product').offsetWidth;
   document.getElementById("listall").scrollLeft -= widthItem * 2;
}

// var widthItem=document.querySelector('.container-product').offsetWidth;
// console.log(widthItem)