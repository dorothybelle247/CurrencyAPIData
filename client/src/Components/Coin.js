import React from 'react'
import {Link} from 'react-router-dom'

const Coin = ({coin}) => {
  return (
    <Link to="/JARdETAIL">
    <li className="jarlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
        <img className="jarlist-image" src={coin.image} />
        <span className="text-decoration-none">
            {coin.current_price}
        </span>
        <span className={
            coin.price_change_percentage_24h < 0
              ? "text-danger mr-2"
              : "text-success mr-2"
          }>

<i className="fas fa-sort-down align-middle mr-1"></i>



        {coin.price_change_percentage_24h}</span>

        <i className="delete-icon far fa-times-circle text-danger"
        ></i>
    </li>
    </Link>
  )
}

export default Coin
