import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import {addExpense, editExpense, removeExpense } from './actions/expenses';
import {setTextFilter, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({ description: 'water bill', amount: 500 }));
const expenseTwo = store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'rent', amount: 10500, createdAt: 5000 }));

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));