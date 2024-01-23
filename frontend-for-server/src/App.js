import "./App.css";
import { useEffect, useState } from "react";
import CardDb from "./components/CardDb";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  const [dbList, setDbList] = useState([]);

  const showCard = dbList.map((card) => (
    <CardDb key={card.id} name={card.name} image={card.image} />
  ));

  async function fetchDb() {
    const response = await fetch("https://json-server-poke.onrender.com/card");
    const data = await response.json();

    setDbList(data);
    console.log(data);
  }
  useEffect(() => {
    fetchDb();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/"></Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
