var utilmodule = {};
(function () {
    "use strict";
    function _extends(_sub, _super) {
        _sub.prototype = Object.create(_super.prototype);
        _sub.prototype.constructor = _sub;
    }
    utilmodule._extends = _extends;
})();

var personmodule = {};
(function (utilmodule) {
    "use strict";
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

    function Customer(name, alter, geschlecht) {
        Person.apply(this, arguments);
        this.preferredArticle = alter > 40 ? 'Galaxy Note' : 'iPhone';
    }
    utilmodule._extends(Customer, Person);

    Customer.prototype.shop = function() {
        console.log("Shopping: " + this.preferredArticle);
    };

    Customer.prototype.getName = function() {
        // super call
        return "Dear " + Person.prototype.getName.call(this);
    };

    personmodule.Customer = Customer;
})(utilmodule);


//das geht nicht wegen Sichtbarkeit
// var oma = new personmodule.Person('Oma', 88, "W");
var olli = new personmodule.Customer('Olli', 42, "M");
console.log(olli.getName() === 'Dear Olli');
olli.shop();

var chris = new personmodule.Customer('Chris', 25, "M");
console.log(chris.getName() === 'Dear Chris');
chris.shop();
