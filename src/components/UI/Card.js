import './Card.css';
import '../Expenses/ExpenseItemList.css';
function Card(props){
  const classes = `card ${props.className}`;
  return (<div className={ classes }>{props.children}</div>);
}

export default  Card;