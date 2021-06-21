import * as React from "react";
import {
	HashRouter,
	Link,
	Switch,
	Route,
} from "react-router-dom";
import * as ReactDOM from "react-dom";
import User from "./components/User";
import Home from "./components/Home";

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
						<Link to="/"> Contributors</Link>
					</li>
					
					<li>
						<Link to="/users/mbovel">Details</Link>
					</li>
					
				</ul>
			</nav>

			<Switch>
				
				<Route exact path="/" children={<Home />} />
				<Route path="/users/:username" children={<User />} />
			</Switch>
		</HashRouter>
	);
}

ReactDOM.render(<App />, appDiv);
