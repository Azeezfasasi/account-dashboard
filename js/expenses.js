document.addEventListener("DOMContentLoaded", function () {
    // Initialize total amount
    let totalAmount = 0;

    // Function to add an expense
    window.addExpense = function () {
        const expenseName = document.getElementById("expenseName").value;
        const expenseAmount = parseFloat(document.getElementById("expenseAmount").value);

        // Validate input
        if (!expenseName || isNaN(expenseAmount)) {
            alert("Please enter valid data.");
            return;
        }

        // Add expense to the list
        const expensesList = document.getElementById("expenses");
        const li = document.createElement("li");
        li.textContent = `${expenseName}: $${expenseAmount.toFixed(2)}`;
        expensesList.appendChild(li);

        // Update total amount
        totalAmount += expenseAmount;
        document.getElementById("totalAmount").textContent = `$${totalAmount.toFixed(2)}`;

        // Clear input fields
        document.getElementById("expenseName").value = "";
        document.getElementById("expenseAmount").value = "";
    };
});
