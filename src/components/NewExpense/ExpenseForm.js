import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    /*const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });*/
    const titleChangedHandler = (event) => {
        setTitle(event.target.value);
        /* setUserInput((prevState) => {
             return {...prevState, title: event.target.value};
         });*/
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        /*setUserInput((prevState) => {
            return {...prevState, amount: event.target.value};
        });*/
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        /*setUserInput((prevState) => {
            return {...prevState, date: event.target.value};
        });*/
    }

    const submitHandler = (event) => {
        const expenseData = {title: title, date: new Date(date), amount: +amount};
        props.onSaveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
        event.preventDefault();

    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangedHandler}/>
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>


                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={date} min="2019-01-01" max="2021-12-31" onChange={dateChangeHandler}/>
                </div>
                <div className="new-expense__actions">
                    <button type="Submit">Add Expense</button>
                </div>
            </div>
        </form>);
}

export default ExpenseForm;