import { DataTable } from "@/components/ui/datatable";
import { useFetch } from "@/hooks/use-fetch";

export default function () {
  const { data: courses } = useFetch<any>("/courses");
  return (
    <div>
      <DataTable value={courses?.data}>
        <DataTable.Column header="Nombre" field="name" />
        <DataTable.Column header="Descripción" field="description" />
      </DataTable>
    </div>
  );
}
