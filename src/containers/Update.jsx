import Update from '../component/Update';
import { connect } from 'react-redux';
export default connect(
    function(state){
        var title, desc, id;
        for(var j=0; j<state.contents.length; j++){
            var d = state.contents[j];                           
            if(d.id === state.selected_content_id) {                      
                title = d.title;
                desc = d.desc;
                id = d.id;
                break;
            }
        }    
        return {
            title: title,
            desc: desc,
            id : id
        }
    },
    function(dispatch){
        return {            
            onSubmit: function(id, title, desc){
                dispatch({type:'UPDATE_PROCESS', id, title, desc});
            }
        }
    }

)(Update)