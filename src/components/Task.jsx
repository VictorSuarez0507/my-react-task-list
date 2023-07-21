export default function Task ({taskList, setTaskList, setEditTask}) {
    
    function handleComplete (newTask){
        setTaskList(
            taskList.map((item) =>{
                if(item.id === newTask.id){
                    
                    return {...item, realize: !item.realize}
                }
                return item;
            })
        )
    };

    function handleEdit ({id}){
        const findTask = taskList.find((newTask) => newTask.id === id);
        setEditTask(findTask);
    };

    function handleDelete ({id}){
        setTaskList(taskList.filter((newTask) => newTask.id !== id));
    };

    return(
        <div>
            {taskList.map((newTask) =>(
                <li className="listToDo" key={newTask.id}>
                    <table>
                        <tbody>
                            <tr>
                                <th>
                                <input type="text"
                                    value={newTask.title}
                                    className={`finalList ${newTask.realize ? "filled" : ""}`}
                                    onChange={(event) => event.preventDefault()}
                                />
                                </th>
                            </tr>
                            <tr>
                                <td>
                                <textarea type="text"
                                    value={newTask.body}
                                    className={`finalBody ${newTask.realize ? "filled" : ""}`}
                                    onChange={(event) => event.preventDefault()}
                                />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    
                    <div>
                        <button className="btncomplete"
                            onClick={() => handleComplete(newTask)}>
                            <i className="fa-regular fa-circle-check"></i>
                        </button>
                        <button className="btnEdit" 
                            onClick={() => handleEdit(newTask)}>
                            <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button className="btnDelete"
                            onClick={() => handleDelete(newTask)}>
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                    </div>   
                    
                </li>


            ) )}
        </div>
    );
}