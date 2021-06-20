import React, {useState} from 'react'
import CartDetail from './CartDetail/CartDetail';
import './cart.scss'

export default function Cart() {
  const [currentTab, setCurrentTab] = useState(1);
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="Carousel">
      <div className="main-tab">
        <a
          href="javascript: void(0);"
          onClick={() => {setCurrentTab(1); setIsActive(1)}}
          className={isActive === 1 ? 'main-tab-item active' : 'main-tab-item'}
        >
          Shopping Cart
          <span className="cart-counter">1</span>
        </a>
        <a
          href="javascript: void(0);"
          onClick={() => {setCurrentTab(2); setIsActive(2)}}
          className={isActive === 2 ? 'main-tab-item active' : 'main-tab-item'}
        >
          Wishlist
          <span className="cart-counter">0</span>
        </a>
      </div>
      <div className="tab-content">
        {
          currentTab === 1 && <CartDetail />
        }
        {
          currentTab === 2 && '222' // TODO: Add component
        }
      </div>

    </div>
  )
}
