import * as React from "react";
import {
	HashRouter,
	Link,
	Switch,
	Route,
} from "react-router-dom";
import * as ReactDOM from "react-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Details from "./components/Details";
import ProductDetails from "./components/ProductDetails";

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
						<Link to="/"> Home</Link>
					</li>
					
					<li>
						<Link to="/cart"> Men</Link>
					</li>
					<li>
						<Link to="/detail"> Details</Link>
					</li>
				</ul>
			</nav>

			<Switch>
				
				<Route path="/cart" children={<Cart />} />
				<Route exact  path="/" children={<Home />} />
				<Route path="/product/:product" children={<ProductDetails />}/>
				
			</Switch>
		</HashRouter>
	);
}

ReactDOM.render(<App />, appDiv);
