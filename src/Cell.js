import { observable, computed, action } from 'mobx';
export default class Cell {
    @observable x = 0;
    @observable y = 0;

    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}