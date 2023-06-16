import Product from "./Product.jsx";

const ProductList = ({products}) => {
    return (
        <div className={"container grid place-items-center md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 border border-black "}>

            {products.map((product) => <Product key={product.id} product={product}/>)}
        </div>
    );
};

export default ProductList;