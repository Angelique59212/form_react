import { useForm } from "react-hook-form";
import "./Categories.css";

export default function Categories() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Catégories</h1>
      <select className="categories" {...register("genre")}>
        <option value="documentaire">Documentaire</option>
        <option value="autobiographie">Autobiographie</option>
        <option value="science-fiction">Science Fiction</option>
        <option value="other">Autre</option>
      </select>
      <input className="categories" type="submit" />
    </form>
  );
}
