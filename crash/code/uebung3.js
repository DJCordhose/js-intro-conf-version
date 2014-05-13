"use strict";

/**
 * @constructor
 */
function Person(name, alter, geschlecht) {
    this.name = name;
    this.alter = alter;
    this.geschlecht = geschlecht;
}

Person.prototype.getName = function () {
    return this.name;
};

Person.prototype.log = function () {
    var info = "Alter von " + this.name + ": " + this.alter;
    console.log(info);
};

Person.prototype.toString = function () {
    return "Olli war hier";
};

var opa = new Person("Opa", 88, "M");
console.log(opa + "");
