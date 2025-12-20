export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
      {children}
    </section>
  );
}
