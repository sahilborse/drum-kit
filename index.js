document.querySelector(".w").addEventListener("click",()=>{
   
    var audio=new Audio("./KitAudio/bdrum.mp3")
    audio.play()
}
) 
document.querySelector(".x").addEventListener("click",()=>{
    var audio=new Audio("./KitAudio/drum.mp3")
    audio.play()
}
) 
document.querySelector(".y").addEventListener("click",()=>{
    var audio=new Audio("./KitAudio/largeDrum.mp3")
    audio.play()
}
) 
document.querySelector(".z").addEventListener("click",()=>{
    var audio=new Audio("./KitAudio/drum.mp3")
    audio.play()
}
) 
document.querySelector(".t").addEventListener("click",()=>{
    var audio=new Audio("./KitAudio/disc1.mp3")
    audio.play()
}
) 
document.querySelector(".s").addEventListener("click",()=>{
    var audio=new Audio("./KitAudio/disc2.mp3")
    audio.play()
}
) 

var keyPressed=function(e){
    
    switch(e.key){
        case "w":
            
            var audio=new Audio("./KitAudio/bdrum.mp3")
            audio.play()
            break;
        case "x":
            var audio=new Audio("./KitAudio/drum.mp3")
            audio.play()
            break;
        case "y":
            var audio=new Audio("./KitAudio/largeDrum.mp3")
            audio.play()
            break;
        case "z":
            var audio=new Audio("./KitAudio/drum.mp3")
            audio.play()
            break;
        case "s":
            var audio=new Audio("./KitAudio/disc1.mp3")
            audio.play()
            break;
        case "t":
            var audio=new Audio("./KitAudio/disc1.mp3")
            audio.play()
            break;
    }

}
document.addEventListener("keypress",keyPressed)





