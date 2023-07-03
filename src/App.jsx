import './App.css'
import Header from './components/Header';
import TaskList from './components/TaskList';
import Task from './components/Task';

function App() {

  return (
    <div>
      <Header />
      <div className='ListaTareas'>
      <TaskList />
      <Task />
      </div>
      
    </div>
  );

}

export default App
