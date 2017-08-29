import React from 'react';
import { observer } from 'mobx-react';

export default class Field extends React.Component{
    render(){
        return (
            <div>
                {this.props.activeCells}
            </div>
        );
    }
}