var numOfNayButtons = document.querySelectorAll(".ney-figma").length;

for (var i = 0; i < numOfNayButtons ;i++) {
    document.querySelectorAll(".ney-figma")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keypress", function(e) {
    makeSound(e.key);
    buttonAnimation(e.key);
});

function makeSound(key) {
    switch (key) {
        
        //2-voices
        case "Y":
            var neva2 = new Audio("sounds/2-voices/Neva (Re).mp3");
            neva2.play();
            break;

        case "X":
            var nimHicaz = new Audio("sounds/2-voices/Nim Hicaz (Do).mp3");
            nimHicaz.play();
            break;
        
        case "C":
            var cargah = new Audio("sounds/2-voices/Cargah (Do).mp3");
            cargah.play();
            break;
        
        case "V":
            var segah = new Audio("sounds/2-voices/Segah (Si).mp3");
            segah.play();
            break;   
        
        case "B":
            var kürdi = new Audio("sounds/2-voices/Kürdi (Si).mp3");
            kürdi.play();
            break;
            
        case "N":
            var dügah = new Audio("sounds/2-voices/Dügah (La).mp3");
            dügah.play();
            break;

        case "M":
            var rast = new Audio("sounds/2-voices/Rast (Sol).mp3");
            rast.play();
            break;

        //3-voices
        case "A":
            var muhayyer = new Audio("sounds/3-voices/Muhayyer (La).mp3");
            muhayyer.play();
            break;

        case "S":
            var nimSehnaz = new Audio("sounds/3-voices/Nim Sehnaz (Sol).mp3");
            nimSehnaz.play();
            break;
        
        case "D":
            var gerdaniye = new Audio("sounds/3-voices/Gerdaniye (Sol).mp3");
            gerdaniye.play();
            break;
        
        case "F":
            var evc = new Audio("sounds/3-voices/Evc (Fa).mp3");
            evc.play();
            break;   
        
        case "G":
            var acem = new Audio("sounds/3-voices/Acem (Fa).mp3");
            acem.play();
            break;
            
        case "H":
            var hüseyni = new Audio("sounds/3-voices/Hüseyni (Mi).mp3");
            hüseyni.play();
            break;

        case "J":
            var neva3 = new Audio("sounds/3-voices/Neva (Re).mp3");
            neva3.play();
            break;

        //4-voices
        case "Q":
            var tizNeva = new Audio("sounds/4-voices/Tiz Neva (Re).mp3");
            tizNeva.play();
            break;

        case "W":
            var tizNimHicaz = new Audio("sounds/4-voices/Tiz Nim Hicaz (Do).mp3");
            tizNimHicaz.play();
            break;
        
        case "E":
            var tizCargah = new Audio("sounds/4-voices/Tiz Cargah (Do).mp3");
            tizCargah.play();
            break;
        
        case "R":
            var tizSegah = new Audio("sounds/4-voices/Tiz Segah (Si).mp3");
            tizSegah.play();
            break;   
        
        case "T":
            var sünbüle = new Audio("sounds/4-voices/Sünbüle (Si).mp3");
            sünbüle.play();
            break;
            
        case "Z":
            var muhayyer4 = new Audio("sounds/4-voices/Muhayyer (La).mp3");
            muhayyer4.play();
            break;

        case "U":
            var gerdaniye4 = new Audio("sounds/4-voices/Gerdaniye (Sol).mp3");
            gerdaniye4.play();
            break;

        default: console.log(key);    
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 200);
}