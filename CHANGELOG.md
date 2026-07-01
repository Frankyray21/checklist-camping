# Journal des versions

Toutes les versions notables de la « Liste de camping en tente » sont consignées ici.
Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/). La version affichée est aussi visible dans le pied de page de l'app et dans la constante `VERSION` du fichier `index.html`.

## v1.2.0 — 2026-07-01

### Ajouté
- **Le feu réagit à la checklist, façon rigolote** :
  - À chaque item coché, le feu **pogne d'un coup** (poussée de flammes) et lance une **gerbe d'étincelles**, et le compteur fait un petit *bump*.
  - Quand on **décoche**, le feu **retombe** (sputter).
  - Quand le feu est **faible ou mort**, de la **fumée** monte ; elle disparaît à mesure que ça chauffe.
  - Au-dessus de ~45 %, une **guimauve grille** au-dessus du feu (elle dore avec l'intensité).
  - À **100 %**, c'est la **fête** : les flammes rugissent, le feu se dandine et une **pluie de braises** démarre, avec un gros feu d'artifice d'étincelles.
- Toutes les animations respectent `prefers-reduced-motion` (désactivées si l'utilisateur réduit les animations).

## v1.1.0 — 2026-06-30

### Ajouté
- Suppression possible de **n'importe quel** item (plus seulement ceux ajoutés). Les items de base retirés sont récupérables avec un bouton **« Rétablir »** dans le pied de page.
- **Application installable (PWA)** : bouton **« Télécharger l'app »**, manifeste (`manifest.webmanifest`), service worker (`sw.js`) pour le mode hors-ligne, et icônes (`icon-192.png`, `icon-512.png`). Repli avec instructions d'installation sur iPhone et Android.
- **Petit Bob** : un commentateur absurde et niaiseux qui lance une réplique au hasard (au chargement, à chaque coche, au clic, et en rotation douce). Petit clin d'oeil aussi dans le message de feu complété.

### Modifié
- Nouvelle clé d'état `removed` ajoutée à la sauvegarde `localStorage` (rétrocompatible avec les sauvegardes existantes).

## v1.0.0 — 2026-06-30

### Ajouté
- Mise en place du dépôt : `index.html`, `README.md` (FR), `.gitignore`.
- Persistance via `localStorage` (clé `camping:tente:v2`) avec repli en mémoire, en remplacement de `window.storage` propre à claude.ai.
- Déploiement automatique sur GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`).
- Numéro de version affiché dans le pied de page et journal des versions (`CHANGELOG.md`).
