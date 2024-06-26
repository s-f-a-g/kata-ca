# KATA Crédit Agricole

# Réalisation d’un convertisseur euro / dollar

- [ ] Afficher une valeur qui représentera le taux de change EUR / USD

  - Elle sera initialisée à 1.1.

  - Toutes les 3 secondes, une valeur aléatoire entre -0.05 et +0.05 sera ajoutée ou soustraite à la valeur initiale.

- [ ] Réaliser un front permettant de saisir un montant en EUR et affichant sa valeur en USD sur la base du taux de change

- [ ] Mettre en place un polling régulier permettant la mise à jour de la partie USD en fonction de l’actualisation du taux de change

- [ ] Ajouter un switch permettant de saisir un montant en USD à la place du montant en EUR :

  -  Switch réglé sur “EUR” : le montant saisie est en Euro, la valeur affichée est en USD

  - Switch réglé sur “USD” : le montant saisie est en Dollar, la valeur affichée est en EUR

- [ ]  S’assurer de la continuité des valeurs (si le switch est activé, la nouvelle entrée devient l’ancienne sortie)

- [ ] Ajouter un champ permettant de fixer (force) un taux de change

- [ ] Désactiver le taux de change fixe (si actif) lors d’une variation de plus de 2% avec le taux réel. La conversion sera alors effectuée en prenant en compte le taux réel.

- [ ] Ajouter un tableau d’historique des 5 dernières demandes de conversion calculées. Le tableau affichera le taux réel, le taux saisi, la valeur initiale avec la devise associée et la valeur calculée avec la devise associée.



**Note : Une attention particulière devra être portée sur l’UX.**



**Code** : Livraison du code sur un repo github à nous communiquer

**ToDo** : Fichier « [todo.md](todo.md) » listant les améliorations et les raccourcis pris à cause du temps imparti

**Roadmap** : Fichier « [roadmap.md](roadmap.md) » listant quelques fonctionnalités qui pourraient être apportées au projet pour constituer un premier backlog

Nice to have : **ag-grid** / **ngrx / material**

## Mode Opératoire

- Container

- CurrencyService

  - taux de change à l’instant

  - polling du taux de change

  - avoir une valeur random entre -0.05 et +0.05

- Tableau d’historisation



| Taux réel | Taux Saisi | Valeur initiale | Valeur convertie | 
   |---|---|---|---|


- Formulaire de saisie

  - Input euro

  - switch dollars / euros

  - ajouter un input pour le taux fixe

    - désactiver input si la variation est +2% par rapport au taux réel

- Currency pipe



## Roadmap

- install ngrx

- install ag-grid

## Implem

start : 26 juin 16:06
```ts
ng new currency-converter
```
```ts
ng serve
```
Create currency converter component

```ts
ng g c components/currency-converter
```

As it needs to be beautiful I will reuse some CSS files I have. In real life I would use the DS specs or the css contained in figma. For the toggle we probably use the one on material or a custom one I 2h seem short to do everything so I will focus on functionality

```ts
git add .
git commit -m "KATA_CURRENCY_CONVERTER_0001 init project and add some layout"
```

I started quite fast so I forgot to do initial commit, so it comes with some layout

Then I switched to branch KATA_CURRENCY_CONVERTER

```ts
git checkout -b KATA_CURRENCY_CONVERTER
```

16:27

create currency converter service

```ts
ng g s components/currency-converter/currency-converter-service
```

17:38

```ts
npm install ag-grid-angular
```

```ts
npm install ag-grid-community
```

```ts
ng g c components/currency-converter-history
```

18:06 ⇒ FIN
