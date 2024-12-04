import { DataTable } from "@/components/ui/datatable";
import { useFetch } from "@/hooks/use-fetch";

export default function () {
  const { data: teachers } = useFetch<any>("/teachers");
  return (
    <div>
      <DataTable value={teachers?.data}>
        <DataTable.Column header="Nombre" field="name" />
        <DataTable.Column header="Correo" field="email" />
        <DataTable.Column header="Teléfono" field="phone" />
        <DataTable.Column header="Dirección" field="address" />
      </DataTable>
    </div>
  );
}
