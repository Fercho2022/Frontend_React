import React from 'react'
import StockCommentForm from './StockCommentForm/StockCommentForm';

type Props = {
  stockSymbol:string;
}

type CommentFormInputs={
  title:string;
  content:string;
}

const StockComment = ({stockSymbol}: Props) => {

  const handleComment =(form:CommentFormInputs)=>{
    
  }
  

  return (
    <StockCommentForm symbol={stockSymbol} HandleComment={handleComment}/>
  )
}

export default StockComment