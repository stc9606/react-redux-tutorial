import React, { Component } from 'react';
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <header>
                <h2><a href="#welcome" onClick={function(){
                    this.props.onClick();
                }.bind(this)}></a>WEB</h2>
                World Wide WEB
            </header>
        );
    }
}

export default connect(null,
    function(dispatch) {
        return {
            onClcik: function() {
                dispatch({type:'CHANGE_MODE', mode:'WELCOME'});
            }            
        }
    }
 )(Header);


