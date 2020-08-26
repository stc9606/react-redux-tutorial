import Article from '../component/Article';
import { connect } from 'react-redux';

export default connect(
    function(state) {
        var title, desc;        
        if(state.mode === 'WELCOME'){
            title = state.welcome_content.title;
            desc = state.welcome_content.desc;
        }else {            
            for(var i=0; i<state.contents.length; i++){
                var data = state.contents[i];
                console.log(state.selected_content_id)
                if(data.id === state.selected_content_id) {
                    console.log(data);      
                    title = data.title;
                    desc = data.desc;
                    break;
                }
            }    
        }
                return {
            title: title,
            desc: desc
        }
    }


)(Article);
