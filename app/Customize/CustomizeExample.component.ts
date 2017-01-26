
import { Component, OnInit } from '@angular/core';
import { Person } from './../MockData/Person.class';

@Component({
    moduleId: module.id,
    selector: 'customize-example',
    templateUrl: './CustomizeExample.component.html'
})
export class CustomizeExampleComponent {
   public allPeople: Array<Person>;
    public people: Array<Person>;

    constructor() {
        this.allPeople = [];

        for (var i = 1;i< 101;i++){
            var person = Person.create();
            person.id = i;
            this.allPeople.push(person);
        }
    }
}