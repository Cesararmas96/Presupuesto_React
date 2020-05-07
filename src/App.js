import React, { useState, useEffect } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

const App = () => {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState([]);
  const [creargasto, guardarCrearGasto] = useState(false);

  // UseEffect que actualiza e restante
  useEffect(() => {
    if (creargasto) {
      //Agregar el nuevo presupuesto
      guardarGastos([...gastos, gasto]);

      //Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);
    }

    guardarCrearGasto(false);
  }, [gasto, gastos, creargasto, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gastos Mensuales</h1>

        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Pregunta
              guardarRestante={guardarRestante}
              guardarPresupuesto={guardarPresupuesto}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarCrearGasto={guardarCrearGasto}
                  guardarGasto={guardarGasto}
                />
              </div>

              <div className="one-half column">
                <Listado gastos={gastos} />

                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default App;
