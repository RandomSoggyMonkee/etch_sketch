function createBoxes() {
    let mainDiv = document.querySelector('#etchSketch');
    for (let i = 0; i < 257; i++) {
        let box = document.createElement('div');
        box.style = 'border: 1px solid black; height: 25px; width: 25px; margin: 0 3px 3px 0;';
        mainDiv.appendChild(box);
    }
}

createBoxes();