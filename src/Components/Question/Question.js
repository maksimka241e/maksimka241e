import React from "react";
import { listProducts } from '../data/data'

export function Question({questions,click,quiz}){
    return(
    <div className='Content_Block'>
      <div className='QuestionBlock'>
        <h3 className='QueationTitle'>{questions.question}</h3>
        <ul  className='QueationUl'>
          {questions.variants.map((text, index) => 
          <li  className='QueationLi' onClick={() => click(index)} key={text}>{text}</li>
          )}
        </ul>
        <div className='questionBlocks'>
          <p className='QueationText'>вопросы: {quiz}/{listProducts.length}</p>
        </div>
      </div>
    </div>
    )
}