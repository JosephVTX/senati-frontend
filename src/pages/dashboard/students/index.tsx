import { Filters } from "@/components/shared/filters";
import { Pagination } from "@/components/shared/pagination";
import Toolbar from "@/components/shared/toolbar";
import { DataTable } from "@/components/ui/datatable";
import { useFetch } from "@/hooks/use-fetch";

export default function () {
  const { data: students } = useFetch<any>("/students");

  return (
    <div>
      <Toolbar title="Lista de Estudiantes" />
      <Filters />
      <DataTable value={students?.data}>
        <DataTable.Column header="Nombre" field="name" />
        <DataTable.Column header="Correo" field="email" />
        <DataTable.Column header="Teléfono" field="phone" />
        <DataTable.Column header="Dirección" field="address" />
        <DataTable.Column header="Acciones" body={DataTable.Actions} />
      </DataTable>
      <Pagination
        currentPage={students?.current_page}
        lastPage={students?.last_page}
      />
    </div>
  );
}
