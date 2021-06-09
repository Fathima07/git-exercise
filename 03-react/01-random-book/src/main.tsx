import * as React from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

const books: string[] = [
	"Anna Karenina",
	"To Kill a Mockingbird",
	"The Great Gatsby",
	"One Hundred Years of Solitude",
	"A Passage to India",
	"Invisible Man",
	"Don Quixote",
	"Beloved",
	"Mrs. Dalloway",
	"Things Fall Apart",
	"Jane Eyre",
	"The Color Purple",
];

const getRandomBook = (): string => {
	return books[Math.floor(Math.random() * books.length)];
};

const getRandColor = (): string => {
	var red = Math.floor(Math.random() * 256); // gets random number from 0-255
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return (red + "," + green + "," + blue);
}

const App = (): JSX.Element => {
	return (
		<p style={{ backgroundColor: "rgb(" + getRandColor() + ")",padding: "20px"}}>
			{getRandomBook()}
		</p>
	);
};

ReactDOM.render(<App />, appDiv);
