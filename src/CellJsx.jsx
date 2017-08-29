import React from 'react'
import { observer } from 'mobx-react'

@observer
export default class CellJsx extends React.Component{
    render(){
        let classNameCell = 'python-cell';
        if (this.props.active) {
            classNameCell += ' active'
        }
        return (
            <div className={ classNameCell }>

            </div>
        );
    }
}