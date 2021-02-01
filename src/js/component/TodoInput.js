import React, { useEffect, useState } from "react";
import TodoList from "./TodoList.js";

// component input
const TodoInput = () => {
	// url base de la Api
	const BASE_URL = "https://assets.breatheco.de/apis/fake/todos";
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);
	const deleteTask = indexTask => {
		setList(prevState =>
			prevState.filter((chores, index) => index !== indexTask)
		);
	};

	useEffect(() => {
		// USING ASYNC AWAIT
		// Por defecto fetch es método GET y es application json
		const getTasks = async path => {
			let response = await fetch(url);
			let APIlist = await response.json();
			// response.json también devuelve una promesa, toma un tiempo en ejecutarse.
			setList(APIlist);
		};
		let url = `${BASE_URL}/user/mariea`;
		getTasks(url);
		// USING THEN
		// el argumento que recibe el segundo then es la respuesta del primero, es decir, response.json
		// fetch(url)
		// 	.then(response => response.json())
		// 	.then(APIlist => setList(APIlist))
		// 	.catch(error => console.log(`{error}`));
	}, []);

	return (
		<React.Fragment>
			<input
				className="lead col-12"
				value={task}
				onKeyDown={async e => {
					if (e.key == "Enter") {
						let newList = [];
						for (let i = 0; i < list.length; i++) {
							newList.push(list[i]);
						}
						newList.push({
							label: task,
							done: false
						});
						let url = `${BASE_URL}/user/mariea`;
						// el segundo argumento del FETCH con propiedades de la solicitud.
						let response = await fetch(url, {
							// POST en la api se utiliza para crear un usuario, para actualizar la lista se utiliza PUT.
							method: "PUT",
							body: JSON.stringify(newList),
							// newList no esta escrito en formato JSON, y la API espera un formato JSON. Para eso
							// se utiliza JSON.stringify.
							headers: {
								"Content-Type": "application/json"
								// especifica el tipo datos que se van a intercambiar en la solicitud.
							}
						});
						if (response.ok) {
							// response.ok (boolean) devuelve true y ejecuta la promesa. Si no, devuelve el alert.
							let response = await fetch(url);
							let APIlist = await response.json();
							setList(APIlist);
							setTask("");
						} else {
							alert("something went wrong, do it again!");
						}
					}
				}}
				// cambio de estado donde se almacenan las tareas
				onChange={e => {
					setTask(e.target.value);
				}}
				type="text"
				placeholder="Write it here"
			/>
			{/* componente que muestra la lista de Tareas */}
			<TodoList list={list} deleteTask={deleteTask} />
		</React.Fragment>
	);
};

export default TodoInput;
