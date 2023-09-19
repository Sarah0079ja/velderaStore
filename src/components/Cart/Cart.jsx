import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/cartReducer';
import { resetCart } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { Request } from '../../request';


const Cart = () => {
  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch();

   const totalPrice = () => {
    let total = 0;
    products.forEach((item )=> (total += item.quantity * item.price));
    return total.toFixed(2)
   }
  
   const stripePromise = loadStripe(
     "pk_test_51Ns5HjJ6WK6qYRkTdyrl9sCaay6Bm79L9xuE1PwNRkSXpIcX07czTqM1VInyD3EetdWgifSZsOxh6HXLTonE4arJ00cMV4ejjr"
   );

   const handlePayment = async() => {
    try {
      const stripe = await stripePromise;
      const res = await Request.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id     
      })
    } catch (error) {
      console.log(error) 
    }
   };
  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt={item.title} />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}{" "}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>Proceed Checkout </button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
}

export default Cart