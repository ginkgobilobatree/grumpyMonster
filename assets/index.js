let soundEffect1 = new Audio('sound/growl.mp3');
let soundEffect2 = new Audio('sound/ghosts03.mp3');
let soundEffect3 = new Audio('sound/chainsandmonster.mp3');
let soundEffect4 = new Audio('sound/wickedwitchlaugh.mp3');
let soundEffect5 = new Audio('sound/wickedmalelaugh1.mp3');
let soundEffect6 = new Audio('sound/wickedlaugh1.mp3');
let soundEffect7 = new Audio('sound/laughhowl1.mp3');
let soundEffect8 = new Audio('sound/deeplaugh.mp3');
let soundEffect9 = new Audio('sound/Spooked.mp3');
let soundEffect10 = new Audio('sound/GHOSTLY.mp3');
let soundEffect11 = new Audio('sound/ghostepsen.mp3');
let soundEffect12 = new Audio('sound/GHOST8B.mp3');
let soundEffect13 = new Audio('sound/ghost01.mp3');
let soundEffect14 = new Audio('sound/Drone.mp3');
let soundEffect15 = new Audio('sound/wlaugh.mp3');
let soundEffect16 = new Audio('sound/witches_house.mp3');
let soundEffect17 = new Audio('sound/witch.mp3');
let soundEffect18 = new Audio('sound/hag_idle.mp3');
let soundEffect19 = new Audio('sound/287.mp3');
let soundEffect20 = new Audio('sound/roar.mp3');


let sounds = [soundEffect1, soundEffect2, soundEffect3, soundEffect4, soundEffect5, soundEffect6, soundEffect7, soundEffect8, soundEffect9, soundEffect10, soundEffect11, soundEffect12, soundEffect13, soundEffect14, soundEffect15, soundEffect16, soundEffect17, soundEffect18, soundEffect19, soundEffect20]



document.addEventListener("click", () => {
    let num = Math.floor(Math.random()*20);
    sounds[num].cloneNode().play()
})

