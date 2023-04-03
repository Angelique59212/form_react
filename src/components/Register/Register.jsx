import { useForm } from "react-hook-form";
import "./Register.css";
export default function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className="register" onSubmit={handleSubmit(onSubmit)}>
      <h1>Inscription</h1>
      <input
        className="categories"
        placeholder="Prénom"
        {...register("firstname", { required: true, maxLength: 30 })}
      />

      <input
        className="categories"
        placeholder="Nom"
        {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
      />
      <input
        className="categories"
        placeholder="email"
        type="email"
        {...register("email", { minLength: 70 })}
      />
      <input
        className="categories"
        placeholder="password"
        type="password"
        {...register("password", { minLength: 5, maxLength: 80 })}
      />

      <input className="categories" type="submit" />
    </form>
  );
}
