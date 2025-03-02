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