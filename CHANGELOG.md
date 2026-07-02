# Journal des versions

Toutes les versions notables de la « Liste de camping en tente » sont consignées ici.
Format inspiré de [Keep a Changelog](https://keepachangelog.com/fr/). La version affichée est aussi visible dans le pied de page de l'app et dans la constante `VERSION` du fichier `index.html`.

## v2.12.0 — 2026-07-02

### Corrigé
- **Les deux listes se réconcilient enfin au complet** : la fusion de la v2.11.0 ne s'appliquait qu'aux items touchés APRÈS la mise à jour. Tout l'écart accumulé entre les deux appareils pendant l'ère « le dernier écrase tout » restait figé pour toujours : les listes demeuraient différentes même avec le même code de camp. Maintenant, dès la première synchro, les deux listes se réunissent au complet sans rien perdre (les coches, retraits, notes et items persos des DEUX bords sont conservés), puis la fusion item par item prend le relais pour la suite.

### Ajouté
- **Heure du dernier échange** : l'indicateur 🟢/🔴 affiche maintenant l'heure de la dernière synchro réussie (ex. « 🟢 Synchro avec le camp OK (14:32:05) »), pour voir en un coup d'œil si les échanges se font vraiment sur chaque appareil.

## v2.11.0 — 2026-07-02

### Corrigé
- **La synchro n'écrase plus l'autre appareil** : c'était la vraie cause du « marche pas ». Avant, chaque envoi remplaçait la liste au complet (« le dernier qui parle gagne ») : si vous cochiez chacun de votre bord en dedans de quelques secondes, les changements d'un des deux disparaissaient en silence. Pire, une réception du camp pendant la petite attente avant l'envoi pouvait effacer une coche qu'on venait tout juste de faire. Maintenant, chaque item porte son propre horodatage et la synchro fusionne item par item : la modification la plus récente gagne pour CHAQUE item, jamais pour la liste au complet. Deux personnes peuvent cocher en même temps sans se piler dessus.

### Modifié
- **Les items personnalisés passent aussi par la corbeille** : supprimer un item ajouté à la main l'envoie dans la 🗑️ Corbeille (récupérable) au lieu de l'effacer pour de bon.
- **Rejoindre un camp adopte sa liste** : quand tu rejoins un camp, c'est la liste du camp qui gagne (comme avant), puis la fusion prend le relais pour la suite.

## v2.10.0 — 2026-07-02

### Ajouté
- **🗑️ Corbeille** : le bouton « Rétablir » (tout ou rien) devient une vraie corbeille. Elle liste chaque item retiré individuellement (avec sa catégorie) et permet de le restaurer un par un, en plus du bouton « Tout restaurer » pour tout récupérer d'un coup.

## v2.9.1 — 2026-07-02

### Corrigé
- **Même code de camp mais liste différente entre les deux appareils** : sur mobile, l'app en arrière-plan (écran verrouillé, changement d'appli) arrêtait complètement la synchro, et rien ne la relançait automatiquement au retour. Maintenant, dès que l'appli redevient visible, une resynchro complète se déclenche (réception des changements manqués + envoi de tout changement resté en attente).

### Ajouté
- **🔄 Resynchroniser maintenant** : nouveau bouton pour forcer une synchro immédiate avec le camp partagé, utile pour vérifier que tout est bien à jour.

## v2.9.0 — 2026-07-02

### Ajouté
- **Nommer le camp** : touche sur le code du camp affiché dans le pied de page pour lui donner un petit nom (ex. « Famille Raymond ») au lieu de comparer un code illisible entre les deux appareils. Le nom se synchronise automatiquement avec l'autre appareil, comme le reste de la liste.

## v2.8.0 — 2026-07-01

### Ajouté
- **🔁 Changer de camp (coller un code)** : le bouton pour rejoindre un camp est maintenant toujours visible, même si l'appareil est déjà dans un camp. Avant, une fois entré dans un camp (même le mauvais), il n'y avait plus aucun moyen visible d'en rejoindre un autre.

### Corrigé
- **Impossible de changer de camp** : c'était la vraie cause du bogue « pas même code » entre les deux appareils. `Rejoindre un camp` détecte maintenant si tu es déjà dans un autre camp et demande confirmation avant de le quitter et de basculer vers le nouveau (arrête proprement la synchro de l'ancien camp, réinitialise les indicateurs 🟢/🔴).
- **Pied de page pas à jour au chargement** : au démarrage de l'app, les boutons du camp (et le code affiché) s'affichaient encore comme si aucun camp n'était actif pendant un instant, même quand un camp était déjà enregistré sur l'appareil (ex. « Camp partagé (live) » au lieu de « Camp actif », « Rejoindre un camp » au lieu de « Changer de camp »). C'était trompeur en pleine confusion de synchro. Le pied de page se met maintenant à jour dès que le camp actif est retrouvé.

## v2.7.0 — 2026-07-01

### Ajouté
- **📋 Rejoindre un camp (coller)** : nouveau bouton pour rejoindre un camp partagé en collant le lien d'invitation directement dans l'app déjà ouverte — même cause que le problème réglé pour « Coller une liste » : coller un lien `#camp=...` dans un onglet déjà ouvert ne recharge pas toujours la page, donc l'invitation ne s'appliquait jamais silencieusement.
- **Code du camp affiché** : le code exact du camp actif est maintenant visible sous le bouton du camp, pour comparer facilement entre les deux appareils et confirmer qu'ils sont bien dans le **même** camp.

## v2.6.1 — 2026-07-01

### Corrigé
- **Diagnostic honnête du camp partagé** : les envois et réceptions vers Firebase échouaient auparavant en silence — le badge « envoyé au camp » s'affichait même si l'envoi réseau échouait réellement. Maintenant, le succès n'est confirmé qu'une fois vérifié (« 📡 Envoyé au camp avec succès ! »), et un échec réel est signalé clairement (sans spammer si plusieurs tentatives échouent d'affilée).
- **Indicateur de synchro** : un petit statut 🟢/🔴 apparaît sous le bouton du camp partagé pour voir en tout temps si la connexion fonctionne.

## v2.6.0 — 2026-07-01

### Ajouté
- **📋 Coller une liste** : nouveau bouton dans le pied de page pour appliquer un lien de liste partagée en le collant directement dans l'app déjà ouverte. Contourne un vrai problème rencontré : coller un lien `#l=...` dans la barre d'un onglet déjà ouvert ne recharge pas toujours la page dans certains navigateurs, donc le lien ne s'applique jamais silencieusement (aucune erreur, mais rien ne se passe). Le nouveau bouton fonctionne dans tous les cas, sans dépendre d'une navigation fraîche.

## v2.5.2 — 2026-07-01

### Corrigé
- **Partage par lien pendant un camp actif** : ouvrir un lien « liste partagée » (#l=) sur un appareil ayant déjà un camp partagé en cours ne se fait plus écraser par la synchro du camp. La liste appliquée est maintenant **diffusée immédiatement** au camp (au lieu d'attendre l'envoi différé habituel), pour gagner la course contre la première mise à jour reçue du camp.

## v2.5.1 — 2026-07-01

### Modifié
- **Camp partagé** : les deux services gratuits essayés précédemment (jsonblob bloqué par CORS, extendsclass fermé/404) sont remplacés par **Firebase Realtime Database** (base gratuite dédiée au projet). Plus fiable et pérenne pour la synchro en direct entre 2 appareils.

## v2.5.0 — 2026-07-01

### Amélioré (passe d'animation)
- **🔥 Flammes plus organiques** : vacillement multi-étapes désynchronisé (le feu danse au lieu d'osciller), appliqué aussi au mini-feu de l'en-tête.
- **✨ Étincelles qui louvoient** : elles montent en zigzag au lieu d'une ligne droite.
- **✅ Coche satisfaisante** : petit *pop* rebondi + anneau de pulsation quand on coche un item (déclenché seulement par l'action de l'utilisateur).
- **📂 Ouverture des sections adoucie** : le contenu glisse et fond à l'ouverture d'un accordéon.
- **🌙 Lune qui respire**, **braise de Petit Bob qui vacille**, **reflet qui coule** dans la barre de progression.
- **🚜 Machinerie bonifiée** : les **roues tournent pour vrai** (rayons animés), 2 nouvelles machines (**moissonneuse-batteuse** et **niveleuse**, 6 au total), klaxon « TUUT TUUT ! » à mi-traversée, et passages plus fréquents.
- Toutes les animations continues restent désactivées avec `prefers-reduced-motion`.

### Corrigé (audit de performance ultracode)
- Les 3 animations en boucle qui repeignaient l'écran à chaque frame (reflet de barre, lune, braise) sont converties en `transform`/`opacity` composités — meilleur pour la batterie et la fluidité; le survol de la lune refonctionne du même coup.
- Les animations invisibles (48 étoiles éteintes, aurore absente, étincelles à feu mort) sont **mises en pause** tant qu'elles ne servent pas.
- Les coches rapprochées ne coupent plus les animations en plein vol (timers correctement annulés sur la coche, le mini-feu et le pouf).
- La poutine tombe via `transform` (plus de calcul de mise en page à chaque frame) et respecte le mode animations réduites.
- La pluie de braises de la fête s'essouffle après ~12 s (le feu continue de rugir).
- Aurore allégée (flou 13px → 9px), halo du mini-feu déplacé sur la bûche statique, règle CSS morte supprimée.

## v2.4.1 — 2026-07-01

### Corrigé (passe de révision)
- **Synchro du camp partagé** : la mise à jour venant de l'autre appareil n'écrase plus ce que tu es **en train d'écrire** (champ « Ajouter un item ») ; elle attend le prochain tour de synchro.
- **Notes orphelines** : supprimer un item personnalisé efface aussi son commentaire 💬 de la sauvegarde.
- **Poutine d'urgence** : taper le titre 5 fois vite sur mobile ne sélectionne plus le texte du titre.

## v2.4.0 — 2026-07-01

### Ajouté
- **💬 Commentaire sous les items** : un bouton 💬 sur chaque item permet d'écrire une note perso qui s'affiche sous le nom (ex. « prendre la grande tente », « demander à maman »). Le commentaire est sauvegardé, transféré dans le **partage par lien** et la **synchro du camp partagé**, et apparaît dans le **PDF**.

## v2.3.1 — 2026-07-01

### Modifié
- **Camp partagé** : le service de synchro (jsonblob) était bloqué par CORS. Bascule vers **extendsclass** (stockage JSON gratuit, orienté navigateur), avec des messages d'erreur plus précis pour diagnostiquer. Toujours en bêta, à valider sur de vrais appareils.

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
