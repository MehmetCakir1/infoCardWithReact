import "./App.css";
import data from "./helper/data";
import {useState} from "react"
import List from "./components/List";



const App = () => {

  const [people,setPeople]=useState(data)
  return (
    <main className="container">
      <List people={people}/>
      <div>
        <button className="clearAll" onClick={()=>setPeople([])}>CLEAR ALL</button>
        <button className="getBack" onClick={()=>setPeople(data)}>GET BACK</button>
      </div>
    </main>
  )
}

export default App