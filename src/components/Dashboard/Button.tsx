export default function Button({ actionName, actionIcon }: { actionName: string; actionIcon: string }) {
  return (
    <button className="flex-1 bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors rounded-2xl flex flex-col items-center justify-center p-4">
      <img src={actionIcon} alt={`${actionName} icon`} className="mb-2 w-8 h-8" />
      <span className="font-semibold">{actionName}</span>
    </button>
  );
}
