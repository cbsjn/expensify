import moment from 'moment';

export default [{
    id: '1',
    description: 'first item',
    note: '',
    amount: 200,
    createdAt: 0
},{
    id: '2',
    description: 'second item',
    note: '',
    amount: 400,
    createdAt: moment(0).add(4, 'days').valueOf()
},{
    id: '3',
    description: 'third item',
    note: '',
    amount: 600,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}]