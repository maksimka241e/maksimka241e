import React from 'react';
import { useState } from 'react';
import './App.css';
import { listProducts } from './data'

function Question({questions,click,quiz}){
  return(
<div className='Content_Block'>
  <div className='QuestionBlock'>
    <h3 className='QueationTitle'>{questions.question}</h3>
    <ul  className='QueationUl'>
      {questions.variants.map((text, index) => 
      <li  className='QueationLi' onClick={() => click(index)} key={text}>{text}</li>
      )}
    </ul>
    <p  className='QueationText'>вопросы: {quiz}/{listProducts.length}</p>
  </div>
</div>
  )
}

function ContectEnd({cor}){
  return(
  <div className='correstBlock'>
    <div className='correstBlock_content'>
    <h3 className='correstSmail'>😄</h3>
    <h3 className='correstTitle'>вы ответили правильно {cor} из {listProducts.length}</h3>
    <a href='/' className='correstA'>Попробовать снова</a>
  </div>
  </div>
  )
}


function App() {
  const [index, setIndex] = useState(0)
  const [correct, setCorect] = useState(0)
  const connect = listProducts[index]

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
        : <ContectEnd cor={correct}></ContectEnd>}
      </div>
    )
}


export default App;
