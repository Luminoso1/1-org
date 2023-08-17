import "./campo.css";
import { useState } from "react";

export const Campo = (props) => {

  const placeholder = `Ingresar ${props.input}`;

  const {type = "text"} = props;
  

  const cambio = (e) => {
    props.actualizarValor(e.target.value);
  }

  return (
    <div className={`campo campo-${type}`}>
      <label  className="campo-label">
        {props.label}
      </label>
      <input
        className="campo-input"
        placeholder={placeholder}
        required={props.required}
        value={props.valor}
        onChange={cambio}
        type={type}
        
      />
    </div>
  );
};

export const Select = (props) => {

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value)
  }

  return (
    <div className="campo">
      <label  className="campo-label">
        {props.label}
      </label>
      <select
        name="select"
        id=""
        className="campo-input"
        required={props.required}
        valor={props.valor}
        onChange={manejarCambio}
      >
        <option value="">Selecciona tu equipo</option>

        {props.equipos.map((equipo, index) => {
          return <option  value={equipo} key={index}>{equipo}</option>;
        })}
      </select>
    </div>
  );
};
