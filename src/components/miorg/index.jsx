import "./miorg.css"


export const MiOrg = ({cambiarMostrar}) => {

    
    
    return (
        <section className="add-org">
            <h2 className="title">Mi organización</h2>

            <img src="/img/add.png" alt="img mostrar formulario" onClick={cambiarMostrar} />
        </section>
    );
}