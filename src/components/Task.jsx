export default function Task ({listaTareas, setListaTareas, setEditarTareas}) {
    
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
                        className={`listaFinal ${totalTareas.completada ? "completado" : ""}`}
                        onChange={(event) => event.preventDefault()}
                    />
                    <div>
                        <button className="botonCompletar"
                            onClick={() => handleComplete(totalTareas)}>
                            <i className="fa-regular fa-circle-check"></i>
                        </button>
                        <button className="botonEditar" 
                            onClick={() => handleEdit(totalTareas)}>
                            <i className="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button className="botonEliminar"
                            onClick={() => handleDelete(totalTareas)}>
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                    </div>   
                </li>
            ) )};
        </div>
    );
}