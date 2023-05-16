import React from 'react'
import HOC from './HOC'

const Orders = () => {
  return (
    <>
          <div className="Head">
        <div>
          <h4>Plan & Pricing</h4>
          <p>
            Simple Pricing, No hidden fees, Advance feature for your business
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              setEdit(false);
              setModalShow(true);
            }}
          >
            + Create New
          </button>
        </div>
      </div>
    </>
  )
}

export default HOC(Orders)