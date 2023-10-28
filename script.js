 
function shrinkNthBoxes(arr, nth) {
    const boxArray = Array.from(arr);

    for (let i = nth; i < boxArray.length; i = i + nth + 1) {
        console.log(boxArray[i]);
        divsToResize.push(boxArray[i]);
    }

    divsToResize.forEach(function(item) {
    item.setAttribute('style', 'width: 100%; height: 0; border: none;')
    });
 };

function boxColouring() {
    boxes.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.setAttribute('style', 'background-color: black');
        });
    });
};

function createBoxes(num) {
    let size = num * num + num;
    gridSize = num;
    for (let i = 0; i < size; i++) {
        let box = document.createElement('div');
        box.setAttribute('class', 'box')
        gridContainer.appendChild(box);
    }
    boxes = document.querySelectorAll('.box')
    shrinkNthBoxes(boxes, gridSize);
    boxColouring();
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

function NewGame() {
    gridSize = +prompt('Please enter a side length, 1 - 100, for the grid to be generated.');
    while (gridSize < 1 || gridSize > 100) {
        gridSize = +prompt('That is not a valid number. Please enter a side length between 1 and 100.')
    }
    removeAllChildNodes(gridContainer);
    createBoxes(gridSize);
    boxes = document.querySelectorAll('.box')
    shrinkNthBoxes(boxes, gridSize);
    boxColouring();
};


let gridContainer = document.querySelector('#etchSketch');

let boxes;

let gridSize = 0;

let divsToResize = [];



let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', function() {
    boxes.forEach(function(item) {
        item.setAttribute('style', 'background-color: white');
        });
});

let newGameBtn = document.querySelector('#newGame');
newGameBtn.addEventListener('click', newGame);



//createBoxes(16);