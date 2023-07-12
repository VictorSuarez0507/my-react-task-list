import { useEffect, useState} from "react";
import './App.css'
import Header from './components/Header';
import TaskList from './components/TaskList';
import Task from './components/Task';
import useCustom from "./hooks/useCustom";


function App() {

  return (
    <div className='container'>
      <div className='subContainer'>
        <div>
          <Header />
        </div>
        <div>
          <TaskList />
        </div>
        <div>
          <Task />
        </div>
      </div>
    </div>
  );

}
export default App;
