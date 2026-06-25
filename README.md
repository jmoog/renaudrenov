# Renaud Renov — site Astro

Site vitrine de **Renaud Renov**, artisan couvreur en Eure-et-Loir (28).
Stack : [Astro](https://astro.build) (statique + adaptateur Node pour la route `/api/devis`), police Inter auto-hébergée, CSS vanilla inliné.

## Démarrer

```bash
npm install
npm run dev      # serveur de dev sur http://localhost:4321
npm run build    # build de production dans dist/
npm run preview  # prévisualise le build
```

## Structure

- `src/data/site.ts` — informations centrales de l'entreprise (NAP, contacts, charte). **Modifier ici pour tout mettre à jour.**
- `src/data/services.json` — liste des prestations.
- `src/data/reviews.json` — avis Google.
- `src/data/villes.json` — communes de la zone d'intervention.
- `src/styles/global.css` — design system (charte marine `#244B64` / orange `#EF7E0F`).
- `src/pages/` — pages : accueil, à-propos, devis-gratuit, mentions-légales (+ merci, 404).
- `src/pages/api/devis.ts` — traitement du formulaire (envoi via Brevo).

## Formulaire de devis

Le formulaire envoie les emails via l'API Brevo. Copier `.env.example` vers `.env` et renseigner
les clés (Brevo, emails admin, Turnstile). Sans `BREVO_API_KEY`, l'envoi est désactivé.

## À compléter (mentions légales)

- SIRET (14 chiffres), RCS / ville d'immatriculation, code APE.
- Assurance décennale : nom de l'assureur + zone couverte.
- Coordonnées GPS exactes du siège (dans `src/data/site.ts`).
- Confirmer la note et le nombre d'avis Google réels (`src/data/reviews.json`).
# renaudrenov
