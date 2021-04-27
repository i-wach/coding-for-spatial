let lightBulb = document.querySelector('#lightButton');

console.log(lightBulb)

lightBulb.addEventListener("click", changeLight);

let onOff = "true"

function changeLight() {
    if (onOff === "true") {

        document.body.style.backgroundColor = "#4A4A49";
        // document.body.style.color = "white";
        onOff = "false";
    } else {
        document.body.style.backgroundColor = "#E6E5E4";
        // document.body.style.color = "black";
        onOff = "true";
    }
}