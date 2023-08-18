// SHARED FUNCTION 
function getValueFromField(id) {
    let fieldValue = parseFloat(document.querySelector(id).value);
    return fieldValue;
}
// CALCULATION SHARED FUNCTION 
function setAreaCalculation(objectName, objectArea) {
    let calculationDiv = document.querySelector("#calculationDiv");
    let count = calculationDiv.childElementCount;
    let p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${objectName} <span class="meter">${objectArea}</span> <span class=cmSup>cm<sup>2</sup></span>`;
    calculationDiv.appendChild(p);
}

// TRIANGLE 
document.querySelector("#triangle-btn").addEventListener("click", function () {
    let triangleBase = getValueFromField("#triangle-base");
    let triangleHeight = getValueFromField("#triangle-height");
    if (isNaN(triangleBase) || triangleBase <= 0 || isNaN(triangleHeight) || triangleHeight <= 0) {
        alert("Please Input Valid Numbers for Base and Height");
        return;
    }
    let triangleArea = 0.5 * triangleBase * triangleHeight;
    setAreaCalculation("Triangle", triangleArea);
});


// RECTANGLE 
document.querySelector("#rectangle-btn").addEventListener("click", function () {
    let rectangleWidth = getValueFromField("#rectangle-width");
    let rectangleLength = getValueFromField("#rectangle-length");
    if (isNaN(rectangleWidth) || rectangleWidth <= 0 || isNaN(rectangleLength) || rectangleLength <= 0) {
        alert("Please Input Valid Numbers for Width and Length");
        return;
    }
    let rectangleArea = rectangleWidth * rectangleLength;
    setAreaCalculation("Rectangle", rectangleArea);
});

// PARALLELOGRAM 
document.querySelector("#paraBtn").addEventListener("click", function () {
    let parallelogramBase = getValueFromField("#Parallelogram-Base");
    let parallelogramHeight = getValueFromField("#Parallelogram-Height");
    if (isNaN(parallelogramBase) || parallelogramBase <= 0 || isNaN(parallelogramHeight) || parallelogramHeight <= 0) {
        alert("Please Input Valid Numbers for Base and Height");
        return;
    }
    let paralellogramArea = parallelogramBase * parallelogramHeight;
    setAreaCalculation("Parallelogram", paralellogramArea);
});