# DENZEL

## En ligne :
J'ai créé un autre répositorie pour le mettre sur netlify.

Voici l'adress : https://client-denzel-movies.netlify.com (Il est possible que les api mettre quelques minutes à marcher)

## Ici voici le le back et client en local  :
Le fichier Denzel_back contient :
- La connection avec la base de donnée mongoDB
- L'ajout de tous les films dans la base de données
- Les requetes REST suivantes :
  - GET /movies/populate
  - GET /movies
  - GET /movies/:id
  - GET /movies/search
  - POST /movies/:id
- Les requetes GraphQL 

Le fichier Denzel_front contient toute la partie client dont l'appel à l'api et l'affichage à l'aide de react.js
