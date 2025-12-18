import { UserStatsProps } from "./UserStats.types";

function UserStat({ statLabel, statNumber }: { statLabel: string; statNumber: number; }) {
  return (
    <div className="flex-1 text-center border-r border-[#D3D3E5] last:border-r-0">
      <div className="text-4xl font-bold mb-2">{ statNumber }</div>
      <div className="text-xs text-[#9AA5B0]">{ statLabel }</div>
    </div>
  );
}

export default function UserStats({ userStatsData }: UserStatsProps) {
  return (
    <div className="lg:col-span-3 bg-[#F6F8FC] rounded-2xl p-6 flex justify-around items-center border border-[#D3D3E5]">
      <UserStat statLabel="Total Cards" statNumber={userStatsData.totalCards}/>
      <UserStat statLabel="Sets Collected" statNumber={userStatsData.setsCollected}/>
      <UserStat statLabel="Completion" statNumber={userStatsData.completionPercentage}/>
      <UserStat statLabel="Cards Worth (*market price)" statNumber={userStatsData.collectionsValue}/>
    </div>
  );
}
