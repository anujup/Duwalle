// ------------------------ Show Menu -------------------------
let bars = document.querySelector(".nav .fa-bars")
let menu = document.querySelector('.nav ul')

bars.addEventListener("click", function(){
    menu.classList.toggle('showmenu')
    
})
function autoSlide(params) {
    
}
// ------------------------ slider -------------------------
let dot = document.getElementsByClassName("dot")
let prevSlider = document.querySelector('.fa-angle-left')
let image = document.getElementsByClassName("slide")
let nextSlider = document.querySelector('.fa-angle-right')
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
    value = value + "vw";
    for (let index = 0; index < image.length; index++) {
        image[index].style.right = value
    }
    for (let i = 0; i < dot.length; i++) {
        dot[i].className = dot[i].className.replace("selected", "")
    }
    dot[selectedIndex].className += " selected"
    
}
// ------------------------ slider next -------------------------
nextSlider.addEventListener("click", function(){
    if (selectIndex < image.length-1) {
        selectIndex++
    } else{
        selectIndex = 0
    }
    showSlide(selectIndex)
       
})
// ------------------------ slider prev -------------------------
prevSlider.addEventListener("click", function(){
    if (selectIndex > 0 ) {
        selectIndex--
    } else{
        selectIndex = 3
    }
    showSlide(selectIndex)
})


    

