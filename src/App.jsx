import { useEffect, useState} from "react";
import './App.css'
import Header from './components/Header';
import TaskList from './components/TaskList';
import Task from './components/Task';

function App() {

  const estadoIncial = JSON.parse(localStorage.getItem("listaTareas")) || [];
  const [ tareas, setTareas] = useState("");
  const [listaTareas, setListaTareas] = useState(estadoIncial);
  const [editarTareas, setEditarTareas] = useState(null);

  useEffect( () => {
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
  },[listaTareas]);

  return (
    <div className='contenido'>
      <div className='subcontenido'>
        <div>
          <Header />
        </div>
        <div>
          <TaskList
            tareas = {tareas}
            setTareas = {setTareas}
            listaTareas = {listaTareas}
            setListaTareas = {setListaTareas}  
            editarTareas= {editarTareas}    
            setEditarTareas= {setEditarTareas}   
          />
        </div>
        <div>
          <Task 
            listaTareas = {listaTareas}
            setListaTareas = {setListaTareas}
            setEditarTareas = {setEditarTareas}
          />
        </div>
      </div>
    </div>
  );

}
export default App
