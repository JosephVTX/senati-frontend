import useForm from "@/hooks/use-form";
import { Element } from "@/types";
import { Link } from "react-router";

import { cn } from "tr-cn";

export const Form = ({
  className,
  ...props
}: React.FormHTMLAttributes<HTMLFormElement>) => {
  return (
    <form
      className={cn("grid lg:grid-cols-2 gap-4 w-10/12", className)}
      {...props}
    />
  );
};

Form.Input = <T extends React.ElementType = "input">({
  as,
  required,
  className,
  children,
  disabled,
  ...props
}: Element<T>) => {
  const Component = as || "input";

  return (
    <label className={cn("mb-0 space-y-2", className)}>
      <p>
        {props.title} {required && <span className="text-red-500">*</span>}
      </p>
      {children ? (
        children
      ) : (
        <Component
          {...props}
          disabled={disabled}
          step="0.000001"
          className={cn("form-input", disabled && "bg-gray-100")}
        />
      )}

      {props["data-error"] && (
        <p className="text-red-500 text-xs">{props["data-error"]}</p>
      )}
    </label>
  );
};

Form.Submit = ({ processing }: { processing?: boolean }) => {
  function cleanURL(url: string) {
    url = url.replace(/\/create$/, "");
    url = url.replace(/\/\d+(?:\/edit)?$/, "");
    return url;
  }

  return (
    <div className="col-span-full">
      <div className="flex gap-x-2">
        <button className="btn btn-primary" disabled={processing}>
          Guardar
        </button>
        <Link
          // las 2 primeras líneas de este Link son para obtener la ruta anterior

          to={cleanURL(location.pathname)}
          className="btn btn-dark"
        >
          Cancelar
        </Link>
      </div>
    </div>
  );
};

Form.useForm = useForm;
