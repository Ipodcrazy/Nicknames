"use strict";

document.getElementById("random").addEventListener("click", rng);
document.getElementById("all").addEventListener("click", all);

let namechoice = ["The Trigger", "The Tracer", "The Drifter", "The Snake", "The Beast", "The Bully"];

function rng() {
    let fn = document.getElementById('firstname').value;
    let ln = document.getElementById('lastname').value;
    let nameroll = Math.floor((Math.random() * 6) + 1);
    if (nameroll == 1) {
        document.getElementById("nick").innerHTML += "<p>" + fn + " \"" + namechoice[0] + "\" "  + ln + "</p>";
    }
    else if (nameroll == 2) {
        document.getElementById("nick").innerHTML += "<p>" + fn + " \"" + namechoice[1] + "\" "  + ln + "</p>";
    }
    else if (nameroll == 3) {
        document.getElementById("nick").innerHTML += "<p>" + fn + " \"" + namechoice[2] + "\" "  + ln + "</p>";
    }
    else if (nameroll == 4) {
        document.getElementById("nick").innerHTML += "<p>" + fn + " \"" + namechoice[3] + "\" "  + ln + "</p>";
    }
    else if (nameroll == 5) {
        document.getElementById("nick").innerHTML += "<p>" + fn + " \"" + namechoice[4] + "\" "  + ln + "</p>";
    }
    else if (nameroll == 6) {
        document.getElementById("nick").innerHTML += "<p>" + fn + " \"" + namechoice[5] + "\" "  + ln + "</p>";
    }
}

function all() {
    let fn = document.getElementById('firstname').value;
    let ln = document.getElementById('lastname').value;
    for (let i = 0; i < 6; i++) {
        document.getElementById("nick").innerHTML += "<p>" + fn + " \"" + namechoice[i] + "\" "  + ln + "</p>";
    }
}