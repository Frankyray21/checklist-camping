# Journal des versions

Toutes les versions notables de la « Liste de camping en tente » sont consignées ici.
Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/). La version affichée est aussi visible dans le pied de page de l'app et dans la constante `VERSION` du fichier `index.html`.

## v1.7.0 — 2026-07-01

### Ajouté
- **Coucher de soleil selon l'avancement** : le ciel se réchauffe à mesure que tu coches ta liste. Nuit froide et vide au départ, puis dégradé crépuscule (mauve, rose, orange, doré à l'horizon) de plus en plus présent jusqu'à un vrai coucher de soleil à 100 %. L'intensité est plafonnée pour garder les textes bien lisibles, et la transition est douce à chaque coche.

## v1.6.0 — 2026-07-01

### Ajouté
- **Compteur de vols de guimauves** 🦝 : Petit Bob tient le compte à vie de chaque guimauve piquée par le raton (« Le raton t'a piqué N guimauves jusqu'à date »). Sauvegardé sur l'appareil et **non remis à zéro** par « Tout décocher ». S'affiche seulement une fois qu'il y a eu au moins un vol.

## v1.5.0 — 2026-07-01

### Ajouté
- **Déclencheurs manuels** : deux boutons sous le feu, « Appeler le raton » 🦝 et « Appeler la moufette » 🦨, pour les faire apparaître sur commande (pratique pour les montrer). L'appel manuel du raton force la guimauve à apparaître le temps du vol.

### Amélioré
- Les bibittes **trottinent** maintenant (petit dandinement de haut en bas) au lieu de glisser.
- **Poussière** soulevée à l'entrée du raton, quand il repart, et surtout quand il **déguerpit** à cause de la moufette.
- La moufette lâche des **bouffées vertes** qui montent en plus de son nuage, pour un « PSCHITT » plus vivant.

## v1.4.1 — 2026-07-01

### Modifié
- Petit Bob changeait **trop vite** : il ne change plus à chaque item coché, et la rotation automatique passe de 16 s à 30 s. On peut toujours **taper sur Petit Bob** pour une nouvelle réplique à la demande, et il réagit encore aux événements (raton, moufette).

## v1.4.0 — 2026-07-01

### Ajouté
- **La moufette qui fait fuir tout le monde** 🦨 : de temps en temps (plus rare que le raton), une moufette débarque, lève la queue et lâche un **nuage vert** puant. Le **raton laveur panique et décampe** s'il est là, le feu recule, la carte de Petit Bob sursaute, et Petit Bob commente le désastre de loin (« Petit Bob a changé de code postal à cause d'une moufette »).
- **Mini-feu collant dans le hero** : une petite version du feu de camp reste visible dans la barre du haut quand on scrolle la liste. Elle grossit selon la progression et fait un petit *poof* à chaque item coché, comme le grand feu.

## v1.3.0 — 2026-07-01

### Ajouté
- **Le raton laveur voleur de guimauve** 🦝 : quand le feu est assez fort pour qu'une guimauve grille (≥ 45 %), un raton se faufile de temps en temps, **pique la guimauve sur le bâton** et détale avec son butin. Petit Bob commente le larcin avec une réplique dédiée (« le raton a gardé la guimauve », etc.). La guimauve repousse après son passage. Désactivé si l'utilisateur réduit les animations.

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
