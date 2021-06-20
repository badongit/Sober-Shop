import React from 'react'
import './cart-detail.scss'
import { FaTimes } from 'react-icons/fa';

export default function Cart() {
  return (
    <div>
      <div className="cart_content">
        <div className="cart_item">
          <div className="cart_info">
            <img src="https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-11-433x516.jpg" alt="" />
            <span className="cart_info_name">Name 1</span>
          </div>
          <div className="cart_qty">
            Qty: <span className="cart_qty_number">1</span>
          </div>
          <div className="cart_price">25000d</div>
          <div className="cart_delete">
            <a href="#" onClick={() => alert(1)}>
              <FaTimes color="#212529" fontSize={18} />
            </a>
          </div>
        </div>
        <div className="cart_item">
          <div className="cart_info">
            <img src="https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-11-433x516.jpg" alt="" />
            <span className="cart_info_name">Name 1</span>
          </div>
          <div className="cart_qty">
            Qty: <span className="cart_qty_number">1</span>
          </div>
          <div className="cart_price">25000d</div>
          <div className="cart_delete">
            <a href="#" onClick={() => alert(1)}>
              <FaTimes color="#212529" fontSize={18} />
            </a>
          </div>
        </div>
        <div className="cart_item">
          <div className="cart_info">
            <img src="https://demo.uix.store/sober/wp-content/uploads/sites/2/2016/07/1-11-433x516.jpg" alt="" />
            <span className="cart_info_name">Name 1</span>
          </div>
          <div className="cart_qty">
            Qty: <span className="cart_qty_number">1</span>
          </div>
          <div className="cart_price">25000d</div>
          <div className="cart_delete">
            <a href="#" onClick={() => alert(1)}>
              <FaTimes color="#212529" fontSize={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="cart_action">
        <a href="#" className="button_checkout">
          <span className="button_checkout-subtotal">
            <span>25.00d</span>
            <span>Checkout</span>
          </span>
        </a>

        <a href="#" className="view_cart">
          View Cart
        </a>
      </div>
    </div>
  )
}
