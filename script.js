const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');
const question = document.getElementById('question');
const message = document.getElementById('message');

// حركة هروب الزر "No"
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// وظيفة الاحتفال وظهور القلوب
function celebrate() {
    question.classList.add('hidden');
    noBtn.classList.add('hidden');
    yesBtn.classList.add('hidden');
    message.classList.remove('hidden');

    // إنشاء مطر من القلوب
    setInterval(createHeart, 150);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'; // يمكنك تغييرها بـ '💖' أو '💕'
    
    // وضع القلب في مكان عشوائي أفقياً
    heart.style.left = Math.random() * 100 + "vw";
    
    // حجم عشوائي للقلوب
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    
    // مدة سقوط عشوائية لجعل المنظر طبيعياً
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    
    document.body.appendChild(heart);
    
    // حذف القلب من المتصفح بعد انتهاء السقوط لتوفير الذاكرة
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
