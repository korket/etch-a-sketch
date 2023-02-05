// grid size and range selectors

const sketchContainer = document.querySelector('.sketch-container');
const range = document.querySelector('.grid-range');
const sketchSizeDisplay = document.querySelector('.grid-range-container a');

// changes grid size value on html

range.addEventListener('change', () => {
  sketchSizeDisplay.textContent = `${range.value}x${range.value}`;

  // set the sketch size on range change

  sketchContainer.style.gridTemplateColumns = `repeat(${range.value}, 1fr)`;
  sketchContainer.style.gridTemplateRows = `repeat(${range.value}, 1fr)`;

  // create new divs based on range value

  for (i = 0; i < (range.value**2); i++) {
    const newSketch = document.createElement('div');
    newSketch.classList.add('sketch');
    sketchContainer.appendChild(newSketch);
  };
});