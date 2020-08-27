import {createStore} from 'redux';

let initState = {
    mode: 'WELCOME',
    selected_content_id: 1,
    max_content_id: 3,
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
        return {...state, mode:'READ', selected_content_id: action.id}
    }
    if(action.type === 'CREATE'){
        return {...state, mode:action.type}
    }
    if(action.type === 'CREATE_PROCESS'){
        var newId = state.max_content_id+1
        var newContents = [
            ...state.contents,
            {id: newId, title:action.title, desc:action.desc}
        ];
        return {...state, mode:'READ', selected_content_id: newId, contents: newContents, max_content_id: newId}
    }
    if(action.type === 'UPDATE'){
        return {...state, mode:action.type}
    }
    if(action.type === 'UPDATE_PROCESS'){
        var newContents = [
            ...state.contents            
        ];
        for(var i=0; i<newContents.length; i++){
            if(newContents[i].id === action.id){
                newContents[i].title = action.title;
                newContents[i].desc = action.desc;            
            }
        }
        return {...state, mode:'READ', contents:newContents, selected_content_id:action.id }
    }
    if(action.type === 'DELETE_PROCESS'){
        var newContents = state.contents.filter(function(e){
            console.log(e);
            if(e.id === state.selected_content_id){
                return false;
            }
            return true;

        })
        return {
            ...state,
            contents: newContents,
            mode:'WELCOME'
        }
    }

    return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
