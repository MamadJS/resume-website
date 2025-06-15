/*
    MAIN.JS - Final Version
    - Fixed preloader logic, added loading bar
    - Added dynamic, icon-based skills section
    - Cleaned up and well-commented code
*/

const app = {
    // --- STATE & CONFIG ---
    config: {
        currentLang: 'fa',
        isMenuOpen: false,
        isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
        lastScrollY: window.scrollY,
        isScrolling: null,
        skills: [
            { name: 'React', icon: 'react' },
            { name: 'Vue.js', icon: 'vuedotjs' },
            { name: 'Node.js', icon: 'nodedotjs' },
            { name: 'NestJS', icon: 'nestjs' },
            { name: 'Nuxt.js', icon: 'nuxtdotjs' },
            { name: 'TypeScript', icon: 'typescript' },
        ]
    },

    // --- TRANSLATIONS ---
    translations: {
        fa: {'meta.title':'محمد حسن هاشمی - مهندس ارشد فول‌استک','name':'محمد حسن هاشمی','title':'مهندس ارشد فول‌استک','subtitle':'ساخت اپلیکیشن‌های وب سریع و مقیاس‌پذیر | آماده همکاری ریموت و فریلنسری','nav.logo':'MH','nav.about':'درباره من','nav.projects':'پروژه‌ها','nav.experience':'تجربه','nav.contact':'تماس','hero.greeting':'سلام، من','hero.contactBtn':'تماس با من','hero.resumeBtn':'دانلود رزومه','about.title':'درباره من','about.description':'یک مهندس فول‌استک با اشتیاق فراوان برای ساخت وب‌اپلیکیشن‌های سریع، مقیاس‌پذیر و کاربرپسند. با تخصص عمیق در اکوسیستم جاوااسکریپت، از جمله React، Vue و Node.js، همواره به دنبال ارائه کدی با کیفیت و خلق تجربیات دیجیتال بی‌نظیر برای کاربران هستم.','about.skillsTitle':'مهارت‌های کلیدی','projects.title':'پروژه‌های منتخب','projects.live':'مشاهده دمو','projects.code':'کد منبع','projects.p1.title':'پلتفرم تجارت الکترونیک','projects.p1.desc':'یک پلتفرم کامل با React و NestJS برای فروش آنلاین.','projects.p2.title':'داشبورد آنالیتیکس','projects.p2.desc':'داشبورد مدیریت و تحلیل داده با Vue 3 و Nuxt.js.','projects.p3.title':'API میکروسرویس','projects.p3.desc':'معماری میکروسرویس قدرتمند با Node.js و Docker.','experience.title':'سوابق کاری و تحصیلی','experience.e1.date':'۲۰۲۲ - تاکنون','experience.e1.title':'مهندس ارشد فول‌استک','experience.e1.company':'شرکت فناوری پیشرو','experience.e2.date':'۲۰۲۰ - ۲۰۲۲','experience.e2.title':'توسعه‌دهنده فول‌استک','experience.e2.company':'استارتاپ نوآور','experience.e3.date':'۲۰۱۶ - ۲۰۲۰','experience.e3.title':'کارشناسی مهندسی نرم‌افزار','experience.e3.company':'دانشگاه صنعتی شریف','contact.title':'در تماس باشید','contact.text':'از همکاری در پروژه‌های هیجان‌انگیز یا یک گفتگوی ساده در مورد تکنولوژی استقبال می‌کنم. از طریق فرم یا راه‌های زیر با من در ارتباط باشید.','contact.form.name':'نام','contact.form.email':'ایمیل','contact.form.message':'پیام شما','contact.form.send':'ارسال پیام','footer.copyright':'© ۲۰۲۵ محمد حسن هاشمی. طراحی و توسعه با ❤️.',},
        en: {'meta.title':'Mohammad Hassan Hashemi - Senior Full-Stack Engineer','name':'Mohammad Hassan Hashemi','title':'Senior Full-Stack Engineer','subtitle':'Building Fast & Scalable Web Apps | Remote-Friendly & Freelance Ready','nav.logo':'MH','nav.about':'About','nav.projects':'Projects','nav.experience':'Experience','nav.contact':'Contact','hero.greeting':"Hello, I'm",'hero.contactBtn':'Contact Me','hero.resumeBtn':'Download CV','about.title':'About Me','about.description':'A passionate Full-Stack Engineer with a strong focus on creating high-performance, scalable, and user-friendly web applications. With expertise in the JavaScript ecosystem, including React, Vue, and Node.js, I am dedicated to delivering quality code and exceptional user experiences.','about.skillsTitle':'Key Skills','projects.title':'Selected Projects','projects.live':'Live Demo','projects.code':'Source Code','projects.p1.title':'E-commerce Platform','projects.p1.desc':'A complete platform with React and NestJS for online sales.','projects.p2.title':'Analytics Dashboard','projects.p2.desc':'Management and data analysis dashboard with Vue 3 and Nuxt.js.','projects.p3.title':'Microservice API','projects.p3.desc':'Powerful microservice architecture with Node.js and Docker.','experience.title':'Work & Education','experience.e1.date':'2022 - Present','experience.e1.title':'Senior Full-Stack Engineer','experience.e1.company':'Leading Tech Company','experience.e2.date':'2020 - 2022','experience.e2.title':'Full-Stack Developer','experience.e2.company':'Innovative Startup','experience.e3.date':'2016 - 2020','experience.e3.title':'B.Sc. in Software Engineering','experience.e3.company':'Sharif University of Technology','contact.title':'Get In Touch','contact.text':"I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out to me using the form or other contact methods.",'contact.form.name':'Name','contact.form.email':'Email','contact.form.message':'Your Message','contact.form.send':'Send Message','footer.copyright':'© 2025 Mohammad Hassan Hashemi. Coded with ❤️.',},
        ar: {'meta.title':'محمد حسن هاشمي - مهندس برمجيات أول','name':'محمد حسن هاشمي','title':'مهندس برمجيات أول','subtitle':'بناء تطبيقات ويب سريعة وقابلة للتطوير | جاهز للعمل عن بعد والمستقل','nav.logo':'MH','nav.about':'عني','nav.projects':'المشاريع','nav.experience':'الخبرة','nav.contact':'اتصل','hero.greeting':'مرحباً، أنا','hero.contactBtn':'اتصل بي','hero.resumeBtn':'تحميل السيرة الذاتية','about.title':'نبذة عني','about.description':'مهندس برمجيات شغوف أركز بشدة على إنشاء تطبيقات ويب عالية الأداء وقابلة للتطوير وسهلة الاستخدام. بفضل خبرتي في نظام JavaScript، بما في ذلك React و Vue و Node.js، أنا ملتزم بتقديم كود عالي الجودة وتجارب مستخدم استثنائية.','about.skillsTitle':'المهارات الرئيسية','projects.title':'مشاريع مختارة','projects.live':'عرض مباشر','projects.code':'الكود المصدري','projects.p1.title':'منصة التجارة الإلكترونية','projects.p1.desc':'منصة كاملة باستخدام React و NestJS للمبيعات عبر الإنترنت.','projects.p2.title':'لوحة تحكم التحليلات','projects.p2.desc':'لوحة تحكم لإدارة وتحليل البيانات باستخدام Vue 3 و Nuxt.js.','projects.p3.title':'واجهة برمجة تطبيقات الخدمات المصغرة','projects.p3.desc':'بنية خدمات مصغرة قوية باستخدام Node.js و Docker.','experience.title':'الخبرة والتعليم','experience.e1.date':'2022 - حتى الآن','experience.e1.title':'مهندس برمجيات أول','experience.e1.company':'شركة تكنولوجيا رائدة','experience.e2.date':'2020 - 2022','experience.e2.title':'مطور برمجيات متكامل','experience.e2.company':'شركة ناشئة مبتكرة','experience.e3.date':'2016 - 2020','experience.e3.title':'بكالوريوس في هندسة البرمجيات','experience.e3.company':'جامعة شريف للتكنولوجيا','contact.title':'تواصل معي','contact.text':'أنا منفتح دائمًا لمناقشة المشاريع الجديدة أو الأفكار الإبداعية أو الفرص. لا تتردد في التواصل معي باستخدام النموذج أو طرق الاتصال الأخرى.','contact.form.name':'الاسم','contact.form.email':'البريد الإلكتروني','contact.form.message':'رسالتك','contact.form.send':'إرسال الرسالة','footer.copyright':'© 2025 محمد حسن هاشمي. تمت البرمجة بـ ❤️.',},
    },

    // --- DOM ELEMENTS ---
    elements: {},

    // --- INITIALIZATION ---
    init() {
        this.cacheDOMElements();
        this.setupPreloader();
        this.bindEvents();
        this.setupScrollAnimations();
        this.setupTheme();
        this.setupLanguage();
        this.renderSkills();

        if (!this.config.isTouchDevice) {
            this.setupCustomCursor();
        }
    },

    cacheDOMElements() {
        this.elements = {
            html: document.documentElement,
            body: document.body,
            preloader: document.getElementById('preloader'),
            preloaderText: document.getElementById('preloader-text'),
            header: document.querySelector('header'),
            mobileMenuToggle: document.getElementById('mobileMenuToggle'),
            mobileMenu: document.getElementById('mobileMenu'),
            themeToggle: document.getElementById('themeToggle'),
            mobileThemeToggle: document.getElementById('mobileThemeToggle'),
            languageSelector: document.getElementById('languageSelector'),
            mobileLangSelector: document.getElementById('mobileLangSelector'),

            cursor: document.querySelector('.cursor'),
            typingText: document.querySelector('.typing-text'),
            skillsGrid: document.querySelector('.skills-grid-v2'),
        };
    },

    // --- PRELOADER LOGIC ---
    setupPreloader() {
        // This sets up the logic that will hide the preloader
        const hidePreloader = () => {
            this.elements.preloader.classList.add('hidden');
            this.elements.body.classList.add('loaded'); // Show content
        };

        // This starts the preloader's visual animations
        const startPreloaderAnimation = () => {
            this.elements.preloader.classList.add('loading');
        };
        
        // Use a Promise to ensure minimum display time for the animation
        const minDisplayTime = new Promise(resolve => setTimeout(resolve, 2000));
        
        // Use a Promise to wait for the window to be fully loaded
        const pageLoaded = new Promise(resolve => {
            window.addEventListener('load', resolve);
        });

        startPreloaderAnimation();

        // Once the page is loaded AND the minimum time has passed, hide the preloader
        Promise.all([pageLoaded, minDisplayTime]).then(hidePreloader);
    },

    // --- DYNAMIC SKILLS SECTION ---
    renderSkills() {
        if (!this.elements.skillsGrid) return;
        
        this.elements.skillsGrid.innerHTML = this.config.skills.map(skill => `
            <div class="group relative p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyber-blue/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyber-blue/20">
                <div class="flex flex-col items-center gap-3">
                    <div class="w-12 h-12 bg-cyber-blue/10 rounded-lg flex items-center justify-center group-hover:bg-cyber-blue/20 transition-colors">
                        <img src="https://cdn.simpleicons.org/${skill.icon}/" alt="${skill.name}" class="w-8 h-8 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" loading="lazy">
                    </div>
                    <span class="text-sm font-medium text-gray-300 group-hover:text-cyber-blue transition-colors">${skill.name}</span>
                </div>
            </div>
        `).join('');
    },

    // --- EVENT BINDING ---
    bindEvents() {
        window.addEventListener('scroll', () => {
            this.config.lastScrollY = window.scrollY;
            if (!this.config.isScrolling) {
                window.requestAnimationFrame(() => {
                    this.handleScroll();
                    this.config.isScrolling = false;
                });
                this.config.isScrolling = true;
            }
        }, { passive: true });

        // Mobile menu toggle
        if (this.elements.mobileMenuToggle) {
            this.elements.mobileMenuToggle.addEventListener('click', () => this.toggleMobileMenu());
        }

        // Theme toggles
        if (this.elements.themeToggle) {
            this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        if (this.elements.mobileThemeToggle) {
            this.elements.mobileThemeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Language selectors
        if (this.elements.languageSelector) {
            this.elements.languageSelector.addEventListener('change', (e) => this.changeLanguage(e.target.value));
        }
        if (this.elements.mobileLangSelector) {
            this.elements.mobileLangSelector.addEventListener('change', (e) => this.changeLanguage(e.target.value));
        }


        
        // Close mobile menu when clicking nav links
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                if(this.config.isMenuOpen) this.toggleMobileMenu();
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (this.config.isMenuOpen && !this.elements.mobileMenu.contains(e.target) && !this.elements.mobileMenuToggle.contains(e.target)) {
                this.toggleMobileMenu();
            }
        });
    },

    // --- CORE FEATURES ---
    handleScroll() {
        const scrollY = this.config.lastScrollY;
        this.elements.header.classList.toggle('scrolled', scrollY > 50);
    },

    toggleMobileMenu() {
        this.config.isMenuOpen = !this.config.isMenuOpen;
        
        if (this.elements.mobileMenuToggle) {
            this.elements.mobileMenuToggle.classList.toggle('active', this.config.isMenuOpen);
        }
        
        if (this.elements.mobileMenu) {
            this.elements.mobileMenu.classList.toggle('active', this.config.isMenuOpen);
        }
        
        this.elements.body.style.overflow = this.config.isMenuOpen ? 'hidden' : '';
    },
    
    setupTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.elements.html.setAttribute('data-theme', savedTheme);
        
        // Initialize theme toggle UI
        setTimeout(() => {
            this.updateThemeToggleUI(savedTheme);
        }, 100);
    },
    
    toggleTheme() {
        const currentTheme = this.elements.html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        this.elements.html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update theme toggle UI
        this.updateThemeToggleUI(newTheme);
    },
    
    updateThemeToggleUI(theme) {
        const isLight = theme === 'light';
        
        // Desktop theme toggle
        const desktopBall = document.querySelector('.theme-toggle-ball');
        const desktopMoon = document.querySelector('.theme-icon-moon');
        const desktopSun = document.querySelector('.theme-icon-sun');
        
        if (desktopBall) {
            desktopBall.style.transform = isLight ? 'translateX(32px)' : 'translateX(0)';
            desktopBall.style.background = isLight ? '#fbbf24' : '#ffffff';
        }
        
        if (desktopMoon && desktopSun) {
            desktopMoon.classList.toggle('hidden', isLight);
            desktopSun.classList.toggle('hidden', !isLight);
        }
        
        // Mobile theme toggle
        const mobileBall = document.querySelector('.mobile-theme-toggle-ball');
        const mobileMoon = document.querySelector('.mobile-theme-icon-moon');
        const mobileSun = document.querySelector('.mobile-theme-icon-sun');
        
        if (mobileBall) {
            mobileBall.style.transform = isLight ? 'translateX(32px)' : 'translateX(0)';
            mobileBall.style.background = isLight ? '#fbbf24' : '#ffffff';
        }
        
        if (mobileMoon && mobileSun) {
            mobileMoon.classList.toggle('hidden', isLight);
            mobileSun.classList.toggle('hidden', !isLight);
        }
    },
    
    setupLanguage() {
        const savedLang = localStorage.getItem('language') || 'fa';
        this.changeLanguage(savedLang);
    },

    changeLanguage(lang) {
        this.config.currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Sync both language selectors
        if (this.elements.languageSelector) {
            this.elements.languageSelector.value = lang;
        }
        if (this.elements.mobileLangSelector) {
            this.elements.mobileLangSelector.value = lang;
        }
        
        const isRTL = lang === 'fa' || lang === 'ar';
        this.elements.html.setAttribute('lang', lang);
        this.elements.html.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
        
        const fontMap = { fa: 'var(--font-fa)', en: 'var(--font-en)', ar: 'var(--font-ar)' };
        this.elements.body.style.fontFamily = fontMap[lang];

        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.getAttribute('data-key');
            if (el.classList.contains('typing-text')) return;
            el.textContent = this.translations[lang]?.[key] || key;
        });
        
        this.startTypingAnimation();
    },
    
    startTypingAnimation() {
        if (!this.elements.typingText) return;
        
        const text = this.translations[this.config.currentLang]['title'];
        let i = 0;
        this.elements.typingText.innerHTML = '';
        
        if (this.typingInterval) clearInterval(this.typingInterval);
        
        this.typingInterval = setInterval(() => {
            if (i < text.length) {
                this.elements.typingText.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(this.typingInterval);
            }
        }, 100);
    },
    
    setupCustomCursor() {
        this.elements.cursor.style.display = 'block';
        window.addEventListener('mousemove', e => {
            this.elements.cursor.style.left = e.clientX + 'px';
            this.elements.cursor.style.top = e.clientY + 'px';
        });

        document.querySelectorAll('a, button, .skill-card, input, textarea, select').forEach(el => {
            el.addEventListener('mouseenter', () => this.elements.cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => this.elements.cursor.classList.remove('hovered'));
        });
    },

    setupScrollAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    }
};

// --- Run Application ---
document.addEventListener('DOMContentLoaded', () => app.init());