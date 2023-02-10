import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getItemsCart, getTotalCart } from '../store/selectors/cartSelector'
import CartItem from './CartItem'

const Cart = ({isCartActive}) => {

  const navigate = useNavigate()
    
    const itemsCart = useSelector(getItemsCart)
    const totalPrice = useSelector(getTotalCart)

    const goToCheckout = () => {
      navigate(`/checkout`);
    
  }
  return ( 
      <>
      { isCartActive &&
        <div className='absolute z-10 bg-pink-50 right-0 top-20 border-4 border-gray-900 p-5'>
        <h3 className='text-xl font-bold text-center'>Mon Panier</h3>
        {/* LISTE DES ITEMS */}
        {
        itemsCart.length > 0 ? 
        itemsCart.map((item) => (
        <CartItem key={item.id} product={item} />
        )) :
        <p>Panier vide</p>
     }

     <p className='my-4 font-bold'>Total : {totalPrice} $</p>

<div className='flex justify-center'>
<button 
onClick={goToCheckout}
className='py-4 px-10 bg-pink-700 text-pink-50 shadow-sm shadow-black hover:bg-pink-300 hover:text-gray-900'>Passer au paiement</button>
</div>
        
    </div>
      }
       </> 
   
  )
}

export default Cart