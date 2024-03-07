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
function autoSlide(params) {
    
}
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



// ------------------------ Event -------------------------
let eventCard = document.getElementsByClassName("event-card")
let next = document.document.querySelector('.fa-angle-right')
let selectedEvent = 3
// ------------------------ Slider -------------------------
function showEvent(i){
    for (let index = 0; index < eventCard.length; index++) {
        eventCard[index].style.display = "none"
    }
    eventCard[i].style.display = "flex"
    selectedEvent = i
}

showEvent(selectedEvent)
// ------------------------ next Event -------------------------
nextSlider.addEventListener("click", function(){
    alert("hi")
})
   

