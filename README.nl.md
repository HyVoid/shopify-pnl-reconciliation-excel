[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Shopify Dual-Store P&L-analyse en financiële reconciliatie-engine (gratis Excel-sjabloon en webcalculator)
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/838d93dd-8e60-48e3-ba3b-24747fcb717f" />


[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](./LICENSE)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2251FF)
![Tool Type: E-Commerce Financial Decision Support](https://img.shields.io/badge/Tool-Financial%20Decision%20Support-051C2C)

**De Shopify Dual-Store P&L-analyse- en reconciliatie-engine is een gratis e-commerce winst-en-verlies (P&L) Excel-sjabloon en een browsergebaseerde financiële calculator, ontworpen voor Shopify-operators met meerdere winkels. Reconcilieer automatisch Shopify-verkoopexports, bereken COGS (cost of goods sold) op SKU-niveau en voor bundles, alloceer multi-valuta operationele kosten (OPEX) en match Wise- of bankafschrifttransacties in één herhaalbare maandelijkse boekhoudworkflow — zonder dure ERP-software te kopen.**

> **Start uw maandelijkse e-commerce winstaudit in seconden.** Geen registratie. Geen software-installatie. 100% gratis te gebruiken.
>
> - [🌐 Start de gratis interactieve Shopify P&L-webcalculator in uw browser (directe sandbox-preview)](https://hyvoid.github.io/shopify-pnl-reconciliation-excel/
> - [📥 Download het herhaalbare Multi-Store Shopify P&L- en bankreconciliatie Excel-werkboek (.xlsx)](https://theseusworkshop.com/l/wtrch?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=shopify-pnl-reconciliation-excel)

Zowel de interactieve webcalculator als het downloadbare Microsoft Excel-werkboek lossen dezelfde kernuitdaging op in e-commerceboekhouding: het omzetten van gefragmenteerde **Shopify CSV-verkoopexports**, **SKU unit economics**, **multi-valuta FX-kosten (USD, EUR, AED)** en **Wise/bankuitbetalingsrecords** in een auditklare, traceerbare **maandelijkse management-P&L-staat**. Terwijl de browserversie een instant zero-setup-sandbox biedt, is de Excel-sjabloon ontworpen voor permanente offline financiële archivering, geautomatiseerde maandafsluitingsberekeningen en granulaire reconciliatie op transactieniveau.

---

## Wat deze Shopify P&L- en kostprijsboekhoudingssjabloon bijhoudt (mapping van pijnpunten naar oplossingen)

| E-commerce financieel pijnpunt | Hoogfrequent boekhoudkundig blinde vlek | Geautomatiseerde tracking en oplossing in deze engine |
| :--- | :--- | :--- |
| **Multi-Store winstgevendheidsvertekening** | Moeilijk om een internationale (USD) winkel op gelijke basis te vergelijken met een Europese (EUR) winkel. | **Unit economics op winkel-niveau:** Houdt bruto-omzet, landed COGS, brutowinst, gealloceerde OPEX, nettowinstmarge en gemiddelde winst per bestelling bij over twee storefronts. |
| **Niet-gemapte Bundle- en Kit-COGS** | Gebundelde SKU's tonen $0 kosten in standaard Shopify-rapporten, waardoor brutomarges kunstmatig worden opgeblazen en advertentie-uitgaven (ROAS) worden misleid. | **Geautomatiseerde Bundle-BOM-rollup:** Berekent de werkelijke Bundle-COGS dynamisch uit individuele component-SKU-hoeveelheden en eenheidskosten via Bill of Materials (BOM)-mapping. |
| **Multi-valuta kostenchaos** | SaaS-abonnementen, 3PL-kosten en advertentiefacturen betaald in USD, EUR en AED worden gemengd zonder gestandaardiseerde FX-koersen. | **Gecentraliseerde FX-normalisatie en OPEX-allocatie:** Converteert kosten in vreemde valuta naar een uniforme rapportagevaluta en verdeelt gedeelde overhead volgens aanpasbare percentages (bijv. 60%/40%). |
| **Shopify CSV-exportafwijkingen** | CSV-exports op productniveau komen niet overeen met de maandelijkse verkoopsamenvatting van Shopify Analytics door weggelaten rijen of afslagtijdstippen. | **Verkoop-naar-platformreconciliatie:** Kruist geïmporteerde verkooptotalen op SKU-niveau met officiële maandelijkse Shopify-samenvattingscijfers en triggert afwijkingswaarschuwingen boven uw tolerantiedrempel. |
| **Verborgen bank- en Wise-kostenlekkage** | Terugkerende SaaS-kosten, advertentie-uitgaven of Wise-transactiekosten verschijnen op bankafschriften maar worden vergeten in de handmatige kostentracker. | **Bank- en Wise-afschriftmatching:** Reconcilieert gedeclareerde operationele kosten met werkelijke bank- en Wise CSV-transactielogboeken, markeert niet-gematchte opnames, bedragafwijkingen en dubbele ID's. |
| **Onopgemerkte margedaling** | Maand-op-maand (MoM) kostenstijgingen in verzending, fulfilment of marketing blijven onopgemerkt tot de cashflow opdroogt. | **MoM-variantie- en margewaarschuwingen:** Berekent automatisch maand-op-maand winstverschuivingen, margecompressie en kostenpieken met configureerbare rode-vlagdrempels. |

---

## Opgeloste veelvoorkomende Shopify-boekhoud- en multi-store reconciliatieproblemen

| E-commerce boekhoudprobleem | Handmatige spreadsheet / standaard Shopify-rapportage (zonder deze tool) | Geautomatiseerde Dual-Store P&L-engine (met deze tool) |
| :--- | :--- | :--- |
| **Shopify-verkooptotalen komen niet overeen met CSV-exports** | CSV-exports op productniveau laten stilzwijgend geannuleerde bestellingen, gedeeltelijke restituties of records met tijdzoneverschuivingen weg, zonder de analist te waarschuwen. | **Geautomatiseerde top-down verkoopreconciliatie:** Vergelijkt officiële maandelijkse Shopify bruto/nettototalen rechtstreeks met geaggregeerde SKU-niveau CSV-imports en markeert afwijkingen boven uw tolerantie. |
| **Bundle- en multipack-COGS zijn onvolledig** | Promotiebundles en multipacks hebben $0 of handmatig gegokte kosten, waardoor de productbrutomarge met 30%–50% wordt overschat. | **Dynamische BOM-componentkostprijsberekening:** Vermenigvuldigt component-SKU-eenheidskosten automatisch met bundle-hoeveelheden en isoleert niet-gemapte SKU's in een centraal validatiepaneel vóór rapportage. |
| **Multi-valuta OPEX vertekent winkelvergelijkingen** | USD-, EUR- en AED-facturen worden ruw opgeteld of omgerekend met inconsistente dagelijkse wisselkoersen over aparte tabbladen. | **Gestandaardiseerde FX-parametercontrole:** Past vergrendelde maandelijkse rapportagewisselkoersen toe op alle kostendeclaraties en bankreconciliatielogboeken voor consistente grensoverschrijdende vergelijking. |
| **Gedeelde overhead straft één storefront** | Eén primaire Shopify-winkel absorbeert 100% van de gedeelde Klaviyo-, agency- of softwarefacturen, waardoor de secundaire winkel kunstmatig winstgevend lijkt. | **Configureerbare allocatie van gedeelde kosten:** Verdeelt gedeelde operationele kosten netjes over winkels met aanpasbare allocatieverhoudingen (bijv. 60% internationaal / 40% Europa). |
| **Niet-geregistreerde bank- en Wise-kosten vreten cashflow aan** | Het handmatige kostenregister mist automatisch verlengde SaaS-tools, kosten voor buitenlandse transacties of advertentiekosten die op Wise en zakelijke kaarten terechtkomen. | **Bank- en Wise-audit op transactieniveau:** Matcht bank/Wise-afschriftregels met kosten-ID's om niet-geregistreerde kosten, dubbele boekingen en FX-afwikkelingsverschillen bloot te leggen. |
| **Maandafsluiting kost dagen aan formuleherstel** | Financieel managers herbouwen `VLOOKUP`-ketens, repareren kapotte `#REF!`-fouten en herschrijven elke maand de managementcommentaar vanaf nul. | **Herhaalbare dynamische-array-workflow:** Vergrendelt `XLOOKUP`-, `SUMIFS`- en `FILTER`-modellen, zodat u eenvoudig nieuwe maandelijkse CSV's plakt, gemarkeerde uitzonderingen afhandelt en direct managementsamenvattingen genereert. |

---

## Stapsgewijze tutorial: uw maandelijkse Shopify P&L- en bankreconciliatie uitvoeren

Dit systeem is ontworpen als een **herhaalbare maandafsluitingsworkflow** in plaats van een wegwerpcalculator. Volg deze tutorial van 4 stappen om uw cijfers te auditen — begin met een risicoloze browsertest en stap over naar de permanente Excel-sjabloon voor doorlopende maandelijkse boekhouding.

### Stap 1: Test de logica en configureer rapportageparameters (`01_Control_Settings`)
**Actie:** [Start de gratis interactieve browsercalculator](https://hyvoid.github.io/shopify-pnl-reconciliation-excel/ om de vooraf geladen voorbeelddata te verkennen, of open het tabblad `01_Control_Settings` in uw werkboek.  
Definieer uw **rapportagemaand**, **vergelijkingsbasislijnmaand**, **basisrapportagevaluta's (USD/EUR)**, **maandelijkse FX-conversiekoersen**, **gedeelde OPEX-allocatieverdeling** (standaardvoorbeeld: `60% / 40%`), **reconciliatietolerantiedrempel** (standaard: `5.00`) en **waarschuwingstriggers voor de nettowinstmarge**.

### Stap 2: Importeer Shopify-verkoop-CSV's, SKU landed costs en bankafschriften
**Actie:** Vul de vier gestandaardiseerde data-invoerwerkbladen met uw ruwe e-commerce-exports:
1. **`02_Shopify_Sales_Import`:** Plak uw maandelijkse Shopify-verkoop-CSV-exports op productniveau voor beide winkels.
2. **`03_Product_Cost_Master`:** Voer individuele SKU landed eenheidskosten in en definieer uw **Bundle Bill of Materials (BOM)**-componentmappings.
3. **`04_Expense_FX_Input`:** Registreer maandelijkse operationele kosten (marketing, SaaS, 3PL, payroll) in hun oorspronkelijke facturatievaluta (`USD`, `EUR`, `AED`) en tag ze als winkelspecifiek of gedeeld.
4. **`05_Bank_Wise_Recon`:** Importeer uw maandelijkse zakelijke bank- en **Wise multi-valuta afschrift-CSV's** met behulp van behouden transactiereferentie-ID's.

### Stap 3: Audit afwijkingen en beoordeel Dual-Store P&L-marges
**Actie:** Controleer eerst het **Global Validation Status Panel** in `01_Control_Settings`. Los alle gemarkeerde uitzonderingen op — zoals niet-gemapte nieuwe SKU's, ontbrekende Bundle-componentkosten, ongeldige OPEX-categorieën of niet-gematchte Wise-bankopnames — voordat u de eindregel vertrouwt.  
Zodra de validatiecontroles slagen, bekijkt u **`06_PL_Calculation`** voor naast elkaar geplaatste P&L-staten per winkel en **`07_Monthly_Review`** voor managementvariantiecommentaar en openstaande reconciliatie-items.

### Stap 4: Download de herbruikbare Excel-sjabloon voor permanente maandelijkse archivering
**Actie:** Zodra u heeft gevalideerd hoe de engine verborgen winstlekken opspoort in de browserpreview, stapt u over naar de offline spreadsheet voor uw echte bedrijfsrecords.  
👉 **[Download het volledige Shopify Dual-Store P&L Excel-werkboek (.xlsx)](https://theseusworkshop.com/l/wtrch?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=shopify-pnl-reconciliation-excel)** om lokale maandelijkse snapshots op te slaan, uw SKU-catalogus permanent aan te passen, gevoelige financiële data 100% offline te houden en uw basislijncijfers elke maandafsluiting in minder dan 15 minuten door te schuiven.

---

## De bedrijfslogica en methodologie: e-commerce winstblinde vlekken oplossen (voor niet-boekhouders)

U hebt geen boekhouddiploma nodig om een winstgevend Shopify-merk te runnen — maar uitsluitend vertrouwen op uw **Shopify Analytics-dashboard** of uw **banksaldo** creëert gevaarlijke commerciële blinde vlekken. 

Veel oprichters en winkeloperators schalen advertentie-uitgaven op of betreden nieuwe markten in de overtuiging dat ze winstgevend zijn, om maanden later te ontdekken dat cash verdwijnt. Deze engine is gebouwd om complexe boekhoudregels te vertalen naar heldere, bruikbare bedrijfslogica die u beschermt tegen **vier veelvoorkomende e-commerce winstillusions**:

### 1. De "valse hoge marge"-illusie (waarom bundles stilletjes ROAS vernietigen)
* **De blinde vlek:** Wanneer u in Shopify een promotiebundle of multipack maakt (bijv. een 3-pack die voor $60 wordt verkocht), registreert Shopify de verkoop van $60, maar heeft het vaak geen idee dat de bundle in werkelijkheid drie afzonderlijke artikelen uit uw magazijn trok die $18 + $12 = $30 in totaal kosten. Als de kosten van die bundle leeg worden gelaten of als $0 in uw spreadsheet worden genoteerd, beweert uw rapport dat u **$60 aan pure brutowinst (100% marge)** hebt gemaakt in plaats van de werkelijke **$30 (50% marge)**.
* **Het commerciële gevolg:** In de veronderstelling dat u $60 marge per bestelling hebt, zegt u uw mediabuyer om tot $40 per acquisitie (CPA) uit te geven op Meta of Google Ads. In werkelijkheid verliest u $10 in cash bij elke afzonderlijke verkoop.
* **Hoe onze logica dit oplost:** De engine gebruikt een **Bill of Materials (BOM)-rollup**. U voert de kosten van uw losse artikelen slechts één keer in. Telkens wanneer een bundle verkoopt, telt het werkboek automatisch de exacte kosten van de afzonderlijke onderdelen erin op — en activeert het een luide waarschuwing als bij een bundle de ingrediëntenlijst ontbreekt.

### 2. De "sterwinkel versus verlieswinkel"-illusie (vertekening door gedeelde kosten en valuta)
* **De blinde vlek:** Stel dat u een Amerikaanse winkel (in USD) en een Europese winkel (in EUR) runt. U betaalt $2.000/maand voor Klaviyo, Shopify-apps en een creative agency vanaf uw Amerikaanse creditcard, ook al gebruiken beide winkels die tools.
* **Het commerciële gevolg:** Omdat de Amerikaanse winkel de hele factuur betaalt, oogt zijn winst zwak, terwijl de Europese winkel een winnaar met hoge marge lijkt omdat hij een "gratis ritje" krijgt op software- en marketingoverhead. Erger nog: het mengen van EUR-omzet met USD-kosten zonder vergrendelde wisselkoers laat uw marges wild schommelen op basis van hoe u cijfers kopieert en plakt.
* **Hoe onze logica dit oplost:** U tagt een kostenpost eenvoudigweg als "Gedeeld" en stelt één keer een eerlijke verdeelregel in (bijvoorbeeld 60% VS / 40% Europa). De engine converteert valuta automatisch tegen een gestandaardiseerde koers en verdeelt de factuur eerlijk, zodat u ziet welke winkel op eigen kracht werkelijk cash genereert.

### 3. De "onzichtbaar cashlek"-illusie (waarom uw kostenlijst nooit compleet is)
* **De blinde vlek:** De meeste kleine bedrijven volgen kosten door facturen in een spreadsheet te typen. Maar wat met de jaarlijkse SaaS-tool die automatisch via Wise werd verlengd, de extra Meta-advertentiedrempelkosten of de verborgen internationale transactiekosten? Als u vergeet die in uw kostentabblad te typen, oogt uw P&L-rapport nog steeds "schoon" en foutloos — het overschat alleen uw nettowinst.
* **Het commerciële gevolg:** U neemt aanwervings- of voorraadaankoopbeslissingen op basis van spookwinsten die uw bankrekening al hebben verlaten.
* **Hoe onze logica dit oplost:** In plaats van te vertrouwen op het menselijk geheugen, dwingt het werkboek een **tweerichtings-handshake** af tussen uw kostenlijst en uw daadwerkelijke **Bank / Wise-afschrift-CSV**. Als geld uw bankrekening heeft verlaten maar niet op uw kostenlijst staat, markeert de engine de exacte transactie als een "Unmatched Item", zodat niets door de mazen glipt.

### 4. Samenvatting van het 5-stappen commercieel beslissingskader

| Kernvraag voor uw bedrijf | Methodologie in gewone taal | Beschermde commerciële beslissing |
| :--- | :--- | :--- |
| **1. Kan ik mijn verkoopcijfers vertrouwen?** | Kruiscontroleer ruwe Shopify CSV-exports met officiële maandelijkse platformsamenvattingen. | Voorkomt voorraad- of budgetbeslissingen op onvolledige of afgekapte verkoopexports. |
| **2. Verdien ik werkelijk geld op elke SKU en bundle?** | Koppel elk verkocht artikel en elke bundle terug aan de werkelijke component-eenheidskost. | Stopt u met het opschalen van onrendabele advertentiecampagnes op producten met onderschatte COGS. |
| **3. Welke winkel verdient meer kapitaal?** | Converteer alle valuta naar één basislijn en verdeel gedeelde overhead eerlijk. | Zorgt dat u groeikapitaal investeert in de werkelijk winstgevende regio, niet de gesubsidieerde. |
| **4. Waar is mijn werkelijke cash naartoe gegaan?** | Match elke geregistreerde kostenpost met echte bank- en Wise-opnames. | Legt vergeten software-abonnementen, facturatiefouten en niet-geregistreerde operationele kosten bloot. |
| **5. Wat is er veranderd sinds vorige maand?** | Vergelijk huidige marges en kostencategorieën met de vergrendelde basislijn van vorige maand. | Vangt fulfilmentkostenstijging of margecompressie vroeg op, vóór het de cashflow schaadt. |

*Belangrijke scope-opmerking: deze engine is een tool voor managementbeslissingsondersteuning en financiële reconciliatie. Het stelt operators in staat om werkelijke unit economics te zien voordat ze commerciële weddenschappen aangaan, maar het vervangt geen wettelijke belastingaangifte, formele GAAP/IFRS-voorraadaudits of ondertekeningen door erkende accountants (CPA).*

---

## Voor wie dit is: doelrollen en use cases in e-commerce

Deze **Shopify P&L-sjabloon en reconciliatietool** is afgestemd op specifieke e-commerce-operators en financiële professionals die zichtbaarheid op ondernemingsniveau nodig hebben zonder de ballast van ondernemingssoftware:

- **Multi-Store Shopify- en Shopify Plus-merkeigenaren:** Die afzonderlijke regionale storefronts beheren (bijv. Noord-Amerika in USD, VK/EU in EUR, MENA in AED) en een geconsolideerd beeld van de werkelijke nettowinst en gedeelde overheadallocatie nodig hebben.
- **E-commerce fractional CFO's en financieel managers:** Die de taak hebben een gestandaardiseerd, auditklaar **maandelijks managementrapportagepakket** en variantieanalyse te bouwen voor DTC-oprichters of raadsinvesteerders, zonder 20 uur te besteden aan het opschonen van CSV-bestanden.
- **Grensoverschrijdende e-commerce boekhouders en accountants:** Die een gestructureerd **Shopify-naar-bank/Wise reconciliatiewerkblad** nodig hebben om ontbrekende facturen, dubbele uitbetalingen en multi-valuta FX-afwijkingen op te vangen vóór het afsluiten van het grootboek in Xero of QuickBooks.
- **DTC operations- en merchandisingmanagers:** Die regelmatig promotiekits, multipacks en seizoensbundles lanceren en een nauwkeurige **SKU- en Bundle-COGS-calculator** nodig hebben om brutomarges te beschermen vóór het goedkeuren van advertentie-uitgavendoelen.
- **Zelf gefinancierde solo-oprichters en analisten (zero macro's / no-code):** Die direct een transparant **Excel 365 dynamisch-array financieel model** willen (zero VBA-macro's, zero beveiligingspop-ups) of een zero-setup browsertool om vandaag nog winkel-unit economics te auditen.

---

## Waarom ik deze e-commerce financiële engine heb gebouwd

Twee Shopify-winkels kunnen afzonderlijk zeer winstgevend lijken terwijl de onderliggende boekhoudkundige records een totaal ander verhaal vertellen. CSV-exports op productniveau komen vaak niet overeen met het overzicht van Shopify Analytics. Een hoogvolume-bundle kan drie fysieke producten bevatten maar geen COGS op componentniveau in het systeem hebben. Gedeelde SaaS-abonnementen kunnen op één zakelijke kaart terechtkomen, ook al vertrouwen twee regionale storefronts erop. Ondertussen onthullen Wise- en bankafschriften routinematig operationele kosten die nooit de handmatige kostentracker hebben bereikt.

Dit zijn geen kleine spreadsheetopmaakirritaties — ze vertekenen rechtstreeks uw **gerapporteerde nettomarge** en veroorzaken kostbare fouten in **betaalde acquisitiebudgetten (CAC/ROAS)**, **SKU-prijsstrategie**, **internationale winkelexpansie** en **operationeel cashflowbeheer**.

Ik heb dit werkboek ontworpen als **geproductiseerde financiële redenering**: een herhaalbare, formulegestuurde pijplijn die SKU-kostmapping, multi-valuta FX-normalisatie, gedeelde OPEX-allocatie, bankafschriftreconciliatie en maand-op-maand variantieanalyse omvat. In plaats van elke maandafsluiting fragiele formules te herbouwen, volgt u een vergrendelde operationele volgorde en richt u 100% van uw energie op het onderzoeken van de uitzonderingen die de engine aan de oppervlakte brengt.

---

## Technische details en Excel-werkboekarchitectuur

<details>
<summary><strong>Klik om uit te vouwen: voor technische reviewers, financiële modelleurs, Excel-beoefenaars en medewerkers</strong></summary>

### Werkboekarchitectuur (modulair ontwerp met 7 sheets)

Het Excel-werkboek bevat zeven kernwerkbladen, georganiseerd in vier strikte operationele lagen (Control, Input, Reconciliation/Calculation en Executive Output):

| Operationele laag | Naam werkbladtab | Kernverantwoordelijkheid voor boekhouding en data |
| :--- | :--- | :--- |
| **1. Control & Validation** | `01_Control_Settings` | Rapportageperiodes, basisvaluta's, FX-wisselkoersen, gedeelde OPEX-allocatieverhoudingen, variantietoleranties en het globale validatiestatusdashboard. |
| **2. Sales Data Input** | `02_Shopify_Sales_Import` | Officiële maandelijkse Shopify-samenvattingsinputs, ruwe SKU-niveau CSV-imports, SKU-normalisatie en platformverkoopreconciliatie. |
| **3. Product Cost Master** | `03_Product_Cost_Master` | Individuele SKU landed eenheidskosten, Bundle Bills of Materials (BOM), dynamische Bundle-COGS-rollups en validatie van ontbrekende kosten. |
| **4. Multi-Currency OPEX** | `04_Expense_FX_Input` | Categorisering van operationele kosten, multi-valuta FX-conversie (`USD`/`EUR`/`AED`), regels voor winkelspecifieke versus gedeelde kosten en inputvalidatie. |
| **5. Bank & Wise Audit** | `05_Bank_Wise_Recon` | Zakelijke bank- en Wise CSV-afschriftimports, geautomatiseerde matching van kosten-ID's, markeren van afwijkingen en handmatige auditafhandelingslogboeken. |
| **6. P&L Engine** | `06_PL_Calculation` | Geautomatiseerde winst-en-verliesstaten voor twee winkels, bruto/nettomargestatistieken, maand-op-maand (MoM) variantieberekeningen en margewaarschuwingen. |
| **7. Executive Output** | `07_Monthly_Review` | Bestuursklare managementsamenvattingen, kern-KPI-scorekaarten en dynamisch gefilterde lijsten van onopgeloste reconciliatie-uitzonderingen. |

#### Architectuur van de datastroom

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

#### Formulegestuurd berekeningsmodel (geen VBA / dynamische arrays)

Het werkboek vertrouwt uitsluitend op moderne **Microsoft Excel 365 / Excel 2021+ dynamische-arrayformules** om handmatig rijen slepen en beveiligingsrisico's van macro's te elimineren:

- `XLOOKUP` en `XMATCH` voor snelle SKU-kostenopzoekingen, valutakoppelparen, kostencategorie-mapping en matching van banktransactie-ID's.
- `SUMIFS` en `COUNTIFS` voor periodegebonden omzetaggregatie, multi-component Bundle-BOM-kostenrollups en detectie van dubbele transactie-ID's.
- `FILTER` voor het dynamisch genereren van realtime lijsten van niet-gematchte bank/Wise-transacties in het executive review-tabblad.
- `IF` en `ABS` voor geautomatiseerde tolerantiecontroles en uitzonderingsclassificatie.
- De dynamische spill-operator `#` voor het netjes verwijzen naar uitbreidbare berekeningsarrays.

*Systeemcompatibiliteitsnotitie: vereist Microsoft 365 of Excel 2021 (en later) desktop/webversies die dynamische arrays ondersteunen. Oudere Excel-versies (2016/2019) zonder dynamische spill-ondersteuning zijn niet compatibel.*

### Drie boekhoudkundige valkuilen die ervaren e-commerce-operators vangen

#### Valkuil 1: omzet oogt nauwkeurig, maar de productbrutomarge is overschat
- **Commerciële beslissing:** Schaal Meta/TikTok-advertentie-uitgaven agressief op omdat een promotiebundle een brutomarge van 80%+ toont.
- **Verborgen falen:** De Shopify-verkoopexport vangt de bundle-omzet, maar de Product Cost Master mist een gemapte Bill of Materials (BOM) of geldige component-eenheidskosten.

| Unit economics-metriek | Onvolledige BOM-kostmapping | Nauwkeurige componentkostprijsberekening |
| :--- | :--- | :--- |
| **Bundle retail-omzet** | $60.00 | $60.00 |
| **Geregistreerde landed COGS** | $0.00 (niet gemapt) | $30.00 ($18 + $12 componenten) |
| **Gerapporteerde brutowinst** | $60.00 | $30.00 |
| **Gerapporteerde brutomarge** | **100.0%** (illusie) | **50.0%** (werkelijkheid) |

- **Engine-bescherming:** Mapt elke bundle-SKU naar zijn onderliggende child-SKU's en hoeveelheden, en markeert elke niet-gemapte component in `01_Control_Settings` vóór de P&L-review.

#### Valkuil 2: de winkel met de hogere gerapporteerde nettowinst wordt gesubsidieerd
- **Commerciële beslissing:** Verschuif voorraad- en marketingkapitaal naar de Europese winkel omdat zijn gerapporteerde nettomarge beter is dan die van de internationale winkel.
- **Verborgen falen:** Gedeelde operationele kosten (bijv. een softwarepakket van $1.000) worden volledig tegen de internationale winkel geboekt, of omgerekend met inconsistente wisselkoersen.
- **Engine-bescherming:** Standaardiseert gedeelde OPEX via configureerbare allocatieverdelingen (bijv. 60% internationaal / 40% Europees) en converteert gealloceerde kosten met vergrendelde rapportagewisselkoersen.

#### Valkuil 3: een "schoon" kostenregister maskeert niet-geregistreerde bankopnames
- **Commerciële beslissing:** Keur de maandelijkse P&L-verdeling goed omdat elke in het kostentabblad getypte regel een geldige categorie en bon heeft.
- **Verborgen falen:** Interne registervalidatie kan kosten die überhaupt nooit zijn ingevoerd niet detecteren (bijv. automatisch gefactureerde SaaS-tools of Wise FX-kosten).
- **Engine-bescherming:** Dwingt een kruiscontrole op transactieniveau af tegen ruwe bank- en Wise CSV-exports, en isoleert niet-gematchte uitstromen voor menselijke afhandeling (bijv. ontbrekende kosten versus interne saldo-overboeking).

### Illustratieve multi-store casestudy-scenario

Beschouw een e-commerce-operator die een internationale Shopify-winkel (rapporteert in `USD`) en een Europese Shopify-winkel (rapporteert in `EUR`) beheert:

| Modelparameter / bedrijfsaanname | Geconfigureerde casestudy-waarde |
| :--- | :--- |
| **Maandelijkse bestellingen internationale winkel** | 1.400 bestellingen |
| **Maandelijkse bestellingen Europese winkel** | 800 bestellingen |
| **Basisvaluta internationale winkel** | `USD` |
| **Basisvaluta Europese winkel** | `EUR` |
| **USD-naar-EUR rapportagewisselkoers** | `0.9091` |
| **Gedeelde OPEX-allocatieverhouding (Intl / EU)** | `60%` / `40%` |
| **Reconciliatievariantietolerantie** | `5.00` (in basisrapportagevaluta) |
| **Benchmark doel-nettowinstmarge** | `15.0%` |

### Formulereferentie en auditregels

#### 1. Dynamische Bundle-BOM-kostenberekening

**Bedrijfsdoel:** Rol de exacte landed kost van een bundle dynamisch op uit zijn child-component-SKU's.

```excel
=IF(A18:A200="",0,
   IF(C18:C200="组合Bundle",
      SUMIFS(F4#,A4:A50,A18:A200),
      0))
```

*Kernafhankelijkheden: nauwkeurige bundleclassificatie in `03_Product_Cost_Master`, geldige child-SKU-mappings, ingevulde componenthoeveelheden en geverifieerde eenheidskosten.*

#### 2. Geautomatiseerd control- en validatieraamwerk

| Validatiedomein | Uitgevoerde geautomatiseerde controle | Gemitigeerd financieel risico |
| :--- | :--- | :--- |
| **Rapportageperiodevergrendeling** | Verifieert de geselecteerde maand tegen geïmporteerde CSV-transactiedatums. | Voorkomt grensoverschrijdende periodevervuiling in maandelijkse P&L's. |
| **Shopify-verkoopintegriteit** | Vergelijkt opgetelde CSV-SKU-omzet met handmatige Shopify-samenvattingstotalen. | Detecteert afgekapte CSV-exports of ontbrekende winkeltokenning. |
| **SKU- en bundlekostprijsberekening** | Controleert dat alle actieve SKU's en Bundle-BOM-componenten niet-nul eenheidskosten hebben. | Elimineert overschatte brutowinst veroorzaakt door niet-gemapte COGS. |
| **Multi-valuta FX** | Valideert valuta ISO-codes (`USD`, `EUR`, `AED`) en positieve conversiekoersen. | Voorkomt kapotte valutarekensommen over internationale winkels. |
| **Gedeelde OPEX-verdelingen** | Bevestigt dat winkelallocatiepercentages optellen tot 100% waar van toepassing. | Voorkomt dubbeltelling of weglating van gedeelde overheadkosten. |
| **Bank- en Wise-matching** | Markeert niet-gematchte afschriftregels, dubbele ID's en varianties boven tolerantie. | Zorgt voor volledige vastlegging van werkelijke cashuitstromen en kosten. |

### Operationele beschermingen en best practices

- **Bewaar ruwe CSV-exports:** Archiveer onaangeroerde maandelijkse Shopify-, Wise- en bank-CSV-bestanden naast elke gedateerde Excel-werkboekkopie voor audittraceerbaarheid.
- **Strikte scheiding van inputs en formules:** Hardcodeer nooit cijfers over dynamische-array spill-bereiken (`#`); log alle aanpassingen via aangewezen inputkolommen.
- **Documenteer auditafhandelingen:** Wanneer een niet-gematchte banktransactie wordt bevestigd als interne overboeking of accrual uit een eerdere periode, noteer dan de exacte reden in `05_Bank_Wise_Recon`.

</details>

---

## Over de maker en Theseus Workshop

Ik bouw lichtgewicht, zeer traceerbare **bedrijfsbeslissingsondersteunende tools en financiële modellen** voor operators die basis-spreadsheets ontgroeien maar geen opgeblazen ERP-systemen voor ondernemingen nodig hebben. Elke tool is ontworpen rond één centrale vraag: *Welke losgekoppelde data moet nu worden samengebracht om met vertrouwen de volgende commerciële beslissing te nemen?*

### Ontdek meer e-commerce en financiële beslissingstools
Ontdek meer open-source **Excel financiële sjablonen, unit economics-calculators en operationele analysetools**, ontwikkeld door [Theseus Workshop — Open-Source Business Decision & Financial Modeling Tools op GitHub](https://github.com/HyVoid).

---

## Licentie

Dit project wordt uitgebracht onder de **Apache License 2.0**. Zie het bestand [LICENSE — Apache 2.0 open-source licentievoorwaarden](./LICENSE) voor volledige rechten en voorwaarden voor herdistributie.
