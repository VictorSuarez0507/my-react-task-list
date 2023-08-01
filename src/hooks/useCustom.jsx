import { useState, useEffect } from "react";

export default function useCustom () {
    const estadoInicial = JSON.parse(localStorage.getItem("taskList")) || [];
    const [taskList, setTaskList] = useState(estadoInicial);

    useEffect( () => {
        localStorage.setItem("taskList", JSON.stringify(taskList));
     },[taskList]);
  
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

    return { taskList, setTaskList, newComplete, newDelete};
}
