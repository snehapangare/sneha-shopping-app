import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "./redux/actions";
import { addCart, removeFromCart } from "../redux/slices/productSlice";

const ProductList = () => {
    const dispatch = useDispatch();
    const { loading, error, products, cart } = useSelector(state => state.catlogue)

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const handleAdd = (dt) => {
        dispatch(addCart(dt))
    }
    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>
    }
    return (
        <div style={{ padding: 20, display:'flex', flexDirection: 'column' }}>
            <h2>Product List</h2>
            {loading && <p>Loading.....!</p>}
            {products.map((product) => (
                <div
                    key={product.id}
                    style={{
                        display: 'flex',
                        margin: '10px',
                        padding: 10,
                        border: '1px solid #ccc'
                    }}
                >
                    <h4>{product.title}</h4>
                    <p>{product.price}</p>
                    <button onClick={() => handleAdd(product)}>+ Add</button>
                </div>
            ))}

            <h2>Cart Items</h2>
            {cart.map(({ id, title }) => {
                return (<div key={`cart_${id}`} style={{ marginBottom: 10 }}>
                    {title}
                    <button onClick={() => handleRemove(id)}>
                        Remove
                    </button>
                </div>)
            })}
        </div>)
}

export default ProductList;