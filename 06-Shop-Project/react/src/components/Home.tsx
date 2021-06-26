import * as React from "react";
import { Link, } from "react-router-dom";
import { useParams } from "react-router-dom";



type ProductInfo = {
    id: number
    price: number
    title: string
    image: string
}

type Category = {
    category: string
}

type CategoryResponse = {
    count: number;
    previous: string | null;
    next: string | null;
    results: Category[]
} | null

type ProductsResponse = {
    count: number;
    previous: string | null;
    next: string | null;
    results: ProductInfo[]
} | null


export default function Home() {
    const [item, setItem] = React.useState<ProductsResponse>(null);
    const [category, setCategory] = React.useState<CategoryResponse>(null);
    const [selectedCategory, setSelectedCategory] = React.useState<String>('');
    const [offSet, setOffSet] = React.useState<number>(10);
    const [loadMore, loadMoreProducts] = React.useState<Boolean>(false);
    // to get all products
    React.useEffect(() => {
        const CATEGORY_URL = '/shop/categories/'
        const fetchCategories = async () => {
            const response = await fetch(CATEGORY_URL);
            const json = await response.json();
            setOffSet(0);
            setCategory(json);

        }

        fetchCategories();

    }, []);
    React.useEffect(() => {
        const PRODUCT_URL = '/shop/products/?category=' + selectedCategory + '&limit=' + offSet

        const fetchData = async () => {
            const response = await fetch(PRODUCT_URL);
            const json = await response.json();

            setItem(json);
            setOffSet(offSet + 10);
        }

        fetchData();


    }, [selectedCategory, loadMore]);


    return (
        <main className="main-div">
            <section className="category-grid">
                <p className="category" onClick={() => setSelectedCategory('')}>
                    All
                </p>
                {
                    category !== null ? category.results.map((it) => {
                        return <article>
                            <div>
                                <p className="category" onClick={() => setSelectedCategory(it.category)}>
                                    {it.category}
                                </p>
                            </div>
                        </article>
                    }) : "there is no categories"
                }
            </section>
            <section className="products-grid">
                {
                    item !== null ? item.results.map((it) => {
                        return <article key={it.id}>
                            <div>
                                <Link to={'/product/' + it.id.toString()}>
                                    <p> <img src={it.image} /> <br />
                                        Price: {it.price} <br />
                                        {it.title}
                                    </p>
                                </Link>
                            </div>
                        </article>
                    }) : "there is no product"
                }
            </section>
            <button type="button" onClick={() => loadMoreProducts(true)} className="product-btn">Load More</button>

        </main>
    )
}