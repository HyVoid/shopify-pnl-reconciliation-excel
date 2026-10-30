[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Shopify Dual-Store P&L-Analyse & Finanzabstimmungs-Engine (Kostenlose Excel-Vorlage & Web-Rechner)
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/838d93dd-8e60-48e3-ba3b-24747fcb717f" />


[![Lizenz: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](./LICENSE)
![Plattform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2251FF)
![Tool-Typ: Finanzielle Entscheidungsunterstützung im E-Commerce](https://img.shields.io/badge/Tool-Financial%20Decision%20Support-051C2C)

**Die Shopify Dual-Store P&L-Analyse- & Abstimmungs-Engine ist eine kostenlose E-Commerce-Gewinn-und-Verlust-Vorlage (P&L) für Excel und ein browserbasierter Finanzrechner, konzipiert für Betreiber mehrerer Shopify-Shops. Gleichen Sie Shopify-Verkaufsexporte automatisch ab, berechnen Sie die Herstellkosten (COGS) auf SKU- und Bundle-Ebene, verteilen Sie mehrwährungsbasierte Betriebsausgaben (OPEX) und gleichen Sie Wise- oder Bankauszugstransaktionen in einem wiederholbaren monatlichen Buchhaltungsablauf ab – ganz ohne den Kauf teurer ERP-Software.**

> **Starten Sie Ihren monatlichen E-Commerce-Gewinnaudit in Sekunden.** Keine Anmeldung. Keine Software-Installation. 100% kostenlos nutzbar.
>
> - [🌐 Starten Sie den kostenlosen interaktiven Shopify P&L-Web-Rechner in Ihrem Browser (Sofortige Sandbox-Vorschau)](https://hyvoid.github.io/shopify-pnl-reconciliation-excel/
> - [📥 Laden Sie die wiederverwendbare Multi-Store Shopify P&L- & Bankabstimmungs-Excel-Arbeitsmappe (.xlsx) herunter](https://theseusworkshop.com/l/wtrch?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=shopify-pnl-reconciliation-excel)

Sowohl der interaktive Web-Rechner als auch die herunterladbare Microsoft-Excel-Arbeitsmappe lösen dieselbe zentrale E-Commerce-Buchhaltungsherausforderung: fragmentierte **Shopify-CSV-Verkaufsexporte**, **SKU-Stückkostenökonomie**, **mehrwährungsbasierte FX-Ausgaben (USD, EUR, AED)** und **Wise-/Bankauszahlungsdatensätze** in eine prüfungsbereite, nachvollziehbare **monatliche Management-P&L-Rechnung** zu überführen. Während die Browser-Version eine sofortige, einrichtungsfreie Sandbox bietet, ist die Excel-Vorlage für die dauerhafte Offline-Finanzbuchhaltung, automatisierte Monatsabschlussberechnungen und einen granularen Abgleich auf Transaktionsebene konzipiert.

---

## Was diese Shopify P&L- & Kostenrechnungs-Vorlage erfasst (Zuordnung von Problempunkten zu Lösungen)

| E-Commerce-Problempunkt in der Finanzbuchhaltung | Häufiger blinder Fleck in der Buchhaltung | Automatisierte Erfassung & Lösung in dieser Engine |
| :--- | :--- | :--- |
| **Verzerrte Profitabilität bei mehreren Stores** | Schwierigkeit, einen internationalen (USD) Store mit einem europäischen (EUR) Store auf vergleichbarer Basis gegenüberzustellen. | **Stückkostenökonomie auf Store-Ebene:** Erfasst Bruttoumsatz, Landed COGS, Bruttogewinn, zugeordnete OPEX, Nettogewinnmarge und durchschnittlichen Gewinn pro Bestellung über beide Storefronts hinweg. |
| **Nicht zugeordnete Bundle- & Kit-COGS** | Gebündelte SKUs zeigen in einfachen Shopify-Berichten Kosten von $0, was die Bruttomargen künstlich aufbläht und Werbeausgaben (ROAS) verfälscht. | **Automatisierter Bundle-BOM-Rollup:** Berechnet die tatsächlichen Bundle-COGS dynamisch aus den Mengen und Stückkosten der einzelnen Komponenten-SKUs über die Zuordnung einer Stückliste (Bill of Materials, BOM). |
| **Chaos bei mehrwährungsbasierten Ausgaben** | SaaS-Abonnements, 3PL-Gebühren und Werberechnungen in USD, EUR und AED werden ohne standardisierte Wechselkurse vermischt. | **Zentrale FX-Normalisierung & OPEX-Zuordnung:** Rechnet Fremdwährungsausgaben in eine einheitliche Berichtswährung um und verteilt gemeinsam genutzte Gemeinkosten nach individuellen Prozentsätzen (z. B. 60%/40%). |
| **Abweichungen bei Shopify-CSV-Exporten** | CSV-Exporte auf Produktebene stimmen wegen ausgelassener Zeilen oder zeitlicher Stichtage nicht mit der monatlichen Verkaufsübersicht von Shopify Analytics überein. | **Abstimmung Verkäufe-gegen-Plattform:** Gleicht importierte Umsatzsummen auf SKU-Ebene mit den offiziellen monatlichen Shopify-Übersichtszahlen ab und löst Abweichungswarnungen oberhalb Ihrer Toleranzschwelle aus. |
| **Versteckte Bank- & Wise-Gebührenverluste** | Wiederkehrende SaaS-Gebühren, Werbeausgaben oder Wise-Überweisungsgebühren erscheinen auf Bankauszügen, werden im manuellen Ausgaben-Tracker aber vergessen. | **Abgleich von Bank- & Wise-Auszügen:** Gleicht deklarierte Betriebsausgaben mit den tatsächlichen Bank- und Wise-CSV-Transaktionsprotokollen ab und kennzeichnet nicht zugeordnete Abhebungen, Betragsabweichungen und doppelte IDs. |
| **Unbemerkte Margenerosion** | Monatlich fortschreitende (MoM) Kostensteigerungen bei Versand, Fulfillment oder Marketing bleiben unbemerkt, bis der Cashflow versiegt. | **MoM-Abweichungs- & Margenwarnungen:** Berechnet automatisch monatliche Gewinnverschiebungen, Margenkompression und Ausgabenspitzen mit konfigurierbaren Warnschwellen. |

---

## Gelöste häufige Shopify-Buchhaltungs- & Multi-Store-Abstimmungsprobleme

| E-Commerce-Buchhaltungsproblem | Manuelle Tabelle / Standard-Shopify-Reporting (ohne dieses Tool) | Automatisierte Dual-Store-P&L-Engine (mit diesem Tool) |
| :--- | :--- | :--- |
| **Shopify-Umsatzsummen stimmen nicht mit CSV-Exporten überein** | CSV-Exporte auf Produktebene lassen stornierte Bestellungen, Teilerstattungen oder zeitzonenverschobene Datensätze stillschweigend weg, ohne den Analysten zu warnen. | **Automatisierte Top-Down-Umsatzabstimmung:** Vergleicht offizielle monatliche Shopify-Brutto-/Nettosummen direkt mit aggregierten SKU-Level-CSV-Importen und kennzeichnet Abweichungen oberhalb Ihrer Toleranz. |
| **Bundle- & Multipack-COGS sind unvollständig** | Promotion-Bundles und Multipacks tragen Kosten von $0 oder manuell geschätzte Kosten und überzeichnen die Produktbruttomarge um 30%–50%. | **Dynamische BOM-Komponentenkalkulation:** Multipliziert Komponenten-SKU-Stückkosten automatisch mit Bundle-Mengen und isoliert nicht zugeordnete SKUs vor der Berichterstattung in einem zentralen Validierungspanel. |
| **Mehrwährungs-OPEX verzerren Store-Vergleiche** | Rechnungen in USD, EUR und AED werden roh summiert oder mit uneinheitlichen Tageswechselkursen über getrennte Registerkarten hinweg umgerechnet. | **Standardisierte FX-Parametersteuerung:** Wendet gesperrte monatliche Berichtswechselkurse auf alle Ausgabendeklarationen und Bankabstimmungsprotokolle an, für konsistente grenzüberschreitende Vergleiche. |
| **Gemeinsame Gemeinkosten benachteiligen eine einzelne Storefront** | Ein primärer Shopify-Store trägt 100% der gemeinsam genutzten Klaviyo-, Agentur- oder Softwarekosten, wodurch der zweite Store künstlich profitabel erscheint. | **Konfigurierbare Zuordnung gemeinsamer Ausgaben:** Verteilt gemeinsam genutzte Betriebsausgaben sauber über Stores hinweg anhand anpassbarer Zuordnungsverhältnisse (z. B. 60% International / 40% Europa). |
| **Nicht erfasste Bank- & Wise-Gebühren schmälern den Cashflow** | Das manuelle Ausgabenbuch übersieht automatisch verlängerte SaaS-Tools, Auslandstransaktionsgebühren oder Werbegebühren auf Wise und Firmenkarten. | **Bank- & Wise-Audit auf Transaktionsebene:** Gleicht Bank-/Wise-Auszugszeilen mit Ausgaben-IDs ab, um nicht erfasste Ausgaben, doppelte Einträge und FX-Abrechnungslücken aufzudecken. |
| **Der Monatsabschluss kostet Tage an Formelreparaturen** | Finanzmanager bauen `VLOOKUP`-Ketten neu auf, beheben defekte `#REF!`-Fehler und schreiben Führungskommentare jeden Monat von Grund auf neu. | **Wiederholbarer Dynamic-Array-Workflow:** Fixiert `XLOOKUP`-, `SUMIFS`- und `FILTER`-Modelle, sodass Sie einfach neue monatliche CSVs einfügen, gekennzeichnete Ausnahmen bereinigen und sofort Management-Zusammenfassungen erstellen. |

---

## Schritt-für-Schritt-Anleitung: So führen Sie Ihre monatliche Shopify P&L- & Bankabstimmung durch

Dieses System ist als **wiederholbarer Monatsabschluss-Workflow** konzipiert und nicht als Wegwerf-Rechner. Befolgen Sie diese 4-Schritte-Anleitung, um Ihre Zahlen zu prüfen – beginnend mit einem risikofreien Browser-Test und dem Übergang zur dauerhaften Excel-Vorlage für die laufende monatliche Buchhaltung.

### Schritt 1: Testen Sie die Logik & konfigurieren Sie Berichtsparameter (`01_Control_Settings`)
**Aktion:** [Starten Sie den kostenlosen interaktiven Browser-Rechner](https://hyvoid.github.io/shopify-pnl-reconciliation-excel/ um die vorinstallierten Beispieldaten zu erkunden, oder öffnen Sie die Registerkarte `01_Control_Settings` in Ihrer Arbeitsmappe.  
Definieren Sie Ihren **Berichtsmonat**, Ihren **Vergleichsbasis-Monat**, Ihre **Basis-Berichtswährungen (USD/EUR)**, Ihre **monatlichen FX-Umrechnungskurse**, Ihre **Zuordnung gemeinsamer OPEX** (Standardbeispiel: `60% / 40%`), Ihre **Abstimmungstoleranzschwelle** (Standard: `5.00`) und Ihre **Warnauslöser für die Nettogewinnmarge**.

### Schritt 2: Importieren Sie Shopify-Verkaufs-CSVs, SKU-Landed-Costs und Bankauszüge
**Aktion:** Befüllen Sie die vier standardisierten Dateneingabe-Arbeitsblätter mit Ihren rohen E-Commerce-Exporten:
1. **`02_Shopify_Sales_Import`:** Fügen Sie Ihre monatlichen Shopify-Verkaufs-CSV-Exporte auf Produktebene für beide Stores ein.
2. **`03_Product_Cost_Master`:** Erfassen Sie einzelne SKU-Landed-Stückkosten und definieren Sie Ihre **Bundle-Stücklisten (Bill of Materials, BOM)**-Komponentenzuordnungen.
3. **`04_Expense_FX_Input`:** Erfassen Sie monatliche Betriebsausgaben (Marketing, SaaS, 3PL, Lohnabrechnung) in ihren ursprünglichen Abrechnungswährungen (`USD`, `EUR`, `AED`) und kennzeichnen Sie sie als store-spezifisch oder gemeinsam genutzt.
4. **`05_Bank_Wise_Recon`:** Importieren Sie Ihre monatlichen Firmenbank- und **Wise-Mehrwährungs-Auszugs-CSVs** unter Verwendung der erhaltenen Transaktionsreferenz-IDs.

### Schritt 3: Prüfen Sie Abweichungen & überprüfen Sie die Dual-Store-P&L-Margen
**Aktion:** Prüfen Sie zuerst das **Globale Validierungsstatus-Panel** in `01_Control_Settings`. Beheben Sie alle gekennzeichneten Ausnahmen – wie nicht zugeordnete neue SKUs, fehlende Bundle-Komponentenkosten, ungültige OPEX-Kategorien oder nicht zugeordnete Wise-Bankabhebungen – bevor Sie dem Endergebnis vertrauen.  
Sobald die Validierungsprüfungen bestanden sind, prüfen Sie **`06_PL_Calculation`** für nebeneinanderstehende Store-P&L-Rechnungen und **`07_Monthly_Review`** für Führungs-Abweichungskommentare und offene Abstimmungspunkte.

### Schritt 4: Laden Sie die wiederverwendbare Excel-Vorlage für die dauerhafte monatliche Archivierung herunter
**Aktion:** Sobald Sie validiert haben, wie die Engine versteckte Gewinnlecks in der Browser-Vorschau aufdeckt, wechseln Sie zur Offline-Tabelle für Ihre echten Geschäftsunterlagen.  
👉 **[Laden Sie die vollständige Shopify Dual-Store P&L-Excel-Arbeitsmappe (.xlsx) herunter](https://theseusworkshop.com/l/wtrch?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=shopify-pnl-reconciliation-excel)**, um lokale Monats-Snapshots zu speichern, Ihren SKU-Katalog dauerhaft anzupassen, sensible Finanzdaten zu 100% offline zu halten und Ihre Basiszahlen jeden Monatsabschluss in unter 15 Minuten fortzuschreiben.

---

## Die Geschäftslogik & Methodik: Blindstellen im E-Commerce-Gewinn beheben (für Nicht-Buchhalter)

Sie benötigen keinen Abschluss in Rechnungswesen, um eine profitable Shopify-Marke zu führen – doch sich ausschließlich auf Ihr **Shopify-Analytics-Dashboard** oder Ihren **Bankkontostand** zu verlassen, erzeugt gefährliche kommerzielle Blindstellen. 

Viele Gründer und Store-Betreiber skalieren Werbeausgaben oder expandieren in neue Märkte im Glauben, profitabel zu sein – nur um Monate später festzustellen, dass das Geld verschwindet. Diese Engine wurde entwickelt, um komplexe Buchhaltungsregeln in klare, umsetzbare Geschäftslogik zu übersetzen, die Sie vor **vier häufigen E-Commerce-Gewinnillusionen** schützt:

### 1. Die Illusion der „künstlich hohen Marge" (Warum Bundles stillschweigend den ROAS zerstören)
* **Die Blindstelle:** Wenn Sie in Shopify ein Promotion-Bundle oder einen Multipack erstellen (z. B. ein 3er-Pack für $60), erfasst Shopify den Verkauf über $60, weiß aber oft nicht, dass das Bundle tatsächlich drei separate Artikel aus Ihrem Lager entnommen hat, die insgesamt $18 + $12 = $30 kosten. Wenn die Kosten dieses Bundles leer gelassen oder als $0 in Ihrer Tabelle erfasst werden, behauptet Ihr Bericht, Sie hätten **$60 reinen Bruttogewinn (100% Marge)** erzielt, statt der tatsächlichen **$30 (50% Marge)**.
* **Die geschäftliche Konsequenz:** In der Annahme, $60 Marge pro Bestellung zu haben, sagen Sie Ihrem Media-Buyer, bis zu $40 pro Akquisition (CPA) bei Meta oder Google Ads auszugeben. In Wirklichkeit verlieren Sie bei jedem einzelnen Verkauf $10 in bar.
* **Wie unsere Logik das behebt:** Die Engine verwendet einen **Stücklisten-Rollup (Bill of Materials, BOM)**. Sie erfassen die Kosten Ihrer Einzelartikel nur einmal. Immer wenn ein Bundle verkauft wird, addiert die Arbeitsmappe automatisch die exakten Kosten der enthaltenen Einzelteile – und löst eine deutliche Warnung aus, wenn bei einem Bundle die Zutatenliste fehlt.

### 2. Die „Star-Store vs. Verlierer-Store"-Illusion (gemeinsame Ausgaben & Währungsverzerrung)
* **Die Blindstelle:** Angenommen, Sie betreiben einen US-Store (in USD) und einen europäischen Store (in EUR). Sie zahlen $2.000/Monat für Klaviyo, Shopify-Apps und eine Kreativagentur von Ihrer US-Kreditkarte, obwohl beide Stores diese Tools nutzen.
* **Die geschäftliche Konsequenz:** Da der US-Store die gesamte Rechnung zahlt, wirkt sein Gewinn schwach, während der europäische Store wie ein margenstarker Gewinner aussieht, weil er bei Software- und Marketing-Gemeinkosten „umsonst mitfährt". Schlimmer noch: EUR-Umsätze mit USD-Ausgaben ohne gesperrten Wechselkurs zu vermischen, lässt Ihre Margen je nach Copy-Paste-Vorgehen stark schwanken.
* **Wie unsere Logik das behebt:** Sie kennzeichnen eine Ausgabe einfach als „Gemeinsam" und legen einmalig eine faire Aufteilungsregel fest (z. B. 60% US / 40% Europa). Die Engine rechnet Währungen automatisch zu einem standardisierten Kurs um und teilt die Rechnung fair auf, sodass Sie sehen, welcher Store aus eigener Kraft tatsächlich Cash generiert.

### 3. Die „unsichtbare Cash-Leckage"-Illusion (Warum Ihre Ausgabenliste nie vollständig ist)
* **Die Blindstelle:** Die meisten kleinen Unternehmen erfassen Ausgaben, indem sie Rechnungen in eine Tabelle tippen. Doch was ist mit dem jährlichen SaaS-Tool, das sich automatisch über Wise verlängert hat, der zusätzlichen Meta-Werbe-Schwellengebühr oder der versteckten internationalen Überweisungsgebühr? Wenn Sie vergessen, sie in Ihre Ausgabenregisterkarte einzutippen, sieht Ihr P&L-Bericht trotzdem „sauber" und fehlerfrei aus – er überzeichnet nur Ihren Nettogewinn.
* **Die geschäftliche Konsequenz:** Sie treffen Einstellungs- oder Lagerbestandsentscheidungen auf Basis von Phantomgewinnen, die Ihr Bankkonto bereits verlassen haben.
* **Wie unsere Logik das behebt:** Statt dem menschlichen Gedächtnis zu vertrauen, erzwingt die Arbeitsmappe einen **bidirektionalen Abgleich** zwischen Ihrer Ausgabenliste und Ihrem tatsächlichen **Bank-/Wise-Auszugs-CSV**. Wenn Geld Ihr Bankkonto verlassen hat, aber nicht auf Ihrer Ausgabenliste steht, hebt die Engine die betreffende Transaktion als „Nicht zugeordneter Posten" hervor, damit nichts durch die Maschen fällt.

### 4. Zusammenfassung des 5-stufigen kommerziellen Entscheidungsrahmens

| Zentrale Geschäftsfrage | Verständliche Methodik | Geschützte kommerzielle Entscheidung |
| :--- | :--- | :--- |
| **1. Kann ich meinen Umsatzzahlen vertrauen?** | Gleichen Sie rohe Shopify-CSV-Exporte mit den offiziellen monatlichen Plattform-Übersichten ab. | Verhindert Lager- oder Budgetentscheidungen auf Basis unvollständiger oder abgeschnittener Verkaufsexporte. |
| **2. Verdiene ich tatsächlich Geld mit jedem SKU & Bundle?** | Verknüpfen Sie jeden verkauften Artikel und jedes Bundle mit seinen tatsächlichen Komponenten-Stückkosten. | Verhindert die Skalierung unprofitabler Werbekampagnen für Produkte mit zu niedrig angesetzten COGS. |
| **3. Welcher Store verdient mehr Kapital?** | Rechnen Sie alle Währungen auf eine einzige Basis um und verteilen Sie gemeinsame Gemeinkosten fair. | Stellt sicher, dass Sie Wachstumskapital in die wirklich profitable Region investieren und nicht in die subventionierte. |
| **4. Wohin ist mein tatsächliches Geld geflossen?** | Gleichen Sie jede erfasste Ausgabe mit den tatsächlichen Bank- und Wise-Abhebungen ab. | Deckt vergessene Software-Abonnements, Abrechnungsfehler und nicht erfasste Betriebskosten auf. |
| **5. Was hat sich seit letztem Monat geändert?** | Vergleichen Sie aktuelle Margen und Ausgabenkategorien mit der gesperrten Basis des Vormonats. | Erkennt Fulfillment-Kostensteigerungen oder Margenkompression früh, bevor sie den Cashflow schädigen. |

*Wichtiger Hinweis zum Umfang: Diese Engine ist ein Management-Entscheidungsunterstützungs- und Finanzabstimmungstool. Sie befähigt Betreiber, die tatsächliche Stückkostenökonomie zu sehen, bevor sie kommerzielle Wetten eingehen, ersetzt jedoch nicht die gesetzliche Steuererklärung, formelle GAAP/IFRS-Lagerprüfungen oder Testate durch Wirtschaftsprüfer (Certified Public Accounting, CPA).*

---

## Für wen das gedacht ist: Zielgruppen im E-Commerce & Anwendungsfälle

Diese **Shopify P&L-Vorlage und dieses Abstimmungstool** sind zugeschnitten auf bestimmte E-Commerce-Betreiber und Finanzfachleute, die Transparenz auf Unternehmensniveau ohne den Ballast von Unternehmenssoftware benötigen:

- **Inhaber mehrerer Shopify- & Shopify-Plus-Marken:** Verwalten getrennter regionaler Storefronts (z. B. Nordamerika in USD, UK/EU in EUR, MENA in AED), die eine konsolidierte Sicht auf den tatsächlichen Nettogewinn und die Zuordnung gemeinsamer Gemeinkosten benötigen.
- **Fractional CFOs & Finanzmanager im E-Commerce:** Beauftragt mit dem Aufbau eines standardisierten, prüfungsbereiten **monatlichen Management-Reportings** und einer Abweichungsanalyse für DTC-Gründer oder Board-Investoren, ohne 20 Stunden mit dem Bereinigen von CSV-Dateien zu verbringen.
- **Grenzüberschreitende E-Commerce-Buchhalter & Bilanzbuchhalter:** Die ein strukturiertes **Shopify-zu-Bank/Wise-Abstimmungsarbeitsblatt** benötigen, um fehlende Rechnungen, doppelte Auszahlungen und mehrwährungsbedingte FX-Abweichungen zu erkennen, bevor das Hauptbuch in Xero oder QuickBooks geschlossen wird.
- **DTC-Betriebs- & Merchandising-Manager:** Die häufig Promotion-Kits, Multipacks und saisonale Bundles launchen und einen präzisen **SKU- & Bundle-COGS-Rechner** benötigen, um Bruttomargen zu schützen, bevor Werbeausgabenziele freigegeben werden.
- **Bootstrapped Solo-Gründer & Analysten (Zero Macros / No-Code):** Die ein sofortiges, transparentes **Excel-365-Dynamic-Array-Finanzmodell** (null VBA-Makros, null Sicherheits-Popups) oder ein einrichtungsfreies Browser-Tool wünschen, um die Stückkostenökonomie Ihres Stores noch heute zu prüfen.

---

## Warum ich diese E-Commerce-Finanz-Engine entwickelt habe

Zwei Shopify-Stores können isoliert betrachtet hochprofitabel erscheinen, während die zugrunde liegenden Buchhaltungsunterlagen eine völlig andere Geschichte erzählen. CSV-Exporte auf Produktebene lassen sich häufig nicht mit der Shopify-Analytics-Übersicht abstimmen. Ein volumenstarkes Bundle kann drei physische Produkte enthalten, trägt im System aber keine COGS auf Komponentenebene. Gemeinsam genutzte SaaS-Abonnements können eine einzige Firmenkarte belasten, obwohl zwei regionale Storefronts davon abhängen. Gleichzeitig offenbaren Wise- und Bankauszüge regelmäßig Betriebsgebühren, die den manuellen Ausgaben-Tracker nie erreicht haben.

Dies sind keine nebensächlichen Formatierungsärgernisse in Tabellen – sie verzerren direkt Ihre **ausgewiesene Nettomarge** und lösen kostspielige Fehler bei **bezahlten Akquisitionsbudgets (CAC/ROAS)**, **SKU-Preisstrategien**, **internationaler Store-Expansion** und **operativem Cashflow-Management** aus.

Ich habe diese Arbeitsmappe als **produktisierte Finanzlogik** entwickelt: eine wiederholbare, formelgetriebene Pipeline, die SKU-Kostenzuordnung, mehrwährungsbasierte FX-Normalisierung, gemeinsame OPEX-Zuordnung, Bankauszugsabstimmung und Monatsvergleichs-Abweichungsanalyse abdeckt. Statt jeden Monatsabschluss fragile Formeln neu aufzubauen, folgen Sie einer festen Ablauffolge und konzentrieren 100% Ihrer Energie auf die Untersuchung der von der Engine aufgedeckten Ausnahmen.

---

## Technische Details & Architektur der Excel-Arbeitsmappe

<details>
<summary><strong>Klicken zum Aufklappen: Für technische Prüfer, Finanzmodellierer, Excel-Praktiker und Mitwirkende</strong></summary>

### Architektur der Arbeitsmappe (modulares 7-Blatt-Design)

Die Excel-Arbeitsmappe enthält sieben Kernarbeitsblätter, organisiert in vier strikten Betriebsebenen (Steuerung, Eingabe, Abstimmung/Berechnung und Führungs-Output):

| Betriebsebene | Name der Arbeitsblatt-Registerkarte | Zentrale Buchhaltungs- & Datenverantwortung |
| :--- | :--- | :--- |
| **1. Steuerung & Validierung** | `01_Control_Settings` | Berichtsperioden, Basiswährungen, FX-Wechselkurse, gemeinsame OPEX-Zuordnungsverhältnisse, Abweichungstoleranzen und globales Validierungsstatus-Dashboard. |
| **2. Verkaufsdaten-Eingabe** | `02_Shopify_Sales_Import` | Offizielle monatliche Shopify-Übersichts-Eingaben, rohe SKU-Level-CSV-Importe, SKU-Normalisierung und Plattform-Umsatzabstimmung. |
| **3. Produktkosten-Stammdaten** | `03_Product_Cost_Master` | Einzelne SKU-Landed-Stückkosten, Bundle-Stücklisten (Bill of Materials, BOM), dynamische Bundle-COGS-Rollups und Validierung fehlender Kosten. |
| **4. Mehrwährungs-OPEX** | `04_Expense_FX_Input` | Kategorisierung von Betriebsausgaben, mehrwährungsbasierte FX-Umrechnung (`USD`/`EUR`/`AED`), store-spezifische vs. gemeinsame Kostenregeln und Eingabevalidierung. |
| **5. Bank- & Wise-Audit** | `05_Bank_Wise_Recon` | Import von Firmenbank- und Wise-CSV-Auszügen, automatisierter Ausgaben-ID-Abgleich, Abweichungskennzeichnung und manuelle Audit-Dispositionsprotokolle. |
| **6. P&L-Engine** | `06_PL_Calculation` | Automatisierte Dual-Store-Gewinn-und-Verlust-Rechnungen, Brutto-/Nettomargen-Kennzahlen, Monatsvergleichs- (MoM) Abweichungsberechnungen und Margenwarnungen. |
| **7. Führungs-Output** | `07_Monthly_Review` | Vorstandsreife Management-Zusammenfassungen, Kern-KPI-Scorecards und dynamisch gefilterte Listen ungelöster Abstimmungsausnahmen. |

#### Architektur des Datenflusses

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

#### Formelgetriebenes Berechnungsmodell (kein VBA / Dynamic Arrays)

Die Arbeitsmappe stützt sich ausschließlich auf moderne **Microsoft Excel 365 / Excel 2021+ Dynamic-Array-Formeln**, um manuelles Zeilen-Ziehen und Makro-Sicherheitsrisiken zu eliminieren:

- `XLOOKUP` und `XMATCH` für schnelle SKU-Kosten-Lookups, Währungskurs-Paarung, Ausgabenkategorie-Zuordnung und Banktransaktions-ID-Abgleich.
- `SUMIFS` und `COUNTIFS` für periodenspezifische Umsatzaggregation, Multi-Komponenten-Bundle-BOM-Kosten-Rollups und die Erkennung doppelter Transaktions-IDs.
- `FILTER` zum dynamischen Erzeugen von Echtzeitlisten nicht zugeordneter Bank-/Wise-Transaktionen in der Führungs-Review-Registerkarte.
- `IF` und `ABS` für automatisierte Toleranzprüfungen und Ausnahmenklassifizierung.
- Der dynamische Spill-Operator `#` zum sauberen Referenzieren erweiterbarer Berechnungsarrays.

*Hinweis zur Systemkompatibilität: Erfordert Microsoft 365 oder Excel 2021 (und neuer) in Desktop-/Web-Versionen, die Dynamic Arrays unterstützen. Ältere Excel-Versionen (2016/2019) ohne Dynamic-Spill-Unterstützung sind nicht kompatibel.*

### Drei Buchhaltungsfallen, die erfahrene E-Commerce-Betreiber erwischen

#### Falle 1: Der Umsatz sieht korrekt aus, aber die Produktbruttomarge ist überzeichnet
- **Kommerzielle Entscheidung:** Meta-/TikTok-Werbeausgaben aggressiv skalieren, weil ein Promotion-Bundle eine Bruttomarge von 80%+ zeigt.
- **Verstecktes Versagen:** Der Shopify-Verkaufsexport erfasst den Bundle-Umsatz, aber der Produktkosten-Stammdatenbestand hat keine zugeordnete Stückliste (Bill of Materials, BOM) oder keine gültigen Komponenten-Stückkosten.

| Kennzahl der Stückkostenökonomie | Unvollständige BOM-Kostenzuordnung | Präzise Komponentenkalkulation |
| :--- | :--- | :--- |
| **Bundle-Einzelhandelsumsatz** | $60.00 | $60.00 |
| **Erfasste Landed COGS** | $0.00 (nicht zugeordnet) | $30.00 ($18 + $12 Komponenten) |
| **Ausgewiesener Bruttogewinn** | $60.00 | $30.00 |
| **Ausgewiesene Bruttomarge** | **100.0%** (Illusion) | **50.0%** (Realität) |

- **Engine-Schutzmechanismus:** Ordnet jede Bundle-SKU ihren zugrunde liegenden Kind-SKUs und Mengen zu und kennzeichnet jede nicht zugeordnete Komponente in `01_Control_Settings`, bevor die P&L-Prüfung erfolgt.

#### Falle 2: Der Store mit höherem ausgewiesenem Nettogewinn wird subventioniert
- **Kommerzielle Entscheidung:** Lagerbestand und Marketingkapital zum europäischen Store verlagern, weil dessen ausgewiesene Nettomarge den internationalen Store schlägt.
- **Verstecktes Versagen:** Gemeinsame Betriebsausgaben (z. B. eine $1.000-Software-Suite) werden vollständig gegen den internationalen Store gebucht oder mit uneinheitlichen Wechselkursen umgerechnet.
- **Engine-Schutzmechanismus:** Standardisiert gemeinsame OPEX über konfigurierbare Zuordnungsverhältnisse (z. B. 60% International / 40% Europa) und rechnet zugeordnete Kosten mit gesperrten Berichtswechselkursen um.

#### Falle 3: Ein „sauberes" Ausgabenbuch verschleiert nicht erfasste Bankabhebungen
- **Kommerzielle Entscheidung:** Die monatliche P&L-Verteilung freigeben, weil jeder in die Ausgabenregisterkarte getippte Posten eine gültige Kategorie und einen Beleg hat.
- **Verstecktes Versagen:** Die interne Ledger-Validierung kann Ausgaben nicht erkennen, die von vornherein nie erfasst wurden (z. B. automatisch abgerechnete SaaS-Tools oder Wise-FX-Gebühren).
- **Engine-Schutzmechanismus:** Erzwingt einen Cross-Check auf Transaktionsebene gegen rohe Bank- und Wise-CSV-Exporte und isoliert nicht zugeordnete Abflüsse für die menschliche Disposition (z. B. fehlende Ausgabe vs. interner Saldenübertrag).

### Illustratives Multi-Store-Fallbeispiel-Szenario

Betrachten Sie einen E-Commerce-Betreiber, der einen internationalen Shopify-Store (Berichterstattung in `USD`) und einen europäischen Shopify-Store (Berichterstattung in `EUR`) verwaltet:

| Modellparameter / Geschäftsannahme | Konfigurierter Fallbeispielwert |
| :--- | :--- |
| **Monatliche Bestellungen internationaler Store** | 1,400 Bestellungen |
| **Monatliche Bestellungen europäischer Store** | 800 Bestellungen |
| **Basiswährung internationaler Store** | `USD` |
| **Basiswährung europäischer Store** | `EUR` |
| **USD-zu-EUR-Berichtswechselkurs** | `0.9091` |
| **Gemeinsames OPEX-Zuordnungsverhältnis (Intl / EU)** | `60%` / `40%` |
| **Abstimmungs-Abweichungstoleranz** | `5.00` (in Basis-Berichtswährung) |
| **Ziel-Benchmark Nettogewinnmarge** | `15.0%` |

### Formelreferenz & Prüfregeln

#### 1. Dynamische Bundle-BOM-Kostenberechnung

**Geschäftszweck:** Rollen Sie die exakten Landed-Kosten eines Bundles dynamisch aus seinen Kind-Komponenten-SKUs auf.

```excel
=IF(A18:A200="",0,
   IF(C18:C200="组合Bundle",
      SUMIFS(F4#,A4:A50,A18:A200),
      0))
```

*Zentrale Abhängigkeiten: Präzise Bundle-Klassifizierung in `03_Product_Cost_Master`, gültige Kind-SKU-Zuordnungen, befüllte Komponentenmengen und verifizierte Stückkosten.*

#### 2. Automatisiertes Steuerungs- & Validierungs-Framework

| Validierungsbereich | Durchgeführte automatisierte Prüfung | Gemindertes Finanzrisiko |
| :--- | :--- | :--- |
| **Berichtsperioden-Sperre** | Prüft den ausgewählten Monat gegen importierte CSV-Transaktionsdaten. | Verhindert periodenübergreifende Stichtags-Kontamination in monatlichen P&Ls. |
| **Shopify-Umsatzintegrität** | Vergleicht summierte CSV-SKU-Umsätze mit manuellen Shopify-Übersichtssummen. | Erkennt abgeschnittene CSV-Exporte oder fehlende Store-Zuordnung. |
| **SKU- & Bundle-Kalkulation** | Prüft, dass alle aktiven SKUs und Bundle-BOM-Komponenten Stückkosten ungleich null haben. | Beseitigt überzeichneten Bruttogewinn durch nicht zugeordnete COGS. |
| **Mehrwährungs-FX** | Validiert Währungs-ISO-Codes (`USD`, `EUR`, `AED`) und positive Umrechnungskurse. | Verhindert fehlerhafte Währungsberechnungen über internationale Stores hinweg. |
| **Gemeinsame OPEX-Aufteilungen** | Bestätigt, dass Store-Zuordnungsprozentsätze, wo anwendbar, 100% ergeben. | Verhindert Doppelzählung oder das Auslassen gemeinsamer Gemeinkosten. |
| **Bank- & Wise-Abgleich** | Kennzeichnet nicht zugeordnete Auszugszeilen, doppelte IDs und Abweichungen oberhalb der Toleranz. | Stellt die vollständige Erfassung tatsächlicher Geldabflüsse und Gebühren sicher. |

### Operative Schutzmechanismen & Best Practices

- **Rohe CSV-Exporte aufbewahren:** Archivieren Sie unangetastete monatliche Shopify-, Wise- und Bank-CSV-Dateien zusammen mit jeder datierten Excel-Arbeitsmappenkopie für die Audit-Rückverfolgbarkeit.
- **Strikte Trennung von Eingaben & Formeln:** Überschreiben Sie niemals Zahlen über Dynamic-Array-Spill-Bereichen (`#`); protokollieren Sie alle Anpassungen über dafür vorgesehene Eingabespalten.
- **Audit-Dispositionen dokumentieren:** Wenn eine nicht zugeordnete Banktransaktion als interner Transfer oder Abgrenzung aus der Vorperiode bestätigt wird, erfassen Sie den exakten Grund in `05_Bank_Wise_Recon`.

</details>

---

## Über den Ersteller & Theseus Workshop

Ich entwickle leichte, hoch-rückverfolgbare **Entscheidungsunterstützungs-Tools und Finanzmodelle** für Betreiber, die über einfache Tabellen hinauswachsen, aber keine aufgeblähten Unternehmens-ERP-Systeme benötigen. Jedes Tool ist um eine zentrale Frage herum konzipiert: *Welche unverbundenen Daten müssen gerade jetzt zusammengeführt werden, um die nächste kommerzielle Entscheidung mit Zuversicht zu treffen?*

### Entdecken Sie weitere E-Commerce- & Finanz-Entscheidungstools
Entdecken Sie weitere Open-Source-**Excel-Finanzvorlagen, Stückkostenökonomie-Rechner und operative Analyse-Tools**, entwickelt von [Theseus Workshop — Open-Source-Entscheidungs- & Finanzmodellierungs-Tools auf GitHub](https://github.com/HyVoid).

---

## Lizenz

Dieses Projekt wird unter der **Apache License 2.0** veröffentlicht. Siehe die Datei [LICENSE — Apache 2.0 Open-Source-Lizenzbedingungen](./LICENSE) für vollständige Berechtigungen und Weiterverbreitungsbedingungen.
