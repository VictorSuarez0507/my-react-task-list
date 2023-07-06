export default function Task ({listaTareas, setListaTareas, setEditarTareas}) {
    //Task: Este componente mostrará el nombre, y un indicador del estado de cada tarea. (ej: checkbox, iconos, tachado...)
    
    function handleComplete (totalTareas){
        setListaTareas(
            listaTareas.map((item) =>{
                if(item.id === totalTareas.id){
                    return {...item, completada: !item.completada}
                }
                return item;
            })
        )
    };

    function handleEdit ({id}){
        const buscarTareas = listaTareas.find((totalTareas) => totalTareas.id === id);
        setEditarTareas(buscarTareas);
    };

    function handleDelete ({id}){
        setListaTareas(listaTareas.filter((totalTareas) => totalTareas.id !== id));
    };

    return(
        <div>
            {listaTareas.map((totalTareas) =>(
                <li className="listadoTareas" key={totalTareas.id}>
                    <input type="text"
                        value={totalTareas.titulo}
                        className="listafinal"
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className="botonCompletar task-button"
                            onClick={() => handleComplete(totalTareas)}>
                                <i className="buttonAgregar">c</i>
                        </button>
                        <button className="botonEditar task-button" 
                            onClick={() => handleEdit(totalTareas)}>E
                        </button>
                        <button className="botonEliminar task-button"
                            onClick={() => handleDelete(totalTareas)}>D
                        </button>
                    </div>
                    
                </li>
            ) )}
        </div>
    );
}