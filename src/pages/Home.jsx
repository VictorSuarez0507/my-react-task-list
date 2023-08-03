export default function Home() {
    return (
      <main className='container'>
        <div className="head">
          <h1>Bienvenido a ToDoList </h1>                    
          <p>
            ToDo List es una aplicación que te permite crear una lista de tareas, 
            donde una vez creada puedes completar, editar y eliminar cada una de estas. 
            Adicionalmente, puedes guardarlas en memoria, es decir, que si actualizas o cierras la aplicación
            tu información no se pederá, al volver a abrir la app tus tareas seguiran listadas 
            en el estado en que las tenias previamente guardadas.
          </p>
        </div>
      </main>
    ); 
  }