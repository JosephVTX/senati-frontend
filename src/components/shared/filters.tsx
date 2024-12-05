import useQuery from "@/hooks/use-query";

export const Filters = () => {
  const [search, setSearch] = useQuery("search");
  return (
    <div className="grid grid-cols-4 gap-2 mb-4">
      <div>
        <p className="font-bold uppercase text-black">Buscar</p>
        <input
          type="search"
          className="form-input"
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};
