import React from 'react'
import './Expense.css'
const ExpenseItem = (props) => {
  return (

            <div className='expense-item'>
                <div>{props.item.date.toISOString()}</div>
                <div className='expense-item_description'>
                    <h2> {props.item.title}</h2>
                    <div className= 'expense-item_price'>${props.item.amount}</div>
                </div>
            </div>


    )
}

export default ExpenseItem;