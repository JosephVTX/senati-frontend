import { Filters } from "@/components/shared/filters";
import { Pagination } from "@/components/shared/pagination";
import Toolbar from "@/components/shared/toolbar";
import { DataTable } from "@/components/ui/datatable";
import { useFetch } from "@/hooks/use-fetch";

export default function () {
  const { data: teachers } = useFetch<any>("/teachers");

  return (
    <div>
      <Toolbar title="Lista de Profesores" />
      <Filters />
      <DataTable value={teachers?.data}>
        <DataTable.Column header="Nombre" field="name" />
        <DataTable.Column header="Correo" field="email" />
        <DataTable.Column header="Teléfono" field="phone" />
        <DataTable.Column header="Dirección" field="address" />
        <DataTable.Column header="Acciones" body={DataTable.Actions} />
      </DataTable>
      <Pagination
        currentPage={teachers?.current_page}
        lastPage={teachers?.last_page}
      />
    </div>
  );
}
