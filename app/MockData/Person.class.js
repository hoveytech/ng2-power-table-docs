"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    static create() {
        var p = new Person();
        p.firstName = chance.first();
        p.lastName = chance.last();
        p.id = chance.natural({ min: 5000, max: 6000 });
        p.age = chance.age();
        return p;
    }
}
exports.Person = Person;
//# sourceMappingURL=Person.class.js.map