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
        document.getElementById("countdown-friday").innerHTML = "¡Tiempo agotado!";
    }
}

function getTenMinutesFromNow() {
    const now = new Date();
    const tenMinutesLater = new Date(now.getTime() + 10 * 60 * 1000); // 10 minutos a partir de ahora
    return tenMinutesLater;
}

function startCountdownTenMinutes() {
    const countdownElement = document.getElementById("countdown-10s");
    const now = new Date().getTime();
    const tenMinutesLater = getTenMinutesFromNow().getTime();

    const intervalTenMinutes = setInterval(() => {
        const now = new Date().getTime();
        const distance = tenMinutesLater - now;

        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(intervalTenMinutes);
            countdownElement.innerHTML = '<button id="playButton">PLAY</button>';
            document.getElementById("playButton").addEventListener("click", () => {
                playVideo();
            });
        }
    }, 1000);
}

function playVideo() {
    const video = document.getElementById("myVideo");
    video.style.display = "block";
    const src = video.src;
    video.src = src + "&autoplay=1"; // Añadir autoplay=1 para reproducir el video automáticamente
}

document.addEventListener("DOMContentLoaded", (event) => {
    startCountdownTenMinutes();
    document.getElementById("testPlayButton").addEventListener("click", () => {
        playVideo();
    });

    // Iniciar el contador para el viernes a las 12 de la noche
    const intervalFriday = setInterval(updateCountdownFriday, 1000);
});
