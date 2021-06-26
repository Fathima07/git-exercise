import * as React from "react";
import { Link, } from "react-router-dom";
import { useParams } from "react-router-dom";


type CreateDetails = {
  id : number;
  title : string;
  image : string;
  price:number;
  description: string;


}


 export default function Details() {
 const [det,setDet] = React.useState<CreateDetails[]>();



   return <p>Welcome to my awesome website!</p>;
}