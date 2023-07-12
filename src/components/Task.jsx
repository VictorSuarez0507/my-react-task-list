import useCustom from "../hooks/useCustom";

export default function Task () {
    const {  taskList, newComplete, newDelete} = useCustom();


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