import * as React from "react";
import { useParams } from "react-router-dom";

type PartcipantsResponse =
	 {
			bio: string;
			name : string;
			location: string;
			avatar_url:string;
			id:number;
			
	  }

	| null;

export default function User() {
	const [user, setUser] =
		React.useState<PartcipantsResponse>();

	const params = useParams<{ username: string }>();
	console.log(params);
    const part_url = `https://api.github.com/users/${params.username}`
	React.useEffect(() => {
		fetch(
			part_url
		)
			.then((response) => response.json())
			.then(data =>{
				console.log(data)
				setUser(data)
	
			})
	}, [params]);
	console.log(user);
   return(
		
		<main>
			<h1>{params.username}</h1>
			{
				user ? (
					<div><img src= {user?.avatar_url}  />
					<p>Full name: {user?.name}</p>
					<p>Location: {user?.location}</p>
					<p>Bio: {user?.bio}</p> 
					</div>
				):'There is no'
			}
			
		</main>
	);
}