/*
    MAIN.JS - Merged and Improved Version
    - Restored language and theme switching functionality.
    - Integrated new features: dynamic skills, project modal, form validation, and scroll animations.
    - Cleaned up and well-commented code.
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
            { name: 'React', icon: 'react', color: 'blue' },
            { name: 'Vue.js', icon: 'vuedotjs', color: 'green' },
            { name: 'Node.js', icon: 'nodedotjs', color: 'yellow' },
            { name: 'NestJS', icon: 'nestjs', color: 'red' },
            { name: 'Nuxt.js', icon: 'nuxtdotjs', color: 'emerald' },
            { name: 'TypeScript', icon: 'typescript', color: 'blue' },
            { name: 'Git', icon: 'git', color: 'orange' },
            { name: 'Docker', icon: 'docker', color: 'blue' },
        ],
        projects: [
            {
                title: 'پلتفرم تجارت الکترونیک',
                description: 'یک پلتفرم کامل با React و NestJS، شامل مدیریت محصولات، کاربران و سفارشات.',
                image: 'images/ecommerce.jpg',
                tech: ['React', 'NestJS', 'MongoDB'],
                link: '#',
                color: 'blue'
            },
            {
                title: 'داشبورد آنالیتیکس',
                description: 'داشبورد مدیریت با Vue 3 و Nuxt.js برای نمایش داده‌های پیچیده با نمودارهای تعاملی.',
                image: 'images/dashboard.jpg',
                tech: ['Vue.js', 'Nuxt.js', 'Chart.js'],
                link: '#',
                color: 'green'
            },
            {
                title: 'API میکروسرویس',
                description: 'معماری میکروسرویس با Node.js و Docker برای یک سیستم بزرگ و مقیاس‌پذیر.',
                image: 'images/microservice.jpg',
                tech: ['Node.js', 'Docker', 'Redis'],
                link: '#',
                color: 'pink'
            }
        ]
    },

    // --- TRANSLATIONS (can be moved to JSON files later) ---
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
        this.renderProjects();

        if (!this.config.isTouchDevice) {
            this.setupCustomCursor();
        }
    },

    cacheDOMElements() {
        this.elements = {
            html: document.documentElement,
            body: document.body,
            preloader: document.getElementById('preloader'),
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
            projectsGrid: document.getElementById('projects-grid'),
            projectModal: document.getElementById('project-modal'),
            modalContent: document.getElementById('modal-content'),
            closeModal: document.getElementById('close-modal'),
            contactForm: document.querySelector('#contact form'),
        };
    },

    // --- PRELOADER LOGIC ---
    setupPreloader() {
        const hidePreloader = () => {
            this.elements.preloader.classList.add('hidden');
            this.elements.body.classList.add('loaded');
        };
        const startPreloaderAnimation = () => {
            this.elements.preloader.classList.add('loading');
        };
        const minDisplayTime = new Promise(resolve => setTimeout(resolve, 2000));
        const pageLoaded = new Promise(resolve => {
            window.addEventListener('load', resolve);
        });
        startPreloaderAnimation();
        Promise.all([pageLoaded, minDisplayTime]).then(hidePreloader);
    },

    // --- DYNAMIC RENDERING ---
    renderSkills() {
        if (!this.elements.skillsGrid) return;
        this.elements.skillsGrid.innerHTML = this.config.skills.map(skill => `
            <div class="group relative p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700/50 hover:border-cyber-${skill.color}/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyber-${skill.color}/20">
                <div class="flex flex-col items-center gap-3">
                    <div class="w-12 h-12 bg-cyber-${skill.color}/10 rounded-lg flex items-center justify-center group-hover:bg-cyber-${skill.color}/20 transition-colors">
                        <img src="https://cdn.simpleicons.org/${skill.icon}/" alt="${skill.name}" class="w-8 h-8 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity" loading="lazy">
                    </div>
                    <span class="text-sm font-medium text-gray-300 group-hover:text-cyber-${skill.color} transition-colors">${skill.name}</span>
                </div>
            </div>
        `).join('');
    },

    renderProjects() {
        if (!this.elements.projectsGrid) return;
        this.elements.projectsGrid.innerHTML = this.config.projects.map(project => `
            <div class="group animate-on-scroll project-card" data-title="${project.title}" data-description="${project.description}" data-image="${project.image}" data-tech="${project.tech.join(',')}" data-link="${project.link}" data-color="${project.color}">
                <div class="relative h-full bg-gradient-to-br from-dark-card/80 to-gray-900/80 rounded-3xl border border-cyber-${project.color}/20 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-cyber-${project.color}/40 hover:shadow-2xl hover:shadow-cyber-${project.color}/20">
                    <div class="relative h-48 bg-gradient-to-br from-${project.color}-500/20 to-purple-600/20 overflow-hidden">
                        <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity">
                        <div class="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent"></div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-white mb-3 font-vazir group-hover:text-cyber-${project.color} transition-colors">${project.title}</h3>
                        <p class="text-gray-400 mb-4 leading-relaxed">${project.description.substring(0, 70)}...</p>
                        <div class="flex flex-wrap gap-2 mb-6">
                            ${project.tech.map(t => `<span class="px-3 py-1 bg-cyber-${project.color}/20 text-cyber-${project.color} border border-cyber-${project.color}/30 rounded-full text-xs font-medium">${t}</span>`).join('')}
                        </div>
                        <button class="w-full px-4 py-2 bg-gradient-to-r from-cyber-${project.color} to-cyber-purple text-white text-center rounded-lg font-medium transition-all duration-300 hover:scale-105">مشاهده جزئیات</button>
                    </div>
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

        this.elements.mobileMenuToggle?.addEventListener('click', () => this.toggleMobileMenu());
        this.elements.themeToggle?.addEventListener('click', () => this.toggleTheme());
        this.elements.mobileThemeToggle?.addEventListener('click', () => this.toggleTheme());
        this.elements.languageSelector?.addEventListener('change', (e) => this.changeLanguage(e.target.value));
        this.elements.mobileLangSelector?.addEventListener('change', (e) => this.changeLanguage(e.target.value));

        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                if(this.config.isMenuOpen) this.toggleMobileMenu();
            });
        });

        document.addEventListener('click', (e) => {
            if (this.config.isMenuOpen && !this.elements.mobileMenu.contains(e.target) && !this.elements.mobileMenuToggle.contains(e.target)) {
                this.toggleMobileMenu();
            }
            if (e.target.closest('.project-card')) {
                this.openProjectModal(e.target.closest('.project-card'));
            }
        });

        this.elements.closeModal?.addEventListener('click', () => this.closeProjectModal());
        this.elements.projectModal?.addEventListener('click', (e) => {
            if (e.target === this.elements.projectModal) {
                this.closeProjectModal();
            }
        });

        this.elements.contactForm?.addEventListener('submit', (e) => this.handleFormSubmit(e));
    },

    // --- CORE FEATURES ---
    handleScroll() {
        this.elements.header.classList.toggle('scrolled', this.config.lastScrollY > 50);
    },

    toggleMobileMenu() {
        this.config.isMenuOpen = !this.config.isMenuOpen;
        this.elements.mobileMenuToggle?.classList.toggle('active', this.config.isMenuOpen);
        this.elements.mobileMenu?.classList.toggle('active', this.config.isMenuOpen);
        this.elements.body.style.overflow = this.config.isMenuOpen ? 'hidden' : '';
    },

    setupTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        this.elements.html.setAttribute('data-theme', savedTheme);
        setTimeout(() => this.updateThemeToggleUI(savedTheme), 100);
    },

    toggleTheme() {
        const newTheme = this.elements.html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        this.elements.html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateThemeToggleUI(newTheme);
    },

    updateThemeToggleUI(theme) {
        const isLight = theme === 'light';
        const transformValue = isLight ? 'translateX(32px)' : 'translateX(0)';
        const bgColor = isLight ? '#fbbf24' : '#ffffff';

        document.querySelectorAll('.theme-toggle-ball, .mobile-theme-toggle-ball').forEach(ball => {
            ball.style.transform = transformValue;
            ball.style.background = bgColor;
        });
        document.querySelectorAll('.theme-icon-moon, .mobile-theme-icon-moon').forEach(el => el.classList.toggle('hidden', isLight));
        document.querySelectorAll('.theme-icon-sun, .mobile-theme-icon-sun').forEach(el => el.classList.toggle('hidden', !isLight));
    },

    setupLanguage() {
        const savedLang = localStorage.getItem('language') || 'fa';
        this.changeLanguage(savedLang);
    },

    changeLanguage(lang) {
        this.config.currentLang = lang;
        localStorage.setItem('language', lang);

        if (this.elements.languageSelector) this.elements.languageSelector.value = lang;
        if (this.elements.mobileLangSelector) this.elements.mobileLangSelector.value = lang;

        this.elements.html.setAttribute('lang', lang);
        this.elements.html.setAttribute('dir', (lang === 'fa' || lang === 'ar') ? 'rtl' : 'ltr');
        this.elements.body.style.fontFamily = `var(--font-${lang})`;

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

    openProjectModal(card) {
        document.getElementById('modal-title').textContent = card.dataset.title;
        document.getElementById('modal-description').textContent = card.dataset.description;
        document.getElementById('modal-image').src = card.dataset.image;
        document.getElementById('modal-link').href = card.dataset.link;

        const techStack = document.getElementById('modal-tech-stack');
        techStack.innerHTML = '';
        card.dataset.tech.split(',').forEach(t => {
            techStack.innerHTML += `<span class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">${t}</span>`;
        });

        this.elements.projectModal.classList.remove('hidden');
        setTimeout(() => this.elements.modalContent.classList.remove('scale-95'), 10);
    },

    closeProjectModal() {
        this.elements.modalContent.classList.add('scale-95');
        setTimeout(() => this.elements.projectModal.classList.add('hidden'), 300);
    },

    handleFormSubmit(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('لطفاً تمام فیلدها را پر کنید.');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('لطفاً یک ایمیل معتبر وارد کنید.');
            return;
        }

        alert('پیام شما با موفقیت ارسال شد!');
        this.elements.contactForm.reset();
    },

    setupCustomCursor() {
        this.elements.cursor.style.display = 'block';
        window.addEventListener('mousemove', e => {
            this.elements.cursor.style.left = e.clientX + 'px';
            this.elements.cursor.style.top = e.clientY + 'px';
        });
        document.querySelectorAll('a, button, .project-card, input, textarea, select').forEach(el => {
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