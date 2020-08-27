import Control from '../component/Control';
import { connect } from 'react-redux';

export default connect(
    function(state){
        return {}
    },
    function(dispatch){
        return {
            onClick: function(mode){
                if(mode === 'DELETE_PROCESS'){
                    if(!window.confirm('Really?')){
                        return {};
                    }
                }                
                dispatch({type:mode});
            }
        }
    }
)(Control);