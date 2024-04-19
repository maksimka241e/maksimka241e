import React from "react";
import { listProducts } from '../data/data'

export function ContectEnd({cor,smails}){
    return(
    <div className='correstBlock'>
      <div className='correstBlock_content'>
      <h3 className='correstSmail'>{smails}</h3>
      <h3 className='correstTitle'>вы ответили правильно {cor} из {listProducts.length}</h3>
      <a href='/' className='correstA'>Попробовать снова</a>
    </div>
    </div>
    )
  }