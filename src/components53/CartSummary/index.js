import {useState, useEffect} from 'react'
import {MdCurrencyRupee} from 'react-icons/md'

import NxtMartContext from '../../context/NxtMartContext'

import './index.css'

const CartSummary = props => (
  <NxtMartContext.Consumer>
    {value => {
      const {cartList} = value
      const {onCheckout} = props

      const totalQuantity = cartList.reduce(
        (total, item) => total + item.quantity,
        0,
      )

      const totalPrice = cartList.reduce(
        (total, item) =>
          total + parseFloat(item.price.slice(1)) * item.quantity,
        0,
      )

      const handleCartFunction = () => {
        localStorage.removeItem('cartData')
        onCheckout()
      }
      return (
        <div className="summary-container">
          <div className="summary-content">
            <h1 data-testid="total-price" className="summary-details">
              Total ({totalQuantity} items):
            </h1>
            <p data-testid="total-price" className="summary-details">
              {' '}
              <MdCurrencyRupee /> {totalPrice}
            </p>
          </div>
          <button
            type="button"
            className="checkout-btn"
            onClick={handleCartFunction}
          >
            CheckOut
          </button>
        </div>
      )
    }}
  </NxtMartContext.Consumer>
)

export default CartSummary