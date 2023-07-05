export default function Task ({listaTareas, setListaTareas}) {
    //Task: Este componente mostrará el nombre, y un indicador del estado de cada tarea. (ej: checkbox, iconos, tachado...)
    
    function handleDelete ({id}){
        setListaTareas(listaTareas.filter((totalTareas) => totalTareas.id !== id))
    }

    return(
        <div>
            {listaTareas.map((totalTareas) =>(
                <li className="listadoTareas" key={totalTareas.id}>
                    
                    <span>{totalTareas.titulo}</span>
                    <div>
                        <button className="botonCompletar task-button">C</button>
                        <button className="botonEditar task-button">E</button>
                        <button className="botonEliminar task-button"
                            onClick={() => handleDelete(totalTareas)}>D</button>
                    </div>
                    
                </li>
            ) )}
        </div>
    );
}