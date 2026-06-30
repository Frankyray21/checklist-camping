# Liste de camping en tente 🔥⛺

Application web d'aide-mémoire pour préparer un **camping en tente**, l'été, sur un terrain aménagé, avec deux jeunes enfants (un bébé de 0 à 3 ans et un enfant de 4 à 9 ans). Tout est en **français québécois**.

C'est un **fichier HTML unique, autonome**, qui fonctionne **hors-ligne** : aucune dépendance, aucun serveur requis. Le seul lien externe est vers les polices Google Fonts (Anton et Hanken Grotesk).

## Ce que ça fait

- **10 sections** en accordéon (À ne pas oublier, Abri et couchage, Cuisine et repas, Bouffe et breuvages, Bébé, Enfants, Plage et baignade, Vêtements, Hygiène et santé, Outils) avec une barre de progression par section.
- Un **feu de camp animé** en CSS qui grossit selon le pourcentage d'items cochés.
- **Cases à cocher persistantes** : tes coches restent en place quand tu reviens (sauvegarde sur l'appareil via `localStorage`).
- **Ajout et suppression** d'items personnalisés dans chaque section.
- Bouton **« Créer le PDF »** qui génère et télécharge un vrai fichier `liste-camping.pdf` multi-pages, avec un moteur PDF maison en JavaScript pur (aucune librairie).
- **Impression propre** via `@media print` en solution de repli.

## Comment l'ouvrir

### En local, sans rien installer
Ouvre simplement `index.html` dans un navigateur (double-clic).

### Avec un petit serveur local (recommandé pour tester)
Certains navigateurs sont plus stricts sur les fichiers `file://`. Pour servir le site localement :

```bash
# Avec Python (déjà installé sur la plupart des machines)
python3 -m http.server 8000
# puis ouvre http://localhost:8000

# ou avec Node
npx serve .
```

## Comment déployer (Vercel, site statique)

Le projet est un site statique : aucun build, aucune configuration spéciale.

```bash
# 1. Installer la CLI Vercel (une seule fois)
npm i -g vercel

# 2. Depuis le dossier du projet, lancer un déploiement de prévisualisation
vercel

# 3. Quand tu es prêt, passer en production
vercel --prod
```

Vercel sert automatiquement `index.html` à la racine. On peut aussi simplement importer le dépôt GitHub dans le tableau de bord Vercel : aucun réglage de build n'est nécessaire (framework « Other », dossier de sortie = racine).

## Persistance des données

L'app sauvegarde l'état (coches, items ajoutés, sections ouvertes) dans le `localStorage` du navigateur sous la clé `camping:tente:v2`. Si le `localStorage` n'est pas disponible (par exemple en navigation privée stricte), un repli en mémoire prend le relais le temps de la session.

## Architecture technique

- Un seul fichier `index.html` : le CSS et le JS sont inclus dedans.
- JavaScript vanilla, encapsulé dans une IIFE, aucun framework.
- Le contenu vit dans un tableau `DATA` (des catégories qui contiennent des items `{id, nm, nt}`).
- L'état est un objet `{checked, custom, open}` sérialisé en JSON.
- Le moteur PDF construit les octets à la main (objets PDF, table xref, encodage WinAnsi pour les accents, polices Helvetica et Helvetica-Bold, format Lettre 612 x 792).

## Règles de design à respecter

- Interface entièrement en français québécois.
- Aucun tiret cadratin (long tiret), ni dans le code ni dans l'interface.
- Aucune ligne de séparation horizontale.
- Palette : nuit `#13241B`, forêt `#1E3A2C`, toile `#EFE6D3`, braise `#E8763C`, flamme `#F4A93D`. Polices : Anton pour les titres, Hanken Grotesk pour le corps.
- Garder le fichier autonome et fonctionnel hors-ligne. Le moteur PDF maison est volontairement sans dépendance : ne pas le remplacer par une librairie.
- Garder les `id` des items existants stables (sinon les coches sauvegardées de ces items se perdent).
