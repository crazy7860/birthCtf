document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    // LOGIN PAGE
    if (path.includes("index.html") || path.endsWith("/")) {
        const loginForm = document.getElementById('loginForm');
        const error = document.getElementById('error');
        const memeContainer = document.getElementById('memeContainer');
        const memeVideo = document.getElementById('memeVideo');

        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();

            if (username === 'chai_or_biscuit' && password === 'Espanol.py') {
                window.location.href = 'secret.html';
            } else {
                error.innerText = "Wrong credentials!";
                memeContainer.style.display = 'block';
                memeVideo.currentTime = 0;
                memeVideo.play();

                setTimeout(() => {
                    memeContainer.style.display = 'none';
                }, 5000);
            }
        });

        gsap.from(".container", { opacity: 0, duration: 2, y: -50 });
    }

    // SECRET PAGE
    else if (path.includes("secret.html")) {
        const secretForm = document.getElementById('secretForm');
        const error = document.getElementById('error');

        secretForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const secret = document.getElementById('secret').value.trim();

            if (secret === 'ILovemycookie') {
                window.location.href = 'win.html';
            } else {
                error.innerText = "Wrong secret code!";
            }
        });

        gsap.from(".container", { opacity: 0, duration: 2, x: -50 });
    }

    // WIN PAGE
    else if (path.includes("win.html")) {
        gsap.from(".celebrate-text", { scale: 0, duration: 1.5, ease: "bounce.out" });
        gsap.from(".motivation", { opacity: 0, delay: 0.5, duration: 1.5 });
        gsap.from(".cookie-image", { opacity: 0, y: 100, delay: 1, duration: 2 });

        setInterval(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }, 2000);
    }
});
