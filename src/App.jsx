import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";

function App() {
  const coffees = useLoaderData();
  console.log(coffees);

  return (
    <>
      {coffees.map(coffee =><CoffeeCard key={coffee._id} coffe={coffee}></CoffeeCard>)}
    </>
  );
}

export default App;
