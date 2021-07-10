import ExpenseItem from "./ExpenseItem";


function ExpenseItemsList(props){
    return props.expenses.map(expense => <ExpenseItem expense={expense}/>);
}

export  default  ExpenseItemsList;