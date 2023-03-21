import './ExpenseItem.css'
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import {useState} from "react";

const ExpenseItem = (props) => {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className="expense-item__description">
                    <p>{props.title}</p>
                    <div className="expense-item__price">{props.amount}</div>
                </div>
            </Card>
        </li>
    )
}


export default ExpenseItem