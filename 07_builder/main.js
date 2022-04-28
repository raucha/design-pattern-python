var DollSeparatedCommandBuilder = /** @class */ (function () {
    function DollSeparatedCommandBuilder() {
        this.command = "";
    }
    DollSeparatedCommandBuilder.prototype.add_separator = function () {
        this.command += "$";
    };
    DollSeparatedCommandBuilder.prototype.add_data = function (data) {
        this.command += data;
    };
    DollSeparatedCommandBuilder.prototype.get_result = function () {
        return this.command;
    };
    return DollSeparatedCommandBuilder;
}());
var SharpSeparatedCommandBuilder = /** @class */ (function () {
    function SharpSeparatedCommandBuilder() {
        this.command = "";
    }
    SharpSeparatedCommandBuilder.prototype.add_separator = function () {
        this.command += "#";
    };
    SharpSeparatedCommandBuilder.prototype.add_data = function (data) {
        this.command += data;
    };
    SharpSeparatedCommandBuilder.prototype.get_result = function () {
        return this.command;
    };
    return SharpSeparatedCommandBuilder;
}());
var Director = /** @class */ (function () {
    function Director(builder) {
        this.command_builder = builder;
    }
    Director.prototype.construct = function () {
        this.command_builder.add_data("PowerOn");
        this.command_builder.add_separator();
        this.command_builder.add_data("Start");
        this.command_builder.add_separator();
        this.command_builder.add_data("Stop");
        this.command_builder.add_separator();
        this.command_builder.add_data("PowerOff");
        return this.command_builder.get_result();
    };
    return Director;
}());
var dsv_builder = new DollSeparatedCommandBuilder();
var command_director = new Director(dsv_builder);
var ret = command_director.construct();
console.log(ret);
var ssv_builder = new SharpSeparatedCommandBuilder();
command_director = new Director(ssv_builder);
ret = command_director.construct();
console.log(ret);
// // let message: string = "Hello World!"
// // document.body.innerHTML(message)
// //main.ts
// class User {
//     constructor( public name: string) {}
//   }
//   const u = new User("taro");
//   console.log(u.name);
