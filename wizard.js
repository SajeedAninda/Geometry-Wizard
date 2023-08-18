// SHARED FUNCTION 
function getValueFromField(id) {
    let fieldValue = parseFloat(document.querySelector(id).value);
    document.querySelector(id).value = "";
    return fieldValue;
}
// CALCULATION SHARED FUNCTION 
function setAreaCalculation(objectName, objectArea) {
    let calculationDiv = document.querySelector("#calculationDiv");
    let count = calculationDiv.childElementCount;
    let p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${objectName} <span class="objArea">${objectArea}</span><span class="centimeter">cm</span><sup>2</sup> <button class="calculateBtn btn btn-sm btn-success">Convert</button>`;
    calculationDiv.appendChild(p);
}

document.querySelector("#calculationDiv").addEventListener("click", function (event) {
    if (event.target.classList.contains("calculateBtn")) {
        let objAreaElement = event.target.parentElement.querySelector(".objArea");
        let centimeter = event.target.parentElement.querySelector(".centimeter");
        let objArea = parseFloat(objAreaElement.innerText);
        let cmToM = objArea * 0.0001;
        objAreaElement.innerText = cmToM.toFixed(2);
        centimeter.innerText = "m";
    }
});

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

// RHOMBUS 
document.querySelector("#rhombus-btn").addEventListener("click", function () {
    let diameter1 = getValueFromField("#diameter1");
    let diameter2 = getValueFromField("#diameter2");
    if (isNaN(diameter1) || diameter1 <= 0 || isNaN(diameter2) || diameter2 <= 0) {
        alert("Please Input Valid Numbers for Base and Height");
        return;
    }
    let rhombusArea = 0.5 * diameter1 * diameter2;
    setAreaCalculation("Rhombus", rhombusArea);
});

// Pentagon 
document.querySelector("#pentagon-btn").addEventListener("click", function () {
    let pentagonPerimeter = getValueFromField("#pentagon-perimeter");
    let pentagonBase = getValueFromField("#pentagon-base");
    if (isNaN(pentagonPerimeter) || pentagonPerimeter <= 0 || isNaN(pentagonBase) || pentagonBase <= 0) {
        alert("Please Input Valid Numbers for Base and Height");
        return;
    }
    let pentagonArea = 0.5 * pentagonPerimeter * pentagonBase;
    setAreaCalculation("Pentagon", pentagonArea);
});

// Ellipse 
document.querySelector("#ellipse-btn").addEventListener("click", function () {
    let axisA = getValueFromField("#axisA");
    let axisB = getValueFromField("#axisB");
    if (isNaN(axisA) || axisA <= 0 || isNaN(axisB) || axisB <= 0) {
        alert("Please Input Valid Numbers for Base and Height");
        return;
    }
    let ellipseArea = (Math.PI * axisA * axisB).toFixed(2);
    setAreaCalculation("Ellipse", ellipseArea);
});