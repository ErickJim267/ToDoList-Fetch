import React from "react";
import TodoInput from "./TodoInput.js";

export function Home() {
	return (
		<div className="container-fluid col-10">
			<h1 className="text-center">Please Add your To Dos Here</h1>
			<TodoInput />
		</div>
	);
}
