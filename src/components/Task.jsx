import useCustom from "../hooks/useCustom";

export default function Task () {

    const {task, 
        setTask,
        taskList, 
        setTaskList,
        editTask,
        setEditTask,
        newComplete,
        newEdit, 
        newHandleSubmit, 
        newHandleChange,
        newUpdateTask,
        newDelete} = useCustom();
    
    /*function handleComplete (newTask){
        setTaskList(
            taskList.map((item) =>{
                if(item.id === newTask.id){
                    
                    return {...item, realize: !item.realize}
                }
                return item;
            })
        )
    };*/

    /*function handleEdit ({id}){
        const findTask = taskList.find((newTask) => newTask.id === id);
        setEditTask(findTask);
    };*/

    /*function handleDelete ({id}){
        setTaskList(taskList.filter((newTask) => newTask.id !== id));
    };*/

    return(
        <div>
            {taskList.map((newTask) =>(
                <li className="listToDo" key={newTask.id}>
                    <input type="text"
                        value={newTask.title}
                        className={`finalList ${newTask.realize ? "filled" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className="btncomplete"
                            onClick={() => {newComplete(newTask)}}>
                            <i className="fa-regular fa-circle-check"></i>
                        </button>
                        <button className="btnEdit" 
                            onClick={() => {newEdit(newTask)}}>
                            <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button className="btnDelete"
                            onClick={() => {newDelete(newTask)}}>
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                    </div>   
                </li>
            ) )}
        </div>
    );
}