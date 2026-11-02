document.addEventListener('DOMContentLoaded', () => {
    // اسکرول نرم به بخش‌های مختلف
    const links = document.querySelectorAll('.main-nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });// اسکرول نرم (Smooth Scroll) برای لینک‌های منو
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80, // فاصله از هدر چسبیده
                behavior: 'smooth'
            });
        }
    });
});

// افکت ساده هنگام اسکرول (تغییر رنگ هدر)
window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 50) {
        header.style.padding = '5px 0';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.15)';
    } else {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
    }
});

// انیمیشن ورود کارت‌ها هنگام اسکرول
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .contact-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

    });

    console.log('سایت با تم لیمویی و کاهویی بارگذاری شد.');
});
