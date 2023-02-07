// grid size and range selectors

const sketchContainer = document.querySelector('.sketch-container');
const range = document.querySelector('.grid-range');
const sketchSizeDisplay = document.querySelector('.grid-range-container a');

// utilities buttons

const rainbowBtn = document.querySelector('.rainbow');
const shadeBtn = document.querySelector('.shade');
const gridLineBtn = document.querySelector('.grid-line');
const clearBtn = document.querySelector('.clear');

// applies if range size changes

range.addEventListener('change', () => {
  sketchSizeDisplay.textContent = `${range.value}x${range.value}`;

  // set the sketch size on range change

  sketchContainer.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`;
  sketchContainer.style.gridTemplateRows = `repeat(${range.value}, 1fr)`;

  clear();

  // to make sure grid still shows after reset

  const sketchDivs = document.querySelectorAll('.sketch');
  if (gridLineBtn.classList.contains('selected')) {
    for (const sketch of sketchDivs) {
      sketch.classList.add('show-grid-line');
    };
  };
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

function rgb () {
	return Math.floor(Math.random() * 255)
};

function sketchHover() {
  const sketchDivs = document.querySelectorAll('.sketch');
  for (const sketch of sketchDivs) {

  // rainbow mode

  if (rainbowBtn.classList.contains('selected-color')) {
  	sketch.addEventListener('mouseover', () => {
  		sketch.style.backgroundColor = `rgb(${rgb()}, ${rgb()}, ${rgb()})`;
  	})
  }

  // shade mode

  else if (shadeBtn.classList.contains('selected-color')) {
    let a = 1;
    sketch.addEventListener('mouseover', () => {
      if (a < 10) {
        sketch.style.backgroundColor = `rgba(0,0,0,0.${a})`;
        a++;
      } 
      else {
        sketch.style.backgroundColor = `rgb(0,0,0)`;
      }
    })
  }

  // normal color select from color profiles

  else {
    sketch.addEventListener('mouseover', () => {
      sketch.style.backgroundColor = `${selectColor()}`;
    });
  };
  };
};

sketchHover();

// select color function

const colorProfiles = document.querySelectorAll('.color');

for (const color of colorProfiles) {
  color.addEventListener('click', () => {
    unSelectColor();
    color.setAttribute('class', 'color selected-color');
    sketchHover();
  });
};

function unSelectColor() {
  for (const color of colorProfiles) {
    color.setAttribute('class', 'color');
  };
  rainbowBtn.classList.remove('selected-color');
  rainbowBtn.classList.remove('selected');
};

function selectColor(){
  const selectedColor = document.querySelector('.selected-color');
  return selectedColor.value;
};

// show grid lines function

function showGridLine() {
  const sketchDivs = document.querySelectorAll('.sketch');
  gridLineBtn.classList.toggle('selected');
  for (const sketch of sketchDivs) {
    sketch.classList.toggle('show-grid-line');
  };
};

// clear sketch function

function clear() {
  const sketchDivs = document.querySelectorAll('.sketch');
  for (const sketch of sketchDivs) {
    sketchContainer.removeChild(sketch);
  };

  createSketchDivs();
  sketchHover();
};

// utilities buttons script

shadeBtn.addEventListener('click', () => {
	unSelectColor();
	shadeBtn.classList.toggle('selected-color');
  shadeBtn.classList.toggle('selected');
  sketchHover();
});

rainbowBtn.addEventListener('click', () => {
	unSelectColor();
	rainbowBtn.classList.toggle('selected-color');
  rainbowBtn.classList.toggle('selected');
  sketchHover();
});

gridLineBtn.addEventListener('click', () => {
  showGridLine();
});

clearBtn.addEventListener('click', () => {
  clear();

  // to make sure grid still shows after reset

  const sketchDivs = document.querySelectorAll('.sketch');
  if (gridLineBtn.classList.contains('selected')) {
    for (const sketch of sketchDivs) {
      sketch.classList.add('show-grid-line');
    };
  };
});