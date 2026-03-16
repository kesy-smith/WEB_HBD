/* ============================================
   AR PORTAL SIMULATOR
   Augmented Reality Experience Emulation
   ============================================ */

class ARPortalSimulator {
    constructor() {
        this.isActive = false;
        this.modal = null;
        this.closeBtn = null;
        this.currentWish = "";
    }

    /**
     * Initialise le simulateur AR
     */
    init() {
        this.modal = document.getElementById('arModal');
        this.closeBtn = document.getElementById('closeArModal');

        if (!this.modal || !this.closeBtn) {
            console.warn('AR Modal elements not found');
            return;
        }

        // Event listeners
        this.closeBtn.addEventListener('click', () => this.close());
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.close();
            }
        });
    }

    /**
     * Ouvre le portail AR
     */
    open(wish) {
        if (!this.modal) return;

        this.currentWish = wish;
        this.modal.classList.add('active');
        this.isActive = true;

        // Animer l'ouverture du portail
        this.animatePortalOpening();

        // Simuler une fermeture automatique après un temps
        setTimeout(() => {
            if (this.isActive) {
                this.simulateARProjection();
            }
        }, 2000);
    }

    /**
     * Ferme le portail AR
     */
    close() {
        if (!this.modal) return;

        this.modal.classList.remove('active');
        this.isActive = false;
    }

    /**
     * Anime l'ouverture du portail
     */
    animatePortalOpening() {
        const portal = document.querySelector('.ar-portal');
        const rings = document.querySelectorAll('.ring');

        if (!portal) return;

        // Animation GSAP des anneaux
        gsap.to('.ring-1', {
            rotation: 360,
            duration: 4,
            repeat: -1,
            ease: 'linear'
        });

        gsap.to('.ring-2', {
            rotation: -360,
            duration: 3,
            repeat: -1,
            ease: 'linear'
        });

        gsap.to('.ring-3', {
            rotation: 360,
            duration: 2,
            repeat: -1,
            ease: 'linear'
        });

        // Animation du centre
        gsap.to('.portal-glow', {
            scale: 1.2,
            opacity: 0.8,
            duration: 1.5,
            repeat: -1,
            yoyo: true
        });
    }

    /**
     * Simule la projection AR
     */
    simulateARProjection() {
        const portalCenter = document.querySelector('.portal-center');
        
        if (!portalCenter) return;

        // Créer des particules de projection
        this.createProjectionParticles();

        // Afficher une notification
        this.showARNotification('Projection AR en cours... Pointez vers un espace plat!');

        // Simuler l'envoi du souhait dans le portail
        gsap.to(portalCenter, {
            scale: 1.5,
            opacity: 0.5,
            duration: 1,
            ease: 'elastic.out'
        });
    }

    /**
     * Crée des particules de projection AR
     */
    createProjectionParticles() {
        const portalCenter = document.querySelector('.portal-center');
        if (!portalCenter) return;

        const particleCount = 20;
        const rect = portalCenter.getBoundingClientRect();

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.width = '3px';
            particle.style.height = '3px';
            particle.style.borderRadius = '50%';
            particle.style.background = `hsl(${Math.random() * 60 + 180}, 100%, 50%)`;
            particle.style.pointerEvents = 'none';
            particle.style.left = rect.left + rect.width / 2 + 'px';
            particle.style.top = rect.top + rect.height / 2 + 'px';
            particle.style.boxShadow = '0 0 10px currentColor';

            document.body.appendChild(particle);

            // Animer les particules
            const angle = (Math.random() * Math.PI * 2);
            const distance = Math.random() * 300 + 100;
            const randomDx = Math.cos(angle) * distance;
            const randomDy = Math.sin(angle) * distance;

            gsap.to(particle, {
                x: randomDx,
                y: randomDy,
                opacity: 0,
                duration: Math.random() * 1.5 + 1,
                ease: 'power2.out',
                onComplete: () => {
                    particle.remove();
                }
            });
        }
    }

    /**
     * Affiche une notification AR
     */
    showARNotification(message) {
        const toast = document.getElementById('toast');
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    /**
     * Crée un effet d'hologramme du souhait
     */
    createWishHologram(wish) {
        const hologramContainer = document.createElement('div');
        hologramContainer.style.position = 'fixed';
        hologramContainer.style.top = '50%';
        hologramContainer.style.left = '50%';
        hologramContainer.style.transform = 'translate(-50%, -50%)';
        hologramContainer.style.color = '#00D9FF';
        hologramContainer.style.fontSize = '1.2rem';
        hologramContainer.style.fontWeight = 'bold';
        hologramContainer.style.textAlign = 'center';
        hologramContainer.style.maxWidth = '400px';
        hologramContainer.style.zIndex = '1001';
        hologramContainer.style.pointerEvents = 'none';
        hologramContainer.style.textShadow = '0 0 20px #00D9FF';
        hologramContainer.style.fontFamily = "'Segoe UI', sans-serif";
        hologramContainer.textContent = wish;
        hologramContainer.style.opacity = '0';

        document.body.appendChild(hologramContainer);

        // Animer l'apparition et la disparition
        gsap.fromTo(hologramContainer, 
            { opacity: 0, scale: 0.5 },
            { 
                opacity: 1, 
                scale: 1,
                duration: 0.8,
                ease: 'back.out'
            }
        );

        // Animer la rotation et la disparition
        gsap.to(hologramContainer, {
            opacity: 0,
            rotationY: 360,
            duration: 2,
            delay: 2,
            ease: 'power2.in',
            onComplete: () => {
                hologramContainer.remove();
            }
        });
    }

    /**
     * Active le mode de scan AR (simule)
     */
    activateScanMode() {
        const modal = document.querySelector('.ar-modal-content');
        if (!modal) return;

        // Créer un overlay de scan
        const scanOverlay = document.createElement('div');
        scanOverlay.style.position = 'fixed';
        scanOverlay.style.top = '0';
        scanOverlay.style.left = '0';
        scanOverlay.style.width = '100%';
        scanOverlay.style.height = '100%';
        scanOverlay.style.background = 'linear-gradient(90deg, transparent 0%, rgba(0, 217, 255, 0.2) 50%, transparent 100%)';
        scanOverlay.style.zIndex = '999';
        scanOverlay.style.pointerEvents = 'none';
        scanOverlay.style.animation = 'scanMove 2s linear infinite';

        // Ajouter l'animation CSS
        if (!document.getElementById('scanAnimationStyle')) {
            const style = document.createElement('style');
            style.id = 'scanAnimationStyle';
            style.textContent = `
                @keyframes scanMove {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                @keyframes scanLines {
                    0% { opacity: 0.5; }
                    50% { opacity: 1; }
                    100% { opacity: 0.5; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(scanOverlay);

        setTimeout(() => {
            scanOverlay.remove();
        }, 3000);
    }

    /**
     * Crée un effet de stabilisation d'objet 3D
     */
    stabilizeObject() {
        const portalCenter = document.querySelector('.portal-center');
        if (!portalCenter) return;

        // Sonner une notification
        this.playARSound();

        // Animer la stabilisation
        gsap.to(portalCenter, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out'
        });

        this.showARNotification('✓ Objet stabilisé - Appuyez pour interagir');
    }

    /**
     * Joue un son AR (simulation)
     */
    playARSound() {
        // Créer un contexte audio simple
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gain = audioContext.createGain();

            oscillator.connect(gain);
            gain.connect(audioContext.destination);

            oscillator.frequency.value = 800;
            oscillator.type = 'sine';

            gain.gain.setValueAtTime(0.3, audioContext.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        } catch (e) {
            // Silencieusement échouer si l'audio n'est pas disponible
        }
    }

    /**
     * Crée une explosion de confettis virtuels
     */
    createConfetti() {
        const confettiCount = 50;
        const colors = ['#00D9FF', '#FF006E', '#8338EC', '#FFD700'];

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '8px';
            confetti.style.height = '8px';
            confetti.style.borderRadius = '50%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '0px';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1002';

            document.body.appendChild(confetti);

            const duration = Math.random() * 1.5 + 1;
            const xDrift = (Math.random() - 0.5) * 300;

            gsap.to(confetti, {
                y: window.innerHeight + 50,
                x: xDrift,
                rotation: Math.random() * 720,
                opacity: 0,
                duration: duration,
                ease: 'power2.in',
                onComplete: () => {
                    confetti.remove();
                }
            });
        }
    }
}

// Initialisation globale
const arSimulator = new ARPortalSimulator();

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    arSimulator.init();
});
