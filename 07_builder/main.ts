
interface Builder{
    add_separator(): void;
    add_data(data: string): void;
    get_result(): string
}

class DollSeparatedCommandBuilder implements Builder {
    private command: string = ""
    add_separator(): void {
        this.command += "$"
    }
    add_data(data: string): void {
        this.command += data
    }
    get_result(): string {
        return this.command
    }
}

class SharpSeparatedCommandBuilder implements Builder {
    private command: string = ""
    add_separator(): void {
        this.command += "#"
    }
    add_data(data: string): void {
        this.command += data
    }
    get_result(): string {
        return this.command
    }
}

class Director {
    private command_builder: Builder;
    constructor (builder: Builder) {
        this.command_builder = builder;
    }
    construct(): string {
        this.command_builder.add_data("PowerOn");
        this.command_builder.add_separator();
        this.command_builder.add_data("Start");
        this.command_builder.add_separator();
        this.command_builder.add_data("Stop");
        this.command_builder.add_separator()
        this.command_builder.add_data("PowerOff");
        return this.command_builder.get_result();
    }
}


let dsv_builder = new DollSeparatedCommandBuilder()
let command_director = new Director(dsv_builder) 
let ret = command_director.construct()
console.log(ret)

let ssv_builder = new SharpSeparatedCommandBuilder()
command_director = new Director(ssv_builder) 
ret = command_director.construct()
console.log(ret)




// // let message: string = "Hello World!"
// // document.body.innerHTML(message)

// //main.ts
// class User {
//     constructor( public name: string) {}
//   }
  
//   const u = new User("taro");
//   console.log(u.name);

