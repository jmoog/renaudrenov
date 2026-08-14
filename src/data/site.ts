// ─────────────────────────────────────────────────────────────────────────
// Informations centrales de l'entreprise — modifier ici se répercute partout.
// ─────────────────────────────────────────────────────────────────────────
export const SITE = {
  nom: 'RENAUD RÉNOV',
  nomLegal: 'ENTREPRISE RENAUD RÉNOV',
  slogan: 'Artisan couvreur en Eure-et-Loir (28)',
  baseline: 'Couverture · Nettoyage & démoussage · Zinguerie',

  // Description CANONIQUE de l'entreprise — sert au nœud LocalBusiness des
  // données structurées sur TOUTES les pages. Ne jamais la remplacer par la
  // meta description de la page : la même entreprise doit être décrite de la
  // même façon partout, sinon Google reçoit 44 versions de la même entité.
  descriptionEntreprise:
    "Renaud Rénov est une entreprise familiale de couverture installée à Villiers-le-Morhier, en Eure-et-Loir. Nettoyage et démoussage de toiture, traitement hydrofuge, nettoyage de façade, réparation et rénovation de toiture, zinguerie et pose de gouttières, en Eure-et-Loir (28) et aux portes des Yvelines (78).",

  // Identité légale (source : extrait Pappers, cf. mentions légales).
  siren: '944707710',
  siret: '94470771000017',
  tvaIntra: 'FR34944707710',
  formeJuridique: 'SASU',
  dateCreation: '2025-05-20',

  // Contact
  // Numéro principal (ligne fixe) — à mettre en avant partout.
  tel: '02 34 40 17 61',
  telE164: '+33234401761',
  telHref: 'tel:+33234401761',
  // Numéro mobile réservé aux urgences (fuite active, sinistre, bâchage).
  telUrgence: '07 64 40 24 22',
  telUrgenceE164: '+33764402422',
  telUrgenceHref: 'tel:+33764402422',
  whatsapp: 'https://wa.me/33764402422',
  email: 'artisan.renaud.couverture@gmail.com',

  // Implantation
  ville: 'Villiers-le-Morhier',
  cp: '28130',
  rue: 'Rue des Roches',
  departement: 'Eure-et-Loir',
  departementNum: '28',
  region: 'Centre-Val de Loire',
  // Communes limitrophes réellement desservies hors 28 (Rambouillet, Houdan).
  departementSecondaire: 'Yvelines',
  departementSecondaireNum: '78',
  // Coordonnées EXACTES de la fiche Google Business Profile (relevées le
  // 14/08/2026 sur https://maps.app.goo.gl/KyPLHBkDXFXvFzpH6). Les anciennes
  // valeurs, approximatives, plaçaient l'entreprise ~1,9 km à côté : site et
  // fiche Google doivent pointer le même endroit.
  geo: { lat: 48.6371441, lng: 1.5957166 },

  // Réseaux & avis
  facebook: 'https://www.facebook.com/profile.php?id=100063482144146',
  // Lien « humain » affiché en pied de page (ouvre les avis).
  googleAvis: 'https://share.google/22rQqyvQnh4yaRM8Y',
  // URL CANONIQUE de la fiche Google (CID 14052741967471377792) — c'est elle
  // qui va dans `sameAs` : un raccourci share.google ou maps.app.goo.gl n'est
  // pas une URL d'entité stable.
  googleFiche: 'https://www.google.com/maps?cid=14052741967471377792',

  // Dirigeant
  dirigeant: 'Jordy Renaud',

  // URL de production (à ajuster au déploiement)
  url: 'https://renaud-renov.fr',

  // Horaires
  horaires: 'Du lundi au samedi, de 8 h 00 à 20 h 00',
};
