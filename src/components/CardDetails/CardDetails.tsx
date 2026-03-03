import { CardDetailsProps } from "./CardDetails.types";
import { POKEMON_TYPE_ICONS, POKEMON_TYPE_COLORS } from "@/constants/pokemonTypes";

export default function CardDetails({ cardDetail }: CardDetailsProps) {
  const typeIcon = POKEMON_TYPE_ICONS[cardDetail.type];
  const typeColor = POKEMON_TYPE_COLORS[cardDetail.type];
  const typeBadgeStyle = {
    border: `1.5px solid ${typeColor}`,
    backgroundColor: `${typeColor}26`,
    color: typeColor,
  };

  return (
    <aside className="lg:col-span-4">
      <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">
        <div className="mx-auto bg-gray-200 rounded-lg mb-6 shadow-inner">
          <img src={cardDetail.imageUrl} alt={cardDetail.name} />
        </div>
        <h2 className="text-xl font-bold text-center mb-1">{cardDetail.name}</h2>
        <div className="text-center mb-6 mt-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-sm rounded-xl" style={typeBadgeStyle}>
            {typeIcon && <img src={typeIcon} alt={cardDetail.type} className="w-5 h-5 rounded-full object-cover" />}
            {cardDetail.type}
          </span>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 shrink-0">Card Details</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="space-y-4">
            {[
              { label: "Illustrator", value: cardDetail.illustrator },
              { label: "Set", value: cardDetail.set },
              { label: "Rarity", value: cardDetail.rarity },
              { label: "Card No", value: cardDetail.cardNo },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="font-semibold text-gray-700 w-24 shrink-0">{label}</span>
                <span className="flex-1 bg-white border border-gray-200 rounded-xl px-3 py-2 text-gray-600 shadow-inner">
                  {value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-1">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 shrink-0">Prices</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          <div className="space-y-4">
            {[
              { label: "Lowest", value: cardDetail.lowestPrice },
              { label: "Market (Average)", value: cardDetail.marketPrice },
              { label: "Highest (Graded)", value: cardDetail.gradedPrice },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <span className="font-semibold text-gray-700 w-32 shrink-0">{label}</span>
                <span className="flex-1 bg-white border border-gray-200 rounded-xl px-3 py-2 text-gray-600 shadow-inner">
                  {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value)}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </aside>
  );
}
