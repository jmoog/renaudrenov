// ─────────────────────────────────────────────────────────────────────────
// Cocon nettoyage — les 14 satellites /nettoyage-toiture-{ville}/ du pilier
// /nettoyage-toiture-28/. Générés par src/pages/nettoyage-toiture-[slug].astro.
//
// Cadrage (13/08/2026, modèle Richard Toitures adapté 28) :
// - Satellites 800-1000 mots, moins profonds que le pilier : pas de tarifs
//   détaillés, pas de FAQ. Les thèmes des 3 sections TOURNENT d'une ville à
//   l'autre (pourquoi démousser / basse pression / hydrofuge / gouttières /
//   signes / fréquence / couvreur-pas-société-de-nettoyage) et les chiffres
//   varient pour casser la duplication.
// - Balises anti-triplette validées par Joseph le 13/08/2026 : le mot-clé
//   exact n'apparaît jamais dans title + H1 + meta à la fois.
// - Maillage par page : 1 lien pilier (dans prochesIntro), 1 lien
//   /villes/{slug}/ (ancre « couvreur à X »), 1 lien hydrofuge OU gouttière
//   selon le thème, 3 satellites voisins (ancres variées).
// - Lexique 28 : tuile plate petit moule, ardoise naturelle, calcin, pureau,
//   basse pression 2-3 bars, brossage manuel, Dalep (applicateur certifié),
//   jamais de produits chlorés. Jamais de géographie décorative.
// - Rambouillet et Houdan sont dans les Yvelines : ne JAMAIS écrire « dans
//   toute l'Eure-et-Loir » sur ces deux pages.
// ─────────────────────────────────────────────────────────────────────────

export interface PhotoSat {
  src: string;
  largeur: number;
  hauteur: number;
  alt: string;
}

export interface SectionSat {
  h2: string;
  paragraphes: string[]; // HTML (liens + <strong>)
}

export interface VilleNettoyage {
  slug: string; // slug de la commune → URL /nettoyage-toiture-{slug}/
  nom: string;
  cp: string;
  title: string;
  metaDesc: string;
  h1: string;
  chapo: string; // HTML — problème client → solution Renaud Rénov
  coches: string[];
  heroPhoto: PhotoSat;
  sectionA: SectionSat;
  sectionB: SectionSat & { photo: PhotoSat };
  sectionC: SectionSat;
  etapesH2: string;
  etapes: { titre: string; texte: string }[];
  prochesH2: string;
  prochesIntro: string; // HTML — porte le lien vers le pilier
  proches: { slug: string; ancre: string }[];
  ctaTitre: string;
  ctaTexte: string;
}

export const VILLES_NETTOYAGE: VilleNettoyage[] = [
  // ─────────────────────────────────────────────── VILLIERS-LE-MORHIER ──
  {
    slug: 'villiers-le-morhier',
    nom: 'Villiers-le-Morhier',
    cp: '28130',
    title: 'Nettoyage de toiture à Villiers-le-Morhier — Devis gratuit',
    metaDesc:
      "Votre toit verdit à Villiers-le-Morhier ? Renaud Rénov, couvreur installé dans la commune, démousse et traite votre toiture. Devis gratuit.",
    h1: 'Démoussage et lavage de toiture à Villiers-le-Morhier',
    chapo:
      "Des mousses s'installent sur vos tuiles, des traînées sombres marquent vos versants, et vous cherchez quelqu'un de sérieux pour y remédier ? Je suis M.&nbsp;Renaud, et mon entreprise <strong>Renaud Rénov</strong> est installée à <strong>Villiers-le-Morhier</strong> même : le <strong>nettoyage de toiture</strong>, ici, c'est chez moi que ça commence.",
    coches: [
      "15 années d'expérience en entretien de toitures",
      'Couvreur installé dans la commune',
      'Applicateur de solutions Dalep',
      'Devis gratuit et sans engagement',
    ],
    heroPhoto: {
      src: '/images/photos/nettoyage-demoussage-toiture.webp',
      largeur: 1600,
      hauteur: 1200,
      alt: 'M. Renaud nettoyant une toiture en tuiles à Villiers-le-Morhier',
    },
    sectionA: {
      h2: 'Pourquoi faire démousser votre toit à Villiers-le-Morhier ?',
      paragraphes: [
        "Les mousses ne font pas qu'enlaidir une couverture : elles retiennent l'eau au contact permanent du matériau. Sur les toits de Villiers-le-Morhier, souvent couverts en tuile plate petit moule, cette humidité migre dans la porosité de la terre cuite, et chaque hiver le gel élargit les micro-fissures. Les tuiles deviennent gélives, cassent, et l'étanchéité se dégrade bien avant l'âge normal de la couverture.",
        "Les versants exposés au nord sont toujours colonisés en premier : c'est là que les plaques vertes s'installent, que les lichens s'incrustent et que les traînées noires apparaissent. Un démoussage réalisé au bon moment coûte sans comparaison moins cher qu'un remplacement de tuiles anticipé — c'est l'entretien le plus rentable que vous puissiez offrir à votre toit.",
        "Habitant la commune, je passe devant vos toitures toute l'année : je peux venir examiner la vôtre le jour même, vous montrer son état réel photos à l'appui, et vous dire franchement si un nettoyage s'impose ou si elle peut attendre une saison de plus.",
      ],
    },
    sectionB: {
      h2: 'Un lavage en douceur, jamais de haute pression',
      paragraphes: [
        "Le nettoyeur haute pression est l'ennemi des toitures anciennes : il arrache le calcin qui protège les tuiles plates, altère la surface des ardoises et déplace les rangs au passage. Le matériau mis à nu se recharge en mousses encore plus vite — c'est l'effet inverse de celui recherché.",
        "Je travaille donc en basse pression, autour de 2 à 3 bars, complétée d'un brossage manuel sur les zones sensibles : pureaux, arêtiers, noues. Le rinçage se mène du faîtage vers l'égout, dans le sens de l'écoulement, pour ne jamais faire remonter d'eau sous les rangs. Le toit ressort propre, et le matériau reste intact.",
      ],
      photo: {
        src: '/images/photos/brossage-manuel-tuiles-anciennes-28.webp',
        largeur: 1500,
        hauteur: 2000,
        alt: "Brossage manuel d'une toiture en tuiles plates anciennes à Villiers-le-Morhier",
      },
    },
    sectionC: {
      h2: 'Les gouttières, nettoyées dans la même intervention',
      paragraphes: [
        "Un nettoyage de versants se termine toujours par celui des évacuations. Gouttières, naissances et descentes sont débarrassées des feuilles, des mousses tombées pendant le lavage et des dépôts accumulés. Je vérifie au passage les fixations et la pente d'écoulement, et je vous signale ce qui mériterait une reprise — une <a href=\"/pose-gouttiere-28/\">gouttière en bon état</a>, c'est une façade et des fondations protégées.",
        "Ce passage en rive me permet aussi de contrôler les points singuliers : solins, bandes de rive, abords de cheminée. En tant que <a href=\"/villes/villiers-le-morhier/\">couvreur à Villiers-le-Morhier</a>, je repère et je peux reprendre immédiatement ce qu'une société de nettoyage se contenterait de photographier.",
      ],
    },
    etapesH2: "Comment se déroule l'intervention ?",
    etapes: [
      {
        titre: 'Examen de la couverture',
        texte:
          "Je passe le toit en revue : tuiles gélives, crochets déchaussés, points singuliers. Ce qui doit être repris est signalé avant le nettoyage.",
      },
      {
        titre: 'Traitement curatif',
        texte:
          "Un antimousse professionnel dessèche mousses, algues et lichens en 48 à 72 heures, jusqu'à la racine des végétaux.",
      },
      {
        titre: 'Lavage basse pression',
        texte:
          "Rinçage à 2-3 bars mené du faîtage vers l'égout, brossage manuel des zones tenaces, gouttières curées en fin de passe.",
      },
      {
        titre: 'Protection préventive',
        texte:
          "J'applique un traitement rémanent qui retarde de plusieurs années la réinstallation des spores, et un hydrofuge en option.",
      },
    ],
    prochesH2: 'Le nettoyage de toiture autour de Villiers-le-Morhier',
    prochesIntro:
      "Depuis mon atelier, j'interviens dans les communes voisines comme dans tout le département — retrouvez ma page <a href=\"/nettoyage-toiture-28/\">nettoyage et démoussage de toiture en Eure-et-Loir</a> ou choisissez directement votre commune :",
    proches: [
      { slug: 'pierres', ancre: 'Nettoyage de toiture à Pierres' },
      { slug: 'nogent-le-roi', ancre: 'Démoussage de toiture à Nogent-le-Roi' },
      { slug: 'saint-piat', ancre: 'Démoussage de toit à Saint-Piat' },
    ],
    ctaTitre: 'Votre toit à Villiers-le-Morhier mérite un coup de propre ?',
    ctaTexte:
      "Je suis votre voisin : décrivez-moi l'état de votre toiture et je passe l'examiner rapidement. Démoussage, brossage manuel, traitement et nettoyage des gouttières — le devis est détaillé, gratuit et sans engagement.",
  },

  // ─────────────────────────────────────────────────────────── MAINTENON ──
  {
    slug: 'maintenon',
    nom: 'Maintenon',
    cp: '28130',
    title: 'Démoussage de toiture à Maintenon (28130) — Renaud Rénov',
    metaDesc:
      "Mousses et lichens sur votre toit à Maintenon ? Lavage basse pression, brossage manuel et traitement antimousse par un couvreur du 28. Devis gratuit.",
    h1: 'Nettoyage et démoussage de toiture à Maintenon',
    chapo:
      "Votre toiture à <strong>Maintenon</strong> se couvre de mousses, vos tuiles noircissent, et vous hésitez à confier votre toit au premier venu ? Je suis M.&nbsp;Renaud : avec <strong>Renaud Rénov</strong>, entreprise de couverture installée à quatre kilomètres de chez vous, je redonne aux toitures leur propreté — et j'ai déjà des <strong>démoussages</strong> à mon actif dans votre commune.",
    coches: [
      'Un chantier de démoussage déjà réalisé à Maintenon',
      'Lavage basse pression et brossage manuel',
      'Applicateur de solutions Dalep',
      'Devis gratuit et sans engagement',
    ],
    heroPhoto: {
      src: '/images/photos/demoussage-toiture-maintenon-apres.webp',
      largeur: 1200,
      hauteur: 900,
      alt: 'Toiture en tuiles nettoyée et démoussée par Renaud Rénov à Maintenon',
    },
    sectionA: {
      h2: 'Le traitement hydrofuge, la vraie protection de votre toit',
      paragraphes: [
        "Nettoyer une toiture sans la protéger ensuite, c'est accepter de recommencer dans deux ans. À Maintenon, je termine donc la plupart des chantiers par un <a href=\"/traitement-hydrofuge-28/\">traitement hydrofuge</a> : une résine pulvérisée à saturation qui imprègne le matériau sur quelques millimètres. L'eau de pluie perle et ruisselle au lieu de s'infiltrer — et sans eau stagnante, les mousses n'ont plus de quoi s'installer.",
        "J'attends toujours que le support soit parfaitement sec avant d'appliquer : un hydrofuge posé sur un matériau gorgé d'eau ne pénètre pas. Et j'adapte la formulation au support — le produit qui convient à une tuile plate petit moule n'est pas celui d'une ardoise naturelle. La microporosité doit rester ouverte pour que le toit continue de respirer.",
        "Le résultat se vérifie à l'œil nu dès la première pluie : l'eau forme des gouttes rondes qui filent vers les gouttières au lieu de s'étaler en auréoles sombres. C'est le test que je vous invite à faire quelques jours après mon passage.",
      ],
    },
    sectionB: {
      h2: 'Pourquoi les mousses abîment vos tuiles',
      paragraphes: [
        "Une mousse, c'est une éponge posée sur votre toit : elle garde le matériau humide en permanence. La terre cuite des tuiles anciennes boit cette eau, et le gel de l'hiver la fait éclater de l'intérieur — les couvreurs parlent de tuiles gélives. À ce stade, il ne s'agit plus de nettoyer mais de remplacer, et la facture change d'échelle.",
        "Intervenir avant ce point de bascule, c'est tout l'enjeu d'un démoussage bien mené : traitement curatif qui dessèche les végétaux jusqu'à la racine, lavage doux qui n'agresse pas le calcin, puis protection qui retarde la repousse de plusieurs années.",
      ],
      photo: {
        src: '/images/photos/demoussage-toiture-maintenon-avant.webp',
        largeur: 1200,
        hauteur: 900,
        alt: 'Toiture couverte de mousses avant démoussage à Maintenon',
      },
    },
    sectionC: {
      h2: 'Un chantier déjà mené à Maintenon, photos à l’appui',
      paragraphes: [
        "Je ne vous demande pas de me croire sur parole : j'ai déjà démoussé des toitures dans votre commune, et l'une de ces interventions est documentée en photos, avant et après — voyez le <a href=\"/realisations/demoussage-toiture-maintenon/\">démoussage de toiture réalisé à Maintenon</a>. Vous y verrez le toit tel qu'il était, le déroulé du chantier et le résultat.",
        "C'est aussi la différence entre un <a href=\"/villes/maintenon/\">couvreur à Maintenon</a> et une société de nettoyage de passage : je connais les couvertures d'ici, je vois la tuile fêlée ou le solin fatigué pendant le lavage, et je peux le reprendre dans la foulée plutôt que de vous laisser avec un toit propre mais percé.",
      ],
    },
    etapesH2: 'Ma méthode, étape par étape',
    etapes: [
      {
        titre: 'Diagnostic sur place',
        texte:
          "Matériau, pente, niveau d'encrassement, état des rangs : le devis se fonde sur ce que je constate sur votre toit, pas sur une grille théorique.",
      },
      {
        titre: 'Antimousse curatif',
        texte:
          "Le produit agit deux à trois jours et dessèche les végétaux en profondeur, sur tuile comme sur ardoise, sans attaquer le matériau.",
      },
      {
        titre: 'Nettoyage en douceur',
        texte:
          "Basse pression et brosse sur les zones fragiles, rinçage du haut vers le bas, évacuations curées dans la foulée.",
      },
      {
        titre: 'Hydrofuge de finition',
        texte:
          "Sur support sec, la résine imprègne le matériau et fait perler l'eau : la couverture reste propre plusieurs années de plus.",
      },
    ],
    prochesH2: 'Je démousse aussi autour de Maintenon',
    prochesIntro:
      "Mon atelier est à quelques minutes, et le déplacement reste gratuit dans les communes voisines. Tout mon protocole est détaillé sur la page <a href=\"/nettoyage-toiture-28/\">démoussage de toiture dans le 28</a> :",
    proches: [
      { slug: 'pierres', ancre: 'Faire nettoyer son toit à Pierres' },
      { slug: 'saint-piat', ancre: 'Nettoyage de toiture à Saint-Piat' },
      { slug: 'bouglainval', ancre: 'Démoussage de toiture à Bouglainval' },
    ],
    ctaTitre: 'Une toiture à faire démousser à Maintenon ?',
    ctaTexte:
      "Comme pour le chantier déjà réalisé dans votre commune, je commence par venir voir votre toit : état des tuiles, encrassement, accès. Vous recevez ensuite un devis clair, poste par poste, gratuit et sans engagement.",
  },

  // ─────────────────────────────────────────────────────── NOGENT-LE-ROI ──
  {
    slug: 'nogent-le-roi',
    nom: 'Nogent-le-Roi',
    cp: '28210',
    title: 'Nettoyage de toiture à Nogent-le-Roi — Devis en 24 h',
    metaDesc:
      "Renaud Rénov lave et traite les toitures à Nogent-le-Roi : brossage doux, antimousse professionnel, hydrofuge. Déplacement et devis gratuits.",
    h1: 'Démoussage de toiture à Nogent-le-Roi',
    chapo:
      "Des plaques de mousse sur les tuiles, des lichens incrustés, un toit qui a perdu sa couleur : votre couverture à <strong>Nogent-le-Roi</strong> réclame un entretien ? Je suis M.&nbsp;Renaud, artisan couvreur, et avec <strong>Renaud Rénov</strong> — installée à quatre kilomètres de votre commune — je pratique le <strong>démoussage</strong> dans les règles de l'art, sans jamais abîmer les matériaux.",
    coches: [
      "15 années d'expérience en entretien de toitures",
      'Antimousses professionnels, jamais de produits chlorés',
      'Applicateur de solutions Dalep',
      'Déplacement et devis gratuits',
    ],
    heroPhoto: {
      src: '/images/photos/demoussage-toiture-apres-eure-et-loir.webp',
      largeur: 2000,
      hauteur: 1500,
      alt: 'Toiture en tuiles propre après démoussage par Renaud Rénov à Nogent-le-Roi',
    },
    sectionA: {
      h2: "Les signes qui montrent qu'il est temps d'agir",
      paragraphes: [
        "Des plaques vertes sur le versant le moins ensoleillé, des traînées sombres sous les rives, des touffes de mousse logées dans les noues, des débris de terre cuite dans les gouttières : votre toiture vous parle. À Nogent-le-Roi, ces signes annoncent un encrassement qui, laissé à lui-même, finit par attaquer le matériau — les mousses soulèvent les rangs et ouvrent le chemin de l'eau.",
        "Le bon réflexe n'est pas d'attendre la fuite : au moindre doute, je contrôle la toiture et je vous dis franchement si un nettoyage s'impose ou si votre couverture peut patienter. Ce diagnostic ne vous engage à rien — dix minutes de vérification valent mieux qu'une infiltration découverte au premier gros orage.",
        "Et si le toit est encore sain, tant mieux : je vous indique simplement à quelle échéance prévoir l'entretien, et ce que vous pouvez surveiller vous-même depuis le sol, sans prendre de risque.",
      ],
    },
    sectionB: {
      h2: 'Après le nettoyage, la protection hydrofuge',
      paragraphes: [
        "Un toit nettoyé mais laissé nu se recharge en mousses en deux ou trois saisons. C'est pourquoi je propose presque toujours de terminer par un <a href=\"/traitement-hydrofuge-28/\">hydrofuge de toiture</a> : appliqué sur support sec, il imprègne la tuile ou l'ardoise et fait ruisseler l'eau au lieu de la laisser s'infiltrer.",
        "Privées d'humidité, les spores ne s'installent plus : la protection tient de longues années, et votre couverture vieillit mieux. Sur les tuiles anciennes de Nogent-le-Roi, souvent poreuses, c'est l'investissement le plus utile après le démoussage lui-même.",
      ],
      photo: {
        src: '/images/photos/hydrofuge-toiture.webp',
        largeur: 1200,
        hauteur: 1600,
        alt: "Application d'un traitement hydrofuge sur une toiture à Nogent-le-Roi",
      },
    },
    sectionC: {
      h2: 'Gouttières et évacuations, contrôlées à chaque passage',
      paragraphes: [
        "Le lavage d'un toit fait forcément tomber des débris : je termine donc chaque chantier à Nogent-le-Roi par le curage complet des gouttières, naissances et descentes. Feuilles, mousses et dépôts sont évacués, les fixations vérifiées, la pente d'écoulement contrôlée.",
        "C'est aussi l'occasion d'un coup d'œil aux solins et aux bandes de rive, par lesquels commencent bien des infiltrations discrètes. Si une <a href=\"/pose-gouttiere-28/\">gouttière est à remplacer</a> ou un point de zinguerie à reprendre, votre <a href=\"/villes/nogent-le-roi/\">couvreur à Nogent-le-Roi</a> vous le chiffre dans le même devis — pas de deuxième entreprise à faire venir.",
      ],
    },
    etapesH2: 'Le déroulé du chantier chez vous',
    etapes: [
      {
        titre: 'Inspection du toit',
        texte:
          "Avant tout, je vérifie l'état des rangs, des crochets et des points singuliers : ce qui doit être repris est annoncé d'emblée.",
      },
      {
        titre: 'Application du biocide',
        texte:
          "L'antimousse professionnel pénètre les végétaux et les dessèche en quelques jours, jusqu'aux lichens incrustés.",
      },
      {
        titre: 'Lavage et brossage',
        texte:
          "Jet basse pression dans le sens de l'écoulement, brossage manuel là où le matériau l'exige : le toit ressort propre et intact.",
      },
      {
        titre: 'Traitement de protection',
        texte:
          "Un rémanent anti-repousse, complété si vous le souhaitez d'un hydrofuge, pour espacer durablement les entretiens.",
      },
    ],
    prochesH2: 'Nettoyage de toiture autour de Nogent-le-Roi',
    prochesIntro:
      "J'interviens dans toutes les communes du secteur — le protocole complet est sur ma page <a href=\"/nettoyage-toiture-28/\">nettoyage de toiture en Eure-et-Loir</a> :",
    proches: [
      { slug: 'villiers-le-morhier', ancre: 'Lavage de toiture à Villiers-le-Morhier' },
      { slug: 'hanches', ancre: 'Nettoyage de toiture à Hanches' },
      { slug: 'dreux', ancre: 'Nettoyage de toiture à Dreux' },
    ],
    ctaTitre: 'Faites vérifier votre toiture à Nogent-le-Roi',
    ctaTexte:
      "Décrivez-moi ce que vous observez — mousses, traces noires, tuiles ternies — et je viens examiner votre couverture. Diagnostic franc, devis détaillé sous 24 h, gratuit et sans engagement.",
  },

  // ───────────────────────────────────────────────────────────── ÉPERNON ──
  {
    slug: 'epernon',
    nom: 'Épernon',
    cp: '28230',
    title: 'Démoussage de toiture à Épernon (28230) — Devis gratuit',
    metaDesc:
      "Toit encrassé, traces noires, mousses à Épernon ? J'interviens en lavage basse pression et traitement antimousse. Renaud Rénov, couvreur du 28.",
    h1: 'Faire nettoyer sa toiture à Épernon',
    chapo:
      "Votre toit à <strong>Épernon</strong> a verdi, des traces de pollution s'accrochent aux tuiles, et vous voulez un travail propre, fait par un professionnel du toit ? Je suis M.&nbsp;Renaud : mon entreprise de couverture <strong>Renaud Rénov</strong> intervient chez vous en moins de dix minutes de route pour un <strong>nettoyage de toiture</strong> respectueux des matériaux.",
    coches: [
      'Démoussage professionnel des toitures',
      'Produits appliqués selon les prescriptions fabricant',
      'Applicateur de solutions Dalep',
      'Devis gratuit et sans engagement',
    ],
    heroPhoto: {
      src: '/images/photos/toiture-nettoyee-apres-demoussage.webp',
      largeur: 2000,
      hauteur: 1500,
      alt: 'Toiture nettoyée et débarrassée de ses mousses par Renaud Rénov à Épernon',
    },
    sectionA: {
      h2: 'Ce que les mousses font vraiment à votre couverture',
      paragraphes: [
        "On croit souvent qu'un toit moussu est juste inesthétique. En réalité, chaque coussin de mousse fonctionne comme une éponge qui maintient la tuile humide en permanence : la porosité du matériau s'ouvre, le gel fait le reste, et les tuiles finissent par casser. Sur les toitures d'Épernon, j'observe régulièrement des couvertures de trente ans qui en paraissent soixante — uniquement faute d'entretien.",
        "L'autre dégât est invisible : l'humidité entretenue au-dessus des combles dégrade l'isolation, et les gouttières encombrées de mousses tombées débordent sur les façades. Un démoussage au bon moment évite ces trois problèmes d'un coup, pour une fraction du coût d'une réfection.",
        "Mon conseil est simple : dès que le versant nord se couvre de plaques vertes, faites examiner le toit. Le diagnostic est gratuit, et il vous dit exactement où en est votre couverture.",
      ],
    },
    sectionB: {
      h2: 'Des produits professionnels, appliqués dans les règles',
      paragraphes: [
        "La différence entre un démoussage qui tient six mois et un traitement qui protège des années, c'est le produit et son application. Je travaille avec des gammes professionnelles — je suis notamment applicateur certifié des solutions Dalep — et jamais avec des produits chlorés, qui blanchissent les tuiles, attaquent le calcin et brûlent les végétaux de vos massifs au premier rinçage.",
        "Chaque formulation a ses règles : un dosage précis, un support sec, un délai d'action de deux à trois jours avant rinçage. Les respecter, c'est ce qui garantit que le biocide agit jusqu'à la racine des lichens, et que le traitement rémanent reste actif sur la couverture saison après saison.",
      ],
      photo: {
        src: '/images/photos/application-peinture-hydrofuge-toiture-28-renaud-renov.webp',
        largeur: 900,
        hauteur: 675,
        alt: "Application d'un traitement professionnel sur toiture par Renaud Rénov à Épernon",
      },
    },
    sectionC: {
      h2: "L'avantage de confier ce travail à un couvreur",
      paragraphes: [
        "Une société de nettoyage lave ; un couvreur lit le toit. Pendant le lavage, je repère la tuile fêlée, le crochet déchaussé, le solin qui se décolle — et je peux les reprendre dans la foulée, parce que la couverture est mon métier. Vous évitez le scénario classique du toit propre… mais toujours fuyard.",
        "C'est le sens de ma présence à Épernon comme <a href=\"/villes/epernon/\">couvreur</a> : un seul artisan pour l'entretien, la réparation et le conseil. Et si votre couverture mérite une protection durable, je vous oriente vers le bon <a href=\"/traitement-hydrofuge-28/\">traitement hydrofuge</a> plutôt que vers une prestation inutile.",
      ],
    },
    etapesH2: 'Quatre étapes pour un toit propre',
    etapes: [
      {
        titre: 'État des lieux',
        texte:
          "J'examine la couverture rang par rang et je vous montre, photos à l'appui, ce qui relève du nettoyage et ce qui relève de la réparation.",
      },
      {
        titre: 'Traitement biocide',
        texte:
          "Application au dosage prescrit ; le produit dessèche mousses et lichens en profondeur pendant 48 à 72 heures.",
      },
      {
        titre: 'Rinçage maîtrisé',
        texte:
          "Basse pression du faîtage vers les gouttières, brossage manuel des pureaux fragiles — jamais de haute pression sur une toiture ancienne.",
      },
      {
        titre: 'Anti-repousse',
        texte:
          "Un traitement rémanent prive les spores d'appui ; en option, un hydrofuge fait perler l'eau et prolonge la protection.",
      },
    ],
    prochesH2: 'Autour d’Épernon, même exigence',
    prochesIntro:
      "Le déplacement est gratuit dans tout le secteur, et ma page <a href=\"/nettoyage-toiture-28/\">lavage et démoussage de toiture dans le 28</a> détaille protocole et tarifs :",
    proches: [
      { slug: 'hanches', ancre: 'Démoussage de toiture à Hanches' },
      { slug: 'gallardon', ancre: 'Nettoyage de toiture à Gallardon' },
      { slug: 'rambouillet', ancre: 'Nettoyage de toiture à Rambouillet' },
    ],
    ctaTitre: 'Votre démoussage à Épernon, chiffré gratuitement',
    ctaTexte:
      "Appelez-moi ou passez par le formulaire : je viens voir votre toit, j'évalue l'encrassement et l'état des tuiles, et je vous remets un devis poste par poste — nettoyage, traitement, protection. Gratuit, précis, sans engagement.",
  },

  // ───────────────────────────────────────────────────────────── HANCHES ──
  {
    slug: 'hanches',
    nom: 'Hanches',
    cp: '28130',
    title: 'Nettoyage et démoussage de toiture à Hanches — Renaud Rénov',
    metaDesc:
      "Un couvreur pour démousser votre toit à Hanches : brossage manuel, antimousse Dalep, hydrofuge en option. Devis gratuit et sans engagement.",
    h1: 'Lavage et traitement de toiture à Hanches',
    chapo:
      "Mousses sur les tuiles, gouttières qui se chargent, couleurs qui ternissent : votre toit à <strong>Hanches</strong> demande un entretien sérieux ? Je suis M.&nbsp;Renaud, couvreur, et <strong>Renaud Rénov</strong> est basée à cinq kilomètres de votre commune : le <strong>démoussage de toiture</strong>, chez vous, c'est une demi-journée de chantier et des années de tranquillité.",
    coches: [
      "15 années d'expérience en entretien de toitures",
      'Brossage manuel des couvertures fragiles',
      'Applicateur de solutions Dalep',
      'Devis gratuit et sans engagement',
    ],
    heroPhoto: {
      src: '/images/photos/nettoyage-toiture-resultat.webp',
      largeur: 1600,
      hauteur: 1200,
      alt: 'Résultat d’un nettoyage de toiture réalisé par Renaud Rénov à Hanches',
    },
    sectionA: {
      h2: 'À quelle fréquence faire nettoyer son toit à Hanches ?',
      paragraphes: [
        "Tout dépend de l'environnement immédiat de votre maison. Un pavillon entouré d'arbres, dont les branches surplombent la couverture, se recharge vite : mousses et feuilles s'y installent en trois ou quatre saisons, et un entretien tous les cinq ans environ est une bonne base. Un toit dégagé, bien exposé, peut patienter huit à dix ans entre deux passages.",
        "À Hanches, je vois les deux cas de figure — et le meilleur indicateur reste l'observation : quand le versant nord verdit et que des débris s'accumulent dans les gouttières, l'échéance approche. Attendre davantage, c'est laisser les végétaux s'incruster et rendre le nettoyage suivant plus lourd, donc plus coûteux.",
        "Quant à la saison : j'interviens par temps sec, hors gel et hors canicule, car les produits de traitement ont besoin d'un support sec et de 48 à 72 heures d'action. Du printemps au début de l'automne, les conditions sont idéales.",
      ],
    },
    sectionB: {
      h2: 'Basse pression et brosse : la méthode qui respecte le matériau',
      paragraphes: [
        "Jamais de nettoyeur haute pression sur une toiture : il décape la surface des tuiles, emporte le calcin protecteur et fragilise les ardoises. À la place, un jet basse pression de 2 à 3 bars, mené dans le sens de l'écoulement, et un brossage manuel sur les zones délicates — pureaux, faîtage, noues.",
        "Cette méthode demande plus de temps qu'un coup de Kärcher, mais elle rend un toit propre ET intact. C'est toute la différence entre nettoyer une couverture et l'user prématurément.",
      ],
      photo: {
        src: '/images/photos/toiture-avant-demoussage.webp',
        largeur: 1200,
        hauteur: 1600,
        alt: 'Toiture encrassée de mousses avant nettoyage à Hanches',
      },
    },
    sectionC: {
      h2: 'Et pour finir, la protection qui change tout',
      paragraphes: [
        "Un toit nettoyé est un toit vulnérable si on le laisse nu : les spores reviennent avec le vent, et l'humidité leur offre un terrain neuf. J'applique donc systématiquement un traitement rémanent anti-repousse, et je propose en option un <a href=\"/traitement-hydrofuge-28/\">hydrofuge</a> qui imperméabilise le matériau tout en le laissant respirer.",
        "Votre <a href=\"/villes/hanches/\">couvreur à Hanches</a> vous détaille les deux protections dans le devis, avec leur durée d'efficacité respective : vous choisissez en connaissance de cause, sans option imposée.",
      ],
    },
    etapesH2: "Comment se déroule l'intervention ?",
    etapes: [
      {
        titre: 'Visite et diagnostic',
        texte:
          "J'inspecte la couverture : matériau, encrassement, tuiles à remplacer. Vous savez exactement ce qui sera fait, et pourquoi.",
      },
      {
        titre: 'Biocide professionnel',
        texte:
          "Le traitement curatif agit 48 à 72 heures et dessèche les végétaux jusqu'à la racine, sans produits chlorés.",
      },
      {
        titre: 'Lavage doux',
        texte:
          "Rinçage basse pression complété d'un brossage manuel : les mousses partent, le calcin et la surface des tuiles restent.",
      },
      {
        titre: 'Protection longue durée',
        texte:
          "Rémanent anti-repousse, puis hydrofuge en option sur support sec : votre toit reste propre saison après saison.",
      },
    ],
    prochesH2: 'Le cocon nettoyage autour de Hanches',
    prochesIntro:
      "De mon atelier aux communes voisines, il n'y a que quelques minutes — et la page <a href=\"/nettoyage-toiture-28/\">nettoyage de toiture en Eure-et-Loir</a> rassemble protocole, tarifs et conseils :",
    proches: [
      { slug: 'epernon', ancre: 'Faire nettoyer sa toiture à Épernon' },
      { slug: 'pierres', ancre: 'Démoussage de toiture à Pierres' },
      { slug: 'maintenon', ancre: 'Démoussage de toiture à Maintenon' },
    ],
    ctaTitre: 'Un toit à démousser à Hanches ?',
    ctaTexte:
      "Dites-moi ce que vous observez sur votre couverture et je passe la vérifier. Vous recevez un devis détaillé — nettoyage, traitement, protection — gratuit et sans engagement, avec un conseil franc sur ce qui est vraiment utile.",
  },
  // ─────────────────────────────────────────────────────────── GALLARDON ──
  {
    slug: 'gallardon',
    nom: 'Gallardon',
    cp: '28320',
    title: 'Nettoyage de toiture à Gallardon (28320) — Devis gratuit',
    metaDesc:
      "Mousses, lichens, tuiles noircies à Gallardon ? Lavage doux et traitement des toitures par Renaud Rénov, artisan couvreur en Eure-et-Loir.",
    h1: 'Démoussage et traitement de toiture à Gallardon',
    chapo:
      "Vos tuiles à <strong>Gallardon</strong> disparaissent sous les mousses, des lichens blancs s'incrustent, et vous voulez retrouver un toit net sans le fragiliser ? Je suis M.&nbsp;Renaud : avec mon entreprise <strong>Renaud Rénov</strong>, je pratique le <strong>nettoyage de toiture</strong> en douceur — traitement professionnel, lavage basse pression, brossage manuel là où il faut.",
    coches: [
      'Démoussage professionnel des toitures',
      'Lavage basse pression, jamais de décapage',
      'Applicateur de solutions Dalep',
      'Devis gratuit et sans engagement',
    ],
    heroPhoto: {
      src: '/images/photos/demoussage-28.webp',
      largeur: 2000,
      hauteur: 1500,
      alt: 'Toiture en tuiles propre après démoussage par Renaud Rénov à Gallardon',
    },
    sectionA: {
      h2: 'Un toit encrassé vieillit deux fois plus vite',
      paragraphes: [
        "Sous une plaque de mousse, la tuile ne sèche jamais. L'eau s'installe dans la porosité de la terre cuite, et les cycles de gel de l'hiver la transforment en coin qui fait éclater le matériau. Les tuiles deviennent gélives et cassantes, les rangs bougent, et une couverture qui aurait tenu trente ans de plus commence à fuir.",
        "À Gallardon, beaucoup de maisons portent des couvertures anciennes en tuile plate : un matériau superbe, mais dont le calcin — cette fine couche de surface qui le protège — ne pardonne ni la haute pression ni les produits agressifs. Le démoussage y est d'autant plus utile qu'il doit y être fait correctement.",
        "La bonne nouvelle : pris à temps, l'entretien coûte une fraction du remplacement. Un toit démoussé, traité et protégé repart pour des années — et votre maison y gagne immédiatement en allure.",
      ],
    },
    sectionB: {
      h2: "L'hydrofuge, pour que le résultat dure",
      paragraphes: [
        "Après le nettoyage, je recommande souvent un <a href=\"/traitement-hydrofuge-28/\">traitement hydrofuge de toiture</a> : pulvérisée sur support sec, la résine imprègne la tuile sur quelques millimètres et fait perler l'eau de pluie. Sans humidité stagnante, mousses et lichens perdent leur terrain d'accroche.",
        "J'utilise des formulations qui préservent la microporosité du matériau — le toit continue de respirer, condition indispensable sur les couvertures anciennes. La protection se mesure en années, pas en saisons, et elle est chiffrée à part dans le devis : vous voyez précisément ce qu'elle coûte et ce qu'elle apporte.",
      ],
      photo: {
        src: '/images/photos/toiture-apres-hydrofuge-resine-28.webp',
        largeur: 2000,
        hauteur: 1500,
        alt: 'Toiture ravivée après nettoyage et traitement hydrofuge à Gallardon',
      },
    },
    sectionC: {
      h2: 'Quand faut-il s’inquiéter pour sa couverture ?',
      paragraphes: [
        "Trois signaux doivent vous alerter à Gallardon : des plaques vertes qui s'étendent sur le versant nord, des granulats ou éclats de tuile dans les gouttières, et des traces d'humidité qui persistent sur les rampants après la pluie. Chacun raconte la même histoire — l'eau séjourne là où elle ne devrait que passer.",
        "Au moindre doute, demandez un contrôle à votre <a href=\"/villes/gallardon/\">couvreur à Gallardon</a> : je contrôle la toiture, je photographie, et je vous dis ce qui relève d'un simple nettoyage, d'un traitement, ou d'une petite réparation à faire dans la foulée. Le diagnostic est gratuit et sans engagement.",
      ],
    },
    etapesH2: 'Mon intervention, dans l’ordre',
    etapes: [
      {
        titre: 'Contrôle du toit',
        texte:
          "J'inspecte rangs, faîtage et points singuliers avant toute chose : pas de nettoyage sur une couverture qui réclame d'abord une réparation.",
      },
      {
        titre: 'Curatif en profondeur',
        texte:
          "L'antimousse professionnel agit plusieurs jours et dessèche mousses et lichens jusqu'à la racine, sans brûler les abords.",
      },
      {
        titre: 'Lavage respectueux',
        texte:
          "Basse pression menée du haut vers le bas, brossage manuel sur la tuile plate : le calcin reste en place, le toit ressort net.",
      },
      {
        titre: 'Protection durable',
        texte:
          "Traitement rémanent anti-repousse, hydrofuge en option : l'entretien suivant s'éloigne de plusieurs années.",
      },
    ],
    prochesH2: 'Nettoyage de toiture autour de Gallardon',
    prochesIntro:
      "J'interviens dans tout le secteur — retrouvez le protocole complet sur ma page <a href=\"/nettoyage-toiture-28/\">démoussage de toiture en Eure-et-Loir</a> ou choisissez votre commune :",
    proches: [
      { slug: 'bouglainval', ancre: 'Nettoyage de toiture à Bouglainval' },
      { slug: 'auneau', ancre: 'Démoussage de toiture à Auneau' },
      { slug: 'epernon', ancre: 'Démoussage de toiture à Épernon' },
    ],
    ctaTitre: 'Redonnez son éclat à votre toit de Gallardon',
    ctaTexte:
      "Envoyez-moi une photo de votre toiture ou décrivez-moi son état : je viens l'examiner, et vous recevez un devis détaillé — nettoyage, traitement, protection — gratuit et sans engagement.",
  },

  // ───────────────────────────────────────────────────────────── PIERRES ──
  {
    slug: 'pierres',
    nom: 'Pierres',
    cp: '28130',
    title: 'Démoussage de toiture à Pierres (28130) — Devis gratuit',
    metaDesc:
      "Votre toiture verdit à Pierres ? Brossage manuel, lavage basse pression et antimousse professionnel par un couvreur voisin. Devis gratuit.",
    h1: 'Nettoyage de toiture à Pierres',
    chapo:
      "Un toit qui verdit, des tuiles qui noircissent, et l'envie de confier ça à quelqu'un du coin plutôt qu'à une société de passage ? Je suis M.&nbsp;Renaud : <strong>Renaud Rénov</strong> est installée à quatre kilomètres de <strong>Pierres</strong>, et le <strong>démoussage de toiture</strong> y est l'une de mes interventions les plus demandées.",
    coches: [
      'Couvreur du secteur, à quelques minutes de chez vous',
      'Lavage basse pression et brossage manuel',
      'Applicateur de solutions Dalep',
      'Devis gratuit et sans engagement',
    ],
    heroPhoto: {
      src: '/images/photos/toiture-mousse-a-nettoyer-28.webp',
      largeur: 2000,
      hauteur: 1500,
      alt: 'Toiture envahie par la mousse avant nettoyage par Renaud Rénov à Pierres',
    },
    sectionA: {
      h2: 'Pourquoi je refuse la haute pression sur vos tuiles',
      paragraphes: [
        "Le Kärcher fait des miracles sur une terrasse — et des dégâts sur une toiture. Sous haute pression, la surface de la tuile s'érode, le calcin protecteur part avec les mousses, et l'eau s'engouffre sous les rangs qu'elle soulève au passage. Résultat : un toit propre en apparence, mais poreux, qui reverdit en deux saisons et vieillit à vitesse accélérée.",
        "Ma méthode à Pierres est plus patiente : un traitement biocide qui dessèche les végétaux en profondeur, puis un rinçage basse pression de 2 à 3 bars dans le sens de l'écoulement, complété d'un brossage manuel sur les zones fragiles. Le résultat est le même à l'œil — le toit est net — mais le matériau, lui, est intact.",
        "C'est plus long qu'un décapage, et c'est justement pour ça que ça vaut la peine : vous nettoyez votre couverture sans la consommer.",
      ],
    },
    sectionB: {
      h2: 'Le regard du couvreur pendant le nettoyage',
      paragraphes: [
        "Pendant que je lave, j'observe : une tuile fêlée par le gel, un crochet d'ardoise déchaussé, un solin qui baille près de la cheminée. Ces détails, une société de nettoyage ne les voit pas — ou ne peut rien en faire. Moi, je suis <a href=\"/villes/pierres/\">couvreur à Pierres</a> : je vous les signale, photos à l'appui, et je peux les reprendre dans la même intervention.",
        "C'est souvent là que se joue la vraie valeur d'un entretien : détecter la petite reprise à dix euros avant qu'elle ne devienne l'infiltration à mille.",
      ],
      photo: {
        src: '/images/photos/artisan-sur-toit.webp',
        largeur: 1200,
        hauteur: 1600,
        alt: 'M. Renaud, couvreur, inspectant une toiture en tuiles à Pierres',
      },
    },
    sectionC: {
      h2: 'Espacez les entretiens grâce à la protection',
      paragraphes: [
        "Un démoussage nu se refait tous les trois ou quatre ans ; un démoussage suivi d'un traitement rémanent et d'un <a href=\"/traitement-hydrofuge-28/\">hydrofuge</a> tient bien davantage. Le rémanent prive les spores de leur point d'accroche, l'hydrofuge chasse l'humidité dont elles ont besoin : ensemble, ils espacent durablement les interventions.",
        "À Pierres, où beaucoup de pavillons sont entourés de jardins arborés, cette protection fait une différence nette : les toits traités que j'entretiens restent propres là où leurs voisins reverdissent. Sur la durée, c'est le traitement le plus économique qui soit.",
      ],
    },
    etapesH2: 'Le chantier type, en quatre temps',
    etapes: [
      {
        titre: 'Repérage',
        texte:
          "Une visite rapide — je suis à cinq minutes — pour évaluer matériau, pente et encrassement, et bâtir un devis juste.",
      },
      {
        titre: 'Traitement des végétaux',
        texte:
          "Le biocide professionnel pénètre mousses et lichens et les dessèche en deux à trois jours, racines comprises.",
      },
      {
        titre: 'Nettoyage complet',
        texte:
          "Rinçage doux du faîtage vers l'égout, brossage des pureaux, curage des gouttières en fin de passe.",
      },
      {
        titre: 'Finition protectrice',
        texte:
          "Anti-repousse rémanent, et hydrofuge en option pour faire perler l'eau : votre toit reste propre longtemps.",
      },
    ],
    prochesH2: 'J’interviens tout autour de Pierres',
    prochesIntro:
      "Maisons voisines, mêmes toitures, la même exigence — et tous les détails sur ma page <a href=\"/nettoyage-toiture-28/\">nettoyage et démoussage de toiture dans le 28</a> :",
    proches: [
      { slug: 'maintenon', ancre: 'Nettoyage de toiture à Maintenon' },
      { slug: 'hanches', ancre: 'Lavage de toiture à Hanches' },
      { slug: 'villiers-le-morhier', ancre: 'Démoussage à Villiers-le-Morhier' },
    ],
    ctaTitre: 'Votre toiture à Pierres, nettoyée par un voisin',
    ctaTexte:
      "Un appel, et je passe voir votre toit dans la semaine : diagnostic franc, devis détaillé poste par poste, gratuit et sans engagement. Et comme je suis du secteur, le suivi ne s'arrête pas au chantier.",
  },

  // ────────────────────────────────────────────────────────── SAINT-PIAT ──
  {
    slug: 'saint-piat',
    nom: 'Saint-Piat',
    cp: '28130',
    title: 'Nettoyage de toiture à Saint-Piat — Couvreur du 28',
    metaDesc:
      "Renaud Rénov nettoie et traite les toitures à Saint-Piat : mousses retirées sans abîmer tuiles ni ardoises. Devis gratuit, réponse rapide.",
    h1: 'Démoussage de toit à Saint-Piat',
    chapo:
      "La mousse gagne du terrain sur votre couverture à <strong>Saint-Piat</strong>, les gouttières se remplissent de débris, et vous voulez agir avant la première fuite ? Je suis M.&nbsp;Renaud : avec <strong>Renaud Rénov</strong>, entreprise de couverture basée à huit kilomètres, je redonne aux toits leur propreté — et leur étanchéité.",
    coches: [
      "15 années d'expérience en entretien de toitures",
      'Techniques adaptées aux tuiles et aux ardoises',
      'Applicateur de solutions Dalep',
      'Devis gratuit et sans engagement',
    ],
    heroPhoto: {
      src: '/images/photos/hydrofuge-toiture-resultat-eure-et-loir.webp',
      largeur: 2000,
      hauteur: 1500,
      alt: 'Toiture nettoyée et protégée par un traitement appliqué par Renaud Rénov à Saint-Piat',
    },
    sectionA: {
      h2: 'Votre toit vous envoie des signaux — écoutez-les',
      paragraphes: [
        "Une couverture ne se dégrade jamais d'un coup. D'abord le versant le moins ensoleillé verdit ; puis des touffes s'installent dans les noues et le long du faîtage ; enfin les gouttières se chargent de débris de mousse et, plus inquiétant, de granulats de terre cuite — le signe que les tuiles commencent à s'effriter.",
        "À Saint-Piat, où les maisons anciennes côtoient les pavillons récents, je vois ces trois stades chez des voisins de la même rue. La différence ? L'entretien. Un toit nettoyé et traité au premier stade ne connaît jamais le troisième.",
        "Si votre couverture montre l'un de ces signes, faites-la examiner : le contrôle est gratuit, et vous saurez exactement où vous en êtes.",
      ],
    },
    sectionB: {
      h2: 'Un nettoyage qui respecte tuiles et ardoises',
      paragraphes: [
        "Chaque matériau a ses règles. La tuile plate ancienne garde son calcin tant qu'on la brosse à la main ; l'ardoise naturelle exige des jets doux et des appuis calculés ; la tuile mécanique tolère un peu plus de pression. Mon protocole s'adapte : biocide professionnel d'abord, qui dessèche les végétaux en profondeur, puis rinçage basse pression et brossage là où le matériau l'impose.",
        "Ce que je ne fais jamais : décaper à haute pression ou recourir aux produits chlorés. Les deux donnent un résultat spectaculaire… et un toit fragilisé qui reverdit deux fois plus vite.",
      ],
      photo: {
        src: '/images/photos/brossage-manuel-tuiles-anciennes-28.webp',
        largeur: 1500,
        hauteur: 2000,
        alt: 'Brossage manuel des mousses sur toiture ancienne à Saint-Piat',
      },
    },
    sectionC: {
      h2: 'Protéger après avoir nettoyé : le bon réflexe',
      paragraphes: [
        "Le nettoyage rend la propreté ; la protection la conserve. Je termine mes chantiers de Saint-Piat par un traitement rémanent qui retarde la réinstallation des spores, et je propose en option un <a href=\"/traitement-hydrofuge-28/\">traitement hydrofuge</a> : l'eau perle et ruisselle au lieu de s'imprégner, et le matériau, gardé au sec, cesse d'offrir un terrain aux mousses.",
        "Votre <a href=\"/villes/saint-piat/\">couvreur à Saint-Piat</a> vous détaille les deux options dans le devis, avec leur durée d'efficacité : à vous de choisir, en connaissance de cause.",
      ],
    },
    etapesH2: "L'intervention, pas à pas",
    etapes: [
      {
        titre: 'Diagnostic gratuit',
        texte:
          "J'examine la couverture et je distingue ce qui relève du nettoyage, du traitement ou d'une reprise ponctuelle.",
      },
      {
        titre: 'Biocide curatif',
        texte:
          "Application au pulvérisateur, temps d'action de plusieurs jours : les végétaux sèchent jusqu'à la racine.",
      },
      {
        titre: 'Lavage adapté',
        texte:
          "Basse pression sur la tuile, brossage sur les zones fragiles, sens de l'écoulement respecté rang après rang.",
      },
      {
        titre: 'Protection finale',
        texte:
          "Rémanent anti-repousse, hydrofuge en option : le toit reste net et le matériau au sec pour longtemps.",
      },
    ],
    prochesH2: 'Le nettoyage de toiture près de Saint-Piat',
    prochesIntro:
      "Je couvre tout le secteur — le protocole détaillé est sur la page <a href=\"/nettoyage-toiture-28/\">nettoyage de toiture en Eure-et-Loir</a> :",
    proches: [
      { slug: 'maintenon', ancre: 'Démoussage de toiture à Maintenon' },
      { slug: 'bouglainval', ancre: 'Lavage de toiture à Bouglainval' },
      { slug: 'chartres', ancre: 'Nettoyage de toiture à Chartres' },
    ],
    ctaTitre: 'Un toit à remettre au propre à Saint-Piat ?',
    ctaTexte:
      "Décrivez-moi votre toiture — matériau, âge, ce que vous observez — et je viens la vérifier. Devis détaillé, gratuit et sans engagement, avec un conseil honnête sur l'intervention réellement utile.",
  },

  // ───────────────────────────────────────────────────────── BOUGLAINVAL ──
  {
    slug: 'bouglainval',
    nom: 'Bouglainval',
    cp: '28130',
    title: 'Démoussage de toiture à Bouglainval — Devis gratuit',
    metaDesc:
      "Toit envahi par les mousses à Bouglainval ? Lavage basse pression, brossage et antimousse par un artisan couvreur voisin. Devis sans engagement.",
    h1: 'Nettoyage et traitement de toiture à Bouglainval',
    chapo:
      "Votre couverture à <strong>Bouglainval</strong> disparaît sous les mousses et vous cherchez un artisan qui la nettoie sans la brutaliser ? Je suis M.&nbsp;Renaud. Mon entreprise <strong>Renaud Rénov</strong> est à neuf kilomètres de chez vous, et le <strong>nettoyage de toiture</strong> y est affaire de méthode : traiter, laver en douceur, protéger.",
    coches: [
      'Démoussage professionnel des toitures',
      'Jamais de haute pression sur les tuiles anciennes',
      'Applicateur de solutions Dalep',
      'Devis gratuit et sans engagement',
    ],
    heroPhoto: {
      src: '/images/photos/toiture-apres-hydrofuge-resine-28.webp',
      largeur: 2000,
      hauteur: 1500,
      alt: 'Toiture en tuiles ravivée après nettoyage et traitement à Bouglainval',
    },
    sectionA: {
      h2: 'Le bon rythme d’entretien pour un toit de Bouglainval',
      paragraphes: [
        "Dans un village entouré de champs et de bosquets comme Bouglainval, les toitures vivent au rythme de leur exposition : un pan abrité des vents dominants et ombragé par un arbre se couvre de mousse en quelques années, quand le versant sud de la même maison reste net. C'est pourquoi je raisonne par toit, jamais par formule toute faite.",
        "En pratique, un contrôle tous les quatre à cinq ans suffit pour les maisons sous les arbres, et tous les huit à dix ans pour les toits bien dégagés. Entre deux, surveillez vos gouttières : quand elles se chargent de débris verts, la couverture est en train de se coloniser.",
        "J'interviens par temps sec, du printemps au début de l'automne, quand les produits de traitement disposent des deux à trois jours nécessaires pour agir sur un support sec.",
      ],
    },
    sectionB: {
      h2: 'La douceur comme règle de travail',
      paragraphes: [
        "Sur les tuiles plates anciennes qui coiffent nombre de maisons de Bouglainval, la haute pression est une faute professionnelle : elle emporte le calcin, cette peau de surface qui protège la terre cuite, et condamne la tuile à boire l'eau de pluie. Je travaille donc en basse pression — 2 à 3 bars — et à la brosse sur les zones les plus fragiles.",
        "Le traitement fait le gros du travail en amont : un biocide professionnel dessèche mousses et lichens jusqu'à la racine, si bien que le lavage n'a plus qu'à évacuer des végétaux morts, sans forcer sur le matériau.",
      ],
      photo: {
        src: '/images/photos/toiture-avant-hydrofuge-mousse-28.webp',
        largeur: 2000,
        hauteur: 1500,
        alt: 'Toiture couverte de mousses avant traitement à Bouglainval',
      },
    },
    sectionC: {
      h2: 'Gouttières et rives : la finition qui protège la maison',
      paragraphes: [
        "Chaque chantier se termine par le curage des gouttières et des descentes : les débris du lavage sont évacués, les fixations contrôlées, l'écoulement vérifié. Une <a href=\"/pose-gouttiere-28/\">gouttière saine</a>, c'est une façade sans coulures et des fondations au sec — le complément logique d'un toit propre.",
        "J'en profite pour examiner solins et bandes de rive : ces ouvrages discrets sont la porte d'entrée favorite des infiltrations. En tant que <a href=\"/villes/bouglainval/\">couvreur à Bouglainval</a>, je peux reprendre immédiatement ce qui le mérite — un avantage qu'aucune société de nettoyage ne vous offrira.",
      ],
    },
    etapesH2: 'Quatre temps, un toit net',
    etapes: [
      {
        titre: 'Examen préalable',
        texte:
          "Je vérifie l'état des rangs et des points singuliers : le nettoyage n'a de sens que sur une couverture saine ou réparée.",
      },
      {
        titre: 'Traitement antimousse',
        texte:
          "Le produit professionnel agit deux à trois jours et tue les végétaux en profondeur, sans chlore ni décapant.",
      },
      {
        titre: 'Rinçage basse pression',
        texte:
          "Du faîtage vers l'égout, brosse en main pour les pureaux : les mousses partent, le calcin reste.",
      },
      {
        titre: 'Anti-repousse',
        texte:
          "Un rémanent retarde la réinstallation des spores ; l'hydrofuge, en option, garde le matériau au sec.",
      },
    ],
    prochesH2: 'Autour de Bouglainval, le même savoir-faire',
    prochesIntro:
      "Le déplacement est gratuit dans les communes voisines — et ma page <a href=\"/nettoyage-toiture-28/\">démoussage de toiture dans le 28</a> répond à toutes vos questions :",
    proches: [
      { slug: 'saint-piat', ancre: 'Nettoyage de toit à Saint-Piat' },
      { slug: 'gallardon', ancre: 'Démoussage de toiture à Gallardon' },
      { slug: 'chartres', ancre: 'Lavage de toiture à Chartres' },
    ],
    ctaTitre: 'Votre toiture de Bouglainval retrouve son éclat',
    ctaTexte:
      "Un coup de fil ou un message, et je viens examiner votre couverture. Vous recevez un devis clair — traitement, lavage, protection, gouttières — gratuit et sans engagement.",
  },

  // ──────────────────────────────────────────────────────────── CHARTRES ──
  {
    slug: 'chartres',
    nom: 'Chartres',
    cp: '28000',
    title: 'Nettoyage de toiture à Chartres (28) — Devis en 24 h',
    metaDesc:
      "Renaud Rénov entretient les toitures à Chartres : traitement antimousse, brossage doux, hydrofuge. Artisan couvreur, devis gratuit en 24 h.",
    h1: 'Démoussage et lavage de toiture à Chartres',
    chapo:
      "Mousses sur les tuiles, traînées noires de pollution, ardoises ternies : votre toit à <strong>Chartres</strong> a besoin d'un vrai entretien ? Je suis M.&nbsp;Renaud et, avec mon entreprise de couverture <strong>Renaud Rénov</strong>, j'assure le <strong>nettoyage de toiture</strong> des maisons de ville comme des pavillons — avec les techniques qui respectent chaque matériau.",
    coches: [
      "15 années d'expérience en entretien de toitures",
      'Tuiles, ardoises : techniques adaptées à chaque toit',
      'Applicateur de solutions Dalep',
      'Devis gratuit en 24 h',
    ],
    heroPhoto: {
      src: '/images/photos/toiture-nettoyee-apres-demoussage.webp',
      largeur: 2000,
      hauteur: 1500,
      alt: 'Toiture débarrassée de ses mousses après nettoyage par Renaud Rénov à Chartres',
    },
    sectionA: {
      h2: 'En ville aussi, les toits s’encrassent',
      paragraphes: [
        "À Chartres, l'ennemi des couvertures n'est pas seulement la mousse : c'est aussi la pollution, qui dépose sur les tuiles et les ardoises ces traînées sombres impossibles à ignorer depuis la rue. L'encrassement urbain retient l'humidité exactement comme les végétaux, et le matériau en souffre de la même façon : porosité qui s'ouvre, gel qui fissure, étanchéité qui recule.",
        "Les maisons de ville posent en plus leurs contraintes propres : accès par cour étroite, mitoyenneté, versants raides. J'en tiens compte dès le devis — matériel adapté, protection des abords, coordination avec vos voisins si l'accès l'exige.",
        "Sur les ardoises, fréquentes dans le centre, la règle est stricte : jets doux, appuis calculés, jamais de pression qui feuillette la surface. C'est le métier de couvreur qui parle, pas celui de nettoyeur.",
      ],
    },
    sectionB: {
      h2: 'Nettoyer, puis protéger : le duo gagnant',
      paragraphes: [
        "Un toit chartrain nettoyé sans protection se recharge vite — pollution et spores ne prennent pas de vacances. Je termine donc mes chantiers par un traitement rémanent, et je conseille souvent un <a href=\"/traitement-hydrofuge-28/\">hydrofuge de toiture</a> : la pluie perle, les dépôts n'accrochent plus, et la couverture garde son aspect des années.",
        "L'hydrofuge que j'applique préserve la microporosité du matériau : le toit respire, condition essentielle sur les couvertures anciennes. Et il est chiffré à part — vous choisissez librement, sur la base du devis.",
      ],
      photo: {
        src: '/images/photos/hydrofuge-toiture.webp',
        largeur: 1200,
        hauteur: 1600,
        alt: "Application d'une protection hydrofuge sur toiture à Chartres",
      },
    },
    sectionC: {
      h2: 'Un couvreur sur votre toit, pas un simple laveur',
      paragraphes: [
        "Le nettoyage est le moment idéal pour ausculter une couverture : je profite de chaque chantier à Chartres pour vérifier tuiles, crochets d'ardoise, solins et abords de cheminée. Ce qui mérite une reprise vous est signalé photos à l'appui — et je peux le faire dans la foulée, c'est mon métier de <a href=\"/villes/chartres/\">couvreur à Chartres</a>.",
        "Vous évitez ainsi le piège du toit propre mais malade : l'esthétique est revenue, l'infiltration continue. Chez moi, propreté et étanchéité se traitent ensemble.",
      ],
    },
    etapesH2: 'Comment je procède chez vous',
    etapes: [
      {
        titre: 'Visite et devis',
        texte:
          "J'examine votre couverture et ses accès, puis vous recevez sous 24 h un devis détaillé poste par poste.",
      },
      {
        titre: 'Traitement curatif',
        texte:
          "Biocide professionnel appliqué au dosage prescrit : mousses, lichens et algues sèchent en profondeur.",
      },
      {
        titre: 'Lavage sur mesure',
        texte:
          "Basse pression sur tuile, douceur maximale sur ardoise, brossage manuel des zones sensibles.",
      },
      {
        titre: 'Protection longue durée',
        texte:
          "Rémanent anti-repousse et hydrofuge en option : votre toit reste net malgré la pollution urbaine.",
      },
    ],
    prochesH2: 'J’interviens aussi autour de Chartres',
    prochesIntro:
      "De l'agglomération aux villages voisins, même exigence — détails et tarifs sur ma page <a href=\"/nettoyage-toiture-28/\">nettoyage et démoussage de toiture en Eure-et-Loir</a> :",
    proches: [
      { slug: 'bouglainval', ancre: 'Démoussage de toiture à Bouglainval' },
      { slug: 'saint-piat', ancre: 'Lavage de toiture à Saint-Piat' },
      { slug: 'gallardon', ancre: 'Nettoyage de toiture à Gallardon' },
    ],
    ctaTitre: 'Votre toiture à Chartres, propre et saine',
    ctaTexte:
      "Maison de ville ou pavillon, décrivez-moi votre toit et ses accès : je viens l'examiner et vous recevez un devis précis sous 24 h. Gratuit, détaillé, sans engagement.",
  },
  // ─────────────────────────────────────────────────────────────── DREUX ──
  {
    slug: 'dreux',
    nom: 'Dreux',
    cp: '28100',
    title: 'Démoussage de toiture à Dreux (28100) — Renaud Rénov',
    metaDesc:
      "Mousses et traces noires sur votre toit à Dreux ? Lavage basse pression et traitement des couvertures, tuiles et ardoises. Devis gratuit.",
    h1: 'Nettoyage de toiture à Dreux',
    chapo:
      "Votre couverture à <strong>Dreux</strong> se couvre de plaques vertes, des traces sombres coulent le long des versants, et vous voulez un résultat durable, pas un coup d'éclat ? Je suis M.&nbsp;Renaud : avec <strong>Renaud Rénov</strong>, entreprise de couverture du 28, je pratique un <strong>démoussage</strong> complet — traitement, lavage doux, protection.",
    coches: [
      'Démoussage professionnel des toitures',
      'Antimousses appliqués selon les prescriptions fabricant',
      'Applicateur de solutions Dalep',
      'Devis gratuit et sans engagement',
    ],
    heroPhoto: {
      src: '/images/photos/demoussage-28.webp',
      largeur: 2000,
      hauteur: 1500,
      alt: 'Toiture en tuiles nettoyée par Renaud Rénov à Dreux',
    },
    sectionA: {
      h2: 'Repérer à temps une couverture qui se dégrade',
      paragraphes: [
        "Le premier signe se voit du trottoir : le versant nord verdit pendant que le sud reste net. Puis viennent les traînées sombres sous les rives, les touffes dans les noues, et — le signal le plus sérieux — des débris de terre cuite dans les gouttières, preuve que les tuiles commencent à s'effriter sous l'effet du gel.",
        "À Dreux, entre quartiers pavillonnaires et maisons anciennes, je rencontre tous les stades de cette dégradation. La règle est toujours la même : plus on intervient tôt, moins l'intervention coûte. Un nettoyage au stade des plaques vertes, c'est une demi-journée ; attendre les tuiles gélives, c'est un chantier de remplacement.",
        "Le doute ne coûte rien : je viens examiner votre toit gratuitement, et je vous dis où il en est — franchement, photos à l'appui.",
      ],
    },
    sectionB: {
      h2: 'Basse pression, brossage : les tuiles n’aiment que ça',
      paragraphes: [
        "La haute pression est bannie de mes chantiers : elle décape le calcin des tuiles, feuillette l'ardoise et pousse l'eau sous les rangs. Mon protocole inverse la logique : c'est le traitement biocide qui fait le travail — il dessèche les végétaux jusqu'à la racine en deux à trois jours — et le lavage basse pression n'a plus qu'à évacuer, sans jamais forcer.",
        "Sur les zones fragiles, je termine à la brosse, à la main. C'est la garantie d'un toit propre ET intact — la seule combinaison qui vaille.",
      ],
      photo: {
        src: '/images/photos/toiture-avant-demoussage.webp',
        largeur: 1200,
        hauteur: 1600,
        alt: 'Toiture moussue avant intervention de nettoyage à Dreux',
      },
    },
    sectionC: {
      h2: 'La protection qui rentabilise le nettoyage',
      paragraphes: [
        "Nettoyer sans protéger, c'est louer la propreté au lieu de l'acheter. Après le lavage, j'applique un traitement rémanent qui retarde la réinstallation des spores ; et pour les couvertures poreuses, je conseille le <a href=\"/traitement-hydrofuge-28/\">traitement hydrofuge</a>, qui fait perler l'eau et garde le matériau au sec — le terrain des mousses disparaît.",
        "Votre <a href=\"/villes/dreux/\">couvreur à Dreux</a> chiffre chaque protection à part dans le devis : vous voyez ce que chacune coûte, ce qu'elle apporte, et vous décidez librement.",
      ],
    },
    etapesH2: 'Mon protocole en quatre étapes',
    etapes: [
      {
        titre: 'Inspection complète',
        texte:
          "Rangs, faîtage, solins, gouttières : je fais l'état des lieux et je signale toute reprise nécessaire avant de nettoyer.",
      },
      {
        titre: 'Biocide professionnel',
        texte:
          "Le traitement pénètre et dessèche mousses, algues et lichens en profondeur, sans produits chlorés.",
      },
      {
        titre: 'Lavage en douceur',
        texte:
          "Basse pression dans le sens de l'écoulement, brossage manuel des points délicats, gouttières curées pour finir.",
      },
      {
        titre: 'Protection appliquée',
        texte:
          "Rémanent anti-repousse, hydrofuge en option sur support sec : le résultat tient des années, pas des mois.",
      },
    ],
    prochesH2: 'Le nettoyage de toiture autour de Dreux',
    prochesIntro:
      "J'interviens dans tout le nord du département — protocole et conseils sur ma page <a href=\"/nettoyage-toiture-28/\">démoussage de toiture en Eure-et-Loir</a> :",
    proches: [
      { slug: 'nogent-le-roi', ancre: 'Démoussage de toiture à Nogent-le-Roi' },
      { slug: 'houdan', ancre: 'Nettoyage de toiture à Houdan' },
      { slug: 'villiers-le-morhier', ancre: 'Nettoyage de toit à Villiers-le-Morhier' },
    ],
    ctaTitre: 'Faites nettoyer votre toiture à Dreux',
    ctaTexte:
      "Décrivez-moi l'état de votre couverture, et je viens la vérifier : diagnostic franc, devis détaillé — traitement, lavage, protection — gratuit et sans engagement.",
  },

  // ────────────────────────────────────── AUNEAU-BLEURY-SAINT-SYMPHORIEN ──
  {
    slug: 'auneau',
    nom: 'Auneau-Bleury-Saint-Symphorien',
    cp: '28700',
    title: 'Nettoyage de toiture à Auneau (28700) — Devis gratuit',
    metaDesc:
      "Votre toiture s'encrasse à Auneau ? Démoussage doux, antimousse professionnel et hydrofuge par un couvreur d'Eure-et-Loir. Devis gratuit.",
    h1: 'Démoussage de toiture à Auneau-Bleury-Saint-Symphorien',
    chapo:
      "Un toit qui verdit à <strong>Auneau</strong>, des tuiles qui perdent leur couleur, et l'envie d'un travail sérieux plutôt que d'un coup de propre éphémère ? Je suis M.&nbsp;Renaud et, avec mon entreprise de couverture <strong>Renaud Rénov</strong>, je mène le <strong>nettoyage de toiture</strong> comme un chantier de couvreur : diagnostic, traitement, lavage doux, protection.",
    coches: [
      "15 années d'expérience en entretien de toitures",
      'Lavage basse pression et brossage manuel',
      'Applicateur de solutions Dalep',
      'Devis gratuit et sans engagement',
    ],
    heroPhoto: {
      src: '/images/photos/nettoyage-toiture-resultat.webp',
      largeur: 1600,
      hauteur: 1200,
      alt: 'Toiture propre après démoussage réalisé par Renaud Rénov à Auneau',
    },
    sectionA: {
      h2: 'Pourquoi les mousses raccourcissent la vie de votre toit',
      paragraphes: [
        "Une toiture couverte de mousses est une toiture qui ne sèche jamais : chaque coussin végétal retient l'eau au contact du matériau, la porosité s'ouvre, et le gel de l'hiver fait éclater la terre cuite de l'intérieur. Les tuiles deviennent gélives, cassent, et l'étanchéité recule année après année.",
        "Sur les toits d'Auneau-Bleury-Saint-Symphorien, ce processus est d'autant plus sournois qu'il est silencieux : rien ne fuit, rien n'alerte, jusqu'au jour où les dégâts sont installés. L'entretien régulier est le seul moyen d'arrêter cette mécanique — et il coûte sans comparaison moins cher qu'un remplacement de couverture.",
        "Un toit propre, c'est aussi des combles mieux isolés : l'humidité entretenue par les végétaux au-dessus de l'isolant finit par en dégrader les performances. Nettoyer, c'est protéger la maison entière.",
      ],
    },
    sectionB: {
      h2: 'Un entretien à planifier, pas à subir',
      paragraphes: [
        "La bonne fréquence dépend de votre environnement : toit sous les arbres, contrôle tous les quatre à cinq ans ; toit dégagé, tous les huit à dix ans. Entre deux, un coup d'œil aux gouttières suffit — quand elles verdissent, la couverture aussi.",
        "Côté calendrier, j'interviens par temps sec, hors gel : les biocides ont besoin de 48 à 72 heures d'action sur support sec pour tuer les végétaux jusqu'à la racine. Du printemps au début de l'automne, les conditions sont réunies — et c'est le bon moment pour programmer votre chantier à Auneau.",
      ],
      photo: {
        src: '/images/photos/tuiles-ternes-avant-hydrofuge-28.webp',
        largeur: 2000,
        hauteur: 1500,
        alt: 'Tuiles ternies et encrassées avant nettoyage à Auneau',
      },
    },
    sectionC: {
      h2: 'Gouttières comprises, toujours',
      paragraphes: [
        "Un nettoyage de toit qui laisse les gouttières pleines est un travail à moitié fait : les débris du lavage s'y accumulent, l'eau déborde, et les façades trinquent. Je cure donc systématiquement gouttières, naissances et descentes en fin de chantier, et je vérifie fixations et pentes d'écoulement — une <a href=\"/pose-gouttiere-28/\">gouttière en bon état</a> protège murs et fondations.",
        "Et comme je suis <a href=\"/villes/auneau/\">couvreur à Auneau</a> avant d'être laveur de toits, je profite du passage pour contrôler solins et rives : ce qui mérite une reprise vous est signalé, chiffré, et peut être fait dans la foulée.",
      ],
    },
    etapesH2: 'Le déroulé de mon intervention',
    etapes: [
      {
        titre: 'État des lieux',
        texte:
          "J'examine votre couverture et je vous montre son état réel, photos à l'appui, avant d'établir le devis.",
      },
      {
        titre: 'Traitement en profondeur',
        texte:
          "L'antimousse professionnel agit plusieurs jours et dessèche les végétaux jusqu'à la racine.",
      },
      {
        titre: 'Lavage maîtrisé',
        texte:
          "Basse pression du faîtage vers l'égout, brossage manuel où il faut, gouttières curées pour terminer.",
      },
      {
        titre: 'Protection durable',
        texte:
          "Traitement rémanent, hydrofuge en option : votre toit reste propre et au sec pour des années.",
      },
    ],
    prochesH2: 'Autour d’Auneau, le même métier, la même exigence',
    prochesIntro:
      "Je me déplace gratuitement dans tout le secteur — ma page <a href=\"/nettoyage-toiture-28/\">lavage et démoussage de toiture dans le 28</a> détaille le protocole :",
    proches: [
      { slug: 'gallardon', ancre: 'Nettoyage de toiture à Gallardon' },
      { slug: 'chartres', ancre: 'Démoussage de toiture à Chartres' },
      { slug: 'epernon', ancre: 'Lavage de toiture à Épernon' },
    ],
    ctaTitre: 'Votre toit à Auneau mérite mieux que la mousse',
    ctaTexte:
      "Contactez-moi : je viens examiner votre couverture, et vous recevez un devis complet — traitement, nettoyage, protection, gouttières — gratuit et sans engagement.",
  },

  // ───────────────────────────────────────────────────────── RAMBOUILLET ──
  {
    slug: 'rambouillet',
    nom: 'Rambouillet',
    cp: '78120',
    title: 'Démoussage de toiture à Rambouillet (78) — Devis gratuit',
    metaDesc:
      "Renaud Rénov intervient à Rambouillet pour laver et traiter votre toit : mousses, lichens, traces noires. Couvreur artisan, devis gratuit.",
    h1: 'Nettoyage et traitement de toiture à Rambouillet',
    chapo:
      "Sous les arbres de <strong>Rambouillet</strong>, les toitures verdissent vite : mousses épaisses, lichens, gouttières pleines. Je suis M.&nbsp;Renaud, artisan couvreur, et mon entreprise <strong>Renaud Rénov</strong> — installée à vingt minutes, en limite des Yvelines — remet votre toit au propre avec un <strong>démoussage</strong> complet et respectueux des matériaux.",
    coches: [
      "15 années d'expérience en entretien de toitures",
      'Traitements professionnels longue durée',
      'Applicateur de solutions Dalep',
      'Devis gratuit et sans engagement',
    ],
    heroPhoto: {
      src: '/images/photos/nettoyage-demoussage-toiture.webp',
      largeur: 1600,
      hauteur: 1200,
      alt: 'Nettoyage de toiture en cours par Renaud Rénov à Rambouillet',
    },
    sectionA: {
      h2: 'L’hydrofuge, indispensable sous les arbres',
      paragraphes: [
        "Un environnement boisé est une bénédiction pour la maison et une épreuve pour son toit : ombre portée qui ralentit le séchage, feuilles qui nourrissent les mousses, spores en abondance. À Rambouillet, un toit nettoyé mais non protégé peut reverdir en deux saisons — c'est pourquoi je conseille presque systématiquement de finir par un <a href=\"/traitement-hydrofuge-28/\">traitement hydrofuge</a>.",
        "Appliqué sur support sec, l'hydrofuge imprègne la tuile sur quelques millimètres : l'eau perle et file vers les gouttières au lieu de stagner, et les végétaux perdent l'humidité dont ils vivent. La microporosité du matériau reste ouverte — le toit respire, condition essentielle sur les couvertures anciennes.",
        "Le duo rémanent + hydrofuge, c'est la différence entre un entretien à refaire tous les trois ans et une couverture tranquille pour longtemps.",
      ],
    },
    sectionB: {
      h2: 'Une méthode douce, exigée par vos tuiles',
      paragraphes: [
        "Jamais de haute pression sur mes chantiers : elle décape la surface des tuiles et pousse l'eau sous les rangs. Je traite d'abord — le biocide professionnel dessèche mousses et lichens en deux à trois jours — puis je lave en basse pression, 2 à 3 bars, dans le sens de l'écoulement, avec brossage manuel sur les zones délicates.",
        "Les gouttières, mises à rude épreuve par les arbres de Rambouillet, sont curées en fin de chantier : débris évacués, fixations et pentes vérifiées, crapaudines posées si besoin.",
      ],
      photo: {
        src: '/images/photos/artisan-sur-toit.webp',
        largeur: 1200,
        hauteur: 1600,
        alt: 'Artisan couvreur au travail sur une toiture à Rambouillet',
      },
    },
    sectionC: {
      h2: 'Les signes qui ne trompent pas',
      paragraphes: [
        "Plaques vertes qui s'étendent d'année en année, touffes dans les noues, traînées sombres sous les rives, débris végétaux dans les gouttières à chaque automne : votre toit de Rambouillet raconte son encrassement. Le laisser faire, c'est laisser l'humidité travailler le matériau jusqu'aux tuiles gélives — celles qu'on ne nettoie plus, qu'on remplace.",
        "Au moindre signe, faites vérifier : je me déplace gratuitement, j'examine la couverture et je vous dis ce qui s'impose — et ce qui peut attendre. Votre <a href=\"/villes/rambouillet/\">couvreur à Rambouillet</a> vous doit cette franchise.",
      ],
    },
    etapesH2: 'Quatre étapes, un résultat durable',
    etapes: [
      {
        titre: 'Diagnostic de la couverture',
        texte:
          "J'évalue l'encrassement, l'état des tuiles et les accès, puis je vous remets un devis détaillé et gratuit.",
      },
      {
        titre: 'Traitement biocide',
        texte:
          "Application professionnelle, temps d'action respecté : les végétaux sèchent jusqu'à la racine.",
      },
      {
        titre: 'Lavage basse pression',
        texte:
          "Rinçage doux et brossage manuel : le toit ressort propre, le matériau intact, les gouttières curées.",
      },
      {
        titre: 'Double protection',
        texte:
          "Rémanent anti-repousse puis hydrofuge en option — la parade idéale pour un toit sous les arbres.",
      },
    ],
    prochesH2: 'Le nettoyage de toiture autour de Rambouillet',
    prochesIntro:
      "Des Yvelines aux communes voisines d'Eure-et-Loir, même protocole — détaillé sur ma page <a href=\"/nettoyage-toiture-28/\">nettoyage de toiture en Eure-et-Loir</a> :",
    proches: [
      { slug: 'epernon', ancre: 'Démoussage de toiture à Épernon' },
      { slug: 'houdan', ancre: 'Démoussage de toit à Houdan' },
      { slug: 'gallardon', ancre: 'Lavage de toiture à Gallardon' },
    ],
    ctaTitre: 'Un toit à démousser à Rambouillet ?',
    ctaTexte:
      "Décrivez-moi votre toiture et son environnement, et je viens l'examiner. Devis complet — traitement, lavage, hydrofuge, gouttières — gratuit et sans engagement.",
  },

  // ────────────────────────────────────────────────────────────── HOUDAN ──
  {
    slug: 'houdan',
    nom: 'Houdan',
    cp: '78550',
    title: 'Nettoyage de toiture à Houdan (78550) — Renaud Rénov',
    metaDesc:
      "Toit moussu ou noirci à Houdan ? Brossage manuel, lavage basse pression et traitement antimousse longue durée. Devis gratuit sous 24 h.",
    h1: 'Démoussage de toit à Houdan',
    chapo:
      "Votre couverture à <strong>Houdan</strong> s'est couverte de mousses, les tuiles ont noirci, et vous voulez un artisan qui traite le problème à la racine ? Je suis M.&nbsp;Renaud : avec <strong>Renaud Rénov</strong>, entreprise de couverture installée en limite des Yvelines, le <strong>nettoyage de toiture</strong> se fait dans les règles — et le résultat dure.",
    coches: [
      'Démoussage professionnel des toitures',
      'Brossage manuel des couvertures anciennes',
      'Applicateur de solutions Dalep',
      'Devis gratuit sous 24 h',
    ],
    heroPhoto: {
      src: '/images/photos/demoussage-toiture-apres-eure-et-loir.webp',
      largeur: 2000,
      hauteur: 1500,
      alt: 'Toiture en tuiles nettoyée et démoussée par Renaud Rénov à Houdan',
    },
    sectionA: {
      h2: 'Ce qui se joue sous la mousse de votre toit',
      paragraphes: [
        "La mousse n'est pas un problème esthétique : c'est un réservoir d'eau posé sur un matériau poreux. La terre cuite boit, le gel dilate, la tuile éclate — et une couverture qui aurait duré des décennies part en réfection anticipée. Les maisons anciennes de Houdan, avec leurs tuiles plates traditionnelles, sont les premières concernées : leur calcin de surface, une fois attaqué, ne se reconstitue pas.",
        "S'ajoute l'effet sur la maison : combles humides, isolation qui perd en efficacité, gouttières engorgées qui débordent sur les façades. Un toit encrassé coûte, même sans fuite visible.",
        "La parade est simple et éprouvée : traiter, laver en douceur, protéger. C'est tout mon protocole — et il tient en une journée pour la plupart des pavillons.",
      ],
    },
    sectionB: {
      h2: 'Après le lavage, je verrouille le résultat',
      paragraphes: [
        "Le nettoyage rend le toit propre ; le traitement le garde propre. J'applique d'abord un rémanent anti-repousse qui reste actif sur la couverture et retarde la réinstallation des spores. Puis, en option, un <a href=\"/traitement-hydrofuge-28/\">hydrofuge de toiture</a> : l'eau perle, le matériau reste sec, et les mousses perdent leur terrain.",
        "Chaque protection est chiffrée séparément dans le devis, avec sa durée d'efficacité : vous décidez, en connaissance de cause, sans option imposée.",
      ],
      photo: {
        src: '/images/photos/hydrofuge-toiture-resultat-eure-et-loir.webp',
        largeur: 2000,
        hauteur: 1500,
        alt: 'Toiture protégée par un traitement hydrofuge après nettoyage à Houdan',
      },
    },
    sectionC: {
      h2: 'Quand programmer l’entretien de votre couverture ?',
      paragraphes: [
        "À Houdan, je conseille un contrôle tous les quatre à cinq ans pour les toits ombragés ou entourés d'arbres, et tous les huit à dix ans pour les couvertures bien dégagées. Le meilleur indicateur reste vos gouttières : quand des débris verts s'y accumulent, la colonisation est en route.",
        "J'interviens par temps sec, du printemps au début de l'automne — les biocides ont besoin de 48 à 72 heures d'action sur support sec. Et comme je suis <a href=\"/villes/houdan/\">couvreur à Houdan</a>, chaque nettoyage s'accompagne d'un contrôle des tuiles, solins et rives : ce qui mérite une reprise est signalé et peut être fait dans la foulée.",
      ],
    },
    etapesH2: "Mon intervention, étape par étape",
    etapes: [
      {
        titre: 'Examen du toit',
        texte:
          "Matériau, pente, encrassement, points singuliers : je fonde le devis sur ce que je constate, pas sur une grille.",
      },
      {
        titre: 'Antimousse professionnel',
        texte:
          "Le biocide agit deux à trois jours et dessèche mousses et lichens jusqu'à la racine, sans chlore.",
      },
      {
        titre: 'Lavage et brossage',
        texte:
          "Basse pression dans le sens de l'écoulement, brosse sur les tuiles anciennes, gouttières curées en fin de passe.",
      },
      {
        titre: 'Protection longue durée',
        texte:
          "Rémanent anti-repousse, hydrofuge en option : le résultat se compte en années.",
      },
    ],
    prochesH2: 'Autour de Houdan, le même protocole',
    prochesIntro:
      "Des Yvelines au nord de l'Eure-et-Loir, je me déplace gratuitement — le protocole complet est sur ma page <a href=\"/nettoyage-toiture-28/\">démoussage de toiture dans le 28</a> :",
    proches: [
      { slug: 'dreux', ancre: 'Nettoyage de toiture à Dreux' },
      { slug: 'rambouillet', ancre: 'Nettoyage de toiture à Rambouillet' },
      { slug: 'nogent-le-roi', ancre: 'Lavage de toiture à Nogent-le-Roi' },
    ],
    ctaTitre: 'Faites démousser votre toit à Houdan',
    ctaTexte:
      "Un message avec une photo de votre toiture suffit pour commencer : je viens l'examiner, et vous recevez sous 24 h un devis détaillé — traitement, lavage, protection — gratuit et sans engagement.",
  },
];

export function villeNettoyageParSlug(slug: string): VilleNettoyage | undefined {
  return VILLES_NETTOYAGE.find((v) => v.slug === slug);
}
