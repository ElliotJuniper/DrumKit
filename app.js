// DECLARING THE SOUND OF EACH INSTRUMENT SO IT CAN BE CALLED UPON.
const soundKick = document.getElementById("soundKick");
 const clap = document.getElementById("clap");
 const bass = document.getElementById("bass");
 const hihat = document.getElementById("hihat");
 const openhat = document.getElementById("openhat");
 const ride = document.getElementById("ride");
 const snare = document.getElementById("snare");
 const bell = document.getElementById("bell");
 const tom = document.getElementById("tom");


//  MAKING A DECLARATION THAT IF THE KEY PRESSED CORRESPONDS TO THE GIVEN LETTER THEN THAT SOUND WILL PLAY ONCE.
document.addEventListener ("keypress", (event) => {
    if (event.key == "a") {
        soundKick.src = "sounds/kick.wav"
    }});

kick.addEventListener("click", () => {
    soundKick.src = "sounds/kick.wav"
 } )

