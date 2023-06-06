const boxContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => boxContainer.classList.toggle("big"));

function createBoxes() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const theBox = document.createElement("div");
            theBox.classList.add("box");
            theBox.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxContainer.appendChild(theBox)
        }
    }
}

createBoxes();