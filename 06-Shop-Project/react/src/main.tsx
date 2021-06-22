import * as React from "react";
import {
	HashRouter,
	Link,
	Switch,
	Route,
} from "react-router-dom";
import * as ReactDOM from "react-dom";
import Men from "./components/Men";
import Home from "./components/Home";
import Category from "./components/category";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
	throw new Error("No div with id 'app' found");
}

export default function App() {
	return (
		<HashRouter>
			<nav>
				<ul>
					<li>
						<Link to="/">❤️ Home</Link>
					</li>
					<li>
						<Link to="/women">🐱 Women</Link>
					</li>
					<li>
						<Link to="/Men">🐶 Men</Link>
					</li>
					<li>
						<Link to="/Category">🐶 Category</Link>
					</li>
				</ul>
			</nav>

			<Switch>
				
				<Route path="/dogs/:breed" children={<Men />} />
				<Route exact path="/" children={<Home />} />
				<Route path="/" children={<Category/>}/>
			</Switch>
		</HashRouter>
	);
}

ReactDOM.render(<App />, appDiv);
