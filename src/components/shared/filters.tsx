import useQuery from "@/hooks/use-query";
import { Button, buttonVariants } from "../ui/button";
import { Link } from "react-router";

export const Filters = () => {
  const [search, setSearch] = useQuery("search");
  return (
    <div className="flex justify-between items-end mb-6">
      <div>
        <p className="font-bold uppercase text-black">Buscar</p>
        <input
          type="search"
          className="form-input lg:w-96"
          defaultValue={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <Link
          to={`${window.location.pathname}/create`}
          className={buttonVariants()}
        >
          Crear
        </Link>
      </div>
    </div>
  );
};
