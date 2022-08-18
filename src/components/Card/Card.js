import React from 'react'
import styles from './Card.module.css'

const Card = ({ food }) => {
  const placeOrder = (orderItem) => {
    console.log(orderItem)
    let url = ''
    for (let key in orderItem) {
      url += `${key}=${orderItem[key]}&`
    }
    window.location.assign(`/place-order?${url}`)
  }
  return (
    <div className={styles.Card}>
        <img alt={food.name} src={food.image} />
        <h2>{food.name}</h2>

        <p>
          Ratings: {food.ratings}
          <br />
          Type {food.type}
          <br />
          Price {food.price}
        </p>

      <button onClick={()=>{placeOrder(food)}}>Place Order</button>
    </div>
  )
}
Card.propTypes = {}

Card.defaultProps = {}

export default Card
