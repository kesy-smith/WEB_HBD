/* ============================================
   THREE.JS PARTICLE SYSTEM
   Interactive Cursor-Following Particles
   ============================================ */

class ParticleSystem {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.particleGroup = null;
        this.particles = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.targetMouseX = 0;
        this.targetMouseY = 0;
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;
        
        // Configuration des particules
        this.particleConfig = {
            count: 150,
            sizeMin: 1,
            sizeMax: 4,
            speedMin: 0.5,
            speedMax: 2,
            colors: [0x00D9FF, 0x0099CC, 0x8338EC, 0xFF006E, 0x2a1810],
            attractionRadius: 200,
            attractionStrength: 0.08
        };

        this.isInitialized = false;
        this.animationId = null;
    }

    /**
     * Initialise le système de particules
     */
    init() {
        if (this.isInitialized) return;

        const canvas = document.getElementById('particleCanvas');
        if (!canvas) {
            console.error('Canvas not found');
            return;
        }

        // Scène Three.js
        this.scene = new THREE.Scene();
        this.scene.background = null;

        // Caméra
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.canvasWidth / this.canvasHeight,
            0.1,
            1000
        );
        this.camera.position.z = 100;

        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(this.canvasWidth, this.canvasHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setClearColor(0x000000, 0);

        // Créer le groupe de particules
        this.particleGroup = new THREE.Group();
        this.scene.add(this.particleGroup);

        // Créer les particules
        this.createParticles();

        // Event listeners
        window.addEventListener('mousemove', (e) => this.onMouseMove(e));
        window.addEventListener('resize', (e) => this.onWindowResize(e));

        // Démarrer l'animation
        this.animate();
        this.isInitialized = true;
    }

    /**
     * Crée les particules
     */
    createParticles() {
        for (let i = 0; i < this.particleConfig.count; i++) {
            const particle = {
                mesh: null,
                velocity: new THREE.Vector3(
                    (Math.random() - 0.5) * this.particleConfig.speedMax,
                    (Math.random() - 0.5) * this.particleConfig.speedMax,
                    (Math.random() - 0.5) * this.particleConfig.speedMax
                ),
                position: new THREE.Vector3(
                    (Math.random() - 0.5) * this.canvasWidth,
                    (Math.random() - 0.5) * this.canvasHeight,
                    (Math.random() - 0.5) * 100
                ),
                baseVelocity: null,
                size: Math.random() * (this.particleConfig.sizeMax - this.particleConfig.sizeMin) + this.particleConfig.sizeMin,
                life: 1,
                maxLife: 1
            };

            // Créer la géométrie et le matériel
            const geometry = new THREE.BufferGeometry();
            const vertices = new Float32Array([0, 0, 0]);
            geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

            const pointMaterial = new THREE.PointsMaterial({
                size: particle.size,
                color: this.particleConfig.colors[Math.floor(Math.random() * this.particleConfig.colors.length)],
                sizeAttenuation: true,
                transparent: true,
                opacity: 0.8
            });

            const points = new THREE.Points(geometry, pointMaterial);
            points.position.copy(particle.position);

            particle.mesh = points;
            particle.baseVelocity = particle.velocity.clone();

            this.particleGroup.add(points);
            this.particles.push(particle);
        }
    }

    /**
     * Gère le mouvement de la souris
     */
    onMouseMove(event) {
        this.targetMouseX = (event.clientX / this.canvasWidth) * this.camera.left - this.camera.left;
        this.targetMouseY = (event.clientY / this.canvasHeight) * this.camera.top - this.camera.top;

        // Convertir les coordonnées de l'écran en coordonnées Three.js
        this.targetMouseX = (event.clientX / this.canvasWidth) * 2 - 1;
        this.targetMouseY = -(event.clientY / this.canvasHeight) * 2 + 1;

        this.mouseX += (this.targetMouseX - this.mouseX) * 0.1;
        this.mouseY += (this.targetMouseY - this.mouseY) * 0.1;
    }

    /**
     * Gère le redimensionnement de la fenêtre
     */
    onWindowResize() {
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;

        this.camera.aspect = this.canvasWidth / this.canvasHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.canvasWidth, this.canvasHeight);
    }

    /**
     * Boucle d'animation
     */
    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());

        // Mettre à jour les particules
        for (let particle of this.particles) {
            // Position actuelle du curseur en coordonnées monde
            const cursorWorldX = this.mouseX * this.canvasWidth;
            const cursorWorldY = this.mouseY * this.canvasHeight;

            // Distance jusqu'au curseur
            const dx = cursorWorldX - particle.position.x;
            const dy = cursorWorldY - particle.position.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Attraction vers le curseur
            if (distance < this.particleConfig.attractionRadius && distance > 5) {
                const angle = Math.atan2(dy, dx);
                particle.velocity.x += Math.cos(angle) * this.particleConfig.attractionStrength;
                particle.velocity.y += Math.sin(angle) * this.particleConfig.attractionStrength;
            }

            // Appliquer la friction
            particle.velocity.x *= 0.95;
            particle.velocity.y *= 0.95;
            particle.velocity.z *= 0.95;

            // Limiter la vitesse
            const speed = particle.velocity.length();
            if (speed > this.particleConfig.speedMax) {
                particle.velocity.normalize().multiplyScalar(this.particleConfig.speedMax);
            }

            // Mettre à jour la position
            particle.position.add(particle.velocity);

            // Récupération élastique (retour vers le centre)
            particle.position.x *= 0.9995;
            particle.position.y *= 0.9995;
            particle.position.z *= 0.9995;

            // Boucles à travers les bords
            const boundsX = this.canvasWidth / 2;
            const boundsY = this.canvasHeight / 2;
            const boundsZ = 100;

            if (particle.position.x > boundsX) particle.position.x = -boundsX;
            if (particle.position.x < -boundsX) particle.position.x = boundsX;
            if (particle.position.y > boundsY) particle.position.y = -boundsY;
            if (particle.position.y < -boundsY) particle.position.y = boundsY;
            if (particle.position.z > boundsZ) particle.position.z = -boundsZ;
            if (particle.position.z < -boundsZ) particle.position.z = boundsZ;

            // Mettre à jour la position du maillage
            particle.mesh.position.copy(particle.position);

            // Ajuster l'opacité en fonction de la distance au curseur
            const opacityDistance = distance / this.particleConfig.attractionRadius;
            particle.mesh.material.opacity = Math.max(0.2, 0.8 - opacityDistance * 0.5);
        }

        // Rendu
        this.renderer.render(this.scene, this.camera);
    }

    /**
     * Détruire le système
     */
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.renderer) {
            this.renderer.dispose();
            this.renderer.domElement.remove();
        }
    }

    /**
     * Modifier la couleur des particules
     */
    setParticleColor(colors) {
        for (let particle of this.particles) {
            const color = colors[Math.floor(Math.random() * colors.length)];
            particle.mesh.material.color.setHex(color);
        }
    }

    /**
     * Intensifier l'animation (pour les moments spéciaux)
     */
    intensify() {
        for (let particle of this.particles) {
            particle.velocity.multiplyScalar(1.5);
        }
        
        // Augmenter temporairement l'attraction
        const originalStrength = this.particleConfig.attractionStrength;
        this.particleConfig.attractionStrength = 0.15;
        
        setTimeout(() => {
            this.particleConfig.attractionStrength = originalStrength;
        }, 1000);
    }

    /**
     * Créer une explosion de particules au centre
     */
    explodeCenter() {
        for (let particle of this.particles) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 3 + 1;
            particle.velocity.x = Math.cos(angle) * speed;
            particle.velocity.y = Math.sin(angle) * speed;
        }
    }

    /**
     * Changer la couleur des particules selon l'émotion
     */
    setEmotionalColors(emotion) {
        const emotionColors = {
            nostalgique: [0x00D9FF, 0x2a1810, 0x8B6F47],
            explosive: [0xFF006E, 0xFF3366, 0xFFAA00],
            galactique: [0x8338EC, 0x00D9FF, 0xFF006E],
            mystique: [0x8338EC, 0x00D9FF, 0x00FF88]
        };

        const colors = emotionColors[emotion] || emotionColors.nostalgique;
        this.setParticleColor(colors);
    }
}

// Initialisation globale
const particleSystem = new ParticleSystem();

// Initialiser au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    particleSystem.init();
});

// Nettoyer à la fermeture
window.addEventListener('beforeunload', () => {
    particleSystem.destroy();
});
