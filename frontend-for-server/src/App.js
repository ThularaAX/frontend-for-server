import './App.css';
import { useEffect, useState } from 'react'
import CardDb from './components/CardDb';

function App() {
  const [dbList, setDbList] = useState([])

  const showCard = dbList.map((card)=> <CardDb name={card.name}/>)

  useEffect(()=>{
    console.log("side effects")
  })
  return (
    <div className="App">
     {showCard}
    </div>
  );
}

export default App;
