document.addEventListener("DOMContentLoaded", function () {
    // Load settings from local storage
    loadSettings();

    // Function to load settings from local storage
    function loadSettings() {
        const username = localStorage.getItem("username") || "";
        const theme = localStorage.getItem("theme") || "light";
        const notifications = localStorage.getItem("notifications") === "true";

        // Populate form fields with saved settings
        document.getElementById("username").value = username;
        document.getElementById("theme").value = theme;
        document.getElementById("notifications").checked = notifications;
    }

    // Function to save settings to local storage
    window.saveSettings = function () {
        const username = document.getElementById("username").value;
        const theme = document.getElementById("theme").value;
        const notifications = document.getElementById("notifications").checked;

        // Save settings to local storage
        localStorage.setItem("username", username);
        localStorage.setItem("theme", theme);
        localStorage.setItem("notifications", notifications);

        // Provide feedback to the user (you may enhance this part)
        alert("Settings saved successfully!");
    };
});