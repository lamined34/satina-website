# Maquettes : site SATINA AGRO-SERVICE

Cinq propositions visuelles construites à partir du cahier des charges de SATINA AGRO-SERVICE (importation, distribution et approvisionnement en produits agricoles et alimentaires, Conakry, Guinée).

| Dossier | Style |
|---|---|
| `1-classique/` | Institutionnelle : vert agricole et or, sobre et rassurante |
| `2-moderne/` | Moderne : fond sombre, accent safran, section oignons très visible |
| `3-minimaliste/` | Minimaliste : crème, terre cuite et olive, style éditorial |
| `4-moderne-epure/` | Version courte de la maquette 2 : images, peu de texte |
| `5-minimaliste-epure/` | Version courte de la maquette 3 : images, très peu de texte |

Les maquettes 1 à 3 partagent le même contenu et suivent l'arborescence du cahier des charges (§35) : Accueil, À propos (avec le mot du PDG, la vision et les valeurs), Produits, Importation d'oignons, Services, Importation & approvisionnement, Devenir fournisseur, Partenaires, Actualités, Demande de devis, Contact. Elles tiennent chacune sur une seule page ; dans le site final, chaque rubrique deviendra une vraie page.

Les maquettes 4 et 5 gardent les images mais réduisent fortement le texte : produits illustrés, à propos court avec le PDG, oignons, actualités, formulaires fournisseur et devis (version courte), contact et WhatsApp. Le mot du PDG, les valeurs, la chaîne d'approvisionnement et les partenaires n'y figurent pas.

## Contenu partagé

Tout le contenu (coordonnées, produits, services, valeurs, actualités, champs des formulaires) se trouve dans `commun/satina.js`. Une modification dans ce fichier s'applique à toutes les maquettes. Par exemple, pour ajouter un produit, il suffit d'ajouter une ligne dans la liste `produits`.

## Voir les maquettes

- En ligne : https://lamined34.github.io/satina-website/
- En local : ouvrir `maquettes/index.html` dans un navigateur, sans rien installer.

## Ce qui est provisoire

- **Photos et logo** : remplacés par des emplacements « Photo à fournir ». Les couleurs seront alignées sur le logo officiel.
- **Mot du PDG** : texte rédigé à titre d'exemple, à faire valider par M. Talibé Diallo.
- **Formats des produits et critères pour les oignons** (variétés, calibres, origines) : indicatifs, à confirmer.
- **Actualités, horaires, réseaux sociaux, logos des partenaires** : à fournir.
- **Version anglaise** : le bouton EN est présent, mais la traduction viendra avec le site final.
- **Formulaires** : ce sont des démonstrations, ils n'envoient rien pour l'instant.

## Informations confidentielles

Conformément aux §9 et §31 du cahier des charges, l'opération « haricots blancs d'Égypte » est présentée **sans** prix, montant total, conditions de paiement ni nom du fournisseur.

## Étape suivante

Une fois la maquette choisie, on construira le site final avec [Astro](https://astro.build) :

- vraies pages et sections bilingues FR/EN ;
- fiches produits et actualités faciles à ajouter ;
- formulaires reliés à l'e-mail de l'entreprise, avec protection anti-spam ;
- référencement Google optimisé.
