document.addEventListener('DOMContentLoaded', function() {
    // Typing animation
    const typingTextElement = document.querySelector('.typing-text');
    if (typingTextElement) {
        const roles = ["مهندس ارشد فول‌استک", "متخصص React و Vue", "توسعه‌دهنده Node.js", "عاشق کدنویسی تمیز"];
        let roleIndex = 0;
        let charIndex = 0;
        let currentRole = '';
        let isDeleting = false;

        function type() {
            const fullRole = roles[roleIndex];
            if (isDeleting) {
                currentRole = fullRole.substring(0, currentRole.length - 1);
            } else {
                currentRole = fullRole.substring(0, currentRole.length + 1);
            }

            typingTextElement.textContent = currentRole;

            let typeSpeed = 150;
            if (isDeleting) {
                typeSpeed /= 2;
            }

            if (!isDeleting && currentRole === fullRole) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && currentRole === '') {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

    // Dynamic skills grid
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        const skills = [
            { name: 'TypeScript', icon: '🔵', color: 'blue' },
            { name: 'JavaScript', icon: '🟡', color: 'yellow' },
            { name: 'HTML5', icon: '🟠', color: 'orange' },
            { name: 'CSS3', icon: '🟣', color: 'purple' },
            { name: 'TailwindCSS', icon: '🟢', color: 'green' },
            { name: 'Git', icon: '🔴', color: 'red' },
        ];

        skills.forEach(skill => {
            const skillCard = `
                <div class="group relative p-4 bg-gradient-to-br from-${skill.color}-500/10 to-${skill.color}-600/5 rounded-2xl border border-${skill.color}-500/20 hover:border-${skill.color}-400/40 transition-all duration-300 hover:scale-105">
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 bg-${skill.color}-500/20 rounded-lg flex items-center justify-center">
                            <span class="text-${skill.color}-400 text-lg">${skill.icon}</span>
                        </div>
                        <h4 class="font-semibold text-white">${skill.name}</h4>
                    </div>
                </div>
            `;
            skillsGrid.innerHTML += skillCard;
        });
    }

    // Projects Grid and Modal
    const projectsGrid = document.getElementById('projects-grid');
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');

    if (projectsGrid && modal && closeModal) {
        const projects = [
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
        ];

        projects.forEach(project => {
            const projectCard = `
                <div class="group animate-on-scroll project-card" data-title="${project.title}" data-description="${project.description}" data-image="${project.image}" data-tech="${project.tech.join(',')}" data-link="${project.link}">
                    <div class="relative h-full bg-gradient-to-br from-dark-card/80 to-gray-900/80 rounded-3xl border border-cyber-${project.color}/20 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-cyber-${project.color}/40 hover:shadow-2xl hover:shadow-cyber-${project.color}/20">
                        <div class="relative h-48 bg-gradient-to-br from-${project.color}-500/20 to-purple-600/20 overflow-hidden">
                            <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity">
                            <div class="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent"></div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-white mb-3 font-vazir group-hover:text-cyber-${project.color} transition-colors">${project.title}</h3>
                            <p class="text-gray-400 mb-4 leading-relaxed">${project.description.substring(0, 70)}...</p>
                            <div class="flex flex-wrap gap-2 mb-6">
                                ${project.tech.map(t => `<span class="px-3 py-1 bg-${project.color}-500/20 text-${project.color}-400 border border-${project.color}-500/30 rounded-full text-xs font-medium">${t}</span>`).join('')}
                            </div>
                            <button class="w-full px-4 py-2 bg-gradient-to-r from-cyber-${project.color} to-cyber-purple text-white text-center rounded-lg font-medium transition-all duration-300 hover:scale-105">مشاهده جزئیات</button>
                        </div>
                    </div>
                </div>
            `;
            projectsGrid.innerHTML += projectCard;
        });

        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                document.getElementById('modal-title').textContent = card.dataset.title;
                document.getElementById('modal-description').textContent = card.dataset.description;
                document.getElementById('modal-image').src = card.dataset.image;
                document.getElementById('modal-link').href = card.dataset.link;

                const techStack = document.getElementById('modal-tech-stack');
                techStack.innerHTML = '';
                card.dataset.tech.split(',').forEach(t => {
                    techStack.innerHTML += `<span class="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">${t}</span>`;
                });

                modal.classList.remove('hidden');
                setTimeout(() => modalContent.classList.remove('scale-95'), 10);
            });
        });

        closeModal.addEventListener('click', () => {
            modalContent.classList.add('scale-95');
            setTimeout(() => modal.classList.add('hidden'), 300);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal.click();
            }
        });
    }

    // Contact Form Validation
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('لطفاً تمام فیلدها را پر کنید.');
                return;
            }

            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('لطفاً یک ایمیل معتبر وارد کنید.');
                return;
            }

            // On success
            alert('پیام شما با موفقیت ارسال شد!');
            contactForm.reset();
        });
    }

    // Scroll Animations
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        scrollObserver.observe(element);
    });
});
