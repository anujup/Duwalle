// ------------------------ Show Menu -------------------------
let bars = document.querySelector(".nav .fa-bars")
let menu = document.querySelector('.nav ul')
let showing = false
bars.addEventListener("click", function(){
    menu.classList.toggle('showmenu')
    if (showing){
        bars.className = bars.className.replace("fa-close", "fa-bars")
        showing = false
    }else{
        bars.className = bars.className.replace("fa-bars", "fa-close")
        showing = true
    }
    
})
// ------------------------ slider -------------------------
let dot = document.getElementsByClassName("dot")
let image = document.getElementsByClassName("slide")
let value = ""
let selectIndex = 0
dot[selectIndex].className += " selected"
// ------------------------ slider auto -------------------------
function autoSlide() {
   setInterval(() => {
        if (selectIndex < image.length-1) {
            selectIndex++
            showSlide(selectIndex)
         } else{
            selectIndex = 0
            showSlide(selectIndex)
         }
   }, 3000); // slide speed = 3s
}

autoSlide()
// ------------------------ Nav dot -------------------------
for (let index = 0; index < dot.length; index++) {
    dot[index].addEventListener("click", function(details){
        selectIndex = index
        showSlide(selectIndex)
    })
    
}
// ------------------------ show slider -------------------------
function showSlide(selectedIndex) {
    value = selectedIndex*100
    value = value + "%";
    for (let index = 0; index < image.length; index++) {
        image[index].style.right = value
    }
    for (let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace("selected", "")
    }
    dot[selectedIndex].className += " selected"
    
}


// ------------------------ Event slider -------------------------
const swiper = new Swiper('.swiper', {
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    speed: 600,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: false,
    },
    breakpoints: {
         320: {
             spaceBetween: 80
         },
         640: {
           spaceBetween: 200
          }
    },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

});
