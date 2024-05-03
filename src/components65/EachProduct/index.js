import './index.css'

import CartContext from '../../context/CartContext'
import {Component} from 'react'
class EachProduct extends Component {
  state = {details: {}, quantityy: 1, Btnclick: false, quantity: 1}
  componentDidMount() {
    const {details} = this.props
    this.setState({details})
  }
  bt = () => {
    const {quantityy} = this.state
    if (quantityy === 0) {
      this.setState({Btnclick: false})
    }
  }
  onClickDecrement = () => {
    this.setState(prevstate => ({quantityy: prevstate.quantityy - 1}), this.bt)
  }
  onClickIncrement = () => {
    this.setState(prevstate => ({quantityy: prevstate.quantityy + 1}), this.bt)
  }

  render() {
    const {details, quantityy, Btnclick, quantity} = this.state
    const {id, image, name, price, weight} = details
    //console.log(details)

    return (
      <CartContext.Consumer>
        {value => {
          const {
            addCartItem,
            incrementCartItemQuantity,
            decrementCartItemQuantity,
            cartList,
          } = value

          const onClickAddToCart = () => {
            addCartItem({...details, quantity})
            this.setState({Btnclick: true})
          }
          return (
            <div className="eachprodectbg">
              <img className="eachproductImg" src={image} alt={name} />
              <div className="carddetails">
                <div className="detailscard">
                  <p className="productname">{name}</p>
                  <p className="productweight">{weight}</p>
                  <p className="productprice">{price}</p>
                  {Btnclick === false ? (
                    <button
                      type="button"
                      className="productbutton"
                      onClick={onClickAddToCart}
                      data-testid="active-count"
                    >
                      Add
                    </button>
                  ) : (
                    <div className="cart-quantity-container">
                      <button
                        type="button"
                        className="quantity-controller-button"
                        data-testid="decrement-count"
                        onClick={this.onClickDecrement}
                      >
                        -
                      </button>
                      <p className="cart-quantity" data-testid="active-count">
                        {quantityy}
                      </p>{' '}
                      {/* Added data-testid */}
                      <button
                        type="button"
                        className="quantity-controller-button"
                        data-testid="increment-count"
                        onClick={this.onClickIncrement}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
                <div></div>
              </div>
            </div>
          )
        }}
      </CartContext.Consumer>
    )

    //console.log(details)
  }
}
export default EachProduct
