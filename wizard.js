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
    p.innerHTML = `${count + 1}. ${objectName} ${objectArea} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;
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
    setAreaCalculation("Triangle" , triangleArea);
});
