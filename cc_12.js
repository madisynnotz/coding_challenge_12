// Task 1: Business Dashboard – DOM Element Selection and Creation
// Select the dashboard container using both methods
const dashboard = document.getElementById("dashboard");
const dashboardAlt = document.querySelector("#dashboard");
 
// Create a new metric card for Revenue
const revenueCard = document.createElement("div"); // Fixed: Added 'const' to declare the variable
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>";
 
dashboard.appendChild(revenueCard);

	// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
    const metricCards = document.querySelectorAll(".metric-card");
    const metricArray = Array.from(metricCards);
     
    metricArray.forEach(card => {
        card.innerHTML += " - Updated";
        card.style.backgroundColor = "lightblue";
    });

// Task 3: Dynamic Inventory Management – Adding and Removing Items
const inventoryList = document.getElementById("inventoryList");
 
function addProduct(name) {
    const productItem = document.createElement("li");
    productItem.setAttribute("class", "product-item");
    productItem.setAttribute("data-name", name);
    productItem.innerText = name;
 
    // Add event listener for removal
    productItem.addEventListener("click", function () {
        inventoryList.removeChild(productItem);
    });
 
    inventoryList.appendChild(productItem);
}
 
// Example: Adding some products
addProduct("Laptop");
addProduct("Monitor");
addProduct("Keyboard");

	// Task 4: Business Customer Section – Handling Event Bubbling
    const customerSection = document.getElementById("customerSection");
 
    // Example customer cards
    document.body.onload = () => {
        for (let i = 1; i <= 3; i++) {
            const customerCard = document.createElement("div");
            customerCard.setAttribute("class", "customer-card");
            customerCard.innerText = "Customer " + i;
     
            // Prevent event bubbling
            customerCard.addEventListener("click", function (event) {
                console.log("Customer card clicked");
                event.stopPropagation();
            });
     
            customerSection.appendChild(customerCard);
        }
    };
     
    // Parent container event listener to test event bubbling
    customerSection.addEventListener("click", function () {
        console.log("Customer section clicked");
    });