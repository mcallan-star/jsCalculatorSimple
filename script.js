// Select the button and output elements
const button1 = document.getElementById('addButton');
const button2 = document.getElementById('subButton');
const button3 = document.getElementById('resetButton');
const button4 = document.getElementById('squareButton');
const button5 = document.getElementById('squareRootButton');
const output = document.getElementById('output');

// Initialize the count
let count = 0;

// Add event listener to each buttons
button1.addEventListener('click', () => {
    count += 1; // Increment the count
    output.textContent = count; // Update the output div
      
});

button2.addEventListener('click', () => {
    count -= 1; // decrement the count
    output.textContent = count; // Update the output div
      
});

button3.addEventListener('click', () => {
    count = 0; // reset the count
    output.textContent = count; // Update the output div
      
});     

button4.addEventListener('click', () => {
    count = count*count; // square the count
    output.textContent = count; // Update the output div
      
}); 

button5.addEventListener('click', () => {
    if (count < 0) {
        output.textContent = "Error: Cannot take square root of negative number";
    }else{
    count = Math.sqrt(count); // square root the count
    output.textContent = count; // Update the output div
    }
      
});

