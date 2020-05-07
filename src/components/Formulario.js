import React, { useState } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";

import Error from "./Error";

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
	const [nombre, guardarNombre] = useState("");
	const [cantidad, guardarCantidad] = useState(0);
	const [error, actualizarError] = useState(false);

	const agregarGasto = (e) => {
		e.preventDefault();

		//validar
		if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
			actualizarError(true);
			return;
		}
		actualizarError(false);

		// construir el gasto
		const gasto = {
			nombre,
			cantidad,
			id: shortid.generate(),
		};

		// pasar el gasto al component principal
		guardarGasto(gasto);
		guardarCrearGasto(true);

		// reset form
		guardarNombre("");
		guardarCantidad(0);
	};
	return (
		<form onSubmit={agregarGasto}>
			<h2>Agrega tus gastos aqui</h2>

			{error ? (
				<Error title="Ambos campos son obligatorio o Presupuesto Incorrecto" />
			) : null}

			<div className="campo">
				<label>Nombre Gastos</label>

				<input
					type="text"
					className="u-full-width"
					placeholder="Ej. Trasnporte"
					value={nombre}
					onChange={(e) => guardarNombre(e.target.value)}
				/>
			</div>

			<div className="campo">
				<label>Cantidad Gastos</label>

				<input
					type="number"
					className="u-full-width"
					placeholder="Ej. 3000"
					value={cantidad}
					onChange={(e) => guardarCantidad(parseInt(e.target.value))}
				/>
			</div>

			<input
				type="submit"
				className="button-primary u-full-width"
				value="Agregar"
			/>
		</form>
	);
};

Formulario.propTypes = {
	guardarGasto: PropTypes.func.isRequired,
	guardarCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
