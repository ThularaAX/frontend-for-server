import './App.css';
import { useEffect, useState } from 'react'
import CardDb from './components/CardDb';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const [dbList, setDbList] = useState([])

  const showCard = dbList.map((card) => <CardDb name={card.name} image={card.image}/>)

  async function fetchDb() {
    const response = await fetch('https://json-server-poke.onrender.com/card')
    const data = await response.json()

    setDbList(data)
    console.log(data)
  }
  useEffect(()=>{
    fetchDb()
  })
  return (
    <BrowserRouter>    
      <Route path="/">
        <div className="App">
        <div className="card-container">
          {showCard}
        </div>
        </div>
      </Route>
    </BrowserRouter>
  );
}

export default App;
