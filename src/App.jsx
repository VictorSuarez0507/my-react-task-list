import { useState} from "react";
import './App.css'
import Header from './components/Header';
import TaskList from './components/TaskList';
import Task from './components/Task';

function App() {
  const [ tareas, setTareas] = useState("");
  const [listaTareas, setListaTareas] = useState([]);
  const [editarTareas, setEditarTareas] = useState(null);

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
