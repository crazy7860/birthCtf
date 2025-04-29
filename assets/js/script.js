// LOGIN PAGE
if (window.location.pathname.includes("index.html")) {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      if (username === 'chai_or_biscuit' && password === 'Espanol.py') {
        window.location.href = 'secret.html';
      } else {
        document.getElementById('error').innerText = "Wrong credentials!";

        // Show meme video
        const memeContainer = document.getElementById('memeContainer');
        memeContainer.style.display = 'block';
        const memeVideo = document.getElementById('memeVideo');
        memeVideo.currentTime = 0;
        memeVideo.play();

        // Hide meme after 5 seconds
         setTimeout(() => {
            memeContainer.style.display = 'none';
         }, 5000);
 
      }
    });
  
    gsap.from(".container", { opacity: 0, duration: 2, y: -50 });
  }
  
  // SECRET CODE PAGE
  if (window.location.pathname.includes("secret.html")) {
    document.getElementById('secretForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const secret = document.getElementById('secret').value;
  
      if (secret === 'ILovemycookie') {
        window.location.href = 'win.html';
      } else {
        document.getElementById('error').innerText = "Wrong secret code!";
      }
    });
  
    gsap.from(".container", { opacity: 0, duration: 2, x: -50 });
  }
  
  // WIN PAGE
  if (window.location.pathname.includes("win.html")) {
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

  
  