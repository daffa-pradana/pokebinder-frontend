export default function MainSection({ children }: { children: React.ReactNode }) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {children}
    </main>
  );
}
