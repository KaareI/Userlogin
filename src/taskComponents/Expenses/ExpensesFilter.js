import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const [selectedFilter, setSelectedFilter] = useState("All");

    const filterChangeHandler = (event) =>{
        setSelectedFilter(event.target.value);
        props.onChangeFilter(event.target.value);
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by priority</label>
                <select value={selectedFilter} onChange={filterChangeHandler}>
                    <option value='All'>All</option>
                    <option value='Low'>Low</option>
                    <option value='Medium'>Medium</option>
                    <option value='High'>High</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
