import Read from '../component/Read';
import { connect } from 'react-redux';

export default connect(
    function(state) {
        var title, desc;        
        
        if(state.mode === 'WELCOME'){
            title = state.welcome_content.title;
            desc = state.welcome_content.desc;
        }else {                       
            for(var j=0; j<state.contents.length; j++){
                var d = state.contents[j];
                console.log("data ID " ,d.id + "--index: "+ j);
                console.log('state ID ', state.selected_content_id+"--index: "+ j);                
                if(d.id === state.selected_content_id) {                      
                    title = d.title;
                    desc = d.desc;
                    break;
                }
            }    
        }
        return {
            title: title,
            desc: desc
        }
    }
)(Read);
