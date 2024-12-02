import React, { useState } from 'react'
import './App.css'
import calculatorIcon from './assets/images/calculator-icon.svg'

function App() {
  const [mortage, setMortage] = useState(null)
  // const []
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
              <input id='repayment' name='mortgageType' type="radio" />
              <span>Repayment</span>
            </label>
          </div>

          <div className="interstOnlys">
            <label htmlFor="interestOnly">
              <input id='interestOnly' name='mortgageType' type="radio" />
              <span>Interest Only</span>
            </label>
          </div>
          <button className="btn">
            <img src={calculatorIcon} alt="" />
            Calculate Repayments
          </button>
        </form>
      </div>

      <div className="container-right">
        <h2>Your results</h2>
        <h5>Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</h5>

        <div className="answersheet">
          <h4>Your monthly repayments</h4>
          <h1>£1,797.74</h1>

          <hr />

          <h4 className='over'>Total you'll repay over the term</h4>
          <h2>£539,322.94</h2>
        </div>
      </div>
    </div>
  )
}

export default App