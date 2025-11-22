# React Pokemon Finder - Projet

## Contexte
Application React (Vite) qui permet de rechercher, afficher, et sauvegarder en favoris des Pokemons.
Le projet utilise : React, Vite, Tailwind, React Router, un Provider pour le dark mode et pour les favoris (localStorage), et un proxy pour l’API.

## Fonctionnalités demandées
- Page d’accueil affichant une sélection aléatoire / choix d’items
- Page de recherche avec champ de recherche, filtres et pagination
- Page favoris (persistée via `localStorage`)
- Page de détail d’un item
- Page paramètres (ex : dark mode)
- Logique d’appel API centralisée via un proxy (Vite proxy pour dev ou petit serveur)
- Optimisations demandées : `useMemo` / `useCallback` / `React.memo` où pertinent

## Fonctionnalités implémenter
- Page d'acceuil avec 20 Pokemon random afficher
- Page de recherche avec un champ de recherche et pagination, pas de filtre
- Page favoris affiche la liste des favoris enregistrer dans `localStorage`
- Page de détail affichant les informations d'un Pokemon ( Stats, talent, type, nom )
- Barre de navigation amenant au page "Home", "Search", "Favorites" et un button pour changer le dark mode ou light mode
- PokemonCard component affichant nom,type et numéro id, un coeur vide ou rouge si il est favoris.
- Création de component : AbilityComponent, PageableComponent, Type, PokemonList
- Optimisation de certain component : PokemonCard -> `React.memo` / Search -> useMemo filtered list filtrer par input search / PokemonList -> useCallback sur fonction onSelectPage

## Installation (local)
```bash
git clone https://github.com/Bastien-Antraygues/pokemonFinder.git
cd POKEMON_FINDER
npm install
```
## Développement 
```bash
# démarre le dev server
npm run dev
# ouvre http://localhost:5173
```
## Build
```bash
npm run build
```
