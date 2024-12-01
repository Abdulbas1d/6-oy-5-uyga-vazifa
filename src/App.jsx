import React from 'react'
import './App.css'
import calculatorIcon from './assets/images/calculator-icon.svg'

function App() {
  return (
    <div className='container'>
      <div className="container-left">
        <form className="form">
          <div className="title">
            <h2>Mortgage Calculator</h2>
            <button className="btnn">Clear All</button>
          </div>

          <label className='amountLabel' htmlFor="amount">Mortgage Amount</label>
          <div className="amount">
            <h3>£</h3>
            <input id='amount' type="number" />
          </div>

          <div className="inputs">
            <div className="inputTerm">
              <label htmlFor='term'>Mortgage Term</label>
              <div className="inInput">
                <input id='term' type="number" />
                <h3 className='year'>years</h3>
              </div>
            </div>

            <div className="inputRate">
              <label htmlFor="rate">Interest Rate</label>
              <div className="inInput-two">
                <input id='rate' type="number" />
                <h3>%</h3>
              </div>
            </div>
          </div>

          <h3 className='type'>Mortgage Type</h3>

          <div className="repayments">
            <label htmlFor="repayment">
              <input id='repayment' type="radio" />
              <span>Repayment</span>
            </label>
          </div>

          <div className="interstOnly">
            <label htmlFor="interestOnly">
              <input id='interestOnly' type="radio" />
              <span>Interest Only</span>
            </label>
          </div>
          <button className="btn">
            <img src={calculatorIcon} alt="" />
            Calculate Repayments
          </button>
        </form>
      </div>

      <div className="container-right"></div>
    </div>
  )
}

export default App