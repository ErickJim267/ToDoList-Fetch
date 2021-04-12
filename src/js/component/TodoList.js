import React from "react";
import PropTypes from "prop-types";

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
									<i className="fas fa-trash-alt" />
								</div>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="card-footer lead text-muted text-center">
				{list.length < 1 ? (
					<p>Add a To Do Here!</p>
				) : list.length >= 1 ? (
					<p>Pending: {list.length}</p>
				) : null}
			</div>
		</React.Fragment>
	);
};
TodoList.propTypes = {
	list: PropTypes.array,
	deleteTask: PropTypes.func
};
export default TodoList;
