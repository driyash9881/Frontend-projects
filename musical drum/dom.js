for (var numberOfDrum = document.querySelectorAll(".drum").length, i = 0; i < numberOfDrum; i++) document.querySelectorAll(".drum")[i].addEventListener("click", musicPlayed);

function musicPlayed() { var o = this.innerHTML;
    makeSound(o), animation(o) }

function makeSound(o) { switch (o) {
        case "w":
            var e = new Audio("sounds/tom-1.mp3");
            e.play(), console.log("tom-1"), console.log(e.duration); break;
        case "a":
            var n = new Audio("sounds/tom-2.mp3");
            n.play(), console.log("tom-2"), console.log(n.duration); break;
        case "s":
            var s = new Audio("sounds/tom-3.mp3");
            s.play(), console.log("tom-3"), console.log(s.duration); break;
        case "d":
            var a = new Audio("sounds/tom-4.mp3");
            a.play(), console.log("tom-4"), console.log(a.duration); break;
        case "j":
            var l = new Audio("sounds/ snare.mp3");
            l.play(), console.log("snare"), console.log(l.duration); break;
        case "k":
            var r = new Audio("sounds/kick-bass.mp3");
            r.play(), console.log("kick-bass"), console.log(r.duration); break;
        case "l":
            var u = new Audio("sounds/crash.mp3");
            u.play(), console.log("crash"), console.log(u.duration); break;
        default:
            console.log(buttonInnerHTML) } }

function animation(o) { var e = document.querySelector("." + o);
    e.classList.add("pressed"), setTimeout((function() { e.classList.remove("pressed") }), 100) }
document.addEventListener("keypress", (function(o) { makeSound(o.key), animation(o.key) }));