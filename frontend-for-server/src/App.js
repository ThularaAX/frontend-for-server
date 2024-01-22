import './App.css';
import { useEffect} from 'react'

function App() {
  useEffect(()=>{
    console.log("side effects")
  })
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
