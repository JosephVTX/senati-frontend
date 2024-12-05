import { Filters } from "@/components/shared/filters";
import { Pagination } from "@/components/shared/pagination";
import { DataTable } from "@/components/ui/datatable";
import { useFetch } from "@/hooks/use-fetch";

export default function () {
  const { data: students } = useFetch<any>("/students");

  return (
    <div>
      <Filters />
      <DataTable value={students?.data}>
        <DataTable.Column header="Nombre" field="name" />
        <DataTable.Column header="Correo" field="email" />
        <DataTable.Column header="Teléfono" field="phone" />
        <DataTable.Column header="Dirección" field="address" />
      </DataTable>
      <Pagination
        currentPage={students?.current_page}
        lastPage={students?.last_page}
      />
    </div>
  );
}
