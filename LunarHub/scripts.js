document.addEventListener("DOMContentLoaded", function() {
    // Live Discord Member Count
    fetch("https://discord.com/api/guilds/1260029061175181362/widget.json")
        .then(response => response.json())
        .then(data => {
            if (data.presence_count !== undefined) {
                document.getElementById("discord-count").textContent = data.presence_count;
            } else {
                document.getElementById("discord-count").textContent = "N/A";
            }
        })
        .catch(error => {
            console.error('Error fetching Discord data:', error);
            document.getElementById("discord-count").textContent = "Error";
        });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = canvas.width / 20; // Adjust the column size
const rainDrops = Array.from({ length: columns }).fill(1);

const matrixEffect = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Trail effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#8E2DE2'; // Matrix color
    ctx.font = '20px monospace';

    rainDrops.forEach((y, index) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = index * 20; // Adjust the x-spacing
        ctx.fillText(text, x, y);
        if (y > canvas.height && Math.random() > 0.975) {
            rainDrops[index] = 0; // Reset to the top of the screen
        } else {
            rainDrops[index] = y + 20; // Adjust the speed
        }
    });
};

setInterval(matrixEffect, 50);

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
document.addEventListener("DOMContentLoaded", function () {
    const text = "Lunar Hub";
    const typingSpeed = 200; // Delay between each character
    const resetDelay = 1000; // Delay before restarting typing
    let index = 0;
    let direction = 1; // 1 for forward, -1 for backward

    function type() {
        const typedLogo = document.getElementById("typed-logo");
        typedLogo.textContent = text.slice(0, index);

        index += direction;

        if (index === text.length + 1) {
            direction = -1;
            setTimeout(type, resetDelay);
        } else if (index === 0) {
            direction = 1;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, typingSpeed);
        }
    }

    type();
});
