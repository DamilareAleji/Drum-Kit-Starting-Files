


let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);


function handleClick() {
    let sound = new Audio('sounds/tom-4.mp3');
    sound.play();
}

}


