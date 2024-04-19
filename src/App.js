import React from 'react';
import { useState } from 'react';
import './App.css';
import { listProducts } from './Components/data/data'
import { Question } from './Components/Question/Question';
import { ContectEnd } from './Components/ContectEnd/ContectEnd';

function App() {
  const [index, setIndex] = useState(0)
  const [correct, setCorect] = useState(0)
  const connect = listProducts[index]
  let smail  =  correct >= 8 ? '🥰' : correct >= 5 ? '😉' : correct >= 1 ? '😄' : correct === 0 ? '🙁' : '🙁'

  function ClickVariants(step){
    setIndex(index + 1)
    if(step === connect.correct){
      setCorect(correct + 1)
    }
  }
    return (
      <div>
      {
        index !== listProducts.length 
        ? <Question questions={connect} click={ClickVariants} quiz={index + 1}></Question> 
        : <ContectEnd cor={correct} smails={smail}></ContectEnd>}
      </div>
    )
}

export default App;
