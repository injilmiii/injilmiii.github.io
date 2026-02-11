document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM loaded - starting script");
    
    // Create floating hearts
    createFloatingHearts();
    
    // Envelope/Love Letter Interaction
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const closeBtn = document.getElementById('closeBtn');
    
    if (envelope) {
        envelope.addEventListener('click', function() {
            envelope.style.display = 'none';
            letter.style.display = 'block';
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            letter.style.display = 'none';
            envelope.style.display = 'block';
        });
    }
    
    // Virtual Tulips (Changed from Roses to Tulips)
    const roseContainer = document.getElementById('roseContainer');
    const roseBtn = document.getElementById('roseBtn');
    let roseCount = 0;
    
    if (roseBtn && roseContainer) {
        roseBtn.addEventListener('click', function() {
            if (roseCount < 20) {
                const rose = document.createElement('div');
                rose.className = 'rose';
                rose.innerHTML = '🌷'; // Changed from 🌹 to 🌷
                rose.style.fontSize = (Math.random() * 30 + 20) + 'px';
                rose.style.transform = `rotate(${Math.random() * 360}deg)`;
                rose.style.margin = '5px';
                
                roseContainer.appendChild(rose);
                roseCount++;
                
                // Remove oldest tulip if too many
                if (roseCount > 15) {
                    roseContainer.removeChild(roseContainer.firstChild);
                    roseCount--;
                }
            }
        });
    }
    
    // Emotional Message Interactivity
    const heartResponseBtn = document.getElementById('heartResponse');
    const messageResponseBtn = document.getElementById('messageResponse');
    
    console.log("Heart response button found:", heartResponseBtn);
    console.log("Message response button found:", messageResponseBtn);
    
    // Heart Response Button (One More Chance)
    if (heartResponseBtn) {
        console.log("Adding click event to heart response button");
        heartResponseBtn.addEventListener('click', function() {
            console.log("Heart response button clicked!");
            // Show virtual hug
            showVirtualHug();
            
            // Change button state
            this.innerHTML = '<i class="fas fa-heart-circle-check"></i><span>One More Chance</span><small>Thank you ❤️</small>';
            this.style.background = 'linear-gradient(45deg, #4CAF50, #8BC34A)';
            this.disabled = true;
            
            // Create heart explosion
            createHeartExplosion();
            
            // Play gentle sound
            const hugSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-happy-crowd-laugh-464.mp3');
            hugSound.volume = 0.2;
            hugSound.play().catch(e => console.log("Sound error:", e));
        });
    } else {
        console.log("Heart response button NOT FOUND!");
    }
    
    // Message Response Button
    if (messageResponseBtn) {
        console.log("Adding click event to message response button");
        messageResponseBtn.addEventListener('click', function() {
            console.log("Message response button clicked!");
            // Show understanding message
            showUnderstandingMessage();
            
            // Change button state
            this.innerHTML = '<i class="fas fa-envelope-circle-check"></i><span>Thank You</span><small>Means a lot</small>';
            this.style.background = 'linear-gradient(45deg, #2196F3, #03A9F4)';
            this.disabled = true;
            
            // Create gentle rain effect
            createGentleRain();
            
            // Play soft sound
            const softSound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-soft-rain-loop-1246.mp3');
            softSound.volume = 0.1;
            softSound.play().catch(e => console.log("Sound error:", e));
        });
    } else {
        console.log("Message response button NOT FOUND!");
    }
    
    function showVirtualHug() {
        console.log("Showing virtual hug popup");
        const hugMessage = document.createElement('div');
        hugMessage.innerHTML = `
            <div class="popup-overlay" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9998;"></div>
            <div style="position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);
                       background:rgba(255,20,147,0.95); color:white; padding:30px;
                       border-radius:20px; z-index:9999; text-align:center;
                       animation:hugPopUp 0.5s ease; max-width:90%; width:400px;
                       box-shadow:0 15px 35px rgba(0,0,0,0.3); border:3px solid white;">
                <i class="fas fa-hands-holding-heart" style="font-size:4rem; margin-bottom:20px;"></i>
                <h3 style="font-family:'Dancing Script'; font-size:2.5rem; margin:20px 0;">
                    One More Chance! 🤗
                </h3>
                <p style="font-size:1.2rem; line-height:1.6;">
                    Thank you for believing in us.<br>
                    I won't let you down. ❤️
                </p>
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="margin-top:25px; padding:12px 35px; background:white;
                               color:#ff1493; border:none; border-radius:50px;
                               font-weight:bold; cursor:pointer; font-size:1.1rem;">
                    Close
                </button>
            </div>
            <style>
                @keyframes hugPopUp {
                    0% { transform:translate(-50%,-50%) scale(0); opacity:0; }
                    70% { transform:translate(-50%,-50%) scale(1.1); }
                    100% { transform:translate(-50%,-50%) scale(1); opacity:1; }
                }
            </style>
        `;
        document.body.appendChild(hugMessage);
    }
    
    function showUnderstandingMessage() {
        console.log("Showing understanding message popup");
        const understandMessage = document.createElement('div');
        understandMessage.innerHTML = `
            <div class="popup-overlay" style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9998;"></div>
            <div style="position:fixed; top:50%; left:50%; transform:translate(-50%,-50%);
                       background:rgba(138,43,226,0.95); color:white; padding:30px;
                       border-radius:20px; z-index:9999; text-align:center;
                       animation:understandPopUp 0.5s ease; max-width:90%; width:400px;
                       box-shadow:0 15px 35px rgba(0,0,0,0.3); border:3px solid white;">
                <i class="fas fa-heart-circle-check" style="font-size:4rem; margin-bottom:20px;"></i>
                <h3 style="font-family:'Dancing Script'; font-size:2.5rem; margin:20px 0;">
                    Thank You 💜
                </h3>
                <p style="font-size:1.2rem; line-height:1.6;">
                    Thank you for understanding.<br>
                    Just knowing you received this message means everything to me.
                </p>
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="margin-top:25px; padding:12px 35px; background:white;
                               color:#8a2be2; border:none; border-radius:50px;
                               font-weight:bold; cursor:pointer; font-size:1.1rem;">
                    Close
                </button>
            </div>
            <style>
                @keyframes understandPopUp {
                    0% { transform:translate(-50%,-50%) scale(0); opacity:0; }
                    100% { transform:translate(-50%,-50%) scale(1); opacity:1; }
                }
            </style>
        `;
        document.body.appendChild(understandMessage);
    }
    
    // Music Player
    const musicBtn = document.getElementById('musicBtn');
    const loveSong = document.getElementById('loveSong');
    let isPlaying = false;
    
    if (musicBtn && loveSong) {
        musicBtn.addEventListener('click', function() {
            if (isPlaying) {
                loveSong.pause();
                musicBtn.innerHTML = '<i class="fas fa-music"></i> Play Music';
            } else {
                loveSong.play().catch(e => console.log("Music play error:", e));
                musicBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Music';
            }
            isPlaying = !isPlaying;
        });
    }
    
    // Create floating hearts
    function createFloatingHearts() {
        const heartsContainer = document.querySelector('.floating-hearts');
        if (!heartsContainer) return;
        
        // Create hearts periodically
        setInterval(createHeart, 1000);
    }
    
    function createHeart() {
        const heartsContainer = document.querySelector('.floating-hearts');
        if (!heartsContainer) return;
        
        const hearts = ['❤️', '💖', '💘', '💝', '💕', '💗', '💓'];
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        
        const size = Math.random() * 20 + 15;
        heart.style.fontSize = size + 'px';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        
        heartsContainer.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            if (heart.parentNode) {
                heart.remove();
            }
        }, 5000);
    }
    
    function createHeartExplosion() {
        console.log("Creating heart explosion");
        const hearts = ['❤️', '💖', '💕', '💗', '💘', '💓', '💞'];
        
        for (let i = 0; i < 25; i++) {
            const heart = document.createElement('div');
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.fontSize = Math.random() * 30 + 20 + 'px';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = Math.random() * 100 + 'vh';
            heart.style.opacity = '0';
            heart.style.animation = `heartExplode ${Math.random() * 2 + 1}s ease-out forwards`;
            heart.style.animationDelay = Math.random() * 0.3 + 's';
            heart.style.zIndex = '9997';
            heart.style.pointerEvents = 'none';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.remove();
                }
            }, 2000);
        }
        
        // Add explosion animation style
        if (!document.querySelector('#heartExplodeStyle')) {
            const style = document.createElement('style');
            style.id = 'heartExplodeStyle';
            style.textContent = `
                @keyframes heartExplode {
                    0% {
                        transform: translate(0, 0) rotate(0deg) scale(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translate(${Math.random() * 200 - 100}px, -200px) rotate(360deg) scale(1);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    function createGentleRain() {
        console.log("Creating gentle rain");
        
        for (let i = 0; i < 20; i++) {
            const drop = document.createElement('div');
            drop.innerHTML = '💧';
            drop.style.position = 'fixed';
            drop.style.fontSize = Math.random() * 25 + 15 + 'px';
            drop.style.left = Math.random() * 100 + 'vw';
            drop.style.top = '-50px';
            drop.style.opacity = '0';
            drop.style.animation = `gentleRain ${Math.random() * 2 + 1}s linear forwards`;
            drop.style.animationDelay = Math.random() * 0.5 + 's';
            drop.style.zIndex = '9997';
            drop.style.pointerEvents = 'none';
            
            document.body.appendChild(drop);
            
            setTimeout(() => {
                if (drop.parentNode) {
                    drop.remove();
                }
            }, 2000);
        }
        
        // Add rain animation style
        if (!document.querySelector('#gentleRainStyle')) {
            const style = document.createElement('style');
            style.id = 'gentleRainStyle';
            style.textContent = `
                @keyframes gentleRain {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0.8;
                    }
                    100% {
                        transform: translateY(100vh) rotate(10deg);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    console.log("Script initialization complete");
});