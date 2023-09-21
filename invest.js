document.addEventListener("DOMContentLoaded", function () {
    const payBtn = document.getElementById("payBtn");
    const bitcoinAddressContainer = document.querySelector(".bitcoin-address");
    const copyBitcoinBtn = document.getElementById("copyBitcoinBtn");
    const countdownContainer = document.getElementById("countdown-container");
    const countdown = document.getElementById("countdown");
    const expirationMessage = document.getElementById("expiration-message");

    let countdownInterval;

    // Function to start the countdown
    const startCountdown = () => {
        bitcoinAddressContainer.style.display = "block";
        countdownContainer.style.display = "block";
        payBtn.style.display = "none";

        let timeRemaining = 30 * 60; // 30 minutes in seconds

        countdownInterval = setInterval(function () {
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;

            countdown.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            expirationMessage.textContent = `Your payment will expire in: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

            if (timeRemaining === 0) {
                clearInterval(countdownInterval);
                countdown.textContent = "Time's up!";
            } else {
                timeRemaining--;
            }
        }, 1000);
    };

    // Event listener for the "Pay amount" button
    payBtn.addEventListener("click", startCountdown);

    // Event listener for the "Copy Bitcoin Address" button
    copyBitcoinBtn.addEventListener("click", function () {
        const bitcoinAddress = document.getElementById("bitcoinAddress");
        bitcoinAddress.select();
        document.execCommand("copy");
        // Optionally, you can provide a user feedback message here.
    });
});
