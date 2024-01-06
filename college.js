
   var img = document.getElementById('img');

var slides=['stu-pic.jpg','impact-1.jpg','impact-2.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    img.classList.add("image")
    img.innerHTML = "<img src="+slides[Start-1]+">";
    img.className="image";
    
}
setInterval(slider,3300);

// Javascript cod for mobile nav Bar

const toggleb = document.getElementById('hd-bar');
const navlink = document.getElementById('nb-link');

toggleb.addEventListener('click', ()=> {
    navlink.classList.toggle('hide-nav');
})
const event = document.getElementById('event');
event.addEventListener('click',() => {
    alert(" Currently no events are available")
})
const soon = document.querySelectorAll('.soon');
soon.forEach(soon =>{
    soon.addEventListener('click',() => {
        alert(" Coming Soon")
    })
    })
