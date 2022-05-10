import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className = "expense-item">
      <div>Jan 20th</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$299.00</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
