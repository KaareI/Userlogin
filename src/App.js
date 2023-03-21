import React, {useState, Fragment} from "react";
import './App.css';
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";
import ExpenseItem from "./taskComponents/Expenses/ExpenseItem";
import ExpenseDate from "./taskComponents/Expenses/ExpenseDate";
import Expenses from "./taskComponents/Expenses/Expenses";
import NewExpense from "./taskComponents/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        date: new Date(2024, 0, 10),
        title: 'New book',
        price: 'Medium'
    },
    {
        id: 'e2',
        date: new Date(2024, 0, 10),
        title: 'New jacket',
        price: 'Medium'
    }
]

function App() {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpensehandler = (expense) => {
        setExpenses((previousExpenses) => {
            return [expense, ...previousExpenses]
        })
    }

    const [users, setUsers] = useState([])

    const onAddUserHandler = (username, age) => {
        setUsers((prevUsers) => {
            return [
                ...prevUsers,
                {
                    id: Math.random().toString(),
                    name: username,
                    age: age
                }
            ]
        })
    }

    return (
        <>
            <Fragment>
                <AddUser onAddUser={onAddUserHandler}/>
                <UsersList users={users}/>
            </Fragment>
            <div className="App">
                {   users.length !== 0 &&
                    <NewExpense onAddExpense={addExpensehandler}></NewExpense>
                }
                <Expenses expenses={expenses}></Expenses>
            </div>
        </>
    );

}

export default App;
