export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center py-8 md:py-10">
      <div className="inline-block max-w-full text-center justify-center">
        {children}
      </div>
    </section>
  );
}
