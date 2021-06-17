import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

const IMAGE_URL = "https://pixabay.com/api/?key=22074467-ea25b0753265e5ac25cc6bd70&q=yellow+flowers&image_type=photo";

interface Image {
	previewURL: string;
	previewWidth: number;
	previewHeight: number;
}

const App = (): JSX.Element => {
	const [image, setImage] = useState<Image | null>(null);

	const fetchImage = async () => {
		const response = await fetch(IMAGE_URL);
		const json = await response.json();
		setImage(json);

	};

	return (
		<main>
			<div >
			<input type="text" />
				
				<button onClick={fetchImage}>
					Click
				</button>

				<p id="fet-img">
					<img></img>
					
				</p>
			</div>
		</main>
	);
};

ReactDOM.render(<App />, appDiv);
