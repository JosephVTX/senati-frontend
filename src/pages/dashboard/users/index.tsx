import { Filters } from "@/components/shared/filters";
import { Pagination } from "@/components/shared/pagination";
import { DataTable } from "@/components/ui/datatable";
import { useFetch } from "@/hooks/use-fetch";

export default function () {
  const { data: users } = useFetch<any>("/users");

  return (
    <div>
      <Filters />
      <DataTable value={users?.data}>
        <DataTable.Column header="Nombre" field="name" />
        <DataTable.Column header="Correo" field="email" />
        <DataTable.Column header="Creado" field="created_at" />
        <DataTable.Column header="Actualizado" field="updated_at" />
        <DataTable.Column header="Acciones" body={DataTable.Actions} />
      </DataTable>
      <Pagination
        currentPage={users?.current_page}
        lastPage={users?.last_page}
      />
    </div>
  );
}
