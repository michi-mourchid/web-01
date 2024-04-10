# Questions questions TP Mourchid MOUTUIDINE , Louis MAUZE MIN1

## Question 1

Le fichier package-lock.json est généré par la commande npm install pour verrouiller les versions exactes des dépendances installées. Cela garantit la reproductibilité des installations, en s'assurant que les mêmes versions de modules sont installées sur différentes machines.

## Question 2

La convention pour les numéros de version des dépendances NPM est appelée "Semantic Versioning" (Versionnement Sémantique), où les versions suivent un format de trois chiffres : major.minor.patch.

## Question 3

Une devDependency est une dépendance utilisée uniquement pour le développement et les tests, alors qu'une dépendance est une bibliothèque nécessaire au fonctionnement de l'application en production. Les différences résident donc dans les contextes d'utilisation et dans le fait que les devDependencies ne sont pas incluses dans les paquets distribués à la production.

## Question 4

Une fermeture (closure) ou IIFE est une fonction qui permet d'encapsuler des variables et des fonctions dans un contexte local. Elle était utilisée pour créer des scopes isolés. Les fonctions fléchées en ES6 ont en partie remplacé l'utilisation des IIFE en offrant un comportement de scope plus prévisible.

## Question 5

import * from './utils' importe toutes les fonctions et variables exportées depuis './utils', tandis que import { parseUrl } from './utils' importe uniquement la fonction parseUrl depuis './utils'. L'utilisation de l'un ou l'autre dépend des besoins de l'application, mais importer tout peut entraîner des collisions de noms et une surcharge inutile.

## Question 6

En Java, il est possible de définir des membres de classe comme étant statiques et de déclarer des membres privés, ce qui n'est pas possible en ES6 classes.

## Question 7

La principale différence entre var et let réside dans la portée des variables. Les variables déclarées avec var sont fonctionnelles, tandis que celles déclarées avec let ont une portée de bloc.

## Question 8

.bind(this) est utilisé pour fixer le contexte this d'une fonction JavaScript. Si vous le supprimez, le contexte this sera déterminé par le contexte d'exécution de la fonction. Avec les fonctions fléchées, le contexte this est déterminé par le contexte lexical et ne nécessite pas l'utilisation de .bind(this).

## Question 9

Le symbole @ fait référence à un décorateur dans le contexte de Babel, un outil de transpilation JavaScript. Les décorateurs sont des fonctions qui modifient le comportement des classes et des fonctions dans le code source.

## Question 10

Les Promesses offrent une gestion plus propre et plus lisible des opérations asynchrones en JavaScript, permettant égalmement de mieux gérer les erreurs.

## Question 11

async/await a été introduit dans ECMAScript 2017.

## Question 12

La programmation orientée composant pour le web est considérée comme plus maintenable car elle permet la réutilisation des composants et la modularité du code.

## Question 13

La programmation fonctionnelle est un paradigme de programmation où les programmes sont construits en utilisant des fonctions pures, évitant les effets de bord et privilégiant les transformations de données immuables.

## Question 14

La fonction map() en JavaScript prend une fonction de rappel et l'applique à chaque élément d'un tableau, renvoyant un nouveau tableau contenant les résultats de l'application de la fonction de rappel à chaque élément.

## Question 15

La fonction filter() en JavaScript crée un nouveau tableau contenant uniquement les éléments d'un tableau qui passent un test spécifique. 

## Question 16

reduce() applique une fonction de rappel sur chaque élément d'un tableau pour réduire le tableau à une seule valeur.

## Question 17

.then() est utilisé avec les Promesses pour traiter les résultats asynchrones de manière séquentielle, tandis que async/await permet d'écrire du code asynchrone de manière synchrone, ce qui le rend plus lisible et plus compréhensible.

## Question 18

Le préfixe _ sur un fichier Sass indique qu'il s'agit d'un fichier partiel, c'est-à-dire qu'il est destiné à être importé dans d'autres fichiers Sass plutôt que compilé individuellement.
