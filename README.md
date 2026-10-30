[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Shopify Dual-Store P&L Analysis & Financial Reconciliation Engine (Free Excel Template & Web Calculator)
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/838d93dd-8e60-48e3-ba3b-24747fcb717f" />


[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](./LICENSE)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2251FF)
![Tool Type: E-Commerce Financial Decision Support](https://img.shields.io/badge/Tool-Financial%20Decision%20Support-051C2C)

**The Shopify Dual-Store P&L Analysis & Reconciliation Engine is a free e-commerce profit and loss (P&L) Excel template and browser-based financial calculator designed for multi-store Shopify operators. Automatically reconcile Shopify sales exports, calculate SKU-level and Bundle cost of goods sold (COGS), allocate multi-currency operating expenses (OPEX), and match Wise or bank statement transactions in one repeatable monthly bookkeeping workflow—without buying expensive ERP software.**

> **Start your monthly e-commerce profit audit in seconds.** No signup. No software installation. 100% free to use.
>
> - [🌐 Launch the Free Interactive Shopify P&L Web Calculator in Your Browser (Instant Sandbox Preview)](https://hyvoid.github.io/shopify-pnl-reconciliation-excel/
> - [📥 Download the Repeatable Multi-Store Shopify P&L & Bank Reconciliation Excel Workbook (.xlsx)](https://theseusworkshop.com/l/wtrch?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=shopify-pnl-reconciliation-excel)

Both the interactive web calculator and the downloadable Microsoft Excel workbook solve the same core e-commerce accounting challenge: transforming fragmented **Shopify CSV sales exports**, **SKU unit economics**, **multi-currency FX expenses (USD, EUR, AED)**, and **Wise/bank payout records** into an audit-ready, traceable **monthly management P&L statement**. While the browser version offers an instant zero-setup sandbox, the Excel template is engineered for permanent offline financial record-keeping, automated month-end close calculations, and granular transaction-level reconciliation.

---

## What This Shopify P&L & Cost Accounting Template Tracks (Pain-Point to Solution Mapping)

| E-Commerce Financial Pain Point | High-Frequency Accounting Blind Spot | Automated Tracking & Resolution in This Engine |
| :--- | :--- | :--- |
| **Multi-Store Profitability Distortion** | Difficulty comparing an International (USD) store against a European (EUR) store on an apples-to-apples basis. | **Store-Level Unit Economics:** Tracks gross revenue, landed COGS, gross profit, allocated OPEX, net profit margin, and average profit per order across dual storefronts. |
| **Unmapped Bundle & Kit COGS** | Bundled SKUs show $0 cost in basic Shopify reports, artificially inflating gross margins and misleading ad spend (ROAS). | **Automated Bundle BOM Rollup:** Calculates true Bundle COGS dynamically from individual component SKU quantities and unit costs via Bill of Materials (BOM) mapping. |
| **Multi-Currency Expense Chaos** | SaaS subscriptions, 3PL fees, and ad bills paid in USD, EUR, and AED are mixed without standardized FX rates. | **Centralized FX Normalization & OPEX Allocation:** Converts foreign-currency expenses into a unified reporting currency and splits shared overhead by custom percentages (e.g., 60%/40%). |
| **Shopify CSV Export Discrepancies** | Product-level CSV exports fail to match the Shopify Analytics monthly sales summary due to omitted rows or timing cutoffs. | **Sales-to-Platform Reconciliation:** Cross-checks imported SKU-level sales totals against official Shopify monthly summary figures, triggering variance alerts beyond your tolerance threshold. |
| **Hidden Bank & Wise Fee Leakage** | Recurring SaaS charges, ad spend, or Wise transfer fees appear on bank statements but are forgotten in the manual expense tracker. | **Bank & Wise Statement Matching:** Reconciles declared operating expenses against actual bank and Wise CSV transaction logs, flagging unmatched withdrawals, amount variances, and duplicate IDs. |
| **Unnoticed Margin Erosion** | Month-over-month (MoM) cost creep in shipping, fulfillment, or marketing goes undetected until cash flow dries up. | **MoM Variance & Margin Alerts:** Automatically calculates month-over-month profit shifts, margin compression, and expense spikes with configurable red-flag thresholds. |

---

## Common Shopify Bookkeeping & Multi-Store Reconciliation Problems Solved

| E-Commerce Accounting Problem | Manual Spreadsheet / Standard Shopify Reporting (Without This Tool) | Automated Dual-Store P&L Engine (With This Tool) |
| :--- | :--- | :--- |
| **Shopify Sales Totals Do Not Match CSV Exports** | Product-level CSV exports silently drop canceled orders, partial refunds, or timezone-shifted records without warning the analyst. | **Automated Top-Down Sales Reconciliation:** Compares official Shopify monthly gross/net totals directly against aggregated SKU-level CSV imports and flags discrepancies exceeding your tolerance. |
| **Bundle & Multipack COGS Are Incomplete** | Promotional bundles and multipacks carry $0 or manually guessed costs, overstating product gross margin by 30%–50%. | **Dynamic BOM Component Costing:** Multiplies component SKU unit costs by bundle quantities automatically, isolating unmapped SKUs in a central validation panel before reporting. |
| **Multi-Currency OPEX Distorts Store Comparisons** | USD, EUR, and AED invoices are summed raw or converted with inconsistent daily exchange rates across separate tabs. | **Standardized FX Parameter Control:** Applies locked monthly reporting exchange rates across all expense declarations and bank reconciliation logs for consistent cross-border comparison. |
| **Shared Overhead Penalizes a Single Storefront** | One primary Shopify store absorbs 100% of shared Klaviyo, agency, or software bills, making the secondary store look artificially profitable. | **Configurable Shared Expense Allocation:** Splits shared operating expenses cleanly across stores using customizable allocation ratios (e.g., 60% International / 40% Europe). |
| **Unrecorded Bank & Wise Charges Eat Into Cash Flow** | The manual expense ledger misses auto-renewed SaaS tools, foreign transaction fees, or ad charges hitting Wise and corporate cards. | **Transaction-Level Bank & Wise Audit:** Matches bank/Wise statement lines against expense IDs to expose unrecorded expenses, duplicate entries, and FX settlement gaps. |
| **Month-End Close Takes Days of Formula Repair** | Finance managers rebuild `VLOOKUP` chains, fix broken `#REF!` errors, and rewrite executive commentary from scratch every month. | **Repeatable Dynamic-Array Workflow:** Locks in `XLOOKUP`, `SUMIFS`, and `FILTER` models so you simply paste new monthly CSVs, clear flagged exceptions, and generate instant management summaries. |

---

## Step-by-Step Tutorial: How to Run Your Monthly Shopify P&L & Bank Reconciliation

This system is engineered as a **repeatable month-end close workflow** rather than a disposable calculator. Follow this 4-step tutorial to audit your numbers—starting with a zero-risk browser test and transitioning to the permanent Excel template for ongoing monthly bookkeeping.

### Step 1: Test the Logic & Configure Reporting Parameters (`01_Control_Settings`)
**Action:** [Launch the Free Interactive Browser Calculator](https://hyvoid.github.io/shopify-pnl-reconciliation-excel/ to explore the pre-loaded sample data, or open the `01_Control_Settings` tab in your workbook.  
Define your **reporting month**, **comparison baseline month**, **base reporting currencies (USD/EUR)**, **monthly FX conversion rates**, **shared OPEX allocation split** (default example: `60% / 40%`), **reconciliation tolerance threshold** (default: `5.00`), and **net profit margin warning triggers**.

### Step 2: Import Shopify Sales CSVs, SKU Landed Costs & Bank Statements
**Action:** Populate the four standardized data input worksheets using your raw e-commerce exports:
1. **`02_Shopify_Sales_Import`:** Paste your monthly Shopify product-level sales CSV exports for both stores.
2. **`03_Product_Cost_Master`:** Enter individual SKU landed unit costs and define your **Bundle Bill of Materials (BOM)** component mappings.
3. **`04_Expense_FX_Input`:** Log monthly operating expenses (marketing, SaaS, 3PL, payroll) in their original billing currencies (`USD`, `EUR`, `AED`) and tag them as store-specific or shared.
4. **`05_Bank_Wise_Recon`:** Import your monthly corporate bank and **Wise multi-currency statement CSVs** using preserved transaction reference IDs.

### Step 3: Audit Discrepancies & Review Dual-Store P&L Margins
**Action:** Check the **Global Validation Status Panel** in `01_Control_Settings` first. Resolve all flagged exceptions—such as unmapped new SKUs, missing Bundle component costs, invalid OPEX categories, or unmatched Wise bank withdrawals—before trusting the bottom line.  
Once validation checks pass, inspect **`06_PL_Calculation`** for side-by-side store P&L statements and **`07_Monthly_Review`** for executive variance commentary and open reconciliation items.

### Step 4: Download the Reusable Excel Template for Permanent Monthly Archiving
**Action:** Once you have validated how the engine catches hidden profit leaks in the browser preview, transition to the offline spreadsheet for your real business records.  
👉 **[Download the Full Shopify Dual-Store P&L Excel Workbook (.xlsx)](https://theseusworkshop.com/l/wtrch?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=shopify-pnl-reconciliation-excel)** to save local monthly snapshots, customize your SKU catalog permanently, keep sensitive financial data 100% offline, and roll your baseline numbers forward every month-end in under 15 minutes.

---

## The Business Logic & Methodology: Fixing E-Commerce Profit Blind Spots (For Non-Accountants)

You do not need a degree in accounting to run a profitable Shopify brand—but relying solely on your **Shopify Analytics dashboard** or your **bank account balance** creates dangerous commercial blind spots. 

Many founders and store operators scale ad spend or expand into new markets believing they are profitable, only to discover months later that cash is disappearing. This engine was built to translate complex accounting rules into plain, actionable business logic that protects you from **four common e-commerce profit illusions**:

### 1. The "Fake High Margin" Illusion (Why Bundles Silently Destroy ROAS)
* **The Blind Spot:** When you create a promotional bundle or multipack in Shopify (e.g., a 3-pack selling for $60), Shopify records the $60 sale, but often has no idea that the bundle actually pulled three separate items from your warehouse costing $18 + $12 = $30 in total. If that bundle's cost is left blank or recorded as $0 in your spreadsheet, your report claims you made **$60 in pure gross profit (100% margin)** instead of the real **$30 (50% margin)**.
* **The Business Consequence:** Thinking you have $60 of margin per order, you tell your media buyer to spend up to $40 per acquisition (CPA) on Meta or Google Ads. In reality, every single sale is losing you $10 in cash.
* **How Our Logic Fixes It:** The engine uses a **Bill of Materials (BOM) rollup**. You only enter the cost of your single items once. Whenever a bundle sells, the workbook automatically adds up the exact cost of the individual pieces inside it—and triggers a loud warning if any bundle is missing its ingredient list.

### 2. The "Star Store vs. Loser Store" Illusion (Shared Expense & Currency Distortion)
* **The Blind Spot:** Suppose you run a US store (in USD) and a European store (in EUR). You pay $2,000/month for Klaviyo, Shopify apps, and a creative agency from your US credit card, even though both stores use those tools.
* **The Business Consequence:** Because the US store pays the whole bill, its profit looks weak, while the European store looks like a high-margin winner because it gets a "free ride" on software and marketing overhead. Worse, mixing EUR revenue with USD expenses without a locked exchange rate makes your margins swing wildly based on how you copy-paste numbers.
* **How Our Logic Fixes It:** You simply tag an expense as "Shared" and set a fair split rule once (for example, 60% US / 40% Europe). The engine automatically converts currencies at a standardized rate and divides the bill fairly, showing you which store is genuinely generating cash on its own merits.

### 3. The "Invisible Cash Leak" Illusion (Why Your Expense List Is Never Complete)
* **The Blind Spot:** Most small businesses track expenses by typing invoices into a spreadsheet. But what about the annual SaaS tool that auto-renewed on Wise, the extra Meta ad threshold charge, or the hidden international wire fee? If you forget to type it into your expense tab, your P&L report still looks "clean" and error-free—it just overstates your net profit.
* **The Business Consequence:** You make hiring or inventory purchasing decisions based on phantom profits that have already left your bank account.
* **How Our Logic Fixes It:** Instead of trusting human memory, the workbook forces a **two-way handshake** between your expense list and your actual **Bank / Wise statement CSV**. If money left your bank account but isn't on your expense list, the engine highlights the exact transaction as an "Unmatched Item" so nothing slips through the cracks.

### 4. Summary of the 5-Step Commercial Decision Framework

| Core Business Question | Plain-English Methodology | Commercial Decision Protected |
| :--- | :--- | :--- |
| **1. Can I trust my sales numbers?** | Cross-check raw Shopify CSV exports against official monthly platform summaries. | Prevents making inventory or budget decisions on incomplete or truncated sales exports. |
| **2. Am I actually making money on every SKU & Bundle?** | Link every sold item and bundle back to its true component unit cost. | Stops you from scaling unprofitable ad campaigns on products with understated COGS. |
| **3. Which store deserves more capital?** | Convert all currencies to a single baseline and split shared overhead fairly. | Ensures you invest growth capital into the genuinely profitable region, not the subsidized one. |
| **4. Where did my actual cash go?** | Match every recorded expense against real bank and Wise withdrawals. | Exposes forgotten software subscriptions, billing errors, and unrecorded operating costs. |
| **5. What changed since last month?** | Compare current margins and expense categories against last month's locked baseline. | Catches fulfillment cost creep or margin compression early before it hurts cash flow. |

*Important Scope Note: This engine is a management decision-support and financial reconciliation tool. It empowers operators to see true unit economics before making commercial bets, but it does not replace statutory tax filing, formal GAAP/IFRS inventory audits, or certified public accounting (CPA) sign-offs.*

---

## Who This Is For: Target E-Commerce Roles & Use Cases

This **Shopify P&L template and reconciliation tool** is tailored for specific e-commerce operators and finance professionals who need enterprise-grade visibility without enterprise software bloat:

- **Multi-Store Shopify & Shopify Plus Brand Owners:** Managing separate regional storefronts (e.g., North America in USD, UK/EU in EUR, MENA in AED) who need a consolidated view of true net profit and shared overhead allocation.
- **E-Commerce Fractional CFOs & Finance Managers:** Tasked with building a standardized, audit-ready **monthly management reporting package** and variance analysis for DTC founders or board investors without spending 20 hours cleaning CSV files.
- **Cross-Border E-Commerce Bookkeepers & Accountants:** Who need a structured **Shopify-to-Bank/Wise reconciliation worksheet** to catch missing invoices, duplicate payouts, and multi-currency FX discrepancies before closing the general ledger in Xero or QuickBooks.
- **DTC Operations & Merchandising Managers:** Who frequently launch promotional kits, multipacks, and seasonal bundles and need an accurate **SKU & Bundle COGS calculator** to protect gross margins before approving ad spend targets.
- **Bootstrapped Solo Founders & Analysts (Zero Macros / No-Code):** Who want an immediate, transparent **Excel 365 dynamic-array financial model** (zero VBA macros, zero security popups) or a zero-setup browser tool to audit store unit economics today.

---

## Why I Built This E-Commerce Financial Engine

Two Shopify stores can appear highly profitable in isolation while the underlying accounting records tell a completely different story. Product-level CSV exports frequently fail to reconcile with the Shopify Analytics overview. A high-volume Bundle may contain three physical products but carry zero component-level COGS in the system. Shared SaaS subscriptions may hit one corporate card even though two regional storefronts rely on them. Meanwhile, Wise and bank statements routinely reveal operating charges that never reached the manual expense tracker.

These are not minor spreadsheet-formatting annoyances—they directly distort your **reported net margin** and trigger costly mistakes in **paid acquisition budgets (CAC/ROAS)**, **SKU pricing strategy**, **international store expansion**, and **operating cash flow management**.

I engineered this workbook as **productized financial reasoning**: a repeatable, formula-driven pipeline covering SKU cost mapping, multi-currency FX normalization, shared OPEX allocation, bank statement reconciliation, and month-over-month variance analysis. Instead of rebuilding fragile formulas every month-end, you follow a locked operational sequence and focus 100% of your energy on investigating the exceptions surfaced by the engine.

---

## Technical Details & Excel Workbook Architecture

<details>
<summary><strong>Click to expand: For technical reviewers, financial modelers, Excel practitioners, and collaborators</strong></summary>

### Workbook Architecture (7-Sheet Modular Design)

The Excel workbook contains seven core worksheets organized into four strict operational layers (Control, Input, Reconciliation/Calculation, and Executive Output):

| Operational Layer | Worksheet Tab Name | Core Accounting & Data Responsibility |
| :--- | :--- | :--- |
| **1. Control & Validation** | `01_Control_Settings` | Reporting periods, base currencies, FX exchange rates, shared OPEX allocation ratios, variance tolerances, and global validation status dashboard. |
| **2. Sales Data Input** | `02_Shopify_Sales_Import` | Official Shopify monthly summary inputs, raw SKU-level CSV imports, SKU normalization, and platform sales reconciliation. |
| **3. Product Cost Master** | `03_Product_Cost_Master` | Individual SKU landed unit costs, Bundle Bills of Materials (BOM), dynamic Bundle COGS rollups, and missing-cost validation. |
| **4. Multi-Currency OPEX** | `04_Expense_FX_Input` | Operating expense categorization, multi-currency FX conversion (`USD`/`EUR`/`AED`), store-specific vs. shared cost rules, and input validation. |
| **5. Bank & Wise Audit** | `05_Bank_Wise_Recon` | Corporate bank and Wise CSV statement imports, automated expense ID matching, discrepancy flagging, and manual audit disposition logs. |
| **6. P&L Engine** | `06_PL_Calculation` | Automated dual-store Profit & Loss statements, gross/net margin metrics, month-over-month (MoM) variance calculations, and margin alerts. |
| **7. Executive Output** | `07_Monthly_Review` | Board-ready management summaries, core KPI scorecards, and dynamically filtered lists of unresolved reconciliation exceptions. |

#### Data Flow Architecture

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

#### Formula-Driven Calculation Model (No VBA / Dynamic Arrays)

The workbook relies exclusively on modern **Microsoft Excel 365 / Excel 2021+ dynamic-array formulas** to eliminate manual row-dragging and macro security risks:

- `XLOOKUP` and `XMATCH` for high-speed SKU cost lookups, currency rate pairing, expense category mapping, and bank transaction ID matching.
- `SUMIFS` and `COUNTIFS` for period-specific revenue aggregation, multi-component Bundle BOM cost rollups, and duplicate transaction ID detection.
- `FILTER` for dynamically generating real-time lists of unmatched bank/Wise transactions in the executive review tab.
- `IF` and `ABS` for automated tolerance checks and exception classification.
- The `#` dynamic spill operator for referencing expandable calculation arrays cleanly.

*System Compatibility Note: Requires Microsoft 365 or Excel 2021 (and later) desktop/web versions supporting dynamic arrays. Legacy Excel versions (2016/2019) without dynamic spill support are not compatible.*

### Three Accounting Traps That Catch Experienced E-Commerce Operators

#### Trap 1: Revenue Looks Accurate, but Product Gross Margin Is Overstated
- **Commercial Decision:** Scale Meta/TikTok ad spend aggressively because a promotional Bundle shows an 80%+ gross margin.
- **Hidden Failure:** The Shopify sales export captures the Bundle revenue, but the Product Cost Master lacks a mapped Bill of Materials (BOM) or valid component unit costs.

| Unit Economics Metric | Incomplete BOM Cost Mapping | Accurate Component Costing |
| :--- | :--- | :--- |
| **Bundle Retail Revenue** | $60.00 | $60.00 |
| **Recorded Landed COGS** | $0.00 (Unmapped) | $30.00 ($18 + $12 components) |
| **Reported Gross Profit** | $60.00 | $30.00 |
| **Reported Gross Margin** | **100.0%** (Illusion) | **50.0%** (Reality) |

- **Engine Safeguard:** Maps every Bundle SKU to its underlying child SKUs and quantities, flagging any unmapped component in `01_Control_Settings` before P&L review.

#### Trap 2: The Store With Higher Reported Net Profit Is Being Subsidized
- **Commercial Decision:** Shift inventory and marketing capital toward the European store because its reported net margin beats the International store.
- **Hidden Failure:** Shared operating expenses (e.g., a $1,000 software suite) are booked entirely against the International store, or converted using inconsistent exchange rates.
- **Engine Safeguard:** Standardizes shared OPEX via configurable allocation splits (e.g., 60% International / 40% European) and converts allocated costs using locked reporting exchange rates.

#### Trap 3: A "Clean" Expense Ledger Masks Unrecorded Bank Withdrawals
- **Commercial Decision:** Approve the monthly P&L distribution because every line item typed into the expense tab has a valid category and receipt.
- **Hidden Failure:** Internal ledger validation cannot detect expenses that were never entered in the first place (e.g., auto-billed SaaS tools or Wise FX fees).
- **Engine Safeguard:** Forces a transaction-level cross-check against raw bank and Wise CSV exports, isolating unmatched outflows for human disposition (e.g., missing expense vs. internal balance transfer).

### Illustrative Multi-Store Case Study Scenario

Consider an e-commerce operator managing an International Shopify store (reporting in `USD`) and a European Shopify store (reporting in `EUR`):

| Model Parameter / Business Assumption | Configured Case Study Value |
| :--- | :--- |
| **International Store Monthly Orders** | 1,400 orders |
| **European Store Monthly Orders** | 800 orders |
| **International Store Base Currency** | `USD` |
| **European Store Base Currency** | `EUR` |
| **USD-to-EUR Reporting Exchange Rate** | `0.9091` |
| **Shared OPEX Allocation Ratio (Intl / EU)** | `60%` / `40%` |
| **Reconciliation Variance Tolerance** | `5.00` (in base reporting currency) |
| **Target Net Profit Margin Benchmark** | `15.0%` |

### Formula Reference & Audit Rules

#### 1. Dynamic Bundle BOM Cost Calculation

**Business purpose:** Roll up the exact landed cost of a Bundle from its child component SKUs dynamically.

```excel
=IF(A18:A200="",0,
   IF(C18:C200="组合Bundle",
      SUMIFS(F4#,A4:A50,A18:A200),
      0))
```

*Key dependencies: Accurate Bundle classification in `03_Product_Cost_Master`, valid child SKU mappings, populated component quantities, and verified unit costs.*

#### 2. Automated Control & Validation Framework

| Validation Domain | Automated Check Performed | Financial Risk Mitigated |
| :--- | :--- | :--- |
| **Reporting Period Lock** | Verifies selected month against imported CSV transaction dates. | Prevents cross-period cutoff contamination in monthly P&Ls. |
| **Shopify Sales Integrity** | Compares summed CSV SKU revenue against manual Shopify summary totals. | Detects truncated CSV exports or missing store attribution. |
| **SKU & Bundle Costing** | Checks that all active SKUs and Bundle BOM components have non-zero unit costs. | Eliminates overstated gross profit caused by unmapped COGS. |
| **Multi-Currency FX** | Validates currency ISO codes (`USD`, `EUR`, `AED`) and positive conversion rates. | Prevents broken currency math across international stores. |
| **Shared OPEX Splits** | Confirms store allocation percentages sum to 100% where applicable. | Prevents double-counting or omitting shared overhead costs. |
| **Bank & Wise Matching** | Flags unmatched statement lines, duplicate IDs, and variances above tolerance. | Ensures complete capture of real cash outflows and fees. |

### Operational Safeguards & Best Practices

- **Preserve Raw CSV Exports:** Archive untouched monthly Shopify, Wise, and bank CSV files alongside each dated Excel workbook copy for audit traceability.
- **Strict Separation of Inputs & Formulas:** Never hardcode numbers over dynamic-array spill ranges (`#`); log all adjustments through designated input columns.
- **Document Audit Dispositions:** When an unmatched bank transaction is confirmed as an internal transfer or prior-period accrual, record the exact reason in `05_Bank_Wise_Recon`.

</details>

---

## About the Creator & Theseus Workshop

I build lightweight, high-traceability **business decision-support tools and financial models** for operators who outgrow basic spreadsheets but do not need bloated enterprise ERP systems. Every tool is designed around one central question: *What disconnected data needs to be brought together right now to make the next commercial decision with confidence?*

### Explore More E-Commerce & Financial Decision Tools
Discover more open-source **Excel financial templates, unit economics calculators, and operational analytics tools** developed by [Theseus Workshop — Open-Source Business Decision & Financial Modeling Tools on GitHub](https://github.com/HyVoid).

---

## License

This project is released under the **Apache License 2.0**. See the [LICENSE — Apache 2.0 Open-Source Licensing Terms](./LICENSE) file for full permissions and redistribution terms.
