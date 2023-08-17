import "./App.css";
import { useState } from "react";
import {v4 as uuid} from "uuid";
import Header from "./components/header/Header";
import { Form } from "./components/form/Form";
import { MiOrg } from "./components/miorg";
import { Equipo } from "./components/equipo";
import { Footer } from "./components/footer/Footer";

function App() {
  const [mostrar, setMostrar] = useState(true);

  const [colaboradores, setColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/Luminoso1.png",
      nombre: "Lumi",
      puesto: "Aux",
      fav:true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/Luminoso1.png",
      nombre: "Dark",
      puesto: "Aux",
      fav:true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/Luminoso1.png",
      nombre: "Dog",
      puesto: "Aux",
      fav:false
    },
  ]);

  const [equipos, setEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
    },

    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
    },

    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
    },

    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
    },

    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
    },

    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
    },

    {
      id: uuid(),
      titulo: "Innovacion y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF",
    },
  ]);

  

  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };

  const eliminarColaborador = (id) => {
    console.log("Eliminar", id);

    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id);
    setColaboradores(nuevosColaboradores);
  }

  

  const cambiarMostrar = () => {
    setMostrar(!mostrar);
  };

  const actualizarColor = (color, id) => {
    console.log("Actualizar", color, id);

    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color;
      }

      return equipo;
    });

    setEquipos(equiposActualizados);
  }

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);

    setEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  const like = (id) => {
    
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id = id){
        colaborador.fav = !colaborador.fav;
      }

      return colaborador;
      
    });

    setColaboradores(colaboradoresActualizados);
  }

  return (
    <div>
      <Header />

      {/* {mostrar ? <Form /> : <></> } */}
      {mostrar && (
        <Form
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {equipos.map((equipo) => {
        return (
          <Equipo
            datos={equipo}
            key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
