
// Get all the element first
const video = document.querySelector(".vid");
const player = document.querySelector(".controls");
const playbutton = player.querySelector(".playbutton");
const progbar = document.querySelector(".progressbar"); 
const skipbut = document.querySelectorAll(".skipbutton");
const slider =  document.querySelectorAll(".volandspeed");
// Create functions

function toggleplay(){
    if(video.paused) {
    video.play();
    }    
    else{
        video.pause();
    } 
}

function updatebutto(){    
    const icon = video.paused ? " || " : " |> " ;
    this.textContent = icon;
    toggleplay();
}

function timeupdate(){
    let time = (video.currentTime / video.duration) * 100 ;
    // console.log(time);
    progbar.style.flexBasis = `${time}%`;
}

function skipVideo(){
    
    video.currentTime += parseFloat(this.dataset.val);
}


function handlerangeudpate(){
    video[this.name] = this.value;
}

// hook up all the element with the listener
video.addEventListener("click",toggleplay);
playbutton.addEventListener("click",updatebutto);
video.addEventListener("timeupdate",timeupdate);

skipbut.forEach(element => {
    // element.addEventListener("timeupdate",skipVideo);
    element.addEventListener("click",skipVideo);
});

Array.from.slider.forEach(element => element.addEventListener("change",handlerangeupdate));



