# Journal des versions

Toutes les versions notables de la « Liste de camping en tente » sont consignées ici.
Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/). La version affichée est aussi visible dans le pied de page de l'app et dans la constante `VERSION` du fichier `index.html`.

## v2.3.0 — 2026-07-01

### Ajouté
- **📡 Camp partagé (synchro live entre 2 appareils)** : bouton « Camp partagé (live) » qui crée un camp et génère un lien d'invitation. Ta conjointe ouvre le lien → vos deux appareils **se synchronisent en direct** (cases cochées, items ajoutés/retirés/renommés), sans compte ni réglage. Utilise un petit stockage JSON gratuit (jsonblob), en réseau seulement (jamais mis en cache par le service worker). On peut quitter le camp en tout temps. *(Bêta : à tester sur de vrais appareils.)*

## v2.2.0 — 2026-07-01

### Ajouté
- **🔗 Partager la liste (2 appareils)** : un bouton « Partager la liste » génère un lien qui contient toute la liste (items cochés, items ajoutés, retirés, renommés). Ta conjointe ouvre le lien sur son appareil et récupère exactement la même liste (avec confirmation avant de remplacer la sienne). Utilise le partage natif du téléphone, avec copie du lien en repli. Sans réglage ni compte.

## v2.1.0 — 2026-07-01

### Ajouté
- **🚜 Tracteur & machinerie lourde** : un tracteur, une pelle mécanique, un bulldozer ou un camion benne traversent le camping (fumée d'échappement incluse). Bouton **« Machinerie »** pour les appeler à volonté, plus des passages au hasard.
- **✎ Modifier un item déjà là** : un bouton crayon sur chaque item permet de renommer le texte (items de base ou personnalisés). La modification se répercute dans le PDF.
- **🎁 Carte de score partageable** : bouton « Ma carte de camp » qui génère une image (canvas, sans librairie) avec tes stats (rang, items, guimauves volées, vœux, niveau de bines), partagée via le partage natif du téléphone ou téléchargée.

### Modifié
- **Petit Bob ne change plus tout seul** : il change seulement quand tu tapes dessus ou quand tu coches un item (fini la rotation automatique).
- **Le feu reste en en-tête** : le mini-feu de la barre du haut est plus gros et plus vivant, bien visible quand on scrolle.

## v2.0.0 — 2026-07-01

### Ajouté (grosse fournée de niaiseries)
- **🌭 La saucisse fugueuse** : de temps en temps, une saucisse se sauve du feu en criant « AYOYE ! » et le raton part à sa poursuite.
- **💨 Le Baromètre de bines** : une jauge qui monte selon les items de bouffe cochés et prédit le niveau de flatulence de la nuit (de « Brise légère » à « Évacuation générale »).
- **🏅 Rang de campeur évolutif** : un titre pompeux qui évolue avec l'avancement, de « Ver de terre citadin » à « Seigneur des Tentes ».
- **🎬 Le drame du dernier item** : quand il ne reste qu'un item, Petit Bob panique (« C'EST ÇA QUE T'AS OUBLIÉ, LÀ ») ; le compléter débloque le badge « J'ai failli oublier le papier de toilette ».
- **🍟 Poutine d'urgence** (easter egg) : tape le titre 5 fois vite (ou entre le code Konami) et une poutine géante tombe du ciel sur le feu.
- **👻 Coche fantôme** : si tu spammes le même item, Petit Bob s'impatiente (« lâche le lousse, tu vas l'user »).

## v1.9.0 — 2026-07-01

### Ajouté
- **💫 Fais un vœu** : une fois la lune levée (~60 %), tape dessus — une étoile file et Petit Bob exauce ton vœu à sa façon absurde.
- **🌌 Aurores boréales** : de subtiles aurores vertes ondulent tout en haut du ciel quand tu approches de 100 %.
- **🔭 Constellation cachée** : quelques étoiles reliées forment une petite tente dans le ciel (apparaît dès ~50 %).
- **🌙 Reflet rosé sur les flammes** : le feu prend une teinte un peu plus rosée à mesure que le coucher de soleil s'installe.

## v1.8.0 — 2026-07-01

### Ajouté
- **Ciel de soir qui se dévoile en finissant la liste** :
  - ⭐ **Étoiles scintillantes** qui s'allument progressivement dans le ciel dès ~35 %.
  - 🌙 **Une lune** qui se lève doucement dans le coin après ~60 %.
  - 🌠 **Étoiles filantes** qui traversent de temps en temps une fois la nuit bien tombée (au-delà de ~60 %).
- Le tout en arrière-plan, sous les textes (lisibilité intacte), et désactivé si l'utilisateur réduit les animations.

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
