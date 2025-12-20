import { CardDetailsProps } from "./CardDetails.types";

export default function CardDetails({ cardDetail }: CardDetailsProps) {
  return (
    <aside className="lg:col-span-4">
      <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-6">
        <div className="mx-auto bg-gray-200 rounded-lg mb-6 shadow-inner">
          <img src="https://asia.pokemon-card.com/id/archive/special/card/sv8a/assets/images/card/hero-card-6.png" />
        </div>
        <h2 className="text-xl font-bold text-center mb-1">{cardDetail.name}</h2>
        <div className="text-center mb-6">
          <span className="px-3 py-1 bg-gray-800 text-white text-xs rounded-full">{cardDetail.type}</span>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex justify-between py-2 border-b border-gray-50">
            <span className="text-gray-400">Illustrator</span>
            <span className="font-medium">{cardDetail.illustrator}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-50">
            <span className="text-gray-400">Set</span>
            <span className="font-medium">{cardDetail.set}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-gray-50">
            <span className="text-gray-400">Rarity</span>
            <span className="font-medium">{cardDetail.rarity}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-400">Lowest Price</span>
            <span className="font-medium text-green-600">${cardDetail.lowestPrice}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-400">Market Price</span>
            <span className="font-medium text-green-600">${cardDetail.marketPrice}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-gray-400">Graded Price</span>
            <span className="font-medium text-green-600">${cardDetail.gradedPrice}</span>
          </div>
        </div>

      </div>
    </aside>
  );
}
