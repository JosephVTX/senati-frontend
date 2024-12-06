import { Form } from "@/components/custom/form";
import Toolbar from "@/components/shared/toolbar";

export default function () {
  const form = Form.useForm({
    name: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.post("/courses", {
      onSuccess: () => alert("Curso creado"),
    });
  };

  return (
    <div>
      <Toolbar title="Crear Curso" />
      <Form onSubmit={handleSubmit}>
        <Form.Input
          title="Nombre"
          type="text"
          onChange={(e) => form.setData("name", e.target.value)}
          required
          data-error={form.errors.name}
        />
        
        <Form.Input
          title="Descripción"
          onChange={(e) => form.setData("description", e.target.value)}
          required
          data-error={form.errors.description}
        />
        <Form.Submit />
      </Form>
    </div>
  );
}
