import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './ExpenseItemList.css';
import ExpensesFilter from './ExpensesFilter';
import React, { useState } from 'react';
import ExpensesChart from "./ExpensesChart";

function ExpenseItemsList(props) {

    const [filteredYear, setFilteredYear] = useState('2020');
    const filteredExpenses = props.expenses.filter((expense)=> expense.date.getFullYear().toString() === filteredYear);

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (<Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpensesChart expenses={filteredExpenses} />
        {filteredExpenses.length === 0  ?
            <p>No Data Found .</p>  :
            filteredExpenses.map(expense => <ExpenseItem key={expense.id} expense={expense}/>)}
    </Card>);
}

export default ExpenseItemsList;