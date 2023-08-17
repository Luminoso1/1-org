import "./colaborador.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export const Colaborador = (props) => {
  const { nombre, puesto, foto, equipo, id, fav } = props.datos;
  const { colorPrimario, eliminarColaborador, like } = props;

  return (
    <div className="card">
      <AiFillCloseCircle
        className="eliminar"
        onClick={() => eliminarColaborador(id)}
      ></AiFillCloseCircle>

      <div className="card__head" style={{ backgroundColor: colorPrimario }}>
        <img src={foto} alt={nombre} />
      </div>

      <div className="card__info">
        <h4>{nombre}</h4>
        <h5>{puesto}</h5>

        {fav ? (
          <AiFillHeart
            color="red"
            style={{ fontSize: "x-large" }}
            onClick={() => like(id)}
          />
        ) : (
          <AiOutlineHeart
            style={{ fontSize: "x-large" }}
            onClick={() => like(id)}
          />
        )}
      </div>
    </div>
  );
};
