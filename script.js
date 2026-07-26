// Loading Screen
setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("password-screen").style.display = "flex";
}, 3000);
// Password
function checkPassword(){
    let pass = document.getElementById("password").value;
    if(pass === "my swan"){
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("welcome-screen").style.display = "flex";
        playMusic();
    }
    else{
        alert("Wrong Password 😅");
    }
}
// Floating Hearts
const hearts = document.querySelector(".hearts");
function createHeart(){
    if (!hearts) return;
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    hearts.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 10000);
}
setInterval(createHeart, 350);

const sparkleContainer = document.querySelector(".sparkles");
function createSparkle(){
    if (!sparkleContainer) return;
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.innerHTML = "✨";
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";
    sparkle.style.fontSize = (10 + Math.random() * 20) + "px";
    sparkleContainer.appendChild(sparkle);
    setTimeout(() => {
        sparkle.remove();
    }, 4000);
}
setInterval(createSparkle, 250);
// Letter Typewriter
const message =
`Happy Birthday, my pretty little baby. ❤️



Happy 17th Birthday, Baby.
I love you. Always have. Always will. ❤️`;

const startBtn = document.getElementById("start-btn");
const welcomeScreen = document.getElementById("welcome-screen");
const letterScreen = document.getElementById("letter-screen");
const letter = document.getElementById("letter-text");
const letterCard = document.querySelector(".letter-card");
const continueBtn = document.getElementById("continue-btn");

if (startBtn) {
    startBtn.onclick = function(){
        welcomeScreen.style.display = "none";
        letterScreen.style.display = "flex";
        typeLetter();
    };
}

function typeLetter(){
    let i = 0;
    letter.innerHTML = "";
    let typing = setInterval(() => {
        if (message.charAt(i) === '\n') {
            letter.innerHTML += "<br>";
        } else {
            letter.innerHTML += message.charAt(i);
        }
        
        if (letterCard) {
            letterCard.scrollTop = letterCard.scrollHeight;
        }

        i++;
        if (i >= message.length) {
            clearInterval(typing);
            continueBtn.style.display = "block";
            if (letterCard) letterCard.scrollTop = letterCard.scrollHeight;
        }
    }, 60); // 60ms delay for smooth typing speed
}
// Memory Section
const memoryScreen = document.getElementById("memory-screen");
const memories = [
    {
        image: "images/photo1.jpeg",
        title: "Our First Chat 📱",
        caption: "Every beautiful story starts with a small moment ❤️"
    },
    {
        image: "images/photo2.jpeg",
        title: "A Special Memory 🌸",
        caption: "Some moments become forever memories ✨"
    },
    {
        image: "images/photo3.jpeg",
        title: "Priceless Moments For Me💕",
        caption: "Haan, tumhare alfaaz aaj bhi mere dil ki dhadkan hain ❤️"
    }
];

let memoryIndex = 0;
const memoryImage = document.getElementById("memory-image");
const memoryTitle = document.getElementById("memory-title");
const memoryCaption = document.getElementById("memory-caption");
const memoryNextBtn = document.getElementById("memory-next-btn");

if (continueBtn) {
    continueBtn.onclick = function(){
        letterScreen.style.display = "none";
        memoryScreen.style.display = "flex";
    };
}

if (memoryNextBtn) {
    memoryNextBtn.onclick = function(){
        memoryIndex++;
        if (memoryIndex >= memories.length) {
            memoryScreen.style.display = "none";
            voiceScreen.style.display = "flex";
            return;
        }
        memoryImage.style.opacity = "0";
        setTimeout(() => {
            memoryImage.src = memories[memoryIndex].image;
            memoryTitle.innerHTML = memories[memoryIndex].title;
            memoryCaption.innerHTML = memories[memoryIndex].caption;
            memoryImage.style.opacity = "1";
        }, 500);
    };
}
// Voice Section
const voiceScreen = document.getElementById("voice-screen");

// Gift Section
const giftBtn = document.getElementById("gift-btn");
const giftScreen = document.getElementById("gift-screen");
const giftBox = document.getElementById("giftBox");
const finalMessage = document.getElementById("final-message");

if (giftBtn) {
    giftBtn.onclick = function(){
        voiceScreen.style.display = "none";
        giftScreen.style.display = "flex";
    };
}

if (giftBox) {
    giftBox.onclick = function(){
        giftBox.classList.add("gift-open");
        setTimeout(() => {
            finalMessage.innerHTML = `
            Happy Birthday ❤️
            <br><br>
            You are one of the most special people in my life.
            <br>
            Always keep smiling ✨
            `;
        }, 800);
        setTimeout(() => {
            startCelebration();
        }, 2000);
    };
}

// Final Celebration
const celebration = document.getElementById("celebration");
function startCelebration(){
    giftScreen.style.display = "none";
    celebration.style.display = "flex";
    createConfetti();
    animateNicknames();
}

function createConfetti(){
    const emojis = ["❤️", "✨", "🌸", "🎉"];
    for(let i = 0; i < 80; i++){
        let confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = (3 + Math.random() * 3) + "s";
        document.body.appendChild(confetti);
        setTimeout(() => {
            confetti.remove();
        }, 6000);
    }
}

function animateNicknames() {
    const names = document.querySelectorAll(".nickname-container span");
    names.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transform = "translateY(25px)";
        setTimeout(() => {
            item.style.transition = "0.6s";
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 250);
    });
}
// Background Music & Voice Management
const music = document.getElementById("bg-music");

function playMusic() {
    if (music) {
        music.volume = 0.35; // Normal volume
        music.play().catch(error => {
            console.log("Autoplay blocked by browser:", error);
        });
    }
}

const voiceMessage = document.getElementById("voice-message");

if (voiceMessage) {
    voiceMessage.volume = 1.0; // Voice message maximum volume

    voiceMessage.onplay = function() {
        if (music) {
            music.volume = 0.08; // Voice play hole music halka hobe
        }
    };

    voiceMessage.onpause = function() {
        if (music) {
            music.volume = 0.35; // Pause hole normal hobe
        }
    };

    voiceMessage.onended = function() {
        if (music) {
            music.volume = 0.35; // End hole normal hobe
        }
    };
}
// WAIT & VIDEO SCREEN LOGIC
const waitScreen = document.getElementById("wait-screen");
const videoScreen = document.getElementById("video-screen");
const waitNextBtn = document.getElementById("wait-next-btn");
const celebrationNextBtn = document.getElementById("celebration-next-btn");
const cakeVideo = document.getElementById("cake-video");

function showWaitScreen() {
    if (typeof celebration !== 'undefined' && celebration) {
        celebration.style.display = "none";
    }
    if (waitScreen) waitScreen.style.display = "flex";
}

// Celebration Screen Button Click
if (celebrationNextBtn) {
    celebrationNextBtn.onclick = function(e) {
        e.stopPropagation();
        showWaitScreen();
    };
}

// Celebration Screen Anywhere Click Back-up
if (typeof celebration !== 'undefined' && celebration) {
    celebration.onclick = function() {
        showWaitScreen();
    };
}

// Wait Screen -> Video Screen Transition
if (waitNextBtn) {
    waitNextBtn.onclick = function(e) {
        e.stopPropagation();
        if (waitScreen) waitScreen.style.display = "none";
        if (videoScreen) videoScreen.style.display = "block"; // Fixed to block for smooth scrolling & stability
        
        // Background music pause for clear video audio
        if (typeof music !== 'undefined' && music) {
            music.pause();
        }
        
        // Video play setup
        if (cakeVideo) {
            cakeVideo.play().catch(err => console.log("Video Play Error:", err));
        }
    };
}

// Video Ended (Typewriter)

if (cakeVideo) {
    cakeVideo.onended = function() {
        const videoCard = document.querySelector('.video-card');
        const videoTitle = document.getElementById('video-title');
        const videoSub = document.querySelector('.video-subtitle');
        const loveText = document.querySelector('.final-love-text');
        const emotionalCard = document.getElementById('final-emotional-card');
        const emotionalTextP = document.getElementById('emotional-text-p');

        if (videoCard) videoCard.style.display = 'none';
        if (videoTitle) videoTitle.style.display = 'none';
        if (videoSub) videoSub.style.display = 'none';
        if (loveText) loveText.style.display = 'none';

        if (typeof music !== 'undefined' && music) {
            music.play().catch(err => console.log("Music play prevented on end:", err));
        }
        if (emotionalCard) {
            emotionalCard.style.display = 'block';
            
            const emotionalMessage = `And baby... thank you isn't enough. It's I love you. ❤️\n\nHaving you in my life is the greatest blessing. If this little surprise brought even the smallest smile to your face, then all my efforts were worth it. That's all I ever wanted. 🤍`;
            
            let index = 0;
            emotionalTextP.innerHTML = "";
            
            let typeTimer = setInterval(() => {
                if (emotionalMessage.charAt(index) === '\n') {
                    emotionalTextP.innerHTML += "<br>";
                } else {
                    emotionalTextP.innerHTML += emotionalMessage.charAt(index);
                }
                index++;
                
                if (index >= emotionalMessage.length) {
                    clearInterval(typeTimer);
                    const replayBtn = document.getElementById('replay-btn');
                    if(replayBtn) replayBtn.style.opacity = '1';
                }
            }, 45); //
        }
    };
}
