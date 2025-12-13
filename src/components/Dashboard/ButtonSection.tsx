export default function ButtonSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="lg:col-span-1 flex gap-4">
      {children}
    </div>
  );
}
