// ─────────────────────────────────────────────────────────────────────────
// Fabrique des données structurées (JSON-LD) du site — source unique.
//
// PRINCIPE (14/08/2026, refonte après audit) : chaque page n'émet qu'UN SEUL
// bloc <script type="application/ld+json">, construit par BaseLayout, qui
// contient un « @graph » :
//
//   [ RoofingContractor #localbusiness , WebSite #website , <Page> #webpage ,
//     ...extraSchemas de la page ]
//
// Conséquence : plus jamais deux nœuds portant le même @id dans deux scripts
// séparés (le défaut qui touchait les 14 pages villes). Une page qui veut
// enrichir la fiche entreprise passe `enrichissementEntreprise` à BaseLayout,
// et ces propriétés sont FUSIONNÉES dans l'unique nœud #localbusiness.
//
// Toutes les fonctions ci-dessous renvoient des nœuds SANS « @context » :
// c'est le graphe de BaseLayout qui le porte, une fois pour toutes.
// ─────────────────────────────────────────────────────────────────────────
import { SITE } from '../data/site.ts';
import services from '../data/services.json';

// ── Identifiants stables du graphe ───────────────────────────────────────
export const ID_ENTREPRISE = `${SITE.url}/#localbusiness`;
export const ID_SITE_WEB = `${SITE.url}/#website`;

/** URL absolue d'un chemin interne (`/zinguerie-28/` → `https://…/zinguerie-28/`). */
export const abs = (chemin: string): string =>
  chemin.startsWith('http') ? chemin : `${SITE.url}${chemin}`;

// ── Zone d'intervention réelle ───────────────────────────────────────────
// Le 28 est le cœur de zone, mais Rambouillet (78120) et Houdan (78550) sont
// dans les Yvelines : déclarer le seul 28 contredisait deux pages du site.
export const ZONES_SERVIES = [
  { '@type': 'AdministrativeArea', name: `${SITE.departement} (${SITE.departementNum})` },
  {
    '@type': 'AdministrativeArea',
    name: `${SITE.departementSecondaire} (${SITE.departementSecondaireNum})`,
  },
];

/** Nœud City normalisé pour une commune (pages villes et satellites). */
export const commune = (nom: string, cp: string) => ({
  '@type': 'City',
  name: nom,
  postalCode: cp,
  address: {
    '@type': 'PostalAddress',
    addressLocality: nom,
    postalCode: cp,
    addressCountry: 'FR',
  },
});

// ── Compétences : une seule liste pour tout le site ──────────────────────
// (avant la refonte, BaseLayout, les 13 pages villes et Maintenon en avaient
// trois versions différentes, dont une bourrée de mots-clés géolocalisés).
export const COMPETENCES = [
  'Couverture tuile et ardoise',
  'Nettoyage de toiture',
  'Démoussage de toiture',
  'Traitement hydrofuge',
  'Nettoyage de façade',
  'Réparation de toiture',
  'Recherche de fuite de toiture',
  'Rénovation de toiture',
  'Zinguerie',
  'Pose de gouttière',
];

// ── Catalogue de prestations ─────────────────────────────────────────────
// Le nettoyage de façade est volontairement HORS services.json (choix client
// sur la navigation), mais c'est bel et bien une prestation vendue : elle doit
// figurer au catalogue, sinon knowsAbout et hasOfferCatalog se contredisent.
const PRESTATIONS = [
  ...services.map((s) => ({ label: s.label, href: s.href })),
  { label: 'Nettoyage de façade', href: '/nettoyage-facade-28/' },
];

/**
 * Catalogue d'offres rattaché à la fiche entreprise.
 * @param zone suffixe de libellé, ex. « en Eure-et-Loir » ou « à Maintenon ».
 */
export function cataloguePrestations(zone: string) {
  return {
    '@type': 'OfferCatalog',
    name: `Prestations de couverture ${zone}`,
    itemListElement: PRESTATIONS.map((p, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: {
        '@type': 'Service',
        name: p.label,
        url: abs(p.href),
        provider: { '@id': ID_ENTREPRISE },
      },
    })),
  };
}

// ── Offre ────────────────────────────────────────────────────────────────
// Avant la refonte : `{ priceCurrency: 'EUR', availability: 'InStock' }` —
// une devise sans prix ne dit rien, et « en stock » est une notion de stock
// marchand qui n'a pas de sens pour une prestation d'artisan. On déclare
// désormais ce qui est vrai : l'offre s'obtient sur la page devis, en euros,
// vendue par l'entreprise.
export const offreDevis = () => ({
  '@type': 'Offer',
  name: 'Devis gratuit et sans engagement',
  url: `${SITE.url}/devis-gratuit/`,
  priceCurrency: 'EUR',
  seller: { '@id': ID_ENTREPRISE },
});

// ── Service ──────────────────────────────────────────────────────────────
export interface OptionsService {
  /** Chemin interne de la page, avec slash final. */
  chemin: string;
  serviceType: string;
  nom: string;
  description: string;
  /** Chemin interne d'une photo représentative (optionnel mais recommandé). */
  image?: string;
  /** Zone servie : par défaut le 28 + le 78. */
  zone?: object | object[];
}

/**
 * Nœud Service normalisé — utilisé par les 7 piliers, les 14 satellites et
 * les pages réalisations, pour que tous portent exactement les mêmes champs.
 */
export function schemaService({ chemin, serviceType, nom, description, image, zone }: OptionsService) {
  const url = abs(chemin);
  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    serviceType,
    name: nom,
    description,
    url,
    ...(image ? { image: abs(image) } : {}),
    provider: { '@id': ID_ENTREPRISE },
    areaServed: zone ?? ZONES_SERVIES,
    offers: offreDevis(),
    mainEntityOfPage: { '@id': `${url}#webpage` },
  };
}

// ── FAQ ──────────────────────────────────────────────────────────────────
/**
 * Questions d'une FAQ, à passer en `mainEntitePage` à BaseLayout avec
 * `typePage="FAQPage"`. La page elle-même devient le nœud FAQPage : on évite
 * ainsi d'avoir un WebPage et un FAQPage décrivant la même URL.
 *
 * @param nettoyerHtml met à `true` si les réponses contiennent des balises.
 */
export function questionsFaq(
  chemin: string,
  faq: { q: string; r: string }[],
  nettoyerHtml = false
) {
  const url = abs(chemin);
  return faq.map((f, i) => ({
    '@type': 'Question',
    '@id': `${url}#question-${i + 1}`,
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: nettoyerHtml ? f.r.replace(/<[^>]+>/g, '') : f.r,
    },
  }));
}

// ── Photos de chantier (pages réalisations) ──────────────────────────────
/** Lieu d'un chantier, réutilisé par toutes les photos d'une même page. */
export const lieuChantier = (nom: string, ville: string, cp: string) => ({
  '@type': 'Place',
  name: nom,
  address: {
    '@type': 'PostalAddress',
    addressLocality: ville,
    postalCode: cp,
    addressRegion: SITE.region,
    addressCountry: 'FR',
  },
});

export interface OptionsPhoto {
  /** URL absolue de la page qui porte la photo. */
  pageUrl: string;
  /** Suffixe d'@id, unique dans la page (ex. « entree-avant »). */
  cle: string;
  /** Chemin interne du fichier image. */
  fichier: string;
  nom: string;
  legende: string;
  lieu: object;
  /** Photo principale de la page (une seule par page). */
  principale?: boolean;
}

/**
 * ImageObject complet — crédit, licence et page d'acquisition : c'est ce qui
 * rend une photo éligible au badge « Licensable » de Google Images.
 * `contentUrl` pointe le fichier, `mainEntityOfPage` la page : avant la
 * refonte, `url` pointait la page, ce qui brouillait l'identité du nœud.
 */
export function photoChantier({ pageUrl, cle, fichier, nom, legende, lieu, principale = false }: OptionsPhoto) {
  const licence = `${SITE.url}/mentions-legales/`;
  return {
    '@type': 'ImageObject',
    '@id': `${pageUrl}#photo-${cle}`,
    contentUrl: abs(fichier),
    name: nom,
    caption: legende,
    encodingFormat: 'image/webp',
    contentLocation: lieu,
    creator: { '@id': ID_ENTREPRISE },
    copyrightHolder: { '@id': ID_ENTREPRISE },
    creditText: SITE.nom,
    copyrightNotice: `© ${SITE.nomLegal}`,
    license: licence,
    acquireLicensePage: licence,
    mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
    ...(principale ? { representativeOfPage: true } : {}),
  };
}
