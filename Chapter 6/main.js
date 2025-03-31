// Function to calculate the total cost of petrol
function calculateTotalCost() {
  // Get the values from the input fields
  const costPerLiter = parseFloat(document.getElementById('costPerLiter').value); // Get cost per liter
  const litersPurchased = parseFloat(document.getElementById('litersPurchased').value); // Get liters purchased
  
  // Validate input to ensure they are numbers
  if (isNaN(costPerLiter) || isNaN(litersPurchased)) {
    alert("Please enter valid numbers for cost and liters."); // Alert if inputs are invalid
    return; // Exit function if input is invalid
  }
  
  // Calculate total cost
  const totalCost = (costPerLiter * litersPurchased).toFixed(2); // Calculate and format to 2 decimal places
  
  // Display the result in the paragraph
  document.getElementById('totalCost').innerText = `Total Cost: $${totalCost}`; // Update displayed total cost
}

// Add an event listener to the calculate button
document.getElementById('calculateButton').addEventListener('click', calculateTotalCost); // Call function on button click

// Optional: Allow pressing 'Enter' key to calculate total cost as well
document.getElementById('litersPurchased').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') { // Check if 'Enter' key is pressed
    calculateTotalCost(); // Call calculate function
  }
});