# Blueprint SEO local — Renaud Rénov (28)

**Mode 2 — site existant.** Diagnostic mesuré sur le site réel, puis plan de correction.
Périmètre : Eure-et-Loir + frange Yvelines. Budget rédactionnel retenu : **20 à 30 pages de 800 mots**.

Méthode de mesure : build Astro complet du dépôt (`npx astro build`, build vert, 28 pages HTML générées), puis parsing des balises, du graphe de liens, des ancres, du JSON-LD et du texte de corps (header/footer retirés). Aucune valeur de ce document n'est estimée : toutes sont comptées sur le HTML produit.

---

## ⚠️ Décision d'architecture — arrêtée, ne pas rouvrir

**Il n'y aura pas de pages « service × ville »** (pas de `/nettoyage-toiture-epernon/`, pas de `/prestations/nettoyage/epernon/`). Le site reste à deux niveaux :

```
/                         accueil            → couvreur 28 / Eure-et-Loir
/prestations/{service}/   7 pages            → {service} 28
/villes/{slug}/           14 pages           → couvreur {ville}
/realisations/{slug}/     1 page, extensible → preuve de chantier, {service} {commune}
```

Le croisement service × ville se fait **par le maillage, par le contenu et par les réalisations**, pas par des URLs génériques :

- sur une **page ville** : une carte ou une section par prestation, qui parle du sujet **dans cette commune**, avec un lien vers la page prestation ;
- sur une **page prestation** : des liens vers les pages villes ;
- sur une **page réalisation** : le récit d'un chantier réel, qui porte naturellement le couple `{service} {commune}` — avec des photos qui n'existent nulle part ailleurs.

C'est déjà l'architecture en place. Tout ce document s'y conforme. Le niveau 2 du blueprint générique (§2.1 de la skill) est **volontairement écarté** — et c'est un choix défendable : il évite la cannibalisation §2.4, il évite d'amputer les blocs de service des pages villes (contenu intouchable), et il concentre le budget sur des pages qui existent déjà.

**La réalisation est ce qui remplace le niveau 2, et en mieux.** Une page `/nettoyage-toiture-epernon/` générée est copiable par n'importe qui ; une page qui raconte un chantier daté, photographié, situé, ne l'est pas. Voir §4bis.

---

## 0. Résumé en dix lignes

Le site est **au-dessus des 3 sites de couverture audités par la méthode** (12 à 19 points sur 49) : **32/49**. Il a déjà ce qu'aucun d'eux n'a — une seule adresse réelle, un fil d'Ariane HTML, du `BreadcrumbList`, un `RoofingContractor` fusionné par `@id`, pas d'`aggregateRating` interdit, et un levier local vérifiable sur 14 pages villes sur 14.

Ce qui plafonne le site tient en trois points, tous corrigeables sans créer une seule URL :

1. **Les 14 pages villes sont un seul gabarit répété.** 1 formule de title, 1 formule de H1, **~170 mots réellement uniques** par page sur ~1 000 affichés. C'est le seul vrai chantier rédactionnel.
2. **Les pages villes ne se lient jamais entre elles**, et ne reçoivent presque aucun lien in-body. Le footer répété (31 liens) + le header dupliqué desktop/mobile (19 liens) écrasent le ratio liens/mots à 1/14,5.
3. **4 cartes de service sur 6 ne portent pas le nom de la commune** sur les pages villes — ce qui rend incohérentes les 10 ancres `hydrofuge de toiture à {Ville}` posées depuis la page hydrofuge.

Les points 2 et 3 se corrigent **dans le template**, une fois, pour les 14 pages. Le point 1 est le seul qui consomme du budget rédactionnel — et il peut le consommer en entier.

---

## 1. Périmètre mesuré

| Niveau | URLs | Détail |
|---|---|---|
| 0 — Accueil | 1 | cible `couvreur 28` / `couvreur Eure-et-Loir` |
| 1a — Prestations | 7 | 6 au menu + `/prestations/nettoyage-facade/` (hors nav, hors sitemap) |
| 1b — Villes | 14 | `/villes/{slug}/` — 12 par template `[slug].astro`, 2 fichiers dédiés |
| 2 — Service × ville | **0** | **écarté par choix d'architecture** — voir l'encadré ci-dessus |
| 3 — Blog | **0** | absent |
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
| **D. Maillage** | **4/11** | 9-10 liens in-body par page ville, **ancres service×ville présentes**, aucun libellé non lié | **D1** ancre accueil répétée · **D3** aucun bloc villes proches · **D4** auto-liens footer et header · **D5** 10 ancres hydrofuge sans correspondance sur la cible · **D8** jusqu'à 4 liens vers la même cible depuis une page · **D9** villes quasi footer-only · **D11** ratio 1/14,5 |
| **E. Blog** | **0/5** | — | aucun blog |
| **F. Contenu** | **5/7** | aucune paire > 90 %, hero ≠ meta, pas de témoignage en tête, aucune fuite de variable | **F1** ~170 mots uniques/page ville (seuil 800) · **F2** duplication médiane 44 % · **F3** bloc commun ≈ 50 % du corps |
| **G. Ancrage local** | **4/5** | levier vérifiable sur 14/14, toponymes exacts, aucun repère emprunté, **les 14 liens mairie pointent tous vers la bonne commune** | **G4** « 15 années d'expérience » face à un SIREN de mai 2025 |
| **H. Interdits éditoriaux** | **1/6** | pas de description du bâti local | climat (gel, humidité, intempéries, « fenêtre météo »), « sécurité », « méthode », « travail soigné », une promesse (« je vous garantis ») |
| **I. E-E-A-T / NAP / schema** | **5/10** | **une seule adresse réelle**, NAP cohérent, note avec son volume, **aucun `aggregateRating`**, fil d'Ariane HTML, aucun lieu physique inventé | **I3** SIRET absent du footer · **I4** assureur décennale non nommé · **I5** ancienneté · **I7** 1 à 3 `alt` sur 17 citent la commune · **I8** `Service` sur 2 pages sur 7, `FAQPage` sur 2 |

> **Bloc H — lecture obligatoire.** La règle projet du 23/07/2026 est que **le contenu textuel existant est intouchable**. Le bloc H est un relevé, pas une liste de corrections. La plupart des occurrences relevées sont dans des **avis clients recopiés mot pour mot** — légitimes, à conserver telles quelles. Les seules occurrences en copie rédactionnelle : le badge « Travail soigné » de `/a-propos/`, une phrase de `/prestations/reparation-toiture/`, une de `/prestations/traitement-hydrofuge/`, et « je vous garantis » sur l'accueil. Rien ne bouge sans le feu vert de Jordy.

---

## 3. Les 6 indicateurs de contrôle

| # | Indicateur | Seuil | **Renaud Rénov** | Site A | Site B | Site C |
|---|---|---|---|---|---|---|
| 1 | Combinaisons de balises uniques | > nb de pages | **1 title + 1 H1 pour 14 pages** ❌ | 12/90 | ~168/47 ✅ | 28/29 |
| 2 | Ancre → accueil la plus répétée | ≤ 2 | **5** hors fil d'Ariane (26 avec) ❌ | 91 | 1 ✅ | 43 |
| 3 | Ratio liens / mots | ≥ 1/25 | **1/14,5** ❌ | 1/20 | 1/11 | 1/7 |
| 4 | Duplication inter-pages villes | < 30 % | **médiane 44 %, max 70 %** ❌ | 90-95 % | 65-70 % | 95-97 % |
| 5 | Ancres sans correspondance sur la cible | 0 | **10** (les ancres hydrofuge) ❌ | 2 | 1 | 2 |
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

Les 2 pages écrites à la main (siège + Maintenon) sont 2 fois plus uniques que les 12 générées. **Le gabarit est le plafond, pas le sujet.**

---

## 4. Les liens prestation → ville : ce qui marche, ce qui cloche

Le site fait déjà quelque chose qu'**aucune des 268 pages auditées ne fait** : il pose des ancres qui combinent un service et une ville. `/prestations/nettoyage-demoussage-toiture/` et `/prestations/traitement-hydrofuge/` envoient 20 liens de ce type vers les pages villes. C'est le bon geste, et il est à conserver.

Le seul problème est de **cohérence entre l'ancre et ce que la page d'arrivée affiche**.

| Famille d'ancres | Le mot-clé est-il dans la zone haute de la page ville (title / meta / H1 / H2) ? | État |
|---|---|---|
| **10 ancres démoussage / nettoyage** (`démoussage de toiture à Maintenon`, `nettoyer un toit à Gallardon`…) | **oui** — la meta dit « Démoussage, réparation… à Épernon » et le H3 est `Nettoyage et démoussage de toiture à Épernon` | 🟢 valides, ne pas y toucher |
| **10 ancres hydrofuge / résine** (`hydrofuge de toiture à Maintenon`, `résine de toiture à Épernon`…) | **non** — « hydrofuge » n'apparaît dans **aucun** title, meta, H1 ni H2 des 14 pages villes. Uniquement dans un H3 de carte, `Traitement hydrofuge de toiture`, **sans le nom de la commune** | 🔴 à recadrer |

### La cause, et le correctif

Sur les pages villes, **seules 2 cartes de service sur 6 portent le nom de la commune** :

```
Nettoyage et démoussage de toiture à Pierres   ← porte la ville
Traitement hydrofuge de toiture                ← ne la porte pas
Réparation de toiture à Pierres                ← porte la ville
Rénovation et réfection de toiture             ← ne la porte pas
Zinguerie : noues, chéneaux, cheminées         ← ne la porte pas
Pose de gouttière                              ← ne la porte pas
```

**Correctif, dans le template, sans créer d'URL et sans écrire un mot :**

1. Ajouter `à {Ville}` au titre des **4 cartes** qui ne le portent pas (hydrofuge, rénovation, zinguerie, gouttière), comme c'est déjà fait sur démoussage et réparation.
2. Faire entrer « traitement hydrofuge » dans la **rotation des metas** des communes qui reçoivent une ancre hydrofuge (§5.2). Aujourd'hui, aucune des 14 metas ne contient le mot.

Résultat : l'ancre `hydrofuge de toiture à Pierres` arrive sur une page qui affiche `Traitement hydrofuge de toiture à Pierres` en H3 et « traitement hydrofuge » en meta. Le lien redevient cohérent, et l'indicateur 5 passe à 0.

### Le prolongement naturel

Les 4 autres prestations (réparation, rénovation, zinguerie, gouttière) **n'envoient aujourd'hui aucun lien vers les pages villes**. Une fois leurs cartes correctement nommées côté ville, ajoute le même bloc « zones d'intervention » sur ces 4 pages prestations, avec 6 à 10 ancres `{service} à {Ville}`. Le composant existe déjà sur les 2 pages qui l'ont — c'est de la réutilisation, pas du développement.

---

## 4bis. Les pages réalisations — le silo de preuve

C'est le silo qui remplace le niveau 2, et c'est aussi **la source de matière première des pages villes** : les 610 photos de chantier qui dorment dans `Artisan Couvreur RENAUD/` deviennent du contenu unique, non copiable, qui alimente à la fois les réalisations et le levier 9 des pages villes (§7.1).

### Le modèle existe déjà et il est bon

`/realisations/demoussage-toiture-maintenon/` est, en l'état, **la page la mieux maillée du site** :

- lien vers la page ville avec l'ancre `couvreur à Maintenon` ✅
- lien vers la page prestation avec `prestation de nettoyage et de démoussage` ✅
- **4 `alt` sur 5 portent le nom de la commune** — contre 1 à 3 sur 17 sur les pages villes
- la page ville de Maintenon la cite en retour : `démoussage de toiture réalisé à Maintenon en juin 2026`

La boucle **réalisation ↔ ville ↔ prestation** est donc déjà prouvée sur une commune. Il n'y a qu'à la généraliser.

### Trois corrections avant de dupliquer le modèle

| # | Problème | Correctif |
|---|---|---|
| 1 | **334 mots** — trop court pour porter un couple `{service} {commune}` | viser 500-700 : état de départ, déroulé, ce qui a été fait, résultat, durée |
| 2 | **Double `BreadcrumbList`** dans le JSON-LD (2 blocs au lieu d'un) | corriger avant de cloner, sinon le bug se propage |
| 3 | **`/realisations/` répond 404** | créer le hub avant d'avoir plus de 2 pages dessous — sinon silo orphelin, erreur du site C |

### Convention et garde-fous

- **URL** : `/realisations/{service}-{commune}/`. Deux chantiers du même type dans la même commune → ajouter le support ou l'année, jamais un numéro.
- **Titre / H1** : le couple `{service} {commune}` porté naturellement — `Nettoyage de façade d'un haras à Épernon (28)`.
- ⛔ **Ne jamais nommer l'établissement ni donner l'adresse du client** sans accord écrit. « un haras du secteur d'Épernon » suffit : c'est le nom de la commune qui porte le signal, pas celui du haras.
- ⛔ **Une réalisation = un chantier réel, avec photos et récit.** Créer une page réalisation sans photos pour « couvrir » une commune manquante, c'est recréer la page service×ville écartée — en pire, parce qu'elle ment.
- `alt` de chaque photo : le nom de la commune, comme sur la page Maintenon.

### Gabarit de maillage d'une réalisation

| Zone | Ancre | Cible | Nb |
|---|---|---|---|
| Corps | `{service} en Eure-et-Loir` | `/prestations/{service}/` | 1 |
| Corps | `couvreur à {Ville}` | `/villes/{ville}/` | 1 |
| Corps | `{service} réalisé à {Ville voisine}` | autre réalisation | 0-2 |
| Hub | listé à 100 % | `/realisations/` | 1 |
| CTA | `Demander un devis` | `/devis-gratuit/` | 1 seul |

**Et dans l'autre sens** : la page ville cite ses réalisations (`démoussage de toiture réalisé à {Ville} en {mois} {année}`), la page prestation cite les siennes. C'est ce qui fait entrer dans les pages villes le levier 9 — chantiers réalisés localisés, 0/268 sur les sites audités.

---

## 5. Le système de balises

### 5.1 Le paramètre à figer d'abord

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

> **Note sur `dept_dans`.** La règle générale du blueprint donnerait `dans l'Eure-et-Loir` (nom commençant par une voyelle). Le site emploie déjà massivement `en Eure-et-Loir`, cohérent d'un bout à l'autre. **On garde `en Eure-et-Loir`** — la cohérence prime, et changer 28 pages pour ça n'apporte rien.

### 5.2 Pools à rotation copremière

`7 têtes de title × 11 suffixes × 5 formules de meta × 13 têtes de H1` → **PPCM = 5 005 combinaisons** pour 14 pages. Aucune répétition possible.

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

⛔ `{X} ans d'expérience` est **retiré du pool** tant que le point §8.3 n'est pas tranché.

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

**9 des 13 contiennent « couvreur ».** C'est la correction du point B6 : aujourd'hui les 14 H1 villes sont `Entreprise de couverture à {Ville}` — la formule exacte des 90 H1 du site A, et le mot que le title cible (`couvreur`) n'y figure jamais.

**FORMULES DE META — 5** (140-158 car., valeur dans les 110 premiers, 3 services cités)

| m | Formule |
|---|---|
| 0 | `Jordy Renaud intervient à {Ville} ({CP}) pour {s1}, {s2} et {s3}. {R1}, {R2}.` |
| 1 | `Couvreur à {Ville} en Eure-et-Loir. Je réalise {s1}, {s2} et {s3}. {R1}.` |
| 2 | `{s1} ou {s2} à {Ville} ? Déplacement depuis Villiers-le-Morhier pour {s3}. {R1}.` |
| 3 | `Travaux de couverture à {Ville} ({CP}) : {s1}, {s2}, {s3}. {R1} en Eure-et-Loir.` |
| 4 | `Besoin d'un couvreur à {Ville} ? {s1}, {s2} et {s3} en Eure-et-Loir. {R1}.` |

⛔ La formule 1 est exclue sur toute page dont le title commence par `Couvreur à {Ville}` (anti-triplette). C'est exactement ce qui se passe aujourd'hui sur `/villes/chartres/` et `/villes/nogent-le-roi/`.

**Pool de services pour `{s1} {s2} {s3}`**, à faire tourner — et **« traitement hydrofuge » doit entrer dans la rotation** (§4) : `démoussage` · `nettoyage de toiture` · `traitement hydrofuge` · `résine de toiture` · `réparation de toiture` · `rénovation de toiture` · `zinguerie` · `pose de gouttières`.

**RÉASSURANCES — 9** : `devis gratuit` · `garantie décennale` · `déplacement offert` · `diagnostic gratuit` · `entreprise familiale` · `artisan assuré` · `sans engagement` · `réponse le jour même` · `du lundi au samedi, 8 h-20 h`
⛔ Bannis en balise : `travail soigné`, `intervention soignée`, `satisfaction garantie`, `artisan de confiance`, ★, ✓, →.

### 5.3 La cascade de garde-fous — à coder dans le template

```
title = "{TÊTE} à {Ville} ({CP}) — {SUFFIXE}"
si len > 60 → retirer " ({CP})"
si len > 60 → SUFFIXE = variante courte
si len > 60 → retirer " — {SUFFIXE}"
si len > 60 → TÊTE = variante courte
si len > 60 → alerte au build
```

À ajouter : une **assertion au build** qui casse la compilation si un title dépasse 60 caractères ou une meta 158. Aujourd'hui **4 titles et 10 metas sont hors bornes** — et c'est un problème de garde-fou, pas de rédaction : `Auneau-Bleury-Saint-Symphorien` produit à lui seul un title de **61 caractères**, simplement parce que le toponyme fait 30 signes. Dans l'autre sens, 13 titles villes tiennent en 36 à 49 caractères : **11 à 24 caractères de SERP inutilisés sur chaque page du silo**.

### 5.4 La règle du code postal 28130

**6 des 14 pages partagent le 28130** : Villiers-le-Morhier, Maintenon, Hanches, Pierres, Saint-Piat, Bouglainval. Aujourd'hui aucune ne porte le CP dans son title — pas de cannibalisation, mais personne ne cible `couvreur 28130`.

> **Villiers-le-Morhier (siège) porte `(28130)` dans son title. Les 5 autres le portent dans la meta ou le H1, jamais dans le title.**

Même logique à surveiller sur le 28210 (Nogent-le-Roi) et le 28300 (couronne chartraine, si des communes y sont créées un jour).

---

## 6. Le plan de maillage à implémenter

Tout ce qui suit se code **une fois** dans `[slug].astro`, `Footer.astro`, `Header.astro` et un nouveau composant `VillesProches.astro`.

### 6.1 Gabarit page ville — cible : 9 à 14 liens in-body

| Zone | Ancre | Cible | Nb | État |
|---|---|---|---|---|
| §1 du corps | `{DÉT} {QUAL} {DÉNOM} {GÉO}` — **combinaison unique par page** | `/` | 1 | 🟡 existe, 6 formulations pour 43 liens |
| Cartes de service | `{service} à {Ville}` — **les 6 cartes, pas 2** | `/prestations/…` | 6 | 🟡 4 cartes sans la ville (§4) · ancres de 150+ car. |
| **Bloc villes proches** | `{métier tournant} à {Ville voisine}` | `/villes/…` | **4-6** | 🔴 **à créer — le plus gros manque** |
| Corps | ancre 20-45 car. | `/blog/…` | 0-1 | 🔴 pas de blog |
| CTA | `Demander un devis` | `/devis-gratuit/` | **1 seul** | 🔴 2 aujourd'hui |
| Externe | `service urbanisme de {Ville}` | mairie | 1 | 🟢 **fait, 14/14 corrects** |

### 6.2 Gabarit page prestation

| Zone | Ancre | Cible | Nb | État |
|---|---|---|---|---|
| §1 | combinaison unique | `/` | 1 | 🟡 |
| Corps | `{service connexe} en Eure-et-Loir` | autre prestation | 2-3 | 🟢 `PrestationsConnexes` |
| **Bloc zones** | `{service} à {Ville}` | `/villes/…` | **6-10** | 🟢 sur 2 pages · 🔴 **absent des 5 autres** |
| CTA | `Demander un devis` | `/devis-gratuit/` | 1 seul | 🔴 |

### 6.3 Le pool d'ancres vers l'accueil — 1 008 combinaisons

`{déterminant} × {qualifieur} × {dénomination} × {géo}` = 6 × 4 × 7 × 6.

- **Déterminant** : ∅ · un · le · votre · notre · mon
- **Qualifieur** : ∅ · professionnel · qualifié · expérimenté (⛔ pas `expert`, `de confiance`, `sérieux`)
- **Dénomination** : couvreur · artisan couvreur · couvreur-zingueur · entreprise de couverture · couvreurs · artisans couvreurs · entreprise familiale de couverture
- **Géo** : `à Villiers-le-Morhier` · `dans le 28` · `en Eure-et-Loir` · `du 28` · `de l'Eure-et-Loir` · `dans le département`

⚠️ **Le déterminant dépend de la fonction grammaticale, pas du tirage.** Les pages sont écrites à la première personne (« J'interviens… ») : la fonction dominante est l'apposition en tête de phrase, qui n'admet que **∅** ou **votre**. Ne livre jamais une ancre seule — livre la phrase réécrite avec l'ancre à sa place.

⚠️ `Accueil` du fil d'Ariane n'entre pas dans ce compte : c'est de la navigation. Ce sont les 5 répétitions de `couvreur dans le 28` et `couvreur en Eure-et-Loir` qui sont à faire disparaître.

### 6.4 Bloc villes proches — les voisines réelles, calculées

À poser en corps de page, 4 à 6 entrées, **sans auto-lien**, avec dénomination tournante. Distances réelles (centres INSEE, `geo.api.gouv.fr`) :

| Page | Voisines à lier (km) |
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

Rendu attendu : *« J'interviens aussi comme [couvreur à Pierres], [artisan couvreur à Maintenon], [couvreur-zingueur à Nogent-le-Roi] et [entreprise de couverture à Hanches]. »*

### 6.5 Corrections de maillage à coût nul

| Action | Effet |
|---|---|
| **Ajouter `à {Ville}` aux 4 cartes de service qui ne le portent pas** | §4 · indicateur 5 → 0 |
| **Réutiliser le bloc « zones » sur les 5 pages prestations qui ne l'ont pas** | +30 à 50 liens prestation → ville |
| Retirer le tiroir mobile du DOM au rendu (ou le construire en JS au clic) | **−11 liens/page** · ratio 1/14,5 → ~1/17 |
| Retirer l'auto-lien de la page courante dans le footer villes **et** le footer prestations | conformité D4 |
| Un seul CTA `/devis-gratuit/` lié par page (2 à 3 en corps + 2 en chrome aujourd'hui) | conformité D8 |
| Lier le **titre** de la carte de service, pas la carte entière | ancres de 150+ car. → 20-45 car. |
| Créer `/prestations/`, `/villes/`, `/realisations/` | −3 hubs en 404 |
| Ajouter `/prestations/nettoyage-facade/` au sitemap, au footer et au plan du site | page tenue par **1 seul lien** depuis l'accueil |
| Uniformiser le séparateur de title sur ` — ` | conformité C1 |
| `Renaud Renov` → `Renaud Rénov` dans la meta de `/prestations/nettoyage-demoussage-toiture/` | conformité C2 |

### 6.6 Le poste le plus rentable : le header dupliqué

`Header.astro` rend **deux fois** l'ensemble des liens — la barre desktop (8) et le tiroir mobile (11), les deux dans le HTML de chaque page. Chaque page ville envoie donc **4 liens vers `/prestations/zinguerie/`** : nav desktop, tiroir mobile, carte de service, footer. Seul le premier compte.

Masquer le tiroir en CSS ne suffit pas : les liens sont dans le DOM.

---

## 7. Le contenu des pages villes — le seul vrai chantier rédactionnel

Budget : 20 à 30 pages de 800 mots, soit **16 000 à 24 000 mots uniques**. Sans niveau 2 à créer, il part **en totalité** dans l'existant.

| Poste | Volume | Effet |
|---|---|---|
| **+600 mots uniques sur chacune des 14 pages villes** | **8 400 mots** | ~170 → ~770 mots uniques/page · indicateur 4 : 44 % → < 30 % · F1 quasi atteint |
| **Blog : 8 à 12 articles** (Loi 5 — organe de maillage descendant, aujourd'hui inexistant) | **6 400 à 9 600 mots** | E 0/5 → 4/5 · requêtes informationnelles · liens contextuels vers prestations **et** villes |
| **Réserve : 3 à 5 nouvelles communes** si le rythme le permet | 2 400 à 4 000 mots | voir §7.2 |

⛔ **Aucune nouvelle commune ne se crée avant que les 14 existantes soient à ~800 mots uniques.** Ajouter des pages au gabarit actuel, c'est reproduire le site C : 29 pages, 3-5 % de contenu unique, figées 32 mois.

### 7.1 Où trouver les 600 mots uniques par page — sans climat ni architecture

Les 9 leviers autorisés, avec leur état sur le site :

| # | Levier | État | Ce qu'il rapporte |
|---|---|---|---|
| 1 | **Quartiers et lieux-dits réels** | 🔴 1/14 (Maintenon) | le plus fort levier disponible — uniquement des toponymes vérifiables |
| 2 | Communes limitrophes nommées **et liées** | 🔴 0/14 | §6.4, le tableau est prêt |
| 3 | Gentilé (Maintenonnais, Épernonnais, Gallardonnais…) | 🟡 partiel | à systématiser |
| 4 | Code postal | 🟢 14/14 | ✅ |
| 5 | Axes et rues structurantes | 🔴 0/14 | RN 10, D 906, vallée de l'Eure, vallée de la Voise |
| 6 | Lien vers le service urbanisme | 🟢 **14/14, tous corrects** | ✅ meilleur point du site |
| 7 | **Distance / temps depuis le siège** | 🔴 0/14 | gratuit, unique, incopiable — distances en §6.4 |
| 8 | **Délai d'intervention annoncé sur la commune** | 🔴 0/14 | à obtenir de Jordy, commune par commune |
| 9 | **Chantiers réalisés localisés** | 🟡 1 page réalisation | **610 photos de chantier dorment dans `Artisan Couvreur RENAUD/`** — le gisement le plus sous-exploité du projet |

**Les leviers 7, 8 et 9 sont l'avantage décisif.** Aucune des 268 pages auditées ne les emploie. Ils sont vrais, ils convertissent, et personne ne peut les copier.

Formulations autorisées, et elles seules :

- « *Maintenon est à 4 km de Villiers-le-Morhier, la commune où l'entreprise est établie.* »
- « *Deux chantiers de démoussage y ont été réalisés en 2025.* »
- « *Épernon fait partie de la zone d'intervention quotidienne.* »
- « *Intervention sous 48 h sur Nogent-le-Roi.* »

⛔ Le point de départ est **la commune du siège, rien d'autre**. Jamais `atelier`, `dépôt`, `agence`, `local`, `showroom`.
⛔ Ni climat, ni météo, ni architecture, ni patrimoine bâti. Ne jamais citer un repère d'une commune voisine, ni un toponyme non attesté.

### 7.2 Communes candidates, pour plus tard

Non couvertes, dans le bassin réel du siège (`geo.api.gouv.fr`) :

| Commune | CP | km | Pop. |
|---|---|---|---|
| Saint-Martin-de-Nigelles | 28130 | **3,0** | 1 587 |
| Chaudon | 28210 | 7,1 | 1 688 |
| Villemeux-sur-Eure | 28210 | 10,2 | 1 780 |
| Jouy | 28300 | 12,2 | 1 988 |
| Boutigny-Prouais | 28410 | 12,8 | 1 704 |
| Tremblay-les-Villages | 28170 | 14,4 | 2 206 |
| Gazeran | 78125 | 14,9 | 1 492 |
| Saint-Prest | 28300 | 15,0 | 2 115 |
| Lèves · Champhol · Mainvilliers · Luisant · Lucé | 28300 / 28110 / 28600 | 17-23 | 3 600 à 15 900 — **le vrai volume de la couronne chartraine** |
| Vernouillet | 28500 | 19,5 | 12 310 — couronne de Dreux |
| Le Perray-en-Yvelines · Ablis | 78610 / 78660 | 21-23 | 3 900 à 6 500 |

---

## 8. Schema.org et E-E-A-T

### 8.1 Ce qui est déjà bon — à ne pas casser

- `RoofingContractor` avec **un `@id` unique `#localbusiness`** réutilisé sur les pages villes → une seule entité, pas 14 entreprises.
- `areaServed` en `City` + `AdministrativeArea` — la couverture géographique se déclare là, **pas par des adresses d'emprunt**. Les sites A et C affichent 20 et 12 adresses de mairies ; ici, une seule adresse réelle, partout.
- `BreadcrumbList` sur toutes les pages **et** fil d'Ariane HTML — absent des 3 sites audités.
- `hasOfferCatalog` (6 prestations) et `knowsAbout` (8 entrées).
- **Aucun `aggregateRating` ni `Review`** — bonne décision : Google les a rendus inéligibles sur `LocalBusiness` quand l'entité contrôle les avis la concernant. La note reste affichée en texte avec son volume (« 5/5 · 20 avis »), ce qui est exactement la bonne pratique.

### 8.2 Ce qui manque

| Bloc | Où | Aujourd'hui |
|---|---|---|
| `Service` | les 7 pages prestations | seulement `nettoyage-demoussage` et `traitement-hydrofuge` |
| `FAQPage` | toute page avec une vraie FAQ visible | les 2 mêmes |
| `alt` d'image avec le nom de la commune | pages villes | 1 à 3 `alt` sur 17 |

### 8.3 Trois points à trancher avec Jordy

1. **« 15 années d'expérience »** (accueil + page façade). L'ENTREPRISE RENAUD RENOV est immatriculée le 22/05/2025 (SIREN 944 707 710). L'écart est le même que celui relevé sur le site C audité, et il se vérifie en trois clics sur Pappers. **L'entreprise est familiale, père et fils** : si les 15 ans sont ceux du métier exercé par le père, la phrase est vraie mais mal attribuée. Reformulation possible sans rien perdre : rattacher les quinze années **à la personne**, pas à la société. **Ne rien modifier sans son accord** (contenu intouchable).
2. **SIRET en footer** — aujourd'hui en mentions légales seulement. `SIRET 944 707 710 00017 — RCS Chartres` en footer sitewide est un signal E-E-A-T gratuit.
3. **Assureur décennale** — non nommé (choix assumé, attestation non disponible). Dès qu'elle arrive : nommer l'assureur et le n° de contrat.

### 8.4 Un détail géographique à corriger

`/villes/houdan/` et `/villes/rambouillet/` (Yvelines) se terminent par : *« J'interviens à Villiers-le-Morhier et dans toute l'Eure-et-Loir (28) »*. Une page qui cible Houdan ne devrait pas annoncer un périmètre qui l'exclut. Prévoir une variante dans le template pour les communes hors 28 : *« …et sur la frange ouest des Yvelines »*.

---

## 9. Roadmap — 5 chantiers, dans cet ordre

**Un chantier à la fois, relu avant le suivant.** Le mélange des chantiers est ce qui produit les régressions.

| # | Chantier | Coût | Rédaction | Gain |
|---|---|---|---|---|
| **1** | **Technique & schema** — 3 hubs, sitemap complet, séparateur unique, `Renaud Rénov` accentué, `Service` + `FAQPage` sur les 7 prestations, SIRET en footer, assertion de longueur au build | ~1 j | 0 | immédiat, mécanique |
| **2** | **Cohérence ancre ↔ cible** — `à {Ville}` sur les 6 cartes de service, bloc « zones » réutilisé sur les 5 pages prestations qui ne l'ont pas, ancres de cartes raccourcies | ~1 j | 0 | **indicateur 5 → 0** · +30 à 50 liens prestation→ville |
| **3** | **Maillage à coût nul** — tiroir mobile hors DOM, auto-liens retirés, 1 seul CTA devis par page, `nettoyage-facade` remise dans la nav | ~1 j | 0 | ratio 1/14,5 → ~1/17 · D4 / D8 / D10 |
| **4** | **Balises à rotation + bloc villes proches** — pools §5 câblés dans `[slug].astro`, cascade de garde-fous, règle du 28130, composant `VillesProches.astro` (§6.4), ancres accueil dépliées sur le pool §6.3 | ~2 j | léger | **indicateur 1 : 1 → 5 005** · indicateurs 2 et 3 · Lois 2 et 3 |
| **5** | **Contenu** — +600 mots uniques sur les 14 pages villes (leviers 1/5/7/8/9), `alt` avec la commune, puis 8-12 articles de blog | **~2 mois** | **15 000 à 18 000 mots** | **indicateur 4 : 44 % → < 30 %** · F1 · E 0/5 → 4/5 |

Après le chantier 5, le site passe de **32/49 à ~45/49** et de **1 indicateur sur 6 à 6 sur 6**.

**Ensuite seulement, et pas avant :** nouvelles communes (§7.2), puis citations locales et Google Business Profile via `auditeur-citations-locales`.

---

## 10. Les 5 points bloquants avant toute mise en ligne

1. Aucun title > 60 caractères → **4 à corriger** (`realisations/…` 64, `nettoyage-demoussage` 62, `mentions-legales` 62, `villes/auneau` 61).
2. Aucune ancre sans correspondance sur sa cible → **10 aujourd'hui** (les ancres hydrofuge, §4).
3. Aucun auto-lien → **présent** en footer villes, footer prestations et header.
4. Aucune page orpheline, profondeur ≤ 3 → OK, mais `nettoyage-facade` ne tient qu'à un fil.
5. JSON-LD valide, une seule adresse réelle + `areaServed` → **déjà conforme**. Repasser les 7 pages prestations au Rich Results Test après ajout de `Service`.

---

### Annexe — reproduire la mesure

```bash
# dans une copie du dépôt hors mount macOS
npm ci && npx astro build          # 28 pages HTML dans dist/client
# puis parsing balises / liens / ancres / 6-grammes sur dist/client
```

Distances entre communes : `geo.api.gouv.fr` (centres INSEE, formule orthodromique). Populations : populations légales INSEE exposées par la même API.
