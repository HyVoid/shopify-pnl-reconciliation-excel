[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Motor de Análisis y Conciliación de P&L para Doble Tienda de Shopify (Plantilla Gratuita de Excel y Calculadora Web)
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/838d93dd-8e60-48e3-ba3b-24747fcb717f" />


[![Licencia: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](./LICENSE)
![Plataforma: Navegador + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2251FF)
![Tipo de herramienta: Soporte de decisiones financieras de comercio electrónico](https://img.shields.io/badge/Tool-Financial%20Decision%20Support-051C2C)

**El Motor de Análisis y Conciliación de P&L para Doble Tienda de Shopify es una plantilla gratuita de Excel de pérdidas y ganancias (P&L) para comercio electrónico y una calculadora financiera basada en navegador, diseñada para operadores de Shopify con varias tiendas. Concilie automáticamente las exportaciones de ventas de Shopify, calcule el costo de los productos vendidos (COGS) a nivel de SKU y de Bundle, asigne los gastos operativos (OPEX) multidivisa y coteje las transacciones de los extractos de Wise o del banco en un flujo de trabajo contable mensual repetible, sin tener que comprar costosos sistemas ERP.**

> **Comience su auditoría mensual de beneficios de comercio electrónico en segundos.** Sin registro. Sin instalación de software. 100% gratuito.
>
> - [🌐 Inicie la Calculadora Web Interactiva y Gratuita de P&L de Shopify en Su Navegador (Vista Previa Instantánea en Sandbox)](https://hyvoid.github.io/shopify-pnl-reconciliation-excel/
> - [📥 Descargue el Libro de Trabajo de Excel Repetible de Conciliación Bancaria y de P&L para Varias Tiendas de Shopify (.xlsx)](https://theseusworkshop.com/l/wtrch?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=shopify-pnl-reconciliation-excel)

Tanto la calculadora web interactiva como el libro de trabajo descargable de Microsoft Excel resuelven el mismo desafío contable central del comercio electrónico: transformar **exportaciones de ventas CSV fragmentadas de Shopify**, **economía unitaria de SKU**, **gastos multidivisa de divisas (USD, EUR, AED)** y **registros de pagos de Wise/banco** en un **estado mensual de P&L de gestión** trazable y listo para auditoría. Mientras que la versión de navegador ofrece un sandbox instantáneo sin configuración, la plantilla de Excel está diseñada para el registro financiero permanente sin conexión, cálculos automatizados de cierre de mes y conciliación granular a nivel de transacción.

---

## Qué Rastrea Esta Plantilla de Contabilidad de Costos y P&L de Shopify (Mapeo de Puntos Críticos a Soluciones)

| Punto Crítico Financiero del Comercio Electrónico | Punto Ciego Contable de Alta Frecuencia | Seguimiento y Resolución Automatizados en Este Motor |
| :--- | :--- | :--- |
| **Distorsión de Rentabilidad entre Varias Tiendas** | Dificultad para comparar una tienda internacional (USD) con una tienda europea (EUR) de forma equitativa. | **Economía Unitaria a Nivel de Tienda:** Rastrea los ingresos brutos, el COGS en destino, el beneficio bruto, el OPEX asignado, el margen de beneficio neto y el beneficio promedio por pedido en dos escaparates. |
| **COGS de Bundle y Kit Sin Mapear** | Los SKU empaquetados muestran un costo de $0 en los informes básicos de Shopify, inflando artificialmente los márgenes brutos y engañando la inversión publicitaria (ROAS). | **Cálculo Automatizado de la Lista de Materiales (BOM) del Bundle:** Calcula dinámicamente el COGS real del Bundle a partir de las cantidades y los costos unitarios de los SKU componentes individuales mediante el mapeo de la Lista de Materiales (BOM). |
| **Caos de Gastos Multidivisa** | Las suscripciones SaaS, las tarifas de 3PL y las facturas publicitarias pagadas en USD, EUR y AED se mezclan sin tipos de cambio estandarizados. | **Normalización de Divisas y Asignación de OPEX Centralizadas:** Convierte los gastos en divisas extranjeras a una moneda de reporte unificada y divide los gastos generales compartidos mediante porcentajes personalizados (por ejemplo, 60%/40%). |
| **Discrepancias en las Exportaciones CSV de Shopify** | Las exportaciones CSV a nivel de producto no coinciden con el resumen de ventas mensual de Shopify Analytics debido a filas omitidas o cortes de tiempo. | **Conciliación de Ventas con la Plataforma:** Verifica los totales de ventas a nivel de SKU importados contra las cifras oficiales del resumen mensual de Shopify, activando alertas de variación por encima de su umbral de tolerancia. |
| **Fugas Ocultas de Tarifas Bancarias y de Wise** | Los cargos SaaS recurrentes, la inversión publicitaria o las tarifas de transferencia de Wise aparecen en los extractos bancarios pero se olvidan en el registro manual de gastos. | **Cotejo de Extractos Bancarios y de Wise:** Concilia los gastos operativos declarados con los registros de transacciones CSV reales del banco y de Wise, marcando retiros sin cotejar, variaciones de importe e identificadores duplicados. |
| **Erosión de Márgenes No Detectada** | El aumento de costos mes a mes (MoM) en envíos, cumplimiento o marketing pasa desapercibido hasta que el flujo de caja se agota. | **Alertas de Variación MoM y de Margen:** Calcula automáticamente los cambios de beneficio mes a mes, la compresión de márgenes y los picos de gastos con umbrales de alerta configurables. |

---

## Problemas Comunes de Contabilidad y Conciliación entre Varias Tiendas de Shopify Resueltos

| Problema Contable del Comercio Electrónico | Hoja de Cálculo Manual / Reporte Estándar de Shopify (Sin Esta Herramienta) | Motor de P&L de Doble Tienda Automatizado (Con Esta Herramienta) |
| :--- | :--- | :--- |
| **Los Totales de Ventas de Shopify No Coinciden con las Exportaciones CSV** | Las exportaciones CSV a nivel de producto descartan silenciosamente pedidos cancelados, reembolsos parciales o registros desplazados por zona horaria sin advertir al analista. | **Conciliación Automatizada de Ventas de Arriba Hacia Abajo:** Compara los totales brutos/netos mensuales oficiales de Shopify directamente con las importaciones CSV agregadas a nivel de SKU y marca las discrepancias que superen su tolerancia. |
| **Los COGS de Bundle y Multipack Están Incompletos** | Los bundles promocionales y los multipacks tienen costos de $0 o estimados a mano, exagerando el margen bruto del producto entre un 30% y un 50%. | **Cálculo Dinámico de Costos por Componentes (BOM):** Multiplica los costos unitarios de los SKU componentes por las cantidades del bundle automáticamente, aislando los SKU sin mapear en un panel de validación central antes del reporte. |
| **El OPEX Multidivisa Distorsiona las Comparaciones entre Tiendas** | Las facturas en USD, EUR y AED se suman en bruto o se convierten con tipos de cambio diarios inconsistentes en pestañas separadas. | **Control Estandarizado de Parámetros de Divisas:** Aplica tipos de cambio de reporte mensuales bloqueados a todas las declaraciones de gastos y registros de conciliación bancaria para una comparación transfronteriza consistente. |
| **Los Gastos Generales Compartidos Penalizan a una Sola Tienda** | Una tienda principal de Shopify absorbe el 100% de las facturas compartidas de Klaviyo, agencia o software, haciendo que la tienda secundaria parezca artificialmente rentable. | **Asignación Configurable de Gastos Compartidos:** Divide los gastos operativos compartidos de forma limpia entre las tiendas usando proporciones de asignación personalizables (por ejemplo, 60% Internacional / 40% Europa). |
| **Cargos Bancarios y de Wise No Registrados Devoran el Flujo de Caja** | El libro de gastos manual omite herramientas SaaS de renovación automática, comisiones por transacciones extranjeras o cargos publicitarios que llegan a Wise y a las tarjetas corporativas. | **Auditoría de Banco y Wise a Nivel de Transacción:** Coteja las líneas del extracto bancario/de Wise con los identificadores de gasto para exponer gastos no registrados, entradas duplicadas y brechas de liquidación de divisas. |
| **El Cierre de Mes Toma Días de Reparación de Fórmulas** | Los gerentes financieros reconstruyen cadenas de `VLOOKUP`, corrigen errores `#REF!` rotos y reescriben los comentarios ejecutivos desde cero cada mes. | **Flujo de Trabajo Repetible de Matrices Dinámicas:** Bloquea modelos de `XLOOKUP`, `SUMIFS` y `FILTER` para que simplemente pegue los nuevos CSV mensuales, borre las excepciones marcadas y genere resúmenes de gestión instantáneos. |

---

## Tutorial Paso a Paso: Cómo Ejecutar Su Conciliación Mensual de P&L y Bancaria de Shopify

Este sistema está diseñado como un **flujo de trabajo de cierre de mes repetible** en lugar de una calculadora desechable. Siga este tutorial de 4 pasos para auditar sus cifras, comenzando con una prueba en el navegador sin riesgo y pasando a la plantilla de Excel permanente para la contabilidad mensual continua.

### Paso 1: Pruebe la Lógica y Configure los Parámetros de Reporte (`01_Control_Settings`)
**Acción:** [Inicie la Calculadora Interactiva Gratuita en el Navegador](https://hyvoid.github.io/shopify-pnl-reconciliation-excel/ para explorar los datos de muestra precargados, o abra la pestaña `01_Control_Settings` en su libro de trabajo.  
Defina su **mes de reporte**, **mes de referencia de comparación**, **monedas base de reporte (USD/EUR)**, **tipos de conversión de divisas mensuales**, **división de asignación de OPEX compartido** (ejemplo predeterminado: `60% / 40%`), **umbral de tolerancia de conciliación** (predeterminado: `5.00`) y **disparadores de advertencia de margen de beneficio neto**.

### Paso 2: Importe los CSV de Ventas de Shopify, los Costos en Destino de SKU y los Extractos Bancarios
**Acción:** Rellene las cuatro hojas de trabajo de entrada de datos estandarizadas con sus exportaciones de comercio electrónico sin procesar:
1. **`02_Shopify_Sales_Import`:** Pegue sus exportaciones CSV de ventas a nivel de producto de Shopify para ambas tiendas.
2. **`03_Product_Cost_Master`:** Ingrese los costos unitarios en destino de cada SKU y defina los mapeos de componentes de su **Lista de Materiales (BOM) del Bundle**.
3. **`04_Expense_FX_Input`:** Registre los gastos operativos mensuales (marketing, SaaS, 3PL, nómina) en sus monedas de facturación originales (`USD`, `EUR`, `AED`) y etiquételos como específicos de una tienda o compartidos.
4. **`05_Bank_Wise_Recon`:** Importe sus **extractos CSV multidivisa corporativos del banco y de Wise** mensuales usando identificadores de referencia de transacción preservados.

### Paso 3: Audite las Discrepancias y Revise los Márgenes de P&L de Doble Tienda
**Acción:** Revise primero el **Panel de Estado de Validación Global** en `01_Control_Settings`. Resuelva todas las excepciones marcadas, como SKU nuevos sin mapear, costos de componentes de Bundle faltantes, categorías de OPEX inválidas o retiros de Wise/bancarios sin cotejar, antes de confiar en el resultado final.  
Una vez que las comprobaciones de validación pasen, inspeccione **`06_PL_Calculation`** para ver los estados de P&L lado a lado de cada tienda y **`07_Monthly_Review`** para el comentario de variación ejecutivo y los elementos de conciliación abiertos.

### Paso 4: Descargue la Plantilla de Excel Reutilizable para el Archivado Mensual Permanente
**Acción:** Una vez que haya validado cómo el motor detecta las fugas de beneficios ocultas en la vista previa del navegador, pase a la hoja de cálculo sin conexión para sus registros comerciales reales.  
👉 **[Descargue el Libro de Trabajo de Excel Completo de P&L para Doble Tienda de Shopify (.xlsx)](https://theseusworkshop.com/l/wtrch?utm_source=github&utm_medium=GitHub%20README&utm_campaign=readme%20new%20launch&utm_content=shopify-pnl-reconciliation-excel)** para guardar instantáneas mensuales locales, personalizar su catálogo de SKU de forma permanente, mantener los datos financieros sensibles 100% sin conexión y trasladar sus cifras de referencia cada cierre de mes en menos de 15 minutos.

---

## La Lógica de Negocio y la Metodología: Solucionando los Puntos Ciegos de Beneficio del Comercio Electrónico (Para No Contadores)

No necesita un título en contabilidad para dirigir una marca de Shopify rentable, pero depender únicamente de su **panel de Shopify Analytics** o del **saldo de su cuenta bancaria** crea peligrosos puntos ciegos comerciales. 

Muchos fundadores y operadores de tiendas aumentan la inversión publicitaria o se expanden a nuevos mercados creyendo que son rentables, solo para descubrir meses después que el dinero está desapareciendo. Este motor fue construido para traducir reglas contables complejas en una lógica de negocio clara y práctica que lo protege de **cuatro ilusiones comunes de beneficio del comercio electrónico**:

### 1. La Ilusión del "Margen Alto Falso" (Por Qué los Bundles Destruyen Silenciosamente el ROAS)
* **El Punto Ciego:** Cuando crea un bundle promocional o multipack en Shopify (por ejemplo, un paquete de 3 que se vende a $60), Shopify registra la venta de $60, pero a menudo no tiene idea de que el bundle en realidad sacó tres artículos separados de su almacén con un costo de $18 + $12 = $30 en total. Si el costo de ese bundle se deja en blanco o se registra como $0 en su hoja de cálculo, su informe afirma que obtuvo **$60 de beneficio bruto puro (margen del 100%)** en lugar de los **$30 reales (margen del 50%)**.
* **La Consecuencia Comercial:** Creyendo que tiene $60 de margen por pedido, le dice a su comprador de medios que gaste hasta $40 por adquisición (CPA) en anuncios de Meta o Google Ads. En realidad, cada venta le está haciendo perder $10 en efectivo.
* **Cómo Nuestra Lógica lo Soluciona:** El motor utiliza un **cálculo de Lista de Materiales (BOM)**. Usted solo ingresa el costo de sus artículos individuales una vez. Cada vez que se vende un bundle, el libro de trabajo suma automáticamente el costo exacto de las piezas individuales que contiene y activa una advertencia clara si a algún bundle le falta su lista de ingredientes.

### 2. La Ilusión de la "Tienda Estrella vs. Tienda Perdedora" (Distorsión de Gastos Compartidos y Divisas)
* **El Punto Ciego:** Suponga que dirige una tienda en EE. UU. (en USD) y una tienda europea (en EUR). Usted paga $2,000/mes por Klaviyo, las aplicaciones de Shopify y una agencia creativa desde su tarjeta de crédito estadounidense, aunque ambas tiendas usan esas herramientas.
* **La Consecuencia Comercial:** Debido a que la tienda de EE. UU. paga toda la factura, su beneficio parece débil, mientras que la tienda europea parece una ganadora de alto margen porque recibe un "viaje gratis" en los gastos generales de software y marketing. Peor aún, mezclar ingresos en EUR con gastos en USD sin un tipo de cambio bloqueado hace que sus márgenes oscilen salvajemente según cómo copie y pegue los números.
* **Cómo Nuestra Lógica lo Soluciona:** Simplemente etiqueta un gasto como "Compartido" y establece una regla de división justa una vez (por ejemplo, 60% EE. UU. / 40% Europa). El motor convierte automáticamente las divisas a un tipo estandarizado y divide la factura de forma justa, mostrándole qué tienda genera genuinamente efectivo por sus propios méritos.

### 3. La Ilusión de la "Fuga de Efectivo Invisible" (Por Qué Su Lista de Gastos Nunca Está Completa)
* **El Punto Ciego:** La mayoría de las pequeñas empresas rastrean los gastos escribiendo facturas en una hoja de cálculo. Pero, ¿qué pasa con la herramienta SaaS anual que se renovó automáticamente en Wise, el cargo adicional del umbral publicitario de Meta o la comisión bancaria internacional oculta? Si olvida escribirlo en su pestaña de gastos, su informe de P&L sigue pareciendo "limpio" y sin errores, solo que exagera su beneficio neto.
* **La Consecuencia Comercial:** Toma decisiones de contratación o compra de inventario basándose en beneficios fantasma que ya han salido de su cuenta bancaria.
* **Cómo Nuestra Lógica lo Soluciona:** En lugar de confiar en la memoria humana, el libro de trabajo fuerza un **apretón de manos bidireccional** entre su lista de gastos y su **extracto CSV real del banco / Wise**. Si el dinero salió de su cuenta bancaria pero no está en su lista de gastos, el motor resalta la transacción exacta como un "Elemento Sin Cotejar" para que nada se escape por las grietas.

### 4. Resumen del Marco de Decisión Comercial de 5 Pasos

| Pregunta Central de Negocio | Metodología en Lenguaje Sencillo | Decisión Comercial Protegida |
| :--- | :--- | :--- |
| **1. ¿Puedo confiar en mis cifras de ventas?** | Verifique las exportaciones CSV sin procesar de Shopify contra los resúmenes mensuales oficiales de la plataforma. | Evita tomar decisiones de inventario o presupuesto con exportaciones de ventas incompletas o truncadas. |
| **2. ¿Realmente estoy ganando dinero con cada SKU y Bundle?** | Vincule cada artículo y bundle vendido con su costo unitario real de componentes. | Le impide escalar campañas publicitarias no rentables en productos con COGS subestimados. |
| **3. ¿Qué tienda merece más capital?** | Convierta todas las divisas a una línea base única y divida los gastos generales compartidos de forma justa. | Garantiza que invierta capital de crecimiento en la región genuinamente rentable, no en la subsidiada. |
| **4. ¿A dónde fue realmente mi efectivo?** | Coteje cada gasto registrado contra los retiros reales del banco y de Wise. | Expone suscripciones de software olvidadas, errores de facturación y costos operativos no registrados. |
| **5. ¿Qué cambió desde el mes pasado?** | Compare los márgenes actuales y las categorías de gastos con la línea base bloqueada del mes pasado. | Detecta el aumento de costos de cumplimiento o la compresión de márgenes temprano, antes de que dañe el flujo de caja. |

*Nota Importante de Alcance: Este motor es una herramienta de soporte de decisiones de gestión y conciliación financiera. Permite a los operadores ver la economía unitaria real antes de hacer apuestas comerciales, pero no reemplaza la declaración fiscal legal, las auditorías formales de inventario GAAP/IFRS ni las aprobaciones de contadores públicos certificados (CPA).*

---

## Para Quién Es Esto: Roles Objetivo y Casos de Uso del Comercio Electrónico

Esta **plantilla de P&L de Shopify y herramienta de conciliación** está diseñada para operadores de comercio electrónico y profesionales financieros específicos que necesitan visibilidad de nivel empresarial sin la complejidad del software empresarial:

- **Propietarios de Marcas con Varias Tiendas de Shopify y Shopify Plus:** Gestionan escaparates regionales separados (por ejemplo, América del Norte en USD, Reino Unido/UE en EUR, MENA en AED) y necesitan una vista consolidada del beneficio neto real y de la asignación de gastos generales compartidos.
- **CFOs Fraccionales y Gerentes Financieros de Comercio Electrónico:** Encargados de construir un **paquete de reportes de gestión mensuales** estandarizado y listo para auditoría, y análisis de variación para fundadores DTC o inversores de la junta sin pasar 20 horas limpiando archivos CSV.
- **Contadores y Tenedores de Libros de Comercio Electrónico Transfronterizo:** Necesitan una **hoja de trabajo de conciliación Shopify-a-banco/Wise** estructurada para detectar facturas faltantes, pagos duplicados y discrepancias de divisas multidivisa antes de cerrar el libro mayor en Xero o QuickBooks.
- **Gerentes de Operaciones y Merchandising DTC:** Lanzan con frecuencia kits promocionales, multipacks y bundles de temporada y necesitan una **calculadora precisa de COGS de SKU y Bundle** para proteger los márgenes brutos antes de aprobar los objetivos de inversión publicitaria.
- **Fundadores Independientes y Analistas con Recursos Propios (Cero Macros / Sin Código):** Quieren un **modelo financiero de matrices dinámicas de Excel 365** inmediato y transparente (cero macros VBA, cero ventanas emergentes de seguridad) o una herramienta de navegador sin configuración para auditar la economía unitaria de la tienda hoy.

---

## Por Qué Construí Este Motor Financiero de Comercio Electrónico

Dos tiendas de Shopify pueden parecer muy rentables de forma aislada mientras que los registros contables subyacentes cuentan una historia completamente diferente. Las exportaciones CSV a nivel de producto con frecuencia no se concilian con la vista general de Shopify Analytics. Un Bundle de alto volumen puede contener tres productos físicos pero tener cero COGS a nivel de componentes en el sistema. Las suscripciones SaaS compartidas pueden cargarse a una sola tarjeta corporativa aunque dos escaparates regionales dependan de ellas. Mientras tanto, los extractos de Wise y del banco revelan rutinariamente cargos operativos que nunca llegaron al registro manual de gastos.

Estas no son molestias menores de formato de hoja de cálculo: distorsionan directamente su **margen neto reportado** y desencadenan errores costosos en **presupuestos de adquisición pagada (CAC/ROAS)**, **estrategia de precios de SKU**, **expansión internacional de tiendas** y **gestión del flujo de caja operativo**.

Diseñé este libro de trabajo como **razonamiento financiero productizado**: una tubería repetible basada en fórmulas que cubre el mapeo de costos de SKU, la normalización de divisas multidivisa, la asignación de OPEX compartido, la conciliación de extractos bancarios y el análisis de variación mes a mes. En lugar de reconstruir fórmulas frágiles cada cierre de mes, usted sigue una secuencia operativa bloqueada y concentra el 100% de su energía en investigar las excepciones que el motor detecta.

---

## Detalles Técnicos y Arquitectura del Libro de Trabajo de Excel

<details>
<summary><strong>Haga clic para expandir: Para revisores técnicos, modeladores financieros, practicantes de Excel y colaboradores</strong></summary>

### Arquitectura del Libro de Trabajo (Diseño Modular de 7 Hojas)

El libro de trabajo de Excel contiene siete hojas de trabajo principales organizadas en cuatro capas operativas estrictas (Control, Entrada, Conciliación/Cálculo y Salida Ejecutiva):

| Capa Operativa | Nombre de la Pestaña de la Hoja | Responsabilidad Contable y de Datos Central |
| :--- | :--- | :--- |
| **1. Control y Validación** | `01_Control_Settings` | Períodos de reporte, monedas base, tipos de cambio, proporciones de asignación de OPEX compartido, tolerancias de variación y panel de estado de validación global. |
| **2. Entrada de Datos de Ventas** | `02_Shopify_Sales_Import` | Entradas del resumen mensual oficial de Shopify, importaciones CSV sin procesar a nivel de SKU, normalización de SKU y conciliación de ventas de la plataforma. |
| **3. Maestro de Costos de Producto** | `03_Product_Cost_Master` | Costos unitarios en destino de cada SKU, Listas de Materiales (BOM) del Bundle, cálculos dinámicos de COGS del Bundle y validación de costos faltantes. |
| **4. OPEX Multidivisa** | `04_Expense_FX_Input` | Categorización de gastos operativos, conversión de divisas multidivisa (`USD`/`EUR`/`AED`), reglas de costos específicos de tienda vs. compartidos y validación de entradas. |
| **5. Auditoría de Banco y Wise** | `05_Bank_Wise_Recon` | Importaciones de extractos CSV del banco corporativo y de Wise, cotejo automatizado de identificadores de gasto, marcado de discrepancias y registros manuales de disposición de auditoría. |
| **6. Motor de P&L** | `06_PL_Calculation` | Estados de Pérdidas y Ganancias automatizados de doble tienda, métricas de margen bruto/neto, cálculos de variación mes a mes (MoM) y alertas de margen. |
| **7. Salida Ejecutiva** | `07_Monthly_Review` | Resúmenes de gestión listos para la junta, cuadros de mando de KPI principales y listas filtradas dinámicamente de excepciones de conciliación no resueltas. |

#### Arquitectura del Flujo de Datos

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

#### Modelo de Cálculo Basado en Fórmulas (Sin VBA / Matrices Dinámicas)

El libro de trabajo se basa exclusivamente en **fórmulas de matrices dinámicas modernas de Microsoft Excel 365 / Excel 2021+** para eliminar el arrastre manual de filas y los riesgos de seguridad de macros:

- `XLOOKUP` y `XMATCH` para búsquedas de costos de SKU de alta velocidad, emparejamiento de tipos de cambio, mapeo de categorías de gastos y cotejo de identificadores de transacciones bancarias.
- `SUMIFS` y `COUNTIFS` para la agregación de ingresos por período, cálculos de costos de Lista de Materiales (BOM) de Bundle con múltiples componentes y detección de identificadores de transacción duplicados.
- `FILTER` para generar dinámicamente listas en tiempo real de transacciones bancarias/de Wise sin cotejar en la pestaña de revisión ejecutiva.
- `IF` y `ABS` para comprobaciones de tolerancia automatizadas y clasificación de excepciones.
- El operador de desbordamiento dinámico `#` para referenciar matrices de cálculo expandibles de forma limpia.

*Nota de Compatibilidad del Sistema: Requiere Microsoft 365 o Excel 2021 (y posteriores) en versiones de escritorio/web compatibles con matrices dinámicas. Las versiones heredadas de Excel (2016/2019) sin soporte de desbordamiento dinámico no son compatibles.*

### Tres Trampas Contables que Atrapan a Operadores Experimentados de Comercio Electrónico

#### Trampa 1: Los Ingresos Parecen Precisos, pero el Margen Bruto del Producto Está Exagerado
- **Decisión Comercial:** Escalar agresivamente la inversión publicitaria en Meta/TikTok porque un Bundle promocional muestra un margen bruto del 80%+.
- **Falla Oculta:** La exportación de ventas de Shopify captura los ingresos del Bundle, pero el Maestro de Costos de Producto carece de una Lista de Materiales (BOM) mapeada o de costos unitarios de componentes válidos.

| Métrica de Economía Unitaria | Mapeo de Costos BOM Incompleto | Costeo Preciso por Componentes |
| :--- | :--- | :--- |
| **Ingresos Minoristas del Bundle** | $60.00 | $60.00 |
| **COGS Registrado en Destino** | $0.00 (Sin mapear) | $30.00 (componentes $18 + $12) |
| **Beneficio Bruto Reportado** | $60.00 | $30.00 |
| **Margen Bruto Reportado** | **100.0%** (Ilusión) | **50.0%** (Realidad) |

- **Salvaguarda del Motor:** Mapea cada SKU de Bundle a sus SKU hijos y cantidades subyacentes, marcando cualquier componente sin mapear en `01_Control_Settings` antes de la revisión de P&L.

#### Trampa 2: La Tienda con Mayor Beneficio Neto Reportado Está Siendo Subsidiada
- **Decisión Comercial:** Trasladar el capital de inventario y marketing hacia la tienda europea porque su margen neto reportado supera al de la tienda internacional.
- **Falla Oculta:** Los gastos operativos compartidos (por ejemplo, una suite de software de $1,000) se registran por completo contra la tienda internacional, o se convierten con tipos de cambio inconsistentes.
- **Salvaguarda del Motor:** Estandariza el OPEX compartido mediante divisiones de asignación configurables (por ejemplo, 60% Internacional / 40% Europeo) y convierte los costos asignados usando tipos de cambio de reporte bloqueados.

#### Trampa 3: Un Libro de Gastos "Limpio" Oculta Retiros Bancarios No Registrados
- **Decisión Comercial:** Aprobar la distribución mensual de P&L porque cada línea escrita en la pestaña de gastos tiene una categoría y un recibo válidos.
- **Falla Oculta:** La validación del libro interno no puede detectar gastos que nunca se ingresaron en primer lugar (por ejemplo, herramientas SaaS con facturación automática o tarifas de divisas de Wise).
- **Salvaguarda del Motor:** Fuerza una verificación cruzada a nivel de transacción contra las exportaciones CSV sin procesar del banco y de Wise, aislando las salidas sin cotejar para su disposición humana (por ejemplo, gasto faltante vs. transferencia interna de saldo).

### Escenario Ilustrativo de Estudio de Caso de Varias Tiendas

Considere un operador de comercio electrónico que gestiona una tienda internacional de Shopify (reportando en `USD`) y una tienda europea de Shopify (reportando en `EUR`):

| Parámetro del Modelo / Supuesto de Negocio | Valor Configurado del Estudio de Caso |
| :--- | :--- |
| **Pedidos Mensuales de la Tienda Internacional** | 1,400 pedidos |
| **Pedidos Mensuales de la Tienda Europea** | 800 pedidos |
| **Moneda Base de la Tienda Internacional** | `USD` |
| **Moneda Base de la Tienda Europea** | `EUR` |
| **Tipo de Cambio de Reporte USD-a-EUR** | `0.9091` |
| **Proporción de Asignación de OPEX Compartido (Intl / UE)** | `60%` / `40%` |
| **Tolerancia de Variación de Conciliación** | `5.00` (en la moneda base de reporte) |
| **Referencia de Margen de Beneficio Neto Objetivo** | `15.0%` |

### Referencia de Fórmulas y Reglas de Auditoría

#### 1. Cálculo Dinámico del Costo de la Lista de Materiales (BOM) del Bundle

**Propósito comercial:** Calcular el costo en destino exacto de un Bundle a partir de sus SKU componentes hijos de forma dinámica.

```excel
=IF(A18:A200="",0,
   IF(C18:C200="组合Bundle",
      SUMIFS(F4#,A4:A50,A18:A200),
      0))
```

*Dependencias clave: clasificación precisa de Bundle en `03_Product_Cost_Master`, mapeos de SKU hijos válidos, cantidades de componentes pobladas y costos unitarios verificados.*

#### 2. Marco Automatizado de Control y Validación

| Dominio de Validación | Comprobación Automatizada Realizada | Riesgo Financiero Mitigado |
| :--- | :--- | :--- |
| **Bloqueo de Período de Reporte** | Verifica el mes seleccionado contra las fechas de transacción del CSV importado. | Previene la contaminación por cortes entre períodos en los P&L mensuales. |
| **Integridad de Ventas de Shopify** | Compara los ingresos sumados del CSV a nivel de SKU con los totales manuales del resumen de Shopify. | Detecta exportaciones CSV truncadas o atribución de tienda faltante. |
| **Costeo de SKU y Bundle** | Verifica que todos los SKU activos y componentes de Lista de Materiales (BOM) del Bundle tengan costos unitarios distintos de cero. | Elimina el beneficio bruto exagerado causado por COGS sin mapear. |
| **Divisas Multidivisa** | Valida los códigos ISO de moneda (`USD`, `EUR`, `AED`) y los tipos de conversión positivos. | Previene cálculos de divisas rotos entre tiendas internacionales. |
| **Divisiones de OPEX Compartido** | Confirma que los porcentajes de asignación por tienda sumen 100% cuando corresponda. | Previene el doble conteo o la omisión de costos generales compartidos. |
| **Cotejo de Banco y Wise** | Marca líneas de extracto sin cotejar, identificadores duplicados y variaciones por encima de la tolerancia. | Garantiza la captura completa de las salidas de efectivo y tarifas reales. |

### Salvaguardas Operativas y Mejores Prácticas

- **Preserve las Exportaciones CSV Sin Procesar:** Archive los archivos CSV mensuales intactos de Shopify, Wise y del banco junto con cada copia fechada del libro de trabajo de Excel para la trazabilidad de la auditoría.
- **Separación Estricta de Entradas y Fórmulas:** Nunca codifique números sobre los rangos de desbordamiento de matrices dinámicas (`#`); registre todos los ajustes a través de las columnas de entrada designadas.
- **Documente las Disposiciones de Auditoría:** Cuando una transacción bancaria sin cotejar se confirme como una transferencia interna o una acumulación de un período anterior, registre la razón exacta en `05_Bank_Wise_Recon`.

</details>

---

## Sobre el Creador y Theseus Workshop

Construyo **herramientas de soporte de decisiones de negocio y modelos financieros** livianos y de alta trazabilidad para operadores que superan las hojas de cálculo básicas pero no necesitan sistemas ERP empresariales inflados. Cada herramienta está diseñada en torno a una pregunta central: *¿Qué datos desconectados deben reunirse ahora mismo para tomar la próxima decisión comercial con confianza?*

### Explore Más Herramientas de Decisión Financiera y de Comercio Electrónico
Descubra más **plantillas financieras de Excel de código abierto, calculadoras de economía unitaria y herramientas de análisis operativo** desarrolladas por [Theseus Workshop — Herramientas de Modelado Financiero y Decisión de Negocio de Código Abierto en GitHub](https://github.com/HyVoid).

---

## Licencia

Este proyecto se publica bajo la **Licencia Apache 2.0**. Consulte el archivo [LICENSE — Términos de Licencia de Código Abierto Apache 2.0](./LICENSE) para conocer los permisos completos y los términos de redistribución.
