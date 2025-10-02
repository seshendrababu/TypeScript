//Source :(PedroTech) https://www.youtube.com/watch?v=3mDny9XAgic

//first install node
//npm install -g typescript : for installing typescript
//tsc --init : will initialize it
//tsc : will compile and generate .js code
//node <filename>.js : will run .js file

//1
//Basic

let id: number = 5;
let company: string = "oracle corp";
let isPublished: boolean = true;

let ids: number[] = [1,2,3,4,5];
let x: any = "seshu";
let xArry: any[] = ["seshu", 0, true];

const concatenateValues = (a: string, b: string): string => {
    return a+b;
};

console.log(concatenateValues("Hello ", "world"));
console.log(concatenateValues("5", "10"));


//2
//Interfaces
//mostly done for objects
interface UserInterface {
    id: number;
    name: string;
    age?: number;
    greet(message:string): void;
}

//User in an object which is using UserInterface interface
const User: UserInterface= {
    id: 2,
    name: "seshu",
    //greet is a function of object
    greet(message){
        console.log(message);
    },
}

User.greet("hello");

if(!User.age){
    console.log("No age of the user");
} else{
    console.log(User.age);
}


User.age = 33;

console.log(User);

//3
//Unions
//can be of many types, done for single fields
type ID = string | number;
//const printID = (id: ID) : void => {        //or
const printID = (id: string | number) : void => {
    console.log(id);
}
printID("20");
printID(20);

//4
//Intersections
//two or more types can be intersections

interface BusinessPartner{
    name: string;
    creditscore: number;
}

interface UserIdentity{
    id: number;
    email: string;
}

type Employee = BusinessPartner & UserIdentity

const signContract = (employee: Employee): void =>{
    console.log("Contract signed by " + employee.name + " with email address " + employee.email);
}

signContract({
    name: "seshu",
    creditscore: 345,
    id: 45,
    email: "seshendra.babu@yahoo.com"
});


//5
//enums
//easy way to define a set of named constants - improved readability/usability
enum LoginError{
    Unauthorized = "unauthorized",
    NoUser = 'nouser',
    WrongCredentials = 'wrongcredentials',
    Internal = 'internal',
}

const printError = (error:LoginError) : void =>{
    if(error == LoginError.Unauthorized){
        console.log("user not authorized");
    } else if(error == LoginError.NoUser){
        console.log("user does not exist");
    } else if(error == LoginError.WrongCredentials){
        console.log("user entered wrong credentials");
    } else{
        console.log("there seems to be an internal error");
    }
};

printError(LoginError.NoUser);
printError(LoginError.Internal);


//6
//generics - important
//allows you to write flexible/reusable function and classes that can be used with diff data types
class StorageContaioner<T> {//<T> means any type of data
    private contents:T[];

    constructor() {
        this.contents = [];
    }

    addItem(item: T) : void {
        this.contents.push(item);
    }

    getItem(index: number): T | undefined {
        return this.contents[index];
    }
}

const userNames = new StorageContaioner<string>();
userNames.addItem("seshendra");
userNames.addItem("babu");
console.log(userNames.getItem(1));

const friendsCount = new StorageContaioner<number>();
friendsCount.addItem(54);
friendsCount.addItem(44);
console.log(friendsCount.getItem(0));


//7
//read-only variables

interface Colleague{
    readonly colleagueId: number;
    readonly startDate: Date;

    name: string;
    department: string;
}

const colleague: Colleague = {
    colleagueId: 123,
    startDate: new Date(),
    name: "seshu",
    department: "unemployed",
};

colleague.name = "madhavi";
console.log(colleague);