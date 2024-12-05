import { Form } from "@/components/custom/form";
import { Password } from "@/components/custom/password";

export default function () {
  const form = Form.useForm({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.post("/users", {
      onSuccess: () => alert("Usuario creado"),
    });
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
      <Form.Input title="Contraseña" required>
        <Password onChange={(e) => form.setData("password", e.target.value)} />
      </Form.Input>
      <Form.Submit processing={form.processing} />
    </Form>
  );
}
