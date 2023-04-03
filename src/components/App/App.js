import logo from "../../logo.svg";
import "./App.css";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Register from "../Register/Register";
import Login from "../Login/Login";

function App() {
  return (
    <div className="App">
      <Products />
      <Categories />
      <div className="container-user">
        <Register />
        <Login />
      </div>
    </div>
  );
}

export default App;
