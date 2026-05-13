"use client";
import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { useCatalogue } from "./useCatalogue";
import { attributeNames } from "./constants";

// ─── Types (unchanged) ───────────────────────────────────────────────────────
type OptionType = { value: string; label: string };
type CatalogueItem = { model: string; [key: string]: any };

// ─── Small UI-only helpers (no data logic) ───────────────────────────────────
function SiteHeader({ menuOpen, onToggleMenu }: { menuOpen: boolean; onToggleMenu: () => void }) {
  const NAV = ["Compare", "Top Phones", "Rankings", "News", "About"];
  return (
    <header className="sticky top-0 z-50 bg-gray-950 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xl">📱</span>
          <span className="text-white font-bold text-lg tracking-tight">
            Spec<span className="text-blue-400">Arena</span>
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1">
          {NAV.map((link) => (
            <a
              key={link}
              href="#"
              className="px-3 py-1.5 rounded-md text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          <a
            href="#"
            className="hidden md:flex items-center justify-center w-8 h-8 rounded-md border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-colors text-sm"
            aria-label="Search"
          >
            🔍
          </a>
          {/* Burger */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-md border border-gray-700 text-gray-400 hover:text-white transition-colors"
            onClick={onToggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800">
          {NAV.map((link) => (
            <a
              key={link}
              href="#"
              className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 border-b border-gray-800 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function AdSlot({
  label,
  minHeight,
  accent = "blue",
}: {
  label: string;
  minHeight: number;
  accent?: "blue" | "green" | "amber";
}) {
  const colors = {
    blue: "bg-blue-950/40 border-blue-800/50 text-blue-400",
    green: "bg-emerald-950/40 border-emerald-800/50 text-emerald-400",
    amber: "bg-amber-950/40 border-amber-800/50 text-amber-400",
  };
  return (
    <div
      className={`w-full flex flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed ${colors[accent]}`}
      style={{ minHeight }}
    >
      <span className="text-xs font-bold tracking-widest uppercase opacity-60">
        Advertisement
      </span>
      <span className="text-xs opacity-40">{label}</span>
    </div>
  );
}

function SiteFooter() {
  const cols = [
    ["Compare", ["Compare Phones", "Top 10 Phones", "Best Camera Phones", "Best Battery Phones"]],
    ["Company", ["About Us", "Contact", "Privacy Policy", "Terms of Use"]],
    ["More", ["Advertise", "API Access", "Submit a Phone", "Sitemap"]],
  ] as const;
  return (
    <footer className="bg-gray-950 border-t border-gray-800 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-wrap gap-10">
        <div className="flex-shrink-0 w-44">
          <p className="text-white font-bold text-base mb-2">
            Spec<span className="text-blue-400">Arena</span>
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            Unbiased mobile specifications &amp; comparisons.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 flex-1">
          {cols.map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-1.5 min-w-[110px]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">
                {heading}
              </p>
              {links.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="text-xs text-gray-500 hover:text-gray-200 transition-colors leading-loose"
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-gray-800 px-4 py-3 max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <p className="text-[11px] text-gray-600">
          © {new Date().getFullYear()} SpecArena — specs for informational purposes only.
        </p>
        <div className="flex gap-4">
          {["Privacy", "Terms", "Cookies"].map((l) => (
            <a key={l} href="#" className="text-[11px] text-gray-600 hover:text-gray-400 transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
export default function CompareTable() {
  // ── All original state & data logic, untouched ───────────────────────────
  const items: CatalogueItem[] = useCatalogue();
  const [selected, setSelected] = useState<(OptionType | null)[]>([null, null]);
  const [dropdownCount, setDropdownCount] = useState(2);
  const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>({});

  const availableOptions = items
    .map((item) => ({ value: item.model, label: item.model }))
    .filter((option) => !selected.some((s) => s?.value === option.value));

  const handleChange = (opt: SingleValue<OptionType>, index: number) => {
    const copy = [...selected];
    copy[index] = opt;

    const activeSelections = [];
    for (let i = 0; i < dropdownCount; i++) {
      if (copy[i] !== null) activeSelections.push(copy[i]);
    }

    const newCount = Math.max(2, activeSelections.length);
    const newSelected = Array(4).fill(null);
    for (let i = 0; i < newCount; i++) newSelected[i] = activeSelections[i];

    setSelected(newSelected);
    setDropdownCount(newCount);
  };

  const addDropdown = () => {
    if (dropdownCount < 4) setDropdownCount(dropdownCount + 1);
  };

  // ── New UI-only state ─────────────────────────────────────────────────────
  const [menuOpen, setMenuOpen] = useState(false);
  const [highlightDiff, setHighlightDiff] = useState(false);

  // Derived: which spec keys have differing values across selected phones
  const diffKeys = new Set<string>();
  if (highlightDiff) {
    const activePhones = selected
      .slice(0, dropdownCount)
      .filter(Boolean)
      .map((s) => items.find((item) => item.model === s!.value));

    if (activePhones.length > 1) {
      Object.keys(attributeNames).forEach((key) => {
        const vals = activePhones.map((p) => p?.[key] ?? "");
        if (new Set(vals).size > 1) diffKeys.add(key);
      });
    }
  }

  const hasSelection = selected.some((s) => s !== null);

  if (items.length === 0)
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-gray-400 text-sm">
        Loading phones…
      </div>
    );

  // ── react-select shared styles (dark theme) ───────────────────────────────
  const selectWidth =
    dropdownCount === 2 ? "100%" : dropdownCount === 3 ? "240px" : "190px";

  const rsStyles = {
    control: (base: any) => ({
      ...base,
      backgroundColor: "#111827",
      borderColor: "#374151",
      color: "white",
      width: selectWidth,
      minHeight: "40px",
      boxShadow: "none",
      "&:hover": { borderColor: "#60a5fa" },
    }),
    menu: (base: any) => ({
      ...base,
      backgroundColor: "#111827",
      border: "1px solid #374151",
      width: selectWidth,
    }),
    singleValue: (base: any) => ({
      ...base,
      color: "white",
      fontWeight: 600,
      fontSize: "13px",
    }),
    placeholder: (base: any) => ({ ...base, color: "#6b7280", fontSize: "13px" }),
    valueContainer: (base: any) => ({ ...base, padding: "2px 10px" }),
    input: (base: any) => ({ ...base, color: "white" }),
    clearIndicator: (base: any) => ({ ...base, color: "#6b7280", "&:hover": { color: "#d1d5db" } }),
    dropdownIndicator: (base: any) => ({ ...base, color: "#6b7280" }),
    option: (base: any, state: any) => ({
      ...base,
      backgroundColor: state.isSelected ? "#1d4ed8" : state.isFocused ? "#1f2937" : "transparent",
      color: "white",
      fontSize: "13px",
    }),
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <SiteHeader menuOpen={menuOpen} onToggleMenu={() => setMenuOpen(!menuOpen)} />

      {/* ── TOP AD (Leaderboard 728×90) ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 pt-5 pb-2">
        <AdSlot label="Leaderboard · 728×90" minHeight={80} accent="blue" />
      </div>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-4 text-center">
        <p className="text-[10px] font-bold tracking-widest uppercase text-blue-400 mb-2">
          Mobile Comparison Tool
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
          Compare Any Phone, Side by Side
        </h1>
        <p className="text-sm text-gray-400">
          Full specifications for {items.length} smartphones — pick up to 4 devices.
        </p>
      </div>

      {/* ── MAIN ───────────────────────────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 pb-10 flex flex-col gap-5">

        {/* ── COMPARE CARD ─────────────────────────────────────────────────── */}
        <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">

          {/* Phone selector row */}
          <div className="flex flex-wrap items-end gap-4 px-5 py-5 border-b border-gray-800">
            {Array.from({ length: dropdownCount }).map((_, i) => (
              <div key={i} className="flex flex-col gap-1.5" style={{ flex: "1 1 180px", maxWidth: 300 }}>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Phone {i + 1}
                  </span>
                  {/* Allow removing slots 3 & 4 */}
                  {i >= 2 && (
                    <button
                      onClick={() => {
                        const copy = [...selected];
                        copy.splice(i, 1);
                        copy.push(null);
                        setSelected(copy);
                        setDropdownCount(dropdownCount - 1);
                      }}
                      className="text-gray-600 hover:text-red-400 text-xs transition-colors"
                      title="Remove slot"
                    >
                      ✕ Remove
                    </button>
                  )}
                </div>
                <Select
                  options={availableOptions}
                  value={selected[i] || null}
                  onChange={(opt) => handleChange(opt, i)}
                  classNamePrefix="compare-select"
                  placeholder={`Select phone ${i + 1}…`}
                  isClearable
                  styles={rsStyles}
                />
              </div>
            ))}

            {/* Add phone button */}
            {dropdownCount < 4 && (
              <button
                onClick={addDropdown}
                className="flex flex-col items-center justify-center gap-1 px-5 py-3 rounded-xl border border-dashed border-gray-700 text-gray-500 hover:border-blue-500 hover:text-blue-400 transition-colors text-xs font-medium self-stretch min-w-[90px]"
              >
                <span className="text-lg leading-none">＋</span>
                Add Phone
              </button>
            )}
          </div>

          {/* Controls bar: Highlight Differences toggle */}
          <div className="flex items-center justify-between flex-wrap gap-3 px-5 py-3 border-b border-gray-800 bg-gray-950/50">
            <p className="text-xs text-gray-500">
              {hasSelection
                ? `Comparing ${selected.filter(Boolean).length} phone${selected.filter(Boolean).length > 1 ? "s" : ""} · ${Object.keys(attributeNames).length} specs`
                : "Select phones above to compare specs"}
            </p>
            <label className="flex items-center gap-2 cursor-pointer select-none group">
              <span className="text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
                Highlight Differences
              </span>
              <button
                role="switch"
                aria-checked={highlightDiff}
                onClick={() => setHighlightDiff(!highlightDiff)}
                className={`relative w-9 h-5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
                  highlightDiff ? "bg-blue-500" : "bg-gray-700"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                    highlightDiff ? "translate-x-[18px]" : "translate-x-0.5"
                  }`}
                />
              </button>
            </label>
          </div>

          {/* Spec table */}
          {!hasSelection ? (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <span className="text-5xl">📊</span>
              <p className="text-base font-semibold text-gray-300">Select phones to start comparing</p>
              <p className="text-sm text-gray-600">Choose up to 4 devices using the dropdowns above</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm table-fixed">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="sticky left-0 z-20 bg-gray-900 w-[22%] px-5 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-gray-500 border-r border-gray-800">
                      Specification
                    </th>
                    {Array.from({ length: dropdownCount }).map((_, i) => (
                      <th
                        key={i}
                        className="px-4 py-3 text-center bg-gray-900 border-l border-gray-800"
                      >
                        {selected[i] ? (
                          <span className="text-sm font-bold text-white leading-tight block">
                            {selected[i]!.label}
                          </span>
                        ) : (
                          <span className="text-xs text-gray-600 italic">Not selected</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {Object.entries(attributeNames).map(([key, label], index) => {
                    const isDiff = diffKeys.has(key);
                    return (
                      <tr
                        key={key}
                        className={`border-b border-gray-800/60 transition-colors group ${
                          isDiff
                            ? "bg-blue-950/30 hover:bg-blue-950/50"
                            : index % 2 === 0
                            ? "bg-gray-900 hover:bg-gray-800/70"
                            : "bg-gray-950 hover:bg-gray-800/70"
                        }`}
                      >
                        {/* Spec label cell */}
                        <td className="sticky left-0 z-10 bg-inherit px-5 py-2.5 font-medium text-gray-300 border-r border-gray-800 whitespace-nowrap">
                          <span className="flex items-center gap-2">
                            {String(label)}
                            {isDiff && (
                              <span className="text-[9px] font-bold uppercase tracking-wider text-blue-400 bg-blue-900/50 px-1.5 py-0.5 rounded">
                                differs
                              </span>
                            )}
                          </span>
                        </td>

                        {/* Value cells — exact same data logic as original */}
                        {Array.from({ length: dropdownCount }).map((_, phoneIndex) => {
                          const phoneModel = selected[phoneIndex]?.value;
                          const val = phoneModel
                            ? items.find((item) => item.model === phoneModel)?.[key as keyof CatalogueItem] ?? "N/A"
                            : "";
                          return (
                            <td
                              key={`${key}-${phoneIndex}`}
                              className="px-4 py-2.5 text-center text-gray-200 border-l border-gray-800 font-mono text-xs leading-relaxed"
                            >
                              {String(val)}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ── MID AD (Rectangle 300×250) ───────────────────────────────────── */}
        <div className="flex justify-center">
          <div className="w-[300px]">
            <AdSlot label="Rectangle · 300×250" minHeight={250} accent="green" />
          </div>
        </div>

        {/* ── BOTTOM AD (Leaderboard 728×90) ───────────────────────────────── */}
        <AdSlot label="Leaderboard · 728×90" minHeight={90} accent="amber" />
      </main>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <SiteFooter />
    </div>
  );
}