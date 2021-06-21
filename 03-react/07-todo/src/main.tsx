import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

interface todoItem {
	created: number;
	done: boolean;
	title: string;
}

const App = () => {
	const [todo, setTodo] = React.useState<todoItem[]>([]);
	const [todoText, updateTodoText] = React.useState("");

	return (
		<form
			onChange={(e) => {
				e.preventDefault();
			}}
		> <label htmlFor="">Todo:</label>
			<input
				type="text"
				value={todoText}

				onChange={(e) => {
					updateTodoText(e.target.value);
				}}
			/> <br />
			<input type="button" value="Add Todo" onClick={() => setTodo([...todo!, {
				created: Date.now(),
				title: todoText,
				done: false
			}])} />
			<ul>
				{todo?.map((value) => <li>{value.title}</li>)}
			</ul>
		</form>
	);
};




ReactDOM.render(<App />, appDiv);
