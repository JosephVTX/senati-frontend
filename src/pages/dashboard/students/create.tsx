import { Form } from "@/components/custom/form";

export default function () {
  const form = Form.useForm({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.post("/students");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        title="Nombre"
        type="text"
        onChange={(e) => form.setData("name", e.target.value)}
        required
        data-error={form.errors.name}
      />
      <Form.Input
        title="Correo"
        type="email"
        onChange={(e) => form.setData("email", e.target.value)}
        required
        data-error={form.errors.email}
      />
      <Form.Input
        title="Teléfono"
        type="text"
        onChange={(e) => form.setData("phone", e.target.value)}
        required
        data-error={form.errors.phone}
      />

      <Form.Input
        
        title="Dirección"
        onChange={(e) => form.setData("address", e.target.value)}
        required
        data-error={form.errors.address}
      />

      <Form.Submit />
    </Form>
  );
}
