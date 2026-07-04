// ─────────────────────────────────────────────────────────────────────────
// Contenu ÉDITORIAL par commune pour src/pages/villes/[slug].astro.
//
// RÈGLE (modèle Villiers) : on PART DU BESOIN CLIENT, on reste FOCALISÉ SUR
// LA VILLE. Jamais « et alentours / environs » dans le H1, jamais de storytelling
// touristique (monuments, géo) en accroche, jamais de mention d'une autre ville
// (le siège Villiers) sur la page d'une commune. La seule référence au patrimoine
// est FONCTIONNELLE et CLIENT-FIRST : dans la note d'urbanisme (« si votre maison
// est proche d'un monument protégé → avis ABF »).
//
// heroP1 et servicesP1 contiennent du HTML (mots-clés en <strong>) : rendus
// via set:html dans le template.
//
// Villiers-le-Morhier et Maintenon ont leurs fichiers .astro dédiés.
// ─────────────────────────────────────────────────────────────────────────

export interface Marque {
  nom: string;
  url: string;
  logo: string;
  alt: string;
}

export interface VilleContenu {
  metaDesc: string;
  logos?: Marque[]; // jeu de logos spécifique à la commune (sinon 4 fabricants par défaut)
  heroP1: string; // accroche = besoin client (HTML, mots-clés en gras)
  servicesP1: string; // intro services = ce que je fais pour vous (HTML)
  servicesP2i: 0 | 1 | 2; // variante « matériaux » (factuel, rotation)
  servicesP3i: 0 | 1; // variante « devis/décennale » (rotation)
  cardSet: 0 | 1 | 2; // jeu de descriptions de cards
  regVariant: 0 | 1 | 2; // variante paragraphe urbanisme (déclaration/permis)
  urbanismeNote: string; // note ABF client-first, propre à la commune
  mairieAdresse: string;
  mairieSite: string;
  avisOrdre: number;
}

export const VILLES_CONTENU: Record<string, VilleContenu> = {
  'nogent-le-roi': {
    metaDesc:
      "Couvreur à Nogent-le-Roi : démoussage, réparation, rénovation de toiture et zinguerie. Artisan familial, intervention rapide, devis gratuit et sans engagement.",
    heroP1:
      "Vous êtes à la recherche d'un <strong>artisan couvreur à Nogent-le-Roi</strong> ? Votre toit se couvre de <strong>mousses</strong>, une tuile a cédé, ou vous envisagez de <strong>refaire une toiture</strong> fatiguée ? Je réponds à chacun de ces besoins.",
    servicesP1:
      "À Nogent-le-Roi, je prends en charge <strong>tous vos travaux de toiture</strong> : entretien, nettoyage, réparation, rénovation et couverture neuve, selon votre besoin.",
    servicesP2i: 0,
    servicesP3i: 0,
    cardSet: 0,
    regVariant: 0,
    urbanismeNote:
      "Si votre maison se trouve près d'un bâtiment protégé du centre ancien, vos travaux de couverture peuvent demander l'avis de l'Architecte des Bâtiments de France. Je vous conseille et vous fournis les éléments techniques utiles à votre dossier ; la mairie instruit votre demande.",
    mairieAdresse: '1 Rue Prte Chartraine',
    mairieSite: 'http://www.nogentleroi.fr/',
    avisOrdre: 2,
  },
  epernon: {
    metaDesc:
      "Démoussage, réparation et réfection de toiture, zinguerie à Épernon. Artisan couvreur familial, intervention rapide, devis gratuit et sans engagement.",
    logos: [
      { nom: 'Point P Épernon', url: 'https://www.pointp.fr/infos-agence/epernon-point-p-1124', logo: '/images/marques/logo-point-p.webp', alt: 'Point P Épernon – distributeur de matériaux de couverture' },
      { nom: 'Dalep', url: 'https://www.dalep.com/', logo: '/images/marques/logo-dalep.webp', alt: 'Dalep – traitements hydrofuges et anti-mousse pour toiture' },
      { nom: 'Monier', url: 'https://www.monier.fr/', logo: '/images/marques/logo-monier.webp', alt: 'Monier – tuiles en terre cuite et béton pour la couverture' },
      { nom: 'Edilians', url: 'https://www.edilians.com/', logo: '/images/marques/logo-edilians.webp', alt: 'Edilians – tuiles en terre cuite' },
    ],
    heroP1:
      "Besoin d'un <strong>couvreur à Épernon</strong> ? <strong>Démoussage</strong> d'un toit encrassé, <strong>réparation</strong> après une fuite, remplacement d'une couverture vieillissante : j'interviens pour tous vos travaux de toiture.",
    servicesP1:
      "Que votre toit à Épernon demande un simple entretien, une <strong>réparation</strong> ou une <strong>réfection complète</strong>, j'adapte mon intervention à son état et à vos attentes.",
    servicesP2i: 1,
    servicesP3i: 1,
    cardSet: 1,
    regVariant: 1,
    urbanismeNote:
      "Si votre maison se situe dans le centre ancien d'Épernon, votre toit peut être en secteur protégé et l'avis de l'Architecte des Bâtiments de France être requis. Mon rôle est de vous conseiller et de préparer avec vous les informations techniques ; l'autorisation se demande en mairie.",
    mairieAdresse: '8 Rue du Général Leclerc',
    mairieSite: 'https://www.ville-epernon.fr/',
    avisOrdre: 5,
  },
  hanches: {
    metaDesc:
      "Entretien, démoussage et réparation de toiture, zinguerie et gouttières à Hanches. Couvreur familial, déplacement et devis gratuits, sans engagement.",
    heroP1:
      "Vous avez un problème de <strong>toiture à Hanches</strong> ? <strong>Mousses et lichens</strong>, tuiles déplacées, <strong>infiltration</strong> ou toit à rénover : je suis là pour y répondre.",
    servicesP1:
      "À Hanches, j'interviens sur votre toiture pour l'<strong>entretenir, la réparer ou la rénover</strong>, quel qu'en soit le matériau.",
    servicesP2i: 2,
    servicesP3i: 0,
    cardSet: 2,
    regVariant: 2,
    urbanismeNote:
      "Pour la plupart des maisons de Hanches, une déclaration préalable suffit dès que l'aspect du toit change. Je vous accompagne avec les précisions techniques (matériaux, teintes) nécessaires à votre déclaration, que vous déposez ensuite en mairie.",
    mairieAdresse: '30 Rue de la Barre',
    mairieSite: 'http://www.ville-hanches.fr/',
    avisOrdre: 8,
  },
  gallardon: {
    metaDesc:
      "Nettoyage, réparation et rénovation de toiture, zinguerie à Gallardon. Artisan couvreur familial, intervention soignée et devis gratuit.",
    heroP1:
      "Vous recherchez un <strong>couvreur à Gallardon</strong> ? Que votre toit doive être <strong>nettoyé</strong>, <strong>réparé</strong> après une fuite ou entièrement <strong>refait</strong>, je m'occupe de votre toiture du diagnostic à la finition.",
    servicesP1:
      "À Gallardon, je réponds à <strong>tous les besoins de toiture</strong>, du démoussage ponctuel à la réfection complète.",
    servicesP2i: 1,
    servicesP3i: 1,
    cardSet: 0,
    regVariant: 1,
    urbanismeNote:
      "Si votre bien est proche du bourg patrimonial de Gallardon, vos travaux peuvent relever de l'avis de l'Architecte des Bâtiments de France. Je vous conseille et prépare avec vous les éléments techniques ; la mairie délivre l'autorisation.",
    mairieAdresse: '1 Pl. du Jeu de Paume',
    mairieSite: 'https://www.ville-gallardon.fr/',
    avisOrdre: 11,
  },
  pierres: {
    metaDesc:
      "Démoussage, réparation et rénovation de toiture, zinguerie à Pierres. Couvreur familial, intervention rapide, devis gratuit et sans engagement.",
    heroP1:
      "Un toit à <strong>entretenir, réparer ou rénover à Pierres</strong> ? <strong>Mousses</strong>, tuiles cassées, fuite ou couverture ancienne : quel que soit votre besoin, je vous accompagne.",
    servicesP1:
      "À Pierres, je prends en charge l'<strong>entretien, la réparation et la rénovation</strong> de votre toit, selon ce qu'il réclame.",
    servicesP2i: 2,
    servicesP3i: 0,
    cardSet: 1,
    regVariant: 2,
    urbanismeNote:
      "Selon l'emplacement de votre maison à Pierres, une déclaration préalable — parfois un avis complémentaire — encadre les travaux de toiture. Je vous oriente et vous fournis les informations techniques utiles, la mairie instruisant votre demande.",
    mairieAdresse: 'Pl. Jean Moulin',
    mairieSite: 'https://www.mairie-pierres.fr/',
    avisOrdre: 14,
  },
  'saint-piat': {
    metaDesc:
      "Entretien, réparation et réfection de toiture, zinguerie à Saint-Piat. Artisan couvreur familial, déplacement et devis gratuits, sans engagement.",
    heroP1:
      "Vous cherchez un <strong>artisan couvreur à Saint-Piat</strong> ? <strong>Nettoyage</strong> d'un toit envahi par la mousse, <strong>réparation</strong> d'une fuite, réfection d'une vieille toiture : j'interviens pour vous.",
    servicesP1:
      "À Saint-Piat, j'adapte mon intervention à votre toiture, de l'<strong>entretien courant</strong> à la <strong>réfection complète</strong>.",
    servicesP2i: 0,
    servicesP3i: 1,
    cardSet: 2,
    regVariant: 0,
    urbanismeNote:
      "Dans les secteurs anciens de Saint-Piat, l'aspect des toitures peut être encadré et un avis de l'Architecte des Bâtiments de France demandé. Je vous apporte conseil et éléments techniques (matériaux, teintes) pour votre dossier ; l'autorisation se demande en mairie.",
    mairieAdresse: 'Pl. Marcel Binet',
    mairieSite: 'http://www.saint-piat.fr/',
    avisOrdre: 17,
  },
  bouglainval: {
    metaDesc:
      "Démoussage, réparation et rénovation de toiture, zinguerie et gouttières à Bouglainval. Couvreur familial, devis gratuit sans engagement.",
    heroP1:
      "Besoin d'un <strong>couvreur à Bouglainval</strong> ? <strong>Démoussage</strong>, réparation d'une tuile ou d'une ardoise, <strong>rénovation</strong> d'un toit fatigué : je prends en charge votre toiture.",
    servicesP1:
      "À Bouglainval, je m'occupe de votre toit du <strong>nettoyage à la couverture neuve</strong>, en fonction de votre besoin.",
    servicesP2i: 1,
    servicesP3i: 0,
    cardSet: 0,
    regVariant: 1,
    urbanismeNote:
      "À Bouglainval, une déclaration préalable est généralement demandée dès que l'aspect du toit évolue. Je vous accompagne avec les informations techniques nécessaires, que vous transmettez au service urbanisme de la mairie.",
    mairieAdresse: '17 Rue de Châteauneuf',
    mairieSite: 'http://www.mairie-bouglainval.fr/',
    avisOrdre: 1,
  },
  chartres: {
    metaDesc:
      "Couvreur à Chartres : démoussage, réparation, rénovation de toiture et zinguerie. Artisan familial, intervention rapide, devis gratuit et sans engagement.",
    heroP1:
      "Vous cherchez un <strong>couvreur à Chartres</strong> ? Toit couvert de <strong>mousses</strong>, tuile cassée, fuite à stopper ou <strong>couverture à refaire</strong> : je réponds à chacun de vos besoins.",
    servicesP1:
      "À Chartres, je réponds à <strong>tous vos besoins de toiture</strong>, de l'entretien à la rénovation, quel que soit le type de couverture.",
    servicesP2i: 2,
    servicesP3i: 1,
    cardSet: 1,
    regVariant: 2,
    urbanismeNote:
      "Si votre maison se situe dans le secteur protégé autour de la cathédrale de Chartres, l'avis de l'Architecte des Bâtiments de France est souvent requis pour votre toiture. Je vous conseille et réunis avec vous les éléments techniques du dossier ; la mairie délivre l'autorisation.",
    mairieAdresse: 'Hôtel de Ville, Pl. des Halles',
    mairieSite: 'https://www.chartres.fr/',
    avisOrdre: 4,
  },
  dreux: {
    metaDesc:
      "Démoussage, réparation et réfection de toiture, zinguerie et gouttières à Dreux. Artisan couvreur familial, intervention rapide, devis gratuit sans engagement.",
    logos: [
      { nom: 'Point P Dreux', url: 'https://www.pointp.fr/infos-agence/dreux-point-p-3865', logo: '/images/marques/logo-point-p.webp', alt: 'Point P Dreux – distributeur de matériaux de couverture' },
      { nom: 'Chausson Matériaux Dreux', url: 'https://www.chausson.fr/agences/513', logo: '/images/marques/logo-chausson.svg', alt: 'Chausson Matériaux Dreux – négoce de matériaux de construction et de couverture' },
      { nom: 'Dalep', url: 'https://www.dalep.com/', logo: '/images/marques/logo-dalep.webp', alt: 'Dalep – traitements hydrofuges et anti-mousse pour toiture' },
      { nom: 'Knauf', url: 'https://www.knaufinsulation.fr/', logo: '/images/marques/logo-knauf.webp', alt: 'Knauf – isolation thermique' },
    ],
    heroP1:
      "Un problème de <strong>toiture à Dreux</strong> ? <strong>Mousses et lichens</strong>, infiltration, tuiles abîmées ou toit vieillissant à <strong>rénover</strong> : j'interviens rapidement pour y remédier.",
    servicesP1:
      "À Dreux, je prends en charge <strong>tous les travaux de toiture</strong>, de la réparation d'urgence à la réfection complète.",
    servicesP2i: 0,
    servicesP3i: 0,
    cardSet: 2,
    regVariant: 0,
    urbanismeNote:
      "Si votre maison se trouve près des monuments protégés de Dreux, vos travaux de couverture peuvent demander l'avis de l'Architecte des Bâtiments de France. Je vous oriente et vous fournis les informations techniques utiles, la mairie restant votre interlocuteur.",
    mairieAdresse: '2 Rue de Châteaudun',
    mairieSite: 'http://www.dreux.com/',
    avisOrdre: 7,
  },
  auneau: {
    metaDesc:
      "Nettoyage, réparation et rénovation de toiture, zinguerie à Auneau-Bleury-Saint-Symphorien. Couvreur familial, déplacement et devis gratuits.",
    heroP1:
      "Vous recherchez un <strong>artisan couvreur à Auneau-Bleury-Saint-Symphorien</strong> ? <strong>Nettoyage</strong> d'un toit encrassé, <strong>réparation</strong> après une fuite, réfection d'une toiture ancienne : je m'occupe de votre toit.",
    servicesP1:
      "À Auneau-Bleury-Saint-Symphorien, j'interviens sur votre toiture pour l'<strong>entretenir, la réparer ou la refaire</strong> selon vos besoins.",
    servicesP2i: 1,
    servicesP3i: 1,
    cardSet: 0,
    regVariant: 1,
    urbanismeNote:
      "Si votre bien est proche d'un secteur protégé d'Auneau-Bleury-Saint-Symphorien, une consultation de l'Architecte des Bâtiments de France peut s'appliquer. Je vous conseille et prépare les éléments techniques ; l'autorisation se traite en mairie.",
    mairieAdresse: '1 Av. Gambetta',
    mairieSite: 'http://www.ville-ab2s.fr/',
    avisOrdre: 10,
  },
  rambouillet: {
    metaDesc:
      "Démoussage, réparation et rénovation de toiture, zinguerie à Rambouillet (78). Artisan couvreur familial, intervention rapide, devis gratuit sans engagement.",
    heroP1:
      "Besoin d'un <strong>couvreur à Rambouillet</strong> ? <strong>Démoussage</strong> d'un toit encrassé, <strong>réparation</strong> après une fuite, <strong>rénovation</strong> d'une couverture ancienne : je suis à votre service.",
    servicesP1:
      "À Rambouillet, j'assure l'<strong>entretien, la réparation et la rénovation</strong> de votre toit, tuiles, ardoises comme zinc.",
    servicesP2i: 2,
    servicesP3i: 0,
    cardSet: 1,
    regVariant: 2,
    urbanismeNote:
      "Si votre maison se situe dans un secteur protégé de Rambouillet, l'avis de l'Architecte des Bâtiments de France peut être requis pour votre toiture. Je vous oriente et vous transmets les informations techniques utiles, la mairie instruisant la demande.",
    mairieAdresse: '2 Pl. de la Libération',
    mairieSite: 'https://rambouillet.fr/',
    avisOrdre: 13,
  },
  houdan: {
    metaDesc:
      "Entretien, réparation et réfection de toiture, zinguerie et gouttières à Houdan (78). Artisan couvreur familial, intervention rapide, devis gratuit sans engagement.",
    heroP1:
      "Vous cherchez un <strong>couvreur à Houdan</strong> ? <strong>Mousses</strong> à retirer, tuile ou ardoise à remplacer, fuite à réparer ou <strong>toit à refaire</strong> : quel que soit votre besoin, je vous réponds.",
    servicesP1:
      "À Houdan, j'adapte chaque intervention à l'état de votre toiture et à votre besoin, du <strong>démoussage à la couverture neuve</strong>.",
    servicesP2i: 0,
    servicesP3i: 1,
    cardSet: 2,
    regVariant: 0,
    urbanismeNote:
      "Si votre maison se trouve dans le centre ancien de Houdan, votre toit peut être en secteur protégé et relever de l'Architecte des Bâtiments de France. Je vous conseille et fournis les éléments techniques nécessaires ; l'autorisation se demande en mairie.",
    mairieAdresse: '69 Grande Rue',
    mairieSite: 'http://www.villehoudan.fr/',
    avisOrdre: 16,
  },
};
