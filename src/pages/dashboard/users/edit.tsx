import { Form } from "@/components/custom/form";
import { Password } from "@/components/custom/password";
import { useFetch } from "@/hooks/use-fetch";
import { useParams } from "react-router";

export default function () {
  const { id } = useParams();
  const { data } = useFetch<User>(`/users/${id}`);

  const form = Form.useForm({
    name: data?.name || "",
    email: data?.email || "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    form.patch(`/users/${id}`, {
      onSuccess: () => alert("Usuario actualizado"),
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        title="Nombre"
        type="text"
        onChange={(e) => form.setData("name", e.target.value)}
        defaultValue={form.data.name}
        required
        data-error={form.errors.name}
      />
      <Form.Input
        title="Correo"
        type="email"
        onChange={(e) => form.setData("email", e.target.value)}
        defaultValue={form.data.email}
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
