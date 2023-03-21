import './Expenses.css'
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
    const [filteredPrice, setFilteredPrice] = useState("All");

    const filterChangeHandler = (price) => {
        setFilteredPrice(price);
    };

    const filteredExpenses =
        filteredPrice === "All"
            ? props.expenses
            : props.expenses.filter(expense => expense.price === filteredPrice);

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredPrice}
                onChangeFilter={filterChangeHandler}
            ></ExpensesFilter>
            <ExpensesList filteredExpenses={filteredExpenses}></ExpensesList>
        </Card>
    );
};


export default Expenses