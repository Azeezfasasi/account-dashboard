document.addEventListener("DOMContentLoaded", function () {
    let balance = 0;

    // Function to perform a transaction
    window.performTransaction = function () {
        const amount = parseFloat(document.getElementById("amount").value);
        const transactionType = document.getElementById("transactionType").value;

        // Validate input
        if (isNaN(amount) || amount <= 0) {
            alert("Please enter a valid positive amount.");
            return;
        }

        // Update balance based on the transaction type
        if (transactionType === "income") {
            balance += amount;
        } else if (transactionType === "expense") {
            if (amount > balance) {
                alert("Insufficient funds for the expense.");
                return;
            }
            balance -= amount;
        }

        // Update the balance display
        document.getElementById("balance").textContent = `Balance: $${balance.toFixed(2)}`;

        // Add the transaction to the history
        const transactionList = document.getElementById("transactionList");
        const li = document.createElement("li");
        li.textContent = `${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}: ₦${amount.toFixed(2)}`;
        transactionList.appendChild(li);

        // Clear input field
        document.getElementById("amount").value = "";
    };
});
