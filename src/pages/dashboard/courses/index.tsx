import { Filters } from "@/components/shared/filters";
import { Pagination } from "@/components/shared/pagination";
import Toolbar from "@/components/shared/toolbar";
import { DataTable } from "@/components/ui/datatable";
import { useFetch } from "@/hooks/use-fetch";

export default function () {
  const { data: courses } = useFetch<any>("/courses");
  return (
    <div>
      <Toolbar title="Lista de Cursos" />
      <Filters />
      <DataTable value={courses?.data}>
        <DataTable.Column header="Nombre" field="name" />
        <DataTable.Column header="Descripción" field="description" />
        <DataTable.Column header="Acciones" body={DataTable.Actions} />
      </DataTable>
      <Pagination
        currentPage={courses?.current_page}
        lastPage={courses?.last_page}
      />
    </div>
  );
}
