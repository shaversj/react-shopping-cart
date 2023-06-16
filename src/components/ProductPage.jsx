import data from '../../data.json'
import ProductList from "./ProductList.jsx";
import Header from "./Header.jsx";
import {CartContextProvider} from "./CartContext.jsx";
const ProductPage = () => {

    return (
        <CartContextProvider>
            <div className={"grid place-items-center"}>
                <Header />
                <ProductList products={data} />
            </div>
        </CartContextProvider>

    );
};

export default ProductPage;