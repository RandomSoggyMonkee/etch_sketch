function createBoxes() {
    let mainDiv = document.querySelector('#etchSketch');
    for (let i = 0; i < 272; i++) {
        let box = document.createElement('div');
        box.setAttribute('class', 'box')
        mainDiv.appendChild(box);
    }
}


createBoxes();

let boxes = document.querySelectorAll('.box');

boxes.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        item.setAttribute('style', 'background-color: black');
    });
});