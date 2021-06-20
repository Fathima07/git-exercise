import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

interface userInfo {
	firstName: string;
	lastName: string;
	age: string;
}

const App = () => {
	const [user, setUser] = React.useState<userInfo>({
		firstName: "",
		lastName: "",
		age: "",
	});
	const [updated,updateForm]=React.useState(true);

	const [formSubmited,submitForm]= React.useState(false);

	return (
		(formSubmited)?
		<div>
			<p>FirstName : {user.firstName}</p>
		<p>LastName : {user.lastName}</p>
		<p>Age : {user.age}</p>
		<p>Thank you for submitting the form</p>
		</div>
		:
		<form
			onChange={(e) => {
				e.preventDefault();
				
			}}
		> <label htmlFor="">First Name:</label>
			<input
				type="text"
				value={user.firstName}
				
				onChange={(e) => {
					setUser({...user,firstName:e.target.value});
				}}
			/> <br />
			<label htmlFor="">Last Name:</label>
			<input
				type="text"
				
				value={user.lastName}
				onChange={(e) => {
					setUser({...user,lastName:e.target.value});
				}}
			/> <br />
			<label htmlFor="">Age:</label>
			<input
				type="number"
				
				value={user.age}
				onChange={(e) => {
					setUser({...user,age:e.target.value});
				}}
			/> <br />
			<input type="submit" value="Send my data" onClick={()=>submitForm(true)}/>
		</form>
	);
};

	


ReactDOM.render(<App />, appDiv);
