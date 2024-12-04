import { DataTable } from "@/components/ui/datatable";
import { useFetch } from "@/hooks/use-fetch";

export default function () {
  const { data: users } = useFetch<any>("/users");
  return (
    <div>
      <DataTable value={users?.data}>
        <DataTable.Column header="Nombre" field="name" />
        <DataTable.Column header="Correo" field="email" />
      </DataTable>
    </div>
  );
}
