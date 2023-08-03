export default function AboutUs() {

    return (
        <main className='container'>
            <div className="head" >
                <h1>Acerca de ToDo List</h1>      
                <p>
                    Las principales funcionalidades de la aplicacion son agregar, editar, eliminar 
                    y almacenar en memoria las tareas, permitiendo así al usuario llevar un control
                    y registro de sus tareas pendientes y realizadas.
                </p> 
                <br />
                <div className="head">
                    <h3>Para el desarrollo de esta aplicación se utilizaron las siguientes tecnologías</h3>
                    <ul>
                        <li className="listToDo">React Router Dom</li>
                        <li className="listToDo">React</li>
                        <li className="listToDo">HTML</li>
                        <li className="listToDo">JavaScript</li>
                    </ul>
                </div>
            </div>     
        </main>
      ); 
    
  }