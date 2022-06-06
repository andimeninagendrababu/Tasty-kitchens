import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {FaRupeeSign} from 'react-icons/fa'

import CartContext from '../../Context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementCartItemQuantity, decrementCartItemQuantity} = value
      const {cartItem} = props
      const {id, name, quantity, cost, imageUrl} = cartItem

      const decreaseQuantity = () => {
        decrementCartItemQuantity(id)
      }

      const increaseQuantity = () => {
        incrementCartItemQuantity(id)
      }

      return (
        <li className="cart-item" testId="cartItem">
          <div className="cart-item-info" testId="cartItem">
            <img src={imageUrl} alt={name} className="cart-item-image" />
            <h1 className="cart-item-desktop-name">{name}</h1>
          </div>
          <div className="cart-qty-price-cont" testId="cartItem">
            <h1 className="cart-item-mobile-name">{name}</h1>
            <div className="cart-qty-container">
              <button
                className="decrement-quantity"
                type="button"
                onClick={decreaseQuantity}
                testId="decrement-quantity"
              >
                <BsDashSquare size={16} />
              </button>
              <p testId="item-quantity" className="item-quantity">
                {quantity}
              </p>
              <button
                className="increment-quantity"
                type="button"
                onClick={increaseQuantity}
                testId="increment-quantity"
              >
                <BsPlusSquare size={16} />
              </button>
            </div>
            <p className="price" testId="total-price">
              <FaRupeeSign size={12} /> {cost * quantity}
            </p>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
