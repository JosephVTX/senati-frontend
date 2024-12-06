export default function Toolbar({ title }: { title: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-2xl font-bold">{title}</h2>
    </div>
  );
}