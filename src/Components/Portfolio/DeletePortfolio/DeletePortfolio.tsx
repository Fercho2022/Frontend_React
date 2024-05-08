import React, { BaseSyntheticEvent } from 'react'

interface Props {
    onPortfolioDelete: (e:BaseSyntheticEvent)=>void;
    portfolioValue:string;
}

const DeletePortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
  return (
    <div>
       <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue} />
        <button>X</button>
        </form>    
       
    </div>
  )
}

export default DeletePortfolio