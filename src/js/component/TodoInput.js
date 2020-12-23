import React, { useState } from "react";
import TodoList from "./TodoList.js";

// component input
const TodoInput = () => {
	// hook de las tareas
	const [task, setTask] = useState("");
	// hook de la lista
	const [list, setList] = useState([]);
	// función para eliminar task
	const deleteTask = indexTask => {
		setList(prevState =>
			prevState.filter((chores, index) => index !== indexTask)
		);
	};
	return (
		<React.Fragment>
			<input
				className="lead col-12"
				value={task}
				// nueva tarea cada vez que se presiona enter
				onKeyDown={e => {
					if (e.keyCode == 13) {
						let newList = [];
						for (let i = 0; i < list.length; i++) {
							newList.push(list[i]);
						}
						newList.push(task);
						setList(newList);
						setTask("");
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
