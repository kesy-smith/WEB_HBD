/* ============================================
   CONFIGURATION & CONSTANTS
   Référence pour tous les paramètres clés
   ============================================ */

// Ce fichier documentes tous les paramètres modifiables du projet

// ============================================
// 1. CONFIGURATION VISUELLE & COULEURS
// ============================================

const CONFIG = {
    // Couleurs Néon
    colors: {
        primary_neon: '#00D9FF',        // Bleu Cyan
        primary_dark_neon: '#0099CC',   // Bleu Sombre
        secondary_neon: '#FF006E',      // Rose Fuchsia
        tertiary_neon: '#8338EC',       // Violet
        dark_deep_black: '#0a0e27',     // Noir Profond
        dark_chocolate: '#2a1810',      // Chocolat Cuivré
    },

    // Dégradés
    gradients: {
        dark_gradient: 'linear-gradient(135deg, #0a0e27 0%, #1a1035 50%, #2a1810 100%)',
        glass_shadow: '0 8px 32px 0 rgba(0, 217, 255, 0.1)',
    },

    // Glassmorphism
    glass: {
        background: 'rgba(10, 14, 39, 0.7)',
        border: 'rgba(0, 217, 255, 0.3)',
        backdrop_blur: '20px',
    },

    // Espacements (rem)
    spacing: {
        xs: '0.5rem',
        sm: '1rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '3rem',
    },

    // Transitions
    transitions: {
        smooth: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        fast: 'all 0.2s ease-out',
    },
};

// ============================================
// 2. SYSTÈME DE PARTICULES (Three.js)
// ============================================

const PARTICLE_CONFIG = {
    // Nombre de particules
    count: 150,

    // Taille des particules
    sizeMin: 1,
    sizeMax: 4,

    // Vélocité
    speedMin: 0.5,
    speedMax: 2,

    // Couleurs par défaut
    colors: [
        0x00D9FF,   // Cyan
        0x0099CC,   // Bleu
        0x8338EC,   // Violet
        0xFF006E,   // Rose
        0x2a1810,   // Chocolat
    ],

    // Interaction avec le curseur
    attractionRadius: 200,           // Rayon d'attraction (pixels)
    attractionStrength: 0.08,        // Force d'attraction (0-1)

    // Couleurs par émotion
    emotionalColors: {
        nostalgique: [0x00D9FF, 0x2a1810, 0x8B6F47],
        explosive: [0xFF006E, 0xFF3366, 0xFFAA00],
        galactique: [0x8338EC, 0x00D9FF, 0xFF006E],
        mystique: [0x8338EC, 0x00D9FF, 0x00FF88],
    },
};

// ============================================
// 3. ANIMATION GSAP
// ============================================

const ANIMATION_CONFIG = {
    // Durées standard (secondes)
    durations: {
        instant: 0.1,
        fast: 0.2,
        normal: 0.4,
        slow: 0.6,
        transition: 1.0,
    },

    // Easings populaires
    easings: {
        smooth: 'power2.inOut',
        bouncy: 'back.out',
        elastic: 'elastic.out',
        linear: 'linear',
    },

    // Délais d'animation en cascade
    stagger: 0.1,

    // Effet de glow
    glow: {
        base: 'drop-shadow(0 0 10px #00D9FF)',
        intense: 'drop-shadow(0 0 20px #00D9FF) drop-shadow(0 0 30px #00D9FF)',
    },
};

// ============================================
// 4. SOUHAITS - VIBRATIONS ÉMOTIONNELLES
// ============================================

const EMOTIONS = {
    nostalgique: {
        icon: '🌙',
        label: 'Nostalgique',
        description: 'Sentimental, Rétro, Plein de Tendresse',
        color: '#00D9FF',
    },
    explosive: {
        icon: '⚡',
        label: 'Explosive',
        description: 'Énergique, Passionné, Débordant d\'Enthousiasme',
        color: '#FF006E',
    },
    galactique: {
        icon: '🌌',
        label: 'Galactique',
        description: 'Expansif, Cosmique, Riche d\'Aventure',
        color: '#8338EC',
    },
    mystique: {
        icon: '✨',
        label: 'Mystique',
        description: 'Magique, Ésotérique, Mystérieux',
        color: '#00FF88',
    },
};

// ============================================
// 5. THÈMES DE SOUHAITS
// ============================================

const THEMES = {
    general: {
        label: 'Général',
        description: 'Un souhait varié et adapté à tous',
        priority: 0,
    },
    professional: {
        label: 'Professionnel',
        description: 'Axé sur les accomplissements et la carrière',
        priority: 1,
    },
    romantic: {
        label: 'Romantique',
        description: 'Tendre et rempli d\'amour',
        priority: 2,
    },
    humorous: {
        label: 'Humoristique',
        description: 'Drôle et léger',
        priority: 3,
    },
};

// ============================================
// 6. PORTAIL AR
// ============================================

const AR_CONFIG = {
    // Animation des anneaux
    rings: {
        animation_duration_1: 4,  // Rotation (secondes)
        animation_duration_2: 3,
        animation_duration_3: 2,
    },

    // Particules de projection
    projection_particles: 20,
    projection_duration: 1.5,

    // Hologramme
    hologram: {
        animation_duration: 0.8,
        rotation_angle: 360,
    },

    // Timeout de fermeture automatique
    auto_close_delay: 5000,  // millisecondes
};

// ============================================
// 7. HISTORIQUE
// ============================================

const HISTORY_CONFIG = {
    // Nombre max d'éléments
    max_items: 10,

    // Clé localStorage
    storage_key: 'wishHistory',

    // Longueur de l'aperçu (caractères)
    preview_length: 100,
};

// ============================================
// 8. VALIDATION & LIMITES
// ============================================

const VALIDATION = {
    name: {
        min_length: 1,
        max_length: 100,
        regex: /^[a-zA-ZÀ-ÿ\s'-]+$/,  // Toutes les lettres, espaces, traits d'union
    },
    age: {
        min: 1,
        max: 150,
        type: 'number',
    },
    wish_length: {
        min: 10,
        max: 1000,
    },
};

// ============================================
// 9. NOTIFICATIONS & MESSAGES
// ============================================

const MESSAGES = {
    errors: {
        no_emotion: '⚠️ Sélectionnez une vibration émotionnelle d\'abord',
        invalid_age: '❌ L\'âge doit être entre 1 et 150',
        invalid_name: '❌ Le nom contient des caractères invalides',
        no_wish_to_copy: '⚠️ Aucun souhait à copier',
        no_wish_to_ar: '⚠️ Générez d\'abord un souhait',
    },
    success: {
        generated: '✓ Souhait généré avec succès!',
        copied: '📋 Souhait copié!',
        cleared: '🗑️ Historique effacé',
        recovered: '✓ Souhait récupéré de l\'historique',
    },
    info: {
        welcome: '👋 Bienvenue dans le Générateur de Souhaits Futuriste!',
        ar_activated: '🌀 Portail AR activé...',
        ar_scanning: '⚙️ Recherche de surfaces...',
        ar_stable: '✓ Objet stabilisé - Appuyez pour interagir',
        projecting: 'Projection AR en cours... Pointez vers un espace plat!',
    },
};

// ============================================
// 10. BREAKPOINTS RESPONSIVE
// ============================================

const BREAKPOINTS = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    large_desktop: 1400,
    ultra_wide: 2560,
};

// ============================================
// 11. Z-INDEX HIERARCHY
// ============================================

const Z_INDEX = {
    canvas_particles: 1,
    background_grid: 0,
    main_content: 2,
    header: 3,
    interface: 4,
    dropdown_menu: 500,
    modal_overlay: 1000,
    toast: 999,
    modal_content: 1001,
    ar_effects: 1002,
};

// ============================================
// 12. API ENDPOINTS (Future)
// ============================================

const API_CONFIG = {
    base_url: 'https://api.example.com',
    endpoints: {
        save_wish: '/api/wishes/save',
        get_wishes: '/api/wishes/user/:userId',
        share_wish: '/api/wishes/share',
        trending: '/api/wishes/trending',
    },
    timeout: 5000,  // 5 secondes
};

// ============================================
// 13. DEBUGGING
// ============================================

const DEBUG = {
    // Activer les logs console
    enable_logs: true,

    // Afficher les métriques de performance
    enable_metrics: true,

    // Mode verbose (plus de détails)
    verbose: false,

    // Désactiver les animations (pour tester rapidement)
    disable_animations: false,

    // Forcer un certain nombre de particules
    particle_count_override: null,  // null = utiliser la config
};

// ============================================
// HELPERS & UTILITAIRES
// ============================================

/**
 * Convertir hex color to decimal for Three.js
 */
function hexToDecimal(hex) {
    return parseInt(hex.replace('#', ''), 16);
}

/**
 * Obtenir une configuration basée sur la vibration
 */
function getEmotionConfig(emotion) {
    return EMOTIONS[emotion] || EMOTIONS.nostalgique;
}

/**
 * Obtenir une couleur de particule aléatoire pour une émotion
 */
function getRandomEmotionColor(emotion) {
    const colors = PARTICLE_CONFIG.emotionalColors[emotion];
    return colors[Math.floor(Math.random() * colors.length)];
}

/**
 * Log with timestamp (debug)
 */
function debugLog(message, data = null) {
    if (!DEBUG.enable_logs) return;
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${message}`, data || '');
}

/**
 * Valider un nom
 */
function validateName(name) {
    if (!name || name.length < VALIDATION.name.min_length) {
        return { valid: false, error: 'Le nom est trop court' };
    }
    if (name.length > VALIDATION.name.max_length) {
        return { valid: false, error: 'Le nom est trop long' };
    }
    if (!VALIDATION.name.regex.test(name)) {
        return { valid: false, error: 'Le nom contient des caractères invalides' };
    }
    return { valid: true };
}

/**
 * Valider un âge
 */
function validateAge(age) {
    const num = parseInt(age);
    if (isNaN(num) || num < VALIDATION.age.min || num > VALIDATION.age.max) {
        return { valid: false, error: `L'âge doit être entre ${VALIDATION.age.min} et ${VALIDATION.age.max}` };
    }
    return { valid: true };
}

// ============================================
// EXPORT POUR UTILISATION GLOBALE
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CONFIG,
        PARTICLE_CONFIG,
        ANIMATION_CONFIG,
        EMOTIONS,
        THEMES,
        AR_CONFIG,
        HISTORY_CONFIG,
        VALIDATION,
        MESSAGES,
        BREAKPOINTS,
        Z_INDEX,
        API_CONFIG,
        DEBUG,
        // Helpers
        hexToDecimal,
        getEmotionConfig,
        getRandomEmotionColor,
        debugLog,
        validateName,
        validateAge,
    };
}
