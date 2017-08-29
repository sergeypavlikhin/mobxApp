import React from 'react'
import ReactDOM from 'react-dom'

import Field from './Field'
import CellJsx from './CellJsx';
import Cell from './Cell.js';
import Python from './Python';

import {autorun, observable, computed, action} from "mobx"
import { observer } from 'mobx-react';

const WIDTH = 10;
const HEIGHT = 10;

let python = new Python([new Cell(2, 0)], {
    validateX: (x) => x,
    validateY: (y) => y
});

let field = [];
for (let i = 0; i < HEIGHT; i++) {
    let row = [];
    for (let j = 0; j < WIDTH; j++) {
        row.push(<CellJsx key={ i + "_" + j }/>)
    }
    field.push(row);
}

setInterval(() => {
    python.tick()
}, 1000);

@observer
class App extends React.Component {
    render(){

        this.props.python.body.forEach((item) => {
            console.log(field[item.y][item.x]);
            let old = field[item.y][item.x];
            field[item.y][item.x] = <CellJsx {...old.props} active={true}/>;
        } );

        return (
            <div className="field">
                <Field width={WIDTH} height={HEIGHT} activeCells={field}/>
            </div>
        );
    }
}


ReactDOM.render(<App python={ python } />, document.getElementById('app'));