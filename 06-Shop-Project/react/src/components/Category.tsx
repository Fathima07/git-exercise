import * as React from "react";
import {Link,} from "react-router-dom";
import { useParams } from "react-router-dom";

const array = ['Men','Women','Jewellery','Electronics']

type CategoryResponse = {
    id:number;
    title:string;
    price:number;
    category:string;
    image:string;
}


export default function Category() {
 const [item,setItem] = React.useState<CategoryResponse[]>();

	
 React.useEffect(() => {
    fetch(
        `https://fakestoreapi.com/products?limit=10`
    )
        .then((response) => response.json())
        .then(data => {
            console.log(data)
            setItem(data)

        })
}, []);


console.log(item);
return (
    <main>
        {
            item ? item.map((items): JSX.Element => {
                return <article key={items.id} className="home">
                    <p></p>
                    <p className="link"><Link  to={'/item/' + items.image}><h3><img src={items.price} />{use.login}</h3></Link>
                    </p>
                
                    
                    
                </article>
            }) : 'there is no Participants'
        }
    </main>
);
}