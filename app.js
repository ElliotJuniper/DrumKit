// DECLARING THE SOUND OF EACH INSTRUMENT SO IT CAN BE CALLED UPON.
const soundKick = document.getElementById("soundKick");
 const soundClap = document.getElementById("soundClap");
 const soundBass = document.getElementById("soundBass");
 const soundHiHat = document.getElementById("soundHiHat");
 const soundOpenHat = document.getElementById("soundOpenHat");
 const soundRide = document.getElementById("soundRide");
 const soundSnare = document.getElementById("soundSnare");
 const soundBell = document.getElementById("soundBell");
 const soundTom = document.getElementById("soundTom");

// USING AN EVENT LISTENER IS A PROCEDURE IN JAVASCRIPT THAT WAIT UNTIL AN ACTION (EVENT) OCCURS. FOR INSTANCE OUR FIRST ACTION IS SYNCING THE KICK SOUND TO THE 'A' KEY SO WHEN THE 'A' KEY IS PRESSED THE KICK SOUND WILL COMMENCE. OUR SECOND EXAMPLE IS ROUTING THE MOUSE CLICK TO THE KICK SOUND. WHEN YOU PRESS THE MOUSE ON THE ALLOCATED BUTTON FOR INSTANCE THE KICK, THEN THE SOUND WILL PLAY. 

//  MAKING A DECLARATION THAT IF THE KEY PRESSED CORRESPONDS TO THE GIVEN LETTER THEN THAT SOUND WILL PLAY ONCE. 
document.addEventListener ("keypress", (event) => {
    if (event.key == "a") {
        soundKick.src = "sounds/kick.wav"
    }});
document.addEventListener ("keypress", (event) => {
    if (event.key == "s") {
        soundClap.src = "sounds/clap.wav"
    }});
document.addEventListener ("keypress", (event) => {
    if (event.key == "d") {
        soundBass.src = "sounds/boom.wav"
    }});

document.addEventListener ("keypress", (event) => {
    if (event.key == "f") {
        soundHiHat.src = "sounds/hihat.wav"
    }});

document.addEventListener ("keypress", (event) => {
    if (event.key == "g") {
        soundOpenHat.src = "sounds/openhat.wav"
    }});
    
document.addEventListener ("keypress", (event) => {
    if (event.key == "h") {
        soundRide.src = "sounds/ride.wav"
    }});

document.addEventListener ("keypress", (event) => {
    if (event.key == "j") {
        soundSnare.src = "sounds/snare.wav"
    }});

document.addEventListener ("keypress", (event) => {
    if (event.key == "k") {
        soundBell.src = "sounds/tink.wav"
    }});

document.addEventListener ("keypress", (event) => {
    if (event.key == "l") {
        soundTom.src = "sounds/tom.wav"
    }});

// IF THE LEFT MOUSE BUTTON IS PRESSED A SOUND WILL OCCUR THAT CORRESPONDS TO THE UNIQUE BUTTON. 
kick.addEventListener("click", () => {
    soundKick.src = "sounds/kick.wav"
 } );
clap.addEventListener("click", () => {
    soundClap.src = "sounds/clap.wav"
 } );
hihat.addEventListener("click", () => {
    soundHiHat.src = "sounds/hihat.wav"
 } );
openhat.addEventListener("click", () => {
    soundOpenHat.src = "sounds/openhat.wav"
 } );
bass.addEventListener("click", () => {
    soundBass.src = "sounds/boom.wav"
 } );
ride.addEventListener("click", () => {
    soundRide.src = "sounds/ride.wav"
 } );
bell.addEventListener("click", () => {
    soundBell.src = "sounds/tink.wav"
 } );
tom.addEventListener("click", () => {
    soundTom.src = "sounds/tom.wav"
 } );
snare.addEventListener("click", () => {
    soundSnare.src = "sounds/snare.wav"
 } );


