/* ============================================
   MAIN APPLICATION CONTROLLER
   Orchestration avec GSAP & Interactions
   ============================================ */

class BirthdayWishApp {
    constructor() {
        // Instance du générateur de souhaits
        this.wishGenerator = new WishesGenerator();
        
        // État de l'application
        this.state = {
            selectedEmotion: null,
            currentWish: null,
            history: [],
            maxHistoryItems: 10
        };

        // Éléments du DOM
        this.elements = {};
        
        // Variables pour l'animation
        this.isGenerating = false;
        this.animationTimeline = null;
    }

    /**
     * Initialise l'application
     */
    init() {
        this.cacheElements();
        this.setupEventListeners();
        this.setupMobileMenu();
        this.loadHistoryFromStorage();
        this.setupInitialAnimations();
        
        console.log('🚀 Birthday Wish Generator initialized!');
    }

    /**
     * Cache les références aux éléments du DOM
     */
    cacheElements() {
        this.elements = {
            // Boutons d'émotion
            emotionBtns: document.querySelectorAll('.emotion-btn'),
            
            // Paramètres
            nameInput: document.getElementById('name-input'),
            ageInput: document.getElementById('age-input'),
            themeSelect: document.getElementById('theme-select'),
            
            // Affichage
            wishOutput: document.getElementById('wishOutput'),
            activeEmotion: document.getElementById('activeEmotion'),
            energyFill: document.getElementById('energyFill'),
            
            // Boutons d'action
            generateBtn: document.getElementById('generateBtn'),
            arPortalBtn: document.getElementById('arPortalBtn'),
            copyBtn: document.getElementById('copyBtn'),
            whatsappBtn: document.getElementById('whatsappBtn'),
            clearHistoryBtn: document.getElementById('clearHistoryBtn'),
            
            // Historique
            historyList: document.getElementById('historyList'),
            
            // Toast
            toast: document.getElementById('toast'),
            
            // Modal AR
            arModal: document.getElementById('arModal'),
            
            // Menu Mobile
            hamburger: document.getElementById('hamb'),
            mobileMenu: document.getElementById('mobileMenu'),
            nameInputMobile: document.getElementById('name-input-mobile'),
            ageInputMobile: document.getElementById('age-input-mobile'),
            themeSelectMobile: document.getElementById('theme-select-mobile'),
            wishOutputMobile: document.getElementById('wishOutputMobile'),
            generateBtnMobile: document.getElementById('generateBtn-mobile'),
            copyBtnMobile: document.getElementById('copyBtn-mobile'),
            whatsappBtnMobile: document.getElementById('whatsappBtn-mobile'),
            clearHistoryBtnMobile: document.getElementById('clearHistoryBtn-mobile'),
            historyListMobile: document.getElementById('historyList-mobile')
        };

        // Valider les éléments critiques
        const criticalElements = ['emotionBtns', 'wishOutput', 'generateBtn'];
        for (let elem of criticalElements) {
            if (!this.elements[elem]) {
                console.warn(`Critical element not found: ${elem}`);
            }
        }
    }

    /**
     * Configure les event listeners
     */
    setupEventListeners() {
        // Boutons d'émotion
        this.elements.emotionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.onEmotionSelect(e));
        });

        // Bouton générer
        if (this.elements.generateBtn) {
            this.elements.generateBtn.addEventListener('click', () => this.generateWish());
        }

        // Bouton AR
        if (this.elements.arPortalBtn) {
            this.elements.arPortalBtn.addEventListener('click', () => this.openARPortal());
        }

        // Bouton WhatsApp
        if (this.elements.whatsappBtn) {
            this.elements.whatsappBtn.addEventListener('click', () => this.shareOnWhatsApp());
        }

        // Bouton copier
        if (this.elements.copyBtn) {
            this.elements.copyBtn.addEventListener('click', () => this.copyWish());
        }

        // Bouton effacer historique
        if (this.elements.clearHistoryBtn) {
            this.elements.clearHistoryBtn.addEventListener('click', () => this.clearHistory());
        }

        // Entrée clavier pour générer (Enter)
        if (this.elements.nameInput) {
            this.elements.nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && this.state.selectedEmotion) {
                    this.generateWish();
                }
            });
        }

        // Modification des paramètres
        if (this.elements.nameInput) {
            this.elements.nameInput.addEventListener('input', () => this.updateEnergyBar());
        }
        if (this.elements.ageInput) {
            this.elements.ageInput.addEventListener('input', () => this.updateEnergyBar());
        }

        // Cliquer sur la zone du souhait pour régénérer
        if (this.elements.wishOutput) {
            this.elements.wishOutput.addEventListener('click', () => {
                if (this.state.currentWish) {
                    this.generateWish();
                }
            });
        }
    }

    /**
     * Configure le menu mobile (hamburger)
     */
    setupMobileMenu() {
        if (!this.elements.hamburger || !this.elements.mobileMenu) return;

        // Hamburger button click - toggle menu
        this.elements.hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMenu();
        });

        // Close menu when clicking on the menu backdrop
        this.elements.mobileMenu.addEventListener('click', (e) => {
            if (e.target === this.elements.mobileMenu) {
                this.closeMenu();
            }
        });

        // Close menu when emotion is selected
        this.elements.emotionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Delay slightly to allow the main handler to execute first
                setTimeout(() => this.closeMenu(), 100);
            });
        });

        // Close button in menu header
        const closeBtn = this.elements.mobileMenu.querySelector('.menu-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeMenu());
        }

        // Close menu when clicking outside it (on main content)
        document.addEventListener('click', (e) => {
            if (!this.elements.mobileMenu.contains(e.target) && 
                !this.elements.hamburger.contains(e.target) &&
                this.elements.mobileMenu.classList.contains('active')) {
                this.closeMenu();
            }
        });
    }

    /**
     * Bascule l'état du menu mobile
     */
    toggleMenu() {
        this.elements.hamburger.classList.toggle('active');
        this.elements.mobileMenu.classList.toggle('active');
    }

    /**
     * Ferme le menu mobile
     */
    closeMenu() {
        this.elements.hamburger.classList.remove('active');
        this.elements.mobileMenu.classList.remove('active');
    }

    /**
     * Selection d'une vibration émotionnelle
     */
    onEmotionSelect(event) {
        const button = event.currentTarget;
        const emotion = button.getAttribute('data-emotion');

        // Supprimer la classe active des autres boutons
        this.elements.emotionBtns.forEach(btn => {
            btn.classList.remove('active');
        });

        // Ajouter la classe active au bouton sélectionné
        button.classList.add('active');
        this.state.selectedEmotion = emotion;

        // Mettre à jour l'affichage
        this.updateActiveEmotionDisplay(emotion);

        // Animer les particules selon l'émotion
        if (particleSystem && particleSystem.isInitialized) {
            particleSystem.setEmotionalColors(emotion);
            particleSystem.intensify();
        }

        // Animer le bouton
        this.animateEmotionButton(button);

        // Afficher la description
        this.showEmotionDescription(emotion);
    }

    /**
     * Affiche la description de l'émotion
     */
    showEmotionDescription(emotion) {
        const description = this.wishGenerator.getEmotionDescription(emotion);
        const activeElem = this.elements.activeEmotion;
        
        if (activeElem) {
            gsap.to(activeElem, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                    activeElem.textContent = description;
                    gsap.to(activeElem, {
                        opacity: 1,
                        duration: 0.3
                    });
                }
            });
        }

        this.updateEnergyBar();
    }

    /**
     * Anime le clic sur un bouton d'émotion
     */
    animateEmotionButton(button) {
        // Créer un effet de rideau
        gsap.timeline()
            .to(button, {
                scale: 1.1,
                duration: 0.2
            })
            .to(button, {
                scale: 1,
                duration: 0.15
            });

        // Effet de glow
        gsap.to(button, {
            boxShadow: '0 0 30px rgba(0, 217, 255, 0.6)',
            duration: 0.5,
            onComplete: () => {
                gsap.to(button, {
                    boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                    duration: 0.5
                });
            }
        });
    }

    /**
     * Update l'affichage de l'émotion active
     */
    updateActiveEmotionDisplay(emotion) {
        const displayMap = {
            nostalgique: '🌙 NOSTALGIQUE',
            explosive: '⚡ EXPLOSIVE',
            galactique: '🌌 GALACTIQUE',
            mystique: '✨ MYSTIQUE'
        };

        if (this.elements.activeEmotion) {
            this.elements.activeEmotion.textContent = displayMap[emotion] || emotion;
        }
    }

    /**
     * Génère un souhait
     */
    generateWish() {
        if (!this.state.selectedEmotion) {
            this.showToast('⚠️ Sélectionnez une vibration émotionnelle d\'abord');
            return;
        }

        if (this.isGenerating) return;

        this.isGenerating = true;

        // Récupérer les paramètres
        const name = this.elements.nameInput?.value || '';
        const age = this.elements.ageInput?.value || '';
        const theme = this.elements.themeSelect?.value || 'general';

        // Valider les paramètres
        const validation = this.wishGenerator.validateInput(
            this.state.selectedEmotion,
            name,
            age,
            theme
        );

        if (!validation.isValid) {
            this.showToast('❌ ' + validation.errors[0]);
            this.isGenerating = false;
            return;
        }

        // Générer le souhait
        const wish = this.wishGenerator.generateCompleteSalutation(
            this.state.selectedEmotion,
            name,
            age,
            theme
        );

        this.state.currentWish = wish;

        // Afficher avec animation
        this.displayWish(wish);

        // Ajouter à l'historique
        this.addToHistory(wish);

        // Animer les particules
        if (particleSystem && particleSystem.isInitialized) {
            particleSystem.explodeCenter();
        }

        // Créer un confetti AR
        arSimulator.createConfetti();

        // Notification
        this.showToast('✓ Souhait généré avec succès!');

        this.isGenerating = false;
    }

    /**
     * Affiche le souhait avec animation
     */
    displayWish(wish) {
        const wishOutput = this.elements.wishOutput;
        if (!wishOutput) return;

        // Animation de disparition
        gsap.to(wishOutput, {
            opacity: 0,
            y: 20,
            duration: 0.3,
            onComplete: () => {
                wishOutput.innerHTML = `<p>${this.formatWish(wish)}</p>`;
                
                // Animation d'apparition
                gsap.fromTo(wishOutput,
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.5, ease: 'back.out' }
                );

                // Animation du glow
                gsap.to('.wish-glow', {
                    opacity: 0.7,
                    duration: 0.6,
                    ease: 'power2.out'
                });
            }
        });

        // Activer les boutons
        if (this.elements.arPortalBtn) {
            this.elements.arPortalBtn.disabled = false;
        }
        if (this.elements.copyBtn) {
            this.elements.copyBtn.disabled = false;
        }
    }

    /**
     * Formate le souhait pour l'affichage
     */
    formatWish(wish) {
        return wish
            .replace(/\n\n/g, '</p><p>')
            .replace(/✨/g, '✨ ')
            .replace(/\[Thème:/g, '<br/><span style="font-size: 0.9em; color: #888;">[Thème:');
    }

    /**
     * Ouvre le portail AR
     */
    openARPortal() {
        if (!this.state.currentWish) {
            this.showToast('⚠️ Générez d\'abord un souhait');
            return;
        }

        arSimulator.open(this.state.currentWish);
        arSimulator.activateScanMode();
        
        // Créer l'hologramme après un délai
        setTimeout(() => {
            arSimulator.createWishHologram(this.state.currentWish.split('\n')[0]);
        }, 1500);

        // Stabiliser l'objet
        setTimeout(() => {
            arSimulator.stabilizeObject();
        }, 2500);

        this.showToast('🌀 Portail AR activé...');
    }

    /**
     * Copie le souhait dans le presse-papiers
     */
    copyWish() {
        if (!this.state.currentWish) {
            this.showToast('⚠️ Aucun souhait à copier');
            return;
        }

        // Copier dans le presse-papiers
        navigator.clipboard.writeText(this.state.currentWish)
            .then(() => {
                this.showToast('📋 Souhait copié!');
                
                // Animation du bouton
                gsap.to(this.elements.copyBtn, {
                    scale: 1.1,
                    duration: 0.2,
                    onComplete: () => {
                        gsap.to(this.elements.copyBtn, {
                            scale: 1,
                            duration: 0.1
                        });
                    }
                });
            })
            .catch(() => {
                this.showToast('❌ Erreur de copie');
            });
    }

    /**
     * Partage le souhait sur WhatsApp
     */
    shareOnWhatsApp() {
        if (!this.state.currentWish) {
            this.showToast('⚠️ Aucun souhait à partager');
            return;
        }

        // Récupérer le destinataire et l'émotion sélectionnée
        const recipientName = this.elements.nameInput.value || 'ami(e)';
        const emotion = this.state.selectedEmotion || 'général';
        
        // Créer le message avec emoji et formatage
        const emotionEmoji = {
            'nostalgique': '🌙',
            'explosive': '⚡',
            'galactique': '🌌',
            'mystique': '✨'
        }[emotion] || '🎂';

        const message = `${emotionEmoji} *Souhait d'Anniversaire pour ${recipientName}*\n\n${this.state.currentWish}\n\n✨ Généré avec Next-Gen Birthday Generator ✨`;
        
        // Encoder le message pour l'URL
        const encodedMessage = encodeURIComponent(message);
        
        // Créer le lien WhatsApp
        const whatsappLink = `https://api.whatsapp.com/send?text=${encodedMessage}`;
        
        // Ouvrir WhatsApp
        window.open(whatsappLink, '_blank');
        
        // Animation du bouton
        gsap.to(this.elements.whatsappBtn, {
            scale: 1.1,
            duration: 0.2,
            onComplete: () => {
                gsap.to(this.elements.whatsappBtn, {
                    scale: 1,
                    duration: 0.1
                });
            }
        });
        
        this.showToast('💬 WhatsApp en cours d\'ouverture...', 'success');
    }

    /**
     * Ajoute un souhait à l'historique
     */
    addToHistory(wish) {
        // Ajouter au début
        this.state.history.unshift({
            wish: wish.substring(0, 100) + '...',
            fullWish: wish,
            timestamp: new Date().toLocaleTimeString()
        });

        // Limiter l'historique
        if (this.state.history.length > this.state.maxHistoryItems) {
            this.state.history.pop();
        }

        // Sauvegarder
        this.saveHistoryToStorage();

        // Mettre à jour l'affichage
        this.updateHistoryDisplay();
    }

    /**
     * Met à jour l'affichage de l'historique
     */
    updateHistoryDisplay() {
        const historyList = this.elements.historyList;
        if (!historyList) return;

        if (this.state.history.length === 0) {
            historyList.innerHTML = '<p class="history-placeholder">Les souhaits générés apparaîtront ici...</p>';
            return;
        }

        historyList.innerHTML = this.state.history.map((item, index) => `
            <div class="history-item" data-index="${index}" title="${item.fullWish}">
                <span style="color: #00D9FF; font-weight: 600; font-size: 0.8rem;">${item.timestamp}</span>
                <p>${item.wish}</p>
            </div>
        `).join('');

        // Ajouter les event listeners pour l'historique
        historyList.querySelectorAll('.history-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const index = item.getAttribute('data-index');
                const wish = this.state.history[index].fullWish;
                this.state.currentWish = wish;
                this.displayWish(wish);
                this.showToast('✓ Souhait récupéré de l\'historique');
            });
        });
    }

    /**
     * Efface l'historique
     */
    clearHistory() {
        if (confirm('Êtes-vous sûr de vouloir effacer tout l\'historique?')) {
            this.state.history = [];
            this.saveHistoryToStorage();
            this.updateHistoryDisplay();
            this.showToast('🗑️ Historique effacé');
        }
    }

    /**
     * Sauvegarde l'historique dans le localStorage
     */
    saveHistoryToStorage() {
        try {
            localStorage.setItem('wishHistory', JSON.stringify(this.state.history));
        } catch (e) {
            console.warn('Erreur de sauvegarde de l\'historique:', e);
        }
    }

    /**
     * Charge l'historique depuis le localStorage
     */
    loadHistoryFromStorage() {
        try {
            const stored = localStorage.getItem('wishHistory');
            if (stored) {
                this.state.history = JSON.parse(stored);
                this.updateHistoryDisplay();
            }
        } catch (e) {
            console.warn('Erreur de chargement de l\'historique:', e);
        }
    }

    /**
     * Met à jour la barre d'énergie
     */
    updateEnergyBar() {
        const name = this.elements.nameInput?.value || '';
        const age = this.elements.ageInput?.value || '';
        let energy = 20; // Base

        // Ajouter de l'énergie selon les paramètres
        if (name && name.length > 0) energy += Math.min(name.length * 5, 40);
        if (age && !isNaN(age)) energy += Math.min(parseInt(age) / 2, 30);
        if (this.state.selectedEmotion) energy += 10;

        energy = Math.min(energy, 100);

        if (this.elements.energyFill) {
            gsap.to(this.elements.energyFill, {
                width: energy + '%',
                duration: 0.5,
                ease: 'power2.out'
            });
        }
    }

    /**
     * Affiche une notification toast
     */
    showToast(message) {
        const toast = this.elements.toast;
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add('show');

        gsap.fromTo(toast,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.3 }
        );

        setTimeout(() => {
            gsap.to(toast, {
                y: 30,
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    toast.classList.remove('show');
                }
            });
        }, 3000);
    }

    /**
     * Configure les animations initiales
     */
    setupInitialAnimations() {
        // Stagger les boutons d'émotion
        gsap.staggerFromTo(
            this.elements.emotionBtns,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5 },
            0.1
        );

        // Animer les panneaux
        gsap.fromTo(
            '.control-panel',
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.6, delay: 0.3 }
        );

        // Pulsation du bouton générer
        const generateBtn = this.elements.generateBtn;
        if (generateBtn) {
            gsap.to(generateBtn, {
                boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
                duration: 1.5,
                repeat: -1,
                yoyo: true
            });
        }

        // Animation de bienvenue
        this.showToast('👋 Bienvenue dans le Générateur de Souhaits Futuriste!');
    }
}

// Initialisation de l'application
let app = null;

document.addEventListener('DOMContentLoaded', () => {
    app = new BirthdayWishApp();
    app.init();

    // Attendre que le système de particules soit initialisé
    setTimeout(() => {
        if (particleSystem.isInitialized) {
            console.log('✓ Particle System OK');
        }
    }, 500);
});

// Nettoyer et sauvegarder en cas de déchargement
window.addEventListener('beforeunload', () => {
    if (app) {
        app.saveHistoryToStorage();
    }
});
