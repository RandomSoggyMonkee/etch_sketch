function shrinkNthBoxes(arr, nth) {
    for(let i = 0; i < arr.length; i += nth) {
        divsToResize.push(arr[i + 1]);
    };
    divsToResize.forEach(function(item) {
        item.setAttribute('style', 'width: 100%; height: 0px; border: none;')
    });
};

function createBoxes(num) {
    let size = num * num + num;
    for (let i = 0; i < size; i++) {
        let box = document.createElement('div');
        box.setAttribute('class', 'box')
        shrinkNthBoxes(boxes, gridSize);
        gridContainer.appendChild(box);
    }
}

// function nthBoxesArray(arr, nth) {
//     for(let i = 0; i < arr.length; i += nth) {
//         divsToResize.push(arr[i + 1]);
//     };
// };

// function shrinkBoxes() {
//     divsToResize.forEach(function(item) {
//         item.setAttribute('style', 'width: 100%; height: 0px; border: none;')
//     });
// };

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

function boxColouring() {
    boxes.forEach(function(item) {
        item.addEventListener('mouseover', function() {
            item.setAttribute('style', 'background-color: black');
        });
    });
};

function NewGame() {
    gridSize = +prompt('Please enter the side length of the square to generated.');
    removeAllChildNodes(gridContainer);
    createBoxes(gridSize);
    boxes = document.querySelectorAll('.box')
    shrinkNthBoxes(boxes, gridSize);
    boxColouring();
};


let gridContainer = document.querySelector('#etchSketch');

let gridSize = '';

let divsToResize = [];

let boxes = document.querySelectorAll('.box');


let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', function() {
    boxes.forEach(function(item) {
        item.setAttribute('style', 'background-color: white');
        });
});

let newGameBtn = document.querySelector('#newGame');
newGameBtn.addEventListener('click', newGame);



createBoxes(16);

boxColouring();
