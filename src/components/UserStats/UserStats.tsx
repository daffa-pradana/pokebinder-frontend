import { UserStatsProps } from "./UserStats.types";

export default function UserStats({ userStatsData }: UserStatsProps) {
  return (
    <div className="lg:col-span-3 bg-white rounded-2xl shadow-sm p-6 flex justify-around items-center">
      <div className="flex-1 text-center border-r border-gray-100 last:border-r-0">
        <div className="text-2xl font-bold">{ userStatsData.totalCards }</div>
        <div className="text-xs text-gray-400 uppercase tracking-wide">Total Cards</div>
      </div>
      <div className="flex-1 text-center border-r border-gray-100 last:border-r-0">
        <div className="text-2xl font-bold">{ userStatsData.setsCollected }</div>
        <div className="text-xs text-gray-400 uppercase tracking-wide">Sets Collected</div>
      </div>
      <div className="flex-1 text-center border-r border-gray-100 last:border-r-0">
        <div className="text-2xl font-bold">{ userStatsData.completionPercentage } %</div>
        <div className="text-xs text-gray-400 uppercase tracking-wide">Completion</div>
      </div>
      <div className="flex-1 text-center">
        <div className="text-2xl font-bold">$ { userStatsData.collectionsValue }</div>
        <div className="text-xs text-gray-400 uppercase tracking-wide">Value</div>
      </div>
    </div>
  );
}
