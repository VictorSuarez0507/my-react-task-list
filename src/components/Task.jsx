import useCustom from "../hooks/useCustom";
export default function Task ({ setEditTask }) {

    const {  taskList, newComplete, newDelete} = useCustom();  

    function handleEdit ({id}){
        const findTask = taskList.find((newTask) => newTask.id === id);
        setEditTask(findTask);
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
                            onClick={() => newComplete(newTask)}>
                            <i className="fa-regular fa-circle-check"></i>
                        </button>
                        <button className="btnEdit" 
                            onClick={() => handleEdit(newTask)}>
                            <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button className="btnDelete"
                            onClick={() => newDelete(newTask)}>
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                    </div>        
                </li>
            ) )}
        </div>
    );
}