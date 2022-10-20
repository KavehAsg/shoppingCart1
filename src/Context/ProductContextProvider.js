import { useEffect , useState , createContext } from "react";

//API
import { getProduct } from "../Services/API";

const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const [products , setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setProducts(await getProduct());
        }

        fetchData();
    } , [])

    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductContextProvider;