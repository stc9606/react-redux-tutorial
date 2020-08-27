import React, { Component } from 'react';

export default class Nav extends Component {
    render() {
        var tags = [];
        for(var i=0; i<this.props.data.length; i++){
            var _data = this.props.data[i];
            tags.push(<li key={_data.id}><a href="#" data-id={_data.id} onClick={function(e){
                console.log(Number(e.target.dataset.id))
                this.props.onClick(Number(e.target.dataset.id));
            }.bind(this)}>{_data.title}</a></li>)
        }
        return (
            <nav>
                <ol>
                   {tags}                
                </ol>
            </nav>
        );
    }
}

