// Code by Ethan Bukkos

//Countdown timer for homepage

document.addEventListener("DOMContentLoaded", function () {
    const event = new Date("December 23, 2024 23:59:59").getTime();

    function updateTimer() {
        const present = new Date().getTime();
        const time_remaining = event - present;

        if (time_remaining <= 0) {

            document.getElementById("timer").innerHTML = "This event is over";
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(time_remaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time_remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((time_remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((time_remaining % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    }

    const timerInterval = setInterval(updateTimer, 1000);

    updateTimer();
});