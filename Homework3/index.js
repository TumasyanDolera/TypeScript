var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Company = /** @class */ (function () {
    function Company(name) {
        this.name = name;
        this.ceo = [];
        this.projectManagers = [];
        this.programmers = [];
    }
    Company.prototype.addProgrammer = function (Programmer) {
        return this.programmers.push(Programmer);
    };
    Company.prototype.addprojectManagers = function (Projectmanager) {
        return this.projectManagers.push(Projectmanager);
    };
    Company.prototype.addCeo = function (Ceo) {
        return this.ceo.push(Ceo);
    };
    return Company;
}());
var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    return Human;
}());
var Ceo = /** @class */ (function (_super) {
    __extends(Ceo, _super);
    function Ceo(name, age, tasks) {
        var _this = _super.call(this, name, age) || this;
        _this.tasks = tasks;
        _this.programmer = [];
        _this.pmanager = [];
        return _this;
    }
    Ceo.prototype.addProgrammer = function (Programmer) {
        return this.programmer.push(Programmer);
    };
    Ceo.prototype.addPm = function (Projectmanager) {
        return this.pmanager.push(Projectmanager);
    };
    return Ceo;
}(Human));
var Projectmanager = /** @class */ (function (_super) {
    __extends(Projectmanager, _super);
    function Projectmanager(name, age, projects) {
        var _this = _super.call(this, name, age) || this;
        _this.projects = projects;
        _this.programmer = [];
        return _this;
    }
    Projectmanager.prototype.addProgrammer = function (programmer1) {
        return this.programmer.push(programmer1);
    };
    return Projectmanager;
}(Human));
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name, age, profession) {
        var _this = _super.call(this, name, age) || this;
        _this.profession = profession;
        return _this;
    }
    return Programmer;
}(Human));
var Ceo1 = new Ceo("Kate", 77, "Redux");
var Company1 = new Company("Programmer Company");
var programmer1 = new Programmer("Karen", 88, "Developer");
var pm1 = new Projectmanager("Davit", 33, "ToDo");
Ceo1.addProgrammer(programmer1);
console.log(Ceo1.programmer);
Ceo1.addPm(pm1);
console.log(Ceo1.pmanager);
Company1.addProgrammer(programmer1);
console.log(Company1.programmers);
Company1.addCeo(Ceo1);
console.log(Company1.ceo);
Company1.addprojectManagers(pm1);
console.log(Company1.projectManagers);
