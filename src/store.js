import {createStore} from 'redux';

let initState = {
    mode: 'READ',
    selected_conten_id: 1,
    welcome_content: {
        title: 'WEB',
        desc: 'Hello, WEB'
    },
    contents: [
        {id:1, title:'HTML', desc:'HTML is ...'},
        {id:2, title:'CSS', desc:'CSS is ...'},
        {id:3, title:'JavaScript', desc:'JavaScript is ...'}
    ]
}
function reducer(state=initState, action){

    return state;
}

export default createStore(reducer);
