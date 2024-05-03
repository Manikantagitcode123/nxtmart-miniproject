import Header from '../Header'
import Footer from '../Footer'
import './index.css'
import {Link, withRouter} from 'react-router-dom'
const CartSuccessful = props => {
  const CartSuccessfuldata = () => {
    const cartList = []
    localStorage.setItem('products', JSON.stringify(cartList))
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="sucard">
      <Header />
      <div className="card-data">
        <div className="card-content">
          <img src="https://res.cloudinary.com/dzjxowhgb/image/upload/v1713619180/jvhoiil3npnrbuutmjah.png" />
          <h1>Payment Successful</h1>

          <p>Thank you for ordering</p>
          <button className="btnforhome" onClick={CartSuccessfuldata}>
            Return to Homepage
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default withRouter(CartSuccessful)
