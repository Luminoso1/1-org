import "./equipo.css";
import { Colaborador } from "./colaborador";
import hexToRgba from 'hex-to-rgba';


export const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo, id } = props.datos;
  const { colaboradores, eliminarColaborador, actualizarColor, like } = props;

  const objColor = {
    backgroundColor: hexToRgba(colorPrimario, 0.5) 
  }
  return (
    <>
      {colaboradores.length > 0 && (
        <section
          className="equipo"
          style={{ backgroundColor: objColor.backgroundColor }}
        >
          <input
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(e) => actualizarColor(e.target.value, id)}
          />

          <h3 style={{ borderBottom: `4px solid ${colorPrimario}` }}>
            {titulo}
          </h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => {
              return (
                <Colaborador
                  datos={colaborador}
                  key={index}
                  colorPrimario={colorPrimario}
                  eliminarColaborador={eliminarColaborador}
                  like={like}
                />
              );
            })}
          </div>
        </section>
      )}
    </>
  );
};
