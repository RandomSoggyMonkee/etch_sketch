 
let gridContainer = document.querySelector('#etchSketch');
let boxes;
let gridSize = 0;



function createGrid(num) {
    for (let i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');
        for (let j = 0; j < num; j++) {
            let box = document.createElement('div');
            box.setAttribute('class', 'box');
            box.addEventListener('mouseover', function() {
              box.setAttribute('style', 'background-color: black');
            });
            row.appendChild(box);
        };
        gridContainer.appendChild(row);
        boxes = document.querySelectorAll('.box')
    };
};

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

function sizeChoice() {
    gridSize = +prompt('Please enter a side length, 1 - 100, for the grid to be generated.');
    if (gridSize == null) {
        alert('You pressed cancel');
    }else if (gridSize < 1 || gridSize > 100 || !Number.isInteger(gridSize)) {
        return gridSize = sizeChoice();
    };
};

function newGame() {
    sizeChoice();
    removeAllChildNodes(gridContainer);
    createGrid(gridSize);
};



let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', function() {
    boxes.forEach(function(item) {
        item.setAttribute('style', 'background-color: white');
        item.addEventListener('mouseover', function() {
            item.setAttribute('style', 'background-color: black');
          });
    });   
});

let newGameBtn = document.querySelector('#newGame');
newGameBtn.addEventListener('click', newGame);

let rbowBtn = document.querySelector('#rainbow');
rbowBtn.addEventListener('click', function(){
    boxes.forEach(function (e) {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        e.addEventListener('mouseover', function() {
            e.setAttribute('style', `background-color: rgb(${r}, ${g}, ${b})`);
        });
    });
});

let eraseBtn = document.querySelector('#erase');
eraseBtn.addEventListener('click', function () {
    boxes.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.setAttribute('style', 'background-color: white');
          });
    });   
});



createGrid(16)