import { Filters } from "@/components/shared/filters";
import { Pagination } from "@/components/shared/pagination";
import Toolbar from "@/components/shared/toolbar";
import { DataTable } from "@/components/ui/datatable";
import { useFetch } from "@/hooks/use-fetch";

export default function () {
  const { data: specializations } = useFetch<any>("/specializations");

  return (
    <div>
      <Toolbar title="Lista de Especializaciones" />
      <Filters />
      <DataTable value={specializations?.data}>
        <DataTable.Column header="Nombre" field="name" />
        <DataTable.Column header="Descripción" field="description" />
        <DataTable.Column header="Acciones" body={DataTable.Actions} />
      </DataTable>
      <Pagination
        currentPage={specializations?.current_page}
        lastPage={specializations?.last_page}
      />
    </div>
  );
}
