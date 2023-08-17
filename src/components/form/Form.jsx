import "./form.css";

import { Campo, Select } from "./campo/Campo";
import { Button } from "./button/Button";
import { useState } from "react";

export const Form = (props) => {
  const [nombre, setNombre] = useState("");
  const [puesto, setPuesto] = useState("");
  const [foto, setFoto] = useState("");
  const [equipo, setEquipo] = useState("");

  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");

  const {registrarColaborador, crearEquipo} = props;

  const envioDatos = (e) => {
    e.preventDefault();

    const datos = {
      nombre,
      puesto,
      foto,
      equipo
    };

    
    registrarColaborador(datos)
  };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({titulo, colorPrimario: color});
  }

  return (
    <section className="formulario">
      <form onSubmit={envioDatos}>
        <h2>Rellena el formulario para crear el colaborador</h2>

        <Campo
          label={"Nombre"}
          input={"nombre"}
          required
          valor={nombre}
          actualizarValor={setNombre}
        />
        <Campo
          label={"Puesto"}
          input={"puesto"}
          required
          valor={puesto}
          actualizarValor={setPuesto}
        />
        <Campo
          label={"Foto"}
          input={"enlace de foto"}
          required
          valor={foto}
          actualizarValor={setFoto}
        />
        <Select
          label={"Equipo"}
          required
          valor={equipo}
          actualizarValor={setEquipo}
          equipos={props.equipos}
        />
        <Button />
      </form>

      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo</h2>

        <Campo
          label={"Titulo"}
          input={"titulo"}
          required
          valor={titulo}
          actualizarValor={setTitulo}
        />
        <Campo
          label={"Color"}
          input={"color"}
          required
          valor={color}
          actualizarValor={setColor}
          type="color"
        />

        <Button />
      </form>

    </section>
  );
};
