import {createStore} from 'redux';

let initState = {
    mode: 'WELCOME',
    selected_content_id: 1,
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
    if(action.type === 'WELCOME') {
        return {...state, mode:'WELCOME'};
    }
    if(action.type === 'READ'){
        return {...state, mode:'READ', selected_conten_id: action.id}
    }

    return state;
}

export default createStore(reducer);
