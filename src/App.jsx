import React, { useState } from 'react'
import './App.css'
import calculatorIcon from './assets/images/calculator-icon.svg'

function App() {
  const [mortageInput, setMortageInput] = useState("")
  const [mortageTerm, setMortageTerm] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [outputOne, setOutputOne] = useState('0')
  const [outputTwo, setOutputTwo] = useState('0')

  function validate() {
    if (!mortageInput) {
      alert("Biror bir miqdor kiritishingiz kerak!")
      return false
    }

    if (!mortageTerm) {
      alert("Necha yilga olishingizni ham kiritishingiz kerak!")
      return false
    }

    if (!interestRate) {
      alert("Necha foizga olishingizni ham kiritishingiz kerak!")
      return false
    }

    return true
  }

  function outputWindow(event) {
    event.preventDefault()

    let isValid = validate()
    if (!isValid) {
      return
    }

    const monthlyInterestRate = interestRate / (100 * 12);
    const totalMonths = mortageTerm * 12;
    const resultOne = (mortageInput * monthlyInterestRate * (1 + monthlyInterestRate) ** totalMonths) / ((1 + monthlyInterestRate) ** totalMonths - 1);
    const resultTwo = resultOne * totalMonths
    setOutputOne(resultOne.toFixed(2))
    setOutputTwo(resultTwo.toFixed(2))
  }

  function clearAll(event) {

    event.preventDefault();
    setMortageInput('');
    setMortageTerm('');
    setInterestRate('');
    setOutputOne('0')
    setOutputTwo('0')
  }

  return (
    <div className='container'>
      <div className="container-left">
        <form className="form">
          <div className="title">
            <h2>Mortgage Calculator</h2>
            <button className="btnn" type='button' onClick={clearAll}>Clear All</button>
          </div>

          <label className='amountLabel' htmlFor="amount">Mortgage Amount</label>
          <div className="amount">
            <h3>£</h3>
            <input id='amount' type="number" value={mortageInput} onChange={(e) => setMortageInput(e.target.value)} />
          </div>

          <div className="inputs">
            <div className="inputTerm">
              <label htmlFor='term'>Mortgage Term</label>
              <div className="inInput">
                <input id='term' type="number" value={mortageTerm} onChange={(e) => setMortageTerm(e.target.value)} />
                <h3 className='year'>years</h3>
              </div>
            </div>

            <div className="inputRate">
              <label htmlFor="rate">Interest Rate</label>
              <div className="inInput-two">
                <input id='rate' type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
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
          <button className="btn" onClick={(e) => outputWindow(e)}>
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
          <h1>£ {outputOne}</h1>

          <hr />

          <h4 className='over'>Total you'll repay over the term</h4>
          <h2>£ {outputTwo}</h2>
        </div>
      </div>
    </div>
  )
}

export default App