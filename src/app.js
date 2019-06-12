import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import {addExpense } from './actions/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 500 }));
store.dispatch(addExpense({ description: 'gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'rent', amount: 10500, createdAt: 5000 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));