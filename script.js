// grid size and range selectors

const sketchContainer = document.querySelector('.sketch-container');
const range = document.querySelector('.grid-range');
const sketchSizeDisplay = document.querySelector('.grid-range-container a');

// applies if range size changes

range.addEventListener('change', () => {
  sketchSizeDisplay.textContent = `${range.value}x${range.value}`;

  // set the sketch size on range change

  sketchContainer.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`;
  sketchContainer.style.gridTemplateRows = `repeat(${range.value}, 1fr)`;

  createSketchDivs();
  sketchHover();

  clear();
});

// create new divs based on range value

function createSketchDivs() {
  for (i = 0; i < (range.value**2); i++) {
    const newSketch = document.createElement('div');
    newSketch.classList.add('sketch');
    sketchContainer.appendChild(newSketch);
  };
};

createSketchDivs();

// function to add colors to sketch divs on hover

function sketchHover() {
  const sketchDivs = document.querySelectorAll('.sketch');
  for (const sketch of sketchDivs) {
    sketch.addEventListener('mouseover', () => {
      sketch.style.backgroundColor = `${selectColor()}`;
    });
  };
};

sketchHover();

// select color function

const colorProfiles = document.querySelectorAll('.color');

for (const color of colorProfiles) {
  color.addEventListener('click', () => {
    unSelectColor();
    color.setAttribute('class', 'color selected-color');
  });
};

function unSelectColor() {
  for (const color of colorProfiles) {
    color.setAttribute('class', 'color');
  };
};

function selectColor(){
  const selectedColor = document.querySelector('.selected-color');
  return selectedColor.value;
};

// clear sketch function

function clear() {
  const sketchDivs = document.querySelectorAll('.sketch');
  for (const sketch of sketchDivs) {
    sketch.style.backgroundColor = 'white';
  };
};

// utilities button

const rainbowBtn = document.querySelector('.rainbow');
const shadwBtn = document.querySelector('.shade');
const gridLineBtn = document.querySelector('.grid-line');
const clearBtn = document.querySelector('.clear');

clearBtn.addEventListener('click', () => {clear()});