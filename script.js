// write js code here if required
 function updateTimer() {
            const now = new Date();
            const eventDate = new Date("2024-12-31T23:59:59"); // Change this to your desired end date
            const diff = eventDate - now;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById("timer").innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
        }

        setInterval(updateTimer, 1000); // Update every second
        updateTimer(); // Initial call