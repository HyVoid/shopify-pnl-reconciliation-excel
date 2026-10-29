import React, { useState } from 'react';
import { AppDataState, BomItem, SkuMasterItem } from '../../types';
import { ComputedBomItem, ComputedSkuMaster } from '../../utils/calculations';
import { StatusPill, InlineDataBar, InsightBox } from '../common/UIComponents';
import { Layers, Plus, Trash2, Box, PackagePlus } from 'lucide-react';

interface Sheet03ProductCostMasterProps {
  state: AppDataState;
  computedSkus: ComputedSkuMaster[];
  computedBoms: ComputedBomItem[];
  onUpdateState: (updater: (prev: AppDataState) => AppDataState) => void;
}

export const Sheet03ProductCostMaster: React.FC<Sheet03ProductCostMasterProps> = ({
  state,
  computedSkus,
  computedBoms,
  onUpdateState
}) => {
  const [showAddSkuModal, setShowAddSkuModal] = useState(false);
  const [showAddBomModal, setShowAddBomModal] = useState(false);

  // New SKU State
  const [newSku, setNewSku] = useState<Partial<SkuMasterItem>>({
    sku: '',
    productName: '',
    type: 'Single',
    singleFixedCostIntl: 5.00,
    originalCurrency: 'USD'
  });

  // New BOM State
  const [newBom, setNewBom] = useState<Partial<BomItem>>({
    bundleSku: state.skuList.find(s => s.type === 'Bundle')?.sku || '',
    componentSku: state.skuList.find(s => s.type === 'Single')?.sku || '',
    componentQty: 1
  });

  const maxVolume = Math.max(
    ...computedSkus.map(s => Math.max(s.intlUnitsSold, s.euUnitsSold)),
    1
  );

  const handleUpdateSingleCost = (sku: string, cost: number) => {
    onUpdateState(prev => ({
      ...prev,
      skuList: prev.skuList.map(s =>
        s.sku === sku ? { ...s, singleFixedCostIntl: cost } : s
      )
    }));
  };

  const handleDeleteSku = (sku: string) => {
    onUpdateState(prev => ({
      ...prev,
      skuList: prev.skuList.filter(s => s.sku !== sku),
      bomList: prev.bomList.filter(b => b.bundleSku !== sku && b.componentSku !== sku)
    }));
  };

  const handleAddSku = () => {
    if (!newSku.sku || !newSku.productName) return;
    const item: SkuMasterItem = {
      sku: newSku.sku.toUpperCase().trim(),
      productName: newSku.productName.trim(),
      type: newSku.type as any,
      singleFixedCostIntl: newSku.type === 'Single' ? Number(newSku.singleFixedCostIntl) || 0 : 0,
      originalCurrency: 'USD'
    };

    onUpdateState(prev => ({
      ...prev,
      skuList: [...prev.skuList, item]
    }));
    setShowAddSkuModal(false);
    setNewSku({ sku: '', productName: '', type: 'Single', singleFixedCostIntl: 5, originalCurrency: 'USD' });
  };

  const handleUpdateBomQty = (id: string, qty: number) => {
    onUpdateState(prev => ({
      ...prev,
      bomList: prev.bomList.map(b => (b.id === id ? { ...b, componentQty: qty } : b))
    }));
  };

  const handleDeleteBom = (id: string) => {
    onUpdateState(prev => ({
      ...prev,
      bomList: prev.bomList.filter(b => b.id !== id)
    }));
  };

  const handleAddBom = () => {
    if (!newBom.bundleSku || !newBom.componentSku) return;
    const bundleItem = state.skuList.find(s => s.sku === newBom.bundleSku);
    const item: BomItem = {
      id: `BOM-${Date.now().toString().slice(-4)}`,
      bundleSku: newBom.bundleSku,
      bundleName: bundleItem?.productName || 'Bundle Product',
      componentSku: newBom.componentSku,
      componentQty: Number(newBom.componentQty) || 1
    };

    onUpdateState(prev => ({
      ...prev,
      bomList: [...prev.bomList, item]
    }));
    setShowAddBomModal(false);
  };

  return (
    <div className="space-y-8 animate-fade-up">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.06em] text-[var(--color-muted)]">
            Sheet 03 / Product Cost Master
          </div>
          <h1 className="font-heading text-[28px] font-bold text-[var(--color-primary)] tracking-display mt-0.5">
            BOM Recipe Architecture & Unit Cost Master
          </h1>
          <p className="text-[13px] text-[var(--color-muted)] mt-1">
            Automate Bill of Materials (BOM) cost rollups for bundles, eliminate hidden cost leaks, and translate standard unit costs for both storefronts.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAddBomModal(true)}
            className="flex items-center gap-1.5 px-3 py-2 text-[12px] font-medium bg-[var(--color-surface)] hover:bg-[#F5F5F2] text-[var(--color-primary)] border border-[var(--color-border)] rounded-[var(--radius-sm)] shadow-xs transition-all cursor-pointer"
          >
            <PackagePlus className="w-4 h-4 text-[var(--color-accent)]" />
            <span>Add BOM Component</span>
          </button>
          <button
            onClick={() => setShowAddSkuModal(true)}
            className="flex items-center gap-1.5 px-3 py-2 text-[12px] font-medium bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white rounded-[var(--radius-sm)] shadow-xs transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Add Master SKU</span>
          </button>
        </div>
      </div>

      <InsightBox title="BOM Auto-Rollup Logic">
        Bundle unit standard costs are never hardcoded. When any component single SKU's purchase cost updates, every Bundle containing that component recalculates instantaneously across both stores.
      </InsightBox>

      {/* Block A: Bundle BOM Recipe Breakdown */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[var(--color-accent)]" />
            <h3 className="font-heading text-[18px] font-semibold text-[var(--color-primary)] tracking-heading">
              Bundle BOM Recipe Breakdown Matrix
            </h3>
          </div>
          <span className="text-[11px] font-mono text-[var(--color-muted)]">
            {computedBoms.length} Active Component Recipes
          </span>
        </div>

        <div className="table-container">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-label">
                  <th className="py-2.5 px-3">Parent Bundle SKU</th>
                  <th className="py-2.5 px-3">Bundle Name</th>
                  <th className="py-2.5 px-3">Component Single SKU</th>
                  <th className="py-2.5 px-3 text-right">Recipe Qty</th>
                  <th className="py-2.5 px-3 text-right">Component Unit Cost</th>
                  <th className="py-2.5 px-3 text-right">Component Subtotal</th>
                  <th className="py-2.5 px-3">Mapping Status</th>
                  <th className="py-2.5 px-2 text-center w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {computedBoms.map((bom, idx) => {
                  const isEven = idx % 2 === 0;
                  const isAnomaly = bom.mappingStatus !== '✅ Normal';
                  return (
                    <tr
                      key={bom.id}
                      className={`transition-colors ${
                        isAnomaly ? 'anomaly-row' : isEven ? 'bg-[var(--color-surface)]' : 'bg-[var(--color-bg)]/40'
                      } hover:bg-[#F5F5F2]`}
                    >
                      <td className="py-2 px-3 font-mono text-[12px] font-semibold text-[var(--color-primary)]">
                        {bom.bundleSku}
                      </td>
                      <td className="py-2 px-3 text-[12px] text-[var(--color-body-text)]">{bom.bundleName}</td>
                      <td className="py-2 px-3 font-mono text-[12px] text-[var(--color-accent)]">
                        {bom.componentSku}
                      </td>
                      <td className="py-2 px-3 text-right">
                        <input
                          type="number"
                          min="1"
                          value={bom.componentQty}
                          onChange={e => handleUpdateBomQty(bom.id, parseInt(e.target.value) || 1)}
                          className="input-editable px-2 py-0.5 text-right font-mono text-[12px] w-16"
                        />
                      </td>
                      <td className="py-2 px-3 text-right font-mono text-[12px] text-[var(--color-primary)]">
                        {bom.componentUnitCostIntl > 0 ? `$${bom.componentUnitCostIntl.toFixed(2)}` : 'N/A'}
                      </td>
                      <td className="py-2 px-3 text-right font-mono text-[12px] font-semibold text-[var(--color-primary)]">
                        ${bom.subtotalCostIntl.toFixed(2)}
                      </td>
                      <td className="py-2 px-3">
                        <StatusPill status={bom.mappingStatus} />
                      </td>
                      <td className="py-2 px-2 text-center">
                        <button
                          onClick={() => handleDeleteBom(bom.id)}
                          className="text-[var(--color-muted)] hover:text-[var(--color-negative)] transition-colors p-1"
                          title="Remove component"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Block B: All SKU Master List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Box className="w-4 h-4 text-[var(--color-accent)]" />
            <h3 className="font-heading text-[18px] font-semibold text-[var(--color-primary)] tracking-heading">
              Complete SKU Master List & Dual-Store Approved Costs
            </h3>
          </div>
          <span className="text-[11px] font-mono text-[var(--color-muted)]">
            {computedSkus.length} Master SKUs Registered
          </span>
        </div>

        <div className="table-container">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-[13px] border-collapse">
              <thead>
                <tr className="bg-[var(--table-header-bg)] border-b-2 border-[var(--table-header-sep)] text-[11px] font-semibold text-[var(--color-primary)] uppercase tracking-label">
                  <th className="py-3 px-3">Master SKU</th>
                  <th className="py-3 px-3">Product Name</th>
                  <th className="py-3 px-3">Type</th>
                  <th className="py-3 px-3 text-right">Single Fixed Cost</th>
                  <th className="py-3 px-3 text-right">Bundle Rolled Cost</th>
                  <th className="py-3 px-3 text-right">Final Cost (USD $)</th>
                  <th className="py-3 px-3 text-right">Final Cost (EUR €)</th>
                  <th className="py-3 px-3">Master Health</th>
                  <th className="py-3 px-3 text-right min-w-[130px]">Intl Units Sold</th>
                  <th className="py-3 px-3 text-right min-w-[130px]">EU Units Sold</th>
                  <th className="py-3 px-2 text-center w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {computedSkus.map((sku, idx) => {
                  const isEven = idx % 2 === 0;
                  const isAnomaly = sku.status !== '✅ Normal';
                  const isBundle = sku.type === 'Bundle';

                  return (
                    <tr
                      key={sku.sku}
                      className={`transition-colors ${
                        isAnomaly ? 'anomaly-row' : isEven ? 'bg-[var(--color-surface)]' : 'bg-[var(--color-bg)]/40'
                      } hover:bg-[#F5F5F2]`}
                    >
                      <td className="py-2.5 px-3 font-mono text-[12px] font-semibold text-[var(--color-primary)]">
                        {sku.sku}
                      </td>
                      <td className="py-2.5 px-3 text-[12px] text-[var(--color-body-text)]">{sku.productName}</td>
                      <td className="py-2.5 px-3 text-[11px]">
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-medium font-mono ${
                            isBundle
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : 'bg-slate-100 text-slate-700'
                          }`}
                        >
                          {sku.type}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono text-[12px]">
                        {isBundle ? (
                          <span className="text-[var(--color-muted)] italic">From BOM</span>
                        ) : (
                          <input
                            type="number"
                            step="0.01"
                            value={sku.singleFixedCostIntl}
                            onChange={e => handleUpdateSingleCost(sku.sku, parseFloat(e.target.value) || 0)}
                            className="input-editable px-2 py-0.5 text-right font-mono text-[12px] w-20"
                          />
                        )}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono text-[12px] text-[var(--color-muted)]">
                        {isBundle ? `$${sku.bundleRolledCostIntl.toFixed(2)}` : '-'}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono text-[12px] font-semibold text-[var(--color-primary)]">
                        ${sku.finalApprovedCostIntl.toFixed(2)}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono text-[12px] text-[var(--color-primary)]">
                        €{sku.finalApprovedCostEu.toFixed(2)}
                      </td>
                      <td className="py-2.5 px-3">
                        <StatusPill status={sku.status} />
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <InlineDataBar value={sku.intlUnitsSold} max={maxVolume} width="50px" />
                          <span className="font-mono text-[12px] text-[var(--color-primary)] tabular-nums">
                            {sku.intlUnitsSold.toLocaleString()}
                          </span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <InlineDataBar value={sku.euUnitsSold} max={maxVolume} width="50px" />
                          <span className="font-mono text-[12px] text-[var(--color-primary)] tabular-nums">
                            {sku.euUnitsSold.toLocaleString()}
                          </span>
                        </div>
                      </td>
                      <td className="py-2.5 px-2 text-center">
                        <button
                          onClick={() => handleDeleteSku(sku.sku)}
                          className="text-[var(--color-muted)] hover:text-[var(--color-negative)] transition-colors p-1"
                          title="Delete SKU"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add SKU Modal */}
      {showAddSkuModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="card-surface p-6 max-w-md w-full border border-[var(--color-border)] shadow-[var(--shadow-lg)]">
            <h3 className="font-heading text-[18px] font-bold text-[var(--color-primary)] mb-4">
              Add Master Product SKU
            </h3>

            <div className="space-y-3 text-[13px]">
              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  SKU Code
                </label>
                <input
                  type="text"
                  placeholder="e.g. SKU-CLEANSER-PRO"
                  value={newSku.sku}
                  onChange={e => setNewSku({ ...newSku, sku: e.target.value })}
                  className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px] font-mono"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Purifying Foam Cleanser"
                  value={newSku.productName}
                  onChange={e => setNewSku({ ...newSku, productName: e.target.value })}
                  className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Product Type
                </label>
                <select
                  value={newSku.type}
                  onChange={e => setNewSku({ ...newSku, type: e.target.value as any })}
                  className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px]"
                >
                  <option value="Single">Single Item (Fixed Cost)</option>
                  <option value="Bundle">Bundle (Assembled via BOM)</option>
                </select>
              </div>

              {newSku.type === 'Single' && (
                <div>
                  <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                    Single Unit Fixed Standard Cost (USD $)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={newSku.singleFixedCostIntl}
                    onChange={e => setNewSku({ ...newSku, singleFixedCostIntl: parseFloat(e.target.value) || 0 })}
                    className="input-editable w-full p-2 text-[13px] font-mono"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center justify-end gap-2 mt-6">
              <button
                onClick={() => setShowAddSkuModal(false)}
                className="px-3 py-1.5 text-[12px] text-[var(--color-muted)] hover:text-[var(--color-primary)]"
              >
                Cancel
              </button>
              <button
                onClick={handleAddSku}
                className="px-4 py-1.5 text-[12px] font-semibold bg-[var(--color-primary)] text-white rounded-[var(--radius-sm)]"
              >
                Add SKU
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add BOM Recipe Modal */}
      {showAddBomModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
          <div className="card-surface p-6 max-w-md w-full border border-[var(--color-border)] shadow-[var(--shadow-lg)]">
            <h3 className="font-heading text-[18px] font-bold text-[var(--color-primary)] mb-4">
              Add Component to Bundle BOM
            </h3>

            <div className="space-y-3 text-[13px]">
              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Target Bundle SKU
                </label>
                <select
                  value={newBom.bundleSku}
                  onChange={e => setNewBom({ ...newBom, bundleSku: e.target.value })}
                  className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px]"
                >
                  {state.skuList
                    .filter(s => s.type === 'Bundle')
                    .map(b => (
                      <option key={b.sku} value={b.sku}>
                        {b.sku} - {b.productName}
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Component Single SKU
                </label>
                <select
                  value={newBom.componentSku}
                  onChange={e => setNewBom({ ...newBom, componentSku: e.target.value })}
                  className="w-full p-2 border border-[var(--color-border)] rounded-[var(--radius-sm)] text-[13px]"
                >
                  {state.skuList
                    .filter(s => s.type === 'Single')
                    .map(s => (
                      <option key={s.sku} value={s.sku}>
                        {s.sku} - {s.productName} (${s.singleFixedCostIntl.toFixed(2)})
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase text-[var(--color-muted)] mb-1">
                  Quantity per Bundle
                </label>
                <input
                  type="number"
                  min="1"
                  value={newBom.componentQty}
                  onChange={e => setNewBom({ ...newBom, componentQty: parseInt(e.target.value) || 1 })}
                  className="input-editable w-full p-2 text-[13px] font-mono"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 mt-6">
              <button
                onClick={() => setShowAddBomModal(false)}
                className="px-3 py-1.5 text-[12px] text-[var(--color-muted)] hover:text-[var(--color-primary)]"
              >
                Cancel
              </button>
              <button
                onClick={handleAddBom}
                className="px-4 py-1.5 text-[12px] font-semibold bg-[var(--color-primary)] text-white rounded-[var(--radius-sm)]"
              >
                Save BOM Component
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
