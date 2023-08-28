import React from 'react';

import Promotion from './Promotion';
import CreditCard from './CreditCard';
import withOpen from './hocs/withOpen';

// import NameList from './NameList';
// import TodoList from './TodoList';

import withNames from './hocs/withNames';
import withTodo from './hocs/withTodo';
import List from './List';

const PromotionWithOpen = withOpen(Promotion);
const CreditCardWithOpen = withOpen(CreditCard);

const NameList = withNames(List);
const TodoList = withTodo(List);

const App = () => {
    return (
        // <div>
        //      <Promotion/>
        //     <CreditCard/>
        // </div>
        <div>
            <PromotionWithOpen/>
            <CreditCardWithOpen/>
            <hr />
            <NameList/>
            <TodoList/>
        </div>
    )
}

export default App;