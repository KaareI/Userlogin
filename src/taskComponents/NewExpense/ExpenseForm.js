import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('Low');
    const [enteredDate, setEnteredDate] = useState('');
    const [prevTitle, setPrevTitle] = useState('');
    const [prevAmount, setPrevAmount] = useState('');
    const [prevDate, setPrevDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle !== '' ? enteredTitle : prevTitle,
            price: enteredAmount !== '' ? enteredAmount : prevAmount,
            date: enteredDate !== '' ? new Date(enteredDate) : new Date(prevDate),
        };
        setPrevTitle(expenseData.title);
        setPrevAmount(expenseData.price);
        setPrevDate(expenseData.date);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpenseData(expenseData);
    };


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>New Task</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2023-01-18" max="2025-12-31" onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Select task priority</label>
                    <select onChange={amountChangeHandler}>
                        <option value='Low'>Low</option>
                        <option value='Medium'>Medium</option>
                        <option value='High'>High</option>
                    </select>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Task</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
