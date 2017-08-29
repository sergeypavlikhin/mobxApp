import { observable, computed, action } from 'mobx';

export default class Python{

    @observable body = [];
    direction = 'RIGHT';
    validator = {};

    constructor(body, validator){
        this.validator = validator;
        body.forEach((item) => {
            this.body.push(item)
        });
    }

    @action tick() {
        this.body.forEach((item) => {

            //Get current coords
            let currentCoordX = item.x;
            let currentCoordY = item.y;

            let deltaX = 0;
            let deltaY = 0;

            //Define delta
            switch (this.direction){
                case "RIGHT":
                    deltaX = 1;
                    break;
                case "LEFT":
                    deltaX = -1;
                    break;
                case "TOP":
                    deltaY = -1;
                    break;
                case "BOTTOM":
                    deltaY = 1;
                    break;
            }

            //Modify coords
            let newCoordX = this.validator.validateX(currentCoordX + deltaX);
            let newCoordY = this.validator.validateY(currentCoordY + deltaY);

            item.x = newCoordX;
            item.y = newCoordY;

        });

    }

}