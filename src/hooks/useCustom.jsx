import { useState, useEffect } from "react";

export function useCustom () {

    const estadoInicial = JSON.parse(localStorage.getItem("taskList")) || [];
    const [taskList, setTaskList] = useState(estadoInicial);
    const [ task, setTask] = useState("");
    

    useEffect( () => {
        localStorage.setItem("taskList", JSON.stringify(taskList));
  },[taskList]);

  
    const newHandleSubmit = (event) => {
        event.preventDefault();
        setTaskList([...taskList, {id: Date.now(), title: task, realize: false}]);
        setTask(""); 
        window.location.reload();
    }
    
    const handleChange = (event) =>{
        setTask(event.target.value);
    }
     

    const newComplete = (newTask) => {
        setTaskList(
            taskList.map((item) =>{
                if(item.id === newTask.id){
                    
                    return {...item, realize: !item.realize}
                }
                return item;
            }),
            window.location.reload()
        )
    };

    const newDelete = ({ id }) => {
        setTaskList(taskList.filter((newTask) => newTask.id !== id));
        window.location.reload();      
    };

    
    return { task, taskList, newHandleSubmit,handleChange, newComplete, newDelete};
}

export default useCustom;
