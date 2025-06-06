import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
 const MiContador = () => {
	const [contador, setContador] = useState(0);
	const [activo, setActivo] = useState(true);

	useEffect(() => {
		if (!activo) return;

		const interval = setInterval(() => {
			setContador(prev => prev + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [activo]);

	const digitos = String(contador).padStart(6, '0').split('');

	return (
		<div className="Cajanegra">
			<div className="reloj"><i className="fa-regular fa-clock"></i></div>
			<div className="seis">{digitos[0]}</div>
			<div className="cinco">{digitos[1]}</div>
			<div className="cuatro">{digitos[2]}</div>
			<div className="tres">{digitos[3]}</div>
			<div className="dos">{digitos[4]}</div>
			<div className="uno">{digitos[5]}</div>

			
			<div style={{
	display: 'flex',
	justifyContent: 'center',
	marginTop: '20px',
	gap: '10px'
}}></div>
			<div style={{ marginTop: '20px' }}>
				<button onClick={() => setActivo(false)}style={botonEstilo}>⏸</button>
				<button onClick={() => setActivo(true)} style={botonEstilo}>▶️ </button>
				<button onClick={() => {
					setContador(0);
					setActivo(false);
				}}style={botonEstilo}>🔄 </button>
			</div>
		</div>
	);
};
const botonEstilo = {
	backgroundColor: 'black',
	color: 'white',
	border: 'none',
	padding: '5px 10px',
	margin: '5px',
	fontSize: '20px',
	borderRadius: '5px',
	cursor: 'pointer'
};
export default MiContador;