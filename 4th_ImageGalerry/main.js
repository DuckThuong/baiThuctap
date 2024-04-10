var images = document.querySelectorAll('.image img');
var prev = document.querySelector(".prev");
var right = document.querySelector(".right");
var close = document.querySelector(".close");
var galleryImage = document.querySelector(".gallery__inner");
var gallery = document.querySelector(".gallery");
var curruntIndex = 0;

function galleryShow(params) {
   if(curruntIndex == 0){
        prev.classList.add('hide');
   }else{
        prev.classList.remove('hide');
   }
   if(curruntIndex == images.length - 1){
        right.classList.add('hide');
    }else{
        right.classList.remove('hide');
    }
    galleryImage.src = images[curruntIndex].src;
    gallery.classList.add('show');
}
images.forEach((item,index) => {
    item.addEventListener('click',function() {
        curruntIndex = index;
        galleryShow();
    })
});
close.addEventListener('click',function () {
    gallery.classList.remove('show');
});
document.addEventListener('keydown',function(e){
        if(e.keyCode == 27){
            gallery.classList.remove('show');
        }
})
prev.addEventListener('click',function () {
    if(curruntIndex > 0){
        curruntIndex --;
        galleryShow();
    }
})
right.addEventListener('click',function () {
    if(curruntIndex < images.length - 1){
        curruntIndex ++;
        galleryShow();
    }
})
