/* import { Link, router } from "@inertiajs/react"; */
import { Children } from "react";
import { ModalConfirm } from "../custom/modal";
import { FiEdit, FiTrash } from "react-icons/fi";
import axios from "@/libs/axios";
import { Link } from "react-router";
/* import { CilPencil } from "../icons/cil/pencil";
import { IconoirTrash } from "../icons/iconoir/trash";
import { ModalConfirm } from "../custom/modal";
 */
interface DataTableColumn<T> {
  header: string;
  field?: keyof T;
  body?: (data: any) => React.ReactNode;
}
interface DataTableProps<T> {
  value: T[];
  children: React.ReactElement<DataTableColumn<T>>[];
}

const getNestedValue = (obj: any, path: string) => {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
};

export const DataTable = <T extends object>({
  value,
  children,
}: DataTableProps<T>) => {
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>{Children.map(children, (child) => child)}</tr>
        </thead>
        <tbody>
          {value?.map((item, index) => (
            <tr key={index}>
              {Children.map(children, (child, index) => {
                const { field, body } = child.props;
                return (
                  <td key={index}>
                    {body
                      ? body(item)
                      : field
                      ? getNestedValue(item, field as string)
                      : null}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DataTable.Column = <T extends object>({ header }: DataTableColumn<T>) => {
  return <th>{header}</th>;
};

DataTable.Actions = ({ id }: { id: number }) => {
  const path = window.location.pathname.split("/").pop();

  return (
    <div className="flex gap-x-4 text-xl group">
      <Link to={`/dashboard/${path}/${id}`}>
        <FiEdit />
      </Link>
      <ModalConfirm
        title="Eliminar"
        onSuccess={() =>
          axios.delete(`/${path}/${id}`).then(() => window.location.reload())
        }
        buttonContent={<FiTrash />}
      >
        <p>
          ¿Estás seguro de que quieres hacer esto? No podrás deshacer esta
          acción.
        </p>
      </ModalConfirm>
    </div>
  );
};
