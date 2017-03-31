"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const Person_class_1 = require("./../MockData/Person.class");
const ng2_power_table_1 = require("ng2-power-table/ng2-power-table");
let CustomizeExampleComponent = class CustomizeExampleComponent {
    constructor() {
        this.configuration = ng2_power_table_1.DefaultConfiguration.create();
        this.configuration.ascendingCssClass = 'pt-sort-asc-custom';
        this.configuration.descendingCssClass = 'pt-sort-desc-custom';
        this.allPeople = [];
        for (var i = 1; i < 101; i++) {
            var person = Person_class_1.Person.create();
            person.id = i;
            this.allPeople.push(person);
        }
    }
};
CustomizeExampleComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'customize-example',
        templateUrl: './CustomizeExample.component.html',
        styleUrls: ['./CustomizeExample.css']
    }),
    __metadata("design:paramtypes", [])
], CustomizeExampleComponent);
exports.CustomizeExampleComponent = CustomizeExampleComponent;
//# sourceMappingURL=CustomizeExample.component.js.map