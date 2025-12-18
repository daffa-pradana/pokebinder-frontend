import { useEffect, useRef, useState } from "react";

type Filters = {
  types: string[];    // e.g. ["Pokemon","Supporter","Item"]
  rarities: string[]; // e.g. ["MUR","SAR","SR"]
};

type Props = {
  availableTypes?: string[];    // showable options
  availableRarities?: string[];
  initial?: Filters;
  onChange?: (filters: Filters) => void;
  onReset?: () => void;
};

export default function FilterDropdown({
  availableTypes = ["Pokemon", "Supporter", "Item"],
  availableRarities = ["MUR", "SAR", "SR", "R", "C"],
  initial = { types: [], rarities: [] },
  onChange,
  onReset,
}: Props) {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>(initial);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => onChange?.(filters), [filters, onChange]);

  // close when clicking outside
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  function toggleOption(group: keyof Filters, value: string) {
    setFilters((prev) => {
      const set = new Set(prev[group]);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      return { ...prev, [group]: Array.from(set) };
    });
  }

  function reset() {
    setFilters({ types: [], rarities: [] });
    onReset?.();
  }

  return (
    <div className="relative inline-block text-sm" ref={panelRef}>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-gray-100 hover:shadow-md transition"
          aria-expanded={open}
        >
          {/* filter icon */}
          <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M10 18h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-gray-700">Filter</span>
          <svg className={`w-3 h-3 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none">
            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* small text showing active count */}
        <div className="text-xs text-gray-500">
          {filters.types.length + filters.rarities.length > 0
            ? `${filters.types.length + filters.rarities.length} active`
            : "No filters"}
        </div>
      </div>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-100 rounded-lg shadow-lg z-50 p-3">
          <div className="flex justify-between items-center mb-2">
            <strong className="text-sm text-gray-800">Filters</strong>
            <button
              onClick={reset}
              className="text-xs text-red-500 hover:underline"
            >
              Reset
            </button>
          </div>

          {/* Types */}
          <div className="mb-3">
            <div className="text-xs text-gray-500 mb-2">Card type</div>
            <div className="flex flex-wrap gap-2">
              {availableTypes.map((t) => {
                const active = filters.types.includes(t);
                return (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggleOption("types", t)}
                    className={`px-2.5 py-1 rounded-full text-xs border ${
                      active
                        ? "bg-[#ffefef] border-[#ffb5b4] text-[#c43d3b]"
                        : "bg-white border-gray-100 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Rarity */}
          <div className="mb-3">
            <div className="text-xs text-gray-500 mb-2">Rarity</div>
            <div className="flex flex-wrap gap-2">
              {availableRarities.map((r) => {
                const active = filters.rarities.includes(r);
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => toggleOption("rarities", r)}
                    className={`px-2.5 py-1 rounded-full text-xs border ${
                      active
                        ? "bg-[#ffefef] border-[#ffb5b4] text-[#c43d3b]"
                        : "bg-white border-gray-100 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {r}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Apply/Close */}
          <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
            <button
              onClick={() => setOpen(false)}
              className="px-3 py-1.5 rounded-md text-sm bg-gray-50 border border-gray-100 hover:bg-gray-100"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
