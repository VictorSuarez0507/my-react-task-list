export function Card (props) {
    const {image, name, breed, age, owner, vaccines} = props;
    return(
        <div className="card-dog">
            <img src={image} alt="foto-1" style={{ width: "50%" }} />
            <div>
              <h3>Nombre: {name}</h3>
              <p>Raza: {breed}</p>
              <p>Edad: {age}</p>
              <p>Nombre del propietario: {owner}</p>
              <p>Vacunas: {vaccines}</p>
              <button>Vacunar</button>
            </div>
        </div>
    );
}
export default Card;