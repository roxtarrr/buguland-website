window.onload = function(){
    function getNextFriday() {
        const now = new Date();
        const dayOfWeek = now.getDay();
        const daysUntilFriday = (5 + 7 - dayOfWeek) % 7;
        const friday = new Date(now);
        friday.setDate(now.getDate() + daysUntilFriday);
        friday.setHours(24, 0, 0, 0); // 12 de la noche (00:00)
        return friday;
    }
    
    function updateCountdown() {
        const now = new Date().getTime();
        const countDownDate = getNextFriday().getTime();
        const distance = countDownDate - now;
    
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "¡Tiempo agotado!";
        }
    }
    
    const interval = setInterval(updateCountdown, 1000);
}