document.addEventListener("DOMContentLoaded", function () {
    const investBtn = document.getElementById("investBtn");
    const modal = document.getElementById("modal");
    const closeBtn = document.getElementById("closeBtn");
    const copyBtn = document.getElementById("copyBtn");
    const countdownContainer = document.getElementById("countdown-container");
    const countdown = document.getElementById("countdown");
    const loadingBar = document.getElementById("loading-bar");
    const expirationMessage = document.getElementById("expiration-message");
    const bitcoinAddress = document.getElementById("bitcoinAddress");
    // Initialize Clipboard.js
const clipboard = new ClipboardJS('copyBtn');

    // Function to open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        modal.style.display = "none";
    }

    // Event listener for the "Invest Now" button
    investBtn.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the link from navigating

        openModal();
    });

    // Event listener for the close button
    closeBtn.addEventListener("click", function () {
        closeModal();
    });

    // Event listener for the "Copy to Clipboard" button
    copyBtn.addEventListener("click", function () {
        // Copy the Bitcoin address to the clipboard
        bitcoinAddress.select();
        document.execCommand("copy");

        // Hide the "Copy to Clipboard" button
        copyBtn.style.display = "none";

        // Show the countdown container and expiration message
        countdownContainer.style.display = "block";
        expirationMessage.style.display = "block";

        // Set the countdown time (30 minutes)
        let timeRemaining = 30 * 60; // 30 minutes in seconds

        // Update the countdown timer, loading bar, and expiration message every second
        const countdownInterval = setInterval(function () {
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;

            // Display the countdown timer
            countdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

            // Update the loading bar
            const progressBarWidth = (timeRemaining / (30 * 60)) * 100;
            loadingBar.style.width = `${progressBarWidth}%`;

            // Display the expiration message
            expirationMessage.textContent = `Your payment will expire in: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

            if (timeRemaining === 0) {
                clearInterval(countdownInterval);
                countdown.textContent = "Time's up!";
            } else {
                timeRemaining--;
            }
        }, 1000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loadingBar = document.getElementById("loadingBar");
    const earningsText = document.getElementById("earningsText");

    // Define the initial earnings and progress
    let earnings = 0;
    let progress = 0;

    // Update the loading bar and earnings daily
    function updateLoadingBar() {
        if (progress < 100) {
            // Increase progress by 0.5% daily
            progress += 0.5;
            earnings += 0.5;

            // Update the loading bar width
            loadingBar.style.width = `${progress}%`;

            // Update the earnings text
            earningsText.textContent = `Earnings: ${earnings.toFixed(2)}%`;

            // Repeat the function after 24 hours (86,400,000 milliseconds)
            setTimeout(updateLoadingBar, 86400000);
        }
    }

    // Start updating the loading bar
    updateLoadingBar();
});

