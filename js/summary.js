document.addEventListener("DOMContentLoaded", function () {
    // Function to generate and display a summary
    window.generateSummary = function () {
        // Replace this part with your actual summary data generation logic
        const summaryData = {
            totalExpenses: 12000,
            totalIncome: 20000,
            netBalance: 8000,
            // Add more summary data as needed
        };

        // Display the summary content
        const summaryContent = document.getElementById("summaryContent");
        summaryContent.innerHTML = `
            <p>Total Expenses: ₦${summaryData.totalExpenses.toFixed(2)}</p>
            <p>Total Income: ₦${summaryData.totalIncome.toFixed(2)}</p>
            <p>Net Balance: ₦${summaryData.netBalance.toFixed(2)}</p>
            <!-- Add more summary content as needed -->
        `;

        // You can also perform additional actions or calculations here
    };
});
