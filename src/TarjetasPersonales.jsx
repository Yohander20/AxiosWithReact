const TarjetasPersonajes = ({data}) =>{
        return (
            <div>
                <li data={data.id}>
                <h4>Nombre: {data.fullName}</h4>
                <img src={data.imageUrl} alt="Imagenes de Actores" width='200'/>
                <h5>{data.family}</h5> 
                </li>
            </div>
        )
}

export default TarjetasPersonajes;