"use strict";
//Source :(PedroTech) https://www.youtube.com/watch?v=3mDny9XAgic
Object.defineProperty(exports, "__esModule", { value: true });
//first install node
//npm install -g typescript : for installing typescript
//tsc --init : will initialize it
//tsc : will compile and generate .js code
//node <filename>.js : will run .js file
//1
//Basic
let id = 5;
let company = "oracle corp";
let isPublished = true;
let ids = [1, 2, 3, 4, 5];
let x = "seshu";
let xArry = ["seshu", 0, true];
const concatenateValues = (a, b) => {
    return a + b;
};
console.log(concatenateValues("Hello ", "world"));
console.log(concatenateValues("5", "10"));
//User in an object which is using UserInterface interface
const User = {
    id: 2,
    name: "seshu",
    //greet is a function of object
    greet(message) {
        console.log(message);
    },
};
User.greet("hello");
if (!User.age) {
    console.log("No age of the user");
}
else {
    console.log(User.age);
}
User.age = 33;
console.log(User);
//const printID = (id: ID) : void => {        //or
const printID = (id) => {
    console.log(id);
};
printID("20");
printID(20);
const signContract = (employee) => {
    console.log("Contract signed by " + employee.name + " with email address " + employee.email);
};
signContract({
    name: "seshu",
    creditscore: 345,
    id: 45,
    email: "seshendra.babu@yahoo.com"
});
//5
//enums
//easy way to define a set of named constants - improved readability/usability
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["NoUser"] = "nouser";
    LoginError["WrongCredentials"] = "wrongcredentials";
    LoginError["Internal"] = "internal";
})(LoginError || (LoginError = {}));
const printError = (error) => {
    if (error == LoginError.Unauthorized) {
        console.log("user not authorized");
    }
    else if (error == LoginError.NoUser) {
        console.log("user does not exist");
    }
    else if (error == LoginError.WrongCredentials) {
        console.log("user entered wrong credentials");
    }
    else {
        console.log("there seems to be an internal error");
    }
};
printError(LoginError.NoUser);
printError(LoginError.Internal);
//6
//generics - important
//allows you to write flexible/reusable function and classes that can be used with diff data types
class StorageContaioner {
    contents;
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(index) {
        return this.contents[index];
    }
}
const userNames = new StorageContaioner();
userNames.addItem("seshendra");
userNames.addItem("babu");
console.log(userNames.getItem(1));
const friendsCount = new StorageContaioner();
friendsCount.addItem(54);
friendsCount.addItem(44);
console.log(friendsCount.getItem(0));
const colleague = {
    colleagueId: 123,
    startDate: new Date(),
    name: "seshu",
    department: "unemployed",
};
colleague.name = "madhavi";
console.log(colleague);
//# sourceMappingURL=tutorial.js.map