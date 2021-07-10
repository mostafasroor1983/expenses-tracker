import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './ExpenseItemList.css';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';

function ExpenseItemsList(props) {

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };
    return (<Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {props.expenses.map(expense => <ExpenseItem key={expense.id} expense={expense}/>)}
    </Card>);
}

export default ExpenseItemsList;