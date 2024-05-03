import EachProduct from '../EachProduct'
import './index.css'
const EachcatagoriItem = props => {
  const {details} = props
  const {name, products} = details
  //console.log(details)
  return (
    <div className="main_card">
      <h2>{name}</h2>
      <div className="eachitem">
        {products.map(each => {
          return <EachProduct key={each.id} details={each} />
        })}
      </div>
    </div>
  )
}
export default EachcatagoriItem
