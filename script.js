function createBoxes() {
    let mainDiv = document.querySelector('#etchSketch');
    for (let i = 0; i < 16; i++) {
        let box = document.createElement('div');
        mainDiv.appendChild(box);
    }
}

createBoxes();
