import ExpenseItemsList from "./components/Expenses/ExpenseItemsList";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {
    const [expenses, setExpensesData] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = (expense) => {
        // setExpensesData([expense,...expenses]);
        setExpensesData((prevExpenses) => {
            return [expense, ...prevExpenses].sort();
        });
    }

  /*  const [filteredExpenses, setFilteredExpenses] = useState([]);

    const filterHandler = expenses =>{
        console.log(expenses);
        setFilteredExpenses((prevFilteredExpenses) => {
            return [expenses, ...prevFilteredExpenses];
        });
    }
*/
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <ExpenseItemsList expenses={expenses} />
        </div>
    );
}

export default App;
