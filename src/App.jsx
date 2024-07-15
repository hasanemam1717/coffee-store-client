import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./Components/CoffeeCard";
import { useState } from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees,setCoffees] =useState(loadedCoffees)
  console.log(coffees);

  return (
    <>
      {coffees.map(coffee =><CoffeeCard key={coffee._id} setCoffees={setCoffees} coffees={coffees} coffe={coffee}></CoffeeCard>)}
    </>
  );
}

export default App;
