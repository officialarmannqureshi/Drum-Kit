//detecting button press
var noofbuttons=document.querySelectorAll("button").length;
for(var i=0;i<noofbuttons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleclick);
    function handleclick(){
       
        var key1=this.innerText;
        makesound(key1);
        buttonanimation(key1);
        
    }
    
}
//detecting keyword press
document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);
});
function makesound(key){
    switch (key) {
        case 'W':case 'w':
            var audio= new Audio ('sounds/crash.mp3');
            audio.play();
            break;
        case 'A':case 'a':
                var audio= new Audio ('sounds/kick-bass.mp3');
                audio.play();
                break;
        case 'S':case 's':
                    var audio= new Audio ('sounds/snare.mp3');
                    audio.play();
                    break;
        case 'D':case 'd':
                        var audio= new Audio ('sounds/tom-1.mp3');
                        audio.play();
                        break;
        case 'J' :case 'j':
                            var audio= new Audio ('sounds/tom-2.mp3');
                            audio.play();
                            break;
        case 'K':case 'k':
                                var audio= new Audio ('sounds/tom-3.mp3');
                                audio.play();
                                break;
        case 'L':case 'l':
                                    var audio= new Audio ('sounds/tom-4.mp3');
                                    audio.play();
                                    break;
    
        default:
            break;
    }
}
function buttonanimation(currentKey){
    document.querySelector("."+currentKey).classList.add("pressed");
    setTimeout(function (activeButton){
        document.querySelector("."+currentKey).classList.remove("pressed")
    },100); 
}
