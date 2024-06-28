function getNextFriday() {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const daysUntilFriday = (5 + 7 - dayOfWeek) % 7;
    const friday = new Date(now);
    friday.setDate(now.getDate() + daysUntilFriday);
    friday.setHours(24, 0, 0, 0); // 12 de la noche (00:00)
    return friday;
}

function updateCountdownFriday() {
    const now = new Date().getTime();
    const countDownDate = getNextFriday().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-friday").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(intervalFriday);
        document.getElementById("countdown-friday").style.display = "none"; // Ocultar el contador
        document.getElementById("text-section").style.display = "block"; // Mostrar el texto
    }
}

document.addEventListener("DOMContentLoaded", (event) => {
    const intervalFriday = setInterval(updateCountdownFriday, 1000);
});
