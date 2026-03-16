# 🔧 TROUBLESHOOTING GUIDE

## Guide Complet de Résolution des Problèmes

---

## 📋 Table des Matières

1. [Problèmes de Particules](#problèmes-de-particules)
2. [Problèmes d'Affichage](#problèmes-daffichage)
3. [Problèmes de Performance](#problèmes-de-performance)
4. [Problèmes d'AR](#problèmes-dar)
5. [Problèmes de localStorage](#problèmes-de-localstorage)
6. [Erreurs Common](#erreurs-communes)
7. [Diagnostic](#diagnostic)
8. [Ressources](#ressources)

---

## 🎨 Problèmes de Particules

### ❌ Les particules ne bougent pas

**Symptômes:**
- L'arrière-plan est noir uni
- Aucune animation de particules
- Pas d'interaction au curseur

**Causes Possibles:**
1. WebGL n'est pas supporté
2. Erreur de chargement Three.js
3. Canvas non initialisé

**Solutions:**

**Étape 1:** Vérifier WebGL
```javascript
// Dans la console (F12):
if (!window.WebGLRenderingContext) {
    console.log('WebGL non supporté');
} else {
    console.log('WebGL supporté');
}
```

**Étape 2:** Vérifier le chargement de Three.js
```javascript
// Dans la console:
console.log('Three.js disponible?', window.THREE !== undefined);
console.log('THREE version:', THREE.REVISION);
```

**Étape 3:** Vérifier l'initialisation du système
```javascript
// Dans la console:
console.log('Particle System initialisé?', particleSystem.isInitialized);
console.log('Particules:', particleSystem.particles.length);
```

**Étape 4:** Forcer la réinitialisation
```javascript
// Dans la console:
particleSystem.destroy();
setTimeout(() => {
    particleSystem.init();
    console.log('Particle System réinitialisé');
}, 500);
```

**Si toujours pas de solution:**
- Essayez un navigateur récent (Chrome 90+)
- Vérifiez que JavaScript n'est pas désactivé
- Videz le cache (Ctrl+Shift+Delete)
- Essayez en mode incognito

---

### ⚠️ Les particules sont saccadées/lag

**Symptômes:**
- FPS faible (< 30)
- Animation saccadée
- Utilisation CPU élevée

**Solutions:**

**Option 1:** Réduire le nombre de particules
```javascript
// Dans la console:
particleSystem.particleConfig.count = 75;  // Au lieu de 150
particleSystem.destroy();
particleSystem.init();
```

**Option 2:** Vérifier la charge système
```javascript
// Ouvrez DevTools > Performance > Enregistrez 5 secondes
// Généralement causé par:
// - Trop d'onglets ouverts
// - Antivirus en scanning
// - Extensions nuisibles
// - Mise à jour en arrière-plan
```

**Option 3:** Désactiver les animations GSAP
```javascript
// Dans app.js, commentez les animations GSAP:
// gsap.to(...) → // gsap.to(...)
```

---

### 🎨 Les couleurs des particules ne changent pas

**Symptômes:**
- Les couleurs ne correspondent pas à l'émotion
- Les particules restent toutes de la même couleur
- Les couleurs sont ternes

**Solutions:**

```javascript
// Vérifier les couleurs configurées:
console.log(particleSystem.particleConfig.emotionalColors);

// Forcer un changement de couleur:
particleSystem.setParticleColor([0xFF006E, 0x8338EC, 0x00D9FF]);

// Vérifier la couleur actuellement appliquée:
particleSystem.particles.forEach((p, i) => {
    if (i === 0) console.log('First particle color:', p.mesh.material.color);
});
```

---

## 🖼️ Problèmes d'Affichage

### ❌ L'interface est déformée/coupée

**Causes:**
- Résolution d'écran incorrecte
- Zoom du navigateur ≠ 100%
- Taille de fenêtre trop petite

**Solutions:**

```javascript
// Réinitialiser le zoom:
// Windows/Linux: Ctrl+0
// Mac: Cmd+0

// Vérifier les dimensions:
console.log('Window size:', window.innerWidth, 'x', window.innerHeight);
console.log('Viewport:', document.documentElement.clientWidth, 'x', document.documentElement.clientHeight);
```

---

### ❌ Les couleurs néon ne brillent pas

**Causes:**
- Brightness du moniteur trop bas
- Gamme de couleurs limitée
- Navigateur foncé

**Solutions:**

```css
/* Augmenter l'intensité du glow dans styles.css: */
.neon-text {
    filter: drop-shadow(0 0 20px var(--primary-neon));  /* ← Augmenter la valeur */
}
```

---

### ⚠️ La grille de fond est invisible

**Solutions:**

```javascript
// Vérifier l'opacité:
const grid = document.querySelector('.background-grid');
console.log('Grid opacity:', getComputedStyle(grid).opacity);

// Augmenter la visibilité dans styles.css:
.background-grid {
    background-image: 
        linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px),  /* ← Augmenter */
        linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px);
}
```

---

## ⚡ Problèmes de Performance

### 🐢 La page charge lentement

**Diagnostic:**

```javascript
// Mesurer le temps de chargement:
console.log('DOMContentLoaded:', performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart, 'ms');

// Voir les ressources:
performance.getEntriesByType('resource').forEach(r => {
    console.log(r.name, 'lasted', r.duration.toFixed(2), 'ms');
});
```

**Solutions:**

1. **Vérifier la connexion CDN**
   - Parfois les CDN sont lents
   - Essayez depuis un autre réseau
   - Alternativement, téléchargez les librairies localement

2. **Désactiver les animations au démarrage**
   ```javascript
   // Dans styles.css:
   @media (prefers-reduced-motion: reduce) {
       * {
           animation-duration: 0.01ms !important;
           transition-duration: 0.01ms !important;
       }
   }
   ```

3. **Minifier le CSS/JS**
   - Utilisez un bundler (Webpack, Parcel)

---

### 💾 Utilisation mémoire élevée

**Diagnostic:**

```javascript
// Afficher l'usage mémoire:
if (performance.memory) {
    console.log('Heap size:', (performance.memory.usedJSHeapSize / 1048576).toFixed(2), 'MB');
}

// Forcer le garbage collection (Chrome DevTools):
// 1. Ouvrez DevTools > Memory
// 2. Prenez un heap snapshot
// 3. Triez par retained size
```

**Solutions:**

```javascript
// Réduire les particules:
particleSystem.particleConfig.count = 50;

// Limiter l'historique:
HISTORY_CONFIG.max_items = 5;

// Nettoyer les event listeners:
document.removeEventListener('mousemove', handler);
```

---

## 🌀 Problèmes d'AR

### ❌ Le modal AR ne s'ouvre pas

**Diagnostic:**

```javascript
// Vérifier le modal:
console.log('Modal exists:', document.getElementById('arModal') !== null);
console.log('Button exists:', document.getElementById('arPortalBtn') !== null);

// Vérifier l'état:
console.log('Current wish:', app.state.currentWish);
console.log('AR initialized:', arSimulator.isActive);
```

**Solutions:**

```javascript
// Générez d'abord un souhait:
app.generateWish();

// Puis ouvrez AR:
arSimulator.open(app.state.currentWish);

// Ou forcer l'ouverture:
document.getElementById('arModal').classList.add('active');
```

---

### ⚠️ Les animations du portail ne fonctionnent pas

**Solutions:**

```javascript
// Vérifier GSAP:
console.log('GSAP available:', window.gsap !== undefined);
console.log('GSAP version:', gsap.version);

// Forcer le rerendu:
gsap.globalTimeline.resume();
gsap.killTweensOf('.ring');  // Arrêter les anciennes animations
arSimulator.animatePortalOpening();  // Redémarrer
```

---

### 🔊 Pas de son AR

**Solutions:**

```javascript
// Le son AR peut être bloqué par:
// 1. Politique d'autoplay du navigateur
// 2. Navigateur en mute
// 3. Web Audio API non supportée

// Tester Web Audio:
try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    console.log('Web Audio supported');
} catch (e) {
    console.warn('Web Audio not supported:', e);
}

// Vérifier l'autoplay:
navigator.permissions.query({name: 'speaker'}).then(result => {
    console.log('Speaker permission:', result.state);
});
```

---

## 💾 Problèmes de localStorage

### ❌ L'historique ne se sauvegarde pas

**Diagnostic:**

```javascript
// Tester localStorage:
try {
    localStorage.setItem('test', 'value');
    console.log('localStorage OK');
    localStorage.removeItem('test');
} catch (e) {
    console.warn('localStorage error:', e);
}

// Vérifier les données:
console.log('Stored history:', localStorage.getItem('wishHistory'));
```

**Solutions:**

1. **Mode Incognito:**
   - localStorage est souvent limité en mode incognito
   - Utilisez le mode normal

2. **Espace disque:**
   ```javascript
   // Vérifier l'espace:
   navigator.storage.estimate().then(estimate => {
       console.log('Usage:', estimate.usage);
       console.log('Quota:', estimate.quota);
   });
   ```

3. **Cookies/Politique de confidentialité:**
   - Acceptez les cookies si demandé
   - Vérifiez les paramètres de confidentialité

4. **Nettoyer et réinitialiser:**
   ```javascript
   // Effacer tout:
   localStorage.clear();
   
   // Recharger:
   location.reload();
   ```

---

### ⚠️ L'historique occuppe trop d'espace

**Solution:**

```javascript
// Limiter l'historique:
HISTORY_CONFIG.max_items = 5;  // Au lieu de 10

// Ou effacer manuellement:
app.clearHistory();

// Vérifier la taille:
const size = new Blob([localStorage.getItem('wishHistory')]).size;
console.log('History size:', (size / 1024).toFixed(2), 'KB');
```

---

## 🔴 Erreurs Communes

### `TypeError: particleSystem is not defined`

**Cause:** Three.js ou three-particles.js n'a pas chargé

**Solution:**
```html
<!-- Vérifiez l'ordre des scripts dans index.html: -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="js/three-particles.js"></script>  <!-- ← Doit être après Three.js -->
<script src="js/app.js"></script>
```

---

### `TypeError: app is not defined`

**Solution:**
```javascript
// Attendre le chargement:
document.addEventListener('DOMContentLoaded', () => {
    console.log('App instance:', app);
});
```

---

### `ReferenceError: gsap is not defined`

**Solution:**
```html
<!-- Vérifiez que GSAP est chargé: -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<!-- Avant app.js -->
```

---

### `Uncaught SyntaxError: Unexpected token`

**Diagnostic:**
```javascript
// Vérifier la console pour l'erreur exact
// DevTools > Console affiche la ligne exacte
```

**Solutions:**
- Vérifiez les caractères invisibles dans le code
- Validez le JavaScript sur jshint.com
- Vérifiez l'encodage UTF-8

---

## 🔍 Diagnostic Avancé

### Créer un Rapport Diagnostic Complet

```javascript
// Exécutez ceci dans la console et copiez le résultat:
function generateDiagnostic() {
    const report = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        
        // Librairies
        libraries: {
            three: window.THREE !== undefined,
            gsap: window.gsap !== undefined,
            particleSystem: window.particleSystem !== undefined,
            arSimulator: window.arSimulator !== undefined,
            app: window.app !== undefined,
        },
        
        // Système de particules
        particles: {
            initialized: particleSystem?.isInitialized,
            count: particleSystem?.particles.length,
        },
        
        // Médias et réseau
        performance: {
            dns: performance.timing.domainLookupEnd - performance.timing.domainLookupStart,
            tcp: performance.timing.connectEnd - performance.timing.connectStart,
            load: performance.timing.loadEventEnd - performance.timing.navigationStart,
        },
        
        // Stockage
        storage: {
            localStorage: {
                available: (() => {
                    try {
                        localStorage.setItem('test', 'test');
                        localStorage.removeItem('test');
                        return true;
                    } catch (e) { return false; }
                })(),
                historySize: new Blob([localStorage.getItem('wishHistory') || '']).size,
            }
        },
        
        // État app
        appState: app ? {
            selectedEmotion: app.state.selectedEmotion,
            historyCount: app.state.history.length,
        } : null,
    };
    
    return JSON.stringify(report, null, 2);
}

// Utiliser:
const diagnostic = generateDiagnostic();
console.log(diagnostic);
```

---

### Déboguer avec Browser DevTools

**Chrome/Edge DevTools:**

1. **Ouvrez DevTools** (F12)
2. **Console Tab** pour les logs
3. **Network Tab** pour voir les ressources
4. **Performance Tab** pour les FPS/timing
5. **Memory Tab** pour l'usage mémoire
6. **Application Tab** pour localStorage

**Firefox DevTools:**

1. **F12** pour DevTools
2. **Inspector**: Structure HTML
3. **Console**: Logs et erreurs
4. **Network**: Temps de chargement
5. **Storage**: localStorage

---

## 📚 Ressources

### Documentation Officielle
- [Three.js Docs](https://threejs.org/docs/)
- [GSAP Docs](https://gsap.com/docs/)
- [MDN Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Débogage
- [Chrome DevTools Documentation](https://developer.chrome.com/docs/devtools/)
- [Firefox Developer Tools](https://developer.mozilla.org/en-US/docs/Tools)
- [WebGL Support Checker](https://get.webgl.org/)

### Performances
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Chrome Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/)

---

## 📞 Obtenir de l'Aide

1. **Consultez ce guide** pour les solutions communes
2. **Ouvrez DevTools** (F12) pour les messages d'erreur
3. **Créez un Diagnostic** avec le code au-dessus
4. **Essayez un Mode Incognito** pour tester sans extensions
5. **Videz le Cache** (Ctrl+Shift+Delete)
6. **Essayez un Navigateur Différent**

---

**L'interface NEXT-GEN est robuste mais tout problème peut être résolu! 🚀**

Bon débogage! 🔧
