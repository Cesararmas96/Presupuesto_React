import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

import Error from "./Error";

const Pregunta = ({
	guardarPresupuesto,
	guardarRestante,
	actualizarPregunta,
}) => {
	const [cantidad, guardarCantidad] = useState(0);
	const [error, guardarError] = useState(false);

	// Funcion que lee el presupuesto
	const definirPresupuesto = (e) => {
		console.log(parseInt(e.target.value));

		guardarCantidad(parseInt(e.target.value));
	};

	//submit para definir el presupuesto

	const agregarPresupuesto = (e) => {
		e.preventDefault();

		//validar
		if (cantidad < 1 || isNaN(cantidad)) {
			guardarError(true);
			return;
		}

		//si pasa la validacion
		guardarError(false);
		guardarPresupuesto(cantidad);
		guardarRestante(cantidad);
		actualizarPregunta(false);
	};
	return (
		<Fragment>
			<h2>Coloca tu Presupuesto</h2>

			{error ? <Error title="El Presupuesto es Incorrecto" /> : null}

			<form onSubmit={agregarPresupuesto}>
				<div className="campo">
					<input
						type="number"
						placeholder="Colocar Presupuesto"
						className="u-full-width"
						onChange={definirPresupuesto}
					/>
				</div>

				<input type="submit" className="button-primary u-full-width" />
			</form>
		</Fragment>
	);
};

Pregunta.propType = {
	guardarPresupuesto: PropTypes.func.isRequired,
	guardarRestante: PropTypes.func.isRequired,
	actualizarPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
