'use strict';
import {autorun, observable, computed, action, observer} from "mobx"

class Todo{

    name = "";
    duration = 0;

    constructor(name, duration){
        this.name = name;
        this.duration = duration;
    }

    toString(){
        return `Todo:[name: ${this.name}, duration: ${this.duration} ]`;
    }
}

class TodoList {

    todos = observable([]);

    constructor(){
        autorun(()=> console.log(this.report));
    }

    get report(){
        if (this.todos.length === 0 ){
            return "<none>";
        }
        return this.todos.reduce((init, current) => init + "\n" + current.toString());
    }

    add(todo) {
        this.todos.push(todo);
    }

}


let list = new TodoList;
let td1 = new Todo("work", "8H");
list.add(td1);
console.log("------------");
list.todos[0].name = "LoL";
// list.add(td1);