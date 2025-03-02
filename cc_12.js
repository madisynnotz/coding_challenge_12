// Task 1: Business Dashboard – DOM Element Selection and Creation
// Select the dashboard container using both methods
const dashboard = document.getElementById("dashboard"); // Selecting the dashboard container using getElementById
const dashboardAlt = document.querySelector("#dashboard");
 
// Create a new metric card for Revenue
const revenueCard = document.createElement("div"); // Creating a new div element for the Revenue card
revenueCard.setAttribute("class", "metric-card"); // Assigning a class to the new element
revenueCard.setAttribute("id", "revenueCard"); // Assigning an ID to the new element
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>";
 
dashboard.appendChild(revenueCard); // Appending the new Revenue card to the dashboard

// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
    const metricCards = document.querySelectorAll(".metric-card"); // Selecting all metric cards using querySelectorAll
    const metricArray = Array.from(metricCards); // Converting NodeList to an array for easier manipulation
     
    metricArray.forEach(card => {
        card.innerHTML += " - Updated"; // Appending "- Updated" to each metric card
        card.style.backgroundColor = "lightblue"; // Changing background color for visibility
    });

// Task 3: Dynamic Inventory Management – Adding and Removing Items
const inventoryList = document.getElementById("inventoryList"); // Selecting the inventory list container
 
function addProduct(name) {
    const productItem = document.createElement("li"); // Creating a new list item for the product
    productItem.setAttribute("class", "product-item"); // Assigning a class to the product item
    productItem.setAttribute("data-name", name); // Adding a custom data attribute
    productItem.innerText = name;  // Setting the text content to the product name
 
    // Add event listener for removal
    productItem.addEventListener("click", function () {
        inventoryList.removeChild(productItem); // Removing the clicked product from the list
    });
 
    inventoryList.appendChild(productItem);
}
 
// Example: Adding some products
addProduct("Laptop");
addProduct("Monitor");
addProduct("Keyboard");

	// Task 4: Business Customer Section – Handling Event Bubbling
    const customerSection = document.getElementById("customerSection"); // Selecting the customer section container
 
    // Example customer cards
    document.body.onload = () => {
        for (let i = 1; i <= 3; i++) {
            const customerCard = document.createElement("div"); // Creating a new div for each customer
            customerCard.setAttribute("class", "customer-card"); // Assigning a class to customer cards
            customerCard.innerText = "Customer " + i; // Setting text content for each card
     
            // Prevent event bubbling
            customerCard.addEventListener("click", function (event) {
                console.log("Customer card clicked"); // Logging when a card is clicked
                event.stopPropagation(); // Stopping event from bubbling up to the parent container
            });
     
            customerSection.appendChild(customerCard);  // Appending customer cards to the customer section
        }
    };
     
    // Parent container event listener to test event bubbling
    customerSection.addEventListener("click", function () {
        console.log("Customer section clicked"); // Logging when the customer section is clicked
    });
