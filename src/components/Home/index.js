/*import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Products from '../Products'
import Category from '../Category'
import Footer from '../Footer'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    productsList: [],
    apiStatus: apiStatusConstants.initial,
    activeCategory: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://run.mocky.io/v3/947e05e1-cd6a-4af9-93e7-0727fba9fec4'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.categories.map(each => ({
        name: each.name,
        products: each.products,
      }))
      this.setState({
        productsList: updatedData,
        apiStatus: apiStatusConstants.success,
        activeCategory: updatedData[0].name,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  updateActiveCategory = name => {
    this.setState({activeCategory: name})
  }

  getFilteredData = () => {
    const {productsList} = this.state
    const {activeCategory} = this.state
    const filteredData = productsList.filter(
      each => each.name === activeCategory,
    )
    return filteredData
  }

  renderLoadingView = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onClickRetry = () => {
    this.getProducts()
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://res.cloudinary.com/dezjxjqqp/image/upload/v1709642523/fail_nzisno.png"
        alt="failure view"
        data-testid="failure view"
      />
      <h1>Oops! Something went wrong</h1>
      <p>We are having Some Trouble.</p>
      <button className="btn" type="button" onClick={this.onClickRetry}>
        Retry
      </button>
    </div>
  )

  renderProductsListView = () => {
    const data = this.getFilteredData()
    return (
      <div className="products-container">
        {data.map(eachItem => (
          <Products key={eachItem.name} productDetails={eachItem} />
        ))}
      </div>
    )
  }

  renderApiStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderProductsListView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {productsList, activeCategory} = this.state
    return (
      <>
        <Header />
        <div className="home-container">
          <Category
            details={productsList}
            updateActiveCategory={this.updateActiveCategory}
            activeCategory={activeCategory}
          />
          {this.renderApiStatus()}
        </div>
        <Footer />
      </>
    )
  }
}

export default Home
*/

import {Component} from 'react'

import Products from '../Products'
import Category from '../Category'
import EachCatagorie from '../EachCatagorie'

import Loader from 'react-loader-spinner'
import Header from '../Header'

import Footer from '../Footer'
import './index.css'
import {Link} from 'react-router-dom'

class Home extends Component {
  state = {
    products: [],
    issucess: 'loading',
    selectedited: 'all',
    filterd: [],
    categorielement: [],
    isallbtnclick: true,
  }
  componentDidMount() {
    this.getdata()
  }
  getdata = async () => {
    const {selectedited, isallbtnclick} = this.state
    //console.log(selectedited)

    this.setState({issucess: 'loading'})
    const url = 'https://run.mocky.io/v3/947e05e1-cd6a-4af9-93e7-0727fba9fec4'

    const response = await fetch(url)
    //console.log(response)
    if (response.ok == true) {
      const data = await response.json()
      //console.log(data)
      const filterdata = data.categories.filter(
        each => each.name == selectedited,
      )
      //console.log(filterdata)
      const notfilterdata = data.categories.filter(
        each => each.name != selectedited,
      )
      //console.log(notfilterdata)

      this.setState({
        products: notfilterdata,
        filterd: filterdata,
        issucess: 'sucess',
        categorielement: data.categories,
      })
    } else {
      this.setState({issucess: 'failed'})
    }
  }
  selecteditemuser = details1 => {
    //console.log(details1)
    this.setState(
      {selectedited: details1.name, isallbtnclick: false},
      this.getdata,
    )
  }
  pageloading = () => {
    return (
      <div className="loader-container loadercard" data-testid="loader">
        <Loader type="ThreeDots" color="##279e27" height={50} width={50} />
      </div>
    )
  }
  failuresection = () => {
    return (
      <div>
        <div className="failure_card">
          <img
            src="https://res.cloudinary.com/dzjxowhgb/image/upload/v1713534094/vgb9geae4v0cuqhn6ebq.png"
            alt="failure view"
          />
          <h1>Oops! Something went Wrong.</h1>
          <p>We are having some trouble.</p>
          <button onClick={this.getdata} className="retrybtn">
            Retry
          </button>
        </div>
      </div>
    )
  }
  clickallbtn = () => {
    this.getdata()
    this.setState({isallbtnclick: true, selectedited: 'all'})
  }
  sucessdatahome = () => {
    const {products, filterd, categorielement, selectedited, isallbtnclick} =
      this.state
    const alldesignel = isallbtnclick ? 'applybgcolor' : 'allbtn'

    return (
      <div>
        <div className="homecard">
          <div className="categoriecard">
            <h1 className="categoriestext">Categories</h1>
            <ul className="ullistform">
              <li>
                <button className={alldesignel} onClick={this.clickallbtn}>
                  All
                </button>
              </li>
              {categorielement.map(each => {
                return (
                  <EachCatagorie
                    details={each}
                    selecteditemuser={this.selecteditemuser}
                    isseleted={each.name == selectedited}
                  />
                )
              })}
            </ul>
          </div>
          <div className="productcard">
            <ul>
              {filterd.map(each => {
                return <Products key={each.name} productDetails={each} />
              })}
              {products.map(each => {
                return <Products key={each.name} productDetails={each} />
              })}
            </ul>
          </div>
        </div>

        <div className="homeheaderformb">
          <Footer />
        </div>

        <div className="formbl">
          <Header />
        </div>
      </div>
    )
  }
  switchcaseel = () => {
    const {issucess} = this.state
    switch (issucess) {
      case 'loading':
        return this.pageloading()
      case 'failed':
        return this.failuresection()
      case 'sucess':
        return this.sucessdatahome()
    }
  }
  render() {
    const {products, issucess} = this.state

    // console.log(products)

    return (
      <div className="bg_container">
        <div className="homeheaderformb">
          <Header />
        </div>

        {this.switchcaseel()}
      </div>
    )
  }
}
export default Home
