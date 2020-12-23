import React from "react";
import TodoInput from "./TodoInput.js";

//create your first component
export function Home() {
	return (
		<div className="container-fluid col-10">
			<h1 className="text-center">Do you have something to do?</h1>
			<TodoInput />
		</div>
	);
}
