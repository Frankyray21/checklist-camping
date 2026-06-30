# Notes du projet — Liste de camping en tente

## Suivi de version (OBLIGATOIRE à chaque changement)

À **chaque** modification de l'app, toujours faire un suivi de version :

1. **Bumper le numéro de version** dans la constante `VERSION` de `index.html` (format `vMAJEUR.MINEUR.CORRECTIF`, ex. `v1.0.0`).
   - Correctif (`+0.0.1`) : correction de bogue, ajustement mineur.
   - Mineur (`+0.1.0`) : nouvel item, nouvelle fonctionnalité sans rupture.
   - Majeur (`+1.0.0`) : refonte ou changement qui casse la compatibilité (ex. nouvelle clé de stockage).
2. **Ajouter une entrée dans `CHANGELOG.md`** (en français) sous une nouvelle section `## vX.Y.Z — AAAA-MM-JJ` avec les changements (Ajouté / Modifié / Corrigé).
3. **Mentionner la version dans le message de commit** (ex. `... + v1.1.0`).
4. La version est affichée dans le pied de page de l'app (élément `#ver`) — vérifier qu'elle reste cohérente avec la constante `VERSION`.

## Règles de design à respecter (ne pas briser)

- Interface entièrement en **français québécois**.
- **Aucun tiret cadratin** (long tiret), ni dans le code ni dans l'interface.
- **Aucune ligne de séparation horizontale**.
- Palette : nuit `#13241B`, forêt `#1E3A2C`, toile `#EFE6D3`, braise `#E8763C`, flamme `#F4A93D`. Polices : Anton (titres), Hanken Grotesk (corps).
- Garder le fichier **autonome et fonctionnel hors-ligne** (un seul `index.html`). Le moteur PDF est maison et volontairement **sans dépendance** : ne pas le remplacer par une librairie.
- Garder les `id` des items existants **stables** (sinon les coches sauvegardées se perdent).
- Persistance : `localStorage`, clé `camping:tente:v2`, avec `try/catch` et repli en mémoire.

## Déploiement

Site statique publié sur **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`) à chaque push sur `main`.
