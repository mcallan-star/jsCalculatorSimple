// Select the button and output elements
const button1 = document.getElementById('addButton');
const button2 = document.getElementById('subButton');
const button3 = document.getElementById('resetButton');
const button4 = document.getElementById('squareButton');
const button5 = document.getElementById('squareRootButton');
const button6 = document.getElementById('cubeButton');
const button7 = document.getElementById('divideButton');
const button8 = document.getElementById('multiplyButton');

// Initialize the count
let count = 0n;

// Add event listener to each buttons
button1.addEventListener('click', () => {
    count += 1n; // Increment the count
    output.textContent = count; // Update the output div
      
});

button2.addEventListener('click', () => {
    count -= 1n; // decrement the count
    output.textContent = count; // Update the output div
      
});

button3.addEventListener('click', () => {
    count = 0n; // reset the count
    output.textContent = count; // Update the output div
      
});     

button4.addEventListener('click', () => {
    count = count*count; // square the count
    output.textContent = count; // Update the output div
      
}); 

button5.addEventListener('click', () => {
    if (count < 0n) {
        output.textContent = "Error: Cannot take square root of negative number";
    }else{
    count = Math.sqrt(count); // square root the count
    output.textContent = count; // Update the output div
    }
      
});

button6.addEventListener('click', () => {
    count = count*count*count; // cube the count
    output.textContent = count; // Update the output div
      
});



