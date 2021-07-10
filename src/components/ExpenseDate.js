function ExpenseDate(props) {
    const expenseDate = props.expenseDate;
    let month = expenseDate.toLocaleString("en-US", {month: 'long'});
    let day = expenseDate.toLocaleString("en-US", {day: '2-digit'});
    let year = expenseDate.getFullYear();

    return (<div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
    </div>);
}

export default ExpenseDate;