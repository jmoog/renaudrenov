# Blueprint SEO local — Renaud Rénov (28)

**Mode 2 — site existant.** Diagnostic mesuré sur le site réel, puis matrice d'extension.
Périmètre : Eure-et-Loir + frange Yvelines. Budget rédactionnel retenu : **20 à 30 pages de 800 mots**.

Méthode de mesure : build Astro complet du dépôt (`npx astro build`, build vert, 28 pages HTML générées), puis parsing des balises, du graphe de liens, des ancres, du JSON-LD et du texte de corps (header/footer retirés). Aucune valeur de ce document n'est estimée : toutes sont comptées sur le HTML produit.

---

## 0. Résumé en dix lignes

Le site est **au-dessus des 3 sites de couverture audités par la méthode** (12 à 19 points sur 49) : **32/49**. Il a déjà ce qu'aucun d'eux n'a — une seule adresse réelle, un fil d'Ariane HTML, du `BreadcrumbList`, un `RoofingContractor` fusionné par `@id`, pas d'`aggregateRating` interdit, et un levier local vérifiable sur 14 pages villes sur 14.

Ce qui plafonne le site tient en trois points :

1. **Les 14 pages villes sont un seul gabarit répété.** 1 formule de title, 1 formule de H1, ~170 mots réellement uniques par page sur ~1 000 affichés.
2. **20 ancres réclament 20 pages qui n'existent pas.** Les blocs « zones » des pages *nettoyage* et *hydrofuge* posent des ancres `démoussage de toiture à Maintenon`, `hydrofuge de toiture à Épernon`… qui pointent vers `/villes/{x}/`, dont le title ne contient ni « démoussage » ni « hydrofuge ». C'est le test de la Loi 6, et il désigne précisément la matrice manquante.
3. **Les pages villes ne reçoivent presque aucun lien in-body**, ne se lient jamais entre elles, et le footer répété (29 liens) + le header dupliqué desktop/mobile (19 liens) écrasent le ratio liens/mots à 1/14,5.

La bonne nouvelle : les points 1 et 3 se corrigent **dans le template**, une fois, pour les 14 pages. Le point 2 est le seul qui consomme du budget rédactionnel.

---

## 1. Périmètre mesuré

| Niveau | URLs | Détail |
|---|---|---|
| 0 — Accueil | 1 | cible `couvreur 28` / `couvreur Eure-et-Loir` |
| 1a — Prestations | 7 | 6 au menu + `/prestations/nettoyage-facade/` (hors nav, hors sitemap) |
| 1b — Villes | 14 | `/villes/{slug}/` — 12 par template `[slug].astro`, 2 fichiers dédiés |
| 2 — Service × ville | **0** | **le niveau manquant** |
| 3 — Blog | **0** | **absent** |
| Réalisations | 1 | `/realisations/demoussage-toiture-maintenon/` |
| Utilitaires | 5 | devis (SSR), à-propos, mentions, plan du site, merci, 404 |

**Hubs de silo absents :** `/prestations/`, `/villes/` et `/realisations/` répondent 404 alors que 22 pages en dépendent. C'est l'erreur exacte du site C audité (`/indre-et-loire` en 404 sous 29 pages).

---

## 2. Score de recette — 32/49

Palier atteint : **20-34 = « correct, tient face à un concurrent sérieux »**. Le seuil de mise en ligne sereine sur un marché disputé est 35.

| Bloc | Score | Ce qui passe | Ce qui bloque |
|---|---|---|---|
| **A. Architecture & URLs** | **5/7** | slugs uniques, ASCII, aucune page hors zone, canonicals auto-référentes | **A3** hubs de silo en 404 · **A7** `nettoyage-facade` absente du sitemap |
| **B. Balises** | **5/11** | H1 20-70, tête H1 ≠ tête title, meta ≠ H1, meta non auto-générée, pas de conflit de CP | **B1** 4 titles > 60 car. et 13 titles à 36-49 car. (place perdue) · **B2** 10 metas hors 140-158 · **B4** aucun garde-fou de longueur · **B6** « couvreur » absent des 14 H1 villes · **B7** 2 metas paraphrasent le title · **B11** 1 combinaison title+H1 pour 14 pages |
| **C. Typographie** | **3/5** | toponymes complets et accentués, prépositions correctes, pas de caractère parasite | **C1** trois séparateurs de title cohabitent (`—`, `\|`, `-`) · **C2** « Renaud Renov » sans accent dans une meta |
| **D. Maillage** | **4/11** | 9-10 liens in-body par page ville, ancres service×ville présentes, aucun libellé non lié | **D1** ancre accueil répétée · **D3** aucun bloc villes proches · **D4** auto-liens footer et header · **D5** 20 ancres orphelines · **D8** jusqu'à 4 liens vers la même cible depuis une page · **D9** villes quasi footer-only · **D11** ratio 1/14,5 |
| **E. Blog** | **0/5** | — | aucun blog |
| **F. Contenu** | **5/7** | aucune paire > 90 %, hero ≠ meta, pas de témoignage en tête, aucune fuite de variable | **F1** ~170 mots uniques/page ville (seuil 800) · **F2** duplication médiane 44 % · **F3** bloc commun ≈ 50 % du corps |
| **G. Ancrage local** | **4/5** | levier vérifiable sur 14/14, toponymes exacts, aucun repère emprunté, **les 14 liens mairie pointent tous vers la bonne commune** | **G4** « 15 années d'expérience » face à un SIREN de mai 2025 |
| **H. Interdits éditoriaux** | **1/6** | pas de description du bâti local | climat (gel, humidité, intempéries, « fenêtre météo »), « sécurité », « méthode », « travail soigné », une promesse (« je vous garantis ») |
| **I. E-E-A-T / NAP / schema** | **5/10** | **une seule adresse réelle**, NAP cohérent, note avec son volume, **aucun `aggregateRating`**, fil d'Ariane HTML, aucun lieu physique inventé | **I3** SIRET absent du footer · **I4** assureur décennale non nommé · **I5** ancienneté · **I7** 1 à 3 `alt` sur 17 citent la commune · **I8** `Service` sur 2 pages sur 7, `FAQPage` sur 2 |

> **Bloc H — lecture obligatoire.** La règle projet du 23/07/2026 est que **le contenu textuel existant est intouchable**. Le bloc H est donc livré comme un relevé, pas comme une liste de corrections à appliquer. Rien n'y sera modifié sans un feu vert explicite de Jordy, et la plupart des occurrences relevées sont dans des **avis clients recopiés mot pour mot** — donc légitimes et à conserver telles quelles. Les seules occurrences en copie rédactionnelle sont : le badge « Travail soigné » de `/a-propos/`, une phrase de `/prestations/reparation-toiture/`, une de `/prestations/traitement-hydrofuge/`, et « je vous garantis » sur l'accueil.

---

## 3. Les 6 indicateurs de contrôle

| # | Indicateur | Seuil | **Renaud Rénov** | Site A | Site B | Site C |
|---|---|---|---|---|---|---|
| 1 | Combinaisons de balises uniques | > nb de pages | **1 title + 1 H1 pour 14 pages** ❌ | 12/90 | ~168/47 ✅ | 28/29 |
| 2 | Ancre → accueil la plus répétée | ≤ 2 | **26** (`Accueil`, fil d'Ariane) · **5** hors fil d'Ariane ❌ | 91 | 1 ✅ | 43 |
| 3 | Ratio liens / mots | ≥ 1/25 | **1/14,5** ❌ | 1/20 | 1/11 | 1/7 |
| 4 | Duplication inter-pages villes | < 30 % | **médiane 44 %, max 70 %** ❌ | 90-95 % | 65-70 % | 95-97 % |
| 5 | Ancres orphelines de cible | 0 | **20** ❌ | 2 | 1 | 2 |
| 6 | Pages avec ≥ 1 levier local vérifiable | 100 % | **100 % (14/14)** ✅ | 10 % | 96 % ✅ | 0 % |

**1 indicateur sur 6.** Les trois sites audités en passent au mieux 2 — et rankent. L'indicateur 6, le plus coûteux à obtenir, est déjà acquis ici.

### Détail de l'indicateur 4 — mots réellement uniques par page ville

Mesuré par 6-grammes, chaque page comparée à l'union des 13 autres.

| Page | Mots affichés | **Mots uniques** | Part |
|---|---|---|---|
| villiers-le-morhier | 1 165 | **438** | 37,7 % |
| maintenon | 1 107 | **330** | 29,9 % |
| epernon | 1 023 | 177 | 17,4 % |
| hanches / chartres / bouglainval | ~1 000 | 172-175 | ~17 % |
| gallardon / saint-piat | ~1 010 | 167-170 | ~17 % |
| auneau / nogent-le-roi | ~1 015 | 158-162 | ~16 % |
| houdan / rambouillet / pierres | ~1 000 | 152-155 | ~15,5 % |
| **dreux** | 1 003 | **149** | **14,9 %** |

Les 2 pages écrites à la main (siège + Maintenon) sont 2 fois plus uniques que les 12 générées. Le gabarit est le plafond, pas le sujet.

---

## 4. Test de la Loi 6 — les 20 ancres orphelines

> *La page cible contient-elle ce mot-clé dans son `<title>` ? Non, et aucune page ne correspond → **crée la page**.*

Les blocs « zones d'intervention » de `/prestations/nettoyage-demoussage-toiture/` et `/prestations/traitement-hydrofuge/` posent 20 liens dont l'ancre est déjà un couple service + ville parfait — vers une cible qui ne porte pas le service.

| Ancre posée | Cible actuelle | Title de la cible | Verdict |
|---|---|---|---|
| `démoussage de toiture à Maintenon` | `/villes/maintenon/` | `Couvreur à Maintenon (28) — Renaud Rénov` | ❌ orpheline |
| `nettoyage de toiture à Épernon` | `/villes/epernon/` | `Couvreur à Épernon (28)…` | ❌ orpheline |
| `traitement anti-mousse à Nogent-le-Roi` | `/villes/nogent-le-roi/` | idem | ❌ orpheline |
| `nettoyer un toit à Gallardon` | `/villes/gallardon/` | idem | ❌ orpheline |
| `démousser votre toiture à Villiers-le-Morhier` | `/villes/villiers-le-morhier/` | idem | ❌ orpheline |
| `entretien de toiture à Pierres` | `/villes/pierres/` | idem | ❌ orpheline |
| `nettoyage de couverture à Hanches` | `/villes/hanches/` | idem | ❌ orpheline |
| `démoussage de toit à Saint-Piat` | `/villes/saint-piat/` | idem | ❌ orpheline |
| `couvreur nettoyage toiture à Chartres` | `/villes/chartres/` | idem | ⚠️ « couvreur » présent |
| `traitement des mousses à Dreux` | `/villes/dreux/` | idem | ❌ orpheline |
| `hydrofuge de toiture à Maintenon` | `/villes/maintenon/` | idem | ❌ orpheline |
| `résine de toiture à Épernon` | `/villes/epernon/` | idem | ❌ orpheline |
| `imperméabilisation de toit à Nogent-le-Roi` | `/villes/nogent-le-roi/` | idem | ❌ orpheline |
| `protection des tuiles à Gallardon` | `/villes/gallardon/` | idem | ❌ orpheline |
| `traitement hydrofuge à Villiers-le-Morhier` | `/villes/villiers-le-morhier/` | idem | ❌ orpheline |
| `hydrofuge coloré à Pierres` | `/villes/pierres/` | idem | ❌ orpheline |
| `protéger sa toiture à Hanches` | `/villes/hanches/` | idem | ❌ orpheline |
| `résine hydrofuge à Saint-Piat` | `/villes/saint-piat/` | idem | ❌ orpheline |
| `toiture imperméabilisée à Bouglainval` | `/villes/bouglainval/` | idem | ❌ orpheline |
| `couvreur hydrofuge à Chartres` | `/villes/chartres/` | idem | ⚠️ « couvreur » présent |

**Ces 20 ancres sont la meilleure nouvelle du diagnostic.** Elles sont bien écrites (20 à 45 caractères, service + ville, jamais de toponyme nu isolé) — c'est exactement ce qu'aucune des 268 pages auditées ne fait. Il ne manque que les pages au bout.

**Deux réponses possibles, à panacher selon le budget :**
- **Créer la page** `/prestations/{service}/{ville}/` → l'ancre devient parfaite. Coût : 800 mots uniques.
- **Retargeter l'ancre** en `couvreur à {Ville}` vers la page ville existante. Coût : nul, gain moindre.

---

## 5. Les 7 lois du maillage — état

| Loi | État | Mesure |
|---|---|---|
| **1** — Répartir le budget d'ancres | 🟡 partiel | 9-10 liens in-body par page ville, mais **0 vers une autre ville**, 0 vers le blog, 6 vers les prestations (bien) |
| **2** — Ancre accueil jamais répétée | 🔴 | 43 liens in-body vers `/`, **6 formulations**. `Accueil` ×26 (fil d'Ariane), `couvreur dans le 28` ×5, `couvreur en Eure-et-Loir` ×5, `artisan couvreur du 28` ×4 |
| **3** — Bloc villes proches géographique | 🔴 absent | Aucune page ville ne lie une autre page ville. La liste footer est exhaustive, même ordre partout, **auto-lien inclus** |
| **4** — Croiser service × ville dans les ancres | 🟢 **fait** | 20 ancres service×ville existent — le gisement que les 3 sites audités laissent entièrement (0/268). Reste à leur donner la bonne cible (Loi 6) |
| **5** — Le blog comme organe descendant | 🔴 absent | 0 article |
| **6** — Aucune ancre orpheline | 🔴 | 20 ancres, §4 |
| **7** — Footer = indexation, pas jus | 🔴 | **31 liens footer + 19 liens header** (nav desktop + tiroir mobile, les deux dans le DOM) = **50 liens de chrome par page**, pour ~1 000 mots. Auto-lien présent dans les deux blocs |

### Le poste le plus rentable du maillage : le header dupliqué

Le composant `Header.astro` rend **deux fois** l'ensemble des liens — la barre desktop (8 liens) et le tiroir mobile (11 liens) — les deux dans le HTML de chaque page. Chaque page ville envoie donc jusqu'à **4 liens vers `/prestations/zinguerie/`** : nav desktop, tiroir mobile, carte de service en corps, footer. Seul le premier compte.

Masquer le tiroir en CSS ne suffit pas : les liens sont dans le DOM. Rendre le tiroir conditionnellement (ou le construire en JS au clic) supprime d'un coup 11 liens par page — le ratio liens/mots passe mécaniquement de **1/14,5 à ~1/17** sans toucher une ligne de contenu.

---

## 6. La matrice cible

### 6.1 Le dimensionnement, à l'envers

Budget : 20 à 30 pages de 800 mots uniques, soit **16 000 à 24 000 mots réellement uniques**.

Le réflexe serait de créer les 20 pages service×ville que les ancres réclament. **C'est le piège du site C** : 29 pages générées, 3-5 % de contenu unique, figées 32 mois. Créer 20 pages neuves pendant que les 14 existantes plafonnent à 170 mots uniques revient à ajouter une deuxième couche de gabarit sur la première.

**Allocation recommandée :**

| Poste | Pages | Mots uniques | Ce que ça achète |
|---|---|---|---|
| **A. Enrichir les 14 pages villes existantes** | 14 | **+8 400** (600/page) | fait passer chaque page de ~170 à ~770 mots uniques → indicateur 4 sous 30 % |
| **B. Créer 12 couples service × ville** | 12 | **9 600** (800/page) | résorbe 12 des 20 ancres orphelines, ouvre le niveau 2 |
| **C. Retargeter les 8 ancres restantes** | 0 | 0 | ancre → `couvreur à {Ville}` vers la page ville, coût nul |
| **Total** | **équivalent 26 pages** | **18 000** | tient dans le budget 20-30 |

Le blog (Loi 5) et les nouvelles communes passent en phase suivante. **Ne pas ouvrir un troisième chantier rédactionnel avant que A et B soient finis.**

### 6.2 Les 12 couples service × ville à créer

Les 2 services phares sont ceux qui portent déjà les ancres et le contenu le plus abouti : **nettoyage-démoussage** (1 215 mots) et **traitement hydrofuge** (1 503 mots). Croisés avec les 6 communes cœur, choisies par distance au siège et par présence d'une ancre existante :

| # | URL | Commune | km du siège | Population |
|---|---|---|---|---|
| 1 | `/prestations/nettoyage-demoussage-toiture/villiers-le-morhier/` | Villiers-le-Morhier | 0 | 1 351 |
| 2 | `…/pierres/` | Pierres | 4,0 | 2 788 |
| 3 | `…/maintenon/` | Maintenon | 4,3 | 4 494 |
| 4 | `…/nogent-le-roi/` | Nogent-le-Roi | 4,3 | 4 021 |
| 5 | `…/hanches/` | Hanches | 5,2 | 2 696 |
| 6 | `…/epernon/` | Épernon | 8,5 | 5 715 |
| 7-12 | `/prestations/traitement-hydrofuge/{les 6 mêmes}/` | | | |

**Pourquoi les 6 mêmes communes pour les deux services** : les deux prestations se vendent ensemble (nettoyage puis hydrofuge), les liens croisés service↔service×ville deviennent naturels, et un couple manquant se voit tout de suite. Chartres, Dreux, Auneau, Rambouillet et Houdan attendent la phase suivante — ce sont les plus disputées, elles méritent des pages écrites, pas générées.

**Convention d'URL.** Le site est déjà en `/villes/{slug}/` et `/prestations/{slug}/`, cohérent, indexé, avec un slug de ville unique — **ne change rien à l'existant**. Le blueprint préconise des slugs à plat, mais une refonte d'URLs sur un site en ligne coûte plus qu'elle ne rapporte ici. Le niveau 2 s'insère proprement en `/prestations/{service}/{ville}/`, qui a le mérite de rendre le silo lisible et de donner enfin un rôle au hub `/prestations/`.

### 6.3 Les hubs à créer (coût : quelques heures, zéro rédaction lourde)

| URL | Contenu | Rôle |
|---|---|---|
| `/prestations/` | les 7 prestations, 1 lien + 1 phrase chacune | supprime un 404, devient la cible de « Nos prestations » en nav |
| `/villes/` | les 14 communes groupées par secteur, ancres `couvreur à {X}` | permet d'alléger le bloc villes du footer plus tard |
| `/realisations/` | le chantier Maintenon + les suivants | rend la preuve chantier extensible |

### 6.4 Communes candidates pour la phase suivante

Calculées sur `geo.api.gouv.fr`, non encore couvertes, dans le bassin réel du siège :

| Commune | CP | km | Pop. | Intérêt |
|---|---|---|---|---|
| Saint-Martin-de-Nigelles | 28130 | **3,0** | 1 587 | limitrophe du siège, même CP |
| Chaudon | 28210 | 7,1 | 1 688 | limitrophe |
| Villemeux-sur-Eure | 28210 | 10,2 | 1 780 | axe Nogent-le-Roi → Dreux |
| Jouy | 28300 | 12,2 | 1 988 | axe Chartres |
| Boutigny-Prouais | 28410 | 12,8 | 1 704 | axe Houdan |
| Tremblay-les-Villages | 28170 | 14,4 | 2 206 | |
| Gazeran | 78125 | 14,9 | 1 492 | frange 78, adjacent Rambouillet |
| Saint-Prest | 28300 | 15,0 | 2 115 | agglo chartraine |
| Lèves / Champhol / Mainvilliers / Lucé / Luisant | 28300/28110/28600 | 17-23 | 3 600-15 900 | **couronne de Chartres — le vrai volume**, à traiter en lot une fois le gabarit refait |
| Vernouillet | 28500 | 19,5 | 12 310 | couronne de Dreux |
| Le Perray-en-Yvelines / Ablis | 78610/78660 | 21-23 | 3 900-6 500 | frange 78 |

⛔ **Aucune de ces pages ne se crée avant que les 14 existantes soient à 800 mots uniques.**

---

## 7. Le système de balises

### 7.1 Le paramètre à figer d'abord

```
metier          : couvreur
departement     : Eure-et-Loir
numero_dept     : 28
dept_dans       : "en Eure-et-Loir"        ← usage déjà dominant sur le site, on le garde
dept_de         : "de l'Eure-et-Loir"
ville_siege     : Villiers-le-Morhier (28130)
prenom_nom      : Jordy Renaud
separateur      : " — "                     ← un seul, partout
```

> **Note sur `dept_dans`.** La règle générale du blueprint donnerait `dans l'Eure-et-Loir` (nom commençant par une voyelle). Le site emploie déjà massivement `en Eure-et-Loir`, qui est l'usage courant du département et qui est cohérent d'un bout à l'autre. **On garde `en Eure-et-Loir`** — la cohérence prime sur la règle, et changer 28 pages pour ça n'apporte rien. `de l'Eure-et-Loir` reste la forme du complément (`la couronne de l'Eure-et-Loir`).

### 7.2 Pools à rotation copremière

`7 têtes de title × 11 suffixes × 5 formules de meta × 13 têtes de H1` → **PPCM = 5 005 combinaisons** pour 14 pages villes + 12 couples. Aucune répétition possible.

**TÊTES DE TITLE — 7**

| i | Tête | car. | variante courte |
|---|---|---|---|
| 0 | `Couvreur` | 8 | — |
| 1 | `Artisan couvreur` | 16 | `Couvreur` |
| 2 | `Couvreur-zingueur` | 17 | `Couvreur` |
| 3 | `Entreprise de couverture` | 24 | `Couvreur` |
| 4 | `Démoussage de toiture` | 21 | `Démoussage` |
| 5 | `Rénovation de toiture` | 21 | `Rénovation toiture` |
| 6 | `Travaux de couverture` | 21 | `Couverture` |

⛔ Pas de `Expert`, `Spécialiste`, `Le meilleur`, `N°1` en balise. « Expert du démoussage » en corps de texte reste acceptable — c'est déjà sur l'accueil et ça peut rester.

**SUFFIXES DE TITLE — 11**

| j | Suffixe | car. | variante courte |
|---|---|---|---|
| 0 | `Devis gratuit` | 13 | `Devis` |
| 1 | `Déplacement gratuit` | 19 | `Déplacement offert` |
| 2 | `Intervention rapide` | 19 | `Rapide` |
| 3 | `Garantie décennale` | 18 | `Décennale` |
| 4 | `Sans engagement` | 15 | — |
| 5 | `Entreprise familiale` | 20 | `Familiale` |
| 6 | `Du lundi au samedi` | 18 | `Lun-sam` |
| 7 | `Diagnostic gratuit` | 18 | `Diagnostic` |
| 8 | `Artisan assuré` | 14 | `Assuré` |
| 9 | `Devis sous 48 h` | 15 | `Sous 48 h` |
| 10 | `Père et fils` | 12 | — |

⛔ `{X} ans d'expérience` est **retiré du pool** tant que le point §9.3 n'est pas tranché.

**TÊTES DE H1 — 13** (contrainte dure : `TÊTE_H1[i%13] ≠ TÊTE_TITLE[i%7]`, sinon +1)

| k | Tête H1 | car. |
|---|---|---|
| 0 | `Artisan couvreur` | 16 |
| 1 | `Votre couvreur-zingueur` | 23 |
| 2 | `Couvreur professionnel` | 22 |
| 3 | `Entreprise de couverture` | 24 |
| 4 | `Couvreur pour le nettoyage de votre toit` | 40 |
| 5 | `Travaux de couverture et de zinguerie` | 37 |
| 6 | `Couverture, zinguerie et gouttières` | 35 |
| 7 | `Couvreur pour rénovation de toiture` | 35 |
| 8 | `Couvreur pour réparation et entretien de toiture` | 48 |
| 9 | `Démoussage et traitement de toiture` | 35 |
| 10 | `Couvreur-zingueur pour vos travaux de toit` | 42 |
| 11 | `Réfection de toiture par un couvreur` | 36 |
| 12 | `Couverture et étanchéité de toiture` | 35 |

**9 des 13 contiennent « couvreur ».** C'est la correction directe du point B6 : aujourd'hui les 14 H1 villes sont `Entreprise de couverture à {Ville}` — la même formule que les 90 H1 du site A, et le mot que le title cible (`couvreur`) n'y figure jamais.

**FORMULES DE META — 5** (140-158 car., valeur dans les 110 premiers, 3 services cités, département en toutes lettres)

| m | Formule |
|---|---|
| 0 | `Jordy Renaud intervient à {Ville} ({CP}) pour {s1}, {s2} et {s3}. {R1}, {R2}.` |
| 1 | `Couvreur à {Ville} en Eure-et-Loir. Je réalise {s1}, {s2} et {s3}. {R1}.` |
| 2 | `{s1} ou {s2} à {Ville} ? Déplacement depuis Villiers-le-Morhier pour {s3}. {R1}.` |
| 3 | `Travaux de couverture à {Ville} ({CP}) : {s1}, {s2}, {s3}. {R1} en Eure-et-Loir.` |
| 4 | `Besoin d'un couvreur à {Ville} ? {s1}, {s2} et {s3} en Eure-et-Loir. {R1}.` |

⛔ La formule 1 est exclue sur toute page dont le title commence par `Couvreur à {Ville}` (anti-triplette). C'est exactement ce qui se passe aujourd'hui sur `/villes/chartres/` et `/villes/nogent-le-roi/`.

**RÉASSURANCES — 9** : `devis gratuit` · `garantie décennale` · `déplacement offert` · `diagnostic gratuit` · `entreprise familiale` · `artisan assuré` · `sans engagement` · `réponse le jour même` · `du lundi au samedi, 8 h-20 h`
⛔ Bannis en balise : `travail soigné`, `intervention soignée`, `satisfaction garantie`, `artisan de confiance`, ★, ✓, →.

### 7.3 La cascade de garde-fous — à coder dans le template

```
title = "{TÊTE} à {Ville} ({CP}) — {SUFFIXE}"
si len > 60 → retirer " ({CP})"
si len > 60 → SUFFIXE = variante courte
si len > 60 → retirer " — {SUFFIXE}"
si len > 60 → TÊTE = variante courte
si len > 60 → alerte au build
```

À ajouter : une **assertion au build** qui casse la compilation si un title dépasse 60 caractères ou une meta 158. Aujourd'hui **4 titles et 10 metas sont hors bornes** — et c'est bien un problème de garde-fou, pas de rédaction : `Auneau-Bleury-Saint-Symphorien` produit à lui seul un title de **61 caractères** et une meta de 141, simplement parce que le toponyme fait 30 signes. Le jour où une commune plus longue arrive, personne ne le voit. Dans l'autre sens, 13 titles villes tiennent en 36 à 49 caractères : 11 à 24 caractères de SERP inutilisés sur chaque page du silo.

### 7.4 La règle du code postal 28130

**6 des 14 pages partagent le 28130** : Villiers-le-Morhier, Maintenon, Hanches, Pierres, Saint-Piat, Bouglainval. Aujourd'hui aucune ne porte le CP dans son title — pas de cannibalisation, mais personne ne cible `couvreur 28130`.

> **Villiers-le-Morhier (siège) porte `(28130)` dans son title. Les 5 autres le portent dans la meta ou le H1, jamais dans le title.**

Même logique à surveiller sur le 28210 (Nogent-le-Roi + Villemeux-sur-Eure si créée) et le 28300 (couronne chartraine, 5 communes candidates).

---

## 8. Le plan de maillage à implémenter

Tout ce qui suit se code **une fois** dans `[slug].astro`, `Footer.astro`, `Header.astro` et un nouveau composant `VillesProches.astro`.

### 8.1 Gabarit page ville — cible : 9 à 14 liens in-body

| Zone | Ancre | Cible | Nb | État |
|---|---|---|---|---|
| §1 du corps | `{DÉT} {QUAL} {DÉNOM} {GÉO}` — **combinaison unique par page** | `/` | 1 | 🟡 existe, 6 formulations pour 43 liens |
| §services | `{service} à {Ville}` si le couple existe, sinon `{service} en Eure-et-Loir` | `/prestations/…` | 2-3 | 🟡 6 cartes, ancres de 150+ car. |
| **Bloc villes proches** | `{métier tournant} à {Ville voisine}` | `/villes/…` | **4-6** | 🔴 **à créer** |
| Lien croisé | `démoussage de toiture à {Ville}` | `/prestations/nettoyage-demoussage-toiture/{ville}/` | 1-2 | 🔴 à créer avec le niveau 2 |
| Corps | ancre 20-45 car. | `/blog/…` | 0-1 | 🔴 pas de blog |
| CTA | `Demander un devis` | `/devis-gratuit/` | **1 seul** | 🔴 2 aujourd'hui |
| Externe | `service urbanisme de {Ville}` | mairie | 1 | 🟢 **fait, 14/14 corrects** |

### 8.2 Le pool d'ancres vers l'accueil — 1 008 combinaisons

`{déterminant} × {qualifieur} × {dénomination} × {géo}` = 6 × 4 × 7 × 6.

- **Déterminant** : ∅ · un · le · votre · notre · mon
- **Qualifieur** : ∅ · professionnel · qualifié · expérimenté (⛔ pas `expert`, `de confiance`, `sérieux`)
- **Dénomination** : couvreur · artisan couvreur · couvreur-zingueur · entreprise de couverture · couvreurs · artisans couvreurs · entreprise familiale de couverture
- **Géo** : `à Villiers-le-Morhier` · `dans le 28` · `en Eure-et-Loir` · `du 28` · `de l'Eure-et-Loir` · `dans le département`

⚠️ **Le déterminant dépend de la fonction grammaticale, pas du tirage.** Les pages sont écrites à la première personne (« J'interviens… ») : la fonction dominante est l'apposition en tête de phrase, qui n'admet que **∅** ou **votre**. Ne livre jamais une ancre seule — livre la phrase réécrite avec l'ancre à sa place.

⚠️ **`Accueil` du fil d'Ariane n'entre pas dans ce compte** : c'est de la navigation, pas une ancre éditoriale. C'est le seul cas où la répétition est normale. Les 5 répétitions de `couvreur dans le 28` et `couvreur en Eure-et-Loir`, elles, sont à faire disparaître.

### 8.3 Bloc villes proches — les voisines réelles, calculées

À poser en corps de page, 4 à 6 entrées, **sans auto-lien**, avec dénomination tournante :

| Page | Voisines à lier (distance réelle) |
|---|---|
| villiers-le-morhier | Pierres (4) · Maintenon (4) · Nogent-le-Roi (4) · Hanches (5) · Saint-Piat (8) |
| maintenon | Pierres (2) · Saint-Piat (4) · Villiers-le-Morhier (4) · Hanches (5) · Bouglainval (6) |
| nogent-le-roi | Villiers-le-Morhier (4) · Pierres (5) · Maintenon (7) · Bouglainval (9) · Hanches (10) |
| epernon | Hanches (3) · Gallardon (7) · Maintenon (8) · Villiers-le-Morhier (9) · Saint-Piat (9) |
| hanches | Épernon (3) · Maintenon (5) · Villiers-le-Morhier (5) · Pierres (7) · Saint-Piat (8) |
| gallardon | Épernon (7) · Auneau (7) · Saint-Piat (8) · Hanches (8) · Maintenon (9) |
| pierres | Maintenon (2) · Villiers-le-Morhier (4) · Saint-Piat (5) · Bouglainval (5) · Nogent-le-Roi (5) |
| saint-piat | Maintenon (4) · Pierres (5) · Bouglainval (6) · Gallardon (8) · Hanches (8) |
| bouglainval | Pierres (5) · Saint-Piat (6) · Maintenon (6) · Nogent-le-Roi (9) · Villiers-le-Morhier (9) |
| chartres | Bouglainval (12) · Saint-Piat (13) · Maintenon (16) · Pierres (16) · Gallardon (17) |
| dreux | Nogent-le-Roi (18) · Houdan (18) · Villiers-le-Morhier (21) · Pierres (23) · Bouglainval (24) |
| auneau | Gallardon (7) · Épernon (12) · Saint-Piat (14) · Hanches (15) · Maintenon (16) |
| rambouillet | Épernon (13) · Hanches (15) · Gallardon (17) · Auneau (18) · Villiers-le-Morhier (19) |
| houdan | Dreux (18) · Nogent-le-Roi (19) · Villiers-le-Morhier (20) · Hanches (22) · Épernon (23) |

Exemple de rendu : *« J'interviens aussi comme [couvreur à Pierres], [artisan couvreur à Maintenon], [couvreur-zingueur à Nogent-le-Roi] et [entreprise de couverture à Hanches]. »*

### 8.4 Gabarit page service × ville (niveau 2)

| Zone | Ancre | Cible | Nb |
|---|---|---|---|
| §1 | combinaison unique | `/` | 1 |
| corps | `couvreur à {Ville}` — **croisé obligatoire** | `/villes/{ville}/` | 1 |
| corps | `{service} en Eure-et-Loir` — remontée | `/prestations/{service}/` | 1 |
| corps | `{service} à {Ville voisine}` | couple voisin | 2-3 |
| corps | `{service connexe} à {Ville}` | couple connexe | 1 |
| CTA | `Demander un devis` | `/devis-gratuit/` | 1 |

Et **dans l'autre sens** : la page ville lie le couple avec l'ancre `{service} à {Ville}` et ne développe **pas** ce service — 1 à 2 phrases + le lien, jamais un H3 de 150 mots. C'est exactement l'erreur qui fait perdre la page spécialisée du site A face à sa propre page générique.

### 8.5 Corrections de maillage à coût nul

| Action | Effet |
|---|---|
| Retirer le tiroir mobile du DOM au rendu (ou le construire en JS) | **−11 liens/page** · ratio 1/14,5 → ~1/17 |
| Retirer l'auto-lien de la page courante dans le footer villes **et** le footer prestations | conformité D4 |
| Un seul CTA `/devis-gratuit/` lié par page (aujourd'hui 2 à 3 en corps + 2 en chrome) | conformité D8 |
| Raccourcir les ancres des cartes de service : lier le titre de la carte, pas la carte entière | ancres de 150+ car. → 20-45 car. |
| Créer `/prestations/`, `/villes/`, `/realisations/` | −3 hubs en 404 |
| Ajouter `/prestations/nettoyage-facade/` au sitemap, au footer et au plan du site | page aujourd'hui tenue par **1 seul lien** depuis l'accueil |
| Uniformiser le séparateur de title sur ` — ` | conformité C1 |
| Corriger `Renaud Renov` → `Renaud Rénov` dans la meta de `/prestations/nettoyage-demoussage-toiture/` | conformité C2 |

---

## 9. Schema.org et E-E-A-T

### 9.1 Ce qui est déjà bon — à ne pas casser

- `RoofingContractor` avec **un `@id` unique `#localbusiness`** réutilisé sur les pages villes → une seule entité, pas 14 entreprises. C'est propre.
- `areaServed` en `City` + `AdministrativeArea` — la couverture géographique se déclare là, **pas par des adresses d'emprunt**. Les sites A et C affichent respectivement 20 et 12 adresses de mairies ; ici, une seule adresse réelle en footer, partout.
- `BreadcrumbList` sur toutes les pages **et** fil d'Ariane HTML — absent des 3 sites audités.
- `hasOfferCatalog` avec les 6 prestations et `knowsAbout` à 8 entrées.
- **Aucun `aggregateRating` ni `Review`** — c'est la bonne décision : Google les a rendus inéligibles sur `LocalBusiness`/`Organization` quand l'entité contrôle les avis la concernant. Les étoiles doivent venir de la fiche Google Business Profile. La note reste affichée en texte, avec son volume (« 5/5 · 20 avis ») — exactement ce qu'il faut.

### 9.2 Ce qui manque

| Bloc | Où | Aujourd'hui |
|---|---|---|
| `Service` | les 7 pages prestations | seulement `nettoyage-demoussage` et `traitement-hydrofuge` |
| `FAQPage` | toute page avec une vraie FAQ visible | seulement les 2 mêmes |
| `Service` + `areaServed` City | les 12 futures pages service × ville | — |
| `openingHoursSpecification` | déjà présent sitewide (8 h-20 h, lun-sam) | ✅ |
| `alt` d'image avec le nom de la commune | pages villes | 1 à 3 `alt` sur 17 |

### 9.3 Trois points E-E-A-T à trancher avec Jordy

1. **« 15 années d'expérience ».** L'ENTREPRISE RENAUD RENOV est immatriculée le 22/05/2025 (SIREN 944 707 710). L'écart est le même que celui relevé sur le site C audité (« +15 ans » pour une société de 2022) — c'est vérifiable en trois clics sur Pappers, et c'est le genre d'incohérence qui coûte cher en confiance. **L'entreprise est familiale, père et fils** : si les 15 ans sont ceux du métier exercé par le père, la phrase est vraie mais mal formulée. Reformulation possible sans rien perdre : *« un savoir-faire transmis de père en fils »* ou *« quinze années de métier »* rattachées à la personne, pas à la société. **À valider par Jordy avant toute modification** (règle du contenu intouchable).

2. **SIRET en footer.** Aujourd'hui en mentions légales seulement. Le mettre en footer sitewide est un signal E-E-A-T gratuit : `SIRET 944 707 710 00017 — RCS Chartres`.

3. **Assureur décennale.** Non nommé (choix assumé, attestation non disponible). Dès qu'elle arrive : nommer l'assureur et le n° de contrat. Deux des trois sites audités nomment le leur ; c'est un différenciant réel.

### 9.4 Un détail géographique à corriger

Les pages `/villes/houdan/` et `/villes/rambouillet/` (Yvelines, 78) se terminent par : *« J'interviens à Villiers-le-Morhier et dans toute l'Eure-et-Loir (28) »*. Une page qui cible Houdan ne devrait pas annoncer un périmètre qui l'exclut. Variante à prévoir dans le template pour les communes hors 28 : *« …et sur la frange ouest des Yvelines »*.

---

## 10. Les 9 leviers d'ancrage local

Rappel : **le climat et l'architecture locale sont interdits**. L'ancrage passe par la géographie et par la preuve opérationnelle.

| # | Levier | État | Action |
|---|---|---|---|
| 1 | Quartiers et lieux-dits réels | 🔴 1/14 (Maintenon) | Le plus fort levier disponible. À ajouter commune par commune, uniquement des toponymes vérifiables |
| 2 | Communes limitrophes nommées **et liées** | 🔴 0/14 | §8.3 — le tableau est prêt |
| 3 | Gentilé (Maintenonnais, Épernonnais, Gallardonnais…) | 🟡 partiel | À systématiser |
| 4 | Code postal | 🟢 14/14 | ✅ |
| 5 | Axes et rues structurantes | 🔴 0/14 | RN 10, D 906, vallée de l'Eure, vallée de la Voise — vérifiables |
| 6 | Lien vers le service urbanisme | 🟢 **14/14, tous corrects** | ✅ meilleur point du site |
| 7 | **Distance / temps depuis le siège** | 🔴 0/14 | **Gratuit, unique, invérifiable par un concurrent.** Les distances sont dans le tableau §8.3 |
| 8 | **Délai d'intervention annoncé sur la commune** | 🔴 0/14 | À obtenir de Jordy, commune par commune |
| 9 | **Chantiers réalisés localisés** | 🟡 1 page réalisation | 610 photos de chantier existent dans `Artisan Couvreur RENAUD/`. **Le gisement le plus sous-exploité du projet** |

**Les leviers 7, 8 et 9 sont l'avantage décisif.** Aucun des 268 pages auditées ne les emploie. Ils sont vrais, ils convertissent, ils produisent du contenu unique gratuitement, et personne ne peut les copier.

Formulations autorisées, et elles seules :
- « *Maintenon est à 4 km de Villiers-le-Morhier, la commune où l'entreprise est établie.* »
- « *Deux chantiers de démoussage y ont été réalisés en 2025.* »
- « *Épernon fait partie de la zone d'intervention quotidienne.* »
- « *Intervention sous 48 h sur Nogent-le-Roi.* »

⛔ Le point de départ est **la commune du siège, rien d'autre**. Jamais `atelier`, `dépôt`, `agence`, `local`, `showroom`.
⛔ Ne jamais citer un repère d'une commune voisine, ni un toponyme non attesté.

---

## 11. Roadmap — 6 chantiers, dans cet ordre

**Un chantier à la fois, relu avant le suivant.** Le mélange des chantiers est ce qui produit les régressions.

| # | Chantier | Coût | Rédaction | Gain |
|---|---|---|---|---|
| **1** | **Technique & schema** — 3 hubs, sitemap complet, séparateur unique, `Renaud Rénov` accentué, `Service` + `FAQPage` sur les 7 prestations, SIRET en footer, assertion de longueur au build | ~1 j | 0 | immédiat, mécanique |
| **2** | **Maillage à coût nul** — tiroir mobile hors DOM, auto-liens retirés, 1 seul CTA devis par page, ancres de cartes raccourcies, `nettoyage-facade` remise dans la nav | ~1 j | 0 | ratio 1/14,5 → ~1/18, D4/D8/D10 |
| **3** | **Balises à rotation** — pools §7 câblés dans `[slug].astro` + les 2 pages dédiées, cascade de garde-fous, règle du 28130 | ~1 j | ~0 | indicateur 1 : 1 → 5 005 combinaisons |
| **4** | **Bloc villes proches + retarget des 8 ancres** — composant `VillesProches.astro`, tableau §8.3, ancres accueil dépliées sur le pool §8.2 | ~1 j | léger | Lois 2, 3, 6 · indicateur 2 et 5 |
| **5** | **Enrichissement des 14 pages villes** — +600 mots uniques chacune, leviers 1/5/7/8/9, `alt` avec la commune | **~3 semaines** | **8 400 mots** | indicateur 4 : 44 % → < 30 % · F1 |
| **6** | **Les 12 couples service × ville** — §6.2, gabarit §8.4, liens croisés dans les 2 sens | **~4 semaines** | **9 600 mots** | ouvre le niveau 2 · résorbe 12 ancres |

Après le chantier 6, le site passe de **32/49 à ~44/49** et de **1 indicateur sur 6 à 5 sur 6** (le 6e, le blog, restant ouvert).

**Phase suivante, hors budget actuel :** blog (20-30 articles, Loi 5), couronne chartraine (5 communes, 15 900 hab. sur Lucé seule), couronne drouaise, frange 78. Puis seulement — citations locales et Google Business Profile via `auditeur-citations-locales`.

---

## 12. Les 5 points bloquants avant toute mise en ligne

1. Aucun title > 60 caractères → **4 à corriger** (`realisations/…` 64, `nettoyage-demoussage` 62, `mentions-legales` 62, `villes/auneau` 61).
2. Aucune ancre orpheline de cible → **20 aujourd'hui**.
3. Aucun auto-lien → **présent** en footer villes, footer prestations et header.
4. Aucune page orpheline, profondeur ≤ 3 → OK, mais `nettoyage-facade` ne tient qu'à un fil.
5. JSON-LD valide, une seule adresse réelle + `areaServed` → **déjà conforme**. Passer les 7 pages prestations au Rich Results Test après ajout de `Service`.

---

### Annexe — reproduire la mesure

```bash
# dans une copie du dépôt hors mount macOS
npm ci && npx astro build          # 28 pages HTML dans dist/client
# puis parsing balises / liens / ancres / 6-grammes sur dist/client
```

Les distances entre communes viennent de `geo.api.gouv.fr` (centres INSEE, formule orthodromique). Les populations sont les populations légales INSEE exposées par la même API.
