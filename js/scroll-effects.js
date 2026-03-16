/* ============================================
   SCROLL EFFECTS & ANIMATIONS
   Effets de défilement et animations au scroll
   ============================================ */

class ScrollEffects {
    constructor() {
        this.scrollProgress = 0;
        this.elementsInView = new Set();
        this.init();
    }

    /**
     * Initialise les effets de scroll
     */
    init() {
        // Créer la barre de progression de scroll
        this.createScrollProgressBar();
        
        // Ajouter les écouteurs
        window.addEventListener('scroll', () => this.onScroll());
        window.addEventListener('load', () => this.revealElementsOnLoad());
        
        // Observer pour les éléments en vue
        this.setupIntersectionObserver();
        
        // Parallaxe sur le header
        this.setupParallaxEffect();
        
        console.log('✨ Scroll Effects initialized!');
    }

    /**
     * Crée la barre de progression de scroll
     */
    createScrollProgressBar() {
        const bar = document.createElement('div');
        bar.id = 'scroll-progress-bar';
        bar.className = 'scroll-progress-bar';
        document.body.insertBefore(bar, document.body.firstChild);
    }

    /**
     * Gère le scroll de la page
     */
    onScroll() {
        // Calculer la progression du scroll
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        this.scrollProgress = (window.scrollY / scrollHeight) * 100;
        
        // Mettre à jour la barre de progression
        const progressBar = document.getElementById('scroll-progress-bar');
        if (progressBar) {
            progressBar.style.width = this.scrollProgress + '%';
        }

        // Appliquer l'effet parallaxe
        this.applyParallax();
        
        // Révéler les éléments lors du scroll
        this.revealElementsOnScroll();
    }

    /**
     * Configuration de l'Intersection Observer pour révéler les éléments
     */
    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.revealElement(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        // Observer tous les éléments avec class scroll-reveal
        document.querySelectorAll('.scroll-reveal').forEach(el => {
            observer.observe(el);
        });
    }

    /**
     * Révèle un élément avec animation
     */
    revealElement(element) {
        if (this.elementsInView.has(element)) return;
        
        this.elementsInView.add(element);
        
        // Animation de révélation
        gsap.from(element, {
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: 'power2.out'
        });

        // Ajouter la classe visible
        element.classList.add('scroll-revealed');
    }

    /**
     * Révèle les éléments au chargement
     */
    revealElementsOnLoad() {
        // Stagger animation for header elements
        const headerElements = document.querySelectorAll('.header .neon-text, .header .subtitle-text, .header .tagline');
        
        gsap.from(headerElements, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out'
        });

        // Stagger animation for control panels
        const panels = document.querySelectorAll('.control-panel, .center-display');
        
        gsap.from(panels, {
            opacity: 0,
            scale: 0.95,
            duration: 0.6,
            stagger: 0.15,
            ease: 'back.out',
            delay: 0.3
        });
    }

    /**
     * Révèle les éléments lors du scroll
     */
    revealElementsOnScroll() {
        const elements = document.querySelectorAll('.fade-in-on-scroll');
        
        elements.forEach(element => {
            if (this.isElementInViewport(element)) {
                if (!element.classList.contains('animated')) {
                    gsap.to(element, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: 'power2.out'
                    });
                    element.classList.add('animated');
                }
            }
        });
    }

    /**
     * Vérifie si un élément est visible dans le viewport
     */
    isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight &&
            rect.bottom >= 0
        );
    }

    /**
     * Configuration du parallaxe sur le background
     */
    setupParallaxEffect() {
        const backgroundGrid = document.querySelector('.background-grid');
        const header = document.querySelector('.header');
        
        if (backgroundGrid && header) {
            // Le background bouge moins vite que le scroll (parallaxe)
            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                backgroundGrid.style.transform = `translateY(${scrollY * 0.5}px)`;
            });
        }
    }

    /**
     * Applique l'effet parallaxe
     */
    applyParallax() {
        const elements = document.querySelectorAll('[data-parallax]');
        
        elements.forEach(element => {
            const speed = element.getAttribute('data-parallax') || 0.5;
            const offset = window.scrollY * speed;
            element.style.transform = `translateY(${offset}px)`;
        });
    }

    /**
     * Ajoute un effet de glow au scroll
     */
    addScrollGlowEffect() {
        const emotionBtns = document.querySelectorAll('.emotion-btn');
        
        emotionBtns.forEach(btn => {
            window.addEventListener('scroll', () => {
                if (this.isElementInViewport(btn)) {
                    btn.classList.add('in-view');
                } else {
                    btn.classList.remove('in-view');
                }
            });
        });
    }

    /**
     * Ajoute des effets de scroll sticky
     */
    addStickyEffects() {
        const header = document.querySelector('.header');
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            
            if (scrollTop > 100) {
                header.style.opacity = '0.9';
                header.style.scale = '0.98';
            } else {
                header.style.opacity = '1';
                header.style.scale = '1';
            }
            
            lastScrollTop = scrollTop;
        });
    }
}

// Initialiser au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    new ScrollEffects();
});