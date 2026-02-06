document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts
    createFloatingHearts();
    
    // Envelope/Love Letter Interaction
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const closeBtn = document.getElementById('closeBtn');
    
    envelope.addEventListener('click', function() {
        envelope.style.display = 'none';
        letter.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', function() {
        letter.style.display = 'none';
        envelope.style.display = 'block';
    });
    
    // Love Meter
    const meterBar = document.getElementById('meterBar');
    const meterText = document.getElementById('meterText');
    const heartBtn = document.getElementById('heartBtn');
    
    heartBtn.addEventListener('click', function() {
        const randomLove = Math.floor(Math.random() * 101);
        meterBar.style.width = randomLove + '%';
        
        if (randomLove < 30) {
            meterText.textContent = `Only ${randomLove}%? We need more dates! 💔`;
        } else if (randomLove < 70) {
            meterText.textContent = `${randomLove}%! Our love is growing! 💖`;
        } else {
            meterText.textContent = `${randomLove}%! We're perfect together! 💘`;
        }
        
        // Animate button
        heartBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            heartBtn.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Virtual Roses
    const roseContainer = document.getElementById('roseContainer');
    const roseBtn = document.getElementById('roseBtn');
    let roseCount = 0;
    
    roseBtn.addEventListener('click', function() {
        if (roseCount < 20) {
            const rose = document.createElement('div');
            rose.className = 'rose';
            rose.innerHTML = '🌹';
            rose.style.fontSize = (Math.random() * 30 + 20) + 'px';
            rose.style.transform = `rotate(${Math.random() * 360}deg)`;
            rose.style.margin = '5px';
            
            roseContainer.appendChild(rose);
            roseCount++;
            
            // Remove oldest rose if too many
            if (roseCount > 15) {
                roseContainer.removeChild(roseContainer.firstChild);
                roseCount--;
            }
        }
    });
    
    // Love Message
    const loveMessage = document.getElementById('loveMessage');
    const sendBtn = document.getElementById('sendBtn');
    
    sendBtn.addEventListener('click', function() {
        if (loveMessage.value.trim() === '') {
            alert('Please write a love message first! 💕');
            return;
        }
        
        alert('Your love message has been sent to the universe! 💘\n\n"' + loveMessage.value + '"');
        loveMessage.value = '';
        
        // Create floating hearts
        for (let i = 0; i < 10; i++) {
            createHeart();
        }
    });
    
    // Music Player
    const musicBtn = document.getElementById('musicBtn');
    const loveSong = document.getElementById('loveSong');
    let isPlaying = false;
    
    musicBtn.addEventListener('click', function() {
        if (isPlaying) {
            loveSong.pause();
            musicBtn.innerHTML = '<i class="fas fa-music"></i> Play Music';
        } else {
            loveSong.play();
            musicBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Music';
        }
        isPlaying = !isPlaying;
    });
    
    // Auto-play music (with user interaction)
    document.body.addEventListener('click', function initMusic() {
        if (!isPlaying) {
            loveSong.volume = 0.3;
            loveSong.play().catch(e => console.log("Autoplay blocked"));
            isPlaying = true;
            musicBtn.innerHTML = '<i class="fas fa-pause"></i> Pause Music';
        }
        document.body.removeEventListener('click', initMusic);
    });
    
    // Create floating hearts
    function createFloatingHearts() {
        const heartsContainer = document.querySelector('.floating-hearts');
        const heartCount = 20;
        
        for (let i = 0; i < heartCount; i++) {
            setTimeout(() => createHeart(), i * 300);
        }
        
        // Continue creating hearts
        setInterval(createHeart, 1000);
    }
    
    function createHeart() {
        const hearts = ['❤️', '💖', '💘', '💝', '💕', '💗', '💓'];
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
        
        const size = Math.random() * 20 + 15;
        heart.style.fontSize = size + 'px';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        
        document.querySelector('.floating-hearts').appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    // Add click effect to social icons
    const socialIcons = document.querySelectorAll('.social-icons i');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            alert('Sharing love on social media! 💕');
        });
    });
    
    // Add hover effect to all interactive elements
    const interactiveElements = document.querySelectorAll('button, .photo-frame, .envelope');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            el.style.transition = 'all 0.3s ease';
        });
    });
});