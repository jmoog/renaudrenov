// ─────────────────────────────────────────────────────────────────────────
// Contenu ÉDITORIAL par commune pour src/pages/villes/[slug].astro.
// Réécriture du 14/08/2026 (brief client) :
//
// - h1 : rotation Couvreur / Artisan couvreur / Entreprise de couverture /
//   Couvreur zingueur + ville. JAMAIS de prestation, JAMAIS le département.
// - title : une AUTRE formule de la rotation (≠ h1), + « Devis gratuit » et/ou
//   « Renaud Rénov » quand la longueur le permet (cible 50-60 caractères).
// - metaDesc : même champ lexical, avec en rotation ✓ téléphone, nom de
//   l'artisan, une prestation (démoussage, nettoyage, rénovation, réparation).
// - chapo : problème client → solution Renaud Rénov + énumération de services.
// - coches : 3 éléments par commune, piochés dans le pool du brief.
// - cartes : les 6 services (démoussage / rénovation / façade / réparation /
//   zinguerie / gouttière), ORDRE TOURNANT d'une commune à l'autre, ville
//   utilisée avec mesure. Le chapo porte le lien vers la home (ancres
//   tournantes « couvreur 28 / Eure-et-Loir ») ; le lien hydrofuge vit dans
//   finalParas (décision Joseph 14/08, pas de 7e carte).
//   INTERDIT ABSOLU (toutes pages du site) : « je monte sur le toit » et
//   toutes ses variantes (« je monte, je regarde », « à la perche et aux
//   jumelles », « c'est moi qui monte sur votre toit »). Un couvreur INSPECTE,
//   CONTRÔLE, VÉRIFIE ou EXAMINE la toiture — le reste va de soi.
//   Jamais « interlocuteur unique ».
// - finalParas : 4 paragraphes (~400 mots), expérience + savoir-faire
//   entretien + savoir-faire travaux + matériaux, SANS architecture locale ni
//   quartiers ; le dernier § se termine TOUJOURS par code de l'urbanisme /
//   PLU / POS / déclaration préalable + renvoi au service urbanisme.
//
// Villiers-le-Morhier et Maintenon ont leurs fichiers .astro dédiés.
// ─────────────────────────────────────────────────────────────────────────

export interface Marque {
  nom: string;
  url: string;
  logo: string;
  alt: string;
}

export type CarteType = 'demoussage' | 'renovation' | 'facade' | 'reparation' | 'zinguerie' | 'gouttiere';

export interface CarteVille {
  type: CarteType;
  titre: string;
  texte: string;
}

export interface VilleContenu {
  title: string;
  h1: string;
  metaDesc: string;
  chapo: string; // HTML (marque en <strong>)
  coches: string[]; // 3 éléments
  servicesH2: string;
  cartes: CarteVille[]; // les 6 services, dans l'ordre d'affichage
  ctaTitre: string;
  ctaTexte: string;
  finalH2: string;
  finalParas: string[]; // 4 paragraphes HTML, le dernier finit par l'urbanisme
  mairieAdresse: string;
  mairieSite: string;
  logos?: Marque[]; // jeu de logos spécifique (sinon 4 fabricants par défaut)
  avisOrdre: number;
}

export const VILLES_CONTENU: Record<string, VilleContenu> = {
  'nogent-le-roi': {
    title: 'Entreprise de couverture à Nogent-le-Roi — Devis gratuit',
    h1: 'Couvreur à Nogent-le-Roi',
    metaDesc:
      "Renaud Rénov entretient, répare et rénove vos toitures à Nogent-le-Roi : démoussage, zinguerie, gouttières. ✓ Devis gratuit ✓ 02 34 40 17 61.",
    chapo:
      "Vous avez besoin d'un spécialiste de la toiture à Nogent-le-Roi ? <strong>Renaud Rénov</strong>, <a href=\"/\">artisan couvreur en Eure-et-Loir</a>, est votre professionnel : entretien avec le démoussage et le nettoyage de la toiture, application de traitements hydrofuges, réparation d'infiltration ou remplacement d'une toiture ancienne.",
    coches: ['Entreprise artisanale de couverture', 'Tous matériaux de couverture', 'Garantie décennale'],
    servicesH2: 'Mes services pour votre toiture à Nogent-le-Roi',
    cartes: [
      {
        type: 'demoussage',
        titre: 'Démoussage de toiture à Nogent-le-Roi',
        texte:
          "Le nettoyage d'un toit à Nogent-le-Roi ne s'improvise pas : il faut la bonne technique et le bon produit pour retirer les mousses sans abîmer la couverture. Un travail de professionnel, mené avec méthode.",
      },
      {
        type: 'renovation',
        titre: 'Rénovation et remplacement de toiture',
        texte:
          "M. Renaud maîtrise tous les matériaux de couverture présents à Nogent-le-Roi : tuile de pays, tuile plate, ardoise, et le zinc ou le bac acier lorsque le chantier le demande.",
      },
      {
        type: 'zinguerie',
        titre: 'Zinguerie : noues, solins et chéneaux',
        texte:
          "L'étanchéité d'un toit se joue aux points singuliers : noues, solins de cheminée, chéneaux et habillages de rive. Chaque pièce de zinc est façonnée et posée à la main par un couvreur zingueur de métier.",
      },
      {
        type: 'facade',
        titre: 'Nettoyage de façade',
        texte:
          "Renaud Rénov est le spécialiste de l'entretien des façades en Eure-et-Loir : lavage des murs, application de traitements adaptés à chaque revêtement, pour une maison propre et saine.",
      },
      {
        type: 'reparation',
        titre: 'Réparation de toiture',
        texte:
          "Tuile cassée, fuite, infiltration : j'interviens vite, je recherche l'origine du problème et je peux poser une bâche en urgence. La proximité fait la rapidité — et une toiture remise en bon état.",
      },
      {
        type: 'gouttiere',
        titre: 'Pose et remplacement de gouttières',
        texte:
          "Une gouttière en bon état protège la façade et les fondations de votre maison. Je pose, remplace et raccorde gouttières et descentes en zinc, en aluminium ou en PVC, selon le bâtiment et votre budget.",
      },
    ],
    ctaTitre: 'Votre artisan couvreur à Nogent-le-Roi se déplace chez vous',
    ctaTexte:
      "Un doute sur l'état de votre toit ? M. Renaud vient rapidement l'examiner à Nogent-le-Roi et vous dit ce qu'il en est, sans dramatiser ni minimiser. Quinze années d'expérience dans les travaux de couverture, un savoir-faire d'artisan, et un devis gratuit, clair et détaillé.",
    finalH2: "Faites appel à un couvreur zingueur pour l'entretien de votre toiture",
    finalParas: [
      "Confier sa toiture à un artisan, c'est d'abord confier des années de pratique. Renaud Rénov est une entreprise artisanale et familiale : le métier s'y transmet de père en fils, et chaque chantier mené à Nogent-le-Roi ou dans les communes voisines enrichit une expérience de plus de quinze années. Cette continuité change tout : les gestes sont sûrs, les diagnostics sont posés avec recul, et les solutions proposées sont celles qui durent — pas celles qui se vendent le plus facilement.",
      "L'entretien est le premier savoir-faire du couvreur. Un toit se surveille, se nettoie et se protège à intervalles réguliers : démoussage mené avec la technique adaptée au matériau, <a href=\"/traitement-hydrofuge-28/\">traitement hydrofuge</a> qui freine la repousse des mousses, contrôle des points sensibles — faîtage, solins, gouttières. Bien entretenue, une couverture vieillit lentement et les grosses réparations s'éloignent. C'est un travail de patience et de méthode, où l'expérience évite justement les gestes qui abîment.",
      "Pour les travaux plus lourds, le savoir-faire se mesure à la préparation. Reprendre un pan de couverture, remplacer un toit entier, façonner une noue ou un chéneau, reprendre une charpente affaiblie : chacune de ces interventions demande un diagnostic honnête, un calendrier réaliste et une exécution dans les règles de l'art. À Nogent-le-Roi, je m'engage sur ce que je constate, j'explique ce que je fais, et je ne promets rien que le toit ne puisse tenir.",
      "Cette exigence vaut aussi pour les matériaux. Tuile plate, tuile mécanique, ardoise : chacun a ses règles de pose, de pente et de recouvrement, et les connaître est la condition d'une toiture étanche. Enfin, refaire certains travaux sur une toiture implique de respecter le code de l'urbanisme, notamment le plan local d'urbanisme ou le plan d'occupation des sols : plusieurs types de chantiers exigent une déclaration préalable de travaux. Le service urbanisme de la mairie de Nogent-le-Roi vous indiquera les règles qui s'appliquent à votre maison.",
    ],
    mairieAdresse: '1 rue Porte Chartraine',
    mairieSite: 'http://www.nogentleroi.fr/',
    avisOrdre: 2,
  },

  epernon: {
    title: 'Couvreur zingueur à Épernon — Devis gratuit — Renaud Rénov',
    h1: 'Artisan couvreur à Épernon',
    metaDesc:
      "Besoin d'un professionnel de la toiture à Épernon ? Nettoyage, réparation de fuite et rénovation par M. Renaud. ✓ 02 34 40 17 61 ✓ Devis gratuit.",
    logos: [
      { nom: 'Point P Épernon', url: 'https://www.pointp.fr/infos-agence/epernon-point-p-1124', logo: '/images/marques/logo-point-p.webp', alt: 'Point P Épernon – distributeur de matériaux de couverture' },
      { nom: 'Dalep', url: 'https://www.dalep.com/', logo: '/images/marques/logo-dalep.webp', alt: 'Dalep – traitements hydrofuges et anti-mousse pour toiture' },
      { nom: 'Monier', url: 'https://www.monier.fr/', logo: '/images/marques/logo-monier.webp', alt: 'Monier – tuiles en terre cuite et béton pour la couverture' },
      { nom: 'Edilians', url: 'https://www.edilians.com/', logo: '/images/marques/logo-edilians.webp', alt: 'Edilians – tuiles en terre cuite' },
    ],
    chapo:
      "Il vous faut un spécialiste de la toiture à Épernon ? <strong>Renaud Rénov</strong>, <a href=\"/\">couvreur du 28</a>, est votre professionnel : démoussage et nettoyage de la toiture, recherche de fuites, réparation de toiture ou rénovation d'une couverture abîmée.",
    coches: ['Couvreur depuis deux générations', 'Savoir-faire artisanal', 'Garantie décennale'],
    servicesH2: "Les services de mon entreprise de couverture à Épernon",
    cartes: [
      {
        type: 'reparation',
        titre: 'Réparation de toiture à Épernon',
        texte:
          "J'interviens rapidement pour réparer votre toiture : bâche posée en urgence si nécessaire, recherche de l'origine d'une fuite ou d'une infiltration, puis remise en bon état. La proximité de l'artisan fait la différence.",
      },
      {
        type: 'demoussage',
        titre: 'Nettoyage et démoussage de toiture',
        texte:
          "Un nettoyage de toit réussi à Épernon, c'est un toit débarrassé des mousses sans que la couverture en souffre : bonne technique, bon dosage, produits appliqués par un professionnel.",
      },
      {
        type: 'gouttiere',
        titre: 'Gouttières et descentes à Épernon',
        texte:
          "Débordements, joints qui fuient, gouttière déformée : j'installe et je remplace gouttières et descentes, avec des pentes bien réglées pour évacuer l'eau de pluie loin des murs.",
      },
      {
        type: 'renovation',
        titre: 'Rénovation de toiture',
        texte:
          "M. Renaud maîtrise tous les matériaux de couverture qu'on trouve à Épernon — tuile de pays, tuile plate, ardoise — et remplace votre toiture ancienne dans les règles de l'art.",
      },
      {
        type: 'facade',
        titre: 'Nettoyage de façade en Eure-et-Loir',
        texte:
          "Renaud Rénov est aussi le spécialiste de l'entretien des façades : nettoyage des murs et traitements adaptés pour laver, assainir et protéger vos revêtements, avec la main d'un artisan qui connaît ses supports.",
      },
      {
        type: 'zinguerie',
        titre: 'Travaux de zinguerie',
        texte:
          "Le zinc assure la jonction étanche entre les éléments du toit : solins, noues, abergements de cheminée. M. Renaud façonne et pose ces ouvrages dans les règles de l'art, pour une couverture durablement étanche.",
      },
    ],
    ctaTitre: 'Une entreprise de couverture à Épernon, proche et réactive',
    ctaTexte:
      "M. Renaud se déplace rapidement chez vous à Épernon pour examiner votre toiture et poser un diagnostic honnête. Quinze années d'expérience des travaux de couverture, un savoir-faire transmis dans la famille, et des explications claires avant toute intervention : vous décidez en connaissance de cause.",
    finalH2: 'Faites appel à une entreprise de couverture pour la réfection de votre toiture',
    finalParas: [
      "Une réfection de toiture réussie commence bien avant la pose de la première tuile. Elle commence par l'expérience : celle qui permet de distinguer une couverture fatiguée qu'un entretien suffira à prolonger, d'un toit qu'il faut réellement refaire. Renaud Rénov porte deux générations de métier, et ce recul profite directement à mes clients d'Épernon : je propose la solution proportionnée au problème, ni plus, ni moins.",
      "Le savoir-faire d'entretien reste le socle. Nettoyer une toiture sans la brutaliser, appliquer un <a href=\"/traitement-hydrofuge-28/\">traitement hydrofuge</a> au bon moment de l'année, surveiller les solins et les abords de cheminée, garder des gouttières saines : ces gestes réguliers évitent la plupart des sinistres. À Épernon comme ailleurs, les toits qui vieillissent le mieux sont ceux qu'on regarde souvent — et un artisan proche peut justement passer les voir. Ces visites régulières créent aussi un historique du toit : on sait ce qui a été fait, quand, et ce qu'il faudra surveiller.",
      "Vient ensuite le savoir-faire des travaux : dépose de l'ancienne couverture, contrôle de la charpente, écran de sous-toiture, liteaunage, pose du nouveau matériau, zinguerie façonnée aux dimensions du toit. Chaque étape conditionne la suivante, et c'est la rigueur de l'ensemble qui fait la longévité. Je mène ces chantiers avec méthode, en protégeant la maison et ses abords du début à la fin. Le chantier est organisé pour gêner le moins possible, et laissé propre chaque soir.",
      "La connaissance des matériaux fait le reste : tuile plate, tuile mécanique, ardoise n'ont ni la même pente minimale, ni le même recouvrement, ni les mêmes fixations, et le choix se raisonne toit par toit. N'oubliez pas, enfin, que refaire certains travaux sur une toiture implique le respect du code de l'urbanisme — plan local d'urbanisme ou plan d'occupation des sols — et que plusieurs interventions demandent une déclaration préalable. Ces règles varient d'une commune à l'autre, et parfois d'une rue à l'autre. Le service urbanisme de la mairie d'Épernon est là pour vous renseigner avant de lancer votre chantier.",
    ],
    mairieAdresse: '8 rue du Général Leclerc',
    mairieSite: 'https://www.ville-epernon.fr/',
    avisOrdre: 5,
  },

  hanches: {
    title: 'Artisan couvreur à Hanches — Renaud Rénov, devis gratuit',
    h1: 'Couvreur zingueur à Hanches',
    metaDesc:
      "Toiture à démousser, à réparer ou à refaire à Hanches ? Renaud Rénov intervient rapidement. ✓ Devis gratuit et sans engagement ✓ 02 34 40 17 61.",
    chapo:
      "Votre toiture à Hanches a besoin d'un professionnel ? <strong>Renaud Rénov</strong>, <a href=\"/\">couvreur en Eure-et-Loir</a>, est votre spécialiste : entretien avec démoussage et nettoyage du toit, traitements hydrofuges, réparation d'infiltration ou remplacement d'une toiture ancienne.",
    coches: ['Spécialiste des toitures traditionnelles', "Plus de 15 années d'expérience", 'Garantie décennale'],
    servicesH2: "Mes services d'artisan couvreur à Hanches",
    cartes: [
      {
        type: 'renovation',
        titre: 'Remplacement de toiture ancienne',
        texte:
          "Tuile de pays, tuile plate, ardoise, et zinc ou bac acier selon les bâtiments : M. Renaud maîtrise tous les matériaux de couverture présents à Hanches et redonne un toit sain aux maisons qui en ont besoin.",
      },
      {
        type: 'facade',
        titre: 'Nettoyage et traitement des façades',
        texte:
          "Spécialiste de l'entretien des façades en Eure-et-Loir, Renaud Rénov lave vos murs et applique les traitements adaptés à chaque support. Le savoir-faire d'un professionnel, sans risque pour vos revêtements.",
      },
      {
        type: 'gouttiere',
        titre: 'Pose de gouttière',
        texte:
          "Gouttières et descentes vieillissantes ? Je les remplace par du zinc, de l'aluminium ou du PVC posé avec soin : l'eau de pluie est collectée et évacuée, la façade et les fondations restent au sec.",
      },
      {
        type: 'reparation',
        titre: 'Réparation de toiture à Hanches',
        texte:
          "Fuite, tuile déplacée, infiltration : je me déplace vite, je pose une bâche si l'urgence l'exige, et je recherche l'origine du problème avant de proposer la bonne réparation.",
      },
      {
        type: 'demoussage',
        titre: 'Démoussage et nettoyage de toiture',
        texte:
          "Le nettoyage d'une toiture à Hanches demande de la mesure : retirer mousses et lichens sans agresser le matériau, avec la technique qui convient à votre couverture. C'est ce professionnalisme que je vous apporte.",
      },
      {
        type: 'zinguerie',
        titre: 'Zinguerie et étanchéité du toit',
        texte:
          "Solins de cheminée, noues, chéneaux, habillages de rive : ces ouvrages en zinc protègent les points sensibles de votre toiture à Hanches. Un savoir-faire de couvreur zingueur, transmis de père en fils.",
      },
    ],
    ctaTitre: 'Contactez votre entreprise de couverture à Hanches',
    ctaTexte:
      "M. Renaud vient rapidement examiner votre toiture à Hanches, vous explique ce qu'il constate et ce qu'il recommande — rien de plus. Quinze années d'expérience des travaux de couverture, un savoir-faire d'artisan et un devis gratuit remis après la visite.",
    finalH2: 'Faites appel à un artisan couvreur pour le remplacement de votre toiture',
    finalParas: [
      "Remplacer une toiture est le chantier le plus engageant qu'une maison puisse connaître : on ne le fait qu'une ou deux fois dans une vie de propriétaire. C'est précisément là que l'expérience compte. Avec plus de quinze années de métier et une pratique transmise de père en fils, Renaud Rénov aborde chaque projet à Hanches avec ce que l'habitude des chantiers apprend : anticiper, préparer, et ne jamais découvrir un problème en cours de route qu'on aurait pu voir avant. Cette préparation se lit jusque dans le devis : chaque poste est détaillé, rien n'est laissé au forfait vague.",
      "Avant d'en arriver au remplacement, l'entretien reste la meilleure des protections. Mon savoir-faire, c'est aussi celui-là : un démoussage fait dans les règles, un <a href=\"/traitement-hydrofuge-28/\">traitement hydrofuge</a> appliqué au bon dosage, des gouttières dégagées, des solins vérifiés. Un toit suivi régulièrement gagne des années, et quand le remplacement devient inévitable, il se décide sur des faits constatés — pas sur une inquiétude. C'est le suivi le plus rentable qu'un propriétaire puisse offrir à sa maison.",
      "Le jour du chantier, tout est affaire de méthode : dépose de l'ancienne couverture menée sans casse, contrôle de la charpente, écran de sous-toiture, liteaunage neuf, pose du matériau choisi et zinguerie ajustée. Je conduis ces travaux à Hanches en protégeant votre maison et votre terrain, et en tenant le calendrier annoncé. La garantie décennale couvre l'ensemble.",
      "Reste le choix du matériau, qui ne se fait jamais au hasard : la tuile plate, la tuile mécanique et l'ardoise ont chacune leurs exigences de pente, de fixation et de ventilation, et je vous guide vers ce qui convient à votre toit. Sachez enfin que refaire certains travaux sur une toiture implique le respect du code de l'urbanisme — notamment le plan local d'urbanisme ou le plan d'occupation des sols — et qu'une déclaration préalable est parfois obligatoire. Les délais d'instruction se comptent en semaines : anticipez-les dans votre projet. Renseignez-vous auprès du service urbanisme de la mairie de Hanches avant de commencer.",
    ],
    mairieAdresse: '30 rue de la Barre',
    mairieSite: 'http://www.ville-hanches.fr/',
    avisOrdre: 8,
  },

  gallardon: {
    title: 'Couvreur à Gallardon (28320) — Renaud Rénov, devis gratuit',
    h1: 'Entreprise de couverture à Gallardon',
    metaDesc:
      "Renaud Rénov, votre artisan pour la toiture à Gallardon : démoussage, réparation de fuite, gouttières. ✓ 02 34 40 17 61 ✓ Devis gratuit sans engagement.",
    chapo:
      "Un problème de toiture à Gallardon ? <strong>Renaud Rénov</strong>, <a href=\"/\">entreprise de couverture en Eure-et-Loir</a>, est votre professionnel : nettoyage et démoussage du toit, application de traitements hydrofuges, recherche de fuites ou rénovation d'une toiture abîmée.",
    coches: ["Deux générations d'artisans couvreurs", 'Tous matériaux de couverture', 'Applicateur de solutions Dalep certifié'],
    servicesH2: 'Ce que je fais pour votre toiture à Gallardon',
    cartes: [
      {
        type: 'facade',
        titre: 'Nettoyage de façade',
        texte:
          "Renaud Rénov est le spécialiste de l'entretien des façades en Eure-et-Loir : lavage, traitements adaptés au support, et la main d'un artisan pour rendre à vos murs un aspect propre et net.",
      },
      {
        type: 'zinguerie',
        titre: 'Zinguerie façonnée à la main',
        texte:
          "Une noue bien façonnée, un solin ajusté, un chéneau étanche : la zinguerie demande précision et expérience. J'entretiens, répare et rénove les ouvrages en zinc de votre toiture à Gallardon.",
      },
      {
        type: 'reparation',
        titre: 'Réparation de toiture et recherche de fuite',
        texte:
          "Une infiltration à Gallardon ? J'interviens rapidement, je peux bâcher en urgence, puis je remonte à l'origine de la fuite pour proposer une réparation durable. La rapidité tient à la proximité.",
      },
      {
        type: 'demoussage',
        titre: 'Démoussage de toiture à Gallardon',
        texte:
          "Nettoyer une toiture sans l'abîmer demande les bonnes techniques et le bon produit. Je débarrasse votre toit des mousses et lichens avec la rigueur d'un professionnel de la couverture.",
      },
      {
        type: 'renovation',
        titre: 'Rénovation de toiture',
        texte:
          "M. Renaud maîtrise tous les matériaux de couverture présents à Gallardon : tuile de pays, tuile plate, ardoise, zinc ou bac acier selon le bâti. Reprise partielle ou toit refait, dans les règles de l'art.",
      },
      {
        type: 'gouttiere',
        titre: 'Pose et remplacement de gouttières',
        texte:
          "Je pose et remplace gouttières, descentes et raccordements pour une évacuation efficace des eaux de pluie. Zinc, aluminium ou PVC : le matériau se choisit selon la maison et le budget.",
      },
    ],
    ctaTitre: 'Votre couvreur zingueur à Gallardon vient examiner votre toit',
    ctaTexte:
      "Un appel suffit : M. Renaud se déplace rapidement à Gallardon, établit un diagnostic précis de votre couverture et vous le restitue simplement, sans jargon. Quinze années d'expérience des travaux de couverture et un savoir-faire d'artisan, au service d'une décision prise sereinement.",
    finalH2: 'Faites appel à un artisan couvreur pour la zinguerie et la charpente',
    finalParas: [
      "La zinguerie est la partie la plus discrète d'une toiture, et pourtant tout repose sur elle : noues, solins, chéneaux et abergements canalisent l'eau là où deux pans se rencontrent, là où la cheminée traverse, là où le toit rejoint un mur. Ce travail du zinc demande une vraie main : mesurer, plier, souder, ajuster au millimètre. C'est un savoir-faire que Renaud Rénov pratique depuis deux générations, et qu'aucune pièce standard ne remplace. C'est un travail qui ne se voit presque pas quand il est bien fait — et qui se voit beaucoup quand il ne l'est pas.",
      "La charpente, elle, se respecte : c'est l'ossature qui porte tout le reste. Quand j'interviens sur une couverture à Gallardon, je contrôle systématiquement l'état des bois — flèches, attaques d'insectes, traces d'humidité — car poser un toit neuf sur une structure affaiblie n'aurait aucun sens. Les reprises nécessaires se font avant, proprement, et le reste du chantier s'appuie sur une base saine.",
      "Autour de ces deux piliers, mon métier reste celui d'un couvreur complet : entretien régulier qui garde les toits en bon état, nettoyage mené sans brutalité, <a href=\"/traitement-hydrofuge-28/\">traitements hydrofuges</a>, réparations ponctuelles comme rénovations lourdes. L'expérience — plus de quinze années — sert surtout à cela : choisir l'intervention juste, celle qui répond au problème constaté sans en créer de nouveaux. Chaque intervention est expliquée avant d'être engagée, et chiffrée dans un devis détaillé et gratuit.",
      "Elle sert aussi à connaître les matériaux : tuile plate, tuile mécanique et ardoise n'appellent ni la même zinguerie, ni les mêmes fixations, et chaque toit se raisonne avec son matériau. Un dernier point, réglementaire : refaire certains travaux sur une toiture implique le respect du code de l'urbanisme, notamment du plan local d'urbanisme ou du plan d'occupation des sols, et une déclaration préalable est exigée pour plusieurs types de chantiers. Mieux vaut vérifier ces règles avant de commander les matériaux : cela évite bien des retards. Le service urbanisme de la mairie de Gallardon vous précisera les règles applicables à votre adresse.",
    ],
    mairieAdresse: '1 place du Jeu de Paume',
    mairieSite: 'https://www.ville-gallardon.fr/',
    avisOrdre: 11,
  },

  pierres: {
    title: 'Entreprise de couverture à Pierres — Renaud Rénov',
    h1: 'Couvreur à Pierres',
    metaDesc:
      "Entretien et rénovation de toiture à Pierres par M. Renaud, artisan de père en fils : nettoyage, zinguerie, gouttières. ✓ Devis gratuit ✓ 02 34 40 17 61.",
    chapo:
      "Vous cherchez un spécialiste de la toiture à Pierres ? <strong>Renaud Rénov</strong>, <a href=\"/\">couvreur 28</a>, est votre professionnel : démoussage et nettoyage de la toiture, traitements hydrofuges, réparation de toiture ou remplacement d'une couverture ancienne.",
    coches: ['Savoir-faire artisanal', 'Couvreur de père en fils', 'Garantie décennale'],
    servicesH2: 'Mes services de couvreur zingueur à Pierres',
    cartes: [
      {
        type: 'demoussage',
        titre: 'Nettoyage de toiture à Pierres',
        texte:
          "Mousses, lichens, dépôts : je nettoie votre toit avec la technique qui convient à son matériau, sans l'agresser. Le démoussage est un geste de professionnel — bien fait, il prolonge la vie de la couverture.",
      },
      {
        type: 'facade',
        titre: 'Nettoyage de façade',
        texte:
          "Renaud Rénov, spécialiste de l'entretien des façades en Eure-et-Loir, lave vos murs et applique les traitements qui conviennent à chaque revêtement. Un résultat propre, obtenu avec méthode.",
      },
      {
        type: 'gouttiere',
        titre: 'Gouttières : pose et remplacement',
        texte:
          "Une gouttière percée ou déformée laisse l'eau ruisseler sur les murs. J'interviens à Pierres pour poser ou remplacer gouttières et descentes, en zinc, en aluminium ou en PVC.",
      },
      {
        type: 'renovation',
        titre: 'Rénovation de toiture',
        texte:
          "M. Renaud maîtrise tous les matériaux de couverture présents à Pierres — tuile de pays, tuile plate, ardoise, zinc — et mène votre rénovation de la dépose à la zinguerie de finition.",
      },
      {
        type: 'reparation',
        titre: 'Réparation de toiture en urgence',
        texte:
          "Fuite ou infiltration ? J'interviens vite, je protège votre maison — bâche d'urgence si besoin — et je recherche l'origine du problème pour remettre votre toiture en bon état durablement.",
      },
      {
        type: 'zinguerie',
        titre: 'Travaux de zinguerie',
        texte:
          "Épis de faîtage, solins, noues, abergements : le zinc habille et protège les points singuliers du toit. Un travail façonné sur mesure, posé dans les règles de l'art par un couvreur zingueur.",
      },
    ],
    ctaTitre: 'Votre entreprise de couverture à Pierres, réactive et proche',
    ctaTexte:
      "M. Renaud se déplace rapidement chez vous à Pierres pour examiner la toiture, poser un diagnostic et vous conseiller la suite — entretien, réparation ou travaux plus complets, selon ce que le toit demande vraiment. Quinze années d'expérience de la couverture et un devis gratuit à la clé.",
    finalH2: "Faites appel à une entreprise de couverture pour l'entretien de votre toiture",
    finalParas: [
      "Un toit n'attire l'attention que lorsqu'il fuit — et c'est exactement ce qu'un bon entretien évite. Chez Renaud Rénov, l'entretien de toiture est un métier à part entière, appris sur les chantiers et transmis de père en fils : savoir lire une couverture, repérer la tuile qui glisse, le solin qui se décolle, la mousse qui retient l'humidité, et intervenir avant que le petit défaut ne devienne un dégât des eaux.",
      "Ce savoir-faire d'entretien s'appuie sur des techniques précises. Un nettoyage se règle selon le matériau et l'état du toit ; un <a href=\"/traitement-hydrofuge-28/\">traitement hydrofuge</a> s'applique au bon dosage et à la bonne saison ; des gouttières se contrôlent et se dégagent pour que l'eau parte là où elle doit. À Pierres, j'applique ces méthodes en artisan qui repassera l'année suivante et qui répond de son travail. Ce suivi crée un historique utile : chaque passage documente l'état du toit et prépare le suivant.",
      "Quand des travaux plus importants s'imposent, la même rigueur s'applique en plus grand : réparation charpentée d'un pan abîmé, remplacement d'une couverture en fin de vie, zinguerie refaite à neuf. Mon expérience — plus de quinze années — me permet d'annoncer un calendrier réaliste, de préparer le chantier pour qu'il ne réserve pas de surprise, et de livrer un toit dont l'étanchéité est garantie par la décennale.",
      "La connaissance des matériaux complète le tout : tuile plate, tuile mécanique, ardoise, zinc — chacun impose sa pente, son recouvrement et sa fixation, et je travaille chaque toit avec les règles de son matériau. Un point d'administration pour finir : refaire certains travaux sur une toiture implique le respect du code de l'urbanisme, en particulier du plan local d'urbanisme ou du plan d'occupation des sols, et une déclaration préalable est parfois requise. Un point vérifié en amont, c'est un chantier qui démarre sans mauvaise surprise administrative. Le service urbanisme de la mairie de Pierres vous renseignera sur votre situation.",
    ],
    mairieAdresse: 'place Jean Moulin',
    mairieSite: 'https://www.mairie-pierres.fr/',
    avisOrdre: 14,
  },

  'saint-piat': {
    title: 'Couvreur zingueur à Saint-Piat — Devis gratuit',
    h1: 'Artisan couvreur à Saint-Piat',
    metaDesc:
      "Votre toiture à Saint-Piat mérite un professionnel : démoussage, réparation, tuiles et ardoises par Renaud Rénov. ✓ 02 34 40 17 61 ✓ Devis gratuit.",
    chapo:
      "Vous avez besoin d'un spécialiste de la toiture à Saint-Piat ? <strong>Renaud Rénov</strong>, <a href=\"/\">artisan couvreur du 28</a>, est votre professionnel : entretien avec démoussage et nettoyage du toit, recherche de fuites, réparation d'infiltration ou rénovation d'une toiture abîmée.",
    coches: ['Entreprise artisanale de couverture', 'Spécialiste des toitures traditionnelles', "Plus de 15 années d'expérience"],
    servicesH2: 'Mes services pour votre toit à Saint-Piat',
    cartes: [
      {
        type: 'reparation',
        titre: 'Réparation de toiture à Saint-Piat',
        texte:
          "J'interviens rapidement : bâche d'urgence si la situation l'exige, recherche de l'origine de la fuite ou de l'infiltration, puis réparation durable. L'artisan proche, c'est la réparation qui n'attend pas.",
      },
      {
        type: 'zinguerie',
        titre: 'Zinguerie : solins, noues, chéneaux',
        texte:
          "L'eau s'infiltre d'abord par les points singuliers du toit. Je façonne, pose et répare solins, noues et chéneaux en zinc pour garder votre couverture étanche à Saint-Piat, année après année.",
      },
      {
        type: 'renovation',
        titre: 'Rénovation et remplacement de toiture',
        texte:
          "M. Renaud maîtrise tous les matériaux de couverture présents à Saint-Piat : tuile de pays, tuile plate, ardoise — et le zinc quand il le faut. Une couverture refaite dans les règles, garantie décennale.",
      },
      {
        type: 'facade',
        titre: 'Nettoyage de façade',
        texte:
          "Le spécialiste de l'entretien des façades en Eure-et-Loir : Renaud Rénov nettoie vos murs et applique les traitements adaptés, pour des façades saines sans risque pour les revêtements.",
      },
      {
        type: 'demoussage',
        titre: 'Démoussage et nettoyage de toiture',
        texte:
          "Un nettoyage de toiture réussi à Saint-Piat, c'est un toit propre ET intact : je choisis la technique selon le matériau et j'applique les produits en professionnel, sans improvisation.",
      },
      {
        type: 'gouttiere',
        titre: 'Pose de gouttière',
        texte:
          "Pose, remplacement, raccordement : je m'occupe de vos gouttières et de vos descentes de A à Z. Une évacuation d'eau de pluie bien conçue préserve l'enduit de la façade et les fondations de la maison.",
      },
    ],
    ctaTitre: 'Un couvreur zingueur à Saint-Piat qui se déplace rapidement',
    ctaTexte:
      "Dès votre appel, M. Renaud convient d'un passage chez vous à Saint-Piat pour examiner la toiture. Quinze années d'expérience des travaux de couverture, un regard honnête sur l'état réel de votre toit, et un devis gratuit détaillé : vous savez où vous allez avant d'engager quoi que ce soit.",
    finalH2: 'Faites appel à un couvreur zingueur pour la réfection de votre toiture',
    finalParas: [
      "Refaire une toiture, c'est un projet qui se prépare — et la préparation est d'abord une affaire d'expérience. Renaud Rénov, entreprise artisanale où le métier se transmet de père en fils, aborde chaque réfection à Saint-Piat avec plus de quinze années de chantiers derrière elle : on sait ce qu'on va trouver sous une vieille couverture, on sait ce qui peut attendre et ce qui ne peut pas, et on le dit clairement au client. Cette franchise du diagnostic est la base d'une relation de confiance — et d'un budget maîtrisé.",
      "Mon savoir-faire d'entretien nourrit ce diagnostic. C'est en nettoyant, en appliquant des <a href=\"/traitement-hydrofuge-28/\">traitements hydrofuges</a> et en réparant des toitures toute l'année qu'on apprend à reconnaître une couverture qui peut encore vivre dix ans d'une couverture à bout. Cette honnêteté-là a une conséquence simple : à Saint-Piat, je ne recommande une réfection que lorsqu'elle est justifiée, et je propose l'entretien chaque fois qu'il suffit.",
      "Quand la réfection s'impose, le chantier suit un ordre précis : dépose, vérification de la charpente, écran de sous-toiture, liteaunage, pose de la couverture neuve, zinguerie ajustée — noues, solins, gouttières. Chaque étape est contrôlée avant de passer à la suivante. C'est cette discipline, plus qu'aucun discours, qui fait les toits durables ; la garantie décennale s'ajoute par-dessus. Vous suivez l'avancement étape par étape, et rien n'est refermé sans avoir été vérifié.",
      "Le choix du matériau se raisonne avec le toit : tuile plate, tuile mécanique ou ardoise n'acceptent pas les mêmes pentes ni les mêmes fixations, et je vous guide vers la solution cohérente avec votre charpente et votre budget. Dernier point, à ne pas négliger : refaire certains travaux sur une toiture implique le respect du code de l'urbanisme — plan local d'urbanisme, plan d'occupation des sols — et une déclaration préalable est nécessaire dans bien des cas. Prévoyez les délais d'instruction dans votre calendrier : ils se comptent en semaines. Le service urbanisme de la mairie de Saint-Piat vous dira ce qui s'applique chez vous.",
    ],
    mairieAdresse: 'place Marcel Binet',
    mairieSite: 'http://www.saint-piat.fr/',
    avisOrdre: 17,
  },

  bouglainval: {
    title: 'Artisan couvreur à Bouglainval — Renaud Rénov',
    h1: 'Couvreur zingueur à Bouglainval',
    metaDesc:
      "Renaud Rénov entretient et répare les toitures de Bouglainval : nettoyage, recherche de fuite, gouttières. ✓ Déplacement et devis gratuits ✓ 02 34 40 17 61.",
    chapo:
      "Votre toit à Bouglainval réclame de l'attention ? <strong>Renaud Rénov</strong>, <a href=\"/\">entreprise de couverture 28</a>, est votre spécialiste de la toiture : démoussage et nettoyage, application de traitements hydrofuges, réparation de toiture ou remplacement d'une couverture ancienne.",
    coches: ['Couvreur depuis deux générations', 'Tous matériaux de couverture', 'Garantie décennale'],
    servicesH2: 'Les services de mon entreprise de couverture à Bouglainval',
    cartes: [
      {
        type: 'renovation',
        titre: 'Rénovation de toiture à Bouglainval',
        texte:
          "M. Renaud maîtrise tous les matériaux de couverture du secteur : tuile de pays, tuile plate, ardoise, bac acier pour les bâtiments qui s'y prêtent. Votre toit est refait dans les règles de l'art.",
      },
      {
        type: 'demoussage',
        titre: 'Démoussage et nettoyage de toiture',
        texte:
          "Le nettoyage d'une toiture à Bouglainval se fait avec mesure : la bonne technique pour le bon matériau, des produits professionnels bien dosés, et un toit débarrassé de ses mousses sans dommage.",
      },
      {
        type: 'gouttiere',
        titre: 'Pose et remplacement de gouttières',
        texte:
          "Gouttière qui déborde, descente disjointe, eau qui ruisselle le long du mur : je remets votre évacuation d'eaux pluviales en état, ou je pose un réseau neuf en zinc, en aluminium ou en PVC.",
      },
      {
        type: 'reparation',
        titre: 'Réparation de toiture',
        texte:
          "Fuite, tuile envolée, infiltration : je me déplace vite, je bâche en urgence si nécessaire et je remonte à l'origine du problème pour le traiter à la source. Votre toiture retrouve son bon état.",
      },
      {
        type: 'facade',
        titre: 'Nettoyage et traitement des façades',
        texte:
          "Renaud Rénov est le spécialiste de l'entretien des façades en Eure-et-Loir : lavage des murs conduit à la bonne pression et traitements adaptés à chaque revêtement, avec le professionnalisme d'un artisan.",
      },
      {
        type: 'zinguerie',
        titre: 'Travaux de zinguerie',
        texte:
          "Solins de cheminée, noues, habillages de rive : ces ouvrages en zinc font l'étanchéité durable d'une toiture. M. Renaud les façonne et les pose avec la précision d'un couvreur zingueur de métier.",
      },
    ],
    ctaTitre: 'Votre artisan couvreur à Bouglainval vous conseille',
    ctaTexte:
      "M. Renaud chiffre toujours après avoir vu : il se déplace rapidement à Bouglainval, examine la toiture et vous explique précisément ce qu'elle demande. Quinze années d'expérience des travaux de couverture, un savoir-faire familial, et un chiffrage gratuit remis après la visite.",
    finalH2: "Faites appel à un artisan couvreur pour l'entretien de votre toiture",
    finalParas: [
      "L'entretien d'une toiture est un métier de régularité. Chez Renaud Rénov, couvreurs depuis deux générations, on sait qu'un toit bien suivi coûte toujours moins cher qu'un toit oublié : les mousses retirées à temps ne soulèvent pas les tuiles, les gouttières dégagées n'inondent pas les façades, le solin repris ne laisse pas entrer l'eau. C'est ce suivi que je propose aux habitants de Bouglainval, avec la constance d'un artisan installé à quelques minutes.",
      "Chaque geste d'entretien a sa technique. Un démoussage se mène différemment sur une tuile mécanique, une tuile plate ou une ardoise ; un <a href=\"/traitement-hydrofuge-28/\">traitement hydrofuge</a> s'applique sur un support propre et sec, au dosage prescrit ; un contrôle de toiture se fait points singuliers en tête — faîtage, noues, abords de cheminée. Ce sont ces détails, invisibles depuis le sol, qui séparent l'entretien de professionnel du simple lavage. Ils s'apprennent sur les toits, chantier après chantier, et c'est l'expérience qui donne la main juste.",
      "Le même savoir-faire s'étend aux travaux : réparation après une tempête, reprise d'un pan de couverture, remplacement complet d'un toit en fin de vie, zinguerie neuve. À Bouglainval, je conduis ces chantiers avec la méthode apprise sur des centaines de toits : chantier préparé en amont, exécution dans les règles de l'art, contrôle final — et la garantie décennale sur l'ensemble des travaux. Le chantier est préparé en amont, mené proprement et laissé net : la maison reste habitable et protégée du premier au dernier jour.",
      "Connaître les matériaux, enfin, c'est connaître leurs exigences : pente minimale, recouvrement, fixation, ventilation de la sous-face — la tuile plate, la tuile mécanique et l'ardoise ont chacune les leurs. Avant de lancer des travaux, pensez aussi à la réglementation : refaire certains travaux sur une toiture implique le respect du code de l'urbanisme, notamment du plan local d'urbanisme ou du plan d'occupation des sols, et certains chantiers exigent une déclaration préalable. Selon la nature des travaux, la simple déclaration suffit ou un dossier plus complet s'impose : mieux vaut le vérifier avant de signer un devis. Le service urbanisme de la mairie de Bouglainval vous renseignera.",
    ],
    mairieAdresse: '17 rue de Châteauneuf',
    mairieSite: 'http://www.mairie-bouglainval.fr/',
    avisOrdre: 1,
  },

  chartres: {
    title: 'Couvreur à Chartres — Devis gratuit — Renaud Rénov',
    h1: 'Artisan couvreur à Chartres',
    metaDesc:
      "Démoussage de toiture, réparation et rénovation à Chartres par Renaud Rénov, entreprise familiale du 28. ✓ Devis gratuit sans engagement ✓ 02 34 40 17 61.",
    chapo:
      "Il vous faut un spécialiste de la toiture à Chartres ? <strong>Renaud Rénov</strong>, <a href=\"/\">couvreur en Eure-et-Loir</a>, est votre professionnel : nettoyage et démoussage de la toiture, traitements hydrofuges, recherche de fuites ou rénovation d'une couverture abîmée.",
    coches: ["Plus de 15 années d'expérience", 'Savoir-faire artisanal', 'Garantie décennale'],
    servicesH2: 'Mes services de couverture à Chartres',
    cartes: [
      {
        type: 'demoussage',
        titre: 'Démoussage de toiture à Chartres',
        texte:
          "Nettoyer un toit sans l'abîmer : c'est tout l'enjeu du démoussage, et c'est une affaire de technique. J'adapte la méthode au matériau et j'applique des produits professionnels correctement dosés.",
      },
      {
        type: 'reparation',
        titre: 'Réparation de toiture',
        texte:
          "J'interviens rapidement pour réparer votre toiture : pose de bâche en urgence, recherche de l'origine d'une fuite ou d'une infiltration, remise en état durable. La réactivité d'un artisan proche.",
      },
      {
        type: 'zinguerie',
        titre: 'Zinguerie et travail du zinc',
        texte:
          "Noues, chéneaux, solins, abergements de cheminée : j'assure à Chartres l'entretien, la réparation et la rénovation des ouvrages de zinguerie qui protègent les points sensibles de votre toiture.",
      },
      {
        type: 'facade',
        titre: 'Nettoyage de façade en Eure-et-Loir',
        texte:
          "Renaud Rénov est aussi le spécialiste de l'entretien des façades : lavage des murs, traitements adaptés au revêtement, et un savoir-faire qui rend leur netteté à vos extérieurs.",
      },
      {
        type: 'renovation',
        titre: 'Rénovation et remplacement de toiture',
        texte:
          "M. Renaud maîtrise tous les matériaux de couverture qu'on rencontre à Chartres : tuile plate, tuile mécanique, ardoise, zinc. Reprise partielle ou toiture refaite, le travail est fait dans les règles.",
      },
      {
        type: 'gouttiere',
        titre: 'Pose et remplacement de gouttières',
        texte:
          "Des gouttières bien dimensionnées et bien posées collectent l'eau de pluie et l'éloignent des murs. Pose neuve ou remplacement, en zinc, en aluminium ou en PVC, avec des pentes réglées au cordeau.",
      },
    ],
    ctaTitre: 'Une entreprise de couverture qui intervient à Chartres',
    ctaTexte:
      "M. Renaud se déplace chez vous à Chartres pour examiner la toiture et poser un diagnostic complet : état de la couverture, zinguerie, points à surveiller. Quinze années d'expérience des travaux de couverture et un savoir-faire d'artisan, restitués dans un devis gratuit et détaillé.",
    finalH2: 'Faites appel à une entreprise de couverture pour le remplacement de votre toiture',
    finalParas: [
      "Le remplacement d'une toiture se juge sur pièces : l'état réel de la couverture, celui de la charpente, la manière dont l'eau s'évacue. Avant de parler chantier, Renaud Rénov commence donc toujours par un examen complet du toit. C'est le bénéfice direct de plus de quinze années d'expérience : à Chartres comme ailleurs, je sais distinguer l'usure de surface, qui se traite, de la fin de vie d'une couverture, qui se remplace. Ce premier examen ne coûte rien et n'engage à rien : il donne simplement une base saine pour décider.",
      "Cette expérience s'est construite sur l'entretien, qui reste le cœur du métier : démoussages menés sans brutaliser les matériaux, <a href=\"/traitement-hydrofuge-28/\">traitements hydrofuges</a> appliqués au bon moment, gouttières et descentes maintenues en état. Un client qui entretient son toit avec régularité repousse le remplacement de plusieurs années — et quand l'échéance arrive, elle arrive sans urgence, ce qui permet de choisir sereinement.",
      "Le remplacement lui-même est une suite d'étapes qui ne souffrent pas l'à-peu-près : dépose et évacuation de l'ancienne couverture, contrôle et reprise éventuelle de la charpente, écran de sous-toiture, liteaunage, pose du nouveau matériau, zinguerie complète. Je conduis ces chantiers à Chartres avec une organisation stricte, du premier jour au contrôle final, et la garantie décennale couvre le résultat. Les abords sont protégés, les gravats évacués, et le chantier laissé propre à chaque fin de journée.",
      "Le matériau, enfin, se choisit avec ses règles : la tuile plate demande de la pente, la tuile mécanique se pose vite et bien sur les toits qui lui conviennent, l'ardoise rend en décennies de tenue la précision qu'on met à la poser. Et avant tout démarrage, un passage par la réglementation s'impose : refaire certains travaux sur une toiture implique le respect du code de l'urbanisme — plan local d'urbanisme, plan d'occupation des sols — et une déclaration préalable est souvent exigée. Les délais d'instruction se comptent en semaines : intégrez-les à votre calendrier de travaux. Le service urbanisme de la mairie de Chartres vous indiquera les règles propres à votre adresse.",
    ],
    mairieAdresse: 'Hôtel de Ville, place des Halles',
    mairieSite: 'https://www.chartres.fr/',
    avisOrdre: 4,
  },

  dreux: {
    title: 'Couvreur zingueur à Dreux (28100) — Devis gratuit',
    h1: 'Entreprise de couverture à Dreux',
    metaDesc:
      "Toit à nettoyer ou à réparer à Dreux ? M. Renaud, artisan de la toiture, vous conseille et intervient rapidement. ✓ Devis gratuit au 02 34 40 17 61.",
    logos: [
      { nom: 'Point P Dreux', url: 'https://www.pointp.fr/infos-agence/dreux-point-p-3865', logo: '/images/marques/logo-point-p.webp', alt: 'Point P Dreux – distributeur de matériaux de couverture' },
      { nom: 'Chausson Matériaux Dreux', url: 'https://www.chausson.fr/agences/513', logo: '/images/marques/logo-chausson.svg', alt: 'Chausson Matériaux Dreux – négoce de matériaux de construction et de couverture' },
      { nom: 'Dalep', url: 'https://www.dalep.com/', logo: '/images/marques/logo-dalep.webp', alt: 'Dalep – traitements hydrofuges et anti-mousse pour toiture' },
      { nom: 'Knauf', url: 'https://www.knaufinsulation.fr/', logo: '/images/marques/logo-knauf.webp', alt: 'Knauf – isolation thermique' },
    ],
    chapo:
      "Vous avez besoin d'un spécialiste de la toiture à Dreux ? <strong>Renaud Rénov</strong>, <a href=\"/\">couvreur 28</a>, est votre professionnel : entretien avec démoussage et nettoyage du toit, traitements hydrofuges, réparation d'infiltration ou remplacement d'une toiture ancienne.",
    coches: ['Entreprise artisanale de couverture', 'Applicateur de solutions Dalep certifié', 'Tous matériaux de couverture'],
    servicesH2: "Mes services d'artisan couvreur à Dreux",
    cartes: [
      {
        type: 'reparation',
        titre: 'Réparation de toiture à Dreux',
        texte:
          "Fuite ou infiltration ? J'interviens vite : bâche posée en urgence si besoin, recherche de l'origine du problème, puis réparation qui remet la toiture en bon état. La proximité, c'est la rapidité.",
      },
      {
        type: 'gouttiere',
        titre: 'Gouttières et descentes',
        texte:
          "Je pose, remplace et raccorde gouttières et descentes à Dreux : l'eau de pluie est guidée jusqu'au sol, la façade reste propre et les fondations à l'abri de l'humidité.",
      },
      {
        type: 'facade',
        titre: 'Nettoyage de façade',
        texte:
          "Spécialiste de l'entretien des façades en Eure-et-Loir, Renaud Rénov nettoie vos murs et applique les traitements adaptés à chaque support — enduit, crépi, pierre, brique — avec un vrai savoir-faire.",
      },
      {
        type: 'demoussage',
        titre: 'Nettoyage et démoussage de toiture',
        texte:
          "Un toit propre à Dreux, oui — mais jamais au prix du matériau. Je choisis la technique de nettoyage selon la couverture et j'applique des produits professionnels au bon dosage.",
      },
      {
        type: 'renovation',
        titre: 'Rénovation de toiture',
        texte:
          "M. Renaud maîtrise tous les matériaux de couverture présents à Dreux : tuile mécanique, tuile plate, ardoise, zinc et bac acier. Votre couverture est reprise ou refaite dans les règles de l'art.",
      },
      {
        type: 'zinguerie',
        titre: 'Travaux de zinguerie',
        texte:
          "La zinguerie fait la jonction étanche entre la toiture, la cheminée et les murs : solins, noues, chéneaux. Un métier de précision que M. Renaud exerce dans les règles de l'art, sur le neuf comme en rénovation.",
      },
    ],
    ctaTitre: 'Votre artisan couvreur à Dreux se déplace pour examiner votre toit',
    ctaTexte:
      "Un appel, et M. Renaud vient voir votre toiture à Dreux : état des tuiles, zinguerie, gouttières, rien n'est laissé de côté. Quinze années d'expérience des travaux de couverture permettent un diagnostic nuancé — tout ne se répare pas, tout ne se remplace pas non plus — et un devis gratuit, précis, sans engagement.",
    finalH2: 'Faites appel à un couvreur zingueur pour le remplacement de votre toiture',
    finalParas: [
      "Une toiture en fin de vie ne prévient pas toujours : les tuiles poreuses, les fixations fatiguées et la zinguerie usée travaillent en silence jusqu'au jour où l'eau passe. L'expérience sert précisément à devancer ce jour-là. Avec plus de quinze années de chantiers, Renaud Rénov reconnaît les signes d'une couverture à bout et vous le dit sans détour — comme il vous dira, à l'inverse, quand un entretien suffit encore. Ce discernement ne s'improvise pas : il vient des toits déjà vus, réparés et refaits.",
      "Car l'entretien reste ma première réponse : un démoussage bien mené, un <a href=\"/traitement-hydrofuge-28/\">traitement hydrofuge</a> appliqué en professionnel certifié, des gouttières entretenues prolongent une toiture de plusieurs années. À Dreux, ce suivi régulier est souvent ce qui sépare une dépense maîtrisée d'un chantier subi. Quand le remplacement devient la bonne décision, il se prend alors sur des faits, avec le temps de comparer les options. Un passage de contrôle prend peu de temps ; un dégât des eaux, beaucoup plus.",
      "Le chantier de remplacement, ensuite, est affaire d'organisation : dépose de l'ancienne couverture, contrôle de la charpente et reprises si nécessaire, écran de sous-toiture, liteaunage neuf, pose du matériau choisi et zinguerie complète — noues, solins, chéneaux façonnés aux dimensions du toit. Chaque phase est vérifiée avant la suivante, la maison est protégée pendant toute la durée des travaux, et la décennale garantit le résultat. Vous êtes informé de l'avancement à chaque étape, sans jargon ni surprise.",
      "Le choix du matériau se fait avec ses contraintes propres — pente, recouvrement, fixation, poids admissible par la charpente — qu'il s'agisse de tuile mécanique, de tuile plate ou d'ardoise. Et n'oubliez pas l'étape administrative : refaire certains travaux sur une toiture implique le respect du code de l'urbanisme, notamment du plan local d'urbanisme ou du plan d'occupation des sols, et une déclaration préalable est exigée dans de nombreux cas. Le service urbanisme de la mairie de Dreux vous précisera vos obligations.",
    ],
    mairieAdresse: '2 rue de Châteaudun',
    mairieSite: 'http://www.dreux.com/',
    avisOrdre: 7,
  },

  auneau: {
    title: 'Artisan couvreur à Auneau-Bleury-Saint-Symphorien',
    h1: 'Couvreur à Auneau-Bleury-Saint-Symphorien',
    metaDesc:
      "Renaud Rénov prend en charge vos toitures à Auneau-Bleury-Saint-Symphorien : démoussage, réparation, rénovation. ✓ Devis gratuit ✓ 02 34 40 17 61.",
    chapo:
      "Un problème de toiture à Auneau-Bleury-Saint-Symphorien ? <strong>Renaud Rénov</strong>, <a href=\"/\">professionnel de la toiture dans le 28</a>, est votre spécialiste : nettoyage et démoussage du toit, application de traitements hydrofuges, recherche de fuites ou rénovation d'une toiture abîmée.",
    coches: ['Couvreur de père en fils', 'Spécialiste des toitures traditionnelles', 'Garantie décennale'],
    servicesH2: 'Les services de votre artisan couvreur à Auneau-Bleury-Saint-Symphorien',
    cartes: [
      {
        type: 'facade',
        titre: 'Nettoyage et traitement des façades',
        texte:
          "Renaud Rénov est le spécialiste de l'entretien des façades en Eure-et-Loir : nettoyage des murs mené sans agresser le support et traitements adaptés au revêtement, pour une maison saine et propre.",
      },
      {
        type: 'demoussage',
        titre: 'Démoussage de toiture à Auneau',
        texte:
          "Le nettoyage d'une toiture demande de la retenue : la mauvaise technique abîme plus qu'elle ne nettoie. J'adapte la méthode à votre couverture et j'utilise des produits professionnels bien dosés.",
      },
      {
        type: 'zinguerie',
        titre: "Zinguerie : l'étanchéité des points singuliers",
        texte:
          "Un solin décollé ou une noue fatiguée suffit à laisser entrer l'eau. J'inspecte, répare et refais les ouvrages en zinc de votre toiture à Auneau : solins, noues, chéneaux, abergements.",
      },
      {
        type: 'renovation',
        titre: 'Rénovation et remplacement de toiture',
        texte:
          "M. Renaud maîtrise tous les matériaux de couverture du secteur : tuile mécanique, tuile plate, ardoise, bac acier pour les bâtiments qui s'y prêtent. Une toiture refaite proprement, garantie décennale.",
      },
      {
        type: 'reparation',
        titre: 'Réparation de toiture',
        texte:
          "J'interviens rapidement pour réparer votre toit : bâche d'urgence si nécessaire, origine de la fuite ou de l'infiltration identifiée, réparation durable. Le savoir-faire et la réactivité d'un artisan.",
      },
      {
        type: 'gouttiere',
        titre: 'Pose de gouttière',
        texte:
          "Pose et remplacement de gouttières et de descentes en zinc, en aluminium ou en PVC. Un réseau d'évacuation en bon état protège durablement l'enduit, les menuiseries et les fondations.",
      },
    ],
    ctaTitre: 'Votre entreprise de couverture à Auneau-Bleury-Saint-Symphorien',
    ctaTexte:
      "M. Renaud se déplace chez vous pour examiner votre toiture et vous donner un avis d'artisan : ce qui doit être fait, ce qui peut attendre, ce qui relève de la simple surveillance. Quinze années d'expérience des travaux de couverture, et un devis gratuit remis après la visite.",
    finalH2: 'Faites appel à une entreprise de couverture et de zinguerie pour votre toiture',
    finalParas: [
      "Couverture et zinguerie sont les deux moitiés d'un même métier : la première couvre les pans du toit, la seconde rend étanches tous les points où ils s'interrompent — noues, arêtiers, solins, chéneaux, abords de cheminée. Renaud Rénov pratique les deux, de père en fils, et c'est ce qui permet de livrer des toitures complètes, sans sous-traiter les finitions qui font justement la différence. Cette polyvalence se voit au résultat : des raccords nets, une eau bien conduite, une toiture qui vieillit sans mauvaise surprise.",
      "L'entretien occupe une grande part de mon activité à Auneau-Bleury-Saint-Symphorien : démoussages menés avec la technique adaptée au matériau, <a href=\"/traitement-hydrofuge-28/\">traitements hydrofuges</a> appliqués au bon dosage, gouttières contrôlées et dégagées. C'est un savoir-faire de régularité — repérer tôt, intervenir léger — qui épargne aux propriétaires les chantiers lourds pris dans l'urgence. C'est aussi une affaire de calendrier : un traitement s'applique sur support sec, un démoussage se programme à la bonne saison, et quelques jours d'attente valent parfois mieux qu'une intervention précipitée.",
      "Quand les travaux s'imposent, l'expérience de plus de quinze années prend le relais : réparation d'un pan endommagé, reprise de zinguerie fatiguée, remplacement complet d'une couverture en fin de vie. Chaque chantier suit le même fil : diagnostic posé sur place, devis détaillé, exécution dans les règles de l'art, contrôle final. La garantie décennale couvre l'ensemble. Les délais annoncés sont tenus, le chantier est laissé propre, et vous savez à chaque étape ce qui a été fait et ce qui reste à faire.",
      "La connaissance des matériaux guide chaque choix : tuile mécanique, tuile plate et ardoise n'ont ni les mêmes pentes minimales, ni les mêmes fixations, ni la même zinguerie d'accompagnement. Avant de lancer votre projet, pensez enfin à la réglementation : refaire certains travaux sur une toiture implique le respect du code de l'urbanisme — plan local d'urbanisme, plan d'occupation des sols — et une déclaration préalable est parfois obligatoire. Selon les cas, une simple déclaration suffit ou une autorisation plus complète est demandée. Le service urbanisme de la mairie d'Auneau-Bleury-Saint-Symphorien vous renseignera précisément.",
    ],
    mairieAdresse: '1 avenue Gambetta',
    mairieSite: 'http://www.ville-ab2s.fr/',
    avisOrdre: 10,
  },

  rambouillet: {
    title: 'Entreprise de couverture à Rambouillet — Devis gratuit',
    h1: 'Artisan couvreur à Rambouillet',
    metaDesc:
      "M. Renaud entretient, répare et rénove les toitures à Rambouillet : nettoyage, zinguerie, gouttières. ✓ 02 34 40 17 61 ✓ Devis gratuit sans engagement.",
    chapo:
      "Vous cherchez un spécialiste de la toiture à Rambouillet ? <strong>Renaud Rénov</strong>, <a href=\"/\">entreprise de couverture du 28</a>, est votre professionnel : entretien avec démoussage et nettoyage de la toiture, traitements hydrofuges, réparation de toiture ou remplacement d'une couverture ancienne.",
    coches: ["Deux générations d'artisans couvreurs", 'Savoir-faire artisanal', 'Garantie décennale'],
    servicesH2: 'Mes prestations de couverture à Rambouillet',
    cartes: [
      {
        type: 'renovation',
        titre: 'Rénovation de toiture à Rambouillet',
        texte:
          "M. Renaud maîtrise tous les matériaux de couverture présents à Rambouillet : tuile mécanique, tuile plate, ardoise, zinc. Reprise partielle ou remplacement complet, le travail est fait dans les règles.",
      },
      {
        type: 'reparation',
        titre: 'Réparation de toiture et recherche de fuite',
        texte:
          "J'interviens rapidement : bâche d'urgence si la météo presse, recherche de l'origine de la fuite ou de l'infiltration, puis réparation durable. L'expérience au service de votre tranquillité.",
      },
      {
        type: 'gouttiere',
        titre: 'Pose et remplacement de gouttières',
        texte:
          "Gouttière vieillissante ou sous-dimensionnée ? J'installe à Rambouillet des gouttières et des descentes en zinc, en aluminium ou en PVC, posées avec des pentes justes pour une évacuation efficace.",
      },
      {
        type: 'demoussage',
        titre: 'Démoussage et nettoyage de toiture',
        texte:
          "Le nettoyage d'un toit à Rambouillet se réussit avec la bonne technique : celle qui retire mousses et dépôts sans altérer la couverture. Un geste de professionnel, mesuré et efficace.",
      },
      {
        type: 'facade',
        titre: 'Nettoyage de façade',
        texte:
          "Renaud Rénov, spécialiste de l'entretien des façades, lave vos murs et applique les traitements adaptés à chaque revêtement. Le professionnalisme d'un artisan, jusqu'aux extérieurs de la maison.",
      },
      {
        type: 'zinguerie',
        titre: 'Travaux de zinguerie',
        texte:
          "Solins, noues, chéneaux, habillages de rive : le zinc protège les points sensibles de la toiture. Un savoir-faire de couvreur zingueur, appliqué avec le même soin sur les maisons anciennes et récentes.",
      },
    ],
    ctaTitre: 'Contactez votre couvreur zingueur à Rambouillet',
    ctaTexte:
      "M. Renaud vient examiner votre toiture à Rambouillet et vous restitue un diagnostic clair : ce que le toit demande vraiment, dans quel ordre, et à quel coût. Quinze années d'expérience des travaux de couverture, un savoir-faire familial, un devis gratuit — et aucune pression pour décider.",
    finalH2: 'Faites appel à un artisan couvreur pour la réfection de votre toiture',
    finalParas: [
      "La réfection d'une toiture est un chantier qu'on ne confie pas à n'importe qui — et c'est normal. Ce que Renaud Rénov met dans la balance, c'est une pratique du métier transmise sur deux générations et plus de quinze années de chantiers : assez de toits vus, réparés et refaits pour savoir ce qui attend derrière chaque type de couverture, et pour préparer le chantier de Rambouillet sans improvisation. Cette préparation est la meilleure assurance contre les surprises : tout ce qui doit être vérifié l'est en amont du premier jour.",
      "Le savoir-faire d'entretien vient en premier : c'est lui qui dit si la réfection est nécessaire. Un toit régulièrement nettoyé, protégé par un <a href=\"/traitement-hydrofuge-28/\">traitement hydrofuge</a> et surveillé livre un diagnostic fiable — on sait ce qui a été fait, on voit ce qui évolue. J'examine la couverture, la zinguerie et les combles avant de me prononcer, et je recommande la réfection uniquement quand l'entretien ne suffit plus. Le diagnostic est restitué simplement, photos à l'appui quand c'est utile, pour décider posément.",
      "La réfection elle-même mobilise tout le métier : dépose, contrôle de la charpente, écran de sous-toiture, liteaunage, pose de la nouvelle couverture et zinguerie façonnée sur mesure. J'organise le chantier pour protéger la maison à chaque étape et tenir le délai annoncé. Le résultat est un toit neuf, étanche, couvert par la garantie décennale. Les abords de la maison restent protégés pendant toute la durée des travaux, et le chantier est rendu propre.",
      "Chaque matériau a ses règles — pente, recouvrement, fixation — et je les applique strictement, qu'il s'agisse de tuile mécanique, de tuile plate ou d'ardoise. Un dernier conseil avant de commencer : refaire certains travaux sur une toiture implique le respect du code de l'urbanisme, notamment du plan local d'urbanisme ou du plan d'occupation des sols, et une déclaration préalable est souvent requise. Selon la nature des travaux, la simple déclaration suffit ou un dossier plus complet est exigé. Le service urbanisme de la mairie de Rambouillet vous indiquera les démarches à prévoir.",
    ],
    mairieAdresse: '2 place de la Libération',
    mairieSite: 'https://rambouillet.fr/',
    avisOrdre: 13,
  },

  houdan: {
    title: 'Couvreur à Houdan — Devis gratuit — Renaud Rénov',
    h1: 'Entreprise de couverture à Houdan',
    metaDesc:
      "Nettoyage de toiture, réparation de fuite et rénovation à Houdan par Renaud Rénov, artisan couvreur de père en fils. ✓ Devis gratuit ✓ 02 34 40 17 61.",
    chapo:
      "Il vous faut un spécialiste de la toiture à Houdan ? <strong>Renaud Rénov</strong>, <a href=\"/\">artisan couvreur en Eure-et-Loir</a>, est votre professionnel : démoussage et nettoyage de la toiture, application de traitements hydrofuges, recherche de fuites ou réparation d'infiltration.",
    coches: ['Entreprise artisanale de couverture', "Plus de 15 années d'expérience", 'Tous matériaux de couverture'],
    servicesH2: 'Mes services de couvreur zingueur à Houdan',
    cartes: [
      {
        type: 'facade',
        titre: 'Nettoyage de façade',
        texte:
          "Renaud Rénov, spécialiste de l'entretien des façades, nettoie vos murs et applique les traitements qui conviennent à chaque revêtement. Un savoir-faire d'artisan pour des extérieurs sains.",
      },
      {
        type: 'renovation',
        titre: 'Rénovation et remplacement de toiture',
        texte:
          "M. Renaud maîtrise tous les matériaux de couverture présents à Houdan : tuile plate, tuile mécanique, ardoise, et le zinc quand le bâtiment s'y prête. Votre toiture est refaite dans les règles de l'art.",
      },
      {
        type: 'zinguerie',
        titre: 'Zinguerie : solins, noues et chéneaux',
        texte:
          "J'entretiens, répare et remplace les ouvrages de zinguerie de votre toiture à Houdan : solins de cheminée, noues, chéneaux et habillages de rive, façonnés et posés dans les règles de l'art.",
      },
      {
        type: 'reparation',
        titre: 'Réparation de toiture à Houdan',
        texte:
          "Fuite ou infiltration ? J'interviens rapidement : bâche posée en urgence si nécessaire, origine du problème identifiée, réparation durable. La proximité de l'artisan fait la vitesse d'intervention.",
      },
      {
        type: 'demoussage',
        titre: 'Nettoyage et démoussage de toiture',
        texte:
          "Le nettoyage d'un toit à Houdan se fait sans brutalité : technique choisie selon le matériau, produits professionnels correctement dosés, et une couverture débarrassée des mousses sans dommage.",
      },
      {
        type: 'gouttiere',
        titre: 'Pose et remplacement de gouttières',
        texte:
          "Une évacuation d'eaux pluviales fiable commence par des gouttières bien posées. Pose neuve, remplacement, raccordement des descentes : je travaille le zinc, l'aluminium et le PVC.",
      },
    ],
    ctaTitre: 'Votre artisan couvreur à Houdan vient étudier votre toiture',
    ctaTexte:
      "M. Renaud se déplace rapidement chez vous à Houdan pour examiner le toit — couverture, zinguerie, gouttières — et vous dire précisément où il en est. Quinze années d'expérience des travaux de couverture, un regard nuancé, et un devis gratuit détaillé pour décider sans pression.",
    finalH2: "Faites appel à un couvreur zingueur pour l'entretien de votre toit",
    finalParas: [
      "Entretenir un toit, c'est le métier dans ce qu'il a de plus exigeant : il faut connaître les couvertures pour les nettoyer sans les user, et connaître l'eau pour la garder dehors. Renaud Rénov, entreprise artisanale forte de plus de quinze années d'expérience, met ce double savoir-faire au service des habitants de Houdan, avec des interventions régulières qui gardent les toitures en bon état année après année. Chaque visite commence par un examen et se termine par un compte rendu clair : ce qui va, ce qui s'use, ce qu'il faut prévoir.",
      "Concrètement, l'entretien se joue sur des gestes précis : un démoussage adapté au matériau et à son état, un <a href=\"/traitement-hydrofuge-28/\">traitement hydrofuge</a> appliqué sur un support préparé, des gouttières dégagées avant les pluies, des points singuliers — solins, faîtage, noues — contrôlés à chaque passage. Ces vérifications prennent peu de temps et évitent l'essentiel des sinistres : c'est le meilleur investissement qu'un toit puisse recevoir.",
      "Quand une intervention plus lourde s'annonce, le même artisan la prend en charge : réparation après un coup de vent, reprise de zinguerie, remplacement d'une couverture arrivée en fin de vie. À Houdan, cette continuité a une vertu simple : celui qui entretient votre toit le connaît, et les décisions se prennent sur l'historique réel de la couverture, passage après passage. Les travaux sont chiffrés dans un devis détaillé, gratuit et sans engagement.",
      "La connaissance des matériaux traverse tout le métier : tuile plate, tuile mécanique et ardoise ont chacune leurs règles de pente, de recouvrement et de fixation, et les respecter est la condition d'une toiture étanche. Un mot enfin sur la réglementation : refaire certains travaux sur une toiture implique le respect du code de l'urbanisme — notamment du plan local d'urbanisme ou du plan d'occupation des sols — et une déclaration préalable est parfois exigée. Ces règles varient selon les communes et peuvent évoluer : vérifiez-les avant de lancer le chantier. Le service urbanisme de la mairie de Houdan vous renseignera sur votre cas.",
    ],
    mairieAdresse: '69 Grande Rue',
    mairieSite: 'http://www.villehoudan.fr/',
    avisOrdre: 16,
  },
};
