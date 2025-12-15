import { UserStatsProps } from "./UserStats.types";

export default function UserStats({ userStatsData }: UserStatsProps) {
  return (
    <div className="lg:col-span-3 bg-[#F6F8FC] rounded-2xl p-6 flex justify-around items-center border border-[#D3D3E5]">
      <div className="flex-1 text-center border-r border-[#D3D3E5] last:border-r-0">
        <div className="text-4xl font-bold mb-2">{ userStatsData.totalCards }</div>
        <div className="text-xs text-[#9AA5B0]">Total Cards</div>
      </div>
      <div className="flex-1 text-center border-r border-[#D3D3E5] last:border-r-0">
        <div className="text-4xl font-bold mb-2">{ userStatsData.setsCollected }</div>
        <div className="text-xs text-[#9AA5B0]">Sets Collected</div>
      </div>
      <div className="flex-1 text-center border-r border-[#D3D3E5] last:border-r-0">
        <div className="text-4xl font-bold mb-2">{ userStatsData.completionPercentage } %</div>
        <div className="text-xs text-[#9AA5B0]">Completion</div>
      </div>
      <div className="flex-1 text-center">
        <div className="text-4xl font-bold mb-2">$ { userStatsData.collectionsValue }</div>
        <div className="text-xs text-[#9AA5B0]">Cards Worth (*market price)</div>
      </div>
    </div>
  );
}
