const canvas = document.getElementById("graphCanvas");
const ctx = canvas.getContext("2d");

// Switch to the list screen
function showList() {
    document.getElementById("functionList").style.display = "block";
    document.getElementById("graphScreen").style.display = "none";
}

// Switch to the graph screen
function showGraph() {
    document.getElementById("functionList").style.display = "none";
    document.getElementById("graphScreen").style.display = "block";
    plotAllY();          //show and graph simultaneously
}

function plotAllY() {
    let inputs = document.querySelectorAll('#functionItems input');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            continue;
        }
        plotGraph(inputs[i].value);
    }
}

// Plot a graph for the current input
function plotGraph(funcInput) {
    // Define the graph boundaries
    const xMin = -10, xMax = 10, yMin = -10, yMax = 10;
    const width = canvas.width, height = canvas.height;
    const xScale = width / (xMax - xMin), yScale = height / (yMax - yMin);

    // Draw axes
    ctx.strokeStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(0, height / 2); // X-axis
    ctx.lineTo(width, height / 2);
    ctx.moveTo(width / 2, 0); // Y-axis
    ctx.lineTo(width / 2, height);
    ctx.stroke();

    // Plot the function
    ctx.strokeStyle = "blue";
    ctx.beginPath();

    for (let xPixel = 0; xPixel <= width; xPixel++) { // this for loop happens 500 times(0 to 500)
        // x is -10 to 10. the x value looks like -10, -9.96, -9.92, -9.88, -9.84, ... to -9.0
        const x = xMin + (xPixel / xScale);  //converting x pixel to x value
        let y;
        try {
            y = eval(funcInput.replace(/x/g, `(${x})`)); // Replace the x in the function with each value in the domain
        } catch (err) {
            alert("Invalid function!");
            return;
        }

        const yPixel = height / 2 - (y * yScale);   //converting y value to  y pixel
        if (xPixel === 0) {
            ctx.moveTo(xPixel, yPixel);
        } else {
            ctx.lineTo(xPixel, yPixel);
        }
    }
    ctx.stroke();
}

