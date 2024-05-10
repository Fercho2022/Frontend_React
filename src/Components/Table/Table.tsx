import React from 'react'

import { testIncomeStatementData } from './testData';

const data= testIncomeStatementData;

type Props = {}

type Company = (typeof data)[0];

const config= [
  {
    label:"Year",
    render:(company:Company)=>company.acceptedDate
  },
  {
    label:"Cost of Revenue",
    render:(company:Company)=>company.costOfRevenue
  }
]

const Table = (props: Props) => {
  const renderedRow=data.map((company)=>{
    return (
      <tr key={company.cik}>
        <td></td>
      </tr>
    )
  })
  return (
    <div>Table</div>
  )
}

export default Table