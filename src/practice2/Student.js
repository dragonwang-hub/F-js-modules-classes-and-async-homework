import {Person} from "./Person";

export class Student extends Person {
    constructor(props, className) {
        super(props);
        this.className = className;
        this.study = this.study.bind(this);
    }

    study() {
        this.move();
        console.log(`${this.name} is studying in ${this.className}`);
    }

}
