import {useState, useEffect} from 'react'
import CartItem from '../CartItem'
import NxtMartContext from '../../context/NxtMartContext'

import './index.css'

const CartListView = props => {
  const {cartList} = props

  return (
    <ul className="cart-list">
      {cartList.map(eachCartItem => (
        <div data-testid="cartItem">
          <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
        </div>
      ))}
    </ul>
  )
}

export default CartListView
