import { useDispatch } from "react-redux";
import { addProductToCart, removeProductFromCart } from "../store/actions/cartActions";

const CartItem = ({product}) => {
    const dispatch = useDispatch();

    const removeProduct = () => {
       dispatch(removeProductFromCart(product))
    }

    const addProduct = () => {
      dispatch(addProductToCart(product))
    }
  return (
    <div className=' w-full flex justify-between items-center gap-6 my-3'>
        <img src={product.image} alt={product.image} width={60} height={60} />
        <p>{product.title}</p>
       
        
        <div className="flex gap-3">
        <button
          onClick={removeProduct}
          className='font-bold text-pink-700 text-lg'>-</button>
          <p> x{product.quantity}</p>
          <button
          onClick={addProduct}
          className='font-bold text-pink-700 text-lg'>+</button>
        </div>

        <p>{product.price}$</p> 
      

        

    </div>
  )
}

export default CartItem