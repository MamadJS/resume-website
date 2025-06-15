// Language translations
const translations = {
    fa: {
        'nav.logo': 'MH',
        'nav.home': 'خانه',
        'nav.about': 'درباره من',
        'nav.projects': 'پروژه‌ها',
        'nav.experience': 'تجربیات',
        'nav.contact': 'تماس',
        'hero.name': 'محمد حسن هاشمی',
        'hero.title': 'مهندس ارشد فول‌استک',
        'hero.description': 'متخصص در React، Vue، Node.js، NestJS و NuxtJS',
        'hero.contact': 'تماس با من',
        'hero.linkedin': 'لینکدین',
        'about.title': 'درباره من',
        'about.description': 'من یک مهندس نرم‌افزار با بیش از ۵ سال تجربه در توسعه وب هستم. تخصص من در ساخت اپلیکیشن‌های مدرن و قابل اعتماد با استفاده از جدیدترین تکنولوژی‌ها است.',
        'about.skills': 'مهارت‌های من',
        'projects.title': 'پروژه‌های من',
        'projects.demo': 'نمایش',
        'projects.code': 'کد',
        'projects.project1.title': 'پلتفرم تجارت الکترونیک',
        'projects.project1.description': 'یک پلتفرم کامل تجارت الکترونیک با React و Node.js',
        'projects.project2.title': 'داشبورد مدیریت',
        'projects.project2.description': 'داشبورد مدیریت پیشرفته با Vue.js و NuxtJS',
        'projects.project3.title': 'API مایکروسرویس',
        'projects.project3.description': 'معماری مایکروسرویس با NestJS و Docker',
        'experience.title': 'تجربیات کاری',
        'experience.job1.date': '۲۰۲۲ - اکنون',
        'experience.job1.title': 'مهندس ارشد فول‌استک',
        'experience.job1.company': 'شرکت تکنولوژی پیشرو',
        'experience.job1.description': 'رهبری تیم توسعه و طراحی معماری سیستم‌های پیچیده',
        'experience.job2.date': '۲۰۲۰ - ۲۰۲۲',
        'experience.job2.title': 'توسعه‌دهنده فول‌استک',
        'experience.job2.company': 'استارتاپ نوآور',
        'experience.job2.description': 'توسعه اپلیکیشن‌های وب مدرن با React و Node.js',
        'experience.job3.date': '۲۰۱۹ - ۲۰۲۰',
        'experience.job3.title': 'توسعه‌دهنده فرانت‌اند',
        'experience.job3.company': 'آژانس دیجیتال',
        'experience.job3.description': 'ساخت رابط کاربری واکنش‌گرا و تجربه کاربری بهینه',
        'contact.title': 'تماس با من',
        'contact.email.title': 'ایمیل',
        'contact.phone.title': 'تلفن',
        'contact.linkedin.title': 'لینکدین',
        'contact.form.name': 'نام شما',
        'contact.form.email': 'ایمیل شما',
        'contact.form.message': 'پیام شما',
        'contact.form.send': 'ارسال پیام',
        'footer.copyright': '© ۲۰۲۴ محمد حسن هاشمی. تمام حقوق محفوظ است.'
    },
    en: {
        'nav.logo': 'MH',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contact': 'Contact',
        'hero.name': 'Mohammad Hassan Hashemi',
        'hero.title': 'Senior Full-Stack Engineer',
        'hero.description': 'Specialized in React, Vue, Node.js, NestJS and NuxtJS',
        'hero.contact': 'Contact Me',
        'hero.linkedin': 'LinkedIn',
        'about.title': 'About Me',
        'about.description': 'I am a software engineer with over 5 years of experience in web development. My expertise lies in building modern and reliable applications using the latest technologies.',
        'about.skills': 'My Skills',
        'projects.title': 'My Projects',
        'projects.demo': 'Demo',
        'projects.code': 'Code',
        'projects.project1.title': 'E-commerce Platform',
        'projects.project1.description': 'A complete e-commerce platform built with React and Node.js',
        'projects.project2.title': 'Management Dashboard',
        'projects.project2.description': 'Advanced management dashboard with Vue.js and NuxtJS',
        'projects.project3.title': 'Microservice API',
        'projects.project3.description': 'Microservice architecture with NestJS and Docker',
        'experience.title': 'Work Experience',
        'experience.job1.date': '2022 - Present',
        'experience.job1.title': 'Senior Full-Stack Engineer',
        'experience.job1.company': 'Leading Technology Company',
        'experience.job1.description': 'Leading development team and designing complex system architectures',
        'experience.job2.date': '2020 - 2022',
        'experience.job2.title': 'Full-Stack Developer',
        'experience.job2.company': 'Innovative Startup',
        'experience.job2.description': 'Developing modern web applications with React and Node.js',
        'experience.job3.date': '2019 - 2020',
        'experience.job3.title': 'Frontend Developer',
        'experience.job3.company': 'Digital Agency',
        'experience.job3.description': 'Building responsive user interfaces and optimal user experiences',
        'contact.title': 'Contact Me',
        'contact.email.title': 'Email',
        'contact.phone.title': 'Phone',
        'contact.linkedin.title': 'LinkedIn',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Your Email',
        'contact.form.message': 'Your Message',
        'contact.form.send': 'Send Message',
        'footer.copyright': '© 2024 Mohammad Hassan Hashemi. All rights reserved.'
    },
    ar: {
        'nav.logo': 'MH',
        'nav.home': 'الرئيسية',
        'nav.about': 'نبذة عني',
        'nav.projects': 'المشاريع',
        'nav.experience': 'الخبرات',
        'nav.contact': 'اتصل بي',
        'hero.name': 'محمد حسن هاشمي',
        'hero.title': 'مهندس برمجيات أول',
        'hero.description': 'متخصص في React و Vue و Node.js و NestJS و NuxtJS',
        'hero.contact': 'اتصل بي',
        'hero.linkedin': 'لينكد إن',
        'about.title': 'نبذة عني',
        'about.description': 'أنا مهندس برمجيات لدي أكثر من 5 سنوات من الخبرة في تطوير الويب. خبرتي تكمن في بناء تطبيقات حديثة وموثوقة باستخدام أحدث التقنيات.',
        'about.skills': 'مهاراتي',
        'projects.title': 'مشاريعي',
        'projects.demo': 'عرض',
        'projects.code': 'الكود',
        'projects.project1.title': 'منصة التجارة الإلكترونية',
        'projects.project1.description': 'منصة تجارة إلكترونية كاملة مبنية بـ React و Node.js',
        'projects.project2.title': 'لوحة تحكم الإدارة',
        'projects.project2.description': 'لوحة تحكم إدارة متقدمة مع Vue.js و NuxtJS',
        'projects.project3.title': 'واجهة برمجة التطبيقات المصغرة',
        'projects.project3.description': 'معمارية الخدمات المصغرة مع NestJS و Docker',
        'experience.title': 'الخبرة العملية',
        'experience.job1.date': '2022 - الحاضر',
        'experience.job1.title': 'مهندس برمجيات أول',
        'experience.job1.company': 'شركة التكنولوجيا الرائدة',
        'experience.job1.description': 'قيادة فريق التطوير وتصميم معماريات الأنظمة المعقدة',
        'experience.job2.date': '2020 - 2022',
        'experience.job2.title': 'مطور برمجيات شامل',
        'experience.job2.company': 'شركة ناشئة مبتكرة',
        'experience.job2.description': 'تطوير تطبيقات ويب حديثة مع React و Node.js',
        'experience.job3.date': '2019 - 2020',
        'experience.job3.title': 'مطور واجهة أمامية',
        'experience.job3.company': 'وكالة رقمية',
        'experience.job3.description': 'بناء واجهات مستخدم متجاوبة وتجارب مستخدم مثلى',
        'contact.title': 'اتصل بي',
        'contact.email.title': 'البريد الإلكتروني',
        'contact.phone.title': 'الهاتف',
        'contact.linkedin.title': 'لينكد إن',
        'contact.form.name': 'اسمك',
        'contact.form.email': 'بريدك الإلكتروني',
        'contact.form.message': 'رسالتك',
        'contact.form.send': 'إرسال الرسالة',
        'footer.copyright': '© 2024 محمد حسن هاشمي. جميع الحقوق محفوظة.'
    }
};

// Global variables
let currentLang = 'fa';
let isTyping = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupCustomCursor();
    setupLanguageSwitcher();
    setupThemeSwitcher();
    setupNavigation();
    setupScrollAnimations();
    setupSkillBars();
    setupContactForm();
    setupTypingAnimation();
    
    // Set initial language
    changeLanguage(currentLang);
}

// Custom Cursor
function setupCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    if (!cursor || !cursorFollower) return;
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });
    
    // Smooth follower animation
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();
    
    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item, .contact-item');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });
}

// Language Switcher
function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            changeLanguage(lang);
            
            // Update active button
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

// Theme Switcher
function setupThemeSwitcher() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add animation effect
        themeToggle.style.transform = 'scale(0.8) rotate(180deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
    });
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Change Language
function changeLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;
    
    // Set language and direction
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' || lang === 'fa' ? 'rtl' : 'ltr');
    
    // Update all translatable elements except typing text
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // Skip typing text element to avoid duplication
            if (element.classList.contains('typing-text')) {
                return;
            }
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Restart typing animation for hero name
    restartTypingAnimation();
}

// Navigation
function setupNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        }
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu after clicking a link
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            }
        });
    });
    
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.scroll-animate, .project-card, .timeline-item, .contact-item');
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Skill Bars Animation
function setupSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                
                setTimeout(() => {
                    skillBar.style.width = width + '%';
                }, 500);
                
                skillObserver.unobserve(skillBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Contact Form
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                showNotification('لطفاً تمام فیلدها را پر کنید', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('پیام شما با موفقیت ارسال شد!', 'success');
            contactForm.reset();
        });
    }
    
    // Floating labels
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea');
        const label = group.querySelector('label');
        
        if (input && label) {
            input.addEventListener('focus', () => {
                label.classList.add('focused');
            });
            
            input.addEventListener('blur', () => {
                if (!input.value) {
                    label.classList.remove('focused');
                }
            });
        }
    });
}

// Typing Animation
function setupTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const text = typingElement.textContent;
    typingElement.textContent = '';
    
    let i = 0;
    isTyping = true;
    
    function typeWriter() {
        if (i < text.length && isTyping) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            isTyping = false;
        }
    }
    
    setTimeout(typeWriter, 1000);
}

// Restart Typing Animation
function restartTypingAnimation() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement || isTyping) return;
    
    const newText = translations[currentLang]['hero.name'];
    
    // Clear current text and stop any existing animation
    typingElement.style.animation = 'none';
    typingElement.textContent = '';
    
    // Force reflow
    typingElement.offsetHeight;
    
    let i = 0;
    isTyping = true;
    
    function typeWriter() {
        if (i < newText.length && isTyping) {
            typingElement.textContent += newText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            isTyping = false;
            // Restart blinking cursor animation
            typingElement.style.animation = 'blink 1s infinite';
        }
    }
    
    setTimeout(typeWriter, 300);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '600',
        zIndex: '10000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px',
        wordWrap: 'break-word'
    });
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #00ff88, #00cc6a)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #ff6b6b, #ee5a52)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #00ffff, #8b5cf6)';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
function addScrollToTopButton() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    
    Object.assign(scrollButton.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        border: 'none',
        background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
        color: 'var(--bg-primary)',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        zIndex: '1000',
        opacity: '0',
        transform: 'scale(0)',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(0, 255, 255, 0.3)'
    });
    
    scrollButton.addEventListener('click', scrollToTop);
    document.body.appendChild(scrollButton);
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.transform = 'scale(1)';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.transform = 'scale(0)';
        }
    });
}

// Initialize scroll to top button
document.addEventListener('DOMContentLoaded', addScrollToTopButton);

// Parallax effect for floating shapes
function setupParallaxEffect() {
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.1;
            shape.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// Initialize parallax effect
document.addEventListener('DOMContentLoaded', setupParallaxEffect);

// Programming Preloader
function setupPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="preloader-logo">MH</div>
            <div class="code-animation">
                <div class="code-line"><span class="keyword">const</span> <span class="function">developer</span> = {</div>
                <div class="code-line">  name: <span class="string">"Mohammad Hassan"</span>,</div>
                <div class="code-line">  skills: [<span class="string">"React"</span>, <span class="string">"Vue"</span>, <span class="string">"Node.js"</span>],</div>
                <div class="code-line">}; <span class="comment">// Loading portfolio...</span></div>
            </div>
            <div class="loading-bar">
                <div class="loading-progress"></div>
            </div>
            <div class="loading-text">Loading...</div>
        </div>
    `;
    
    document.body.appendChild(preloader);
    
    // Hide preloader after page load
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 500);
        }, 3500); // Increased time to show the code animation
    });
}

// Initialize preloader
setupPreloader();

// Dynamic Particle System
function createDynamicParticles() {
    const particlesContainer = document.querySelector('.particles-bg');
    if (!particlesContainer) return;
    
    // Create additional particles dynamically
    for (let i = 11; i <= 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 4 + 2; // 2-6px
        const left = Math.random() * 100; // 0-100%
        const delay = Math.random() * 10; // 0-10s
        const duration = Math.random() * 10 + 15; // 15-25s
        const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = left + '%';
        particle.style.background = color;
        particle.style.animationDelay = delay + 's';
        particle.style.animationDuration = duration + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Mouse interaction with particles
function setupParticleInteraction() {
    const particles = document.querySelectorAll('.particle');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
            );
            
            if (distance < 100) {
                const force = (100 - distance) / 100;
                const angle = Math.atan2(particleY - mouseY, particleX - mouseX);
                const moveX = Math.cos(angle) * force * 20;
                const moveY = Math.sin(angle) * force * 20;
                
                particle.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + force})`;
                particle.style.opacity = 0.8 + force * 0.2;
            } else {
                particle.style.transform = 'translate(0, 0) scale(1)';
                particle.style.opacity = 0.6;
            }
        });
    });
}

// Handle profile image error
function handleProfileImageError() {
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('error', () => {
            profileImage.style.display = 'none';
            const avatarText = document.querySelector('.avatar-text');
            if (avatarText) {
                avatarText.style.opacity = '1';
                avatarText.style.zIndex = '2';
            }
        });
    }
}

// Initialize dynamic effects
document.addEventListener('DOMContentLoaded', () => {
    createDynamicParticles();
    setTimeout(setupParticleInteraction, 1000);
    handleProfileImageError();
}); 