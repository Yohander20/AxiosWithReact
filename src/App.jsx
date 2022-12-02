import {useState,useEffect} from 'react'
import axios from 'axios'
import TarjetasPersonajes from './TarjetasPersonales'
import './App.css'

function App() {
 
const [actores,setListadoActores]=useState([]);

useEffect(()=>{

  const obtenerPersonajes=async()=>{

    const url="https://thronesapi.com/api/v2/characters";
    const result= await axios.get(url) 

    //console.log(result.data)

    setListadoActores(result.data)
  }
  obtenerPersonajes()
},[]);


console.log(actores);
  return (
    <div>
      <h1>Actores de Game Of Thrones</h1>
      <ul>
        {actores.length === 0 && <p>Cargando....</p>}
        {
    
    actores.map((personas,i)=>{
    return(
      i < 10? <TarjetasPersonajes
    data={personas}
    key={personas.id}/> : null
    )}
  )}
  </ul>
  </div>
)}

export default App
