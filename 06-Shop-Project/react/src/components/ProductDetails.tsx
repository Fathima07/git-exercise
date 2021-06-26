import * as React from "react";
import { useParams } from "react-router-dom";


type ProductInfo = {
    id: number
    price: number
    title: string
    image: string
    description: string
}

type ProductsResponse = {
    count: number;
    previous: string | null;
    next: string | null;
    results: ProductInfo[]
} | null


export default function ProductDetails() {
    const [product, setProduct] =
        React.useState<ProductsResponse>();

    const params = useParams<{ product: string }>();
    console.log(params);
    React.useEffect(() => {
        const PRODUCT_URL = '/shop/products/?id=' + params.product

        const fetchData = async () => {
            const response = await fetch(PRODUCT_URL);
            const json = await response.json();

            setProduct(json);
        }

        fetchData();


    }, [params]);
    return (

        <main>
            {
                product && product.results[0] ? (
                    <div>
                        <h1>{product.results[0]?.title}</h1>
                        <img src={product.results[0]?.image} />
                        <p>Price: {product.results[0]?.price}</p>
                        <p>Description: {product.results[0]?.description}</p>
                    </div>
                ) : 'There is no item'
            }

        </main>
    );
}