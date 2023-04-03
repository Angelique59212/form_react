import "./Products.css";
import { useForm } from "react-hook-form";

export default function Products() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Produits</h1>
      <input
        className="products"
        placeholder="Votre produit"
        {...register("product", { required: true })}
      />

      {errors.exampleRequired && <span> This field is required</span>}

      <input className="products" type="submit" />
    </form>
  );
}
