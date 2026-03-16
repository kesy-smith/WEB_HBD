/* ============================================
   WISHES GENERATOR ENGINE
   Emotional Vibration System
   ============================================ */

class WishesGenerator {
    constructor() {
        this.wishes = {
            nostalgique: [
                "Au fil des années, tu as tissé des souvenirs inoubliables. En ce jour spécial, je te souhaite de continuer à créer ces moments magiques qui réchauffent l'âme.",
                "Les souvenirs sont les trésors du cœur. Que cet anniversaire soit l'occasion de célébrer tous les beaux moments partagés et d'en créer de nouveaux.",
                "Comme les étoiles veillent sur nos souvenirs, je te souhaite un anniversaire rempli de douceur et de nostalgie bienveillante.",
                "Chaque année écoulée est un chapitre d'une belle histoire. Que cet anniversaire te rappelle toute la beauté du chemin parcouru.",
                "Dans les pages de ma mémoire, tes sourires brillent comme des diamants. Joyeux anniversaire à celui/celle qui rend la vie magique.",
                "Le temps n'efface jamais les vrais moments. Que chaque instant de cet anniversaire soit gravé dans ton cœur à jamais.",
                "Tu es une mélodie que je n'oublierai jamais. Que ton anniversaire résonne de la même beauté et tendresse.",
                "Les années passent mais l'essence de qui tu es reste à jamais gravée dans nos cœurs. Joyeux anniversaire!",
                "Comme la lune revient chaque nuit, tu reviens chaque année avec plus de sagesse. Je te souhaite un anniversaire aussi lumineux que toi.",
                "Les souvenirs sont des bouteilles de lumière. Que cet anniversaire en ajoute une nouvelle à ta collection de trésors."
            ],
            explosive: [
                "🚀 C'est TA journée! Que cet anniversaire soit une explosion de joie, de rire et de moments incroyables! Le monde n'est pas prêt pour toi!",
                "Énergie maximale! Que ton anniversaire soit aussi fougueux et vibrant que ton âme. Prépare-toi à une année LÉGENDAIRE!",
                "💥 BOOM! Un anniversaire qui défie les lois de la physique! Que chaque seconde soit remplie d'adrénaline et d'euphorie!",
                "Les feux d'artifice n'ont rien à t'envier! Ton anniversaire mérite d'être aussi éclatant, dynamique et ÉPOUSTOUFLANT!",
                "Secouez le monde! C'est ton jour et tu es destiné(e) à BRILLER plus que jamais! Franchis les limites, atteins les étoiles!",
                "⚡ La puissance de ta présence mérite une célébration EXPLOSIVE! Que l'univers tremble devant ta magnificence!",
                "Ton anniversaire est une tempête de bonheur! Que chaque moment soit aussi intense, passionnant et MAGNIFIQUE!",
                "Pas de limites, pas de chaînes! Célébrons la force brute de ta présence avec la passion d'une supernova!",
                "L'énergie de ton essence pourait éclairer mille soleils! Que cet anniversaire soit à la mesure de ta grandeur!",
                "🎆 Ascension totale! C'est le moment de RAYONNER plus que jamais et de montrer au monde de quoi tu es capable!"
            ],
            galactique: [
                "🌌 Depuis les confins de la galaxie, je t'envoie des souhaits traversant l'infini... Que ton anniversaire soit aussi vaste que l'univers!",
                "Tu es une étoile brillante parmi les constellations. Que cet anniversaire te propulse vers de nouvelles dimensions de bonheur!",
                "L'univers a créé quelque chose d'extraordinaire le jour où tu es né(e). Joyeux anniversaire au plus beau phénomène cosmique!",
                "Traverse les portails interdimensionnels du temps! Cet anniversaire est le début d'une nouvelle ère galactique pour toi!",
                "🛸 Mission spéciale: célébrer un être aussi cosmique que toi! Que chaque instant soit une aventure interstellaire!",
                "Au-delà de la Voie Lactée, dans les royaumes éternels, un vœu résonne: JOYEUX ANNIVERSAIRE, voyageur(euse) des étoiles!",
                "Tes rêves sont aussi grands que les trous noirs sont profonds. Que ton anniversaire t'ouvre les portes de l'infini!",
                "🌠 Pluie de météores de bonheur! Que chaque moment de ton anniversaire brille avec l'éclat d'une supernova!",
                "Tu es destiné(e) à des aventures cosmiques. Que cet anniversaire soit le début d'un voyage époustouflant à travers les univers!",
                "Les planètes s'alignent pour célébrer TOI! Joyeux anniversaire à ce miracle de l'espace-temps!"
            ],
            mystique: [
                "✨ Le voile entre mondes s'écarte pour célébrer ton existence mystérieuse. Que cet anniversaire révèle la magie qui sommille en toi!",
                "Dans les murmures des anciens grimoires, ton nom résonne comme une prophétie. Joyeux anniversaire, créature magique!",
                "🔮 Les cristaux de l'univers scintillent pour toi. Que ton anniversaire soit rempli d'énergie mystique et de révélations magiques!",
                "Tu es la fusion parfaite entre le terrestre et le divin. Que cet anniversaire t'ouvre les portes des secrets éternels!",
                "Les esprits du temps te chantent un hymne d'anniversaire. Que chaque moment soit un rituel de pure magie!",
                "🌙 Sous la lueur lunaire, ton essence brille d'une lumière surnaturelle. Joyeux anniversaire à ce être enchanté!",
                "Les énergies de l'univers convergent en toi. Que ton anniversaire libère le pouvoir magique qui sommeille en ton cœur!",
                "Entre réalité et rêve, tu dances dans les dimensions cachées. Célébrons ce mystère magnifique qu'est ton existence!",
                "✨🔮 Les tarots de la destinée prédisent: une année EXTRAORDINAIRE T'ATTEND! Joyeux anniversaire!",
                "Tu es un conte de fées vivant. Que cet anniversaire soit le chapitre où tous les enchantements se réalisent!"
            ],
            general: [
                "Joyeux anniversaire! Qu'à cette occasion spéciale, tes rêves se réalisent et que chaque jour de l'année à venir te comble de bonheur.",
                "Un jour si spécial pour une personne si extraordinaire. Je te souhaite une année remplie de moments mémorables et de réussite!",
                "Qu'est-ce qu'un anniversaire? Un moment pour célébrer la personne incroyable que tu es. Joyeux anniversaire!",
                "Avec chaque bougie, un vœu. Avec chaque moment, une raison de sourire. Joyeux anniversaire à toi!",
                "Merci d'être né(e), car tu illumines le monde de ta présence. Je t'en souhaite un joyeux anniversaire!",
                "Une nouvelle année d'aventures t'attend! Que tu sois entouré(e) de rires, de joie et de l'amour de ceux qui t'aiment.",
                "À celui/celle qui rend la vie meilleure simplement en étant soi-même, joyeux anniversaire!",
                "Santé, bonheur et prospérité! Que cet anniversaire soit le début d'une année extraordinaire!",
                "Les années sont censées nous apporter la sagesse. Peut-être que cette année, je saurais d'où viennent mes talents!",
                "En ce jour spécial, je célèbre l'ami(e), la personne, l'âme que tu es. Joyeux anniversaire!"
            ],
            professional: [
                "À une personne dont le professionnalisme et la détermination inspirent. Que cet anniversaire soit aussi remarquable que tu l'es!",
                "Que cet anniversaire soit l'occasion de célébrer tes accomplissements professionnels remarquables et tes qualités exceptionnelles!",
                "Tu es une force motrice dans ton domaine. Je te souhaite un anniversaire aussi prospère et stimulant que ton parcours.",
                "Avec ton expertise et ta vision, tu es destiné(e) à de grands succès. Joyeux anniversaire!",
                "Que cette nouvelle année apporte encore plus de projets gratifiants et d'opportunités d'excellence!",
                "Tu incarnes le professionnalisme et la passion. Que cet anniversaire te récompense pour tout ton dévouement.",
                "Vos contributions sont inestimables. Je vous souhaite un anniversaire aussi motivant que votre carrière!",
                "Que chaque jour de cette année te rapproche un peu plus de tous tes objectifs professionnels!",
                "Joyeux anniversaire à quelqu'un qui excelle dans tout ce qu'il/elle entreprend!",
                "Vous êtes un exemple de succès et de persévérance. Que cet anniversaire soit à la hauteur de votre grandeur!"
            ],
            romantic: [
                "💕 Mon cœur bat ton nom quand je pense à toi. Que cet anniversaire soit aussi magique que l'amour que tu m'apportes.",
                "Avec toi, chaque jour est un anniversaire. Aujourd'hui, je voulais simplement le crier au monde: tu es mon plus beau cadeau.",
                "Tes yeux contiennent l'univers et ton sourire contient mon monde. Joyeux anniversaire, mon amour éternel.",
                "Depuis le jour où tu es entré(e) dans ma vie, chaque moment est plus beau. Je t'en souhaite un joyeux anniversaire rempli de passion.",
                "Tu es l'amour de ma vie, l'inspiration de mon cœur, la raison de mon sourire. Joyeux anniversaire, ma moitié.",
                "Que cet anniversaire célèbre non seulement le jour où tu es né(e), mais aussi le jour où j'ai trouvé mon âme sœur.",
                "Tes bras sont mon foyer, ton cœur est mon refuge. Que cet anniversaire scelle à jamais notre amour éternel.",
                "Dans chaque vie, il y a une personne spéciale. Merci d'être celle qui rend ma vie exceptionnelle. Joyeux anniversaire!",
                "Tu es mon éternité, mon infinité, ma réalité. Joyeux anniversaire à celui/celle qui a capturé mon cœur pour toujours.",
                "Quelques secondes sans toi me semblent des années. Que cet anniversaire soit l'occasion de te dire combien tu comptes pour moi."
            ],
            humorous: [
                "🎂 Un an de plus! Heureusement, tu es like du vin: tu t'améliores avec l'âge... et tu me donnes mal à la tête!",
                "Félicitations! Tu as officiellement un an de plus pour perfectionner l'art de sembler plus jeune que tu ne l'es!",
                "Tu as maintenant atteint un âge où tes articulations font plus de bruit que ta musique! Joyeux anniversaire, vieille branche!",
                "Ne t'inquiète pas pour l'âge. Il y a beaucoup de gens plus vieux que toi!",
                "L'âge, c'est juste un nombre... un très grand nombre, dans ton cas!",
                "Bonne nouvelle: tu n'es toujours pas aussi vieux que tu le seras l'année prochaine!",
                "À quoi pense-t-on quand on souffle les bougies? 'Comment vais-je payer la facture d'électricité?'",
                "Les gâteaux d'anniversaire sont les seules choses qui deviennent plus petites au fur et à mesure que tu vieillis!",
                "Joyeux anniversaire à quelqu'un qui a atteint l'âge où il compte plus de bougies que d'amis!",
                "Tu sais que tu vieillis quand les chandelles coûtent plus cher que le gâteau!"
            ]
        };

        this.fortuneExpressions = {
            nostalgique: [
                "souvenirs dorés",
                "moments immémoriaux",
                "échos du cœur",
                "empreintes éternelles",
                "lumière rétrospective"
            ],
            explosive: [
                "énergie décuplée",
                "puissance cosmique",
                "force irrépressible",
                "vitalité absolue",
                "intensité maximale"
            ],
            galactique: [
                "destinée stellaire",
                "voyage infini",
                "univers personnel",
                "portails spatiaux",
                "synchronisation cosmique"
            ],
            mystique: [
                "pouvoirs cachés",
                "révélations magiques",
                "enchantements éternels",
                "énergies ancestrales",
                "sagesse occulte"
            ]
        };
    }

    /**
     * Génère un souhait basé sur l'émotion sélectionnée
     */
    generateWish(emotionalVibration, name = "", age = "", theme = "general") {
        // Sélectionner le type de souhait approprié
        let categoryWishes = this.wishes[emotionalVibration];
        
        // Si la vibration émotionnelle n'existe pas, utiliser general
        if (!categoryWishes) {
            categoryWishes = this.wishes.general;
        }

        // Sélectionner un souhait aléatoire
        const randomWish = categoryWishes[Math.floor(Math.random() * categoryWishes.length)];

        // Personnaliser avec le nom si fourni
        let personalizedWish = randomWish;
        if (name && name.trim()) {
            // Remplacer les génériques par le nom
            personalizedWish = personalizedWish.replace(
                /celui\/celle qui|quelqu'un|tu|toi|à cet(te)?|le\s+\w+/gi,
                (match) => {
                    // Ajouter le nom de manière naturelle au début ou intégrer dans la phrase
                    return personalizedWish.includes(name) ? match : match;
                }
            );
            personalizedWish = `${name}, ${personalizedWish.charAt(0).toLowerCase() + personalizedWish.slice(1)}`;
        }

        // Ajouter une touche d'âge si fourni
        if (age && !isNaN(age) && age > 0) {
            const agePhrase = this._generateAgePhrase(age, emotionalVibration);
            personalizedWish += ` ${agePhrase}`;
        }

        return personalizedWish;
    }

    /**
     * Générer une phrase basée sur l'âge
     */
    _generateAgePhrase(age, emotion) {
        const ageNumber = parseInt(age);
        
        const agePhrases = {
            nostalgique: [
                `À ${ageNumber} ans, tu as vécu des histoires que les contes de fées envieraient.`,
                `Que ces ${ageNumber} ans de vie soient les fondations d'une éternité heureuse.`,
                `${ageNumber} ans c'est ${ageNumber} ans de souvenirs gravés à jamais.`
            ],
            explosive: [
                `À ${ageNumber} ans, tu brûles d'énergie et d'ambition! C'est magnifique!`,
                `${ageNumber} années d'explosions de joie! Que ça continue!`,
                `À ${ageNumber} ans, tue es une force de la nature incontestable!`
            ],
            galactique: [
                `${ageNumber} ans et tu brilles comme une supernova dans l'univers!`,
                `Tes ${ageNumber} ans ont été une odyssée cosmique extraordinaire!`,
                `À ${ageNumber} ans, tu orbites vers des destins galactiques!`
            ],
            mystique: [
                `${ageNumber} ans de transformation mystique et d'évolution spirituelle.`,
                `À ${ageNumber} ans, les voiles de l'illusion se lèvent enfin.`,
                `Tes ${ageNumber} printemps t'ont enseigné la sagesse ancestrale.`
            ],
            general: [
                `À ${ageNumber} ans, tu es au summum de ton existence!`,
                `${ageNumber} ans c'est un précieux bilan de vie bien remplie.`,
                `Que ces ${ageNumber} ans ouvrent les portes du bonheur infini!`
            ]
        };

        const phrases = agePhrases[emotion] || agePhrases.general;
        return phrases[Math.floor(Math.random() * phrases.length)];
    }

    /**
     * Génère une phrase "fortune" mystique supplémentaire
     */
    generateFortune(emotion) {
        const fortunes = this.fortuneExpressions[emotion] || this.fortuneExpressions.general;
        const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        
        return `✨ Oracle: ton année sera marquée par ${fortune} ✨`;
    }

    /**
     * Obtient la description complète d'une vibration émotionnelle
     */
    getEmotionDescription(emotion) {
        const descriptions = {
            nostalgique: "Sentimental, Rétro, Plein de Tendresse",
            explosive: "Énergique, Passionné, Débordant d'Enthousiasme",
            galactique: "Expansif, Cosmique, Riche d'Aventure",
            mystique: "Magique, Ésotérique, Mystérieux"
        };

        return descriptions[emotion] || "Général";
    }

    /**
     * Valide les paramètres d'entrée
     */
    validateInput(emotion, name, age, theme) {
        const errors = [];

        // Vérifier l'émotion
        if (!emotion || !Object.keys(this.wishes).includes(emotion)) {
            errors.push("Vibration émotionnelle invalide");
        }

        // Vérifier le nom (optionnel)
        if (name && name.length > 100) {
            errors.push("Le nom est trop long (max 100 caractères)");
        }

        // Vérifier l'âge (optionnel)
        if (age && (isNaN(age) || age < 1 || age > 150)) {
            errors.push("L'âge doit être entre 1 et 150");
        }

        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }

    /**
     * Génère un souhait complet avec extras
     */
    generateCompleteSalutation(emotionalVibration, name = "", age = "", theme = "general", includeFortuneFunc = null) {
        const mainWish = this.generateWish(emotionalVibration, name, age, theme);
        const fortune = this.generateFortune(emotionalVibration);
        
        let complete = mainWish + "\n\n" + fortune;

        if (theme !== "general") {
            complete += `\n\n[Thème: ${theme}]`;
        }

        return complete;
    }

    // Getter pour tester la génération
    getAllEmotions() {
        return Object.keys(this.wishes).filter(k => k !== 'general' && k !== 'professional' && k !== 'romantic' && k !== 'humorous');
    }
}

// Export pour utilisation globale
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WishesGenerator;
}
