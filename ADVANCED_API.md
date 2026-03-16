/* ============================================
   API REFERENCE & ADVANCED USAGE
   Documentation des classes et méthodes publiques
   ============================================ */

/**
 * ============================================
 * 1. WishesGenerator API
 * ============================================
 */

/**
 * Classe principale pour générer des souhaits
 * @class WishesGenerator
 * 
 * @example
 * const generator = new WishesGenerator();
 * const wish = generator.generateWish('explosive', 'Jean', 30, 'professional');
 */

// Signature: generateWish(emotion, name, age, theme)
/**
 * Génère un souhait personnalisé
 * 
 * @param {string} emotionalVibration - L'une de: 'nostalgique', 'explosive', 'galactique', 'mystique'
 * @param {string} [name] - Nom du destinataire (optionnel)
 * @param {number} [age] - Âge du destinataire (optionnel)
 * @param {string} [theme] - Thème du souhait (optionnel)
 * @returns {string} Le souhait généré
 * 
 * @example
 * const wish = wishGenerator.generateWish(
 *     'explosive', 
 *     'Marie', 
 *     25, 
 *     'professional'
 * );
 * console.log(wish);
 * // Output: "Marie, ⚡ Avec vitalité et passion, que cet anniversaire..."
 */

// Signature: generateCompleteSalutation(emotion, name, age, theme, includeFortuneFunc)
/**
 * Génère un souhait complet avec fortune/oracle
 * 
 * @param {string} emotionalVibration
 * @param {string} [name]
 * @param {string} [age]
 * @param {string} [theme]
 * @param {Function} [includeFortuneFunc] - Callback personnalisé
 * @returns {string} Souhait complet avec fortune
 * 
 * @example
 * const complete = wishGenerator.generateCompleteSalutation(
 *     'mystique',
 *     'Alex',
 *     28,
 *     'romantic'
 * );
 * // Retourne: Souhait + Ligne vierge + Fortune Oracle + Thème
 */

// Signature: generateFortune(emotion)
/**
 * Génère une phrase "Oracle" mystique
 * 
 * @param {string} emotionalVibration
 * @returns {string} Fortune mystique
 * 
 * @example
 * const fortune = wishGenerator.generateFortune('galactique');
 * // Output: "✨ Oracle: ton année sera marquée par voyage infini ✨"
 */

// Signature: validateInput(emotion, name, age, theme)
/**
 * Valide tous les paramètres d'entrée
 * 
 * @param {string} emotionalVibration
 * @param {string} name
 * @param {string|number} age
 * @param {string} theme
 * @returns {Object} { isValid: boolean, errors: string[] }
 * 
 * @example
 * const validation = wishGenerator.validateInput('invalid', 'John', 'abc', 'bad');
 * if (!validation.isValid) {
 *     validation.errors.forEach(err => console.error(err));
 * }
 */

// Signature: getEmotionDescription(emotion)
/**
 * Obtient la description textuelle d'une émotion
 * 
 * @param {string} emotionalVibration
 * @returns {string} Description
 * 
 * @example
 * const desc = wishGenerator.getEmotionDescription('nostalgique');
 * // Output: "Sentimental, Rétro, Plein de Tendresse"
 */

// Signature: getAllEmotions()
/**
 * Retourne le liste de toutes les émotions disponibles
 * 
 * @returns {Array<string>} ['nostalgique', 'explosive', 'galactique', 'mystique']
 */

/**
 * ============================================
 * 2. ParticleSystem API
 * ============================================
 */

/**
 * Classe de gestion du système de particules Three.js
 * @class ParticleSystem
 * 
 * @example
 * const particleSystem = new ParticleSystem();
 * particleSystem.init();  // À appeler au démarrage
 */

// Signature: init()
/**
 * Initialise Three.js, la caméra, le renderer et crée les particules
 * À appeler une seule fois lors du chargement du DOM
 * 
 * @example
 * document.addEventListener('DOMContentLoaded', () => {
 *     particleSystem.init();
 * });
 */

// Signature: setEmotionalColors(emotion)
/**
 * Change la couleur des particules selon une emotion
 * 
 * @param {string} emotionalVibration - 'nostalgique' | 'explosive' | 'galactique' | 'mystique'
 * 
 * @example
 * particleSystem.setEmotionalColors('explosive');
 * // Les particules passent au rose/orange
 */

// Signature: intensify()
/**
 * Intensifie l'attraction des particules vers le curseur de manière temporaire
 * Crée un effet dramatique de 1 seconde
 * 
 * @example
 * particleSystem.intensify();  // Effet immédiat
 */

// Signature: explodeCenter()
/**
 * Explose les particules depuis le centre dans toutes les directions
 * 
 * @example
 * particleSystem.explodeCenter();  // Particules se dispersent
 * setTimeout(() => particleSystem.intensify(), 1000);  // Puis se réassemblent
 */

// Signature: setParticleColor(colors)
/**
 * Change les couleurs des particules à partir d'un tableau de couleurs hex
 * 
 * @param {Array<number>} colors - Tableau de couleurs hex (ex: [0xFF0000, 0x00FF00])
 * 
 * @example
 * particleSystem.setParticleColor([0xFF006E, 0x8338EC, 0x00D9FF]);
 */

// Signature: destroy()
/**
 * Nettoie les ressources (animation frame, renderer)
 * À appeler avant de supprimer la page
 * 
 * @example
 * window.addEventListener('beforeunload', () => {
 *     particleSystem.destroy();
 * });
 */

/**
 * ============================================
 * 3. ARPortalSimulator API
 * ============================================
 */

/**
 * Classe de simulation du portail AR
 * @class ARPortalSimulator
 * 
 * @example
 * const arSimulator = new ARPortalSimulator();
 * arSimulator.init();
 */

// Signature: init()
/**
 * Initialise l'écouteur d'événements pour le modal AR
 * 
 * @example
 * document.addEventListener('DOMContentLoaded', () => {
 *     arSimulator.init();
 * });
 */

// Signature: open(wish)
/**
 * Ouvre le portail AR avec animation
 * 
 * @param {string} wish - Le souhait à afficher dans le portail
 * 
 * @example
 * const wish = "Un souhait d'anniversaire...";
 * arSimulator.open(wish);
 */

// Signature: close()
/**
 * Ferme le portail AR
 * 
 * @example
 * arSimulator.close();
 */

// Signature: createConfetti()
/**
 * Crée une explosion de confettis virtuels
 * 
 * @example
 * arSimulator.createConfetti();  // Confettis colorés tombent
 */

// Signature: createWishHologram(wish)
/**
 * Crée un hologramme animé du souhait au centre de l'écran
 * 
 * @param {string} wish - Texte du souhait
 * 
 * @example
 * arSimulator.createWishHologram("Joyeux anniversaire!");
 * // L'hologramme tourne et disparaît après 3 secondes
 */

// Signature: activateScanMode()
/**
 * Simule une animation de scan AR
 * 
 * @example
 * arSimulator.activateScanMode();
 * // Crée une ligne horizontale qui scanne l'écran
 */

// Signature: stabilizeObject()
/**
 * Simule la stabilisation d'un objet AR après détection
 * 
 * @example
 * setTimeout(() => {
 *     arSimulator.stabilizeObject();
 * }, 2000);
 */

// Signature: showARNotification(message)
/**
 * Affiche une notification de mode AR
 * 
 * @param {string} message - Message à afficher
 * 
 * @example
 * arSimulator.showARNotification("Objet scanné!");
 */

// Signature: playARSound()
/**
 * Joue un son AR (bip mélodieux)
 * Utilise Web Audio API
 * 
 * @example
 * arSimulator.playARSound();
 */

/**
 * ============================================
 * 4. BirthdayWishApp API (Contrôleur Principal)
 * ============================================
 */

/**
 * Classe principale orchestrant l'application
 * @class BirthdayWishApp
 * 
 * @global app  // Référence globale à l'instance
 */

// Signature: generateWish()
/**
 * Génère un souhait basé sur l'état de l'app
 * (émotion sélectionnée, paramètres saisis)
 * 
 * @example
 * // Après avoir sélectionné une émotion et rempli les paramètres:
 * app.generateWish();
 */

// Signature: displayWish(wish)
/**
 * Affiche un souhait avec animation
 * 
 * @param {string} wish - Le souhait à afficher
 * 
 * @example
 * app.displayWish(myWish);
 */

// Signature: copyWish()
/**
 * Copie le souhait actuel dans le presse-papiers
 * 
 * @example
 * app.copyWish();
 * // Toast: "📋 Souhait copié!"
 */

// Signature: shareOnWhatsApp()
/**
 * Partage le souhait actuel sur WhatsApp
 * Ouvre le dialogue de partage WhatsApp avec le souhait pré-formaté
 * 
 * @example
 * app.shareOnWhatsApp();
 * // Ouvre WhatsApp avec le message pre-formé incluant:
 * // - Emoji de l'emotion selectionnée
 * // - Nom du destinataire
 * // - Le souhait complet
 * // - Signature Next-Gen
 */

// Signature: openARPortal()
/**
 * Ouvre le portail AR avec le souhait actuel
 * 
 * @example
 * app.openARPortal();
 */

// Signature: addToHistory(wish)
/**
 * Ajoute un souhait à l'historique
 * 
 * @param {string} wish - Le souhait à stocker
 * 
 * @example
 * app.addToHistory("Mon souhait...");
 */

// Signature: clearHistory()
/**
 * Efface tout l'historique (avec confirmation)
 * 
 * @example
 * app.clearHistory();
 */

// Signature: showToast(message)
/**
 * Affiche une notification toast
 * 
 * @param {string} message - Message à afficher
 * @example
 * app.showToast("✓ Action réussie!");
 */

/**
 * ============================================
 * 5. ÉVÉNEMENTS PERSONNALISÉS
 * ============================================
 */

/**
 * Pour créer vos propres événements, utilisez:
 */

// Exemple 1: Émettre un événement au souhait généré
/**
 * const event = new CustomEvent('wishGenerated', {
 *     detail: { wish: myWish, emotion: myEmotion }
 * });
 * document.dispatchEvent(event);
 * 
 * // Écouter l'événement
 * document.addEventListener('wishGenerated', (e) => {
 *     console.log('Wish:', e.detail.wish);
 * });
 */

// Exemple 2: Événement sur changement d'émotion
/**
 * const emotionChangeEvent = new CustomEvent('emotionChanged', {
 *     detail: { emotion: 'explosive' }
 * });
 * document.dispatchEvent(emotionChangeEvent);
 */

/**
 * ============================================
 * 6. INTÉGRATION AVEC D'AUTRES LIBS
 * ============================================
 */

/**
 * Intégrer Axios pour sauvegarder les souhaits:
 */
/**
 * // Dans app.js:
 * async function saveWishToServer(wish) {
 *     try {
 *         const response = await axios.post('/api/wishes/save', {
 *             wish: wish,
 *             emotion: app.state.selectedEmotion,
 *             timestamp: new Date().toISOString()
 *         });
 *         app.showToast('✓ Souhait sauvegardé sur le serveur!');
 *     } catch (error) {
 *         app.showToast('❌ Erreur de sauvegarde');
 *     }
 * }
 */

/**
 * Intégrer Vue.js ou React pour la reactivité:
 */
/**
 * // Exemple Vue.js:
 * const app = new Vue({
 *     el: '#app',
 *     data() {
 *         return {
 *             selectedEmotion: null,
 *             currentWish: null,
 *             history: []
 *         }
 *     },
 *     methods: {
 *         generateWish() {
 *             const generator = new WishesGenerator();
 *             this.currentWish = generator.generateWish(this.selectedEmotion);
 *         }
 *     }
 * });
 */

/**
 * ============================================
 * 7. EXEMPLES D'UTILISATION AVANCÉE
 * ============================================
 */

/**
 * === Exemple 1: Générer un souhait automatiquement ===
 */
/**
 * function generateRandomWish() {
 *     const emotions = ['nostalgique', 'explosive', 'galactique', 'mystique'];
 *     const emotion = emotions[Math.floor(Math.random() * emotions.length)];
 *     
 *     const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana'];
 *     const name = firstNames[Math.floor(Math.random() * firstNames.length)];
 *     
 *     const age = Math.floor(Math.random() * 80) + 18;
 *     
 *     const generator = new WishesGenerator();
 *     const wish = generator.generateWish(emotion, name, age);
 *     
 *     console.log(wish);
 *     return wish;
 * }
 */

/**
 * === Exemple 2: Séquence dramatique avec animations ===
 */
/**
 * function dramaticSequence() {
 *     // 1. Intensifier les particules
 *     particleSystem.intensify();
 *     
 *     // 2. Attendre 1 seconde
 *     setTimeout(() => {
 *         // 3. Exploser les particules
 *         particleSystem.explodeCenter();
 *         
 *         // 4. Générer un souhait
 *         app.generateWish();
 *         
 *         // 5. Afficher la notification toast
 *         app.showToast('🎉 Explosion de joie!');
 *         
 *         // 6. Créer des confettis
 *         arSimulator.createConfetti();
 *     }, 1000);
 * }
 */

/**
 * === Exemple 3: Export du souhait en PDF ===
 */
/**
 * function exportWishToPDF() {
 *     const wish = app.state.currentWish;
 *     const element = document.createElement('div');
 *     element.innerHTML = `
 *         <h1>Souhait d'Anniversaire</h1>
 *         <p>${wish}</p>
 *         <p>Généré le: ${new Date().toLocaleString()}</p>
 *     `;
 *     
 *     // Nécessite html2pdf library
 *     html2pdf().set({
 *         margin: 10,
 *         filename: 'souhait.pdf',
 *         image: { type: 'jpeg', quality: 0.98 },
 *         html2canvas: { scale: 2 },
 *         jsPDF: { orientation: 'portrait', unit: 'mm', format: 'a4' }
 *     }).save();
 * }
 */

/**
 * === Exemple 4: Intégration avec partage social ===
 */
/**
 * function shareToTwitter() {
 *     const wish = app.state.currentWish.substring(0, 280);  // Limiter pour Twitter
 *     const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(wish)}`;
 *     window.open(url, '_blank');
 * }
 * 
 * function shareToFacebook() {
 *     const wish = app.state.currentWish;
 *     const url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&quote=${encodeURIComponent(wish)}`;
 *     window.open(url, '_blank');
 * }
 */

/**
 * ============================================
 * 8. DEBUGGING & INSPECTION
 * ============================================
 */

/**
 * === Inspect l'état de l'application ===
 */
/**
 * console.log('État de l\'app:', app.state);
 * console.log('Émotion sélectionnée:', app.state.selectedEmotion);
 * console.log('Historique:', app.state.history);
 */

/**
 * === Inspect les particules ===
 */
/**
 * console.log('Particules:', particleSystem.particles.length);
 * console.log('Configuration:', particleSystem.particleConfig);
 * console.log('Initialisé?', particleSystem.isInitialized);
 */

/**
 * === Test de validation ===
 */
/**
 * const generator = new WishesGenerator();
 * const validation = generator.validateInput(
 *     'explosive',
 *     'Jean-Pierre',
 *     45,
 *     'professional'
 * );
 * console.log('Validation:', validation);
 */

/**
 * ============================================
 * 9. PERFORMANCE TIPS
 * ============================================
 */

/**
 * 1. RÉDUIRE LE NOMBRE DE PARTICULES pour les anciennes machines:
 *    particleSystem.particleConfig.count = 75;
 * 
 * 2. DÉSACTIVER LES ANIMATIONS sur certains éléments:
 *    gsap.globalTimeline.pause();
 * 
 * 3. UTILISER requestIdleCallback pour les tâches non-urgentes:
 *    requestIdleCallback(() => { renderComplexUI(); });
 * 
 * 4. PROFILER avec Chrome DevTools:
 *    Ouvrez DevTools > Performance > Enregistrez > Générez souhait
 * 
 * 5. LIMITER LA FRÉQUENCE des mises à jour d'historique:
 *    Ajouter un debounce aux saves localStorage
 */

/**
 * ============================================
 * 10. BEST PRACTICES
 * ============================================
 */

/**
 * ✅ DO:
 * - Appeler generateWish() seulement quand une émotion est sélectionnée
 * - Valider les entrées avant de générer
 * - Sauvegarder l'historique régulièrement
 * - Nettoyer les observers et listeners
 * - Utiliser async/await pour les opérations serveur
 * - Commenter le code personnalisé
 * - Tester de multiples navigateurs
 * 
 * ❌ DON'T:
 * - Appeler init() plusieurs fois
 * - Stocker des données sensibles en localStorage
 * - Créer trop de particules (> 500)
 * - Ignorer les erreurs de validation
 * - Bloquer le thread principal avec du code lourd
 * - Charger des images non-optimisées
 * - Oublier de libérer les ressources
 */

console.log('📖 API Reference chargée. Consultez ce fichier pour la documentation complète.');
