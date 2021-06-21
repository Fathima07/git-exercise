import * as React from "react";
import {
	Link,
} from "react-router-dom";
import { useParams } from "react-router-dom";



interface Participants {
	login: string;
	id: number;
	avatar_url: string;

}


export default function Home() {
	const [users, setUsers] =
		React.useState<Participants[]>();



	React.useEffect(() => {
		fetch(
			`https://api.github.com/repos/Powercoders-Switzerland/2021-1-web-dev/contributors`
		)
			.then((response) => response.json())
			.then(data => {
				console.log(data)
				setUsers(data)

			})
	}, []);


	console.log(users);
	return (
		<main>
			{
				users ? users.map((use): JSX.Element => {
					return <div className="home">
						<p key={use.id}></p>
						<p className="link"><Link  to={'/users/' + use.login} >{use.login}</Link>
						</p>
					
						<p className="image"><img src={use.avatar_url} /></p>
						
					</div>
				}) : 'there is no Participants'
			}
		</main>
	);
}