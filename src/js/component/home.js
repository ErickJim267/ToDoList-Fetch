import React, { useState } from "react";

//incorpora un componente llamado lista

//include images into your bundle

//create your first component
const Home = () => {
	const [task, setTask] = useState("");
	const [list, setList] = useState([]);
	const deleteTask = indexTask => {
		setList(prevState =>
			prevState.filter((todo, index) => index !== indexTask)
		);
	};

	return (
		<div className="container-fluid col-10">
			<h1 className="text-center">Do you have something to do?</h1>

			<input
				className="lead col-12"
				value={task}
				onKeyDown={e => {
					if (e.keyCode == 13) {
						let nuevaLista = [];
						for (let i = 0; i < list.length; i++) {
							nuevaLista.push(list[i]);
						}
						nuevaLista.push(task);
						setList(nuevaLista);
						setTask("");
					}
				}}
				onChange={e => {
					setTask(e.target.value);
				}}
				type="text"
				placeholder="Write it here"
			/>
			<div className="card">
				<ul className="list-group list-group-flush">
					{list.map((cosas, index) => {
						return (
							<li
								className="list-group-item list-group-item-info lead d-flex justify-content-between"
								key={index}
								onClick={e => {
									deleteTask(index);
								}}>
								{cosas}
								<div className="btn btn-danger btn-sm">
									<i className="fas fa-times" />
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="card-footer lead text-muted text-center">
				{list.length < 1 ? (
					<p>Nothing to do</p>
				) : list.length >= 1 ? (
					<p>Pending Task: {list.length}</p>
				) : null}
			</div>
		</div>
	);
};
export default Home;
