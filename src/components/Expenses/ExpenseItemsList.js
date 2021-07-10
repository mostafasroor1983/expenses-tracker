import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './ExpenseItemList.css';

function ExpenseItemsList(props) {
    return (<Card className="expenses">
                 {props.expenses.map(expense => <ExpenseItem expense={expense}/>)}
           </Card>);
}

export default ExpenseItemsList;