import './App.css'
import Header from './components/Header';
import TaskList from './components/TaskList';


function App() {

  return (
    <div>
      <Header />
      <div className='ListaTareas'>
        <TaskList />
      </div>
      
    </div>
  );

}

export default App
