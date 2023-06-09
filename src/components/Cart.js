import React from 'react'
import { useCart } from 'react-use-cart'
function Cart() {

    const { isEmpty, items, totalItems, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();
  
    if (isEmpty) return (
        <>
        <h1>Your cart is empty. Please add some items to cart.</h1>
        </>
    )
  
    return (
        <>

    <h1>Cart ({totalItems})</h1>
{
    items.map((item) => {
    return <h1>{item.title}</h1>
})}


<h2>Total: {cartTotal}</h2>
    
    <button onClick={emptyCart}>Empty Cart</button>
</>

  )

}


export default Cart;
