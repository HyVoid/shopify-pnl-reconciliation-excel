[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Moteur d'analyse P&L et de rapprochement financier pour deux boutiques Shopify (modèle Excel et calculateur web gratuits)
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/838d93dd-8e60-48e3-ba3b-24747fcb717f" />


[![Licence : Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](./LICENSE)
![Plateforme : Navigateur + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2251FF)
![Type d'outil : Aide à la décision financière e-commerce](https://img.shields.io/badge/Tool-Financial%20Decision%20Support-051C2C)

**Le moteur d'analyse P&L et de rapprochement pour deux boutiques Shopify est un modèle Excel gratuit de compte de résultat (P&L) pour l'e-commerce ainsi qu'un calculateur financier en ligne, conçu pour les opérateurs Shopify multi-boutiques. Rapprochez automatiquement les exports de ventes Shopify, calculez le coût des marchandises vendues (COGS) au niveau des SKU et des lots, répartissez les charges d'exploitation (OPEX) multidevises et faites correspondre les transactions Wise ou de relevé bancaire dans un flux de comptabilité mensuel reproductible — sans acheter de coûteux logiciel ERP.**

> **Lancez votre audit mensuel des profits e-commerce en quelques secondes.** Aucune inscription. Aucune installation logicielle. 100 % gratuit.
>
> - [🌐 Lancez le calculateur web interactif gratuit de P&L Shopify dans votre navigateur (aperçu sandbox instantané)](https://hyvoid.github.io/shopify-pnl-reconciliation-excel/
> - [📥 Téléchargez le classeur Excel reproductible de rapprochement P&L multi-boutiques Shopify et bancaire (.xlsx)](https://theseusworkshop.com/l/wtrch?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=shopify-pnl-reconciliation-excel)

Le calculateur web interactif et le classeur Microsoft Excel téléchargeable résolvent tous deux le même défi central de comptabilité e-commerce : transformer des **exports CSV de ventes Shopify fragmentés**, l'**économie unitaire des SKU**, les **dépenses FX multidevises (USD, EUR, AED)** et les **relevés de versements Wise/bancaires** en un **compte de résultat (P&L) de gestion mensuel** prêt pour l'audit et traçable. Tandis que la version navigateur offre un sandbox instantané sans configuration, le modèle Excel est conçu pour la conservation permanente des documents financiers hors ligne, les calculs de clôture mensuelle automatisés et un rapprochement granulaire au niveau des transactions.

---

## Ce que suit ce modèle Shopify de P&L et de comptabilité analytique (cartographie des points de douleur vers les solutions)

| Point de douleur financier e-commerce | Angle mort comptable à haute fréquence | Suivi et résolution automatisés dans ce moteur |
| :--- | :--- | :--- |
| **Distorsion de rentabilité multi-boutiques** | Difficulté à comparer une boutique internationale (USD) à une boutique européenne (EUR) sur une base réellement comparable. | **Économie unitaire au niveau boutique :** Suit le chiffre d'affaires brut, le COGS rendu, la marge brute, les OPEX répartis, la marge nette et le profit moyen par commande sur les deux vitrines. |
| **COGS des lots et kits non cartographiés** | Les SKU regroupés affichent un coût de 0 $ dans les rapports Shopify de base, gonflant artificiellement les marges brutes et faussant les dépenses publicitaires (ROAS). | **Consolidation BOM automatisée des lots :** Calcule dynamiquement le vrai COGS des lots à partir des quantités et des coûts unitaires des SKU composants via la cartographie de la nomenclature (BOM). |
| **Chaos des dépenses multidevises** | Les abonnements SaaS, les frais 3PL et les factures publicitaires payés en USD, EUR et AED sont mélangés sans taux de change standardisés. | **Normalisation FX et répartition OPEX centralisées :** Convertit les dépenses en devises étrangères dans une devise de reporting unifiée et répartit les frais généraux partagés selon des pourcentages personnalisés (par ex. 60 %/40 %). |
| **Divergences des exports CSV Shopify** | Les exports CSV au niveau produit ne correspondent pas au résumé mensuel des ventes de Shopify Analytics en raison de lignes omises ou de coupures temporelles. | **Rapprochement ventes-plateforme :** Recoupe les totaux de ventes importés au niveau SKU avec les chiffres officiels du résumé mensuel Shopify, déclenchant des alertes d'écart au-delà de votre seuil de tolérance. |
| **Fuite cachée des frais bancaires et Wise** | Les frais SaaS récurrents, les dépenses publicitaires ou les frais de transfert Wise apparaissent sur les relevés bancaires mais sont oubliés dans le suivi manuel des dépenses. | **Rapprochement des relevés bancaires et Wise :** Rapproche les charges d'exploitation déclarées des journaux de transactions CSV réels de la banque et de Wise, signalant les retraits non rapprochés, les écarts de montant et les identifiants en double. |
| **Érosion de marge inaperçue** | La dérive des coûts d'expédition, de traitement ou de marketing d'un mois à l'autre (MoM) passe inaperçue jusqu'à ce que la trésorerie se tarisse. | **Alertes d'écart MoM et de marge :** Calcule automatiquement les variations de profit d'un mois à l'autre, la compression des marges et les pics de dépenses avec des seuils d'alerte configurables. |

---

## Problèmes courants de comptabilité Shopify et de rapprochement multi-boutiques résolus

| Problème de comptabilité e-commerce | Tableur manuel / rapports Shopify standard (sans cet outil) | Moteur P&L automatisé double boutique (avec cet outil) |
| :--- | :--- | :--- |
| **Les totaux de ventes Shopify ne correspondent pas aux exports CSV** | Les exports CSV au niveau produit suppriment silencieusement les commandes annulées, les remboursements partiels ou les enregistrements décalés par fuseau horaire sans avertir l'analyste. | **Rapprochement des ventes descendant automatisé :** Compare les totaux bruts/nets mensuels officiels de Shopify directement aux imports CSV agrégés au niveau SKU et signale les écarts dépassant votre tolérance. |
| **COGS incomplets des lots et multipacks** | Les lots promotionnels et les multipacks affichent des coûts de 0 $ ou estimés manuellement, surévaluant la marge brute produit de 30 % à 50 %. | **Calcul dynamique des coûts des composants BOM :** Multiplie automatiquement les coûts unitaires des SKU composants par les quantités du lot, isolant les SKU non cartographiés dans un panneau de validation central avant le reporting. |
| **Les OPEX multidevises faussent les comparaisons entre boutiques** | Les factures en USD, EUR et AED sont additionnées brutes ou converties avec des taux de change quotidiens incohérents dans des onglets séparés. | **Contrôle standardisé des paramètres FX :** Applique des taux de change de reporting mensuels verrouillés à toutes les déclarations de dépenses et aux journaux de rapprochement bancaire pour une comparaison transfrontalière cohérente. |
| **Les frais généraux partagés pénalisent une seule vitrine** | Une boutique Shopify principale absorbe 100 % des factures partagées Klaviyo, d'agence ou de logiciels, rendant la boutique secondaire artificiellement rentable. | **Répartition configurable des dépenses partagées :** Répartit proprement les charges d'exploitation partagées entre les boutiques à l'aide de ratios d'allocation personnalisables (par ex. 60 % Internationale / 40 % Europe). |
| **Les frais bancaires et Wise non comptabilisés grèvent la trésorerie** | Le registre manuel des dépenses oublie les outils SaaS à renouvellement automatique, les frais de transaction étrangère ou les frais publicitaires imputés à Wise et aux cartes d'entreprise. | **Audit bancaire et Wise au niveau transaction :** Fait correspondre les lignes des relevés bancaires/Wise aux identifiants de dépenses pour révéler les dépenses non comptabilisées, les doublons et les écarts de règlement FX. |
| **La clôture de fin de mois prend des jours de réparation de formules** | Les responsables financiers reconstruisent des chaînes `VLOOKUP`, corrigent des erreurs `#REF!` cassées et réécrivent les commentaires de direction de zéro chaque mois. | **Flux de travail reproductible à matrices dynamiques :** Verrouille les modèles `XLOOKUP`, `SUMIFS` et `FILTER` pour que vous colliez simplement les nouveaux CSV mensuels, effaciez les exceptions signalées et génériez instantanément des synthèses de gestion. |

---

## Tutoriel étape par étape : comment exécuter votre rapprochement mensuel P&L Shopify et bancaire

Ce système est conçu comme un **flux de travail de clôture mensuelle reproductible** plutôt qu'un calculateur jetable. Suivez ce tutoriel en 4 étapes pour auditer vos chiffres — en commençant par un test navigateur à risque zéro, puis en passant au modèle Excel permanent pour la comptabilité mensuelle continue.

### Étape 1 : Testez la logique et configurez les paramètres de reporting (`01_Control_Settings`)
**Action :** [Lancez le calculateur navigateur interactif gratuit](https://hyvoid.github.io/shopify-pnl-reconciliation-excel/ pour explorer les données d'exemple préchargées, ou ouvrez l'onglet `01_Control_Settings` dans votre classeur.  
Définissez votre **mois de reporting**, votre **mois de référence de comparaison**, vos **devises de reporting de base (USD/EUR)**, vos **taux de conversion FX mensuels**, votre **répartition des OPEX partagés** (exemple par défaut : `60% / 40%`), votre **seuil de tolérance de rapprochement** (par défaut : `5.00`) et vos **déclencheurs d'alerte de marge nette**.

### Étape 2 : Importez les CSV de ventes Shopify, les coûts rendus des SKU et les relevés bancaires
**Action :** Remplissez les quatre feuilles de saisie de données standardisées à l'aide de vos exports e-commerce bruts :
1. **`02_Shopify_Sales_Import` :** Collez vos exports CSV mensuels de ventes Shopify au niveau produit pour les deux boutiques.
2. **`03_Product_Cost_Master` :** Saisissez les coûts unitaires rendus de chaque SKU et définissez les correspondances de composants de votre **nomenclature des lots (BOM)**.
3. **`04_Expense_FX_Input` :** Consignez les charges d'exploitation mensuelles (marketing, SaaS, 3PL, paie) dans leurs devises de facturation d'origine (`USD`, `EUR`, `AED`) et étiquetez-les comme propres à une boutique ou partagées.
4. **`05_Bank_Wise_Recon` :** Importez vos CSV de relevés bancaires d'entreprise mensuels et **multidevises Wise** en utilisant les identifiants de référence de transaction conservés.

### Étape 3 : Auditez les écarts et examinez les marges P&L double boutique
**Action :** Vérifiez d'abord le **Panneau d'état de validation global** dans `01_Control_Settings`. Résolvez toutes les exceptions signalées — telles que les nouveaux SKU non cartographiés, les coûts de composants de lot manquants, les catégories OPEX invalides ou les retraits bancaires Wise non rapprochés — avant de faire confiance au résultat net.  
Une fois les contrôles de validation réussis, inspectez **`06_PL_Calculation`** pour les comptes de résultat côte à côte des boutiques et **`07_Monthly_Review`** pour les commentaires de direction sur les écarts et les éléments de rapprochement ouverts.

### Étape 4 : Téléchargez le modèle Excel réutilisable pour l'archivage mensuel permanent
**Action :** Une fois que vous avez validé la façon dont le moteur détecte les fuites de profit cachées dans l'aperçu navigateur, passez au tableur hors ligne pour vos véritables documents d'entreprise.  
👉 **[Téléchargez le classeur Excel P&L complet pour deux boutiques Shopify (.xlsx)](https://theseusworkshop.com/l/wtrch?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=shopify-pnl-reconciliation-excel)** pour enregistrer des instantanés mensuels locaux, personnaliser définitivement votre catalogue de SKU, conserver les données financières sensibles 100 % hors ligne et reporter vos chiffres de référence chaque fin de mois en moins de 15 minutes.

---

## La logique métier et la méthodologie : corriger les angles morts du profit e-commerce (pour les non-comptables)

Vous n'avez pas besoin d'un diplôme de comptabilité pour gérer une marque Shopify rentable — mais vous fier uniquement à votre **tableau de bord Shopify Analytics** ou à votre **solde bancaire** crée de dangereux angles morts commerciaux. 

De nombreux fondateurs et opérateurs de boutiques augmentent leurs dépenses publicitaires ou se développent sur de nouveaux marchés en croyant être rentables, pour découvrir des mois plus tard que l'argent disparaît. Ce moteur a été conçu pour traduire des règles comptables complexes en logique métier simple et exploitable qui vous protège de **quatre illusions courantes du profit e-commerce** :

### 1. L'illusion de la « fausse marge élevée » (pourquoi les lots détruisent silencieusement le ROAS)
* **L'angle mort :** Lorsque vous créez un lot promotionnel ou un multipack dans Shopify (par ex. un lot de 3 vendu $60), Shopify enregistre la vente de $60, mais ignore souvent que le lot a en réalité prélevé trois articles distincts de votre entrepôt coûtant $18 + $12 = $30 au total. Si le coût de ce lot est laissé vide ou enregistré à $0 dans votre tableur, votre rapport prétend que vous avez réalisé **$60 de marge brute pure (marge de 100 %)** au lieu des **$30 réels (marge de 50 %)**.
* **La conséquence commerciale :** Pensant avoir $60 de marge par commande, vous demandez à votre acheteur média de dépenser jusqu'à $40 par acquisition (CPA) sur Meta ou Google Ads. En réalité, chaque vente vous fait perdre $10 en trésorerie.
* **Comment notre logique corrige cela :** Le moteur utilise une **consolidation de nomenclature (BOM)**. Vous ne saisissez le coût de vos articles simples qu'une seule fois. Chaque fois qu'un lot est vendu, le classeur additionne automatiquement le coût exact des pièces individuelles qu'il contient — et déclenche un avertissement sonore si un lot n'a pas sa liste d'ingrédients.

### 2. L'illusion de la « boutique vedette contre boutique perdante » (dépenses partagées et distorsion de devises)
* **L'angle mort :** Supposons que vous gériez une boutique américaine (en USD) et une boutique européenne (en EUR). Vous payez $2,000/mois pour Klaviyo, les applications Shopify et une agence créative avec votre carte de crédit américaine, alors même que les deux boutiques utilisent ces outils.
* **La conséquence commerciale :** Comme la boutique américaine paie la totalité de la facture, son profit semble faible, tandis que la boutique européenne apparaît comme une gagnante à forte marge car elle bénéficie d'un « tour gratuit » sur les frais généraux logiciels et marketing. Pire, mélanger des revenus en EUR avec des dépenses en USD sans taux de change verrouillé fait osciller fortement vos marges selon la façon dont vous copiez-collez les chiffres.
* **Comment notre logique corrige cela :** Vous étiquetez simplement une dépense comme « Partagée » et définissez une règle de répartition équitable une seule fois (par exemple, 60 % US / 40 % Europe). Le moteur convertit automatiquement les devises à un taux standardisé et divise équitablement la facture, vous montrant quelle boutique génère réellement de la trésorerie par ses propres mérites.

### 3. L'illusion de la « fuite de trésorerie invisible » (pourquoi votre liste de dépenses n'est jamais complète)
* **L'angle mort :** La plupart des petites entreprises suivent leurs dépenses en saisissant des factures dans un tableur. Mais qu'en est-il de l'outil SaaS annuel renouvelé automatiquement sur Wise, du seuil de facturation publicitaire Meta supplémentaire ou des frais cachés de virement international ? Si vous oubliez de les saisir dans votre onglet de dépenses, votre rapport P&L semble toujours « propre » et sans erreur — il surévalue simplement votre bénéfice net.
* **La conséquence commerciale :** Vous prenez des décisions d'embauche ou d'achat de stock sur la base de profits fantômes qui ont déjà quitté votre compte bancaire.
* **Comment notre logique corrige cela :** Au lieu de faire confiance à la mémoire humaine, le classeur impose une **poignée de main à double sens** entre votre liste de dépenses et votre **relevé CSV Bank / Wise réel**. Si de l'argent a quitté votre compte bancaire mais n'est pas dans votre liste de dépenses, le moteur met en évidence la transaction exacte comme « Élément non rapproché » afin que rien ne passe à travers les mailles du filet.

### 4. Synthèse du cadre de décision commerciale en 5 étapes

| Question métier fondamentale | Méthodologie en langage clair | Décision commerciale protégée |
| :--- | :--- | :--- |
| **1. Puis-je faire confiance à mes chiffres de ventes ?** | Recoupez les exports CSV Shopify bruts avec les synthèses mensuelles officielles de la plateforme. | Empêche de prendre des décisions de stock ou de budget sur des exports de ventes incomplets ou tronqués. |
| **2. Est-ce que je gagne réellement de l'argent sur chaque SKU et lot ?** | Reliez chaque article et lot vendu à son véritable coût unitaire de composant. | Vous empêche de faire évoluer des campagnes publicitaires non rentables sur des produits dont le COGS est sous-évalué. |
| **3. Quelle boutique mérite plus de capital ?** | Convertissez toutes les devises vers une référence unique et répartissez équitablement les frais généraux partagés. | Garantit que vous investissez le capital de croissance dans la région réellement rentable, pas dans celle subventionnée. |
| **4. Où est réellement passée ma trésorerie ?** | Faites correspondre chaque dépense enregistrée aux retraits bancaires et Wise réels. | Révèle les abonnements logiciels oubliés, les erreurs de facturation et les coûts d'exploitation non comptabilisés. |
| **5. Qu'est-ce qui a changé depuis le mois dernier ?** | Comparez les marges et catégories de dépenses actuelles à la référence verrouillée du mois dernier. | Détecte tôt la dérive des coûts de traitement ou la compression des marges avant qu'elles ne nuisent à la trésorerie. |

*Note importante sur le périmètre : Ce moteur est un outil d'aide à la décision de gestion et de rapprochement financier. Il permet aux opérateurs de voir la véritable économie unitaire avant de faire des paris commerciaux, mais il ne remplace pas les déclarations fiscales légales, les audits d'inventaire formels GAAP/IFRS ni les attestations d'expert-comptable (CPA).*

---

## À qui cela s'adresse : rôles cibles et cas d'usage e-commerce

Ce **modèle P&L Shopify et outil de rapprochement** est adapté à des opérateurs e-commerce et des professionnels de la finance spécifiques qui ont besoin d'une visibilité de niveau entreprise sans la lourdeur des logiciels d'entreprise :

- **Propriétaires de marques multi-boutiques Shopify et Shopify Plus :** Gérant des vitrines régionales distinctes (par ex. Amérique du Nord en USD, Royaume-Uni/UE en EUR, MENA en AED) qui ont besoin d'une vue consolidée du véritable bénéfice net et de la répartition des frais généraux partagés.
- **CFO externalisés et responsables financiers e-commerce :** Chargés de construire un **package de reporting de gestion mensuel** standardisé, prêt pour l'audit, et une analyse des écarts pour les fondateurs DTC ou les investisseurs du conseil, sans passer 20 heures à nettoyer des fichiers CSV.
- **Comptables et experts-comptables e-commerce transfrontaliers :** Qui ont besoin d'une **feuille de rapprochement Shopify-vers-banque/Wise** structurée pour détecter les factures manquantes, les versements en double et les écarts FX multidevises avant de clôturer le grand livre dans Xero ou QuickBooks.
- **Responsables des opérations et du merchandising DTC :** Qui lancent fréquemment des kits promotionnels, des multipacks et des lots saisonniers et ont besoin d'un **calculateur précis de COGS SKU et lots** pour protéger les marges brutes avant d'approuver les objectifs de dépenses publicitaires.
- **Fondateurs solo autofinancés et analystes (zéro macro / no-code) :** Qui veulent un **modèle financier à matrices dynamiques Excel 365** immédiat et transparent (zéro macro VBA, zéro popup de sécurité) ou un outil navigateur sans configuration pour auditer l'économie unitaire de leur boutique dès aujourd'hui.

---

## Pourquoi j'ai construit ce moteur financier e-commerce

Deux boutiques Shopify peuvent sembler très rentables prises isolément alors que les écritures comptables sous-jacentes racontent une tout autre histoire. Les exports CSV au niveau produit échouent fréquemment à se rapprocher de la vue d'ensemble Shopify Analytics. Un lot à fort volume peut contenir trois produits physiques mais porter un COGS de composant nul dans le système. Les abonnements SaaS partagés peuvent être imputés à une seule carte d'entreprise alors que deux vitrines régionales en dépendent. Pendant ce temps, les relevés Wise et bancaires révèlent régulièrement des frais d'exploitation qui n'ont jamais atteint le suivi manuel des dépenses.

Ce ne sont pas de simples désagréments de mise en forme de tableur — ils faussent directement votre **marge nette déclarée** et provoquent des erreurs coûteuses dans les **budgets d'acquisition payants (CAC/ROAS)**, la **stratégie de prix des SKU**, l'**expansion internationale des boutiques** et la **gestion de la trésorerie d'exploitation**.

J'ai conçu ce classeur comme un **raisonnement financier industrialisé** : un pipeline reproductible, piloté par formules, couvrant la cartographie des coûts des SKU, la normalisation FX multidevises, la répartition des OPEX partagés, le rapprochement des relevés bancaires et l'analyse des écarts d'un mois à l'autre. Au lieu de reconstruire des formules fragiles à chaque fin de mois, vous suivez une séquence opérationnelle verrouillée et concentrez 100 % de votre énergie sur l'investigation des exceptions mises en évidence par le moteur.

---

## Détails techniques et architecture du classeur Excel

<details>
<summary><strong>Cliquez pour développer : pour les relecteurs techniques, les modélisateurs financiers, les praticiens Excel et les collaborateurs</strong></summary>

### Architecture du classeur (conception modulaire en 7 feuilles)

Le classeur Excel contient sept feuilles de calcul principales organisées en quatre couches opérationnelles strictes (Contrôle, Saisie, Rapprochement/Calcul et Sortie de direction) :

| Couche opérationnelle | Nom de l'onglet de feuille | Responsabilité comptable et de données principale |
| :--- | :--- | :--- |
| **1. Contrôle et validation** | `01_Control_Settings` | Périodes de reporting, devises de base, taux de change FX, ratios de répartition des OPEX partagés, tolérances d'écart et tableau de bord de l'état de validation global. |
| **2. Saisie des données de ventes** | `02_Shopify_Sales_Import` | Saisies du résumé mensuel officiel Shopify, imports CSV bruts au niveau SKU, normalisation des SKU et rapprochement des ventes plateforme. |
| **3. Référentiel des coûts produits** | `03_Product_Cost_Master` | Coûts unitaires rendus des SKU individuels, nomenclatures des lots (BOM), consolidations dynamiques de COGS des lots et validation des coûts manquants. |
| **4. OPEX multidevises** | `04_Expense_FX_Input` | Catégorisation des charges d'exploitation, conversion FX multidevises (`USD`/`EUR`/`AED`), règles de coûts propres à une boutique vs partagés et validation des saisies. |
| **5. Audit bancaire et Wise** | `05_Bank_Wise_Recon` | Imports de relevés CSV bancaires d'entreprise et Wise, rapprochement automatisé des identifiants de dépenses, signalement des écarts et journaux de disposition d'audit manuel. |
| **6. Moteur P&L** | `06_PL_Calculation` | Comptes de résultat automatisés double boutique, métriques de marge brute/nette, calculs d'écart d'un mois à l'autre (MoM) et alertes de marge. |
| **7. Sortie de direction** | `07_Monthly_Review` | Synthèses de gestion prêtes pour le conseil, tableaux de bord KPI essentiels et listes filtrées dynamiquement des exceptions de rapprochement non résolues. |

#### Architecture du flux de données

```text
01_Control_Settings
    │
    ├── Reporting periods, currencies, FX rates, thresholds
    │
    ▼
02_Shopify_Sales_Import ───────┐
    │                          │
03_Product_Cost_Master         │
    │                          ▼
    └──────────────────► 06_PL_Calculation
                               ▲
04_Expense_FX_Input ───────────┤
    │                          │
    ▼                          ▼
05_Bank_Wise_Recon ──────► 07_Monthly_Review
    │                          ▲
    └── Reconciliation status ─┘

Validation results feed into the global status panel in 01_Control_Settings.
```

#### Modèle de calcul piloté par formules (sans VBA / matrices dynamiques)

Le classeur repose exclusivement sur des **formules à matrices dynamiques Microsoft Excel 365 / Excel 2021+** modernes pour éliminer le glisser-déposer manuel des lignes et les risques de sécurité des macros :

- `XLOOKUP` et `XMATCH` pour les recherches de coûts de SKU à grande vitesse, l'appariement des taux de change, la cartographie des catégories de dépenses et la correspondance des identifiants de transactions bancaires.
- `SUMIFS` et `COUNTIFS` pour l'agrégation des revenus par période, les consolidations de coûts BOM de lots multi-composants et la détection des identifiants de transaction en double.
- `FILTER` pour générer dynamiquement des listes en temps réel des transactions bancaires/Wise non rapprochées dans l'onglet de revue de direction.
- `IF` et `ABS` pour les contrôles de tolérance automatisés et la classification des exceptions.
- L'opérateur de débordement dynamique `#` pour référencer proprement les matrices de calcul extensibles.

*Note de compatibilité système : Nécessite Microsoft 365 ou Excel 2021 (et versions ultérieures) en versions de bureau/web prenant en charge les matrices dynamiques. Les anciennes versions d'Excel (2016/2019) sans prise en charge du débordement dynamique ne sont pas compatibles.*

### Trois pièges comptables qui attrapent les opérateurs e-commerce expérimentés

#### Piège 1 : Le chiffre d'affaires semble exact, mais la marge brute produit est surévaluée
- **Décision commerciale :** Augmenter agressivement les dépenses publicitaires Meta/TikTok parce qu'un lot promotionnel affiche une marge brute de 80 % ou plus.
- **Défaillance cachée :** L'export de ventes Shopify capture le chiffre d'affaires du lot, mais le référentiel des coûts produits ne contient pas de nomenclature (BOM) cartographiée ni de coûts unitaires de composants valides.

| Métrique d'économie unitaire | Cartographie BOM des coûts incomplète | Calcul précis des coûts des composants |
| :--- | :--- | :--- |
| **Chiffre d'affaires de détail du lot** | $60.00 | $60.00 |
| **COGS rendu enregistré** | $0.00 (non cartographié) | $30.00 (composants $18 + $12) |
| **Marge brute déclarée** | $60.00 | $30.00 |
| **Marge brute déclarée (en %)** | **100.0%** (illusion) | **50.0%** (réalité) |

- **Garde-fou du moteur :** Cartographie chaque SKU de lot vers ses SKU enfants et quantités sous-jacents, signalant tout composant non cartographié dans `01_Control_Settings` avant la revue P&L.

#### Piège 2 : La boutique dont le bénéfice net déclaré est plus élevé est subventionnée
- **Décision commerciale :** Déplacer le capital d'inventaire et de marketing vers la boutique européenne parce que sa marge nette déclarée dépasse celle de la boutique internationale.
- **Défaillance cachée :** Les charges d'exploitation partagées (par ex. une suite logicielle de $1,000) sont entièrement imputées à la boutique internationale, ou converties avec des taux de change incohérents.
- **Garde-fou du moteur :** Standardise les OPEX partagés via des clés de répartition configurables (par ex. 60 % Internationale / 40 % Européenne) et convertit les coûts répartis à l'aide de taux de change de reporting verrouillés.

#### Piège 3 : Un registre de dépenses « propre » masque des retraits bancaires non comptabilisés
- **Décision commerciale :** Approuver la répartition mensuelle du P&L parce que chaque ligne saisie dans l'onglet des dépenses a une catégorie et un reçu valides.
- **Défaillance cachée :** La validation du registre interne ne peut pas détecter les dépenses qui n'ont jamais été saisies au départ (par ex. les outils SaaS facturés automatiquement ou les frais FX Wise).
- **Garde-fou du moteur :** Impose un recoupement au niveau transaction avec les exports CSV bruts de la banque et de Wise, isolant les sorties non rapprochées pour disposition humaine (par ex. dépense manquante vs transfert de solde interne).

### Scénario d'étude de cas multi-boutiques illustratif

Considérez un opérateur e-commerce gérant une boutique Shopify internationale (reporting en `USD`) et une boutique Shopify européenne (reporting en `EUR`) :

| Paramètre du modèle / hypothèse métier | Valeur d'étude de cas configurée |
| :--- | :--- |
| **Commandes mensuelles de la boutique internationale** | 1,400 commandes |
| **Commandes mensuelles de la boutique européenne** | 800 commandes |
| **Devise de base de la boutique internationale** | `USD` |
| **Devise de base de la boutique européenne** | `EUR` |
| **Taux de change de reporting USD vers EUR** | `0.9091` |
| **Ratio de répartition des OPEX partagés (Intl / UE)** | `60%` / `40%` |
| **Tolérance d'écart de rapprochement** | `5.00` (dans la devise de reporting de base) |
| **Référence de marge nette cible** | `15.0%` |

### Référence des formules et règles d'audit

#### 1. Calcul dynamique du coût BOM des lots

**Objectif métier :** Consolider dynamiquement le coût rendu exact d'un lot à partir de ses SKU composants enfants.

```excel
=IF(A18:A200="",0,
   IF(C18:C200="组合Bundle",
      SUMIFS(F4#,A4:A50,A18:A200),
      0))
```

*Dépendances clés : Classification précise des lots dans `03_Product_Cost_Master`, correspondances de SKU enfants valides, quantités de composants renseignées et coûts unitaires vérifiés.*

#### 2. Cadre automatisé de contrôle et de validation

| Domaine de validation | Contrôle automatisé effectué | Risque financier atténué |
| :--- | :--- | :--- |
| **Verrouillage de période de reporting** | Vérifie le mois sélectionné par rapport aux dates de transaction des CSV importés. | Empêche la contamination des coupures interpériodes dans les P&L mensuels. |
| **Intégrité des ventes Shopify** | Compare le chiffre d'affaires CSV agrégé des SKU aux totaux manuels du résumé Shopify. | Détecte les exports CSV tronqués ou l'attribution de boutique manquante. |
| **Calcul des coûts SKU et lots** | Vérifie que tous les SKU actifs et les composants BOM des lots ont des coûts unitaires non nuls. | Élimine la marge brute surévaluée causée par des COGS non cartographiés. |
| **FX multidevises** | Valide les codes ISO de devises (`USD`, `EUR`, `AED`) et les taux de conversion positifs. | Empêche les calculs de devises cassés entre boutiques internationales. |
| **Répartitions OPEX partagées** | Confirme que les pourcentages d'allocation des boutiques totalisent 100 % le cas échéant. | Empêche la double comptabilisation ou l'omission des frais généraux partagés. |
| **Rapprochement bancaire et Wise** | Signale les lignes de relevé non rapprochées, les identifiants en double et les écarts au-dessus de la tolérance. | Garantit la capture complète des sorties de trésorerie et des frais réels. |

### Garde-fous opérationnels et bonnes pratiques

- **Préservez les exports CSV bruts :** Archivez les fichiers CSV mensuels Shopify, Wise et bancaires intacts à côté de chaque copie datée du classeur Excel pour la traçabilité de l'audit.
- **Séparation stricte des saisies et des formules :** Ne codez jamais en dur des nombres sur les plages de débordement des matrices dynamiques (`#`) ; consignez tous les ajustements via les colonnes de saisie désignées.
- **Documentez les dispositions d'audit :** Lorsqu'une transaction bancaire non rapprochée est confirmée comme un transfert interne ou une charge à payer de période antérieure, enregistrez la raison exacte dans `05_Bank_Wise_Recon`.

</details>

---

## À propos du créateur et de Theseus Workshop

Je construis des **outils d'aide à la décision métier et des modèles financiers** légers et hautement traçables pour les opérateurs qui dépassent les tableurs de base mais n'ont pas besoin de systèmes ERP d'entreprise lourds. Chaque outil est conçu autour d'une question centrale : *Quelles données déconnectées doivent être réunies dès maintenant pour prendre la prochaine décision commerciale en toute confiance ?*

### Explorez d'autres outils de décision e-commerce et financiers
Découvrez d'autres **modèles financiers Excel, calculateurs d'économie unitaire et outils d'analyse opérationnelle** open source développés par [Theseus Workshop — Outils de décision métier et de modélisation financière open source sur GitHub](https://github.com/HyVoid).

---

## Licence

Ce projet est publié sous la **licence Apache 2.0**. Consultez le fichier [LICENSE — Conditions de licence open source Apache 2.0](./LICENSE) pour l'intégralité des autorisations et des conditions de redistribution.
