import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';

function ExpenseItem(props) {
    const title = props.expense.title;
    const expensePrice = props.expense.amount;
    const expenseDate = props.expense.date;
    return (<Card  className="expense-item">
        <ExpenseDate expenseDate={expenseDate}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{expensePrice}</div>
        </div>
    </Card>);
}

export default ExpenseItem;