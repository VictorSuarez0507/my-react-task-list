import { useState, useEffect } from "react";
import './App.css'
import Header from './components/Header';
import TaskList from './components/TaskList';
import Task from './components/Task';

function App() {
  const [ tareas, setTareas] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

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
          />
        </div>
      </div>
    </div>
  );

}
export default App
