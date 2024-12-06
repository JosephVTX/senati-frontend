import { Password } from "@/components/custom/password";
import { Button } from "@/components/ui/button";
import useForm from "@/hooks/use-form";
import { useAuthStore } from "@/store/auth-store";

export default function Login() {
  const form = useForm({
    email: "user@gmail.com",
    password: "password",
  });

  const { setAuth } = useAuthStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    form.post("/auth/login", {
      onSuccess: (response) => setAuth(response.data),
    });
  };

  console.log(form.errors);

  return (
    <div className="h-screen w-screen grid place-items-center p-4 bg-gray-100 dark:bg-gray-900">
      <div className="w-full lg:w-[32rem] bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
        <div className="grid place-items-center mb-4 gap-y-2">
          <img className="h-12" src="/img/logo.svg" alt="Fidami" />
          <p className="text-gray-900 dark:text-gray-100">
            Por favor inicia sesión para continuar
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="mb-2">
            <p className="text-gray-900 dark:text-gray-100">Correo</p>
            <input
              type="email"
              className="form-input h-12 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              defaultValue={form.data.email}
              onChange={(e) => form.setData("email", e.target.value)}
            />
            {form.errors.email && (
              <p className="text-red-500 text-sm mt-2">{form.errors.email}</p>
            )}
          </label>
          <label className="mb-4">
            <p className="text-gray-900 dark:text-gray-100">Contraseña</p>
            <Password
              className="h-12 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              defaultValue={form.data.password}
              onChange={(e) => form.setData("password", e.target.value)}
            />
            {form.errors.password && (
              <p className="text-red-500 text-sm mt-2">
                {form.errors.password}
              </p>
            )}
          </label>
          <Button className="w-full h-12" disabled={form.processing}>
            Iniciar Sesión
          </Button>
        </form>
      </div>
    </div>
  );
}
