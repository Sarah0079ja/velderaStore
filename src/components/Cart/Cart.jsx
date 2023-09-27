import React from 'react'
import './Cart.scss'
import { Link } from "react-router-dom";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../redux/cartReducer';
import { resetCart } from "../../redux/cartReducer";

// import { Request } from '../../request';



const Cart = () => {
  const products = useSelector((state) => state.cart.products)
  const dispatch = useDispatch();

   const totalPrice = () => {
    let total = 0;
    products.forEach((item )=> (total += item.quantity * item.price));
    return total.toFixed(2)
   }
  
  
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
      {/* onClick={handlePayment} */}
      <button>
        <Link className="link" to="/checkout/checkout">
          Proceed Checkout
        </Link>
      </button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
}

export default Cart