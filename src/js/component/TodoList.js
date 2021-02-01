import React from "react";
import PropTypes from "prop-types";

// forma de utilizar los props
const TodoList = ({ list, deleteTask }) => {
	return (
		<React.Fragment>
			<div className="card">
				<ul className="list-group list-group-flush">
					{list.map((task, index) => {
						return (
							<li
								className="list-group-item list-group-item-info lead d-flex justify-content-between"
								key={index}
								onClick={e => {
									deleteTask(index);
								}}>
								{task.label}
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
					<p>Pending Chores: {list.length}</p>
				) : null}
			</div>
		</React.Fragment>
	);
};
// props del componente TodoInput
TodoList.propTypes = {
	list: PropTypes.array,
	deleteTask: PropTypes.func
};

export default TodoList;
