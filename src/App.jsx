import React from 'react'
import ReactDOM from 'react-dom'

import {autorun, observable, computed, action} from "mobx"
import { observer } from 'mobx-react';

class Todo{

    @observable name = "";
    @observable duration = 0;

    constructor(name, duration){
        this.name = name;
        this.duration = duration;
    }

    toString(){
        return `Todo:[name: ${this.name}, duration: ${this.duration} ]`;
    }
}

class TodoList {

    @observable store = [];

    get report(){
        return this.store.reduce((init, current) => init + "\n" + current.toString());
    }

    @action
    add(todo) {
        this.store.push(todo);
    }

}


let list = new TodoList;
list.add(new Todo("work", "8h"));

@observer
class App extends React.Component {
    render(){
        const store = this.props.store;
        return (
            <div>
                <div>
                    { store.store.map((item) => <TodoView todo={ item } key={item.name}/>)}
                </div>
                <button onClick={ this.onNewTodo }>CLIKME</button>
            </div>

        );
    }
    onNewTodo = () => {
        this.props.store.add(new Todo(prompt('Enter a new todo:','coffee plz'), "6H"));
    }
}

@observer
class TodoView extends React.Component {
    render() {
        return (<div onDoubleClick={ this.xuyName }>
                    { this.props.todo.duration }
                </div>);
    }
    xuyName = () => {
        this.props.todo.duration = this.props.todo.duration + "XUY";
    }
}
ReactDOM.render(<App store={ list } />, document.getElementById('app'));