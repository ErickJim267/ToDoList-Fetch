import React, { useEffect, useState } from "react";
import TodoList from "./TodoList.js";

const TodoInput = () => {
	const BASE_URL = "https://assets.breatheco.de/apis/fake/todos/user/Rainfire267";
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);
	const deleteTask = indexTask => {
		setList(prevState =>
			prevState.filter((chores, index) => index !== indexTask)
		);
	};

	useEffect(() => {
		const getTasks = async path => {
			let response = await fetch(url);
			let APIlist = await response.json();
			setList(APIlist);
		};
		let url = `${BASE_URL}`;
		getTasks(url);
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
						let url = `${BASE_URL}`;
						let response = await fetch(url, {
							method: "PUT",
							body: JSON.stringify(newList),
							headers: {
								"Content-Type": "application/json"
							}
						});
						if (response.ok) {
							let response = await fetch(url);
							let APIlist = await response.json();
							setList(APIlist);
							setTask("");
						} else {
							alert("Try again please");
						}
					}
				}}
				onChange={e => {
					setTask(e.target.value);
				}}
				type="text"
				placeholder="Write your to dos here"
			/>
			{}
			<TodoList list={list} deleteTask={deleteTask} />
		</React.Fragment>
	);
};

export default TodoInput;
